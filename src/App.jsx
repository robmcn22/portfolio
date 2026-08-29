import Hero from "./components/Hero";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Hero />

      <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-2">
          Portfolio Setup Complete
        </h1>
        <p className="text-slate-400">Tailwind CSS test.</p>
      </div>
    </main>
  );
}

export default App;
