"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Link from "next/link";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    // "/images/crousal/img1.jpg",
    "/images/crousal/img5.jpg",
    "/images/crousal/img2.jpg",
    "/images/crousal/img3.jpg",
    // "/images/crousal/img4.jpg",
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
        <section className="relative flex items-end text-white bg-black h-full min-h-screen">
          {/* Background Carousel */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0} // Prioritize first image loading
                />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 container text-left">
            <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
              <div className="flex items-start gap-2 md:gap-6">
                <p className="text-white/70 max-w-md">
                  Run through{" "}
                  <span className="text-primary">Gandhinagar&apos;s </span>
                  iconic cityscape, cultural landmarks, and scenic green
                  avenues.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                <h1 className="large-heading">Register</h1>
                <div>
                  <Link href="/register">
                    <div className="bg-primary rounded-full p-1.5 pl-8 cursor-pointer">
                      <Image
                        src={"/images/Icon/arrow-icon.svg"}
                        alt="icon"
                        height={52}
                        width={52}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
