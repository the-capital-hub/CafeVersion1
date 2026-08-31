import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";

import "./OurStory.css";

const storyImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=90";

const storyDetailImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


function OurStory() {
  return (
    <section
      className="our-story-section"
      id="our-story"
    >

      <div className="our-story-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="our-story-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
        >

          <div className="our-story-label">

            <span>02</span>

            <span className="our-story-label-line" />

            <span>OUR STORY</span>

          </div>


          <div className="our-story-leaf">
            <Leaf size={17} />
          </div>

        </motion.div>


        {/* =================================================
            INTRO HEADING
        ================================================= */}

        <motion.div
          className="our-story-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={fadeUp}
        >

          <div>

            <p className="our-story-kicker">
              A PLACE WITH A PURPOSE
            </p>

            <h2>
              More than a café.
              <br />
              <em>A feeling.</em>
            </h2>

          </div>


          <p className="our-story-intro-text">
            Café De Verde was created around
            something simple — bringing good
            food, warm spaces and good people
            together under one roof.
          </p>

        </motion.div>


        {/* =================================================
            MAIN STORY GRID
        ================================================= */}

        <div className="our-story-grid">

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <motion.div
            className="our-story-main-image"
            initial={{
              opacity: 0,
              scale: 0.97,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <img
              src={storyImage}
              alt="Café De Verde atmosphere"
              loading="lazy"
            />

            <div className="our-story-image-overlay" />

            <div className="our-story-image-caption">

              <span>THE SPACE</span>

              <strong>
                Made for moments.
              </strong>

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

            <div className="our-story-content-number">
              01
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

            <div className="our-story-detail-image">

              <img
                src={storyDetailImage}
                alt="Café interior"
                loading="lazy"
              />

            </div>


            <a
              href="#menu"
              className="our-story-link"
            >

              <span>
                Discover our experience
              </span>

              <span className="our-story-link-icon">
                <ArrowUpRight size={16} />
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
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="our-story-value">
            <span>01</span>
            <strong>FOOD</strong>
            <p>
              Thoughtful plates.
            </p>
          </div>


          <div className="our-story-value">
            <span>02</span>
            <strong>COFFEE</strong>
            <p>
              Crafted with care.
            </p>
          </div>


          <div className="our-story-value">
            <span>03</span>
            <strong>PEOPLE</strong>
            <p>
              Always at the centre.
            </p>
          </div>


          <div className="our-story-value">
            <span>04</span>
            <strong>COMMUNITY</strong>
            <p>
              Something worth sharing.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default OurStory;