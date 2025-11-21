"use client";

import Link from "next/link";

const HalfMarathonDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              21 Kadam Aage(21 km)
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                The BCORE Night Half-Marathon is one of India's most thrilling
                and prestigious races — a flagship event hosted by the country's
                first Olympic Centre. Set under the starlit skies of
                Gandhinagar, this night run challenges your endurance and
                ignites your passion as you conquer every mile in the cool
                evening air.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                Join thousands of runners and become part of India's Olympic
                legacy, as you race through illuminated streets and scenic
                nightscapes in an unforgettable celebration of fitness and
                spirit.
              </p>
            </div>
          </div>

          {/* Right Side - Runner Info */}
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
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
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
              <div className="text-gray-600 dark:text-white/80 text-lg space-y-2">
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
                  31–40: Rs.1080/- (10% discount)
                  <br />
                  41–50: Rs.900/- (25% discount)
                  <br />
                  51+: Rs.600/- (50% discount)
                </p>
              </div>
            </div>

            {/* Eligibility Note */}
            <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
              <p className="text-base text-gray-700 dark:text-white/90">
                <strong>Important:</strong> Half Marathon is only available for
                participants above 16 years of age.
              </p>
            </div>

            {/* Registration Fee */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                REGISTRATION FEE
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg space-y-1">
                <p>
                  <strong>Individual:</strong> Rs.1200/- (Including GST)
                </p>
              </div>
            </div>

            {/* Prize Money */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                PRIZE MONEY
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg space-y-1">
                <p>
                  <strong>1st Prize:</strong> TBA
                </p>
                <p>
                  <strong>2nd Prize:</strong> TBA
                </p>
                <p>
                  <strong>3rd Prize:</strong> TBA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <Link
            href="/register"
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

export default HalfMarathonDetail;
