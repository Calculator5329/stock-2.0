import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-hero-landing bg-cover bg-center text-white flex items-center justify-center">
      <div className="backdrop-blur-sm bg-black/30 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-title mb-4">Welcome to MarketNexus</h1>
        <p className="text-lg font-body">Your futuristic finance toolkit</p>
        <button className="mt-6 px-6 py-3 rounded-xl bg-neonBlue text-black font-bold hover:scale-105 transition-all">
          Enter Dashboard
        </button>
      </div>
    </div>
  );
};

export default Hero;
