// src/components/home/EventsSection/EventsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { getAllEvents } from "../../../api/event.api";

import "./EventsSection.css";

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await getAllEvents({
        page: 1,
        limit: 3,
      });

      const data =
        res.data?.data?.events ||
        res.data?.data ||
        [];

      setEvents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="events-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            UPCOMING EVENTS
          </span>

          <h2>
            Experience the Beauty of
            <br />
            Indian Classical Dance
          </h2>

          <p>
            Join performances, workshops, festivals,
            lectures and community events organized
            by KITD across Germany.
          </p>

        </div>

        <div className="events-grid">

          {events.map((event) => (

            <div
              className="event-card"
              key={event.id}
            >

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <span className="event-date">

                  {new Date(event.eventDate)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                    })}

                </span>

              </div>

              <div className="event-content">

                <h3>
                  {event.title}
                </h3>

                <div className="event-meta">

                  <span>

                    <CalendarDays size={16} />

                    {new Date(
                      event.eventDate
                    ).toLocaleDateString()}

                  </span>

                  <span>

                    <Clock size={16} />

                    {event.time}

                  </span>

                </div>

                <div className="event-location">

                  <MapPin size={16} />

                  {event.location}

                </div>

                <p>

                  {event.description?.slice(0, 120)}

                  ...

                </p>

                <Link
                  to={`/events/${event.slug}`}
                  className="event-link"
                >

                  View Details

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="events-footer">

          <Link
            to="/events"
            className="events-btn"
          >

            View All Events

          </Link>

        </div>

      </div>

    </section>
  );
};

export default EventsSection;