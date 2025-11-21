import { Metadata } from "next";
import RulesRegulationsPage from "@/app/components/policies/rules";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Rules & Regulations",
  description:
    "Official rules and regulations for BCORE Night Run 2026. Night gear requirements, code of conduct, women's safety measures, medical support, and environmental responsibilities.",
  keywords: [
    "rules",
    "regulations",
    "night gear",
    "conduct",
    "safety guidelines",
    "BCORE Night Run",
    "marathon rules",
    "environmental responsibility",
  ],
};

export default function Page() {
  return (
    <main>
      <RulesRegulationsPage />
    </main>
  );
}
