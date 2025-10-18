// src/components/Navbar.jsx
import { useEffect, useRef } from "react";
import { FaCube, FaBars } from "react-icons/fa";

export default function Navbar() {
  const headerRef = useRef(null);

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

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-gray-700 hover:text-miba-purple transition-colors font-medium"
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
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-miba-purple to-miba-indigo rounded-2xl flex items-center justify-center mr-3">
              <FaCube className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MibaLabs</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#apps">Apps</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button className="md:hidden text-gray-700 hover:text-miba-purple">
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}