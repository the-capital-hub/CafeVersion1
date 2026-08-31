import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Heart,
  Leaf,
  Users,
} from "lucide-react";

import "./OurStory.css";

const heroImage =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=90";

const storyImage =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=90";

const peopleImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=90";

const values = [
  {
    number: "01",
    icon: Coffee,
    title: "Good Coffee",
    text: "Thoughtfully made coffee that gives every visit its own little ritual.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Warm Hospitality",
    text: "A place where everyone can slow down, settle in and feel welcome.",
  },
  {
    number: "03",
    icon: Users,
    title: "Real Community",
    text: "Friends, travellers, neighbours and strangers sharing the same table.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Simple Living",
    text: "Less rushing, more conversation and more moments worth remembering.",
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function OurStory() {
  return (
    <main className="our-story-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="story-page-hero">

        <div className="story-page-hero-image">
          <img
            src={heroImage}
            alt="Café De Verde atmosphere"
          />

          <div className="story-page-hero-overlay" />
        </div>

        <div className="story-page-hero-content">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
          >

            <div className="story-page-label">
              <span>01</span>
              <i />
              OUR STORY
            </div>

            <h1>
              A place
              <br />
              <em>with a feeling.</em>
            </h1>

            <p>
              Café De Verde was created around
              a simple idea — good coffee, good
              food and good people should always
              have a place to come together.
            </p>

          </motion.div>

          <div className="story-page-scroll">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="story-page-intro">

        <div className="story-page-container">

          <motion.div
            className="story-page-intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >

            <div className="story-page-section-label">
              <span>02</span>
              <i />
              THE BEGINNING
            </div>

            <div className="story-page-intro-copy">

              <h2>
                It started with
                <br />
                <em>a simple thought.</em>
              </h2>

              <p>
                What if a café could feel like more
                than somewhere you stop for coffee?
              </p>

              <p>
                A place where mornings could move
                slowly, conversations could stretch
                a little longer and people could feel
                comfortable simply being themselves.
              </p>

              <p>
                That thought became Café De Verde —
                a space built around food, coffee,
                community and the small moments
                that make a day memorable.
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          IMAGE STORY
      ===================================================== */}

      <section className="story-page-image-section">

        <div className="story-page-container">

          <motion.div
            className="story-page-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.97,
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
              duration: 0.9,
            }}
          >

            <img
              src={storyImage}
              alt="Café De Verde interior"
              loading="lazy"
            />

            <div className="story-page-image-overlay" />

            <div className="story-page-image-caption">
              <span>CAFÉ DE VERDE</span>

              <strong>
                Come in.
                <br />
                Stay a while.
              </strong>
            </div>

            <div className="story-page-image-number">
              03
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="story-page-philosophy">

        <div className="story-page-container">

          <motion.div
            className="story-page-philosophy-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >

            <div>

              <div className="story-page-section-label">
                <span>04</span>
                <i />
                OUR PHILOSOPHY
              </div>

              <h2>
                Slow down.
                <br />
                <em>Stay present.</em>
              </h2>

            </div>

            <div className="story-page-philosophy-copy">

              <p>
                We believe the best experiences
                aren't always the loudest ones.
              </p>

              <p>
                Sometimes they are a cup of coffee
                shared with a friend, a meal that
                turns into a long conversation or
                meeting someone completely new.
              </p>

              <p>
                That's the feeling we're trying to
                create every day at De Verde.
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="story-page-values">

        <div className="story-page-container">

          <motion.div
            className="story-page-values-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >

            <div className="story-page-section-label">
              <span>05</span>
              <i />
              WHAT WE BELIEVE
            </div>

            <h2>
              The things that
              <br />
              <em>matter to us.</em>
            </h2>

          </motion.div>


          <div className="story-page-values-grid">

            {values.map((value, index) => {

              const Icon = value.icon;

              return (
                <motion.article
                  className="story-page-value"
                  key={value.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >

                  <div className="story-page-value-top">

                    <span>
                      {value.number}
                    </span>

                    <Icon size={20} />

                  </div>

                  <div className="story-page-value-line" />

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </motion.article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          GAVA CONNECTION
      ===================================================== */}

      <section className="story-page-gava">

        <div className="story-page-container">

          <motion.div
            className="story-page-gava-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >

            <div className="story-page-gava-image">

              <img
                src={peopleImage}
                alt="People connecting at De Verde"
                loading="lazy"
              />

            </div>

            <div className="story-page-gava-content">

              <div className="story-page-section-label">
                <span>06</span>
                <i />
                MORE THAN A CAFÉ
              </div>

              <h2>
                The story
                <br />
                <em>continues.</em>
              </h2>

              <p>
                Café De Verde is one part of a
                bigger experience.
              </p>

              <p>
                Upstairs, GAVA gives travellers
                a place to stay, connect and
                experience the same warmth in
                a different way.
              </p>

              <a
                href="/gava"
                className="story-page-button"
              >
                <span>Discover GAVA</span>
                <ArrowUpRight size={16} />
              </a>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="story-page-cta">

        <div className="story-page-container">

          <motion.div
            className="story-page-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >

            <span>
              COME EXPERIENCE IT
            </span>

            <h2>
              Some places
              <br />
              are meant to be
              <br />
              <em>felt.</em>
            </h2>

            <a
              href="/"
              className="story-page-cta-button"
            >
              <span>Visit Café De Verde</span>
              <ArrowUpRight size={17} />
            </a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default OurStory;