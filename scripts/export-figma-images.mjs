import { mkdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";

const CHANNEL = process.env.FIGMA_CHANNEL || "fqghhxj7";
const OUT_DIR = new URL("../public/work/allies-of-skin/", import.meta.url);

const exports = [
  { nodeId: "106:83", file: "featured.jpg" },
  { nodeId: "106:129", file: "showcase-1.jpg" },
  { nodeId: "106:131", file: "showcase-2.jpg" },
  { nodeId: "106:240", file: "showcase-3.jpg" },
  { nodeId: "106:243", file: "showcase-4.jpg" },
  { nodeId: "106:249", file: "photography-1.jpg" },
  { nodeId: "106:251", file: "photography-2.jpg" },
  { nodeId: "106:255", file: "photography-3.jpg" },
  { nodeId: "106:150", file: "campaign-hero.jpg" },
];

await mkdir(OUT_DIR, { recursive: true });

const ws = new WebSocket("ws://localhost:3055");
const pending = new Map();

function send(command, params = {}) {
  const id = randomUUID();
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(
      JSON.stringify({
        id,
        type: "message",
        channel: CHANNEL,
        message: { id, command, params: { ...params, commandId: id } },
      })
    );
    setTimeout(() => {
      if (pending.has(id)) {
        pending.delete(id);
        reject(new Error(`Timeout waiting for ${command}`));
      }
    }, 30000);
  });
}

ws.addEventListener("open", async () => {
  ws.send(JSON.stringify({ type: "join", channel: CHANNEL }));
  await new Promise((r) => setTimeout(r, 500));

  for (const item of exports) {
    try {
      const result = await send("export_node_as_image", {
        nodeId: item.nodeId,
        format: "JPG",
        scale: 2,
      });
      const imageData = result?.imageData || result?.image || result?.data;
      if (!imageData) {
        console.warn(`No image data for ${item.file}`, result);
        continue;
      }
      const base64 = imageData.replace(/^data:image\/\w+;base64,/, "");
      await writeFile(new URL(item.file, OUT_DIR), Buffer.from(base64, "base64"));
      console.log(`Saved ${item.file}`);
    } catch (err) {
      console.error(`Failed ${item.file}:`, err.message);
    }
  }

  ws.close();
  process.exit(0);
});

ws.addEventListener("message", (event) => {
  const payload = JSON.parse(event.data);
  if (payload.type === "broadcast" && payload.message?.id) {
    const { id, result, error } = payload.message;
    const entry = pending.get(id);
    if (!entry) return;
    pending.delete(id);
    if (error) entry.reject(new Error(error));
    else entry.resolve(result);
  }
});

ws.addEventListener("error", (err) => {
  console.error(err);
  process.exit(1);
});
