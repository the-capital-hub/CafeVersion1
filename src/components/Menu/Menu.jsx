
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Leaf,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

import "./Menu.css";


/* =====================================================
   4.5 — MENU DATA
===================================================== */

const categories = [
  "ALL",
  "BREAKFAST",
  "MAINS",
  "COFFEE",
  "DESSERTS",
];


const menuItems = [
  {
    id: 1,
    category: "BREAKFAST",
    name: "Avocado Toast",
    description:
      "Sourdough, smashed avocado, herbs and a touch of chilli.",
    price: "₹320",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 2,
    category: "BREAKFAST",
    name: "Verde Breakfast",
    description:
      "Farm eggs, toasted sourdough, greens and house potatoes.",
    price: "₹390",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 3,
    category: "MAINS",
    name: "Green Bowl",
    description:
      "Seasonal greens, grains, roasted vegetables and house dressing.",
    price: "₹420",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 4,
    category: "MAINS",
    name: "House Pasta",
    description:
      "Fresh pasta, roasted vegetables, herbs and parmesan.",
    price: "₹460",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 5,
    category: "COFFEE",
    name: "Verde Latte",
    description:
      "Smooth espresso with silky steamed milk.",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 6,
    category: "COFFEE",
    name: "Cold Brew",
    description:
      "Slow brewed coffee served chilled over ice.",
    price: "₹240",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 7,
    category: "DESSERTS",
    name: "Tiramisu",
    description:
      "Classic mascarpone, espresso and cocoa.",
    price: "₹280",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: 8,
    category: "DESSERTS",
    name: "Chocolate Tart",
    description:
      "Dark chocolate ganache finished with sea salt.",
    price: "₹300",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=90",
  },
];


/* =====================================================
   ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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


const gridVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


/* =====================================================
   MENU
===================================================== */

function Menu() {

  const [activeCategory, setActiveCategory] =
    useState("ALL");

  const [selectedItem, setSelectedItem] =
    useState(null);


  const filteredItems =
    activeCategory === "ALL"
      ? menuItems
      : menuItems.filter(
          (item) =>
            item.category === activeCategory
        );


  return (
    <section
      className="menu-section"
      id="menu"
    >

      <div className="menu-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="menu-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
        >

          <div className="menu-heading">

            <div className="menu-eyebrow">

              <span>
                04
              </span>

              <i />

              <span>
                OUR MENU
              </span>

            </div>


            <h2>
              Good food.
              <br />
              <em>Good mood.</em>
            </h2>

          </div>


          <div className="menu-header-right">

            <div className="menu-header-icon">

              <Leaf
                size={18}
                strokeWidth={1.5}
              />

            </div>


            <p>
              Seasonal ingredients, thoughtful
              recipes and flavours made for
              slow mornings and long evenings.
            </p>


            <span>
              FRESH · SEASONAL · HOUSE MADE
            </span>

          </div>

        </motion.div>


        {/* =================================================
            FEATURE STRIP
        ================================================= */}

        <motion.div
          className="menu-feature"
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
            duration: 0.8,
          }}
        >

          <div className="menu-feature-image">

            <img
              src={menuItems[0].image}
              alt="Signature café dish"
              loading="lazy"
            />

            <div className="menu-feature-overlay" />

            <div className="menu-feature-text">

              <span>
                FROM OUR KITCHEN
              </span>

              <h3>
                Simple ingredients.
                <br />
                Beautifully made.
              </h3>

            </div>


            <div className="menu-feature-badge">

              <Sparkles size={13} />

              <span>
                CHEF'S PICK
              </span>

            </div>

          </div>


          <div className="menu-feature-copy">

            <span className="menu-feature-number">
              01
            </span>

            <h3>
              Made with
              <br />
              intention.
            </h3>

            <p>
              Every plate starts with ingredients
              we genuinely love. Nothing overly
              complicated — just honest food,
              carefully prepared.
            </p>

            <a href="#contact">
              <span>
                RESERVE A TABLE
              </span>

              <ArrowUpRight size={15} />
            </a>

          </div>

        </motion.div>


        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="menu-filter-wrap">

          <span className="menu-filter-label">
            EXPLORE THE MENU
          </span>


          <div className="menu-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >

                {category}

              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            MENU GRID
        ================================================= */}

        <motion.div
          className="menu-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          <AnimatePresence mode="popLayout">

            {filteredItems.map((item) => (

              <motion.article
                className="menu-card"
                key={item.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.4,
                }}
              >

                {/* IMAGE */}

                <div
                  className="menu-card-image"
                  onClick={() =>
                    setSelectedItem(item)
                  }
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />


                  <div className="menu-card-image-overlay" />


                  <span className="menu-card-category">
                    {item.category}
                  </span>


                  <button
                    type="button"
                    className="menu-card-add"
                    aria-label={`View ${item.name}`}
                    onClick={(event) => {

                      event.stopPropagation();

                      setSelectedItem(item);

                    }}
                  >

                    <Plus size={18} />

                  </button>

                </div>


                {/* CARD CONTENT */}

                <div className="menu-card-content">

                  <div className="menu-card-title">

                    <h3>
                      {item.name}
                    </h3>

                    <span>
                      {item.price}
                    </span>

                  </div>


                  <p>
                    {item.description}
                  </p>


                  <button
                    type="button"
                    className="menu-card-link"
                    onClick={() =>
                      setSelectedItem(item)
                    }
                  >

                    <span>
                      VIEW DISH
                    </span>

                    <ArrowUpRight size={14} />

                  </button>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          className="menu-bottom"
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
              COME HUNGRY
            </span>

            <strong>
              Stay for the feeling.
            </strong>

          </div>


          <a
            href="#contact"
            className="menu-bottom-button"
          >

            <span>
              BOOK A TABLE
            </span>

            <ArrowUpRight size={16} />

          </a>

        </motion.div>

      </div>


      {/* =================================================
          DISH MODAL
      ================================================= */}

      <AnimatePresence>

        {selectedItem && (

          <motion.div
            className="menu-modal-backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedItem(null)
            }
          >

            <motion.div
              className="menu-modal"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="menu-modal-close"
                onClick={() =>
                  setSelectedItem(null)
                }
                aria-label="Close dish"
              >

                <X size={18} />

              </button>


              <div className="menu-modal-image">

                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                />

              </div>


              <div className="menu-modal-content">

                <span className="menu-modal-category">
                  {selectedItem.category}
                </span>


                <div className="menu-modal-title">

                  <h3>
                    {selectedItem.name}
                  </h3>

                  <strong>
                    {selectedItem.price}
                  </strong>

                </div>


                <p>
                  {selectedItem.description}
                </p>


                <div className="menu-modal-line" />


                <button
                  type="button"
                  className="menu-modal-button"
                  onClick={() =>
                    setSelectedItem(null)
                  }
                >

                  <span>
                    CONTINUE EXPLORING
                  </span>

                  <ArrowUpRight size={15} />

                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}


export default Menu;
