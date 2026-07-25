// // src/components/home/GallerySection/GallerySection.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Image as ImageIcon, ArrowRight } from "lucide-react";

// import { getAllGallery } from "../../api/gallery.api";

// import "./GallerySection.css";

// const GallerySection = () => {
//   const [gallery, setGallery] = useState([]);

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const res = await getAllGallery({
//         page: 1,
//         limit: 6,
//       });

//       const data =
//         res.data?.data?.gallery ||
//         res.data?.data?.galleries ||
//         res.data?.data ||
//         [];

//       setGallery(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <section className="gallery-section">

//       <div className="container">

//         <div className="section-header">

//           <span className="section-tag">
//             GALLERY
//           </span>

//           <h2>
//             Moments That Celebrate
//             <br />
//             Art, Culture & Community
//           </h2>

//           <p>
//             Explore memorable performances, workshops,
//             festivals, and cultural events organized by KITD.
//           </p>

//         </div>

//         <div className="gallery-grid">

//           {gallery.map((item) => (

//             <div
//               className="gallery-card"
//               key={item.id}
//             >

//               <img
//                 src={item.image}
//                 alt={item.title}
//               />

//               <div className="gallery-overlay">

//                 <ImageIcon size={34} />

//                 <h3>{item.title}</h3>

//               </div>

//             </div>

//           ))}

//         </div>

//         <div className="gallery-footer">

//           <Link
//             to="/gallery"
//             className="gallery-btn"
//           >
//             View Full Gallery

//             <ArrowRight size={18} />

//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default GallerySection;


// src/components/home/GallerySection/GallerySection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, MapPin, Calendar } from "lucide-react";

import { getAllGallery } from "../../api/gallery.api";

import "./GallerySection.css";

// Fallback gallery items based on KITD activities
const FALLBACK_GALLERY = [
  {
    id: 1,
    title: "Bharatanatyam Festival",
    image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Performance",
    city: "Berlin",
    date: "September 2025",
  },
  {
    id: 2,
    title: "SPANDA Workshop",
    image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Workshop",
    city: "Munich",
    date: "March 2025",
  },
  {
    id: 3,
    title: "City Concert Series",
    image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Concert",
    city: "Frankfurt",
    date: "June 2025",
  },
  {
    id: 4,
    title: "Lecture Demonstration",
    image: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Lecture",
    city: "Hamburg",
    date: "April 2025",
  },
  {
    id: 5,
    title: "Community Gathering",
    image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Community",
    city: "Cologne",
    date: "May 2025",
  },
  {
    id: 6,
    title: "Annual Festival",
    image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Festival",
    city: "Stuttgart",
    date: "August 2025",
  },
];

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchGallery();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.gallery-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await getAllGallery({ page: 1, limit: 6 });
      const data = res.data?.data?.gallery || res.data?.data?.galleries || res.data?.data || [];
      
      if (Array.isArray(data) && data.length > 0) {
        setGallery(data);
      } else {
        setGallery(FALLBACK_GALLERY);
      }
    } catch (err) {
      console.log("Using fallback gallery:", err);
      setGallery(FALLBACK_GALLERY);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`gallery-section ${isVisible ? 'visible' : ''}`}>
      <div className="gallery-container">
        
        {/* Section Header */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">
            <span className="gallery-eyebrow-line" />
            <span className="gallery-eyebrow-text">Photo Gallery</span>
          </div>
          
          <h2 className="gallery-title">
            Celebrating Every Performance,
            <br />
            Workshop &
            <span className="gallery-title-accent"> Cultural Gathering</span>
          </h2>
          
          <p className="gallery-subtitle">
            Browse highlights from performances, workshops, SPANDA sessions, 
            city concerts, festivals, and community gatherings that showcase 
            the vibrant journey of KITD across Germany.
          </p>
        </div>

        {/* Gallery Grid */}
        {!loading && gallery.length > 0 && (
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <Link
                to="/gallery"
                className="gallery-card"
                key={item.id || index}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {/* Image */}
                <div className="gallery-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="gallery-card-gradient" />
                </div>

                {/* Overlay Content */}
                <div className="gallery-card-overlay">
                  {/* Camera Icon */}
                  <div className="gallery-card-icon">
                    <Camera size={20} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="gallery-card-title">{item.title}</h3>

                  {/* Meta Info */}
                  <div className="gallery-card-meta">
                    <span className="gallery-meta-item">
                      <MapPin size={11} strokeWidth={1.5} />
                      {item.city}
                    </span>
                    <span className="gallery-meta-separator">•</span>
                    <span className="gallery-meta-item">
                      <Calendar size={11} strokeWidth={1.5} />
                      {item.date}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <span className="gallery-card-category">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && gallery.length === 0 && (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">
              <Camera size={48} strokeWidth={1} />
            </div>
            <h3 className="gallery-empty-title">Gallery Coming Soon</h3>
            <p className="gallery-empty-text">
              Photos from upcoming performances, workshops, and cultural 
              events will be showcased here. Stay tuned as we document 
              KITD's journey across Germany.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="gallery-loading">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-card-skeleton">
                <div className="skeleton-image" />
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {gallery.length > 0 && (
          <div className="gallery-cta-wrapper">
            <Link to="/gallery" className="gallery-cta">
              <span>Explore Gallery</span>
              <span className="gallery-cta-icon">
                <ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default GallerySection;