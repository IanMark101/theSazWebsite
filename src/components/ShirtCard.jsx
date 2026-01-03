import { ArrowRight } from "lucide-react";

export const ShirtCard = ({ shirt }) => (
  <div className="group">
    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-6 border border-gray-100">
      {shirt.tag && (
        <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-black px-3 py-2 uppercase z-10">
          {shirt.tag}
        </span>
      )}
      <img
        src={shirt.image}
        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
        alt={shirt.name}
      />
      <button className="absolute inset-x-0 bottom-0 bg-black text-white py-4 font-black text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform">
        MESSAGE US — {shirt.price}
      </button>
    </div>
    <h3 className="text-black font-black text-lg mb-1">{shirt.name}</h3>
    <p className="text-gray-400 text-xs mb-2 font-bold tracking-widest uppercase">
      {shirt.description}
    </p>
    <p className="text-black font-black font-mono">{shirt.price}</p>
  </div>
);
