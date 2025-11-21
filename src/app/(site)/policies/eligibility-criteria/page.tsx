import { Metadata } from "next";
import EligibilityCriteriaPage from "@/app/components/policies/eligibility";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Eligibility Criteria",
  description:
    "Complete eligibility criteria for BCORE Night Run 2026. Race categories, start times, time limits, and special eligibility for civilians, law enforcement, minors, para-abled athletes, and teams.",
  keywords: [
    "eligibility",
    "race categories",
    "registration criteria",
    "BCORE Night Run",
    "marathon eligibility",
    "team run",
    "law enforcement discount",
  ],
};

export default function Page() {
  return (
    <main>
      <EligibilityCriteriaPage />
    </main>
  );
}
