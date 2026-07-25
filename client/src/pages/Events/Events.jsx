// // src/components/home/EventsSection/EventsSection.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   CalendarDays,
//   MapPin,
//   Clock,
//   ArrowRight,
// } from "lucide-react";

// import { getAllEvents } from "../../api/events.api";

// import "./EventsSection.css";

// const EventsSection = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const res = await getAllEvents({
//         page: 1,
//         limit: 3,
//       });

//       const data =
//         res.data?.data?.events ||
//         res.data?.data ||
//         [];

//       setEvents(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="events-section">

//       <div className="container">

//         <div className="section-header">

//           <span className="section-tag">
//             UPCOMING EVENTS
//           </span>

//           <h2>
//             Experience the Beauty of
//             <br />
//             Indian Classical Dance
//           </h2>

//           <p>
//             Join performances, workshops, festivals,
//             lectures and community events organized
//             by KITD across Germany.
//           </p>

//         </div>

//         <div className="events-grid">

//           {events.map((event) => (

//             <div
//               className="event-card"
//               key={event.id}
//             >

//               <div className="event-image">

//                 <img
//                   src={event.image}
//                   alt={event.title}
//                 />

//                 <span className="event-date">

//                   {new Date(event.eventDate)
//                     .toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                     })}

//                 </span>

//               </div>

//               <div className="event-content">

//                 <h3>
//                   {event.title}
//                 </h3>

//                 <div className="event-meta">

//                   <span>

//                     <CalendarDays size={16} />

//                     {new Date(
//                       event.eventDate
//                     ).toLocaleDateString()}

//                   </span>

//                   <span>

//                     <Clock size={16} />

//                     {event.time}

//                   </span>

//                 </div>

//                 <div className="event-location">

//                   <MapPin size={16} />

//                   {event.location}

//                 </div>

//                 <p>

//                   {event.description?.slice(0, 120)}

//                   ...

//                 </p>

//                 <Link
//                   to={`/events/${event.slug}`}
//                   className="event-link"
//                 >

//                   View Details

//                   <ArrowRight size={18} />

//                 </Link>

//               </div>

//             </div>

//           ))}

//         </div>

//         <div className="events-footer">

//           <Link
//             to="/events"
//             className="events-btn"
//           >

//             View All Events

//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default EventsSection;

// src/components/home/EventsSection/EventsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
  Music,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { getAllEvents } from "../../api/events.api";

import "./EventsSection.css";

// Fallback events based on KITD brochure and newsletters
const FALLBACK_EVENTS = [
  {
    id: 1,
    title: "SPANDA Training Series",
    description:
      "Monthly training sessions bringing together dancers and teachers for collaborative learning and artistic development in Indian Classical Dance.",
    eventDate: "2025-02-15",
    time: "14:00 - 17:00",
    location: "Berlin",
    image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Workshop",
    slug: "spanda-training-series",
  },
  {
    id: 2,
    title: "City Concert: Rhythms of India",
    description:
      "An evening of classical dance performances showcasing Bharatanatyam, Kathak, and Odissi traditions with live music accompaniment.",
    eventDate: "2025-03-20",
    time: "19:00 - 21:30",
    location: "Munich",
    image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Performance",
    slug: "city-concert-rhythms-of-india",
  },
  {
    id: 3,
    title: "Lecture Demonstration: The Art of Abhinaya",
    description:
      "An educational session exploring the expressive aspects of Indian Classical Dance through demonstrations and interactive discussions.",
    eventDate: "2025-04-10",
    time: "16:00 - 18:00",
    location: "Frankfurt",
    image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Lecture",
    slug: "lecture-demonstration-abhinaya",
  },
];

