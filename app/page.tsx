import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header overlay />
      <main className="grow-0 shrink-0">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
