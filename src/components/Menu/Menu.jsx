import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  X,
} from "lucide-react";

import "./Menu.css";

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
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    category: "BREAKFAST",
    name: "Verde Breakfast",
    description:
      "Farm eggs, toasted sourdough, greens and house potatoes.",
    price: "₹390",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    category: "MAINS",
    name: "Green Bowl",
    description:
      "Seasonal greens, grains, roasted vegetables and house dressing.",
    price: "₹420",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    category: "MAINS",
    name: "House Pasta",
    description:
      "Fresh pasta, roasted vegetables, herbs and parmesan.",
    price: "₹460",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    category: "COFFEE",
    name: "Verde Latte",
    description:
      "Smooth espresso with silky steamed milk.",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    category: "COFFEE",
    name: "Cold Brew",
    description:
      "Slow brewed coffee served chilled over ice.",
    price: "₹240",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    category: "DESSERTS",
    name: "Tiramisu",
    description:
      "Classic mascarpone, espresso and cocoa.",
    price: "₹280",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    category: "DESSERTS",
    name: "Chocolate Tart",
    description:
      "Dark chocolate ganache with sea salt.",
    price: "₹300",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
  },
];


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
            HEADER
        ================================================= */}

        <motion.div
          className="menu-header"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
          }}
        >

          <div>

            <div className="menu-label">

              <span>04</span>

              <i />

              OUR MENU

            </div>


            <h2>
              Made to be
              <br />
              <em>remembered.</em>
            </h2>

          </div>


          <p>
            Seasonal ingredients, thoughtful
            recipes and flavours made for
            slow mornings and long evenings.
          </p>

        </motion.div>


        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="menu-navigation">

          {categories.map((category) => (

            <button
              key={category}
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


        {/* =================================================
            MENU GRID
        ================================================= */}

        <motion.div
          className="menu-grid"
          layout
        >

          <AnimatePresence mode="popLayout">

            {filteredItems.map((item) => (

              <motion.article
                className="menu-card"
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
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

                  <div className="menu-card-overlay" />


                  <span className="menu-card-category">
                    {item.category}
                  </span>


                  {/* FUNCTIONAL PLUS */}

                  <button
                    type="button"
                    className="menu-card-plus"
                    aria-label={`View ${item.name}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedItem(item);
                    }}
                  >
                    <Plus size={18} />
                  </button>

                </div>


                {/* CONTENT */}

                <div className="menu-card-content">

                  <div className="menu-card-title-row">

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

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <motion.div
          className="menu-footer"
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
        >

          <div>

            <span>
              HUNGRY FOR MORE?
            </span>

            <strong>
              There is plenty to discover.
            </strong>

          </div>


          <a
            href="#contact"
            className="menu-full-link"
          >

            <span>
              View Full Menu
            </span>

            <span>
              <ArrowUpRight size={17} />
            </span>

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
                y: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* CLOSE */}

              <button
                type="button"
                className="menu-modal-close"
                onClick={() =>
                  setSelectedItem(null)
                }
                aria-label="Close"
              >
                <X size={19} />
              </button>


              {/* IMAGE */}

              <div className="menu-modal-image">

                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                />

              </div>


              {/* DETAILS */}

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


                <button
                  type="button"
                  className="menu-modal-action"
                  onClick={() =>
                    setSelectedItem(null)
                  }
                >
                  Continue Exploring
                  <ArrowUpRight size={16} />
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