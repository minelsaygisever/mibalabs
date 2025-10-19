// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FeaturedApp from './sections/FeaturedApp';
import WhatWeDo from './sections/WhatWeDo';

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedApp />
        <WhatWeDo />
        
        <section id="contact" className="py-24" />
      </main>
    </div>
  );
}