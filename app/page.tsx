import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="h-[calc(100vh-56px)]">
        {/* Content will go here */}
      </main>
    </div>
  );
}
