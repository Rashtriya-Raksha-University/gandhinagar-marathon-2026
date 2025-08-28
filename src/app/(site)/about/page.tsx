import AboutusDetail from "@/app/components/about/aboutus-detail";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BCORE | Bharat Centre of Olympic Research and Education",
  description:
    "Learn about BCORE - India's first dedicated Olympic Research facility recognized by the International Olympic Committee. Promoting Olympism and fostering Olympic ideals during the Amrit Kaal.",
  keywords:
    "BCORE, Olympic Research, India, International Olympic Committee, Indian Olympic Association, Amrit Kaal, Olympic ideals",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="@/app/components/shared/hero-banner"
        heading="About BCORE"
        desc="India's first <span>Olympic Research facility</span> recognized by the International Olympic Committee"
      />
      <AboutusDetail />
    </main>
  );
}
