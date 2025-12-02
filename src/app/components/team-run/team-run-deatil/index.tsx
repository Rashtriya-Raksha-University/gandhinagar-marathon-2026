"use client";

import Link from "next/link";

const TeamRunDetail = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About, Registration & Rules */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              BCORE
              <br />
              Bhaag Milkar Bhaag (Team Run)
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

            {/* Registration & Rules Section */}
            <div className="flex flex-col gap-8 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  REGISTRATION & RULES
                </h3>

                {/* Application Criteria */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Application Criteria for Team Run
                  </h4>
                  <div className="flex flex-col gap-2 text-gray-600 dark:text-white/80 text-base">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        The team run is limited to 5 kilometres (different from
                        individual 5km criteria)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>Age criteria begins from 17 years onwards</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Teams can be all-male, all-female, or gender mixed as
                        per convenience
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Teams must have exactly 3 people - participation will
                        not be accepted otherwise
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Organised to encourage friendship and bonding with
                        friends, family, run clubs, or work/study groups
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>Open to both civilians and law-enforcement officers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Team names must not discriminate based on race, color,
                        religion, politics, gender, age, national origin,
                        disability, marital status, sexual orientation, or
                        military status
                      </p>
                    </div>
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
                        If one member cannot participate on race day, no
                        compensation will be returned. The other members can
                        participate in the normal 5km run
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Member replacement is allowed - team leader must send
                        full replacement details to bcorenightrun@rru.ac.in
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
                        No bibs will be handed over post 6:00 PM on 10th January
                        2026
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Bib misuse/impersonation will result in disqualification
                        and possible legal action
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p>
                        Runner's identity and proof of residence may be
                        verified. Incorrect information will result in
                        disqualification without refund
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Runner Amenities and Details */}
          <div className="flex flex-col gap-12">
            {/* General Information */}
            <div className="mb-6">
              <h4 className="text-4xl font-semibold text-gray-800 dark:text-white mb-3">
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
                <p>
                  <strong>Distance:</strong> 5 kilometres (Team Run)
                </p>
                <p className="text-base leading-relaxed mt-2">
                  We are encouraging participants to take part in this run to
                  reinforce evening safety for women, demonstrating clean and
                  green city life, reminding participants of yearly resolutions,
                  and uniting citizens creating the spirit of Olympism.
                </p>
              </div>
            </div>

            {/* Eligibility Table */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Eligibility
              </h4>
              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="border border-blue-400 px-4 py-3 text-left font-semibold">
                        EVENT
                      </th>
                      <th
                        className="border border-blue-400 px-4 py-3 text-center font-semibold"
                        colSpan={3}
                      >
                        CATEGORIES
                      </th>
                      <th className="border border-blue-400 px-4 py-3 text-left font-semibold">
                        REGISTRATION FEE
                      </th>
                    </tr>
                    <tr className="bg-blue-100 dark:bg-blue-900/30">
                      <th className="border border-blue-200 dark:border-blue-700 px-4 py-2"></th>
                      <th className="border border-blue-200 dark:border-blue-700 px-4 py-2 text-center text-blue-900 dark:text-blue-100">
                        Men (3 person team)
                      </th>
                      <th className="border border-blue-200 dark:border-blue-700 px-4 py-2 text-center text-blue-900 dark:text-blue-100">
                        Women (3 person team)
                      </th>
                      <th className="border border-blue-200 dark:border-blue-700 px-4 py-2 text-center text-blue-900 dark:text-blue-100">
                        Mixed (3 person team)
                      </th>
                      <th className="border border-blue-200 dark:border-blue-700 px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      <td className="border border-blue-200 dark:border-blue-700 px-4 py-3 text-blue-900 dark:text-blue-100 font-medium">
                        5km Team Run
                      </td>
                      <td className="border border-blue-200 dark:border-blue-700 px-4 py-3 text-center text-blue-800 dark:text-blue-200">
                        Age 17+
                      </td>
                      <td className="border border-blue-200 dark:border-blue-700 px-4 py-3 text-center text-blue-800 dark:text-blue-200">
                        Age 17+
                      </td>
                      <td className="border border-blue-200 dark:border-blue-700 px-4 py-3 text-center text-blue-800 dark:text-blue-200">
                        Age 17+
                      </td>
                      <td className="border border-blue-200 dark:border-blue-700 px-4 py-3 text-blue-900 dark:text-blue-100 font-semibold">
                        Rs. 1200/- (Per Team) Including GST
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

            {/* Runner Amenities */}
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

            {/* Contact Info */}
            <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
              <p className="text-base text-gray-700 dark:text-white/90">
                <strong>For team member replacements, contact:</strong>
                <br />
                <a
                  href="mailto:bcorenightrun@rru.ac.in"
                  className="text-primary hover:underline"
                >
                  bcorenightrun@rru.ac.in
                </a>
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

export default TeamRunDetail;
