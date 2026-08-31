import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
} from "lucide-react";

import "./Testimonials.css";


const testimonials = [
  {
    id: "01",
    quote:
      "De Verde is the kind of place you discover once and immediately want to keep coming back to.",
    name: "Aarav Mehta",
    role: "Café Guest",
  },
  {
    id: "02",
    quote:
      "The atmosphere is relaxed, the food is beautiful and everyone somehow makes you feel like a regular.",
    name: "Riya Sharma",
    role: "Weekend Guest",
  },
  {
    id: "03",
    quote:
      "We came for GAVA, discovered the café and ended up spending most of our evening downstairs.",
    name: "Daniel Cooper",
    role: "GAVA Guest",
  },
];


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


function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >

      <div className="testimonials-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="testimonials-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="testimonials-label">

              <span>12</span>

              <i />

              WORDS FROM OUR TABLE

            </div>


            <h2>
              Stories
              <br />
              <em>worth sharing.</em>
            </h2>

          </div>


          <p>
            Every guest leaves with a different
            story. These are a few of the moments
            people have shared with us.
          </p>

        </motion.div>


        {/* =================================================
            FEATURED TESTIMONIAL
        ================================================= */}

        <motion.article
          className="testimonial-featured"
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

          <div className="testimonial-featured-quote">

            <Quote size={25} />

          </div>


          <blockquote>
            “{testimonials[0].quote}”
          </blockquote>


          <div className="testimonial-featured-author">

            <span>
              {testimonials[0].id}
            </span>

            <div>

              <strong>
                {testimonials[0].name}
              </strong>

              <small>
                {testimonials[0].role}
              </small>

            </div>

          </div>

        </motion.article>


        {/* =================================================
            TESTIMONIAL CARDS
        ================================================= */}

        <div className="testimonials-grid">

          {testimonials.slice(1).map(
            (testimonial, index) => (

              <motion.article
                className="testimonial-card"
                key={testimonial.id}
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
                  delay: index * 0.1,
                }}
              >

                <div className="testimonial-card-top">

                  <span>
                    {testimonial.id}
                  </span>

                  <Quote size={17} />

                </div>


                <blockquote>
                  “{testimonial.quote}”
                </blockquote>


                <div className="testimonial-card-author">

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>

                </div>

              </motion.article>

            )
          )}

        </div>


        {/* =================================================
            FINAL STATEMENT
        ================================================= */}

        <motion.div
          className="testimonials-statement"
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

          <div className="testimonials-statement-line" />


          <h3>
            Come make a memory
            <br />
            <em>of your own.</em>
          </h3>


          <a href="#location">

            <span>
              Plan Your Visit
            </span>

            <span>
              <ArrowUpRight size={16} />
            </span>

          </a>

        </motion.div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="testimonials-bottom">

          <span>
            DE VERDE
          </span>

          <i />

          <span>
            GOOD PEOPLE
          </span>

          <i />

          <span>
            GOOD STORIES
          </span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;