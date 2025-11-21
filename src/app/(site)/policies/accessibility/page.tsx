import { Metadata } from "next";
import AccessibilityPage from "@/app/components/policies/accessibility";

export const metadata: Metadata = {
  title: "BCORE Night Run 2026 | Accessibility & Inclusivity",
  description:
    "Learn about accessibility and inclusivity initiatives at BCORE Night Run. Information on wheeled equipment, support services, and inclusive participation options for all abilities.",
  keywords: [
    "accessibility",
    "inclusivity",
    "wheelchair",
    "para-athletes",
    "BCORE Night Run",
    "adaptive sports",
  ],
};

export default function Page() {
  return (
    <main>
      <AccessibilityPage />
    </main>
  );
}
