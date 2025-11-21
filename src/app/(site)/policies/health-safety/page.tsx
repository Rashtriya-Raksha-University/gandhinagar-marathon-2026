import { Metadata } from "next";
import HealthSafetyPage from "@/app/components/policies/health-safety";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Health & Safety",
  description:
    "Health and safety guidelines for BCORE Night Run 2026. Medical consultation advice, participant responsibilities, emergency contacts, night race preparation, and hydration planning.",
  keywords: [
    "health",
    "safety",
    "medical",
    "emergency",
    "BCORE Night Run",
    "runner safety",
    "health guidelines",
    "medical support",
  ],
};

export default function Page() {
  return (
    <main>
      <HealthSafetyPage />
    </main>
  );
}
