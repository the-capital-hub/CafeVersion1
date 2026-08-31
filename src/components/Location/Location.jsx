import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  
  MapPin,
  Phone,
} from "lucide-react";

import "./Location.css";

const cafeMap =
  "https://maps.app.goo.gl/VkYpTQYnBvWmvE9C8?g_st=ic";

const gavaMap =
  "https://maps.app.goo.gl/2J2vTzoxcNEtw31q6?g_st=ic";

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

function Location() {
  return (
    <section
      className="location-section"
      id="location"
    >
      <div className="location-container">

        {/* =================================================
            4.11.1 — HEADER
        ================================================= */}

        <motion.div
          className="location-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >
          <div>

            <div className="location-label">
              <span>11</span>

              <i />

              COME FIND US
            </div>

            <h2>
              Your table
              <br />
              <em>is waiting.</em>
            </h2>

          </div>

          <p>
            Come for the coffee, stay for the
            atmosphere. And if you're travelling,
            make GAVA your home for a while.
          </p>
        </motion.div>


        {/* =================================================
            4.11.2 — MAIN LOCATION
        ================================================= */}

        <div className="location-main">

          {/* MAP */}

          <motion.div
            className="location-map"
            initial={{
              opacity: 0,
              scale: 0.98,
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
              duration: 0.8,
            }}
          >

            <iframe
              title="Cafe De Verde Location"
              src="https://www.google.com/maps?q=Cafe%20De%20Verde&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={cafeMap}
              target="_blank"
              rel="noreferrer"
              className="location-map-button"
            >
              <span>
                Open in Maps
              </span>

              <ArrowUpRight size={15} />
            </a>

          </motion.div>


          {/* INFO */}

          <motion.div
            className="location-info"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={reveal}
          >

            <span className="location-small-label">
              CAFÉ DE VERDE
            </span>

            <h3>
              Let's meet
              <br />
              <em>here.</em>
            </h3>


            {/* ADDRESS */}

            <div className="location-detail">

              <MapPin size={18} />

              <div>

                <strong>
                  FIND US
                </strong>

                <p>
                  Café De Verde
                  <br />
                  See Google Maps for
                  exact location.
                </p>

              </div>

            </div>


            {/* HOURS */}

            <div className="location-detail">

              <Clock3 size={18} />

              <div>

                <strong>
                  OPENING HOURS
                </strong>

                <p>
                  Monday — Sunday
                  <br />
                  Check current timings
                  before visiting.
                </p>

              </div>

            </div>


            {/* CONTACT */}

            <div className="location-detail">

              <Phone size={18} />

              <div>

                <strong>
                  GET IN TOUCH
                </strong>

                <p>
                  For reservations, events
                  and general enquiries.
                </p>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="location-actions">

              <a
                href={cafeMap}
                target="_blank"
                rel="noreferrer"
                className="location-primary-button"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="location-secondary-button"
              >
                Contact Us
              </a>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            4.11.3 — GAVA
        ================================================= */}

        <motion.div
          className="gava-location-card"
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
            duration: 0.75,
          }}
        >

          <div className="gava-location-left">

            <span>
              PART OF THE SAME EXPERIENCE
            </span>

            <h3>
              Staying at <em>GAVA?</em>
            </h3>

            <p>
              Our bunk beds and shared stay
              experience are part of the same
              De Verde family.
            </p>

          </div>


          <div className="gava-location-right">

            <div className="gava-location-brand">
              GAVA
            </div>

            <a
              href={gavaMap}
              target="_blank"
              rel="noreferrer"
              className="gava-location-link"
            >
              <span>
                View GAVA on Maps
              </span>

              <ArrowUpRight size={16} />
            </a>

          </div>

        </motion.div>


        {/* =================================================
            4.11.4 — SOCIAL
        ================================================= */}

        <motion.div
          className="location-social"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <span>
            FOLLOW THE JOURNEY
          </span>

          <a
            href="#"
            aria-label="Instagram"
          >
            

            Instagram

            <ArrowUpRight size={13} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Location;