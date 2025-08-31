"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import NavigationLink from "../../shared/navigation-link";
import { useEffect, useState } from "react";
import SectionAnimation, {
  StaggerContainer,
  StaggerItem,
} from "@/app/components/SectionAnimation";

function StatsFacts() {
  const [statsFactData, setStatsFactData] = useState<any>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data) {
          setStatsFactData(data?.statsFactData);
        } else {
          console.error("No data found for statsFactData");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative bg-white dark:bg-secondary overflow-hidden">
      <div className="relative py-20 md:py-40 z-10">
        <div className="container">
          <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
            {/* Header Section Animation */}
            <SectionAnimation
              animationType="slideRight"
              duration={0.8}
              className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl"
            >
              <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                {statsFactData && statsFactData?.number}
              </span>
              <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
              <p className="section-bedge py-1.5 px-4 rounded-full">
                {statsFactData && statsFactData?.name}
              </p>
            </SectionAnimation>

            <div className="flex flex-col gap-11">
              {/* Title and Description Animation */}
              <SectionAnimation
                animationType="fadeUp"
                delay={0.2}
                duration={0.8}
                className="flex flex-col gap-5"
              >
                <h2 className="max-w-3xl">{statsFactData?.heading}</h2>
                <p className="max-w-xl text-secondary/70 dark:text-white/70">
                  {statsFactData?.description}
                </p>
              </SectionAnimation>

              {/* Stats Grid with Stagger Animation */}
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                delay={0.4}
                staggerDelay={0.2}
              >
                {statsFactData &&
                  statsFactData?.scoreData?.map((value: any, index: any) => {
                    return (
                      <StaggerItem
                        key={index}
                        animationType="fadeUp"
                        className="flex flex-col gap-5 pt-4 md:pt-11 border-t border-secondary/12 dark:border-white/12"
                      >
                        <div ref={ref}>
                          <h3 className="text-5xl md:text-6xl Xxl:text-7xl font-bold">
                            {inView ? (
                              <CountUp
                                start={0}
                                end={value.number}
                                duration={3}
                              />
                            ) : (
                              "0"
                            )}
                            {value.numberValue && (
                              <span>{value.numberValue}</span>
                            )}
                            <span>+</span>
                          </h3>
                        </div>
                        <p className="text-base text-secondary/70 dark:text-white/70">
                          {value.scoreDescp}
                        </p>
                      </StaggerItem>
                    );
                  })}
              </StaggerContainer>

              {/* Navigation Link Animation */}
              <SectionAnimation
                animationType="fadeUp"
                delay={0.8}
                duration={0.6}
              >
                <NavigationLink
                  navigationTitle="Who we are"
                  navigationLink="/about"
                  transform={true}
                />
              </SectionAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Animation */}
      <SectionAnimation
        animationType="scale"
        delay={1}
        duration={1.2}
        className="absolute -bottom-28 -left-20"
      >
        <Image
          src={"/images/home/statsfact/sectionbg.png"}
          alt="image"
          height={590}
          width={590}
          className="dark:hidden"
        />
        <Image
          src={"/images/home/statsfact/sectionbgdark.png"}
          alt="image"
          height={590}
          width={590}
          className="hidden dark:block"
        />
      </SectionAnimation>
    </section>
  );
}

export default StatsFacts;
