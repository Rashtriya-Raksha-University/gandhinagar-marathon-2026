import GeneralHero from "@/app/components/general/general-hero";
import GeneralDetail from "@/app/components/general/general-deatil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCORE Gandhinagar Marathon | Accessibility",
  description: "Accessibility policy for BCORE Gandhinagar Marathon.",
};

export default function AccessibilityPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
