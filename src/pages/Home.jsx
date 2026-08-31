import BrandIntro from "../components/BrandIntro/BrandIntro";
import CafeExperience from "../components/CafeExperience/CafeExperience";
import Events from "../components/Events/Events";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Gallery from "../components/Gallery/Gallery";
import GavaIntro from "../components/GavaIntro/GavaIntro";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import Menu from "../components/Menu/Menu";
import Reviews from "../components/Reviews/Reviews";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <BrandIntro />
      <CafeExperience />
      <Menu />
      <Events />
      <GavaIntro />
      <Gallery />
      <Reviews />
      <Location />
      <FinalCTA />
    </main>
  );
}

export default Home;
