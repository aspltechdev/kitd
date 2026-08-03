// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   MapPin,
//   Share2,
//   ChevronRight,
//   Users,
//   Music,
//   BookOpen,
//   Ticket,
//   Heart,
//   ExternalLink,
//   Mail,
//   Phone,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import { getEventById } from "../../api/events.api";

// import "./EventDetail.css";

// const EventDetail = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         setLoading(true);
//         const res = await getEventById(id);
//         const data = res.data?.data || res.data;
//         setEvent(data);
//       } catch (err) {
//         console.error("Failed to fetch event:", err);
//         setError("Event not found.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchEvent();
//   }, [id]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const getImageUrl = (event) => {
//     if (!event) return null;
//     if (event.image) return `${IMAGE_BASE_URL}/uploads/events/${event.image}`;
//     return "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     return new Date(dateString).toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return (
//       <div className="event-detail">
//         <div className="event-detail__loading">
//           <div className="spinner" />
//           <p>Loading event details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !event) {
//     return (
//       <div className="event-detail">
//         <div className="event-detail__error">
//           <h2>{error || "Event Not Found"}</h2>
//           <p>The event you're looking for doesn't exist or has been removed.</p>
//           <Link to="/events" className="event-detail__back-btn">
//             <ArrowLeft size={18} /> Back to Events
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{event.title} | KITD Events</title>
//         <meta name="description" content={event.description?.substring(0, 160)} />
//       </Helmet>

//       <div className="event-detail">

//         {/* Breadcrumb */}
//         <div className="event-detail__breadcrumb">
//           <div className="event-detail__container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} />
//             <Link to="/events">Events</Link>
//             <ChevronRight size={14} />
//             <span>{event.title}</span>
//           </div>
//         </div>

//         {/* Hero Banner */}
//         <section className="event-detail__hero">
//           <div className="event-detail__hero-bg" style={{ backgroundImage: `url(${getImageUrl(event)})` }} />
//           <div className="event-detail__hero-overlay" />
//           <div className="event-detail__container">
//             <div className="event-detail__hero-content">
//               <Link to="/events" className="event-detail__back-link">
//                 <ArrowLeft size={18} /> Back to Events
//               </Link>
//               <span className="event-detail__badge">Upcoming Event</span>
//               <h1 className="event-detail__title">{event.title}</h1>
//               <div className="event-detail__hero-meta">
//                 {event.eventDate && (
//                   <span className="event-detail__hero-meta-item">
//                     <Calendar size={18} /> {formatDate(event.eventDate)}
//                   </span>
//                 )}
//                 {event.venue && (
//                   <span className="event-detail__hero-meta-item">
//                     <MapPin size={18} /> {event.venue}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Content */}
//         <section className="event-detail__content">
//           <div className="event-detail__container">
//             <div className="event-detail__grid">

