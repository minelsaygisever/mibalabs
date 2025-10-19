// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FeaturedApp from './sections/FeaturedApp';
import WhatWeDo from './sections/WhatWeDo';
import MeetFounders from './sections/MeetFounders';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedApp />
        <WhatWeDo />
        <MeetFounders />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}