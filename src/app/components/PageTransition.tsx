"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.2 },
      y: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: {
      duration: 0.2,
      ease: [0.55, 0.06, 0.68, 0.19],
      opacity: { duration: 0.15 },
      y: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        style={{
          position: "relative",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
