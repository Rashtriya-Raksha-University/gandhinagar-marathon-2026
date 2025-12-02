"use client";

import Link from "next/link";

const RefundPolicyPage = () => {
  const noRefundScenarios: string[] = [
    "Non-participation for any reason",
    "Failure to collect bib from the venue",
    "Not allowed to run on race day due to high temperature or being unwell",
    "Changing to a different race category (you must pay again for the new category)",
    "Personal reasons or change of plans",
    "Weather conditions",
    "Traffic or transportation issues",
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-200 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              ENTRY REJECTION & REFUND POLICY
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Critical Notice */}
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border-l-4 border-red-500 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span>⚠️</span>
              No Refund Policy
            </h2>
            <p className="text-lg text-gray-700 dark:text-white/80 font-semibold mb-4">
              Once an entry is received, NO requests for refund of application
              fees will be entertained under ANY circumstances.
            </p>
            <p className="text-gray-700 dark:text-white/80">
              The onus of burden shall be on the participant to register
              accurately and intuitively.
            </p>
          </div>

          {/* No Refund Scenarios */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Scenarios Where Refunds Will NOT Be Provided
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-6">
                Application fees shall NOT be refunded by virtue of:
              </p>
              <ul className="flex flex-col gap-3">
                {noRefundScenarios.map((scenario: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      ✕
                    </div>
                    <span className="text-gray-700 dark:text-white/80">
                      {scenario}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Change Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Race Category Change Policy
            </h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg border-l-4 border-amber-500">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                <strong>Important:</strong> If you would like to register for
                another race category after completing your initial
                registration, you will have to:
              </p>
              <ol className="flex flex-col gap-3 mb-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-600">1.</span>
                  <span className="text-gray-700 dark:text-white/80">
                    Register for the new race category
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-600">2.</span>
                  <span className="text-gray-700 dark:text-white/80">
                    Pay the registration fees again for the new category
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-600">3.</span>
                  <span className="text-gray-700 dark:text-white/80">
                    You will NOT be reimbursed for the original category
                  </span>
                </li>
              </ol>
              <div className="bg-white dark:bg-lightgray/10 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-white/80">
                  <strong>Example:</strong> If you registered for 10 kilometers
                  and after 12 days decide to register for 5 kilometers, you
                  must pay registration fees again for 5 kilometers and shall
                  not be reimbursed for the 10 kilometers registration.
                </p>
              </div>
            </div>
          </div>

          {/* Entry Rejection Refund */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Entry Rejection - Refund Process
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-6">
                Where your application is rejected for reasons whatsoever:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-white/80 font-semibold">
                      Refund Timeline
                    </p>
                    <p className="text-sm text-gray-600 dark:text-white/70">
                      The entry fee component will be refunded on or before{" "}
                      <strong>28th February 2026</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    ₹
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-white/80 font-semibold">
                      Processing Charges
                    </p>
                    <p className="text-sm text-gray-600 dark:text-white/70">
                      An amount of <strong>₹200</strong> will be deducted as
                      processing charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Discrepancies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Refund Discrepancies
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                Any refund discrepancies must be brought to the attention of the
                event registration team immediately.
              </p>
              <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                Refund queries will NOT be entertained post{" "}
                <strong>17th February 2026</strong>
              </p>
            </div>
          </div>

          {/* Final Decisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Final Decisions & Appeals
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-6">
                The decisions of the Bharat Center of Olympic Research and
                Education (BCORE) and the Rashtriya Raksha University (RRU) in
                respect to the rules and regulations are final and binding and
                will be respected by the participants.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  How to Appeal
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  To appeal any matter, reach out to the{" "}
                  <strong>Athlete Management Desk</strong> on the day of the
                  race. In case of admissibility, the BCORE organizing committee
                  shall review before taking a final decision.
                </p>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Important Reminders
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Register Carefully:</strong> Double-check all details
                  before submitting your registration as changes cannot be made
                  without additional payment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Bib Collection Deadline:</strong> No bibs will be
                  handed over post 6:00 PM on 10th January under any
                  circumstances.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎽</span>
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Merchandise:</strong> Failure to collect your bib on
                  time means you will NOT receive marathon medals, t-shirts, and
                  other merchandise.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Refund Query Deadline:</strong> All refund-related
                  queries must be raised before 17th February 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg text-center">
            <p className="text-gray-700 dark:text-white/90">
              For refund-related queries, contact us at{" "}
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

export default RefundPolicyPage;
