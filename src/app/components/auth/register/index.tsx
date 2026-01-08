"use client";

import React from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react"; // ✅ QR Code package

const Registration = () => {
  const registrationUrl = "/";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/crousal/img6.jpg"
        alt="Running background"
        fill
        priority
        className="object-cover brightness-50"
        quality={100}
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 border border-gray-700/50">
          {/* Registration Deadline Banner */}
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full shadow-xl border-2 border-white/30">
              <div className="flex items-center gap-2 sm:gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-bold text-white text-sm sm:text-base tracking-wide whitespace-nowrap">
                  Registration Ends{" "}
                  <span className="text-yellow-200 font-extrabold">
                    8th January
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-10 tracking-tight">
            Get Ready for the Run!
          </h1>

          {/* Steps Section */}
          <div className="space-y-6 mb-10 text-left">
            {[
              {
                icon: "🏃",
                text: (
                  <>
                    <strong className="text-xl">Step 1:</strong> Choose whether
                    you're running Solo or as a Team.
                  </>
                ),
              },
              {
                icon: "📝",
                text: (
                  <>
                    <strong className="text-xl">Step 2:</strong> Fill in your
                    personal information.
                  </>
                ),
              },
              {
                icon: "💳",
                text: (
                  <>
                    <strong className="text-xl">Step 3:</strong> Complete your
                    registration using the link or QR code below.
                  </>
                ),
              },
              {
                icon: "🎉",
                text: (
                  <>
                    <strong className="text-xl">That's it!</strong> You're all
                    set for the run — we can't wait to see you at the starting
                    line!
                  </>
                ),
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gray-800/60 rounded-2xl p-4 transition-all hover:bg-gray-800/80"
              >
                <span className="text-3xl sm:text-4xl flex-shrink-0">
                  {step.icon}
                </span>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Registration Options */}
          <div className="flex flex-col items-center gap-8">
            {/* Register Button */}
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white text-lg font-semibold py-3 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Registeration Closed
            </a>

            {/* OR Divider */}
            {/* <div className="flex items-center w-full max-w-xs">
              <div className="flex-grow h-px bg-gray-600" />
              <span className="mx-3 text-gray-300 font-medium text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-600" />
            </div> */}

            {/* QR Code */}
            {/* <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col items-center">
              <QRCodeCanvas
                value={registrationUrl}
                size={180}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={true}
              />
              <p className="text-gray-800 mt-3 font-medium">
                Scan this QR to Register
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
