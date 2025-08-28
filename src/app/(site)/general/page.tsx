import GeneralHero from "@/app/components/general/general-hero";
import GeneralDetail from "@/app/components/general/general-deatil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCORE Gandhinagar Marathon | General Information",
  description:
    "Join the 1st edition of BCORE Gandhinagar Marathon - India's first Olympic Centre hosted marathon. Choose from Half-Marathon, 10KM, 5KM, or Fun Run categories.",
};

export default function Page() {
  return (
    <main>
      <GeneralHero />
      <GeneralDetail />
    </main>
  );
}
