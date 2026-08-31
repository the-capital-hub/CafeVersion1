import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Croissant, Leaf, Utensils, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import "./MenuPage.css";

const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

const categories = [
  {
    id: "01",
    title: "Coffee",
    subtitle: "BREWED WITH CARE",
    icon: Coffee,
    items: [
      ["Espresso", "Rich, bold and beautifully balanced.", "₹120", image("photo-1510707577719-ae7c14805e0a")],
      ["Cappuccino", "Silky milk, soft foam and a deep espresso finish.", "₹160", image("photo-1572449043416-55f5e2cfcbb4")],
      ["Café Latte", "Smooth espresso with softly steamed milk.", "₹170", image("photo-1541167760496-1628856ab772")],
      ["Cold Coffee", "Chilled, creamy and refreshing.", "₹190", image("photo-1461023058943-07fcbe16d735")],
    ],
  },
  {
    id: "02",
    title: "Breakfast",
    subtitle: "SLOW MORNING FAVOURITES",
    icon: Croissant,
    items: [
      ["Avocado Toast", "Sourdough, avocado, herbs and lemon.", "₹260", image("photo-1541519227354-08fa5d50c44d")],
      ["Classic Pancakes", "Fluffy pancakes with seasonal toppings.", "₹240", image("photo-1528207776546-365bb710ee93")],
      ["De Verde Breakfast", "Eggs, toast, greens and house sides.", "₹320", image("photo-1533089860892-a7c6f0a88666")],
      ["Granola Bowl", "Yoghurt, granola, fruit and honey.", "₹220", image("photo-1512621776951-a57141f2eefd")],
    ],
  },
  {
    id: "03",
    title: "Food",
    subtitle: "MADE FOR SHARING",
    icon: Utensils,
    items: [
      ["Garden Salad", "Fresh greens, vegetables and house dressing.", "₹240", image("photo-1512621776951-a57141f2eefd")],
      ["Pesto Pasta", "Creamy pesto, herbs and parmesan.", "₹290", image("photo-1473093295043-cdd812d0e601")],
      ["De Verde Burger", "House patty, vegetables and fries.", "₹340", image("photo-1568901346375-23c9450c58cd")],
      ["Grilled Sandwich", "Toasted bread with seasonal fillings.", "₹260", image("photo-1528735602780-2552fd46c7af")],
    ],
  },
  {
    id: "04",
    title: "Drinks",
    subtitle: "SOMETHING REFRESHING",
    icon: Wine,
    items: [
      ["Fresh Lime Soda", "Bright, citrusy and refreshing.", "₹140", image("photo-1551024506-0bccd828d307")],
      ["Iced Tea", "House-brewed tea served chilled.", "₹150", image("photo-1556679343-c7306c1976bc")],
      ["Berry Cooler", "Fresh berries with a sparkling finish.", "₹190", image("photo-1495474472287-4d71bcdd2085")],
      ["Green Smoothie", "Greens, fruit and natural goodness.", "₹210", image("photo-1553530666-ba11a7da3888")],
    ],
  },
];

const img = {
  hero: image("photo-1554118811-1e0d58224f24", 2000),
  feature: image("photo-1504674900247-0877df9cc836", 1600),
  cta: image("photo-1517248135467-4c7edcad34c4", 1800),
};

function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <img src={img.hero} alt="Warm Café De Verde interior" />
        <div className="menu-hero-shade" />
        <div className="menu-hero-inner">
          <span className="eyebrow">03 · CAFÉ DE VERDE</span>
          <h1>Food worth<br /><em>lingering over.</em></h1>
          <p>Thoughtful coffee, comforting plates and refreshing drinks made for slow mornings, long lunches and easy conversations.</p>
          <a href="#menu-list" className="pill-light">Explore the menu <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-note">
          <span>FOOD · COFFEE · COMMUNITY</span>
          <span>CRAFTED FOR THE DAY</span>
        </div>
      </section>

      <section className="menu-intro">
        <div className="page-container menu-intro-grid">
          <div>
            <span className="eyebrow dark">01 · THE MENU</span>
            <h2>Come hungry.<br /><em>Leave happy.</em></h2>
          </div>
          <p>Our menu follows the mood of the day — coffee in the morning, something nourishing at lunch, and little plates worth lingering over.</p>
        </div>
      </section>

      <section className="menu-list-section" id="menu-list">
        <div className="page-container">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.section className="menu-category" key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }}>
                <div className="menu-category-head">
                  <span className="menu-number">{cat.id}</span>
                  <div>
                    <div className="menu-category-title"><Icon size={19} /><h2>{cat.title}</h2></div>
                    <span>{cat.subtitle}</span>
                  </div>
                </div>

                <div className="menu-items">
                  {cat.items.map(([name, description, price, photo]) => (
                    <article className="menu-item" key={name}>
                      <img src={photo} alt={name} loading="lazy" />
                      <div className="menu-item-copy">
                        <div className="menu-item-title-row">
                          <h3>{name}</h3>
                          <strong>{price}</strong>
                        </div>
                        <p>{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      <section className="menu-feature">
        <div className="page-container menu-feature-grid">
          <img src={img.feature} alt="Food served at Café De Verde" loading="lazy" />
          <div>
            <span className="eyebrow dark">A LITTLE EXTRA</span>
            <h2>Made to be<br /><em>shared.</em></h2>
            <p>Bring someone you like. Order something you both want. Stay longer than planned.</p>
            <Link to="/book-table" className="text-link">Book a table <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="image-cta" style={{ backgroundImage: `url(${img.cta})` }}>
        <div className="image-cta-overlay" />
        <div className="image-cta-inner">
          <span className="eyebrow">YOUR TABLE IS WAITING</span>
          <h2>Make an afternoon<br /><em>of it.</em></h2>
          <Link to="/book-table" className="pill-light">Book a Table <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;
