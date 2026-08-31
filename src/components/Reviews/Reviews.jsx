import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

import "./Reviews.css";

const reviews = [
  {
    id: 1,
    rating: "4.9",
    quote:
      "The kind of place where you plan to stay for an hour and somehow spend the entire afternoon.",
    name: "Aarav Mehta",
    detail: "Google Review",
  },
  {
    id: 2,
    rating: "4.8",
    quote:
      "Beautiful space, lovely food and such a warm atmosphere. It genuinely feels like a little escape.",
    name: "Riya Sharma",
    detail: "Google Review",
  },
  {
    id: 3,
    rating: "4.7",
    quote:
      "Stayed at GAVA and discovered De Verde downstairs. Easily one of the highlights of our trip.",
    name: "Daniel Cooper",
    detail: "GAVA Guest",
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


function Rating({ rating }) {
  return (
    <div className="review-rating">

      <strong>
        {rating}
      </strong>

      <div className="reviews-stars">

        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            fill="currentColor"
          />
        ))}

      </div>

    </div>
  );
}


function Reviews() {
  const featuredReview = reviews[0];

  return (
    <section
      className="reviews-section"
      id="reviews"
    >

      <div className="reviews-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="reviews-header"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
        >

          <div>

            <div className="reviews-label">

              <span>10</span>

              <i />

              GUEST LOVE

            </div>


            <h2>
              Good words
              <br />
              <em>from good people.</em>
            </h2>

          </div>


          <div className="reviews-overall">

            <div className="reviews-overall-rating">
              4.9
            </div>

            <div className="reviews-overall-stars">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill="currentColor"
                />
              ))}

            </div>

            <span>
              Overall guest rating
            </span>

          </div>

        </motion.div>


        {/* =================================================
            FEATURED REVIEW
        ================================================= */}

        <motion.article
          className="featured-review"
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
            duration: 0.8,
          }}
        >

          <div className="featured-review-top">

            <Rating
              rating={featuredReview.rating}
            />

            <span className="featured-review-source">
              GOOGLE
            </span>

          </div>


          <div className="featured-review-mark">
            “
          </div>


          <blockquote>
            {featuredReview.quote}
          </blockquote>


          <div className="featured-review-footer">

            <div>

              <strong>
                {featuredReview.name}
              </strong>

              <span>
                {featuredReview.detail}
              </span>

            </div>

          </div>

        </motion.article>


        {/* =================================================
            OTHER REVIEWS
        ================================================= */}

        <div className="reviews-grid">

          {reviews.slice(1).map(
            (review, index) => (

              <motion.article
                className="review-card"
                key={review.id}
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

                <div className="review-card-top">

                  <Rating
                    rating={review.rating}
                  />

                  <span>
                    GOOGLE
                  </span>

                </div>


                <blockquote>
                  “{review.quote}”
                </blockquote>


                <div className="review-card-author">

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.detail}
                  </span>

                </div>

              </motion.article>

            )
          )}

        </div>


        {/* =================================================
            CTA
        ================================================= */}

        <motion.div
          className="reviews-cta"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <div>

            <span>
              YOUR EXPERIENCE MATTERS
            </span>

            <strong>
              Been to De Verde?
            </strong>

          </div>


          <a
            href="#contact"
            className="reviews-cta-link"
          >

            <span>
              Leave a Review
            </span>

            <span>
              <ArrowUpRight size={16} />
            </span>

          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Reviews;