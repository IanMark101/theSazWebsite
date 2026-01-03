import { Youtube, Instagram } from "lucide-react";

export const VloggerCard = ({ vlogger }) => (
  <div className="bg-neutral-900 border border-neutral-800 flex flex-col group">
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={vlogger.image}
        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        alt={vlogger.name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-6 left-6">
        <p className="text-white font-black text-3xl italic tracking-tighter">
          {vlogger.name}
        </p>
        <p className="text-gray-400 text-xs font-bold tracking-widest">
          {vlogger.niche}
        </p>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic h-12 overflow-hidden">
        "{vlogger.bio}"
      </p>

      <div className="mt-auto pt-6 border-t border-neutral-800">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">
            Social Media
          </span>
          <span className="text-xs font-mono text-white">{vlogger.handle}</span>
        </div>
        <div className="flex gap-4">
          <a
            href={vlogger.socials.youtube}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube size={20} />
          </a>
          <a
            href={vlogger.socials.instagram}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={vlogger.socials.tiktok}
            className="text-gray-400 hover:text-white transition-colors text-sm font-black flex items-center"
          >
            <span className="border border-gray-400 rounded px-1 group-hover:border-white transition-colors">
              TK
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
