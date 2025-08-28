import FunRaceHero from "@/app/components/fun-race/fun-race-hero";
import FunRaceDetail from "@/app/components/fun-race/fun-race-deatil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Race | BCORE Gandhinagar Marathon",
  description:
    "Join the BCORE Fun Race - perfect for families and kids to experience the joy of running together. A leisurely, non-competitive event celebrating fitness and community spirit.",
  keywords:
    "fun race, BCORE, Gandhinagar, Olympic Centre, India, family running, kids race, community",
};

export default function Page() {
  return (
    <main>
      <FunRaceHero />
      <FunRaceDetail />
    </main>
  );
}
