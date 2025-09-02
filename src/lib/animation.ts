import { Variants } from "framer-motion";
import { easeOut } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.4,
      ease: easeOut,
    },
  },
} as const;

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
} as const;

export const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const arrowAnimation = {
  animate: { x: [0, 4, 0] },
  transition: { repeat: Infinity, duration: 1.8 },
};
