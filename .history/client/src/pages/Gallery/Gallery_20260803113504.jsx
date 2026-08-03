// // // // // src/components/home/GallerySection/GallerySection.jsx

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { Image as ImageIcon, ArrowRight } from "lucide-react";

// // // // import { getAllGallery } from "../../api/gallery.api";

// // // // import "./GallerySection.css";

// // // // const GallerySection = () => {
// // // //   const [gallery, setGallery] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchGallery();
// // // //   }, []);

// // // //   const fetchGallery = async () => {
// // // //     try {
// // // //       const res = await getAllGallery({
// // // //         page: 1,
// // // //         limit: 6,
// // // //       });

// // // //       const data =
// // // //         res.data?.data?.gallery ||
// // // //         res.data?.data?.galleries ||
// // // //         res.data?.data ||
// // // //         [];

// // // //       setGallery(Array.isArray(data) ? data : []);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="gallery-section">

// // // //       <div className="container">

// // // //         <div className="section-header">

// // // //           <span className="section-tag">
// // // //             GALLERY
// // // //           </span>

// // // //           <h2>
// // // //             Moments That Celebrate
// // // //             <br />
// // // //             Art, Culture & Community
// // // //           </h2>

// // // //           <p>
// // // //             Explore memorable performances, workshops,
// // // //             festivals, and cultural events organized by KITD.
// // // //           </p>

// // // //         </div>

// // // //         <div className="gallery-grid">

// // // //           {gallery.map((item) => (

// // // //             <div
// // // //               className="gallery-card"
// // // //               key={item.id}
// // // //             >

// // // //               <img
// // // //                 src={item.image}
// // // //                 alt={item.title}
// // // //               />

// // // //               <div className="gallery-overlay">

// // // //                 <ImageIcon size={34} />

// // // //                 <h3>{item.title}</h3>

// // // //               </div>

// // // //             </div>

// // // //           ))}

// // // //         </div>

// // // //         <div className="gallery-footer">

// // // //           <Link
// // // //             to="/gallery"
// // // //             className="gallery-btn"
// // // //           >
// // // //             View Full Gallery

// // // //             <ArrowRight size={18} />

// // // //           </Link>

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // };

// // // // export default GallerySection;


// // // // src/components/home/GallerySection/GallerySection.jsx

// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { ArrowRight, Camera, MapPin, Calendar } from "lucide-react";

// // // import { getAllGallery } from "../../api/gallery.api";

// // // import "./GallerySection.css";

// // // // Fallback gallery items based on KITD activities
// // // const FALLBACK_GALLERY = [
// // //   {
// // //     id: 1,
// // //     title: "Bharatanatyam Festival",
// // //     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Performance",
// // //     city: "Berlin",
// // //     date: "September 2025",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "SPANDA Workshop",
// // //     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Workshop",
// // //     city: "Munich",
// // //     date: "March 2025",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "City Concert Series",
// // //     image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Concert",
// // //     city: "Frankfurt",
// // //     date: "June 2025",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Lecture Demonstration",
// // //     image: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Lecture",
// // //     city: "Hamburg",
// // //     date: "April 2025",
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Community Gathering",
// // //     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Community",
// // //     city: "Cologne",
// // //     date: "May 2025",
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Annual Festival",
// // //     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Festival",
// // //     city: "Stuttgart",
// // //     date: "August 2025",
// // //   },
// // // ];

// // // const GallerySection = () => {
// // //   const [gallery, setGallery] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     fetchGallery();
    
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const section = document.querySelector('.gallery-section');
// // //     if (section) observer.observe(section);

// // //     return () => {
// // //       if (section) observer.unobserve(section);
// // //     };
// // //   }, []);

// // //   const fetchGallery = async () => {
// // //     try {
// // //       const res = await getAllGallery({ page: 1, limit: 6 });
// // //       const data = res.data?.data?.gallery || res.data?.data?.galleries || res.data?.data || [];
      
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setGallery(data);
// // //       } else {
// // //         setGallery(FALLBACK_GALLERY);
// // //       }
// // //     } catch (err) {
// // //       console.log("Using fallback gallery:", err);
// // //       setGallery(FALLBACK_GALLERY);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className={`gallery-section ${isVisible ? 'visible' : ''}`}>
// // //       <div className="gallery-container">
        
