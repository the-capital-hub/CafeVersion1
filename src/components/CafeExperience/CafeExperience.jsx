import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Heart,
  Sparkles,
  Utensils,
} from "lucide-react";

import "./CafeExperience.css";


const experienceImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90";

const foodImage =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=90";

const ambienceImage =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=90";


const experiences = [
  {
    icon: Coffee,
    number: "01",
    title: "GOOD COFFEE",
    text:
      "Thoughtfully made coffee for slow mornings, quick catch-ups and everything in between.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "GOOD FOOD",
    text:
      "Comforting plates, fresh flavours and food that makes you want to stay for one more bite.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "GOOD VIBES",
    text:
      "A warm space, easy conversations and an atmosphere that feels effortlessly welcoming.",
  },
  {
    icon: Heart,
    number: "04",
    title: "GOOD PEOPLE",
    text:
      "A place where friends meet, travellers connect and new stories begin.",
  },
];


const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
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


function CafeExperience() {
  return (
    <section
      className="cafe-experience"
      id="experience"
    >

      <div className="cafe-experience-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="cafe-experience-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="cafe-experience-label">

              <span>04</span>

              <i />

              THE CAFÉ EXPERIENCE

            </div>


            <h2>
              More than
              <br />
              <em>coffee.</em>
            </h2>

          </div>


          <p>
            Café De Verde is a place to slow
            down, eat well, meet people and
            enjoy the little moments that make
            an ordinary day feel special.
          </p>

        </motion.div>


        {/* =================================================
            HERO EXPERIENCE
        ================================================= */}

        <motion.div
          className="cafe-experience-feature"
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.85,
          }}
        >

          <div className="cafe-experience-feature-image">

            <img
              src={experienceImage}
              alt="Café De Verde coffee experience"
              loading="lazy"
            />


            <div className="cafe-experience-image-overlay" />


            <div className="cafe-experience-feature-caption">

              <span>
                CAFÉ DE VERDE
              </span>

              <strong>
                Come for the coffee.
                <br />
                Stay for the feeling.
              </strong>

            </div>


            <div className="cafe-experience-feature-badge">
              04
            </div>

          </div>


          <div className="cafe-experience-feature-content">

            <span className="cafe-experience-kicker">
              THE EVERYDAY RITUAL
            </span>


            <h3>
              A place that
              <br />
              <em>feels like yours.</em>
            </h3>


            <p>
              Some cafés are made for grabbing
              coffee and leaving. De Verde is
              made for staying.
            </p>


            <p>
              Bring your laptop. Bring your
              friends. Bring a good conversation.
              There is always room for another
              story at the table.
            </p>


            <a
              href="#menu"
              className="cafe-experience-button"
            >

              <span>
                Explore Our Menu
              </span>

              <span>
                <ArrowUpRight size={16} />
              </span>

            </a>

          </div>

        </motion.div>


        {/* =================================================
            EXPERIENCE CARDS
        ================================================= */}

        <div className="cafe-experience-grid">

          {experiences.map(
            (item, index) => {

              const Icon = item.icon;

              return (

                <motion.article
                  className="cafe-experience-card"
                  key={item.number}
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
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >

                  <div className="cafe-experience-card-top">

                    <span>
                      {item.number}
                    </span>

                    <Icon size={19} />

                  </div>


                  <h4>
                    {item.title}
                  </h4>


                  <p>
                    {item.text}
                  </p>

                </motion.article>

              );

            }
          )}

        </div>


        {/* =================================================
            IMAGE STORIES
        ================================================= */}

        <div className="cafe-experience-stories">

          <motion.div
            className="cafe-story-image"
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
            }}
          >

            <img
              src={foodImage}
              alt="Food and coffee at the cafe"
              loading="lazy"
            />

          </motion.div>


          <motion.div
            className="cafe-story-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
          >

            <span>
              SLOW DOWN
            </span>

            <h3>
              Take your time.
              <br />
              <em>There's no rush.</em>
            </h3>

            <p>
              From the first sip of coffee to
              the last conversation of the day,
              De Verde is designed around the
              simple pleasure of being present.
            </p>

          </motion.div>


          <motion.div
            className="cafe-story-image cafe-story-image-last"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
            }}
          >

            <img
              src={ambienceImage}
              alt="Cafe ambience"
              loading="lazy"
            />

          </motion.div>

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          className="cafe-experience-bottom"
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
            duration: 0.7,
          }}
        >

          <span>
            COFFEE
          </span>

          <i />

          <span>
            FOOD
          </span>

          <i />

          <span>
            PEOPLE
          </span>

          <i />

          <span>
            MOMENTS
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default CafeExperience;