"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordian";
import { motion, AnimatePresence, Variants } from "framer-motion";

// TypeScript interfaces
interface FaqItem {
  faq_que: string;
  faq_ans: string;
}

interface FaqData {
  data: FaqItem[];
}

interface ApiResponse {
  faqData: FaqData;
}

function Faq() {
  const [faqData, setFaqData] = useState<FaqData | null>(null);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: ApiResponse = await res.json();
        setFaqData(data?.faqData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual FAQ item variants
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
      },
    },
  };

  // Header animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Chevron rotation variants
  const chevronVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <section className="bg-white dark:bg-darkblack py-20 md:py-40">
      <motion.div
        className="flex flex-col gap-24"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-14 xl:gap-24">
              {/* Header */}
              <motion.div
                className="flex flex-col xl:flex xl:flex-row items-start gap-8"
                variants={headerVariants}
              >
                <motion.div
                  className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    08
                  </motion.span>
                  <motion.div
                    className="h-px bg-black/12 dark:bg-white/12"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.p
                    className="section-bedge py-1.5 px-4 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    FAQs
                  </motion.p>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-11"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col gap-5">
                    <motion.h2
                      className="max-w-3xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Frequently asked questions
                    </motion.h2>
                    <motion.p
                      className="max-w-2xl text-secondary/70 dark:text-white/70"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      Discover how we tailor our solutions to meet unique needs,
                      delivering impactful strategies, personalized branding,
                      and exceptional customer experiences.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* FAQ Items */}
              <motion.div
                className="flex flex-col items-end"
                variants={containerVariants}
              >
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col 2xl:max-w-5xl w-full"
                  value={openItem}
                  onValueChange={setOpenItem}
                >
                  {faqData?.data?.map((item: FaqItem, index: number) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-b border-gray-200/50 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300"
                      >
                        <AccordionTrigger className="flex justify-between items-center py-6 hover:no-underline">
                          <motion.h4
                            className="text-left"
                            layout
                            transition={{ duration: 0.2 }}
                          >
                            {item.faq_que}
                          </motion.h4>

                          {/* Animated Chevron */}
                          <motion.div
                            className="ml-4 flex-shrink-0"
                            variants={chevronVariants}
                            animate={
                              openItem === `item-${index}` ? "open" : "closed"
                            }
                            transition={{
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-current"
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </AccordionTrigger>

                        <AccordionContent className="pb-6">
                          <AnimatePresence initial={false}>
                            {openItem === `item-${index}` && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                  y: -10,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                  y: -10,
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                  opacity: { duration: 0.25 },
                                }}
                                className="overflow-hidden"
                              >
                                <motion.p
                                  className="text-secondary/80 dark:text-white/80 leading-relaxed"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                  {item.faq_ans}
                                </motion.p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Faq;
