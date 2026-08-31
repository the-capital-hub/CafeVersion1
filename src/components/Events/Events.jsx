import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import "./Events.css";

const events = [
  {
    id: 1,
    date: "18",
    month: "SEP",
    title: "Verde Sunset Sessions",
    description:
      "An evening of acoustic music, good food and slow conversations as the sun goes down.",
    time: "06:30 PM",
    location: "Café De Verde",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=90",
    featured: true,
  },
  {
    id: 2,
    date: "24",
    month: "SEP",
    title: "Sunday Brunch",
    description:
      "Good food, fresh coffee and an easy Sunday afternoon.",
    time: "11:00 AM",
    location: "Café De Verde",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    date: "02",
    month: "OCT",
    title: "Open Mic Night",
    description:
      "A stage for local voices, musicians and storytellers.",
    time: "07:00 PM",
    location: "Café De Verde",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90",
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


function Events() {
  const featuredEvent = events.find(
    (event) => event.featured
  );

  const upcomingEvents = events.filter(
    (event) => !event.featured
  );


  return (
    <section
      className="events-section"
      id="events"
    >

      <div className="events-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="events-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="events-label">

              <span>05</span>

              <i />

              WHAT'S HAPPENING

            </div>


            <h2>
              Come for the
              <br />
              <em>moment.</em>
            </h2>

          </div>


          <p>
            From live music and intimate evenings
            to brunches and community gatherings,
            there is always something happening
            at De Verde.
          </p>

        </motion.div>


        {/* =================================================
            FEATURED EVENT
        ================================================= */}

        {featuredEvent && (

          <motion.article
            className="featured-event"
            initial={{
              opacity: 0,
              y: 40,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* IMAGE */}

            <div className="featured-event-image">

              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                loading="lazy"
              />

              <div className="featured-event-overlay" />

              <span className="featured-event-badge">
                FEATURED EVENT
              </span>


              <div className="featured-event-date">

                <strong>
                  {featuredEvent.date}
                </strong>

                <span>
                  {featuredEvent.month}
                </span>

              </div>

            </div>


            {/* CONTENT */}

            <div className="featured-event-content">

              <span className="event-small-label">
                NEXT UP
              </span>


              <h3>
                {featuredEvent.title}
              </h3>


              <p>
                {featuredEvent.description}
              </p>


              <div className="event-meta">

                <div>
                  <Clock3 size={14} />
                  <span>
                    {featuredEvent.time}
                  </span>
                </div>


                <div>
                  <MapPin size={14} />
                  <span>
                    {featuredEvent.location}
                  </span>
                </div>

              </div>


              <a
                href="#contact"
                className="event-book-link"
              >

                <span>
                  Reserve Your Spot
                </span>

                <span className="event-arrow">
                  <ArrowUpRight size={17} />
                </span>

              </a>

            </div>

          </motion.article>

        )}


        {/* =================================================
            UPCOMING
        ================================================= */}

        <div className="upcoming-heading">

          <span>
            MORE EVENTS
          </span>

          <i />

          <span>
            SAVE THE DATE
          </span>

        </div>


        <div className="upcoming-events">

          {upcomingEvents.map(
            (event, index) => (

              <motion.article
                className="upcoming-event"
                key={event.id}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >

                {/* IMAGE */}

                <div className="upcoming-event-image">

                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />

                  <div className="upcoming-date">

                    <strong>
                      {event.date}
                    </strong>

                    <span>
                      {event.month}
                    </span>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="upcoming-event-content">

                  <span className="event-small-label">
                    UPCOMING
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.description}
                  </p>


                  <div className="upcoming-meta">

                    <span>
                      <Clock3 size={12} />
                      {event.time}
                    </span>

                    <span>
                      <MapPin size={12} />
                      {event.location}
                    </span>

                  </div>


                  <a href="#contact">

                    Explore Event

                    <ArrowUpRight size={14} />

                  </a>

                </div>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Events;