"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Logoslider from "./Logoslider";
import Slider from "react-infinite-logo-slider";
import { useEffect, useState } from "react";
import SectionAnimation, {
  StaggerContainer,
  StaggerItem,
} from "@/app/components/SectionAnimation";
import type {
  PageData,
  PricingPlan,
  PartnerLogo,
  Discount,
} from "@/types/race.type";

function Pricing() {
  const [pricingData, setPricingData] = useState<
    PageData["pricingData"] | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: PageData = await res.json();
        setPricingData(data?.pricingData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  // Function to get tag color based on index
  const getTagColor = (index: number): string => {
    const colors = [
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    ];
    return colors[index % colors.length];
  };

  // Function to get discount badge color
  const getDiscountColor = (discount: string): string => {
    if (discount === "10%")
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
    if (discount === "25%")
      return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300";
    if (discount === "50%")
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
    return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
  };

  return (
    <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-14 xl:gap-24">
              {/* Header Section with Animation */}
              <SectionAnimation animationType="fadeUp" duration={0.8}>
                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                  <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                    <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                      07
                    </span>
                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                    <p className="section-bedge py-1.5 px-4 rounded-full">
                      Pricing
                    </p>
                  </div>
                  <div className="flex flex-col gap-11">
                    <div className="flex flex-col gap-5 ">
                      <h2 className="max-w-3xl">Affordable pricing</h2>
                      <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                        Join India's premier night run event with multiple race
                        categories designed for all fitness levels. Choose your
                        distance and register today!
                      </p>
                    </div>
                  </div>
                </div>
              </SectionAnimation>

              {/* Pricing Cards with Stagger Animation */}
              <StaggerContainer
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-12"
                delay={0.2}
                staggerDelay={0.15}
              >
                {pricingData?.data?.map((value: PricingPlan, index: number) => {
                  return (
                    <StaggerItem
                      key={index}
                      animationType="fadeUp"
                      className="bg-white dark:bg-lightgray/10 p-5 xl:p-7 flex flex-col gap-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Header Section */}
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3 flex-wrap">
                          <p className="font-semibold text-lg">
                            {value.planName}
                          </p>

                          {value.tag && (
                            <div className="flex items-center gap-2 bg-secondary w-fit py-1 px-3 rounded-full">
                              <Icon
                                icon="fluent:fire-20-regular"
                                width="16"
                                height="16"
                                style={{ color: "#fff" }}
                              />
                              <span className="text-white text-sm font-medium">
                                {value.tag}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div>
                          <div className="flex items-center gap-3">
                            {value.cancelPrice && (
                              <h3 className="text-2xl text-secondary/40 dark:text-white/40">
                                <del>{value.cancelPrice}</del>
                              </h3>
                            )}
                            <h3 className="text-2xl font-bold">
                              {value.planPrice}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-secondary/70 dark:text-white/70 leading-relaxed">
                          {value.planDescp}
                        </p>

                        {/* Eligibility */}
                        <div className="pt-3 border-t border-secondary/10 dark:border-white/10">
                          <p className="text-xs font-semibold text-secondary/60 dark:text-white/60 mb-2">
                            ELIGIBILITY
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {value.eligibility
                              .split(/[,+]/)
                              .map((item: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="text-sm text-secondary/80 dark:text-white/80"
                                >
                                  {item.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tags Section */}
                      <div className="flex flex-col gap-3">
                        {value.tags.map((tag: string, tagIndex: number) => (
                          <div
                            key={tagIndex}
                            className={`${getTagColor(tagIndex)} px-3 py-2 rounded-lg text-xs font-medium`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      {/* Buttons Section */}
                      <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                        {/* Learn More Button */}
                        <Link
                          href={`/${value.slug}`}
                          className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out"
                        >
                          <span className="py-3 px-4 text-base font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                            More
                          </span>
                          <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                            <svg
                              className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                              width="48"
                              height="48"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_1_873)">
                                <rect
                                  x="3"
                                  y="2"
                                  width="52"
                                  height="52"
                                  rx="26"
                                  fill="white"
                                />
                                <path
                                  d="M24 23H34M34 23V33M34 23L24 33"
                                  stroke="#1F2A2E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </Link>

                        {/* Register Now Button */}
                        <Link
                          href="/register"
                          className="flex justify-center items-center w-full bg-secondary hover:bg-primary rounded-full transition-all duration-300 ease-in-out"
                        >
                          <span className="py-3 px-4 text-base font-bold text-white group-hover:text-secondary transition-all duration-300 ease-in-out">
                            Register Now
                          </span>
                        </Link>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* Partner Logo Section */}
            <SectionAnimation
              animationType="fadeUp"
              delay={0.6}
              className="flex flex-col gap-10"
            >
              <p className="text-secondary dark:text-white text-center">
                Many trusted partners & clients
              </p>
              <Slider duration={20} pauseOnHover={true} blurBorders={false}>
                {(pricingData?.partnerLogo || []).map(
                  (items: PartnerLogo | any, index: number) => {
                    const logo =
                      (items as any)?.light || (items as any)?.dark
                        ? {
                            light: (items as any).light ?? "",
                            dark:
                              (items as any).dark ?? (items as any).light ?? "",
                          }
                        : {
                            light: String((items as any)?.url ?? items ?? ""),
                            dark: String((items as any)?.url ?? items ?? ""),
                          };
                    return <Logoslider key={index} logo={logo} />;
                  }
                )}
              </Slider>
            </SectionAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
