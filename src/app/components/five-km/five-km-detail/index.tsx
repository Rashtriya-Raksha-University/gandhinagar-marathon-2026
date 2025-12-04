"use client";

import Link from "next/link";

const FiveKmDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About, Registration & Rules */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              5k Ka Funda(5 km)
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

            {/* Registration & Rules Section */}
            <div className="flex flex-col gap-8 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  REGISTRATION & RULES
                </h3>

                {/* General Information */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Event Information
                  </h4>
                  <div className="flex flex-col gap-3 text-gray-600 dark:text-white/80">
                    <p>
                      <strong>Date:</strong> Saturday, 10th January 2026
                    </p>
                    <p>
                      <strong>Start Time:</strong> 21:30 pm
                    </p>
                    <p>
                      <strong>Time Limit:</strong> 1 hour
                    </p>
                    <p className="text-base leading-relaxed mt-2">
                      We are encouraging participants to take part in this run
                      to reinforce evening safety for women, demonstrating clean
                      and green city life, reminding participants of yearly
                      resolutions, and uniting citizens creating the spirit of
                      Olympism.
                    </p>
                  </div>
                </div>

                {/* Important Rules */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Important Rules
                  </h4>
                  <div className="flex flex-col gap-2 text-gray-600 dark:text-white/80 text-base">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Registration will be conducted online only through the
                        official registration link
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Participants must present their uploaded government
                        photo ID card on the day of bib collection
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Apply for only one race category using a single email
                        address
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        No refund policy applicable if participation conditions
                        are not met
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Runner Amenities, Fee, and Prizes */}
          <div className="flex flex-col gap-12">
            {/* Eligibility Table */}
            <div className="mb-6">
              <h4 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
                Eligibility
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-800 dark:text-white">
                        EVENT
                      </th>
                      <th
                        className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center font-semibold text-gray-800 dark:text-white"
                        colSpan={2}
                      >
                        CATEGORIES
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-800 dark:text-white">
                        REGISTRATION FEES
                      </th>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2"></th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-white/90">
                        Men (Under 30 and Above 30)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-white/90">
                        Women (Under 30)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90">
                        5 km
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                        All Ages
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                        All Ages
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90 font-semibold">
                        Rs. 120/- Including GST
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
            {/* Prize Money */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                PRIZE MONEY
              </h3>
              <div className="text-gray-600 dark:text-white/80 text-lg">
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

export default FiveKmDetail;
