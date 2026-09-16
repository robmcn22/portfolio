import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

// Extracted your original App return into a Home component
const Home = () => {
  const { state } = useLocation();

  React.useEffect(() => {
    const saveScrollPosition = () => {
      window.sessionStorage.setItem("portfolioScrollY", String(window.scrollY));
    };

    window.addEventListener("scroll", saveScrollPosition, { passive: true });

    if (state?.preserveScroll) {
      const savedScrollPosition = Number(
        window.sessionStorage.getItem("portfolioScrollY"),
      );

      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: Number.isFinite(savedScrollPosition) ? savedScrollPosition : 0,
          left: 0,
          behavior: "auto",
        });
      });
    }

    return () => window.removeEventListener("scroll", saveScrollPosition);
  }, [state]);

  return (
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
};

function ScrollToTop() {
  const { pathname, state } = useLocation();

  React.useEffect(() => {
    if (state?.preserveScroll) return;

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, state]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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