import { Metadata as EligibilityMetadata } from "next";
import GeneralDetail from "@/app/components/general/general-deatil";

export const metadata: EligibilityMetadata = {
  title: "BCORE Gandhinagar Marathon | Eligibility Criteria",
  description: "Eligibility criteria for participants.",
};

export default function EligibilityPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
