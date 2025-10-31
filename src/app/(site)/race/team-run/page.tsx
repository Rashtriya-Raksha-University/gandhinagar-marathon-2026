import TeamRunHero from "@/app/components/team-run/team-run-hero";
import TeamRunDetail from "@/app/components/team-run/team-run-deatil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Run | BCORE Gandhinagar Marathon",
  description:
    "Join the BCORE Team Night Run - Bhaag Milkar Bhaag! Where teamwork meets glow-in-the-dark fun. Grab a partner and dash through Gandhinagar's lit-up streets for a night of energy, laughter, and friendly competition.",
  keywords:
    "team run, BCORE, Gandhinagar, Olympic Centre, India, night run, team race, Bhaag Milkar Bhaag, partner run, community",
};

export default function Page() {
  return (
    <main>
      <TeamRunHero />
      <TeamRunDetail />
    </main>
  );
}
