import Reveal from "@/components/ui/Reveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProblemSection from "@/components/ProblemSection";
import WhatIsHappening from "@/components/WhatIsHappening";
import WhatAIMergeDoes from "@/components/WhatAIMergeDoes";
import Testimonials from "@/components/Testimonials";
import WhatChanges from "@/components/WhatChanges";
import HowToStart from "@/components/HowToStart";
import Pricing from "@/components/Pricing";
import Teams from "@/components/Teams";
import IsThisForYou from "@/components/IsThisForYou";
import FAQ from "@/components/FAQ";
import DataPrivacy from "@/components/DataPrivacy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Reveal />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <ProblemSection />
        <WhatIsHappening />
        <WhatAIMergeDoes />
        <Testimonials />
        <WhatChanges />
        <HowToStart />
        <Pricing />
        <Teams />
        <IsThisForYou />
        <FAQ />
        <DataPrivacy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
