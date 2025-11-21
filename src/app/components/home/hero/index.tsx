"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Link from "next/link";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    // "/images/crousal/img5.jpg",
    // "/images/crousal/img10.jpg",
    "/images/crousal/img7.jpg",
    // "/images/crousal/img2.jpg",
    // "/images/crousal/img3.jpg",
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ParallaxProvider>
      <Parallax speed={-25}>
        <section className="relative flex items-end text-white bg-black h-screen min-h-[80vh] sm:min-h-screen overflow-hidden">
          {/* Background Carousel */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover object-center sm:object-[50%_40%]" // better framing on mobile
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 container text-left px-5 sm:px-10">
            <div className="flex flex-col gap-4 sm:gap-6 pb-16 sm:pb-20">
              <p className="text-white/80 max-w-md text-sm sm:text-base leading-relaxed">
                Run through{" "}
                <span className="text-primary">Gandhinagar&apos;s</span> iconic
                cityscape, cultural landmarks, and scenic green avenues.
              </p>

              {/* Heading + Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6">
                {/* <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight">
                  Register
                </h1> */}

                {/* Updated Registration Button */}
                <Link
                  href="/register"
                  className="mt-2 sm:mt-0 inline-flex items-center justify-center gap-3
  bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 px-10 py-5 sm:px-14 sm:py-6 rounded-full
  font-extrabold text-white text-2xl sm:text-3xl tracking-wide
  transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,100,200,0.7)]
  active:scale-95 animate-pulse relative"
                >
                  <span className="drop-shadow-lg">Register Now</span>
                  <Image
                    src="/images/Icon/arrow-icon.svg"
                    alt="arrow icon"
                    width={40}
                    height={40}
                    className="sm:w-[44px] sm:h-[44px] drop-shadow-lg"
                  />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-900 via-green-900 to-orange-900 opacity-50 blur-xl animate-pulse -z-10"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
