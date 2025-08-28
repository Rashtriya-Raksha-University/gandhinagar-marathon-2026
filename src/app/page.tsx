import { Metadata } from "next";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Pricing from "./components/home/pricing";
import StatsFacts from "./components/home/stats-facts";
import Services from "./components/home/services";

export const metadata: Metadata = {
  title: "Gandhinagar Marathon 2026 - Official Website",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts />
      <Services />
      <Pricing />
      <Faq />
      <Contact contactdataNumber="10" />
    </>
  );
}