// // //         {/* Section Header */}
// // //         <div className="gallery-header">
// // //           <div className="gallery-eyebrow">
// // //             <span className="gallery-eyebrow-line" />
// // //             <span className="gallery-eyebrow-text">Photo Gallery</span>
// // //           </div>
          
// // //           <h2 className="gallery-title">
// // //             Celebrating Every Performance,
// // //             <br />
// // //             Workshop &
// // //             <span className="gallery-title-accent"> Cultural Gathering</span>
// // //           </h2>
          
// // //           <p className="gallery-subtitle">
// // //             Browse highlights from performances, workshops, SPANDA sessions, 
// // //             city concerts, festivals, and community gatherings that showcase 
// // //             the vibrant journey of KITD across Germany.
// // //           </p>
// // //         </div>

// // //         {/* Gallery Grid */}
// // //         {!loading && gallery.length > 0 && (
// // //           <div className="gallery-grid">
// // //             {gallery.map((item, index) => (
// // //               <Link
// // //                 to="/gallery"
// // //                 className="gallery-card"
// // //                 key={item.id || index}
// // //                 style={{ transitionDelay: `${index * 0.08}s` }}
// // //               >
// // //                 {/* Image */}
// // //                 <div className="gallery-card-image">
// // //                   <img
// // //                     src={item.image}
// // //                     alt={item.title}
// // //                     loading="lazy"
// // //                   />
// // //                   <div className="gallery-card-gradient" />
// // //                 </div>

// // //                 {/* Overlay Content */}
// // //                 <div className="gallery-card-overlay">
// // //                   {/* Camera Icon */}
// // //                   <div className="gallery-card-icon">
// // //                     <Camera size={20} strokeWidth={1.5} />
// // //                   </div>

// // //                   {/* Title */}
// // //                   <h3 className="gallery-card-title">{item.title}</h3>

// // //                   {/* Meta Info */}
// // //                   <div className="gallery-card-meta">
// // //                     <span className="gallery-meta-item">
// // //                       <MapPin size={11} strokeWidth={1.5} />
// // //                       {item.city}
// // //                     </span>
// // //                     <span className="gallery-meta-separator">•</span>
// // //                     <span className="gallery-meta-item">
// // //                       <Calendar size={11} strokeWidth={1.5} />
// // //                       {item.date}
// // //                     </span>
// // //                   </div>

// // //                   {/* Category Badge */}
// // //                   <span className="gallery-card-category">
// // //                     {item.category}
// // //                   </span>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Empty State */}
// // //         {!loading && gallery.length === 0 && (
// // //           <div className="gallery-empty">
// // //             <div className="gallery-empty-icon">
// // //               <Camera size={48} strokeWidth={1} />
// // //             </div>
// // //             <h3 className="gallery-empty-title">Gallery Coming Soon</h3>
// // //             <p className="gallery-empty-text">
// // //               Photos from upcoming performances, workshops, and cultural 
// // //               events will be showcased here. Stay tuned as we document 
// // //               KITD's journey across Germany.
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* Loading State */}
// // //         {loading && (
// // //           <div className="gallery-loading">
// // //             {[1, 2, 3, 4, 5, 6].map((item) => (
// // //               <div key={item} className="gallery-card-skeleton">
// // //                 <div className="skeleton-image" />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Bottom CTA */}
// // //         {gallery.length > 0 && (
// // //           <div className="gallery-cta-wrapper">
// // //             <Link to="/gallery" className="gallery-cta">
// // //               <span>Explore Gallery</span>
// // //               <span className="gallery-cta-icon">
// // //                 <ArrowRight size={16} strokeWidth={1.5} />
// // //               </span>
// // //             </Link>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default GallerySection;


// // // src/components/home/GallerySection/GallerySection.jsx

// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Camera, MapPin, Calendar, Sparkles, Heart } from "lucide-react";

// // import { getAllGallery } from "../../api/gallery.api";

// // import "./GallerySection.css";

