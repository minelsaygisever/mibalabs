// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="apps" className="py-24" />
        <section id="about" className="py-24" />
        <section id="contact" className="py-24" />
      </main>
    </div>
  );
}