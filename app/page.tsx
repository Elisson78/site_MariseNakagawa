import { Hero } from "@/components/features/Hero";
import { About } from "@/components/features/About";
import { Services } from "@/components/features/Services";
import { Plans } from "@/components/features/Plans";
import { Contact } from "@/components/features/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
    </>
  );
}
