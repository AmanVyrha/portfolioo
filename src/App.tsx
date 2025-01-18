import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black min-h-screen text-gray-100 font-mono">
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;