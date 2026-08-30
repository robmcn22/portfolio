import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;