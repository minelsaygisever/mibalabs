// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react"; 
import { FaCube, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      const h = headerRef.current;
      if (!h) return;
      if (window.scrollY > 100) h.classList.add("glass-strong");
      else h.classList.remove("glass-strong");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop Links
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-gray-700 hover:text-miba-purple transition-colors font-medium"
    >
      {children}
    </a>
  );
  
  // Mobile Menu Links
  const MobileNavLink = ({ href, children }) => (
    <a
      href={href}
      className="block w-full text-left px-6 py-4 text-lg text-gray-800 hover:bg-gray-100 transition-colors"
      onClick={() => setIsMobileMenuOpen(false)} 
    >
      {children}
    </a>
  );

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 w-full glass-effect backdrop-blur-md z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center" aria-label="MibaLabs Home">
            <div className="w-10 h-10 bg-gradient-to-br from-miba-purple to-miba-indigo rounded-2xl flex items-center justify-center mr-3">
              <FaCube className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MibaLabs</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#apps">Apps</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-miba-purple z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />} 
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-0 left-0 w-full bg-white/95 pt-16 shadow-lg md:hidden 
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden backdrop-blur-md z-10`}
      >
        <div className="py-4">
          <MobileNavLink href="#apps">Apps</MobileNavLink>
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}