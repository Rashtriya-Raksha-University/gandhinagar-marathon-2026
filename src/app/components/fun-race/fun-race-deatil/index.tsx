"use client";

import Link from "next/link";

const FunRunDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              Mini Mini Mini Marathon
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                The BCORE 3KM Fun Run is designed for everyone — civilians,
                families, kids, and para-athletes! It's the perfect way to kick
                off your fitness journey or enjoy a fun night out under the
                stars. With a relaxed atmosphere and inclusive spirit, this race
                welcomes first-timers and seasoned runners alike.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                Whether you're running solo or with friends, the 3KM Fun Run
                promises a joyful celebration of movement, community, and the
                night's glow along Gandhinagar's scenic routes.
              </p>
            </div>
          </div>

          {/* Right Side - Runner Amenities, Fee, and Info */}
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
                  "Official participation E-certificate",
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
                  <strong>Men/Boys:</strong> Under 16 | Para-Abled
                </p>
                <p>
                  <strong>Women/Girls:</strong> Under 16 | Para-Abled
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
                  <strong>Individual:</strong> Rs.240/- (Including GST)
                </p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
              <p className="text-base text-gray-700 dark:text-white/90">
                <strong>Note:</strong> Half Marathon is not available for
                participants under 16 years of age.
              </p>
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

export default FunRunDetail;
