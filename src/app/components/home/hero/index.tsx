"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/images/crousal/img7.jpg"];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
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
              className="object-cover object-center sm:object-[50%_40%]"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>

      {/* Race Route Button (Top Right) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20">
        <Link
          href="https://drive.google.com/file/d/1EN_ykicGeZpzPSWpKT0JoPnrAkr4GENr/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Race Route</span>
        </Link>
      </div>

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
          {/* Registration Deadline Banner (All Screens – Above Text) */}
          <div className="flex">
            <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl backdrop-blur-sm border border-white/30">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-bold text-white text-[10px] sm:text-xl tracking-wide whitespace-nowrap">
                  Race Starts{" "}
                  <span className="text-white font-extrabold">
                    10th January, 8pm onwards
                  </span>
                </p>
              </div>
            </div>
          </div>

          <p>
            <span className="text-blue-400">
              LIC Ground, Sector-11, Gandhinagar
            </span>
          </p>

          {/* Register Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1.5 w-fit
              bg-gradient-to-r from-red-500 via-red-500 to-orange-600 px-4 py-2.5 sm:px-8 sm:py-4 rounded-full
              font-bold text-white text-sm sm:text-lg tracking-wide
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              active:scale-95 relative border-2 border-white/20"
            >
              <span className="drop-shadow-lg">Registertion Closed</span>
              <Image
                src="/images/Icon/arrow-icon.svg"
                alt="arrow icon"
                width={20}
                height={20}
                className="sm:w-[28px] sm:h-[28px] drop-shadow-lg"
              />
            </Link>

            {/* <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd7jQQQZdaqrJda18v1rjlqziulrDANjt-Y8r1FBFXgxRy-4A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-fit
              bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 px-4 py-2.5 sm:px-8 sm:py-4 rounded-full
              font-bold text-white text-sm sm:text-lg tracking-wide
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              active:scale-95 relative border-2 border-white/20"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="drop-shadow-lg">Group Registration</span>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
