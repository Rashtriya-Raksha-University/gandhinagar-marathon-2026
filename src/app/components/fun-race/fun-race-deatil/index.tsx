"use client";

import Link from "next/link";

const FunRunDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About, Registration & Rules */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              Mini Mini Mini Marathon (3 km)
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
                      <strong>Start Time:</strong> 21:00 pm
                    </p>
                    <p>
                      <strong>Time Limit:</strong> 30 minutes (Under 16) | 1
                      hour (Para-abled)
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

                {/* Eligibility Table */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
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
                            Men/Boy
                          </th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-white/90">
                            Women/Girl
                          </th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90">
                            3 km
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                            Open to all age groups
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                            Open to all age groups
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90 font-semibold">
                            Rs. 120/- Including GST
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                    <div className="flex items-start gap-3"></div>
                  </div>
                </div>
              </div>
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
                  <strong>Men/Boys:</strong> Open to all age groups{" "}
                </p>
                <p>
                  <strong>Women/Girls:</strong> Open to all age groups
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
                  <strong>Individual:</strong> Rs.120/- (Including GST)
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

export default FunRunDetail;
