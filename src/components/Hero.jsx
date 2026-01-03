import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      title: "SAVOR EXPLORE VIBE",
      subtitle: "The Lifestyle",
      image: "/images/sazhomepage.jpg",
      description:
        "Street culture meets style. The uniform of modern creators.",
    },
    {
      title: "THE SAZ COLLECTION",
      subtitle: "Multi-Color Edition",
      image: "/images/sazCollection.jpg",
      description: "Choose your vibe. Express yourself.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );

  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-black text-white pt-20 overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load image: ${slide.image}`);
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23333' width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='24' font-family='Arial'%3EImage Not Found%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-white font-black tracking-widest text-sm mb-6 flex items-center gap-2 animate-fade-in">
                <span className="w-8 h-px bg-white"></span> EST. 2024
              </h2>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4 animate-slide-up">
                {heroImages[currentSlide].title}
              </h1>
              <p className="text-gray-300 text-xl font-bold tracking-widest uppercase">
                {heroImages[currentSlide].subtitle}
              </p>
            </div>

            <p className="text-gray-300 text-lg max-w-md leading-relaxed italic font-medium">
              {heroImages[currentSlide].description}
            </p>

            <div className="flex gap-4 pt-6">
              <a
                href="#order-guide"
                className="bg-white text-black px-10 py-5 font-black text-xs tracking-widest hover:bg-gray-200 transition-all inline-flex items-center gap-3 group"
              >
                HOW TO ORDER{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#vloggers"
                className="border-2 border-white text-white px-10 py-5 font-black text-xs tracking-widest hover:bg-white hover:text-black transition-all"
              >
                OUR CREATORS
              </a>
            </div>
          </div>

          {/* Right - Featured Image */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="relative w-full h-full border-4 border-white overflow-hidden group shadow-2xl bg-gray-800">
              <img
                src={heroImages[currentSlide].image}
                alt="Featured Shirt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect fill='%23444' width='600' height='600'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='18'%3EImage Not Found%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls - MANUAL ONLY */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
        <button
          onClick={prevSlide}
          className="text-white hover:bg-white/20 p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white hover:bg-white/20 p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-32 right-6 z-20 text-white">
        <p className="font-black text-xs tracking-widest">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(heroImages.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
};
