// src/components/home/NewsletterSection/NewsletterSection.jsx

import { useState } from "react";
import toast from "react-hot-toast";

import { getAllSubscribers } from "../../../api/newsletter.api";

import "./NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Please enter your email address.");
    }

    try {
      setLoading(true);

      await subscribeNewsletter({ email });

      toast.success("Subscribed successfully!");

      setEmail("");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Subscription failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section">

      <div className="container">

        <div className="newsletter-wrapper">

          {/* Left */}

          <div className="newsletter-content">

            <span className="section-tag">
              NEWSLETTER
            </span>

            <h2>
              Stay Connected with
              <br />
              KITD Community
            </h2>

            <p>
              Receive updates about upcoming performances,
              workshops, cultural events, artist highlights,
              and community activities directly in your inbox.
            </p>

          </div>

          {/* Right */}

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Subscribing..."
                : "Subscribe"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;