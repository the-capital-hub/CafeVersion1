import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const navLinks = [
  { name: "Our Story", href: "#our-story" },
  { name: "Menu", href: "#menu" },
  { name: "Events", href: "#events" },
  { name: "GAVA", href: "#gava" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.35,
      staggerChildren: 0.07,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.25,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: 15,

    transition: {
      duration: 0.2,
    },
  },
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        } ${isMenuOpen ? "navbar-menu-open" : ""}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-container">

          {/* LOGO */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <span className="logo-main">
              CAFÉ DE VERDE
            </span>

            <span className="logo-sub">
              FOOD • COFFEE • COMMUNITY
            </span>
          </Link>


          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-links">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-link"
              >
                <span>{link.name}</span>
              </a>
            ))}

          </nav>


          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="navbar-book-button"
          >
            <span>Book a Table</span>

            <ArrowUpRight size={16} strokeWidth={2} />
          </a>


          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>

              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}

            </AnimatePresence>
          </button>

        </div>
      </motion.header>


      {/* MOBILE MENU */}
      <AnimatePresence>

        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            <div className="mobile-menu-inner">

              <div className="mobile-menu-label">
                EXPLORE
              </div>


              <nav className="mobile-menu-links">

                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={linkVariants}
                    onClick={closeMenu}
                  >
                    <span className="mobile-link-number">
                      0{index + 1}
                    </span>

                    <span className="mobile-link-name">
                      {link.name}
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.7}
                    />
                  </motion.a>
                ))}

              </nav>


              <motion.a
                href="#contact"
                className="mobile-book-button"
                variants={linkVariants}
                onClick={closeMenu}
              >
                <span>Book a Table</span>

                <ArrowUpRight size={18} />
              </motion.a>


              <motion.div
                className="mobile-menu-footer"
                variants={linkVariants}
              >
                <span>CAFÉ DE VERDE</span>

                <span>
                  FOOD • COFFEE • COMMUNITY
                </span>
              </motion.div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;