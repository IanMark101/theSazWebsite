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
          className="inline-flex items-center rounded-md transition-all"
        >
          <span className="inline-flex items-center rounded-l-md bg-white px-4 py-2 text-black font-black text-3xl md:text-4xl tracking-tighter italic">
            The
          </span>
          <span className="inline-flex items-center rounded-r-md bg-black px-4 py-2 text-white font-black text-3xl md:text-4xl tracking-tighter italic">
            SAZ
          </span>
          <span
            className={`${
              scrolled ? "text-gray-300" : "text-black/60"
            } ml-2 text-2xl md:text-3xl`}
          >
            .
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["HOME", "SHIRTS", "VLOGGERS", "ABOUT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xm font-black tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
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