//               {/* Main Content */}
//               <div className="event-detail__main">
//                 <div className="event-detail__section">
//                   <h2>About This Event</h2>
//                   <p className="event-detail__description">{event.description}</p>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="event-detail__section">
//                   <h2>Event Details</h2>
//                   <div className="event-detail__info-grid">
//                     {event.eventDate && (
//                       <div className="event-detail__info-card">
//                         <Calendar size={20} />
//                         <div>
//                           <strong>Date</strong>
//                           <span>{formatDate(event.eventDate)}</span>
//                         </div>
//                       </div>
//                     )}
//                     {event.venue && (
//                       <div className="event-detail__info-card">
//                         <MapPin size={20} />
//                         <div>
//                           <strong>Venue</strong>
//                           <span>{event.venue}</span>
//                         </div>
//                       </div>
//                     )}
//                     <div className="event-detail__info-card">
//                       <Users size={20} />
//                       <div>
//                         <strong>Organizer</strong>
//                         <span>KITD Germany</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="event-detail__actions">
//                   <Link to="/membership" className="event-detail__btn event-detail__btn--primary">
//                     <Ticket size={18} /> Register / Become a Member
//                   </Link>
//                   <Link to="/contact" className="event-detail__btn event-detail__btn--secondary">
//                     <Mail size={18} /> Contact Organizer
//                   </Link>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="event-detail__sidebar">
//                 {/* Event Info Card */}
//                 <div className="event-detail__sidebar-card">
//                   <h3>Event Information</h3>
//                   <ul>
//                     {event.eventDate && (
//                       <li>
//                         <Calendar size={16} />
//                         <div>
//                           <strong>Date & Time</strong>
//                           <span>{formatDate(event.eventDate)}</span>
//                         </div>
//                       </li>
//                     )}
//                     {event.venue && (
//                       <li>
//                         <MapPin size={16} />
//                         <div>
//                           <strong>Location</strong>
//                           <span>{event.venue}</span>
//                         </div>
//                       </li>
//                     )}
//                     <li>
//                       <Heart size={16} />
//                       <div>
//                         <strong>Category</strong>
//                         <span>Performance / Workshop</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Share */}
//                 <div className="event-detail__sidebar-card">
//                   <h3>Share This Event</h3>
//                   <div className="event-detail__share-buttons">
//                     <button className="event-detail__share-btn" title="Copy link">
//                       <Share2 size={18} /> Copy Link
//                     </button>
//                   </div>
//                 </div>

//                 {/* More Events */}
//                 <div className="event-detail__sidebar-card">
//                   <h3>More Events</h3>
//                   <Link to="/events" className="event-detail__more-link">
//                     View All Events <ChevronRight size={16} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Related CTA */}
//         <section className="event-detail__cta">
//           <div className="event-detail__container">
//             <div className="event-detail__cta-wrapper">
//               <h2>Interested in More Events?</h2>
//               <p>Join KITD to stay updated about upcoming performances, workshops, and cultural programmes.</p>
//               <div className="event-detail__cta-buttons">
//                 <Link to="/membership" className="event-detail__cta-btn event-detail__cta-btn--primary">
//                   Become a Member <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
//                 </Link>
//                 <Link to="/events" className="event-detail__cta-btn event-detail__cta-btn--secondary">
//                   All Events <ExternalLink size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default EventDetail;








import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Share2,
  ChevronRight,
  Users,
  Ticket,
  Heart,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getEventById } from "../../api/events.api";

import "./EventDetail.css";

