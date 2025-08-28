import FiveKmHero from "@/app/components/five-km/five-km-hero";
import FiveKmDetail from "@/app/components/five-km/five-km-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5KM Race | BCORE Gandhinagar Marathon",
  description:
    "Join the BCORE 5KM Race - perfect for beginners and fitness enthusiasts starting their running journey. Experience accessible yet rewarding racing in India's first Olympic Centre hosted event.",
  keywords:
    "5km race, BCORE, Gandhinagar, Olympic Centre, India, running, beginners, fitness",
};

export default function Page() {
  return (
    <main>
      <FiveKmHero />
      <FiveKmDetail />
    </main>
  );
}
