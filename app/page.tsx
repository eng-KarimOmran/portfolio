import Hero from "@/components/sections/Hero/Hero";
import Resume from "@/components/sections/Resume/Resume";
import SentMe from "@/components/sections/SentMe/SentMe";
import Services from "@/components/sections/Services/Services";
import Work from "@/components/sections/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Resume />
      <Work />
      <SentMe />
    </>
  );
}
