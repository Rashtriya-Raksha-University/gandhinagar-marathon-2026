import { Metadata as HealthMetadata } from "next";
import GeneralDetail from "@/app/components/general/general-deatil";

export const metadata: HealthMetadata = {
  title: "BCORE Gandhinagar Marathon | Health & Safety",
  description: "Health and safety guidelines for participants.",
};

export default function HealthSafetyPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
