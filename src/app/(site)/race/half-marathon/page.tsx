import HalfMarathonHero from "@/app/components/half-marathon/half-marathon-hero";
import HalfMarathonDetail from "@/app/components/half-marathon/half-marathon-deatil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Half Marathon | BCORE Gandhinagar Marathon",
  description:
    "Join the BCORE Half Marathon - India's first Olympic Centre hosted half-marathon. Experience the ultimate endurance challenge with exclusive runner amenities and Olympic story participation.",
  keywords:
    "half marathon, BCORE, Gandhinagar, Olympic Centre, India, running, marathon, endurance",
};

export default function Page() {
  return (
    <main>
      <HalfMarathonHero />
      <HalfMarathonDetail />
    </main>
  );
}
