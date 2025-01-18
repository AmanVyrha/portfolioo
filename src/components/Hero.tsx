import React from 'react';
import { Database, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="h-8 bg-gray-800/30 animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-8">
          <Database className="w-16 h-16 text-green-500 mr-4" />
          <Brain className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="glitch text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-100 mb-5 tracking-wider">
          DATA.ANALYST()
        </h1>
        <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
          {'>'} TRANSFORMING DATA INTO ACTIONABLE INSIGHTS<br />
          {'>'} MACHINE LEARNING & STATISTICAL ANALYSIS
        </p>
        <div className="mt-12">
          <button className="font-display bg-green-500/20 border border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-500/30 transition-colors tracking-widest">
            {'>'} VIEW_PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
