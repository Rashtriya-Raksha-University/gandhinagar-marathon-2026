"use client";
import Link from "next/link";

import Image from "next/image";

const GeneralDetail = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="max-w-xl w-full">
              <h2 className="text-56">BCORE Night Run</h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-secondary dark:text-white text-lg leading-relaxed">
                The landmark event unfolds across a beautiful journey of
                Gandhinagar - stretching from the historic Salt Mount Musuem to
                the refreshing green landscapes of Swarnim Park. With a touch of
                athletic challenge and spirited community participation, this
                event embodies the very best of Gandhinagar's vibrant sporting
                culture.
              </p>
              <p className="text-secondary dark:text-white text-lg leading-relaxed">
                Have you ever seen Gandhinagar in the night? Imagine the
                lightings, the hot chai, the bonfire, the music, and the energy
                to run in the Cleanest Capital of India. Join us in the BCORE
                Night Run, the to-be fastest and exciting run in India! No city
                in India has ever hosted a running event by an Olympic Study
                Centre. With BCORE, the first Indian Olympic Centre, you will
                experience a Night Run like no other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BCORE Logo and Date Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo/bcore.png"
                alt="BCORE Logo"
                width={300}
                height={150}
                className="max-w-full h-auto"
              />
            </div>
            <div className="text-center lg:text-right">
              <p className="text-lg text-secondary dark:text-white/70 mb-4">
                Event Date
              </p>
              <h2 className="text-4xl lg:text-6xl font-bold text-primary">
                Sunday
                <br /> 10 January 2026
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Challenge
            </h2>
            <p className="text-lg text-secondary dark:text-white/70 max-w-2xl mx-auto">
              Select from our range of distances and join thousands of runners
              in this historic night run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Half Marathon Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  HALF-MARATHON
                </h3>
                <div className="text-center">
                  <Link
                    href="/register"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* 10 KM Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-center">10 KM</h3>
                <div className="text-center">
                  <Link
                    href="/register"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* 5 KM Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-center">5 KM</h3>
                <div className="text-center">
                  <Link
                    href="/register"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* 3KM Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-center">3KM</h3>
                <div className="text-center">
                  <Link
                    href="/register"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-orange-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  Team Run
                </h3>
                <div className="text-center">
                  <Link
                    href="/register"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralDetail;
