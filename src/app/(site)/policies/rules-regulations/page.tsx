import { Metadata as RulesMetadata } from "next";
import GeneralDetail from "@/app/components/general/general-deatil";

export const metadata: RulesMetadata = {
  title: "BCORE Gandhinagar Marathon | Rules & Regulations",
  description: "Official rules and regulations for the marathon.",
};

export default function RulesRegulationsPage() {
  return (
    <main>
      <GeneralDetail />
    </main>
  );
}
