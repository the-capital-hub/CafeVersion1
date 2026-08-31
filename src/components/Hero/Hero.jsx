import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Leaf,
  MapPin,
  Users,
} from "lucide-react";

import "./Hero.css";


/* =====================================================
   HERO IMAGE
   Online image — no local file required
===================================================== */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=95";


/* =====================================================
   FEATURE DATA
===================================================== */

const features = [
  {
    icon: Leaf,
    title: "SEASONAL",
    text: "Ingredients, always fresh.",
  },

  {
    icon: Coffee,
    title: "SPECIALTY COFFEE",
    text: "Sourced ethically, brewed perfectly.",
  },

  {
    icon: Users,
    title: "MADE FOR PEOPLE",
    text: "A space for real connections.",
  },
];


/* =====================================================
   ANIMATIONS
===================================================== */

const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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


const titleReveal = {
  hidden: {
    opacity: 0,
    y: "105%",
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >

      {/* =================================================
          MAIN IMAGE
      ================================================= */}

      <div className="hero-image-wrap">

        <motion.img
          className="hero-image"
          src={HERO_IMAGE}
          alt="Café De Verde interior"
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

      </div>


      {/* =================================================
          IMAGE OVERLAY
      ================================================= */}

      <div className="hero-image-overlay" />


      {/* =================================================
          LEFT PANEL
      ================================================= */}

      <div className="hero-panel">


        {/* =================================================
            NAVIGATION
        ================================================= */}



        {/* =================================================
            CONTENT
        ================================================= */}

        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >


          {/* EYEBROW */}



          {/* TITLE */}

          <h1 className="hero-title">

            <span className="hero-title-mask">

              <motion.span
                variants={titleReveal}
              >
                Café
              </motion.span>

            </span>


            <span className="hero-title-mask">

              <motion.span
                className="hero-title-accent"
                variants={titleReveal}
              >
                De Verde
              </motion.span>

            </span>

          </h1>


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            variants={fadeUp}
          >
            A neighbourhood café where
            good food, warm coffee and
            meaningful conversations
            come naturally.
          </motion.p>


          {/* STORY LINK */}

          <motion.a
            href="#our-story"
            className="hero-story"
            variants={fadeUp}
          >

            <span>
              DISCOVER OUR STORY
            </span>

            <ArrowRight size={18} />

          </motion.a>


          {/* LOCATION */}

          <motion.div
            className="hero-location"
            variants={fadeUp}
          >

            <MapPin size={13} />

            <span>
              KORAMANGALA · BENGALURU
            </span>

          </motion.div>

        </motion.div>


        {/* =================================================
            DECORATIVE BRAND MARK
        ================================================= */}

       

      </div>


      {/* =================================================
          FEATURE STRIP
      ================================================= */}

      <motion.div
        className="hero-features"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {features.map(
          (feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                className="hero-feature"
                key={feature.title}
              >

                <div className="hero-feature-icon">
                  <Icon size={23} />
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

          }
        )}

      </motion.div>


      {/* =================================================
          SCROLL
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
          delay: 1.4,
          duration: 0.7,
        }}
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight size={14} />
        </motion.div>

      </motion.div>

    </section>
  );
}


export default Hero;