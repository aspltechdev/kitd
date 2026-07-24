// src/components/home/MembershipCTA/MembershipCTA.jsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./MembershipCTA.css";

const MembershipCTA = () => {
  return (
    <section className="membership-cta">

      <div className="membership-overlay"></div>

      <div className="container">

        <div className="membership-content">

          <span className="section-tag">
            JOIN OUR COMMUNITY
          </span>

          <h2>
            Become a Part of Germany's
            <br />
            Indian Classical Dance Network
          </h2>

          <p>
            Whether you're an artist, teacher, student, volunteer,
            or cultural enthusiast, KITD welcomes everyone who
            shares a passion for preserving and promoting Indian
            Classical Dance across Germany.
          </p>

          <div className="membership-buttons">

            <Link
              to="/membership"
              className="membership-btn primary"
            >
              Become a Member
            </Link>

            <Link
              to="/volunteer"
              className="membership-btn secondary"
            >
              Volunteer With Us

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MembershipCTA;