// src/sections/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/40"
    >

    {/* floating shapes */}
    <div className="absolute inset-0">
        
        {/* Uppper Left */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-miba-purple/20 to-miba-indigo/10 organic-shape-1 blur-2xl animate-float-slow"
          style={{ animationDelay: "-1s" }}
        />
        
        {/* Upper Right */}
        <div
          className="absolute top-[120px] right-[100px] w-[250px] h-[250px] bg-gradient-to-br from-miba-light/20 to-miba-slate/15 organic-shape-2 blur-xl animate-float-fast"
          style={{ animationDelay: "-3s" }}
        />
        
        {/* Bottom Right */}
        <div
          className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-gradient-to-br from-miba-indigo/15 to-miba-light/10 organic-shape-3 blur-3xl animate-float-slow"
          style={{ animationDelay: "-5s" }}
        />
        
        {/* Bottom Left */}
        <div
          className="absolute bottom-[200px] left-[200px] w-[150px] h-[150px] bg-gradient-to-br from-miba-purple-deep/30 to-miba-slate/25 organic-shape-4 blur-2xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
    </div>

    {/* content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-shadow">    
                We build focused,{" "}
            <span className="gradient-text">elegant mobile apps</span>
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            MibaLabs is a product studio founded by Minel & Barış — crafting
          user-centric tools for everyday problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <a
            href="#apps"
            className="bg-miba-purple text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-miba-indigo transition-all duration-300 scale-hover glow-purple"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}