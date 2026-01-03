import { Utensils } from "lucide-react";
import { ShirtCard } from "./ShirtCard";
import { SHIRT_COLLECTION } from "../Data/shirtData";

export const ShirtsSection = () => (
  <section id="shirts" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-b-4 border-black pb-8 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black tracking-tighter text-black uppercase">
            The Collection
          </h2>
          <p className="text-gray-400 font-bold tracking-[0.2em] mt-2">
            AVAILABLE NOW // ORDER VIA FACEBOOK
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <Utensils size={24} />
          <span className="font-black italic">SAZ EXCLUSIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {SHIRT_COLLECTION.map((shirt) => (
          <ShirtCard key={shirt.id} shirt={shirt} />
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-black text-white p-12 text-center">
        <p className="text-lg font-bold mb-6 tracking-widest">
          Ready to join the SAZ community?
        </p>
        <a
          href="#order-guide"
          className="inline-block bg-white text-black px-10 py-5 font-black text-xs tracking-widest hover:bg-gray-200 transition-all"
        >
          VIEW ORDERING GUIDE
        </a>
      </div>
    </div>
  </section>
);
