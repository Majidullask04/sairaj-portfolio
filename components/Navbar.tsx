import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Me', href: '#why-me' },
  ];

  return (
    // pointer-events-none ensures the fixed navbar layout doesn't block clicks on the hero section underneath
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 pointer-events-none">
      
      {/* pointer-events-auto re-enables clicks for the actual navbar content */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Sticker */}
        <a href="#home" className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 block cursor-pointer">
          <div className="bg-pop-yellow border-2 border-white shadow-[4px_4px_0px_rgba(0,0,0,1)] px-4 py-2">
            <span className="font-display text-2xl tracking-wide text-black uppercase">
              Sairaj<span className="text-white text-stroke-black">.Dev</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav - Tape Style */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, idx) => (
            <a 
              key={link.label}
              href={link.href}
              className={`
                px-4 py-2 font-bold text-sm uppercase tracking-wider cursor-pointer
                bg-white/90 hover:bg-pop-pink hover:text-white
                transition-colors duration-200 block
                transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                hover:rotate-0
              `}
              style={{ clipPath: 'polygon(2% 0%, 98% 1%, 100% 95%, 0% 100%)' }}
            >
              {link.label}
            </a>
          ))}
          
          <a href="#contact" className="ml-4 group block cursor-pointer">
            <div className="bg-green-500 text-white px-6 py-2 font-display text-lg tracking-wide border-2 border-white shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all">
              LET'S TALK
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden bg-white p-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-paper border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-6 md:hidden flex flex-col space-y-4 transform rotate-1 z-50 pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-2xl font-display uppercase text-black hover:text-pop-pink block cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-pop-yellow text-black text-center py-3 font-bold border-2 border-black block cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            CONTACT NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;