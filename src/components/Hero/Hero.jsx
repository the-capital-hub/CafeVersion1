
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Leaf,
  MapPin,
  Users,
} from "lucide-react";

import "./Hero.css";


/* =====================================================
   4.3 — HERO IMAGE
   Premium café interior
===================================================== */


  const HERO_IMAGE =
  "https://static.wixstatic.com/media/3962bf_897e26f3cd5b44c99107ddb87190cf3c~mv2.png/v1/fill/w_900,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/3962bf_897e26f3cd5b44c99107ddb87190cf3c~mv2.png";



/* =====================================================
   FEATURE DATA
===================================================== */

const features = [
  {
    icon: Leaf,
    title: "SEASONAL",
    text: "Thoughtful ingredients, fresh every day.",
  },

  {
    icon: Coffee,
    title: "SPECIALTY COFFEE",
    text: "Ethically sourced. Carefully brewed.",
  },

  {
    icon: Users,
    title: "COMMUNITY",
    text: "A space made for good conversations.",
  },
];


/* =====================================================
   ANIMATION
===================================================== */

const heroContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const reveal = {
  hidden: {
    opacity: 0,
    y: "110%",
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =====================================================
   HERO
===================================================== */

function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <div className="hero-image-wrap">

        <motion.img
          className="hero-image"
          src={HERO_IMAGE}
          alt="Warm botanical café interior"
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

      </div>


      {/* =================================================
          IMAGE OVERLAY
      ================================================= */}

      <div className="hero-image-overlay" />


      {/* =================================================
          TOP BRAND META
      ================================================= */}

      <motion.div
        className="hero-meta"
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <span>
          EST. 2024
        </span>

        <span className="hero-meta-line" />

        <span>
          KORAMANGALA · BENGALURU
        </span>

      </motion.div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <motion.div
        className="hero-content"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >

        {/* EYEBROW */}

        <motion.div
          className="hero-eyebrow"
          variants={fadeUp}
        >

          <span className="hero-eyebrow-dot" />

          <span>
            FOOD · COFFEE · COMMUNITY
          </span>

        </motion.div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h1 className="hero-title">

          <span className="hero-title-line">

            <span className="hero-title-mask">

              <motion.span variants={reveal}>
                Café
              </motion.span>

            </span>

          </span>


          <span className="hero-title-line">

            <span className="hero-title-mask">

              <motion.span
                className="hero-title-accent"
                variants={reveal}
              >
                De Verde.
              </motion.span>

            </span>

          </span>

        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          className="hero-description"
          variants={fadeUp}
        >
          A neighbourhood café shaped by
          good food, thoughtful coffee and
          the simple pleasure of being together.
        </motion.p>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <motion.div
          className="hero-actions"
          variants={fadeUp}
        >

          <a
            href="#menu"
            className="hero-primary-button"
          >

            <span>
              Explore the menu
            </span>

            <span className="hero-button-icon">
              <ArrowUpRight size={16} />
            </span>

          </a>


          <a
            href="#our-story"
            className="hero-secondary-link"
          >

            <span>
              Our story
            </span>

            <span className="hero-secondary-arrow">
              <ArrowUpRight size={15} />
            </span>

          </a>

        </motion.div>


        {/* =================================================
            LOCATION
        ================================================= */}

        <motion.div
          className="hero-location"
          variants={fadeUp}
        >

          <MapPin size={14} />

          <span>
            KORAMANGALA, BENGALURU
          </span>

        </motion.div>

      </motion.div>


      {/* =================================================
          FEATURE STRIP
      ================================================= */}

      <motion.div
        className="hero-features"
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <div
              className="hero-feature"
              key={feature.title}
            >

              <div className="hero-feature-icon">

                <Icon size={19} />

              </div>


              <div className="hero-feature-copy">

                <span>
                  {feature.title}
                </span>

                <p>
                  {feature.text}
                </p>

              </div>

            </div>
          );

        })}

      </motion.div>


      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.7,
        }}
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <motion.span
          className="hero-scroll-icon"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>

      </motion.div>

    </section>
  );
}


export default Hero;
