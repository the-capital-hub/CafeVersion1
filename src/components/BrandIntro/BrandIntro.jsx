import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import "./BrandIntro.css";


const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
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


const values = [
  {
    number: "01",
    title: "Food",
    text: "Thoughtful food made for slow mornings and long evenings.",
  },
  {
    number: "02",
    title: "Coffee",
    text: "Good coffee, served without rushing the moment.",
  },
  {
    number: "03",
    title: "Community",
    text: "A welcoming space for people, conversations and connections.",
  },
];


function BrandIntro() {
  return (
    <section
      className="brand-intro"
      id="brand-intro"
    >

      <div className="brand-intro-container">

        {/* =================================================
            TOP
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

            <span>
              THE PLACE
            </span>

          </div>


          <span className="brand-intro-note">
            CAFÉ · FOOD · COMMUNITY
          </span>

        </motion.div>


        {/* =================================================
            MAIN COPY
        ================================================= */}

        <div className="brand-intro-main">

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={reveal}
          >

            More than
            <br />

            <em>a café.</em>

          </motion.h2>


          <motion.div
            className="brand-intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.1,
            }}
            variants={reveal}
          >

            <p>
              Café De Verde is a place to pause,
              eat something good, meet someone
              new and stay a little longer than
              you planned.
            </p>


            <a
              href="#our-story"
              className="brand-intro-link"
            >

              <span>
                Discover our story
              </span>

              <ArrowUpRight size={15} />

            </a>

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

          {values.map((value) => (

            <motion.div
              className="brand-value"
              key={value.number}
              variants={reveal}
            >

              <span className="brand-value-number">
                {value.number}
              </span>

              <div className="brand-value-line" />

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default BrandIntro;