import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white py-4 border-b border-gray-100 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-4xl font-black tracking-tighter italic text-black"
        >
          SAZ<span className="text-gray-300">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["HOME", "SHIRTS", "VLOGGERS", "ABOUT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-black tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2 text-xs font-black tracking-widest hover:bg-gray-800 transition-all">
            SHOP DROP
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col items-center space-y-6 md:hidden animate-in fade-in slide-in-from-top-4">
          {["HOME", "SHIRTS", "VLOGGERS", "ABOUT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black tracking-widest text-black"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
