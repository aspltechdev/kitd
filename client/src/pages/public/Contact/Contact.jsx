// src/components/home/ContactCTA/ContactCTA.jsx

import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <div className="container">

        <div className="contact-wrapper">

          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's Preserve & Promote
            <br />
            Indian Classical Dance Together
          </h2>

          <p>
            Whether you're an artist, institution, volunteer,
            sponsor, or cultural enthusiast, we'd love to hear
            from you. Connect with KITD and become part of our
            growing community across Germany.
          </p>

          <div className="contact-info">

            <div className="info-card">

              <Phone size={20} />

              <div>

                <span>Phone</span>

                <h4>+49 XXX XXX XXXX</h4>

              </div>

            </div>

            <div className="info-card">

              <Mail size={20} />

              <div>

                <span>Email</span>

                <h4>info@kitd.de</h4>

              </div>

            </div>

          </div>

          <div className="contact-buttons">

            <Link
              to="/contact"
              className="contact-btn primary"
            >
              Contact Us
            </Link>

            <Link
              to="/membership"
              className="contact-btn secondary"
            >
              Become a Member

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;