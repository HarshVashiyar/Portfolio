import React from 'react';
import MouseGradient from './components/MouseGradient';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Milestones from './components/Milestones';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      <MouseGradient />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Milestones />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;