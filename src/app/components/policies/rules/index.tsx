"use client";

import Link from "next/link";

const RulesRegulationsPage = () => {
  const nightGearRequirements: string[] = [
    "Reflective running apparel or vests — to ensure visibility to vehicles and volunteers",
    "Headlamps or chest lamps — must be functional throughout the run to illuminate the path ahead",
    "Glow bands or LED wrist/ankle straps — recommended for added safety and identification",
    "Comfortable night-appropriate running shoes and breathable clothing — suited to expected weather",
    "Personal hydration gear — optional but advised for long-distance runners (especially 21K)",
  ];

  const conductRules: string[] = [
    "Stay on the designated route at all times. Any deviation or shortcut will lead to immediate disqualification",
    "Cheating, bib swapping, or running under another participant's name is strictly prohibited",
    "No littering on the route — use designated waste disposal bins at hydration points",
    "Follow all instructions issued by volunteers, route marshals, and security personnel",
    "Use of earphones/headphones is discouraged for safety and awareness, especially near intersections",
    "Intoxication or consumption of performance-enhancing substances before or during the race will result in permanent ban",
  ];

  const womenSafetyFeatures: string[] = [
    "Dedicated women's help desk and support patrol team deployed along the course and near the venue",
    "Well-lit courses and checkpoints throughout the route",
    "Emergency helpline and on-ground volunteers available for immediate assistance",
    "Separate warm-up and recovery areas for women runners near the starting point and finish zone",
  ];

  const safetyAdvice: string[] = [
    "Avoid running if feeling unwell or overly fatigued",
    "Notify the nearest volunteer in case of injury, cramps, or dizziness",
    "Carry an emergency contact card or ensure the bib information is filled completely",
  ];

  const environmentalResponsibilities: string[] = [
    "Use reusable hydration bottles or biodegradable cups",
    "Refrain from throwing plastic bottles, wrappers, or other waste along the course",
    "Respect public and private property along the marathon route",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-200 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              RULES & REGULATIONS
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
              Participant Rules and Safety Guidelines
            </p>
          </div>

          {/* Night Gear Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              1. Night Gear Requirements
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg mb-4">
              <p className="text-gray-600 dark:text-white/80 mb-6">
                As the event will be conducted at night, all participants must
                ensure they are clearly visible and equipped for low-light
                running conditions. The following gear is mandatory:
              </p>
              <ul className="flex flex-col gap-4">
                {nightGearRequirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-700 dark:text-red-300 font-semibold">
                ⚠️ Failure to comply with gear requirements may lead to
                disqualification or denial of entry.
              </p>
            </div>
          </div>

          {/* Participant Code of Conduct */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              2. Participant Code of Conduct
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <p className="text-gray-600 dark:text-white/80 mb-6">
                All runners are expected to maintain integrity, sportsmanship,
                and respect throughout the event.
              </p>
              <ul className="flex flex-col gap-4">
                {conductRules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-white/80">{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
              <p className="text-blue-700 dark:text-blue-300">
                <strong>Parking:</strong> Facilities will be provided to runners
                on a first-come, first-served basis. Please use public transport
                for pollution reduction and community building purposes.
              </p>
            </div>
          </div>

          {/* Women's Safety */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              3. Women's Safety and Inclusivity
            </h2>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-lg">
              <ul className="flex flex-col gap-4">
                {womenSafetyFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-white/80">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white dark:bg-lightgray/10 rounded-lg">
                <p className="text-gray-700 dark:text-white/80">
                  <strong>Emergency Helpline:</strong> +91 890 264 4447
                </p>
                <p className="text-sm text-gray-600 dark:text-white/70 mt-2">
                  Female participants are encouraged to report any inappropriate
                  behavior or discomfort to the nearest volunteer or security
                  staff immediately. Enforceable action will be taken by the
                  organizing committee.
                </p>
              </div>
            </div>
          </div>

          {/* Safety and Medical Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              4. Participant Safety and Medical Support
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Medical Facilities Available:
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Medical tents and ambulances stationed at key points and
                      finish line
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Trained first-aid and paramedic teams available throughout
                      the event
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Hydration booths and energy stations at regular intervals
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Participants are advised to:
                </h3>
                <ul className="flex flex-col gap-3">
                  {safetyAdvice.map((advice: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-white/80">
                        {advice}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mt-4 border-l-4 border-amber-500">
              <p className="text-amber-700 dark:text-amber-300">
                <strong>Note:</strong> In case of extreme weather conditions or
                safety concerns, the event management reserves the right to
                modify, delay, or cancel the race.
              </p>
            </div>
          </div>

          {/* Environmental Responsibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              5. Environmental Responsibility
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                We are committed to a clean and green event. All participants
                must:
              </p>
              <ul className="flex flex-col gap-4">
                {environmentalResponsibilities.map(
                  (responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-white/80">
                        {responsibility}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mt-4 border-l-4 border-red-500">
              <p className="text-red-700 dark:text-red-300 font-semibold">
                ⚠️ Littering on the course may result in punishable action.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Important Reminder
            </h3>
            <p className="text-gray-700 dark:text-white/80 mb-4">
              The decisions of the Bharat Center of Olympic Research and
              Education (BCORE) and the Rashtriya Raksha University (RRU) in
              respect to the rules and regulations are final and binding.
            </p>
            <p className="text-gray-700 dark:text-white/80">
              To appeal any matter, reach out to the Athlete Management Desk on
              race day. In case of admissibility, the BCORE organizing committee
              shall review before taking a final decision.
            </p>
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

export default RulesRegulationsPage;
