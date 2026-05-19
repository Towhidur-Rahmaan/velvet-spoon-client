import useSmoothScroll from "../../hooks/useSmoothScroll";
import useIPhoneScroll from "../../hooks/useIPhoneScroll";
import ImmersiveSection from "../../components/ImmersiveSection";

import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Gallery from "./Sections/Gallery";
import Events from "./Sections/Events";
import ChefExperience from "./Sections/ChefExperience";
import Testimonials from "./Sections/Testimonials";
import Membership from "./Sections/Membership";
import ContactPreview from "./Sections/ContactPreview";
import SeasonalMenu from "./Sections/SeasonalMenu";
import SignatureMenu from "./Sections/SignatureMenu";

const Home = () => {
  useSmoothScroll(); // buttery smooth scroll
  useIPhoneScroll(); // Apple-style pin/reveal

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <ImmersiveSection>
        <Hero />
      </ImmersiveSection>

      <div className="bg-linear-to-b from-black to-neutral-950">
        <About />
      </div>

      <SignatureMenu />

      <SeasonalMenu />

      <ChefExperience />

      <div className="bg-linear-to-b from-black to-neutral-950">
        <Gallery />
      </div>

      <Events />

      <ImmersiveSection className="bg-white/2">
        <Testimonials />
      </ImmersiveSection>

      <Membership />

      <ImmersiveSection className="border-t border-white/10">
        <ContactPreview />
      </ImmersiveSection>
    </main>
  );
};

export default Home;
