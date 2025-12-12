import Header from "./components/Header";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main>
        <Hero />
        <Jobs />
      </main>
    </div>
  );
}
