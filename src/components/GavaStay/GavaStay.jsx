import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  LockKeyhole,
  ShowerHead,
  Wifi,
} from "lucide-react";

import "./GavaStay.css";

const stayImage =
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=90";

const stayImageTwo =
  "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=90";

const stayImageThree =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=90";


const reveal = {
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


const amenities = [
  {
    icon: BedDouble,
    title: "COMFORTABLE BEDS",
    text: "Designed for a good night's rest.",
  },
  {
    icon: Wifi,
    title: "FAST WI-FI",
    text: "Stay connected whenever you need.",
  },
  {
    icon: ShowerHead,
    title: "CLEAN SPACES",
    text: "Fresh, simple and thoughtfully maintained.",
  },
  {
    icon: LockKeyhole,
    title: "SECURE STORAGE",
    text: "A safe place for your essentials.",
  },
];


function GavaStay() {
  return (
    <section
      className="gava-stay"
      id="gava-stay"
    >

      <div className="gava-stay-container">

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <motion.div
          className="gava-stay-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="gava-stay-label">

              <span>01</span>

              <i />

              THE STAY

            </div>


            <h2>
              Your bed.
              <br />
              <em>Your people.</em>
            </h2>

          </div>


          <p>
            GAVA is built for travellers who
            want more than just somewhere to
            sleep — a comfortable base, a social
            atmosphere and a place to feel at home.
          </p>

        </motion.div>


        {/* =================================================
            MAIN STAY EXPERIENCE
        ================================================= */}

        <div className="gava-stay-main">

          {/* LARGE IMAGE */}

          <motion.div
            className="gava-stay-main-image"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
            }}
          >

            <img
              src={stayImage}
              alt="GAVA bunk beds"
              loading="lazy"
            />


            <div className="gava-stay-main-overlay" />


            <div className="gava-stay-image-label">
              GAVA / THE STAY
            </div>


            <div className="gava-stay-image-caption">

              <span>
                SLEEP WELL
              </span>

              <strong>
                Wake up
                <br />
                somewhere new.
              </strong>

            </div>

          </motion.div>


          {/* SIDE CONTENT */}

          <motion.div
            className="gava-stay-main-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={reveal}
          >

            <span className="gava-stay-number">
              01
            </span>


            <h3>
              Made for
              <br />
              <em>slow mornings.</em>
            </h3>


            <p>
              From the moment you arrive,
              everything is designed to make
              your stay easy and comfortable.
            </p>


            <p>
              Settle into your bunk, meet fellow
              travellers and head downstairs for
              a coffee at Café De Verde.
            </p>


            <a
              href="#contact"
              className="gava-stay-button"
            >

              <span>
                Book Your Stay
              </span>

              <span>
                <ArrowUpRight size={16} />
              </span>

            </a>

          </motion.div>

        </div>


        {/* =================================================
            IMAGE STRIP
        ================================================= */}

        <div className="gava-stay-gallery">

          <motion.div
            className="gava-stay-small-image"
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
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <img
              src={stayImageTwo}
              alt="GAVA interior"
              loading="lazy"
            />

          </motion.div>


          <motion.div
            className="gava-stay-gallery-copy"
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <span>
              MORE THAN A BED
            </span>

            <strong>
              A shared space
              <br />
              for shared stories.
            </strong>

            <p>
              Because the best part of travelling
              is often the people you meet along
              the way.
            </p>

          </motion.div>


          <motion.div
            className="gava-stay-small-image second"
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <img
              src={stayImageThree}
              alt="GAVA common area"
              loading="lazy"
            />

          </motion.div>

        </div>


        {/* =================================================
            AMENITIES
        ================================================= */}

        <motion.div
          className="gava-amenities"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.7,
          }}
        >

          <div className="gava-amenities-heading">

            <span>
              ESSENTIALS
            </span>

            <h3>
              Everything you need.
            </h3>

          </div>


          <div className="gava-amenities-grid">

            {amenities.map(
              (amenity) => {

                const Icon =
                  amenity.icon;

                return (
                  <div
                    className="gava-amenity"
                    key={amenity.title}
                  >

                    <Icon size={20} />

                    <div>

                      <strong>
                        {amenity.title}
                      </strong>

                      <p>
                        {amenity.text}
                      </p>

                    </div>

                  </div>
                );

              }
            )}

          </div>

        </motion.div>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <motion.div
          className="gava-stay-cta"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div>

            <span>
              READY TO STAY?
            </span>

            <h3>
              Make GAVA your
              <br />
              next stop.
            </h3>

          </div>


          <a
            href="#contact"
            className="gava-stay-cta-button"
          >

            Book Your Stay

            <ArrowUpRight size={17} />

          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default GavaStay;