// Category configuration
const categoryConfig = {
  Workshop: { icon: <GraduationCap size={12} />, className: "category-workshop" },
  Performance: { icon: <Music size={12} />, className: "category-performance" },
  Lecture: { icon: <Users size={12} />, className: "category-lecture" },
  Festival: { icon: <Sparkles size={12} />, className: "category-festival" },
  SPANDA: { icon: <GraduationCap size={12} />, className: "category-spanda" },
  Concert: { icon: <Music size={12} />, className: "category-concert" },
  Meeting: { icon: <Users size={12} />, className: "category-meeting" },
};

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchEvents();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector('.events-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await getAllEvents({ page: 1, limit: 3 });
      const data = res.data?.data?.events || res.data?.data || [];
      
      if (Array.isArray(data) && data.length > 0) {
        setEvents(data);
      } else {
        setEvents(FALLBACK_EVENTS);
      }
    } catch (error) {
      console.log("Using fallback events:", error);
      setEvents(FALLBACK_EVENTS);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
  };

  const formatFullDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getCategoryConfig = (category) => {
    return categoryConfig[category] || { icon: <Sparkles size={12} />, className: "category-default" };
  };

  return (
    <section className={`events-section ${isVisible ? 'visible' : ''}`}>
      <div className="events-container">
        
        {/* Section Header */}
        <div className="events-header">
          <div className="events-eyebrow">
            <span className="events-eyebrow-line" />
            <span className="events-eyebrow-text">Events & Programmes</span>
          </div>
          
          <h2 className="events-title">
            Join Performances,
            <br />
            Workshops &
            <span className="events-title-accent"> Cultural Events</span>
          </h2>
          
          <p className="events-subtitle">
            Discover performances, workshops, SPANDA sessions, city concerts, 
            collaborations, and community gatherings that celebrate and strengthen 
            Indian Classical Dance across Germany.
          </p>
        </div>

        {/* Events Grid */}
        {!loading && events.length > 0 && (
          <div className="events-grid">
            {events.map((event, index) => {
              const category = getCategoryConfig(event.category);
              
              return (
                <div
                  className="event-card"
                  key={event.id || index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Event Image */}
                  <div className="event-card-image">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                    />
                    <div className="event-card-overlay" />
                    
                    {/* Date Badge */}
                    <div className="event-date-badge">
                      <span className="event-date-day">
                        {formatDate(event.eventDate).split(' ')[0]}
                      </span>
                      <span className="event-date-month">
                        {formatDate(event.eventDate).split(' ')[1]}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    {event.category && (
                      <div className={`event-category-badge ${category.className}`}>
                        {category.icon}
                        <span>{event.category}</span>
                      </div>
                    )}
                  </div>

                  {/* Event Content */}
                  <div className="event-card-content">
                    <h3 className="event-card-title">
                      {event.title}
                    </h3>

                    <div className="event-card-meta">
                      <div className="event-meta-item">
                        <CalendarDays size={14} strokeWidth={1.5} />
                        <span>{formatFullDate(event.eventDate)}</span>
                      </div>
                      
                      <div className="event-meta-item">
                        <Clock size={14} strokeWidth={1.5} />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="event-meta-item">
                        <MapPin size={14} strokeWidth={1.5} />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="event-card-description">
                      {event.description?.length > 120
                        ? `${event.description.slice(0, 120)}...`
                        : event.description}
                    </p>

                    <Link
                      to={`/events/${event.slug || event.id}`}
                      className="event-card-link"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={15} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && events.length === 0 && (
          <div className="events-empty">
            <div className="events-empty-icon">
              <CalendarDays size={48} strokeWidth={1} />
            </div>
            <h3 className="events-empty-title">No Upcoming Events</h3>
            <p className="events-empty-text">
              Stay connected with KITD to discover upcoming performances, 
              workshops, and community programmes.
            </p>
            <Link to="/events" className="events-empty-cta">
              Explore Events
            </Link>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="events-loading">
            {[1, 2, 3].map((item) => (
              <div key={item} className="event-card-skeleton">
                <div className="skeleton-image" />
                <div className="skeleton-content">
                  <div className="skeleton-title" />
                  <div className="skeleton-meta" />
                  <div className="skeleton-text" />
                  <div className="skeleton-link" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {events.length > 0 && (
          <div className="events-cta-wrapper">
            <Link to="/events" className="events-cta">
              <span>Explore All Events</span>
              <span className="events-cta-icon">
                <ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default EventsSection;