// // // Fallback gallery items based on KITD activities
// // const FALLBACK_GALLERY = [
// //   {
// //     id: 1,
// //     title: "Bharatanatyam Festival",
// //     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
// //     category: "Performance",
// //     city: "Berlin",
// //     date: "September 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: true,
// //   },
// //   {
// //     id: 2,
// //     title: "SPANDA Workshop",
// //     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
// //     category: "Workshop",
// //     city: "Munich",
// //     date: "March 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 3,
// //     title: "City Concert Series",
// //     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
// //     category: "Concert",
// //     city: "Frankfurt",
// //     date: "June 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 4,
// //     title: "Lecture Demonstration",
// //     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
// //     category: "Lecture",
// //     city: "Hamburg",
// //     date: "April 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 5,
// //     title: "Community Gathering",
// //     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
// //     category: "Community",
// //     city: "Cologne",
// //     date: "May 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 6,
// //     title: "Annual Festival",
// //     image: "https://images.pexels.com/photos/19539249/pexels-photo-19539249.jpeg",
// //     category: "Festival",
// //     city: "Stuttgart",
// //     date: "August 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 7,
// //     title: "Annual Festival",
// //     image: "https://images.pexels.com/photos/19539249/pexels-photo-19539249.jpeg",
// //     category: "Festival",
// //     city: "Stuttgart",
// //     date: "August 2025",
// //     gradient: "linear-gradient(135deg, rgba(110, 54, 71, 0.34) 0%, rgba(70, 20, 40, 0.41) 100%)",
// //     featured: false,
// //   },
// // ];