// Import images
import contactcta from "../../assets/contactcta.png";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const res = await getEventById(id);
        const data = res.data?.data || res.data;
        setEvent(data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
        setError("Event not found.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEvent();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImageUrl = (event) => {
    if (!event) return null;
    if (event.image) {
      if (event.image.startsWith('http://') || event.image.startsWith('https://')) {
        return event.image;
      }
      return `${IMAGE_BASE_URL}/uploads/events/${event.image}`;
    }
    return "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="ed-page">
        <div className="ed-page__loading">
          <div className="ed-page__spinner" />
          <p>Loading event details...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="ed-page">
        <div className="ed-page__error">
          <h2>{error || "Event Not Found"}</h2>
          <p>The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/events" className="ed-page__back-btn">
            <ArrowLeft size={18} /> Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{event.title} | KITD Events</title>
        <meta name="description" content={event.description?.substring(0, 160)} />
      </Helmet>

      <div className="ed-page">

        {/* Breadcrumb */}
        <div className="ed-page__breadcrumb">
          <div className="ed-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/events">Events</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>{event.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="ed-page__hero">
          <div className="ed-page__hero-bg" style={{ backgroundImage: `url(${getImageUrl(event)})` }} />
          <div className="ed-page__hero-overlay" />
          <div className="ed-page__hero-gradient" />
          <div className="ed-page__container">
            <div className="ed-page__hero-content">
              <Link to="/events" className="ed-page__back-link">
                <ArrowLeft size={18} strokeWidth={1.5} /> Back to Events
              </Link>
              <span className="ed-page__badge">Upcoming Event</span>
              <h1 className="ed-page__title">{event.title}</h1>
              <div className="ed-page__hero-meta">
                {event.eventDate && (
                  <span className="ed-page__hero-meta-item">
                    <Calendar size={18} strokeWidth={1.5} /> {formatDate(event.eventDate)}
                  </span>
                )}
                {event.venue && (
                  <span className="ed-page__hero-meta-item">
                    <MapPin size={18} strokeWidth={1.5} /> {event.venue}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="ed-page__content">
          <div className="ed-page__container">
            <div className="ed-page__grid">

              {/* Main Content */}
              <div className="ed-page__main">
                <div className="ed-page__section">
                  <h2>About This Event</h2>
                  <p className="ed-page__description">{event.description}</p>
                </div>

                {/* Additional Info */}
                <div className="ed-page__section">
                  <h2>Event Details</h2>
                  <div className="ed-page__info-grid">
                    {event.eventDate && (
                      <div className="ed-page__info-card">
                        <div className="ed-page__info-icon">
                          <Calendar size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <strong>Date & Time</strong>
                          <span>{formatDate(event.eventDate)}</span>
                          <span className="ed-page__info-time">{formatTime(event.eventDate)}</span>
                        </div>
                      </div>
                    )}
                    {event.venue && (
                      <div className="ed-page__info-card">
                        <div className="ed-page__info-icon">
                          <MapPin size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <strong>Venue</strong>
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    )}
                    <div className="ed-page__info-card">
                      <div className="ed-page__info-icon">
                        <Users size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <strong>Organizer</strong>
                        <span>KITD Germany</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="ed-page__actions">
                  <Link to="/membership" className="ed-page__btn ed-page__btn--primary">
                    <Ticket size={18} strokeWidth={1.5} /> Register / Become a Member
                  </Link>
                  <Link to="/contact" className="ed-page__btn ed-page__btn--secondary">
                    <Mail size={18} strokeWidth={1.5} /> Contact Organizer
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="ed-page__sidebar">
                {/* Event Info Card */}
                <div className="ed-page__sidebar-card">
                  <h3>Event Information</h3>
                  <ul>
                    {event.eventDate && (
                      <li>
                        <Calendar size={16} strokeWidth={1.5} />
                        <div>
                          <strong>Date</strong>
                          <span>{formatDate(event.eventDate)}</span>
                        </div>
                      </li>
                    )}
                    {event.venue && (
                      <li>
                        <MapPin size={16} strokeWidth={1.5} />
                        <div>
                          <strong>Location</strong>
                          <span>{event.venue}</span>
                        </div>
                      </li>
                    )}
                    <li>
                      <Heart size={16} strokeWidth={1.5} />
                      <div>
                        <strong>Category</strong>
                        <span>Classical Dance Event</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Share */}
                <div className="ed-page__sidebar-card">
                  <h3>Share This Event</h3>
                  <div className="ed-page__share-buttons">
                    <button 
                      className="ed-page__share-btn" 
                      title="Copy link"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 size={16} strokeWidth={1.5} /> Copy Link
                    </button>
                  </div>
                </div>

                {/* More Events */}
                <div className="ed-page__sidebar-card">
                  <h3>More Events</h3>
                  <Link to="/events" className="ed-page__more-link">
                    View All Events <ChevronRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related CTA */}
        <section className="ed-page__cta">
          <div className="ed-page__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="ed-page__cta-overlay" />
          </div>
          <div className="ed-page__container">
            <div className="ed-page__cta-wrapper">
              <h2>Interested in More Events?</h2>
              <p>Join KITD to stay updated about upcoming performances, workshops, and cultural programmes.</p>
              <div className="ed-page__cta-buttons">
                <Link to="/membership" className="ed-page__cta-btn ed-page__cta-btn--primary">
                  Become a Member <ArrowLeft size={18} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />
                </Link>
                <Link to="/events" className="ed-page__cta-btn ed-page__cta-btn--secondary">
                  All Events <ExternalLink size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventDetail;