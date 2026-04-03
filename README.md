# Inception Creative — Developer Guide

Beauty branding agency website built with Next.js 16, React 19, and Tailwind CSS v4.

---

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Inter, Cormorant Garamond, Crimson Text (Google Fonts) |
| Deployment | Vercel (auto-deploy on push to `main`) |
| Design source | Figma via Talk To Figma MCP |

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

The WebSocket bridge for Figma MCP must be running separately when using the agent to read Figma designs:

```bash
bunx cursor-talk-to-figma-socket   # keep this terminal open
```

---

## Project Structure

```
inception-creative/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata
│   ├── globals.css             # Tailwind import + CSS variables
│   ├── page.tsx                # Homepage (/)
│   ├── work/
│   │   └── page.tsx            # Work page (/work)
│   └── components/
│       ├── Header.tsx          # Sticky/overlay nav with Services dropdown
│       ├── Hero.tsx            # Full-screen hero with background image
│       ├── Footer.tsx          # 4-column footer
│       └── FeaturedWork.tsx    # Interactive project toggle (client component)
└── public/
    ├── hero.jpg                # Hero background image (export from Figma)
    └── work/                   # Project images (see below)
```

---

## Fonts

Three typefaces are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:

| Variable | Font | Used for |
|----------|------|----------|
| `var(--font-inter)` | Inter 400/500 | UI labels, nav, body copy |
| `var(--font-cormorant)` | Cormorant Garamond 400/600 | Headings, editorial text |
| `var(--font-crimson)` | Crimson Text 400 | Hero tagline |

Apply them inline on elements:
```tsx
style={{ fontFamily: "var(--font-cormorant)" }}
```

---

## Components

### `Header`

```tsx
<Header />           // sticky — for inner pages
<Header overlay />   // absolute overlay — for homepage hero
```

- Hover-triggered **Services dropdown** (client component with `useState`)
- Chevron rotates on open

### `Hero`

Full-screen section. Background image loaded from `public/hero.jpg` via `next/image`.

To swap the image: replace `public/hero.jpg` with your file (keep the same name), or update `src` in `Hero.tsx`:

```tsx
<Image src="/your-image.jpg" alt="..." fill priority className="object-cover" />
```

### `Footer`

Static server component. To update links or contact info, edit `app/components/Footer.tsx` directly.

### `FeaturedWork`

Client component. Clicking a project card:
- Activates it (yellow `#ffeb76` background)
- Deactivates the others (cream `#f5f4ee`)
- Swaps the featured image and caption on the left

**To add real project images**, update the `projects` array in `FeaturedWork.tsx`:

```tsx
{
  num: "01",
  tag: "CAMPAIGN IDENTITY",
  name: "Ole Henriksen",
  projectName: "Ole Henriksen — Campaign Identity",
  description: "Brand strategy and campaign creative.",
  image: "/work/ole-henriksen.jpg",  // ← add path here
},
```

Drop images into `public/work/` — no restart needed.

---

## Adding Images

All static assets go in `public/`. Reference them with a leading `/`:

```tsx
<Image src="/work/ole-henriksen.jpg" alt="Ole Henriksen" fill className="object-cover" />
```

Recommended exports from Figma:
- **Hero** → JPG or WebP, 2x, full width crop
- **Project cards / featured** → JPG or WebP, 2x
- **Icons / logos** → SVG

---

## Adding New Pages

1. Create `app/[page-name]/page.tsx`
2. Import `Header`, `Footer`, and any section components
3. Use `<Header />` (sticky) — not `<Header overlay />`

Example:
```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>{/* sections */}</main>
      <Footer />
    </>
  );
}
```

---

## Figma → Cursor Workflow

1. Open Figma and select the frame you want to build
2. Make sure the WebSocket bridge is running: `bunx cursor-talk-to-figma-socket`
3. In Cursor Agent, say: **"Read my Figma selection and build it as a React component with Tailwind"**
4. The agent reads the frame via MCP and generates the component
5. Review the output and refine with follow-up prompts

The Figma plugin channel changes each session. If the agent times out, check the **Connection tab** in the plugin for the current channel name and tell the agent: *"join channel [name]"*.

---

## Deployment (Vercel)

The repo is connected at: **github.com/rovaneD/inception-creative**

Every push to `main` triggers a production deploy automatically.

```bash
git add .
git commit -m "your message"
git push
```

To add environment variables (API keys, etc.): Vercel Dashboard → Project → Settings → Environment Variables.

---

## Figma Make vs Vercel — How They Coexist

The current live site at `inceptioncreative.agency` is hosted by **Figma Make** on Figma's own infrastructure. The Vercel/Next.js build is a completely separate deployment.

**How it works:**

| | Figma Make | Vercel (Next.js) |
|--|--|--|
| URL | `inceptioncreative.agency` (DNS → Figma) | `inception-creative.vercel.app` |
| Status | Live and public | Live on Vercel subdomain |
| Affected by GitHub pushes | ❌ No | ✅ Yes |

**The two deployments do not interfere with each other.** Pushing to GitHub only updates the Vercel build — the Figma Make site is untouched.

**When to cut over:**

When the Next.js build is complete and ready, the switch is a single DNS change:

1. Go to your domain registrar (wherever `inceptioncreative.agency` is managed)
2. Update the DNS `A` or `CNAME` record to point to Vercel instead of Figma
3. From that moment, `inceptioncreative.agency` serves the Next.js site

Vercel provides the exact DNS values to use in: **Vercel Dashboard → Project → Settings → Domains**

Until that DNS change is made, the Figma Make site remains live and nothing visible changes for visitors.

---

## Pages Status

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Built | Needs real hero image in `public/hero.jpg` |
| `/work` | ✅ Built | Needs project images in `public/work/` |
| `/about` | ✅ Built | — |
| `/news` | ✅ Built | — |
| `/contact` | ✅ Built | — |
| `/services/brand-strategy` | ✅ Built | — |
| `/services/visual-identity` | ✅ Built | — |
| `/services/packaging-design` | ✅ Built | — |
| `/services/campaign-creative` | ✅ Built | — |
| `/services/digital-experience` | ✅ Built | — |
