import Header from "./components/Header";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Process from "./components/Process";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main>
        <Hero />
        <Jobs />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
