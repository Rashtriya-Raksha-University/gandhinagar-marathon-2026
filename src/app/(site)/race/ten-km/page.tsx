import TenKmHero from "@/app/components/ten-km/ten-km-hero";
import TenKmDetail from "@/app/components/ten-km/ten-km-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10KM Race | BCORE Gandhinagar Marathon",
  description:
    "Join the BCORE 10KM Race - perfect for intermediate runners seeking a challenging yet achievable distance. Experience Gandhinagar's beautiful landscapes in India's first Olympic Centre hosted race.",
  keywords:
    "10km race, BCORE, Gandhinagar, Olympic Centre, India, running, intermediate runners",
};

export default function Page() {
  return (
    <main>
      <TenKmHero />
      <TenKmDetail />
    </main>
  );
}
