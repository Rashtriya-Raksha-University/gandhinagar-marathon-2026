"use client";

import React from "react";
import Image from "next/image";

const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image
        src="/images/crousal/img6.jpg"
        alt="Running background"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-750/60 via-gray-700/70 to-gray-750/80 z-[1]"></div> */}

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl w-full">
        <div className="bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 border border-gray-700/50">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 text-center leading-tight">
            Get Ready for the Run!
          </h1>

          {/* Steps */}
          <div className="space-y-6 mb-10 text-left">
            <div className="flex gap-4 items-start">
              <span className="text-3xl sm:text-4xl flex-shrink-0">🏃</span>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                <strong className="text-xl">Step 1:</strong> Choose whether
                you're running Solo or as a Team.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl sm:text-4xl flex-shrink-0">📝</span>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                <strong className="text-xl">Step 2:</strong> Fill in your
                personal information.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl sm:text-4xl flex-shrink-0">💳</span>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                <strong className="text-xl">Step 3:</strong> Complete your
                payment using the links below.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl sm:text-4xl flex-shrink-0">🎉</span>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                <strong className="text-xl">That's it!</strong> You're all set
                for the run — we can't wait to see you at the starting line!
              </p>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://forms.eduqfix.com/bcorenightrun/add"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-center"
            >
              Payment Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
