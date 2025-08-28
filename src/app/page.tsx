import { Metadata } from "next";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Pricing from "./components/home/pricing";
import StatsFacts from "./components/home/stats-facts";

export const metadata: Metadata = {
  title: "Studiova",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts />
      <Pricing />
      <Faq />
      <Contact contactdataNumber="10" />
    </>
  );
}
