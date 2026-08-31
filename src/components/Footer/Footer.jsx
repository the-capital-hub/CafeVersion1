import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import "./Footer.css";


function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer
      className="footer"
      id="contact"
    >

      <div className="footer-container">

        {/* =================================================
            TOP CTA
        ================================================= */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span>
              COME HANG OUT WITH US
            </span>

            <h2>
              Good coffee.
              <br />
              <em>Good company.</em>
            </h2>

          </div>


          <a
            href="#location"
            className="footer-cta-button"
          >

            <span>
              Visit Us
            </span>

            <span>
              <ArrowUpRight size={17} />
            </span>

          </a>

        </div>


        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <span className="footer-eyebrow">
              CAFÉ DE VERDE
            </span>

            <h3>
              Stay for the
              <br />
              <em>good stuff.</em>
            </h3>

            <p>
              Good coffee, thoughtful food,
              meaningful conversations and
              a place worth coming back to.
            </p>


            {/* SOCIAL ICONS */}

            <div className="footer-social">

              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>


              <a
                href="#"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <a href="#story">
              Our Story
            </a>

            <a href="#menu">
              Menu
            </a>

            <a href="#events">
              Events
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#reviews">
              Reviews
            </a>

          </div>


          {/* =================================================
              GAVA
          ================================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              GAVA
            </span>

            <a href="#gava">
              About GAVA
            </a>

            <a href="#gava-stay">
              Stay With Us
            </a>

            <a href="#location">
              Find GAVA
            </a>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">

            <span className="footer-column-title">
              COME SAY HELLO
            </span>


            <a href="#location">

              <MapPin size={13} />

              <span>
                Find Us
              </span>

            </a>


            <a href="#location">

              <span>
                Get Directions
              </span>

              <ArrowUpRight size={13} />

            </a>


            <a href="#contact">

              <span>
                Contact Us
              </span>

              <ArrowUpRight size={13} />

            </a>

          </div>

        </div>


        {/* =================================================
            LARGE BRAND
        ================================================= */}

        <div className="footer-big-brand">

          <span>
            DE VERDE
          </span>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <span>
            © {currentYear} Café De Verde.
            All rights reserved.
          </span>


          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#hero">
              Back to top ↑
            </a>

          </div>

        </div>

      </div>

    </footer>

  );
}


export default Footer;