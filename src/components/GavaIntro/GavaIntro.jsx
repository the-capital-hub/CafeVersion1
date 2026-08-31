import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";

import "./GavaIntro.css";

const gavaImage =
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1800&q=90";

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


function GavaIntro() {
  return (
    <section
      className="gava-intro"
      id="gava"
    >

      <div className="gava-intro-container">

        {/* =================================================
            TOP LABEL
        ================================================= */}

        <motion.div
          className="gava-intro-top"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={reveal}
        >

          <div className="gava-intro-label">

            <span>06</span>

            <i />

            STAY WITH US

          </div>


          <div className="gava-intro-brand">

            <Leaf size={15} />

            <span>
              GAVA
            </span>

          </div>

        </motion.div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="gava-intro-grid">

          {/* TEXT */}

          <motion.div
            className="gava-intro-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={reveal}
          >

            <span className="gava-intro-kicker">
              THE OTHER SIDE OF DE VERDE
            </span>


            <h2>
              Stay a little
              <br />
              <em>longer.</em>
            </h2>


            <p>
              What if your café experience
              didn't have to end when the
              coffee did?
            </p>


            <p>
              Meet GAVA — a warm, social and
              comfortable place to stay, created
              by the same people behind Café
              De Verde.
            </p>


            <a
              href="#gava-stay"
              className="gava-intro-button"
            >

              <span>
                Explore GAVA
              </span>

              <span>
                <ArrowUpRight size={17} />
              </span>

            </a>

          </motion.div>


          {/* IMAGE */}

          <motion.div
            className="gava-intro-image"
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
              src={gavaImage}
              alt="GAVA accommodation"
              loading="lazy"
            />

            <div className="gava-intro-image-overlay" />


            <div className="gava-intro-image-text">

              <span>
                GAVA
              </span>

              <strong>
                Sleep.
                <br />
                Connect.
                <br />
                Explore.
              </strong>

            </div>


            <div className="gava-intro-image-number">
              06
            </div>

          </motion.div>

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          className="gava-intro-bottom"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            CAFÉ
          </span>

          <i />

          <span>
            STAY
          </span>

          <i />

          <span>
            COMMUNITY
          </span>

          <i />

          <span>
            EXPERIENCE
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default GavaIntro;