import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="h-[calc(100vh-56px)]">
        <Hero />
      </main>
    </div>
  );
}
