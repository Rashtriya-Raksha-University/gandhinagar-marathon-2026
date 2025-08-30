import { Variants } from "framer-motion";

// 🔹 Reusable fade-in-up animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// 🔹 Reusable fade-in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
