import AboutusDetail from "@/app/components/about/aboutus-detail";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Aboutus | Studiova",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="About us"
        desc="We craft <span>innovative digital</span> designs that amplify brand identity and drive meaningful results"
      />
      <AboutusDetail />
    </main>
  );
}
