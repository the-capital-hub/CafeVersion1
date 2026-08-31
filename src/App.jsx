
import BrandIntro from "./components/BrandIntro/BrandIntro";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./components/OurStory/OurStory";
import Menu from "./components/Menu/Menu";
import Events from "./components/Events/Events";
import GavaIntro from "./components/GavaIntro/GavaIntro";
import GavaStay from "./components/GavaStay/GavaStay";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import CafeExperience from "./components/CafeExperience/CafeExperience";
import EatStayConnection from "./components/EatStayConnect/EatStayConnection";
import Testimonials from "./components/Testimonials/Testimonials";
import FinalCTA from "./components/FinalCTA/FinalCTA";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <BrandIntro/>
        <CafeExperience/>
        <OurStory/>
        <Menu />
        <Events/>
        <EatStayConnection/>
        <GavaIntro/>
        <GavaStay/>
        <Gallery/>
        <Testimonials/>
        <Reviews/>
        <Location/>

      </main>
      <FinalCTA/>
      <Footer/>
    </>
  );
}

export default App;