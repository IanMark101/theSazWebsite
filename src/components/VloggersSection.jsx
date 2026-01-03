import { VloggerCard } from "./VloggerCard";
import { VLOGGERS } from "../data/vloggerData";

export const VloggersSection = () => (
  <section id="vloggers" className="py-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic">
          CREATORS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VLOGGERS.map((vlogger) => (
          <VloggerCard key={vlogger.id} vlogger={vlogger} />
        ))}
      </div>
    </div>
  </section>
);
