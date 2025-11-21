"use client";

import Link from "next/link";

const TeamRunDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              Bhaag Milkar Bhaag(Team Run)
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                The BCORE Team Night Run – Bhaag Milkar Bhaag is where teamwork
                meets glow-in-the-dark fun! Grab a partner — be it your
                coworker, sibling, or that friend who's always "too tired" — and
                dash through Gandhinagar's lit-up streets in a night full of
                energy, laughter, and friendly competition.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                Because everything's better together, winners in each category
                snag personalized gift vouchers — proof that when you run as a
                team, you don't just finish, you shine!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                RUNNER AMENITIES INCLUDED
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Unique race bib with team name",
                  "Limited edition race shirt (per person)",
                  "Exclusive team medal",
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

            {/* Registration Fee */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                REGISTRATION FEE
              </h3>
              <p className="text-lg text-gray-600 dark:text-white/80">
                ₹1200/- (per team of 3)
              </p>
            </div>

            {/* Prize Money */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                PRIZES
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg">
                <p>
                  <strong>1st Prize:</strong> Personalized Gift Vouchers
                </p>
                <p>
                  <strong>2nd Prize:</strong> Personalized Gift Vouchers
                </p>
                <p>
                  <strong>3rd Prize:</strong> Personalized Gift Vouchers
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

export default TeamRunDetail;
