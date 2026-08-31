
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Leaf,
  Users,
} from "lucide-react";

import "./BrandIntro.css";


/* =====================================================
   4.3 — BRAND IMAGE
===================================================== */

const brandImage =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=92";


/* =====================================================
   VALUES
===================================================== */

const values = [
  {
    number: "01",
    icon: Coffee,
    title: "Food & Coffee",
    text: "Thoughtful plates and beautifully crafted coffee.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "A Slow Pace",
    text: "A space where there is no need to rush the moment.",
  },
  {
    number: "03",
    icon: Users,
    title: "Good People",
    text: "Made for conversations, connections and community.",
  },
];


/* =====================================================
   ANIMATION
===================================================== */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
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


function BrandIntro() {
  return (
    <section
      className="brand-intro"
      id="brand-intro"
    >

      {/* =================================================
          DECORATIVE BACKGROUND
      ================================================= */}

      <div className="brand-intro-orb" />


      <div className="brand-intro-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="brand-intro-top"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div className="brand-intro-index">

            <span>02</span>

            <i />

            <span>THE PLACE</span>

          </div>


          <div className="brand-intro-top-right">

            <Leaf size={14} />

            <span>
              CAFÉ DE VERDE
            </span>

          </div>

        </motion.div>


        {/* =================================================
            HERO COMPOSITION
        ================================================= */}

        <div className="brand-intro-hero">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            className="brand-intro-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={reveal}
          >

            <span className="brand-intro-kicker">
              A PLACE TO PAUSE
            </span>


            <h2>
              More than
              <br />
              <em>a café.</em>
            </h2>


            <div className="brand-intro-rule" />


            <p>
              A neighbourhood space built around
              good food, warm coffee and the simple
              pleasure of spending time together.
            </p>


            <a
              href="#our-story"
              className="brand-intro-cta"
            >

              <span>
                Discover our story
              </span>

              <span className="brand-intro-cta-icon">
                <ArrowUpRight size={16} />
              </span>

            </a>

          </motion.div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div
            className="brand-intro-visual"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="brand-intro-image">

              <img
                src={brandImage}
                alt="Café De Verde interior"
                loading="lazy"
              />


              <div className="brand-intro-image-overlay" />


              <div className="brand-intro-image-top">

                <span>
                  DE VERDE
                </span>

                <span>
                  02
                </span>

              </div>


              <div className="brand-intro-image-caption">

                <span>
                  THE SPACE
                </span>

                <strong>
                  Stay a little.
                  <br />
                  Longer.
                </strong>

              </div>

            </div>


            <div className="brand-intro-stamp">

              <Leaf size={17} />

              <span>
                FOOD
              </span>

              <span>
                COFFEE
              </span>

              <span>
                COMMUNITY
              </span>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            VALUES
        ================================================= */}

        <motion.div
          className="brand-intro-values"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
        >

          {values.map((value) => {

            const Icon = value.icon;

            return (
              <motion.article
                className="brand-value"
                key={value.number}
                variants={reveal}
              >

                <div className="brand-value-number">
                  {value.number}
                </div>


                <div className="brand-value-icon">
                  <Icon size={17} strokeWidth={1.5} />
                </div>


                <div className="brand-value-copy">

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>


                <ArrowUpRight
                  className="brand-value-arrow"
                  size={17}
                />

              </motion.article>
            );

          })}

        </motion.div>

      </div>

    </section>
  );
}


export default BrandIntro;

