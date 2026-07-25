// src/pages/Gallery/GalleryDetails.jsx

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import service
import { getGalleryItemBySlug, getRelatedGalleryItems } from "../../services/mockGalleryService";

import "./GalleryDetails.css";

const GalleryDetails = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const found = await getGalleryItemBySlug(slug);
        setItem(found);
        
        if (found) {
          const related = await getRelatedGalleryItems(found.id, found.category);
          setRelatedItems(related);
        }
      } catch (error) {
        console.error("Error fetching gallery item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="details-loader">
        <div className="loader-spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="details-not-found">
        <h2>Moment not found</h2>
        <p>The gallery moment you're looking for doesn't exist.</p>
        <Link to="/gallery" className="back-btn">
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="gallery-details">
      <section className="details-hero">
        <div className="details-hero-image">
          <img src={item.image} alt={item.title} />
          <div className="details-hero-overlay" />
        </div>
        <div className="container">
          <motion.div 
            className="details-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/gallery" className="back-link">
              <ArrowLeft size={16} />
              Back to Gallery
            </Link>
            <span className="details-category">{item.category}</span>
            <h1>{item.title}</h1>
            <div className="details-meta">
              <span><MapPin size={18} /> {item.location}</span>
              <span><Calendar size={18} /> {item.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="details-content">
        <div className="container">
          <div className="details-grid">
            <div className="details-main">
              <h2>About This Moment</h2>
              <p>{item.description || "This moment captures the essence of KITD's journey in preserving and promoting Indian Classical Dance in Germany."}</p>
              
              <div className="details-tags">
                <span className="tag"><Tag size={14} /> {item.category}</span>
                <span className="tag"><MapPin size={14} /> {item.location}</span>
                <span className="tag"><Calendar size={14} /> {item.date}</span>
              </div>
            </div>

            <div className="details-sidebar">
              <h3>Related Event</h3>
              {item.relatedEvent ? (
                <div className="related-event-card">
                  <h4>{item.relatedEvent.title}</h4>
                  <p>{item.relatedEvent.description}</p>
                  <Link to={`/events/${item.relatedEvent.slug}`} className="related-event-link">
                    View Event <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <p className="no-related">No related event available</p>
              )}
            </div>
          </div>

          {relatedItems.length > 0 && (
            <div className="related-photos">
              <h2>Related Moments</h2>
              <div className="related-grid">
                {relatedItems.map(related => (
                  <Link 
                    key={related.id} 
                    to={`/gallery/${related.slug}`}
                    className="related-card"
                  >
                    <img src={related.image} alt={related.title} />
                    <div className="related-info">
                      <h4>{related.title}</h4>
                      <span>{related.location}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryDetails;