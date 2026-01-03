import { Instagram, Youtube, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-white text-black py-20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="space-y-6">
        <h2 className="text-4xl font-black italic tracking-tighter">
          SAZ<span className="text-gray-300">.</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed uppercase font-bold tracking-tighter">
          Exclusive shirts for foodies, creators, and street explorers. The
          uniform of the modern vlogger.
        </p>
        <div className="flex gap-4">
          <Instagram size={20} className="hover:text-gray-400 cursor-pointer" />
          <Youtube size={20} className="hover:text-gray-400 cursor-pointer" />
          <Twitter size={20} className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div>
        <h4 className="font-black text-xs tracking-[0.3em] mb-8 uppercase">
          Navigation
        </h4>
        <ul className="space-y-4 text-sm font-bold text-gray-400">
          <li>
            <a href="#home" className="hover:text-black">
              HOME
            </a>
          </li>
          <li>
            <a href="#shirts" className="hover:text-black">
              SHIRTS
            </a>
          </li>
          <li>
            <a href="#vloggers" className="hover:text-black">
              VLOGGERS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              LOOKBOOK
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-gray-300 tracking-widest">
      <p>&copy; 2024 SAZ BRAND STUDIO. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
        <a href="#">PRIVACY</a>
        <a href="#">SHIPPING</a>
        <a href="#">RETURNS</a>
      </div>
    </div>
  </footer>
);
