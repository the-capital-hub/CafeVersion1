import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory/OurStory";
import MenuPage from "./pages/Menu/MenuPage";
import EventPage from "./pages/EventPage/EventPage";
import GavaPage from "./pages/GavaPage/GavaPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BookTablePage from "./pages/BookTablePage/BookTablePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/gava" element={<GavaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-table" element={<BookTablePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
