import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Coffee,
  BedDouble,
} from "lucide-react";

import "./EatStayConnection.css";


const cafeImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=90";

const stayImage =
  "https://images.unsplash.com/photo-1522771739844-6a9f6e5f14af?auto=format&fit=crop&w=1400&q=90";


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


function EatStayConnection() {
  return (
    <section
      className="eat-stay"
      id="eat-stay"
    >

      <div className="eat-stay-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="eat-stay-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="eat-stay-label">

              <span>08</span>

              <i />

              EAT • STAY • CONNECT

            </div>


            <h2>
              Two ways
              <br />
              <em>to feel at home.</em>
            </h2>

          </div>


          <p>
            Café De Verde and GAVA are two parts
            of the same experience — one made
            for gathering, the other made for
            staying.
          </p>

        </motion.div>


        {/* =================================================
            MAIN VISUAL
        ================================================= */}

        <div className="eat-stay-visual">


          {/* =================================================
              CAFÉ
          ================================================= */}

          <motion.article
            className="eat-stay-card eat-card"
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 0.8,
            }}
          >

            <div className="eat-stay-image">

              <img
                src={cafeImage}
                alt="Cafe De Verde experience"
                loading="lazy"
              />

              <div className="eat-stay-image-overlay" />

            </div>


            <div className="eat-stay-card-content">

              <div className="eat-stay-card-icon">
                <Coffee size={17} />
              </div>


              <span className="eat-stay-kicker">
                EAT
              </span>


              <h3>
                Café
                <br />
                <em>De Verde.</em>
              </h3>


              <p>
                Coffee, food, conversations
                and a space that invites you
                to stay a little longer.
              </p>


              <a
                href="#menu"
                className="eat-stay-link"
              >

                Explore Café

                <ArrowUpRight size={15} />

              </a>

            </div>

          </motion.article>


          {/* =================================================
              CENTER CONNECTION
          ================================================= */}

          <motion.div
            className="eat-stay-connection"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <div className="eat-stay-connection-line" />

            <div className="eat-stay-connection-circle">

              <ArrowDown size={17} />

            </div>

            <span>
              SAME
              <br />
              FAMILY
            </span>

          </motion.div>


          {/* =================================================
              GAVA
          ================================================= */}

          <motion.article
            className="eat-stay-card stay-card"
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 0.8,
            }}
          >

            <div className="eat-stay-image">

              <img
                src={stayImage}
                alt="GAVA stay experience"
                loading="lazy"
              />

              <div className="eat-stay-image-overlay" />

            </div>


            <div className="eat-stay-card-content">

              <div className="eat-stay-card-icon">
                <BedDouble size={17} />
              </div>


              <span className="eat-stay-kicker">
                STAY
              </span>


              <h3>
                GAVA
                <br />
                <em>Stay.</em>
              </h3>


              <p>
                Comfortable bunk beds,
                shared spaces and a community
                of curious travellers.
              </p>


              <a
                href="#gava-stay"
                className="eat-stay-link"
              >

                Discover GAVA

                <ArrowUpRight size={15} />

              </a>

            </div>

          </motion.article>

        </div>


        {/* =================================================
            CONNECTION STATEMENT
        ================================================= */}

        <motion.div
          className="eat-stay-statement"
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

          <div className="eat-stay-statement-number">
            01
          </div>


          <div className="eat-stay-statement-content">

            <span>
              ONE PLACE. TWO EXPERIENCES.
            </span>

            <h3>
              Eat well.
              Stay comfortably.
              <em>Connect naturally.</em>
            </h3>

          </div>


          <div className="eat-stay-statement-arrow">
            <ArrowUpRight size={18} />
          </div>

        </motion.div>


        {/* =================================================
            BOTTOM MARQUEE
        ================================================= */}

        <div className="eat-stay-marquee">

          <span>
            EAT
          </span>

          <i />

          <span>
            STAY
          </span>

          <i />

          <span>
            CONNECT
          </span>

          <i />

          <span>
            REPEAT
          </span>

        </div>

      </div>

    </section>
  );
}

export default EatStayConnection;