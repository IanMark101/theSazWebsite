import { Utensils, Coffee } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="py-24 bg-white border-y border-gray-50">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="flex justify-center mb-8 gap-4 text-black opacity-20">
        <Utensils size={40} />
        <div className="w-px h-10 bg-black"></div>
        <Coffee size={40} />
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-black leading-tight uppercase mb-8 italic">
        "We make shirts for the people who eat, film, and live the street
        culture."
      </h2>
    </div>
  </section>
);
