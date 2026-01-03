"use client";

import Link from "next/link";

const HalfMarathonDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About, Registration & Rules */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              21 Kadam Aage (21 km)
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
                      <strong>Start Time:</strong> 21:15 pm
                    </p>
                    <p>
                      <strong>Time Limit:</strong> 3 hours 30 minutes
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
                        Half Marathon is only available for participants above
                        16 years of age
                      </p>
                    </div>
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

          {/* Right Side - Runner Info */}
          <div className="flex flex-col gap-12">
            {/* Runner Amenities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                RUNNER AMENITIES INCLUDED
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Unique race bib",
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
                        Men (Open to all age groups )
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-white/90">
                        Women (Open to all age groups)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90">
                        21 km
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                        All Ages (Above 16)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-gray-600 dark:text-white/80">
                        Up to 30
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-white/90 font-semibold">
                        Rs. 1200/- Including GST
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Women's Discount Table */}
              <div className="mt-4 overflow-x-auto">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Women Masters Divisions (Above 30)
                </h5>
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-800 dark:text-white">
                        Age Category
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-800 dark:text-white">
                        Registration Fee
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-800 dark:text-white">
                        Discount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-white/90">
                        Above 31 to 40
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        Rs. 1080/- (Including GST)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        10% discount
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-white/90">
                        Above 41 to 50
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        Rs. 900/- (Including GST)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        25% discount
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-white/90">
                        Above 51
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        Rs. 600/- (Including GST)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-white/80">
                        50% discount
                      </td>
                    </tr>
                  </tbody>
                </table>
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
