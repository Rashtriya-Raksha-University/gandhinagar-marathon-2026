"use client";

import Link from "next/link";

const AccessibilityPage = () => {
  const wheeledEquipmentAllowed: string[] = [
    "Standard day chairs/wheelchairs with a maximum width of 95cm and length of 2.20m",
    "Race Runners (please email us first at bcorenightrun@rru.ac.in)",
    "Crutches, frames, or walkers that are not motorised or geared",
  ];

  const wheeledEquipmentNotAllowed: string[] = [
    "Handbikes, trikes, skates, inline skates such as Rollerblade",
    "Skateboards, scooters, or any geared or motorised device",
    "Race wheelchairs (unless qualified for Elite Wheelchair Marathon Athlete division)",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              ACCESSIBILITY & INCLUSIVITY
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-12">
            {/* Introduction */}
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                We are committed to making the BCORE Night Run an inclusive
                event for everyone. Whether you're a participant, spectator, or
                volunteer, we want you to be able to enjoy the event to the
                fullest.
              </p>
              <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                Our Access & Inclusion initiatives aim to remove barriers and
                provide support so that people of all abilities can take part.
                This includes accessible course and venue design, and dedicated
                services for participants requiring additional assistance.
              </p>
            </div>

            {/* Support Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Need Support?
              </h2>
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-white/90 mb-4">
                  If you need support or have any questions, feel free to reach
                  out to us via email at{" "}
                  <a
                    href="mailto:bcorenightrun@rru.ac.in"
                    className="text-primary dark:text-primary font-semibold hover:underline"
                  >
                    bcorenightrun@rru.ac.in
                  </a>
                </p>
                <p className="text-gray-700 dark:text-white/90">
                  Participants who identify having a disability during
                  registration will receive an email with requests for
                  reasonable adjustments in the first quarter of 2026.
                </p>
              </div>
            </div>

            {/* Taking Part */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Taking Part
              </h2>

              {/* Allowed Equipment */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  You CAN Use the Following Equipment:
                </h3>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <ul className="flex flex-col gap-3">
                    {wheeledEquipmentAllowed.map(
                      (item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-white/80">
                            {item}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Not Allowed Equipment */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  You CANNOT Use the Following Equipment:
                </h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-4">
                    ⚠️ Using the below items will result in disqualification
                  </p>
                  <ul className="flex flex-col gap-3">
                    {wheeledEquipmentNotAllowed.map(
                      (item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-white/80">
                            {item}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Important Notes
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/80">
                    All participants must be <strong>17 years or older</strong>{" "}
                    on race day to join the 21km, 10km, and 5km of the BCORE
                    Night Run.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/80">
                    All participants must complete the course within the{" "}
                    <strong>official cut-off time</strong> to receive an
                    official result.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-white/80">
                    Arrive at least <strong>30 minutes prior</strong> to the
                    official starting time.
                  </p>
                </li>
              </ul>
            </div>

            {/* Race Wheelchairs Note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-white/90">
                <strong>Note:</strong> Race wheelchairs are not permitted unless
                the athlete has qualified for the Elite Wheelchair Marathon
                Athlete division. Race wheelchairs cannot be used in any other
                start group.
              </p>
            </div>
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

export default AccessibilityPage;