// // const GallerySection = () => {
// //   const [gallery, setGallery] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     fetchGallery();
    
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const fetchGallery = async () => {
// //     try {
// //       const res = await getAllGallery({ page: 1, limit: 6 });
// //       const data = res.data?.data?.gallery || res.data?.data?.galleries || res.data?.data || [];
      
// //       if (Array.isArray(data) && data.length > 0) {
// //         const galleryWithGradient = data.map((item, index) => ({
// //           ...item,
// //           gradient: FALLBACK_GALLERY[index]?.gradient || "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// //           featured: index === 0 ? true : false,
// //         }));
// //         setGallery(galleryWithGradient);
// //       } else {
// //         setGallery(FALLBACK_GALLERY);
// //       }
// //     } catch (err) {
// //       console.log("Using fallback gallery:", err);
// //       setGallery(FALLBACK_GALLERY);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Separate featured and regular items
// //   const featuredItem = gallery.find(item => item.featured);
// //   const regularItems = gallery.filter(item => !item.featured);

// //   return (
// //     <section className={`kitd-gallery ${isVisible ? 'kitd-gallery--visible' : ''}`} ref={sectionRef}>
// //       {/* Decorative Elements */}
// //       <div className="kitd-gallery__deco kitd-gallery__deco--1" />
// //       <div className="kitd-gallery__deco kitd-gallery__deco--2" />
// //       <div className="kitd-gallery__deco kitd-gallery__deco--3" />

// //       <div className="kitd-gallery__container">
        
// //         {/* Section Header */}
// //         <div className="kitd-gallery__header">
// //           <div className="kitd-gallery__eyebrow">
// //             <span className="kitd-gallery__eyebrow-line" />
// //             <span className="kitd-gallery__eyebrow-text">Photo Gallery</span>
// //           </div>
          
// //           <h2 className="kitd-gallery__title">
// //             Celebrating Every Performance,
// //             <br />
// //             Workshop &
// //             <span className="kitd-gallery__title-accent"> Cultural Gathering</span>
// //           </h2>
          
// //           <p className="kitd-gallery__subtitle">
// //             Browse highlights from performances, workshops, SPANDA sessions, 
// //             city concerts, festivals, and community gatherings that showcase 
// //             the vibrant journey of KITD across Germany.
// //           </p>
// //         </div>

// //         {/* Gallery Grid */}
// //         {!loading && gallery.length > 0 && (
// //           <div className="kitd-gallery__grid">
            
// //             {/* Featured Item - Large */}
// //             {featuredItem && (
// //               <div 
// //                 className={`kitd-gallery__card kitd-gallery__card--featured ${hoveredCard === 'featured' ? 'kitd-gallery__card--hovered' : ''}`}
// //                 onMouseEnter={() => setHoveredCard('featured')}
// //                 onMouseLeave={() => setHoveredCard(null)}
// //                 style={{ transitionDelay: '0s' }}
// //               >
// //                 <div 
// //                   className="kitd-gallery__card-bg"
// //                   style={{ backgroundImage: `url(${featuredItem.image})` }}
// //                 />
// //                 <div 
// //                   className="kitd-gallery__card-overlay"
// //                   style={{ background: featuredItem.gradient }}
// //                 />
                
// //                 <div className="kitd-gallery__card-badge">
// //                   <Sparkles size={12} />
// //                   <span>Featured</span>
// //                 </div>

// //                 <div className="kitd-gallery__card-content kitd-gallery__card-content--featured">
// //                   <div className="kitd-gallery__card-top">
// //                     <span className="kitd-gallery__card-category">{featuredItem.category}</span>
// //                   </div>
                  
// //                   <div className="kitd-gallery__card-bottom">
// //                     <h3 className="kitd-gallery__card-title">{featuredItem.title}</h3>
// //                     <div className="kitd-gallery__card-meta">
// //                       <span>
// //                         <MapPin size={14} strokeWidth={1.5} />
// //                         {featuredItem.city}
// //                       </span>
// //                       <span>
// //                         <Calendar size={14} strokeWidth={1.5} />
// //                         {featuredItem.date}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Regular Items Grid */}
// //             <div className="kitd-gallery__grid-items">
// //               {regularItems.map((item, index) => (
// //                 <div 
// //                   className={`kitd-gallery__card kitd-gallery__card--grid ${hoveredCard === index ? 'kitd-gallery__card--hovered' : ''}`}
// //                   key={item.id || index}
// //                   style={{ transitionDelay: `${(index + 1) * 0.06}s` }}
// //                   onMouseEnter={() => setHoveredCard(index)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                 >
// //                   <div 
// //                     className="kitd-gallery__card-bg"
// //                     style={{ backgroundImage: `url(${item.image})` }}
// //                   />
// //                   <div 
// //                     className="kitd-gallery__card-overlay"
// //                     style={{ background: item.gradient }}
// //                   />
                  
// //                   <div className="kitd-gallery__card-content kitd-gallery__card-content--grid">
// //                     <div className="kitd-gallery__card-top">
// //                       <span className="kitd-gallery__card-category">{item.category}</span>
// //                     </div>
                    
// //                     <div className="kitd-gallery__card-bottom">
// //                       <h4 className="kitd-gallery__card-title">{item.title}</h4>
// //                       <div className="kitd-gallery__card-meta">
// //                         <span>
// //                           <MapPin size={12} strokeWidth={1.5} />
// //                           {item.city}
// //                         </span>
// //                         <span>
// //                           <Calendar size={12} strokeWidth={1.5} />
// //                           {item.date}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Empty State */}
// //         {!loading && gallery.length === 0 && (
// //           <div className="kitd-gallery__empty">
// //             <div className="kitd-gallery__empty-icon">
// //               <Camera size={48} strokeWidth={1} />
// //             </div>
// //             <h3 className="kitd-gallery__empty-title">Gallery Coming Soon</h3>
// //             <p className="kitd-gallery__empty-text">
// //               Photos from upcoming performances, workshops, and cultural 
// //               events will be showcased here. Stay tuned as we document 
// //               KITD's journey across Germany.
// //             </p>
// //           </div>
// //         )}

// //         {/* Loading State */}
// //         {loading && (
// //           <div className="kitd-gallery__loading">
// //             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--featured" />
// //             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid" />
// //             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid" />
// //             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid" />
// //             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid" />
// //           </div>
// //         )}

// //         {/* Bottom CTA */}
// //         {gallery.length > 0 && (
// //           <div className="kitd-gallery__cta-wrapper">
// //             <Link to="/gallery" className="kitd-gallery__cta">
// //               <span>Explore Full Gallery</span>
// //               <span className="kitd-gallery__cta-icon">
// //                 <ArrowRight size={16} strokeWidth={1.5} />
// //               </span>
// //             </Link>
// //           </div>
// //         )}

// //       </div>
// //     </section>
// //   );
// // };

// // export default GallerySection;

// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Camera, MapPin, Calendar, Sparkles, Heart } from "lucide-react";

// import { getAllGallery } from "../../api/gallery.api";

// import "./GallerySection.css";

// // Fallback gallery items based on KITD activities
// const FALLBACK_GALLERY = [
//   {
//     id: 1,
//     title: "Bharatanatyam Festival",
//     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
//     category: "Performance",
//     city: "Berlin",
//     date: "September 2025",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "SPANDA Workshop",
//     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
//     category: "Workshop",
//     city: "Munich",
//     date: "March 2025",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "City Concert Series",
//     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
//     category: "Concert",
//     city: "Frankfurt",
//     date: "June 2025",
//     featured: false,
//   },
//   {
//     id: 4,
//     title: "Lecture Demonstration",
//     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
//     category: "Lecture",
//     city: "Hamburg",
//     date: "April 2025",
//     featured: false,
//   },
//   {
//     id: 5,
//     title: "Community Gathering",
//     image: "https://images.pexels.com/photos/14602476/pexels-photo-14602476.jpeg",
//     category: "Community",
//     city: "Cologne",
//     date: "May 2025",
//     featured: false,
//   },
//   {
//     id: 6,
//     title: "Annual Festival",
//     image: "https://images.pexels.com/photos/19539249/pexels-photo-19539249.jpeg",
//     category: "Festival",
//     city: "Stuttgart",
//     date: "August 2025",
//     featured: false,
//   },
//   {
//     id: 7,
//     title: "Annual Festival",
//     image: "https://images.pexels.com/photos/19539249/pexels-photo-19539249.jpeg",
//     category: "Festival",
//     city: "Stuttgart",
//     date: "August 2025",
//     featured: false,
//   },
// ];

// const GallerySection = () => {
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     fetchGallery();
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const res = await getAllGallery({ page: 1, limit: 6 });
      
//       console.log("Gallery API Response:", res);
      
//       // Extract gallery data from response
//       let galleryData = [];
//       if (res?.data?.data) {
//         if (Array.isArray(res.data.data)) {
//           galleryData = res.data.data;
//         } else if (res.data.data.gallery) {
//           galleryData = res.data.data.gallery;
//         } else if (res.data.data.galleries) {
//           galleryData = res.data.data.galleries;
//         }
//       } else if (Array.isArray(res?.data)) {
//         galleryData = res.data;
//       } else if (Array.isArray(res)) {
//         galleryData = res;
//       }
      
//       console.log("Extracted gallery data:", galleryData);
      
//       if (galleryData.length > 0) {
//         const formattedGallery = galleryData.map((item, index) => {
//           // Construct image URL properly
//           let imageUrl = FALLBACK_GALLERY[index % FALLBACK_GALLERY.length]?.image;
          
//           if (item.image) {
//             if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
//               imageUrl = item.image;
//             } else {
//               imageUrl = `${IMAGE_BASE_URL}/uploads/gallery/${item.image}`;
//             }
//           }
          
//           console.log(`Gallery item ${index} image URL:`, imageUrl);
          
//           return {
//             id: item.id,
//             title: item.title || "KITD Event",
//             image: imageUrl,
//             category: item.category || "Event",
//             city: item.city || "Germany",
//             date: item.date || new Date(item.createdAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
//             featured: index === 0 ? true : false,
//           };
//         });
//         setGallery(formattedGallery);
//       } else {
//         setGallery(FALLBACK_GALLERY);
//       }
//     } catch (err) {
//       console.error("Error fetching gallery:", err);
//       setGallery(FALLBACK_GALLERY);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Separate featured and regular items
//   const featuredItem = gallery.find(item => item.featured);
//   const regularItems = gallery.filter(item => !item.featured);

//   return (
//     <section className={`kitd-gallery ${isVisible ? 'kitd-gallery--visible' : ''}`} ref={sectionRef}>
//       {/* Decorative Elements */}
//       <div className="kitd-gallery__deco kitd-gallery__deco--1" />
//       <div className="kitd-gallery__deco kitd-gallery__deco--2" />
//       <div className="kitd-gallery__deco kitd-gallery__deco--3" />

//       <div className="kitd-gallery__container">
        
//         {/* Section Header */}
//         <div className="kitd-gallery__header">
//           <div className="kitd-gallery__eyebrow">
//             <span className="kitd-gallery__eyebrow-line" />
//             <span className="kitd-gallery__eyebrow-text">Photo Gallery</span>
//           </div>
          
//           <h2 className="kitd-gallery__title">
//             Celebrating Every Performance,
//             <br />
//             Workshop &
//             <span className="kitd-gallery__title-accent"> Cultural Gathering</span>
//           </h2>
          
//           <p className="kitd-gallery__subtitle">
//             Browse highlights from performances, workshops, SPANDA sessions, 
//             city concerts, festivals, and community gatherings that showcase 
//             the vibrant journey of KITD across Germany.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         {!loading && gallery.length > 0 && (
//           <div className="kitd-gallery__grid">
            
//             {/* Featured Item - Large */}
//             {featuredItem && (
//               <div 
//                 className={`kitd-gallery__card kitd-gallery__card--featured ${hoveredCard === 'featured' ? 'kitd-gallery__card--hovered' : ''}`}
//                 onMouseEnter={() => setHoveredCard('featured')}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{ transitionDelay: '0s' }}
//               >
//                 <div 
//                   className="kitd-gallery__card-bg"
//                   style={{ 
//                     backgroundImage: `url(${featuredItem.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                   }}
//                 />
//                 <div className="kitd-gallery__card-overlay" />
                
//                 <div className="kitd-gallery__card-badge">
//                   <Sparkles size={12} />
//                   <span>Featured</span>
//                 </div>

//                 <div className="kitd-gallery__card-content kitd-gallery__card-content--featured">
//                   <div className="kitd-gallery__card-top">
//                     <span className="kitd-gallery__card-category">{featuredItem.category}</span>
//                   </div>
                  
//                   <div className="kitd-gallery__card-bottom">
//                     <h3 className="kitd-gallery__card-title">{featuredItem.title}</h3>
//                     <div className="kitd-gallery__card-meta">
//                       <span>
//                         <MapPin size={14} strokeWidth={1.5} />
//                         {featuredItem.city}
//                       </span>
//                       <span>
//                         <Calendar size={14} strokeWidth={1.5} />
//                         {featuredItem.date}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Regular Items Grid */}
//             <div className="kitd-gallery__grid-items">
//               {regularItems.map((item, index) => (
//                 <div 
//                   className={`kitd-gallery__card kitd-gallery__card--grid ${hoveredCard === index ? 'kitd-gallery__card--hovered' : ''}`}
//                   key={item.id || index}
//                   style={{ transitionDelay: `${(index + 1) * 0.06}s` }}
//                   onMouseEnter={() => setHoveredCard(index)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div 
//                     className="kitd-gallery__card-bg"
//                     style={{ 
//                       backgroundImage: `url(${item.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                     }}
//                   />
//                   <div className="kitd-gallery__card-overlay" />
                  
//                   <div className="kitd-gallery__card-content kitd-gallery__card-content--grid">
//                     <div className="kitd-gallery__card-top">
//                       <span className="kitd-gallery__card-category">{item.category}</span>
//                     </div>
                    
//                     <div className="kitd-gallery__card-bottom">
//                       <h4 className="kitd-gallery__card-title">{item.title}</h4>
//                       <div className="kitd-gallery__card-meta">
//                         <span>
//                           <MapPin size={12} strokeWidth={1.5} />
//                           {item.city}
//                         </span>
//                         <span>
//                           <Calendar size={12} strokeWidth={1.5} />
//                           {item.date}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && gallery.length === 0 && (
//           <div className="kitd-gallery__empty">
//             <div className="kitd-gallery__empty-icon">
//               <Camera size={48} strokeWidth={1} />
//             </div>
//             <h3 className="kitd-gallery__empty-title">Gallery Coming Soon</h3>
//             <p className="kitd-gallery__empty-text">
//               Photos from upcoming performances, workshops, and cultural 
//               events will be showcased here. Stay tuned as we document 
//               KITD's journey across Germany.
//             </p>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="kitd-gallery__loading">
//             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--featured">
//               <div className="kitd-gallery__skeleton-image" />
//             </div>
//             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid">
//               <div className="kitd-gallery__skeleton-image" />
//             </div>
//             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid">
//               <div className="kitd-gallery__skeleton-image" />
//             </div>
//             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid">
//               <div className="kitd-gallery__skeleton-image" />
//             </div>
//             <div className="kitd-gallery__skeleton kitd-gallery__skeleton--grid">
//               <div className="kitd-gallery__skeleton-image" />
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         {gallery.length > 0 && (
//           <div className="kitd-gallery__cta-wrapper">
//             <Link to="/gallery" className="kitd-gallery__cta">
//               <span>Explore Full Gallery</span>
//               <span className="kitd-gallery__cta-icon">
//                 <ArrowRight size={16} strokeWidth={1.5} />
//               </span>
//             </Link>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default GallerySection;


import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, MapPin, Calendar, Sparkles } from "lucide-react";
import gallery1 from "../../assets/gal1.jpg";
import gallery2 from "../../assets/gal2.jpg";
import gallery3 from "../../assets/gal3.jpg";
import gallery4 from "../../assets/gal4.jpg";
import gallery5 from "../../assets/gal5.jpg";
import gallery6 from "../../assets/gal6.jpg";
import { getAllGallery } from "../../api/gallery.api";

import "./GallerySection.css";

// Fallback gallery items based on KITD activities
const FALLBACK_GALLERY = [
  {
    id: 1,
    title: "Bharatanatyam Festival",
    image: gallery1,
    category: "Performance",
    city: "Berlin",
    date: "September 2025",
    featured: true,
  },
  {
    id: 2,
    title: "SPANDA Workshop",
    image: gallery2,
    category: "Workshop",
    city: "Munich",
    date: "March 2025",
    featured: false,
  },
  {
    id: 3,
    title: "City Concert Series",
    image: gallery3,
    category: "Concert",
    city: "Frankfurt",
    date: "June 2025",
    featured: false,
  },
  {
    id: 4,
    title: "Lecture Demonstration",
    image: gallery4,
    category: "Lecture",
    city: "Hamburg",
    date: "April 2025",
    featured: false,
  },
  {
    id: 5,
    title: "Community Gathering",
    image: gallery5,
    category: "Community",
    city: "Cologne",
    date: "May 2025",
    featured: false,
  },
  {
    id: 6,
    title: "Annual Festival",
    image: gallery6,
    category: "Festival",
    city: "Stuttgart",
    date: "August 2025",
    featured: false,
  },
];

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await getAllGallery({ page: 1, limit: 6 });
      
      let galleryData = [];
      if (res?.data?.data) {
        if (Array.isArray(res.data.data)) {
          galleryData = res.data.data;
        } else if (res.data.data.gallery) {
          galleryData = res.data.data.gallery;
        } else if (res.data.data.galleries) {
          galleryData = res.data.data.galleries;
        }
      } else if (Array.isArray(res?.data)) {
        galleryData = res.data;
      } else if (Array.isArray(res)) {
        galleryData = res;
      }
      
      if (galleryData.length > 0) {
        const formattedGallery = galleryData.map((item, index) => {
          let imageUrl = FALLBACK_GALLERY[index % FALLBACK_GALLERY.length]?.image;
          
          if (item.image) {
            if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
              imageUrl = item.image;
            } else {
              imageUrl = `${IMAGE_BASE_URL}/uploads/gallery/${item.image}`;
            }
          }
          
          return {
            id: item.id,
            title: item.title || "KITD Event",
            image: imageUrl,
            category: item.category || "Event",
            city: item.city || "Germany",
            date: item.date || new Date(item.createdAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
            featured: index === 0 ? true : false,
          };
        });
        setGallery(formattedGallery);
      } else {
        setGallery(FALLBACK_GALLERY);
      }
    } catch (err) {
      console.error("Error fetching gallery:", err);
      setGallery(FALLBACK_GALLERY);
    } finally {
      setLoading(false);
    }
  };

  // Create marquee items - duplicate for seamless scrolling
  const topRowItems = [...gallery, ...gallery, ...gallery];
  const bottomRowItems = [...gallery, ...gallery, ...gallery];

  return (
    <section className={`kitd-gallery ${isVisible ? 'kitd-gallery--visible' : ''}`} ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="kitd-gallery__deco kitd-gallery__deco--1" />
      <div className="kitd-gallery__deco kitd-gallery__deco--2" />
      <div className="kitd-gallery__deco kitd-gallery__deco--3" />

      <div className="kitd-gallery__container">
        
        {/* Section Header */}
        <div className="kitd-gallery__header">
          <div className="kitd-gallery__eyebrow">
            <span className="kitd-gallery__eyebrow-line" />
            <span className="kitd-gallery__eyebrow-text">Photo Gallery</span>
          </div>
          
          <h2 className="kitd-gallery__title">
            Celebrating Every Performance,
            <br />
            Workshop &
            <span className="kitd-gallery__title-accent"> Cultural Gathering</span>
          </h2>
          
          <p className="kitd-gallery__subtitle">
            Browse highlights from performances, workshops, SPANDA sessions, 
            city concerts, festivals, and community gatherings that showcase 
            the vibrant journey of KITD across Germany.
          </p>
        </div>

        {/* Gallery Marquee */}
        {!loading && gallery.length > 0 && (
          <div className="kitd-gallery__marquee-wrapper">
            
            {/* Top Row - Left to Right */}
            <div className="kitd-gallery__marquee kitd-gallery__marquee--top">
              <div className="kitd-gallery__marquee-track kitd-gallery__marquee-track--ltr">
                {topRowItems.map((item, index) => (
                  <div 
                    className={`kitd-gallery__marquee-card ${hoveredCard === `top-${index}` ? 'kitd-gallery__marquee-card--hovered' : ''}`}
                    key={`top-${item.id}-${index}`}
                    onMouseEnter={() => setHoveredCard(`top-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-gallery__marquee-bg"
                      style={{ 
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="kitd-gallery__marquee-overlay" />
                    
                    <div className="kitd-gallery__marquee-content">
                      <div className="kitd-gallery__marquee-top">
                        <span className="kitd-gallery__marquee-category">{item.category}</span>
                      </div>
                      <div className="kitd-gallery__marquee-bottom">
                        <h4 className="kitd-gallery__marquee-title">{item.title}</h4>
                        <div className="kitd-gallery__marquee-meta">
                          <span>
                            <MapPin size={12} strokeWidth={1.5} />
                            {item.city}
                          </span>
                          <span>
                            <Calendar size={12} strokeWidth={1.5} />
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Right to Left */}
            <div className="kitd-gallery__marquee kitd-gallery__marquee--bottom">
              <div className="kitd-gallery__marquee-track kitd-gallery__marquee-track--rtl">
                {bottomRowItems.map((item, index) => (
                  <div 
                    className={`kitd-gallery__marquee-card ${hoveredCard === `bottom-${index}` ? 'kitd-gallery__marquee-card--hovered' : ''}`}
                    key={`bottom-${item.id}-${index}`}
                    onMouseEnter={() => setHoveredCard(`bottom-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-gallery__marquee-bg"
                      style={{ 
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="kitd-gallery__marquee-overlay" />
                    
                    <div className="kitd-gallery__marquee-content">
                      <div className="kitd-gallery__marquee-top">
                        <span className="kitd-gallery__marquee-category">{item.category}</span>
                      </div>
                      <div className="kitd-gallery__marquee-bottom">
                        <h4 className="kitd-gallery__marquee-title">{item.title}</h4>
                        <div className="kitd-gallery__marquee-meta">
                          <span>
                            <MapPin size={12} strokeWidth={1.5} />
                            {item.city}
                          </span>
                          <span>
                            <Calendar size={12} strokeWidth={1.5} />
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Empty State */}
        {!loading && gallery.length === 0 && (
          <div className="kitd-gallery__empty">
            <div className="kitd-gallery__empty-icon">
              <Camera size={48} strokeWidth={1} />
            </div>
            <h3 className="kitd-gallery__empty-title">Gallery Coming Soon</h3>
            <p className="kitd-gallery__empty-text">
              Photos from upcoming performances, workshops, and cultural 
              events will be showcased here. Stay tuned as we document 
              KITD's journey across Germany.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="kitd-gallery__loading">
            <div className="kitd-gallery__skeleton-row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="kitd-gallery__skeleton-card">
                  <div className="kitd-gallery__skeleton-image" />
                </div>
              ))}
            </div>
            <div className="kitd-gallery__skeleton-row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="kitd-gallery__skeleton-card">
                  <div className="kitd-gallery__skeleton-image" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {gallery.length > 0 && (
          <div className="kitd-gallery__cta-wrapper">
            <Link to="/gallery" className="kitd-gallery__cta">
              <span>Explore Full Gallery</span>
              <span className="kitd-gallery__cta-icon">
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