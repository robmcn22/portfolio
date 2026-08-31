import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

// Extracted your original App return into a Home component
const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Skills />
    </main>
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-blue-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;