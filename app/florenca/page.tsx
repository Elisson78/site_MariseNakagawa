import { FlorenceHero } from "@/components/features/florence/FlorenceHero";
import { FlorenceHighlights } from "@/components/features/florence/FlorenceHighlights";
import { FlorenceTours } from "@/components/features/florence/FlorenceTours";
import { FirenzeCardInfo } from "@/components/features/florence/FirenzeCardInfo";
import { SunsetSpots } from "@/components/features/florence/SunsetSpots";
import { TuscanCuisine } from "@/components/features/florence/TuscanCuisine";
import { Contact } from "@/components/features/Contact";

export const metadata = {
  title: "Florença - O Berço do Renascimento | Marise Nakagawa",
  description: "Descubra Florença com tours personalizados. Visite a Galeria Uffizi, Accademia, Duomo e explore a gastronomia toscana com guia especializada.",
};

export default function FlorencePage() {
  return (
    <>
      <FlorenceHero />
      <FlorenceHighlights />
      <FlorenceTours />
      <FirenzeCardInfo />
      <TuscanCuisine />
      <SunsetSpots />
      <Contact />
    </>
  );
}
