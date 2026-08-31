
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Leaf,
} from "lucide-react";

import "./OurStory.css";


/* =====================================================
   4.4 — OUR STORY IMAGES
===================================================== */

const storyImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=90";

const storyAccentImage =
  "https://images.unsplash.com/photo-1771308135794-bb59fba08976?auto=format&fit=crop&fm=jpg&q=90&w=1200";

const storyDetailImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90";


/* =====================================================
   ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =====================================================
   OUR STORY
===================================================== */

function OurStory() {
  return (
    <section
      className="our-story-section"
      id="our-story"
    >

      <div className="our-story-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="our-story-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={fadeUp}
        >

          <div className="our-story-label">

            <span className="our-story-number">
              02
            </span>

            <span className="our-story-label-line" />

            <span>
              OUR STORY
            </span>

          </div>


          <div className="our-story-leaf">
            <Leaf
              size={17}
              strokeWidth={1.6}
            />
          </div>

        </motion.div>


        {/* =================================================
            INTRO
        ================================================= */}

        <motion.div
          className="our-story-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
        >

          <div className="our-story-intro-heading">

            <p className="our-story-kicker">
              A PLACE WITH A PURPOSE
            </p>

            <h2>
              More than a café.
              <br />
              <em>A feeling.</em>
            </h2>

          </div>


          <div className="our-story-intro-side">

            <span className="our-story-side-line" />

            <div className="our-story-intro-side-content">

              <p>
                Café De Verde was created around
                something simple — bringing good
                food, warm spaces and good people
                together under one roof.
              </p>


              {/* SMALL IMAGE */}

              <div className="our-story-accent-image">

                <img
                  src={storyAccentImage}
                  alt="Botanical café interior"
                  loading="lazy"
                />

                <span>
                  A LITTLE GREEN · A LOT OF SOUL
                </span>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            MAIN STORY
        ================================================= */}

        <div className="our-story-feature">

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <motion.div
            className="our-story-main-image"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <img
              src={storyImage}
              alt="Café De Verde atmosphere"
              loading="lazy"
            />


            <div className="our-story-image-overlay" />


            <div className="our-story-image-caption">

              <span>
                THE SPACE
              </span>

              <strong>
                Made for moments.
              </strong>

            </div>


            <div className="our-story-image-index">
              01
            </div>

          </motion.div>


          {/* =================================================
              STORY CONTENT
          ================================================= */}

          <motion.div
            className="our-story-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >

            <div className="our-story-content-top">

              <span className="our-story-content-number">
                01
              </span>

              <span className="our-story-content-label">
                THE BEGINNING
              </span>

            </div>


            <h3>
              It all begins
              <br />
              with the space.
            </h3>


            <p>
              We wanted to create somewhere
              that feels natural from the moment
              you walk through the door.
            </p>


            <p>
              A place for a morning coffee,
              a long lunch, an evening with friends
              or an unexpected conversation with
              someone new.
            </p>


            {/* DETAIL IMAGE */}

            <div className="our-story-detail-wrap">

              <div className="our-story-detail-image">

                <img
                  src={storyDetailImage}
                  alt="Café interior"
                  loading="lazy"
                />

              </div>

              <span className="our-story-detail-caption">
                A SPACE TO SLOW DOWN
              </span>

            </div>


            {/* STORY LINK */}

            <a
              href="#menu"
              className="our-story-link"
            >

              <span>
                Discover our experience
              </span>

              <span className="our-story-link-icon">

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />

              </span>

            </a>

          </motion.div>

        </div>


        {/* =================================================
            VALUES
        ================================================= */}

        <motion.div
          className="our-story-values"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* FOOD */}

          <div className="our-story-value">

            <span>
              01
            </span>

            <div>

              <strong>
                FOOD
              </strong>

              <p>
                Thoughtful plates.
              </p>

            </div>

          </div>


          {/* COFFEE */}

          <div className="our-story-value">

            <span>
              02
            </span>

            <div>

              <strong>
                COFFEE
              </strong>

              <p>
                Crafted with care.
              </p>

            </div>

          </div>


          {/* PEOPLE */}

          <div className="our-story-value">

            <span>
              03
            </span>

            <div>

              <strong>
                PEOPLE
              </strong>

              <p>
                Always at the centre.
              </p>

            </div>

          </div>


          {/* COMMUNITY */}

          <div className="our-story-value">

            <span>
              04
            </span>

            <div>

              <strong>
                COMMUNITY
              </strong>

              <p>
                Something worth sharing.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}


export default OurStory;

