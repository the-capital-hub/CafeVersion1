import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import "./Gallery.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=90",
    title: "The Café",
    category: "CAFÉ DE VERDE",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=90",
    title: "Morning Coffee",
    category: "COFFEE",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=90",
    title: "Good Food",
    category: "FOOD",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=90",
    title: "GAVA",
    category: "STAY",
    size: "medium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=90",
    title: "Your Stay",
    category: "GAVA",
    size: "medium",
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


function Gallery() {
  return (
    <section
      className="gallery-section"
      id="gallery"
    >

      <div className="gallery-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="gallery-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="gallery-label">

              <span>07</span>

              <i />

              A GLIMPSE OF DE VERDE

            </div>


            <h2>
              See the
              <br />
              <em>feeling.</em>
            </h2>

          </div>


          <p>
            A little look into the spaces,
            people, food and moments that
            make Café De Verde and GAVA
            what they are.
          </p>

        </motion.div>


        {/* =================================================
            GALLERY
        ================================================= */}

        <div className="gallery-grid">

          {galleryImages.map(
            (item, index) => (

              <motion.figure
                className={`gallery-item gallery-${item.size}`}
                key={item.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />


                <div className="gallery-item-overlay" />


                <figcaption>

                  <span>
                    {item.category}
                  </span>

                  <strong>
                    {item.title}
                  </strong>

                </figcaption>


                <span className="gallery-item-number">
                  0{index + 1}
                </span>

              </motion.figure>

            )
          )}

        </div>


        {/* =================================================
            FOOTER STATEMENT
        ================================================= */}

        <motion.div
          className="gallery-footer"
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

          <div>

            <span>
              COME SEE IT FOR YOURSELF
            </span>

            <strong>
              Some things are better
              experienced in person.
            </strong>

          </div>


          <a
            href="#location"
            className="gallery-location-link"
          >

            <span>
              Find Us
            </span>

            <span>
              <ArrowUpRight size={17} />
            </span>

          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Gallery;