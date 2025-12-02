"use client";

import Link from "next/link";

const HealthSafetyPage = () => {
  const participantResponsibilities: string[] = [
    "It is the sole discretion and responsibility of the participant to decide whether to participate on race day if it coincides with a religious and/or cultural festivity involving fasting",
    "The race will be held at night - participants must be prepared with transport arrangements, sports gear, adequate clothing, etc.",
    "Consult your physician before starting any exercise program",
    "Fill out the emergency information on the reverse of your bib number, including medical history, medications taken, and contact person",
    "Understand the local weather forecasts and risks associated with temperature changes during the run",
    "Develop a suitable hydration plan for race day",
    "If you experience medical issues, seek help immediately",
    "Aid fellow participants in distress and seek medical assistance if required",
  ];

  const medicalConditions: string[] = [
    "Diabetes",
    "Low or high blood pressure",
    "Known personal or family history of cardiac diseases",
    "Any other health concerns requiring ongoing treatment",
    "Recently undergone major surgeries",
    "Recovered from post-COVID or respiratory viral infection",
    "Experience exercise-induced symptoms such as chest pain, shortness of breath, dizziness, or fainting",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-200 dark:bg-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              HEALTH & SAFETY
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
              Your well-being is our priority. Please read these guidelines
              carefully.
            </p>
          </div>

          {/* Medical Consultation Warning */}
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border-l-4 border-red-500 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              ⚠️ Important Medical Advisory
            </h2>
            <p className="text-gray-700 dark:text-white/80 mb-6">
              <strong>
                Consult your physician before starting any exercise program.
              </strong>{" "}
              If you have any of the following conditions, seeking medical
              advice is essential:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {medicalConditions.map((condition: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700 dark:text-white/80">
                    {condition}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white dark:bg-lightgray/10 rounded-lg">
              <p className="text-gray-700 dark:text-white/80">
                This ensures you are well-prepared and aware of potential health
                risks associated with distance running, promoting a safe and
                enjoyable experience on race day.
              </p>
            </div>
          </div>

          {/* Responsibilities of Every Participant */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Responsibilities of Every Participant
            </h2>
            <div className="bg-white dark:bg-lightgray/10 p-8 rounded-lg">
              <ul className="flex flex-col gap-4">
                {participantResponsibilities.map(
                  (responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-white/80">
                        {responsibility}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Emergency Contact & Medical Assistance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Event Helpline
                </h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  +91 890 264 4447
                </p>
                <p className="text-sm text-gray-600 dark:text-white/70 mt-2">
                  Available throughout the event
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Course Medical Groups
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Medical tents along the route
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Trained paramedics on standby
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 dark:text-white/80">
                      Ambulance services available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Night Race Preparation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Night Race Preparation
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-white/80 mb-6">
                The race will be held at night time. Participants must be
                prepared accordingly, including:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-lightgray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Transport
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    Plan your arrival and departure arrangements in advance
                  </p>
                </div>
                <div className="bg-white dark:bg-lightgray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Sports Gear
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    Reflective clothing, headlamps, and proper running shoes
                  </p>
                </div>
                <div className="bg-white dark:bg-lightgray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Adequate Clothing
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    Weather-appropriate attire for night temperatures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bib Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Emergency Information on Your Bib
            </h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg border-l-4 border-amber-500">
              <p className="text-gray-700 dark:text-white/80 mb-4">
                <strong>MANDATORY:</strong> Fill out the emergency information
                on the reverse of your bib number before race day:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span className="text-gray-700 dark:text-white/80">
                    Medical history
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span className="text-gray-700 dark:text-white/80">
                    Current medications being taken
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span className="text-gray-700 dark:text-white/80">
                    Emergency contact person with phone number
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Weather & Hydration */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Weather & Hydration Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Weather Preparation
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  Understand the local weather forecasts and risks associated
                  with temperature changes during the run. Night temperatures in
                  January can vary significantly.
                </p>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Hydration Strategy
                </h3>
                <p className="text-gray-700 dark:text-white/80">
                  Develop a suitable hydration plan for race day. Hydration
                  stations will be available at regular intervals along the
                  route.
                </p>
              </div>
            </div>
          </div>

          {/* Helping Others */}
          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Spirit of Community
            </h2>
            <p className="text-gray-700 dark:text-white/80">
              <strong>Aid fellow participants in distress.</strong> If you see
              someone struggling, please help them and seek medical assistance
              from course medical groups or call the event helpline immediately.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg text-center">
            <p className="text-gray-700 dark:text-white/90">
              For health-related queries, contact us at{" "}
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

export default HealthSafetyPage;
