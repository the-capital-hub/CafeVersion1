
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Users,
} from "lucide-react";
import { useState } from "react";

import "./BookTablePage.css";


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


function BookTablePage() {

  const [submitted, setSubmitted] =
    useState(false);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    request: "",
  });


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };


  return (

    <main className="book-table-page">

      <div className="book-table-container">


        {/* =================================================
            HERO
        ================================================= */}

        <motion.section
          className="book-table-hero"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <img
            className="book-table-hero-image"
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=88"
            alt="Warm dining table at Café De Verde"
          />
          <div className="book-table-hero-overlay" />

          <div className="book-table-label">

            <span>09</span>

            <i />

            RESERVATIONS

          </div>


          <div className="book-table-hero-main">

            <div>

              <h1>
                Save a
                <br />
                <em>table.</em>
              </h1>

            </div>


            <div className="book-table-hero-copy">

              <p>
                Whether it is coffee with
                friends, dinner with family
                or a slow afternoon for yourself,
                we would love to have you.
              </p>


              <span>
                CAFÉ DE VERDE
              </span>

            </div>

          </div>

        </motion.section>


        {/* =================================================
            RESERVATION AREA
        ================================================= */}

        <section className="book-table-layout">


          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            className="book-table-form-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={reveal}
          >

            {!submitted ? (

              <form
                className="book-table-form"
                onSubmit={handleSubmit}
              >

                <div className="book-table-form-heading">

                  <span>
                    MAKE A RESERVATION
                  </span>

                  <h2>
                    Tell us
                    <br />
                    <em>about your visit.</em>
                  </h2>

                </div>


                {/* NAME + PHONE */}

                <div className="book-table-row">

                  <label>

                    <span>
                      YOUR NAME
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />

                  </label>


                  <label>

                    <span>
                      PHONE NUMBER
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />

                  </label>

                </div>


                {/* EMAIL */}

                <label>

                  <span>
                    EMAIL ADDRESS
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />

                </label>


                {/* DATE + TIME */}

                <div className="book-table-row">

                  <label>

                    <span>
                      DATE
                    </span>

                    <div className="book-table-input-icon">

                      <CalendarDays size={15} />

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </label>


                  <label>

                    <span>
                      TIME
                    </span>

                    <div className="book-table-input-icon">

                      <Clock3 size={15} />

                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </label>

                </div>


                {/* GUESTS */}

                <label>

                  <span>
                    NUMBER OF GUESTS
                  </span>

                  <div className="book-table-input-icon">

                    <Users size={15} />

                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >

                      <option value="1">
                        1 Guest
                      </option>

                      <option value="2">
                        2 Guests
                      </option>

                      <option value="3">
                        3 Guests
                      </option>

                      <option value="4">
                        4 Guests
                      </option>

                      <option value="5">
                        5 Guests
                      </option>

                      <option value="6">
                        6 Guests
                      </option>

                      <option value="7">
                        7 Guests
                      </option>

                      <option value="8">
                        8 Guests
                      </option>

                      <option value="9">
                        9 Guests
                      </option>

                      <option value="10">
                        10+ Guests
                      </option>

                    </select>

                  </div>

                </label>


                {/* SPECIAL REQUEST */}

                <label>

                  <span>
                    SPECIAL REQUEST
                  </span>

                  <textarea
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    placeholder="Birthday, anniversary, seating preference..."
                    rows="4"
                  />

                </label>


                <button
                  type="submit"
                  className="book-table-submit"
                >

                  <span>
                    Request a Table
                  </span>

                  <span>
                    <ArrowUpRight size={17} />
                  </span>

                </button>


                <p className="book-table-form-note">
                  We will confirm your reservation
                  shortly after receiving your request.
                </p>

              </form>

            ) : (

              <motion.div
                className="book-table-success"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >

                <div className="book-table-success-icon">

                  <Check size={27} />

                </div>


                <span>
                  REQUEST RECEIVED
                </span>


                <h2>
                  See you
                  <br />
                  <em>at the table.</em>
                </h2>


                <p>
                  Thank you, {formData.name || "there"}.
                  Your reservation request has been
                  received. We will get in touch with
                  you shortly to confirm the details.
                </p>


                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                >
                  Make another reservation
                </button>

              </motion.div>

            )}

          </motion.div>


          {/* =================================================
              SIDE INFORMATION
          ================================================= */}

          <motion.aside
            className="book-table-sidebar"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
            }}
          >

            <div className="book-table-side-top">

              <span>
                BEFORE YOU VISIT
              </span>

              <div className="book-table-side-number">
                09
              </div>

            </div>


            <h3>
              Good things
              <br />
              <em>take time.</em>
            </h3>


            <p>
              We keep our tables comfortable,
              our coffee thoughtful and our
              atmosphere relaxed.
            </p>


            {/* INFO */}

            <div className="book-table-info">

              <div>

                <Clock3 size={17} />

                <span>
                  OPENING HOURS
                </span>

              </div>

              <strong>
                Please check current timings
              </strong>

            </div>


            <div className="book-table-info">

              <div>

                <Users size={17} />

                <span>
                  GROUPS
                </span>

              </div>

              <strong>
                For larger groups,
                please contact us directly.
              </strong>

            </div>


            <div className="book-table-info">

              <div>

                <CalendarDays size={17} />

                <span>
                  RESERVATION
                </span>

              </div>

              <strong>
                Your booking is confirmed
                only after our response.
              </strong>

            </div>


            <a
              href="#contact"
              className="book-table-contact"
            >

              <span>
                Need help?
              </span>

              <ArrowUpRight size={15} />

            </a>

          </motion.aside>

        </section>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.section
          className="book-table-bottom"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            CAFÉ
          </span>

          <i />

          <span>
            FOOD
          </span>

          <i />

          <span>
            COFFEE
          </span>

          <i />

          <span>
            GOOD PEOPLE
          </span>

        </motion.section>

      </div>

    </main>
  );
}


export default BookTablePage;

