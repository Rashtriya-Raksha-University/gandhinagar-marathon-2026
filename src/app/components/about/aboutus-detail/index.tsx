"use client";

import Image from "next/image";

const AboutusDetail = () => {
  return (
    <>
      {/* About BCORE Section */}
      <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="max-w-xl w-full flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo/bcore.png"
                  alt="BCORE Logo"
                  width={300}
                  height={150}
                  className="max-w-full h-auto"
                />
              </div>
              {/* <h2 className="text-56 text-gray-800 dark:text-white">
                About BCORE
              </h2> */}
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-secondary dark:text-white text-lg leading-relaxed">
                The Bharat Centre of Olympic Research and Education (BCORE) is
                the first dedicated Olympic Research facility in India and South
                Asia officially recognized by the International Olympic
                Committee and endorsed by the Indian Olympic Association.
              </p>
              <p className="text-secondary dark:text-white text-lg leading-relaxed">
                BCORE serves as a hub for disseminating research-based knowledge
                with a focus to promote Olympism and fostering Olympic ideals
                within India during the <em>Amrit Kaal</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
              OUR OBJECTIVES
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed">
                  Inspire fitness and mental well-being in the community.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed">
                  Build momentum for World Police & Fire Games 2029 and Olympics
                  2036.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <p className="text-gray-700 dark:text-white/90 text-lg leading-relaxed">
                  Provide a platform for youth, students and armed forces
                  personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Future Events Section */}
      <section className="py-16 md:py-24 dark:bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
              OUR FUTURE EVENTS
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    All India Sports Police Control Board
                  </h3>
                </div>
                <span className="text-primary font-bold text-lg">2025</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    2nd International Olympic Research Conference
                  </h3>
                </div>
                <span className="text-primary font-bold text-lg">2026</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    World Police & Fire Games
                  </h3>
                </div>
                <span className="text-primary font-bold text-lg">2029</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusDetail;
