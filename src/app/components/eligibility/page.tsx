"use client";

import Link from "next/link";

const EligibilityCriteriaPage = () => {
  const raceCategories: { name: string; distance: string }[] = [
    { name: "Half Marathon (21 Kadam Aage)", distance: "21 kilometres" },
    { name: "10km (Dus ke Dam)", distance: "10 kilometres" },
    { name: "5km (5k ka funda)", distance: "5 kilometres" },
    { name: "Team Run (Bhaag Milkar Bhaag)", distance: "5 kilometres" },
    { name: "3km Fun Run (Mini Mini Mini Marathon)", distance: "3 kilometres" },
  ];

  const startTimes: { race: string; time: string }[] = [
    { race: "3km", time: "21:00 PM" },
    { race: "5km", time: "21:30 PM" },
    { race: "10km", time: "21:45 PM" },
    { race: "21km", time: "21:15 PM" },
  ];

  const timeLimits: { race: string; limit: string }[] = [
    { race: "Half-Marathon (21km)", limit: "3 hours 30 minutes" },
    { race: "10 Kilometres", limit: "1 hour 30 minutes" },
    { race: "5 Kilometres", limit: "1 hour" },
    { race: "3 Kilometres", limit: "30 minutes (U-16) / 1 hour (Para-abled)" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              ELIGIBILITY CRITERIA
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
              Civilians and Law-Enforcement Officers
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg mb-12">
            <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
              We are encouraging participants to take part in this run to
              reinforce evening safety for women, demonstrating clean and green
              city life, reminding participants of yearly resolutions, and
              lastly, uniting citizens of the nation creating the spirit of
              Olympism.
            </p>
          </div>

          {/* Race Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Race Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {raceCategories.map(
                (
                  category: { name: string; distance: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-white/70">
                      {category.distance}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Start Times */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tentative Starting Times
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
              Saturday, 10th January 2026
            </p>
            <div className="bg-white dark:bg-lightgray/10 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Race Category</th>
                    <th className="px-6 py-3 text-left">Start Time</th>
                  </tr>
                </thead>
                <tbody>
                  {startTimes.map(
                    (item: { race: string; time: string }, index: number) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-white/10"
                      >
                        <td className="px-6 py-4 text-gray-700 dark:text-white/80">
                          {item.race}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-white/80 font-semibold">
                          {item.time}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Time Limits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Time Limits
            </h2>
            <div className="bg-white dark:bg-lightgray/10 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Race</th>
                    <th className="px-6 py-3 text-left">Maximum Time</th>
                  </tr>
                </thead>
                <tbody>
                  {timeLimits.map(
                    (item: { race: string; limit: string }, index: number) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-white/10"
                      >
                        <td className="px-6 py-4 text-gray-700 dark:text-white/80">
                          {item.race}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-white/80 font-semibold">
                          {item.limit}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* General Rules */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              General Application Rules
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Important:</strong> An applicant is advised to apply
                  for only one of the on-ground race categories. The organizing
                  committee will make a decision on the day of the race in case
                  multiple registrations have taken place.
                </p>
              </div>

              <div className="bg-white dark:bg-lightgray/10 p-6 rounded-lg">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">
                      An applicant must apply using a{" "}
                      <strong>single email address</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">
                      Applicants will be confirmed only for the race category
                      they applied for, subject to fulfilling all conditions and
                      confirmation criteria.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">
                      Registration will be conducted{" "}
                      <strong>online only</strong> and requires payment of
                      applicable entry fees.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">
                      Present your uploaded government photo ID card on the day
                      of collection of bibs for cross-verification, or else
                      participation shall not take place.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Special Eligibility Categories
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Minor Participants */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Minor Participants (U-16)
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Accepted up to age 16
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Only 3km race allowed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Parent/guardian permission required
                    </span>
                  </li>
                </ul>
              </div>

              {/* Para-abled */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Para-abled Athletes
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Open to all ages
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Only 3km race participation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Equipment must be safe and ready
                    </span>
                  </li>
                </ul>
              </div>

              {/* Team Run */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Team Run
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      5km distance only
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      3 members per team (mandatory)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Age 17+ required
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      All-male, all-female, or mixed teams
                    </span>
                  </li>
                </ul>
              </div>

              {/* RRU/NCC/NSS */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  RRU/NCC/NSS/BharatScoutGuide
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      5km, 10km, 21km only
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Current students with valid ID
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Special discounted rates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Verification Warning */}
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border-l-4 border-red-500 mb-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              ⚠️ Verification & Bib Misuse
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-white/80">
                  Confirmed runner's identity and proof of residence may be
                  verified. If any information is found to be incorrect,
                  participation will be disqualified without a refund.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Bib Impersonation:</strong> If a participant is found
                  not wearing their allotted bib, they will be disqualified from
                  current and subsequent editions. Legal action may be taken.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-white/80">
                  No bibs will be handed over post 6:00 PM on 10th January under
                  any circumstances.
                </p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg text-center">
            <p className="text-gray-700 dark:text-white/90">
              For queries, contact us at{" "}
              <a
                href="mailto:bcorenightrun@rru.ac.in"
                className="text-primary dark:text-primary font-semibold hover:underline"
              >
                bcorenightrun@rru.ac.in
              </a>
            </p>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white font-semibold rounded-full transition-all duration-300 hover:bg-secondary/90 hover:scale-105"
            >
              <span>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteriaPage;
