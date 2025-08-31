"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animationType?:
    | "fadeUp"
    | "fadeIn"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "stagger";
  staggerDelay?: number;
}

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function SectionAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animationType = "fadeUp",
  staggerDelay = 0.1,
}: SectionAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px", // Trigger when 10% of element is visible
  });

  const variants = animationVariants[animationType];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: animationType === "stagger" ? staggerDelay : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For staggered animations of child elements
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For individual stagger items
export function StaggerItem({
  children,
  className = "",
  animationType = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  animationType?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
}) {
  const variants = animationVariants[animationType];

  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
