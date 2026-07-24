// src/components/home/ActivitiesSection/ActivitiesSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllActivities } from "../../../api/activity.api";
import "./ActivitiesSection.css";

const ActivitiesSection = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await getAllActivities({
        page: 1,
        limit: 4,
      });

      const data =
        res.data?.data?.activities ||
        res.data?.data ||
        [];

      setActivities(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="activities-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            OUR ACTIVITIES
          </span>

          <h2>
            Bringing Indian Classical Dance
            <br />
            to Communities Across Germany
          </h2>

        </div>

        {activities.map((activity, index) => (

          <div
            key={activity.id}
            className={`activity-row ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
          >

            <div className="activity-image">

              <img
                src={activity.image}
                alt={activity.title}
              />

            </div>

            <div className="activity-content">

              <span className="activity-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{activity.title}</h3>

              <p>{activity.description}</p>

              <Link
                to={`/activities/${activity.slug}`}
                className="activity-btn"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ActivitiesSection;