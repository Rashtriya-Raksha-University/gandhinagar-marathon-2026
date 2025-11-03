"use client";

import Link from "next/link";

const FiveKmDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              5k Ka Funda(5 km)
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                The BCORE 5KM Night Run is perfect for beginners, fitness
                enthusiasts, and anyone turning their New Year's resolutions —
                or last year's unfinished ones — into action under the stars.
                Blending fun and challenge, this run celebrates endurance and
                personal milestones with an energetic night-time vibe lit up by
                glow bands and illuminated routes.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                With age and gender-based categories, warm water stations, and a
                lively crowd, it's a glowing celebration of fitness, community,
                and fresh starts along Gandhinagar's scenic streets.
              </p>
            </div>
          </div>

          {/* Right Side - Runner Amenities, Fee, and Prizes */}
          <div className="flex flex-col gap-12">
            {/* Runner Amenities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                RUNNER AMENITIES INCLUDED
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Unique race bib with name",
                  "Limited edition race shirt",
                  "Exclusive medal",
                  "Surprise goody kit",
                  "Official timing E-certificate",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                CATEGORIES
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg">
                <p>
                  <strong>Men/Boys:</strong> Under 30 | Above 30
                </p>
                <p>
                  <strong>Women/Girls:</strong> Up to 30
                </p>
                <p className="mt-2 text-base">
                  <strong>Women Age Discounts:</strong>
                </p>
                <p className="ml-4 text-base">
                  31–40: Rs.639/- (10% discount)
                  <br />
                  41–50: Rs.532/- (25% discount)
                  <br />
                  51+: Rs.355/- (50% discount)
                </p>
              </div>
            </div>

            {/* Registration Fee */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                REGISTRATION FEE
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg">
                <p>
                  <strong>Individual:</strong> Rs.710/- (Including GST)
                </p>
              </div>
            </div>

            {/* Prize Money */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                PRIZE MONEY
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg">
                <p>
                  <strong>1st Prize:</strong> ₹10,000
                </p>
                <p>
                  <strong>2nd Prize:</strong> ₹7,000
                </p>
                <p>
                  <strong>3rd Prize:</strong> ₹5,000
                </p>
              </div>
            </div>

            {/* Add-Ons */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Add-Ons
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Customized race shirt",
                  "Medal engraving",
                  "Participation in International Olympic Conference",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <Link
            href="/registration"
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-primary text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FiveKmDetail;
