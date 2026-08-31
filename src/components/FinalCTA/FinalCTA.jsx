import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  MapPin,
} from "lucide-react";

import "./FinalCTA.css";


const ctaImage =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=90";


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


function FinalCTA() {
  return (
    <section
      className="final-cta"
      id="visit"
    >

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <div className="final-cta-image">

        <img
          src={ctaImage}
          alt="Cafe De Verde atmosphere"
          loading="lazy"
        />

      </div>


      <div className="final-cta-overlay" />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="final-cta-container">

        <motion.div
          className="final-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div className="final-cta-label">

            <span>15</span>

            <i />

            COME AS YOU ARE

          </div>


          <h2>
            Your next
            <br />
            <em>favourite place.</em>
          </h2>


          <p>
            Good coffee. Good food.
            Good people. A warm place
            to stay and even better
            stories to take home.
          </p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="final-cta-actions">

            <a
              href="#location"
              className="final-cta-primary"
            >

              <Coffee size={16} />

              <span>
                Visit Café De Verde
              </span>

              <ArrowUpRight size={16} />

            </a>


            <a
              href="#gava-stay"
              className="final-cta-secondary"
            >

              <span>
                Stay at GAVA
              </span>

              <ArrowUpRight size={15} />

            </a>

          </div>

        </motion.div>


        {/* =================================================
            LOCATION PILL
        ================================================= */}

        <motion.div
          className="final-cta-location"
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
            delay: 0.15,
          }}
        >

          <MapPin size={14} />

          <span>
            Café De Verde
          </span>

          <i />

          <span>
            GAVA
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default FinalCTA;