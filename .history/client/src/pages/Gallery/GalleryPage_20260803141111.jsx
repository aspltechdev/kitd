// // // // // src/pages/Gallery/GalleryPage.jsx

// // // // import { useState, useEffect, useMemo } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { 
// // // //   Calendar, 
// // // //   MapPin, 
// // // //   Tag, 
// // // //   Filter, 
// // // //   X,
// // // //   ArrowRight,
// // // //   Play,
// // // //   Users,
// // // //   Award,
// // // //   Heart,
// // // //   Camera,
// // // //   Sparkles,
// // // //   ChevronDown,
// // // //   Eye,
// // // //   Image as ImageIcon
// // // // } from "lucide-react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // Import mock data - replace with API calls
// // // // import { 
// // // //   galleryItems, 
// // // //   featuredMoments, 
// // // //   eventHighlights,
// // // //   communityStats 
// // // // } from "../data/galleryData";

// // // // import "./GalleryPage.css";

// // // // const GalleryPage = () => {
// // // //   const [filteredItems, setFilteredItems] = useState(galleryItems);
// // // //   const [activeFilters, setActiveFilters] = useState({
// // // //     category: "All",
// // // //     year: "All Years",
// // // //     city: "All Cities"
// // // //   });
// // // //   const [isFilterOpen, setIsFilterOpen] = useState(false);
// // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   // Get unique categories, years, and cities for filters
// // // //   const filterOptions = useMemo(() => {
// // // //     const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
// // // //     const years = ["All Years", ...new Set(galleryItems.map(item => item.date.split(" ").pop()))];
// // // //     const cities = ["All Cities", ...new Set(galleryItems.map(item => item.location))];
// // // //     return { categories, years, cities };
// // // //   }, []);

// // // //   // Apply filters
// // // //   useEffect(() => {
// // // //     let filtered = galleryItems;

// // // //     if (activeFilters.category !== "All") {
// // // //       filtered = filtered.filter(item => item.category === activeFilters.category);
// // // //     }

// // // //     if (activeFilters.year !== "All Years") {
// // // //       filtered = filtered.filter(item => item.date.includes(activeFilters.year));
// // // //     }

// // // //     if (activeFilters.city !== "All Cities") {
// // // //       filtered = filtered.filter(item => item.location === activeFilters.city);
// // // //     }

// // // //     setFilteredItems(filtered);
// // // //   }, [activeFilters]);

// // // //   const handleFilterChange = (type, value) => {
// // // //     setActiveFilters(prev => ({ ...prev, [type]: value }));
// // // //     setIsFilterOpen(false);
// // // //   };

// // // //   const clearFilters = () => {
// // // //     setActiveFilters({
// // // //       category: "All",
// // // //       year: "All Years",
// // // //       city: "All Cities"
// // // //     });
// // // //   };

// // // //   const isFilterActive = activeFilters.category !== "All" || 
// // // //                          activeFilters.year !== "All Years" || 
// // // //                          activeFilters.city !== "All Cities";

// // // //   // Lightbox functions
// // // //   const openLightbox = (item, index) => {
// // // //     setSelectedItem(item);
// // // //     setCurrentIndex(index);
// // // //     document.body.style.overflow = 'hidden';
// // // //   };

// // // //   const closeLightbox = () => {
// // // //     setSelectedItem(null);
// // // //     document.body.style.overflow = 'unset';
// // // //   };

// // // //   const navigateLightbox = (direction) => {
// // // //     const newIndex = currentIndex + direction;
// // // //     if (newIndex >= 0 && newIndex < filteredItems.length) {
// // // //       setCurrentIndex(newIndex);
// // // //       setSelectedItem(filteredItems[newIndex]);
// // // //     }
// // // //   };

// // // //   // Keyboard navigation
// // // //   useEffect(() => {
// // // //     const handleKeyDown = (e) => {
// // // //       if (!selectedItem) return;
// // // //       if (e.key === 'ArrowRight') navigateLightbox(1);
// // // //       if (e.key === 'ArrowLeft') navigateLightbox(-1);
// // // //       if (e.key === 'Escape') closeLightbox();
// // // //     };

// // // //     window.addEventListener('keydown', handleKeyDown);
// // // //     return () => window.removeEventListener('keydown', handleKeyDown);
// // // //   }, [selectedItem, currentIndex]);

// // // //   return (
// // // //     <div className="gallery-page">

// // // //       {/* ============================================
// // // //          1. HERO SECTION
// // // //          ============================================ */}
// // // //       <section className="gallery-hero">
// // // //         <div className="gallery-hero-overlay" />
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="gallery-hero-content"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //           >
// // // //             <motion.span 
// // // //               className="gallery-hero-tag"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ delay: 0.2 }}
// // // //             >
// // // //               <Camera size={18} />
// // // //               PHOTO GALLERY
// // // //             </motion.span>

// // // //             <motion.h1
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.3 }}
// // // //             >
// // // //               Celebrating the Journey of
// // // //               <span>Indian Classical Dance</span>
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.4 }}
// // // //             >
// // // //               Explore memorable moments from performances, workshops, festivals, 
// // // //               SPANDA sessions and community gatherings that reflect the vibrant 
// // // //               journey of KITD across Germany.
// // // //             </motion.p>

// // // //             <motion.div 
// // // //               className="gallery-hero-stats"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ delay: 0.5 }}
// // // //             >
// // // //               <div className="stat-item">
// // // //                 <span className="stat-number">500+</span>
// // // //                 <span className="stat-label">Moments Captured</span>
// // // //               </div>
// // // //               <div className="stat-divider" />
// // // //               <div className="stat-item">
// // // //                 <span className="stat-number">50+</span>
// // // //                 <span className="stat-label">Events Covered</span>
// // // //               </div>
// // // //               <div className="stat-divider" />
// // // //               <div className="stat-item">
// // // //                 <span className="stat-number">15+</span>
// // // //                 <span className="stat-label">Cities</span>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          2. INTRODUCTION
// // // //          ============================================ */}
// // // //       <section className="gallery-intro">
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="gallery-intro-content"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             transition={{ duration: 0.6 }}
// // // //           >
// // // //             <span className="section-tag">About Our Gallery</span>
// // // //             <h2>Every Picture Tells a Story</h2>
// // // //             <p className="intro-description">
// // // //               Our gallery captures the passion, dedication and cultural richness of the KITD community. 
// // // //               From stage performances to educational workshops, each moment reflects our shared commitment 
// // // //               to preserving and promoting Indian Classical Dance.
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="gallery-intro-features">
// // // //             {[
// // // //               { icon: <ImageIcon size={24} />, title: "Performance Highlights", desc: "Capturing the grace and energy of our classical dance performances" },
// // // //               { icon: <Users size={24} />, title: "Community Moments", desc: "Celebrating the people who make KITD a vibrant community" },
// // // //               { icon: <Heart size={24} />, title: "Cultural Connection", desc: "Bridging Indian classical dance with German audiences" },
// // // //               { icon: <Sparkles size={24} />, title: "Educational Workshops", desc: "Sharing knowledge and passion through hands-on learning" }
// // // //             ].map((feature, index) => (
// // // //               <motion.div 
// // // //                 key={index}
// // // //                 className="feature-card"
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: index * 0.1 }}
// // // //               >
// // // //                 <div className="feature-icon">{feature.icon}</div>
// // // //                 <h3>{feature.title}</h3>
// // // //                 <p>{feature.desc}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          3. GALLERY FILTERS
// // // //          ============================================ */}
// // // //       <section className="gallery-filters">
// // // //         <div className="container">
// // // //           <div className="filters-wrapper">
// // // //             <div className="filters-header">
// // // //               <div className="filters-title">
// // // //                 <Filter size={20} />
// // // //                 <span>Filter Gallery</span>
// // // //                 {isFilterActive && (
// // // //                   <span className="filter-badge">Active</span>
// // // //                 )}
// // // //               </div>

// // // //               <div className="filters-actions">
// // // //                 {isFilterActive && (
// // // //                   <button className="clear-filters-btn" onClick={clearFilters}>
// // // //                     <X size={16} />
// // // //                     Clear All
// // // //                   </button>
// // // //                 )}
// // // //                 <button 
// // // //                   className="mobile-filter-toggle"
// // // //                   onClick={() => setIsFilterOpen(!isFilterOpen)}
// // // //                 >
// // // //                   <Filter size={20} />
// // // //                   <span>Filters</span>
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             {/* Desktop Filters */}
// // // //             <div className="filters-desktop">
// // // //               {[
// // // //                 { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// // // //                 { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// // // //                 { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// // // //               ].map((filter) => (
// // // //                 <div key={filter.type} className="filter-group">
// // // //                   <label>{filter.label}</label>
// // // //                   <div className="filter-select-wrapper">
// // // //                     <select 
// // // //                       value={filter.value} 
// // // //                       onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// // // //                       className="filter-select"
// // // //                     >
// // // //                       {filter.options.map(option => (
// // // //                         <option key={option} value={option}>{option}</option>
// // // //                       ))}
// // // //                     </select>
// // // //                     <ChevronDown size={16} className="filter-select-icon" />
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* Mobile Filters */}
// // // //             <AnimatePresence>
// // // //               {isFilterOpen && (
// // // //                 <motion.div 
// // // //                   className="filters-mobile"
// // // //                   initial={{ height: 0, opacity: 0 }}
// // // //                   animate={{ height: "auto", opacity: 1 }}
// // // //                   exit={{ height: 0, opacity: 0 }}
// // // //                   transition={{ duration: 0.3 }}
// // // //                 >
// // // //                   {[
// // // //                     { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// // // //                     { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// // // //                     { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// // // //                   ].map((filter) => (
// // // //                     <div key={filter.type} className="filter-group">
// // // //                       <label>{filter.label}</label>
// // // //                       <div className="filter-select-wrapper">
// // // //                         <select 
// // // //                           value={filter.value} 
// // // //                           onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// // // //                           className="filter-select"
// // // //                         >
// // // //                           {filter.options.map(option => (
// // // //                             <option key={option} value={option}>{option}</option>
// // // //                           ))}
// // // //                         </select>
// // // //                         <ChevronDown size={16} className="filter-select-icon" />
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>

// // // //             {/* Results Count */}
// // // //             <div className="filters-results">
// // // //               <span>{filteredItems.length} {filteredItems.length === 1 ? 'moment' : 'moments'} captured</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          4. FEATURED MOMENTS
// // // //          ============================================ */}
// // // //       <section className="featured-moments">
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="section-header"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <span className="section-tag">Featured</span>
// // // //             <h2>Featured Moments</h2>
// // // //             <p>Highlighting our most memorable performances, workshops, and festivals</p>
// // // //           </motion.div>

// // // //           <div className="featured-grid">
// // // //             {featuredMoments.map((moment, index) => (
// // // //               <motion.div 
// // // //                 key={moment.id}
// // // //                 className={`featured-card featured-${moment.size || 'medium'}`}
// // // //                 initial={{ opacity: 0, scale: 0.95 }}
// // // //                 whileInView={{ opacity: 1, scale: 1 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: index * 0.1 }}
// // // //               >
// // // //                 <div className="featured-image-wrapper">
// // // //                   <img src={moment.image} alt={moment.title} />
// // // //                   <div className="featured-overlay">
// // // //                     <div className="featured-badge">{moment.category}</div>
// // // //                     <button 
// // // //                       className="featured-link"
// // // //                       onClick={() => openLightbox(moment, index)}
// // // //                     >
// // // //                       <Eye size={20} />
// // // //                       View Details
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="featured-content">
// // // //                   <h3>{moment.title}</h3>
// // // //                   <div className="featured-meta">
// // // //                     <span className="featured-location">
// // // //                       <MapPin size={14} />
// // // //                       {moment.location}
// // // //                     </span>
// // // //                     <span className="featured-date">
// // // //                       <Calendar size={14} />
// // // //                       {moment.date}
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          5. PHOTO GALLERY GRID
// // // //          ============================================ */}
// // // //       <section className="masonry-gallery">
// // // //         <div className="container">
// // // //           {filteredItems.length === 0 ? (
// // // //             <div className="no-results">
// // // //               <ImageIcon size={48} />
// // // //               <h3>No moments found</h3>
// // // //               <p>Try adjusting your filters to see more results</p>
// // // //               <button className="clear-filters-btn" onClick={clearFilters}>
// // // //                 Clear Filters
// // // //               </button>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="masonry-grid">
// // // //               {filteredItems.map((item, index) => (
// // // //                 <motion.div 
// // // //                   key={item.id}
// // // //                   className={`gallery-item ${item.size || ''}`}
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ delay: (index % 6) * 0.05 }}
// // // //                   onClick={() => openLightbox(item, index)}
// // // //                 >
// // // //                   <div className="gallery-item-image">
// // // //                     <img src={item.image} alt={item.title} loading="lazy" />
// // // //                     <div className="gallery-item-overlay">
// // // //                       <div className="gallery-item-info">
// // // //                         <h4>{item.title}</h4>
// // // //                         <div className="gallery-item-meta">
// // // //                           <span><Tag size={12} /> {item.category}</span>
// // // //                           <span><MapPin size={12} /> {item.location}</span>
// // // //                           <span><Calendar size={12} /> {item.date}</span>
// // // //                         </div>
// // // //                         <span className="gallery-item-click">Click to view</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          6. EVENT HIGHLIGHTS
// // // //          ============================================ */}
// // // //       <section className="event-highlights">
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="section-header"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <span className="section-tag">Events</span>
// // // //             <h2>Event Highlights</h2>
// // // //             <p>Explore our most memorable events and community gatherings</p>
// // // //           </motion.div>

// // // //           <div className="events-grid">
// // // //             {eventHighlights.map((event, index) => (
// // // //               <motion.div 
// // // //                 key={event.id}
// // // //                 className="event-card"
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: index * 0.1 }}
// // // //               >
// // // //                 <div className="event-image">
// // // //                   <img src={event.image} alt={event.title} />
// // // //                   <div className="event-date-badge">
// // // //                     <span className="event-day">{event.date.split(' ')[0]}</span>
// // // //                     <span className="event-month">{event.date.split(' ')[1]}</span>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="event-content">
// // // //                   <h3>{event.title}</h3>
// // // //                   <p>{event.description}</p>
// // // //                   <div className="event-meta">
// // // //                     <span><MapPin size={14} /> {event.location}</span>
// // // //                     <span><Users size={14} /> {event.attendees}+ attendees</span>
// // // //                   </div>
// // // //                   <Link to={`/events/${event.slug}`} className="event-link">
// // // //                     View Event <ArrowRight size={16} />
// // // //                   </Link>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          7. COMMUNITY MEMORIES
// // // //          ============================================ */}
// // // //       <section className="community-memories">
// // // //         <div className="community-memories-overlay" />
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="community-content"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <span className="section-tag light">Community</span>
// // // //             <h2>Every performance, every workshop, every collaboration</h2>
// // // //             <p>adds a new chapter to the KITD community story.</p>

// // // //             <div className="community-stats">
// // // //               {communityStats.map((stat, index) => (
// // // //                 <motion.div 
// // // //                   key={stat.label}
// // // //                   className="community-stat"
// // // //                   initial={{ opacity: 0, scale: 0.9 }}
// // // //                   whileInView={{ opacity: 1, scale: 1 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ delay: index * 0.1 }}
// // // //                 >
// // // //                   <span className="stat-number">{stat.number}</span>
// // // //                   <span className="stat-label">{stat.label}</span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>

// // // //             <Link to="/about" className="community-cta">
// // // //               Discover Our Story <ArrowRight size={20} />
// // // //             </Link>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          8. CTA SECTION
// // // //          ============================================ */}
// // // //       <section className="gallery-cta">
// // // //         <div className="container">
// // // //           <motion.div 
// // // //             className="cta-content"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <h2>Be Part of Our Next Story</h2>
// // // //             <p>
// // // //               Join our upcoming events, performances and workshops and become 
// // // //               part of the growing KITD community.
// // // //             </p>
// // // //             <div className="cta-buttons">
// // // //               <Link to="/events" className="primary-btn">
// // // //                 Upcoming Events <ArrowRight size={18} />
// // // //               </Link>
// // // //               <Link to="/membership" className="secondary-btn">
// // // //                 Become a Member
// // // //               </Link>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ============================================
// // // //          LIGHTBOX MODAL
// // // //          ============================================ */}
// // // //       <AnimatePresence>
// // // //         {selectedItem && (
// // // //           <motion.div 
// // // //             className="lightbox-modal"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={closeLightbox}
// // // //           >
// // // //             <button className="lightbox-close" onClick={closeLightbox}>
// // // //               <X size={28} />
// // // //             </button>
            
// // // //             <button 
// // // //               className="lightbox-nav lightbox-prev"
// // // //               onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
// // // //               disabled={currentIndex === 0}
// // // //             >
// // // //               <ChevronLeft size={30} />
// // // //             </button>

// // // //             <motion.div 
// // // //               className="lightbox-content"
// // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // //               animate={{ scale: 1, opacity: 1 }}
// // // //               exit={{ scale: 0.9, opacity: 0 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <img src={selectedItem.image} alt={selectedItem.title} />
// // // //               <div className="lightbox-info">
// // // //                 <h3>{selectedItem.title}</h3>
// // // //                 <div className="lightbox-meta">
// // // //                   <span><Tag size={16} /> {selectedItem.category}</span>
// // // //                   <span><MapPin size={16} /> {selectedItem.location}</span>
// // // //                   <span><Calendar size={16} /> {selectedItem.date}</span>
// // // //                 </div>
// // // //                 <p>{selectedItem.description}</p>
// // // //                 <div className="lightbox-actions">
// // // //                   <Link to={`/gallery/${selectedItem.slug}`} className="lightbox-link">
// // // //                     View Details <ArrowRight size={16} />
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>

// // // //             <button 
// // // //               className="lightbox-nav lightbox-next"
// // // //               onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
// // // //               disabled={currentIndex === filteredItems.length - 1}
// // // //             >
// // // //               <ChevronRight size={30} />
// // // //             </button>

// // // //             <div className="lightbox-counter">
// // // //               {currentIndex + 1} / {filteredItems.length}
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default GalleryPage;

// // // // src/pages/Gallery/GalleryPage.jsx

// // // import { useState, useEffect, useMemo } from "react";
// // // import { Link } from "react-router-dom";
// // // import { 
// // //   Calendar, 
// // //   MapPin, 
// // //   Tag, 
// // //   Filter, 
// // //   X,
// // //   ArrowRight,
// // //   Users,
// // //   Heart,
// // //   Camera,
// // //   Sparkles,
// // //   ChevronDown,
// // //   Eye,
// // //   Image as ImageIcon
// // // } from "lucide-react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Import mock data service
// // // import { 
// // //   getGalleryItems,
// // //   getFeaturedMoments,
// // //   getEventHighlights,
// // //   getCommunityStats,
// // //   getFilterOptions
// // // } from "../../services/mockGalleryService";

// // // import "./GalleryPage.css";

// // // const GalleryPage = () => {
// // //   const [filteredItems, setFilteredItems] = useState([]);
// // //   const [allItems, setAllItems] = useState([]);
// // //   const [featuredItems, setFeaturedItems] = useState([]);
// // //   const [events, setEvents] = useState([]);
// // //   const [stats, setStats] = useState([]);
// // //   const [filterOptions, setFilterOptions] = useState({
// // //     categories: ["All"],
// // //     years: ["All Years"],
// // //     cities: ["All Cities"]
// // //   });
// // //   const [activeFilters, setActiveFilters] = useState({
// // //     category: "All",
// // //     year: "All Years",
// // //     city: "All Cities"
// // //   });
// // //   const [isFilterOpen, setIsFilterOpen] = useState(false);
// // //   const [selectedItem, setSelectedItem] = useState(null);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [loading, setLoading] = useState(true);

// // //   // Fetch data - Replace with API call later
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setLoading(true);
// // //       try {
// // //         // Simulate API call with mock data
// // //         const items = await getGalleryItems();
// // //         const featured = await getFeaturedMoments();
// // //         const eventList = await getEventHighlights();
// // //         const statsData = await getCommunityStats();
// // //         const options = await getFilterOptions();

// // //         setAllItems(items);
// // //         setFilteredItems(items);
// // //         setFeaturedItems(featured);
// // //         setEvents(eventList);
// // //         setStats(statsData);
// // //         setFilterOptions(options);
// // //       } catch (error) {
// // //         console.error("Error fetching gallery data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   // Apply filters
// // //   useEffect(() => {
// // //     let filtered = allItems;

// // //     if (activeFilters.category !== "All") {
// // //       filtered = filtered.filter(item => item.category === activeFilters.category);
// // //     }

// // //     if (activeFilters.year !== "All Years") {
// // //       filtered = filtered.filter(item => item.date.includes(activeFilters.year));
// // //     }

// // //     if (activeFilters.city !== "All Cities") {
// // //       filtered = filtered.filter(item => item.location === activeFilters.city);
// // //     }

// // //     setFilteredItems(filtered);
// // //   }, [activeFilters, allItems]);

// // //   const handleFilterChange = (type, value) => {
// // //     setActiveFilters(prev => ({ ...prev, [type]: value }));
// // //     setIsFilterOpen(false);
// // //   };

// // //   const clearFilters = () => {
// // //     setActiveFilters({
// // //       category: "All",
// // //       year: "All Years",
// // //       city: "All Cities"
// // //     });
// // //   };

// // //   const isFilterActive = activeFilters.category !== "All" || 
// // //                          activeFilters.year !== "All Years" || 
// // //                          activeFilters.city !== "All Cities";

// // //   // Lightbox functions
// // //   const openLightbox = (item, index) => {
// // //     setSelectedItem(item);
// // //     setCurrentIndex(index);
// // //     document.body.style.overflow = 'hidden';
// // //   };

// // //   const closeLightbox = () => {
// // //     setSelectedItem(null);
// // //     document.body.style.overflow = 'unset';
// // //   };

// // //   const navigateLightbox = (direction) => {
// // //     const newIndex = currentIndex + direction;
// // //     if (newIndex >= 0 && newIndex < filteredItems.length) {
// // //       setCurrentIndex(newIndex);
// // //       setSelectedItem(filteredItems[newIndex]);
// // //     }
// // //   };

// // //   // Keyboard navigation
// // //   useEffect(() => {
// // //     const handleKeyDown = (e) => {
// // //       if (!selectedItem) return;
// // //       if (e.key === 'ArrowRight') navigateLightbox(1);
// // //       if (e.key === 'ArrowLeft') navigateLightbox(-1);
// // //       if (e.key === 'Escape') closeLightbox();
// // //     };

// // //     window.addEventListener('keydown', handleKeyDown);
// // //     return () => window.removeEventListener('keydown', handleKeyDown);
// // //   }, [selectedItem, currentIndex]);

// // //   // Loading state
// // //   if (loading) {
// // //     return (
// // //       <div className="gallery-loader">
// // //         <div className="loader-spinner" />
// // //         <p>Loading gallery...</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="gallery-page">

// // //       {/* ============================================
// // //          1. HERO SECTION
// // //          ============================================ */}
// // //       <section className="gallery-hero">
// // //         <div className="gallery-hero-overlay" />
// // //         <div className="container">
// // //           <motion.div 
// // //             className="gallery-hero-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <motion.span 
// // //               className="gallery-hero-tag"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 0.2 }}
// // //             >
// // //               <Camera size={18} />
// // //               PHOTO GALLERY
// // //             </motion.span>

// // //             <motion.h1
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.3 }}
// // //             >
// // //               Celebrating the Journey of
// // //               <span>Indian Classical Dance</span>
// // //             </motion.h1>

// // //             <motion.p
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.4 }}
// // //             >
// // //               Explore memorable moments from performances, workshops, festivals, 
// // //               SPANDA sessions and community gatherings that reflect the vibrant 
// // //               journey of KITD across Germany.
// // //             </motion.p>

// // //             <motion.div 
// // //               className="gallery-hero-stats"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 0.5 }}
// // //             >
// // //               <div className="stat-item">
// // //                 <span className="stat-number">{allItems.length}+</span>
// // //                 <span className="stat-label">Moments Captured</span>
// // //               </div>
// // //               <div className="stat-divider" />
// // //               <div className="stat-item">
// // //                 <span className="stat-number">
// // //                   {new Set(allItems.map(item => item.category)).size}+
// // //                 </span>
// // //                 <span className="stat-label">Categories</span>
// // //               </div>
// // //               <div className="stat-divider" />
// // //               <div className="stat-item">
// // //                 <span className="stat-number">
// // //                   {new Set(allItems.map(item => item.location)).size}+
// // //                 </span>
// // //                 <span className="stat-label">Cities</span>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          2. INTRODUCTION
// // //          ============================================ */}
// // //       <section className="gallery-intro">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="gallery-intro-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <span className="section-tag">About Our Gallery</span>
// // //             <h2>Every Picture Tells a Story</h2>
// // //             <p className="intro-description">
// // //               Our gallery captures the passion, dedication and cultural richness of the KITD community. 
// // //               From stage performances to educational workshops, each moment reflects our shared commitment 
// // //               to preserving and promoting Indian Classical Dance.
// // //             </p>
// // //           </motion.div>

// // //           <div className="gallery-intro-features">
// // //             {[
// // //               { icon: <ImageIcon size={24} />, title: "Performance Highlights", desc: "Capturing the grace and energy of our classical dance performances" },
// // //               { icon: <Users size={24} />, title: "Community Moments", desc: "Celebrating the people who make KITD a vibrant community" },
// // //               { icon: <Heart size={24} />, title: "Cultural Connection", desc: "Bridging Indian classical dance with German audiences" },
// // //               { icon: <Sparkles size={24} />, title: "Educational Workshops", desc: "Sharing knowledge and passion through hands-on learning" }
// // //             ].map((feature, index) => (
// // //               <motion.div 
// // //                 key={index}
// // //                 className="feature-card"
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: index * 0.1 }}
// // //               >
// // //                 <div className="feature-icon">{feature.icon}</div>
// // //                 <h3>{feature.title}</h3>
// // //                 <p>{feature.desc}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          3. GALLERY FILTERS
// // //          ============================================ */}
// // //       <section className="gallery-filters">
// // //         <div className="container">
// // //           <div className="filters-wrapper">
// // //             <div className="filters-header">
// // //               <div className="filters-title">
// // //                 <Filter size={20} />
// // //                 <span>Filter Gallery</span>
// // //                 {isFilterActive && (
// // //                   <span className="filter-badge">Active</span>
// // //                 )}
// // //               </div>

// // //               <div className="filters-actions">
// // //                 {isFilterActive && (
// // //                   <button className="clear-filters-btn" onClick={clearFilters}>
// // //                     <X size={16} />
// // //                     Clear All
// // //                   </button>
// // //                 )}
// // //                 <button 
// // //                   className="mobile-filter-toggle"
// // //                   onClick={() => setIsFilterOpen(!isFilterOpen)}
// // //                 >
// // //                   <Filter size={20} />
// // //                   <span>Filters</span>
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Desktop Filters */}
// // //             <div className="filters-desktop">
// // //               {[
// // //                 { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// // //                 { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// // //                 { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// // //               ].map((filter) => (
// // //                 <div key={filter.type} className="filter-group">
// // //                   <label>{filter.label}</label>
// // //                   <div className="filter-select-wrapper">
// // //                     <select 
// // //                       value={filter.value} 
// // //                       onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// // //                       className="filter-select"
// // //                     >
// // //                       {filter.options.map(option => (
// // //                         <option key={option} value={option}>{option}</option>
// // //                       ))}
// // //                     </select>
// // //                     <ChevronDown size={16} className="filter-select-icon" />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Mobile Filters */}
// // //             <AnimatePresence>
// // //               {isFilterOpen && (
// // //                 <motion.div 
// // //                   className="filters-mobile"
// // //                   initial={{ height: 0, opacity: 0 }}
// // //                   animate={{ height: "auto", opacity: 1 }}
// // //                   exit={{ height: 0, opacity: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   {[
// // //                     { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// // //                     { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// // //                     { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// // //                   ].map((filter) => (
// // //                     <div key={filter.type} className="filter-group">
// // //                       <label>{filter.label}</label>
// // //                       <div className="filter-select-wrapper">
// // //                         <select 
// // //                           value={filter.value} 
// // //                           onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// // //                           className="filter-select"
// // //                         >
// // //                           {filter.options.map(option => (
// // //                             <option key={option} value={option}>{option}</option>
// // //                           ))}
// // //                         </select>
// // //                         <ChevronDown size={16} className="filter-select-icon" />
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>

// // //             {/* Results Count */}
// // //             <div className="filters-results">
// // //               <span>{filteredItems.length} {filteredItems.length === 1 ? 'moment' : 'moments'} captured</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          4. FEATURED MOMENTS
// // //          ============================================ */}
// // //       {featuredItems.length > 0 && (
// // //         <section className="featured-moments">
// // //           <div className="container">
// // //             <motion.div 
// // //               className="section-header"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //             >
// // //               <span className="section-tag">Featured</span>
// // //               <h2>Featured Moments</h2>
// // //               <p>Highlighting our most memorable performances, workshops, and festivals</p>
// // //             </motion.div>

// // //             <div className="featured-grid">
// // //               {featuredItems.map((moment, index) => (
// // //                 <motion.div 
// // //                   key={moment.id}
// // //                   className={`featured-card featured-${moment.size || 'medium'}`}
// // //                   initial={{ opacity: 0, scale: 0.95 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                 >
// // //                   <div className="featured-image-wrapper">
// // //                     <img src={moment.image} alt={moment.title} />
// // //                     <div className="featured-overlay">
// // //                       <div className="featured-badge">{moment.category}</div>
// // //                       <button 
// // //                         className="featured-link"
// // //                         onClick={() => {
// // //                           const itemIndex = filteredItems.findIndex(item => item.id === moment.id);
// // //                           openLightbox(moment, itemIndex !== -1 ? itemIndex : index);
// // //                         }}
// // //                       >
// // //                         <Eye size={20} />
// // //                         View Details
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="featured-content">
// // //                     <h3>{moment.title}</h3>
// // //                     <div className="featured-meta">
// // //                       <span className="featured-location">
// // //                         <MapPin size={14} />
// // //                         {moment.location}
// // //                       </span>
// // //                       <span className="featured-date">
// // //                         <Calendar size={14} />
// // //                         {moment.date}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}

// // //       {/* ============================================
// // //          5. PHOTO GALLERY GRID
// // //          ============================================ */}
// // //       <section className="masonry-gallery">
// // //         <div className="container">
// // //           {filteredItems.length === 0 ? (
// // //             <div className="no-results">
// // //               <ImageIcon size={48} />
// // //               <h3>No moments found</h3>
// // //               <p>Try adjusting your filters to see more results</p>
// // //               <button className="clear-filters-btn" onClick={clearFilters}>
// // //                 Clear Filters
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <div className="masonry-grid">
// // //               {filteredItems.map((item, index) => (
// // //                 <motion.div 
// // //                   key={item.id}
// // //                   className={`gallery-item ${item.size || ''}`}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: (index % 6) * 0.05 }}
// // //                   onClick={() => openLightbox(item, index)}
// // //                 >
// // //                   <div className="gallery-item-image">
// // //                     <img src={item.image} alt={item.title} loading="lazy" />
// // //                     <div className="gallery-item-overlay">
// // //                       <div className="gallery-item-info">
// // //                         <h4>{item.title}</h4>
// // //                         <div className="gallery-item-meta">
// // //                           <span><Tag size={12} /> {item.category}</span>
// // //                           <span><MapPin size={12} /> {item.location}</span>
// // //                           <span><Calendar size={12} /> {item.date}</span>
// // //                         </div>
// // //                         <span className="gallery-item-click">Click to view</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          6. EVENT HIGHLIGHTS
// // //          ============================================ */}
// // //       {events.length > 0 && (
// // //         <section className="event-highlights">
// // //           <div className="container">
// // //             <motion.div 
// // //               className="section-header"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //             >
// // //               <span className="section-tag">Events</span>
// // //               <h2>Event Highlights</h2>
// // //               <p>Explore our most memorable events and community gatherings</p>
// // //             </motion.div>

// // //             <div className="events-grid">
// // //               {events.map((event, index) => (
// // //                 <motion.div 
// // //                   key={event.id}
// // //                   className="event-card"
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                 >
// // //                   <div className="event-image">
// // //                     <img src={event.image} alt={event.title} />
// // //                     <div className="event-date-badge">
// // //                       <span className="event-day">{event.date.split(' ')[0]}</span>
// // //                       <span className="event-month">{event.date.split(' ')[1]}</span>
// // //                     </div>
// // //                   </div>
// // //                   <div className="event-content">
// // //                     <h3>{event.title}</h3>
// // //                     <p>{event.description}</p>
// // //                     <div className="event-meta">
// // //                       <span><MapPin size={14} /> {event.location}</span>
// // //                       <span><Users size={14} /> {event.attendees}+ attendees</span>
// // //                     </div>
// // //                     <Link to={`/events/${event.slug}`} className="event-link">
// // //                       View Event <ArrowRight size={16} />
// // //                     </Link>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}

// // //       {/* ============================================
// // //          7. COMMUNITY MEMORIES
// // //          ============================================ */}
// // //       <section className="community-memories">
// // //         <div className="community-memories-overlay" />
// // //         <div className="container">
// // //           <motion.div 
// // //             className="community-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <span className="section-tag light">Community</span>
// // //             <h2>Every performance, every workshop, every collaboration</h2>
// // //             <p>adds a new chapter to the KITD community story.</p>

// // //             <div className="community-stats">
// // //               {stats.map((stat, index) => (
// // //                 <motion.div 
// // //                   key={stat.label}
// // //                   className="community-stat"
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                 >
// // //                   <span className="stat-number">{stat.number}</span>
// // //                   <span className="stat-label">{stat.label}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             <Link to="/about" className="community-cta">
// // //               Discover Our Story <ArrowRight size={20} />
// // //             </Link>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          8. CTA SECTION
// // //          ============================================ */}
// // //       <section className="gallery-cta">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="cta-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <h2>Be Part of Our Next Story</h2>
// // //             <p>
// // //               Join our upcoming events, performances and workshops and become 
// // //               part of the growing KITD community.
// // //             </p>
// // //             <div className="cta-buttons">
// // //               <Link to="/events" className="primary-btn">
// // //                 Upcoming Events <ArrowRight size={18} />
// // //               </Link>
// // //               <Link to="/membership" className="secondary-btn">
// // //                 Become a Member
// // //               </Link>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          LIGHTBOX MODAL
// // //          ============================================ */}
// // //       <AnimatePresence>
// // //         {selectedItem && (
// // //           <motion.div 
// // //             className="lightbox-modal"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={closeLightbox}
// // //           >
// // //             <button className="lightbox-close" onClick={closeLightbox}>
// // //               <X size={28} />
// // //             </button>
            
// // //             <button 
// // //               className="lightbox-nav lightbox-prev"
// // //               onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
// // //               disabled={currentIndex === 0}
// // //             >
// // //               <ChevronLeft size={30} />
// // //             </button>

// // //             <motion.div 
// // //               className="lightbox-content"
// // //               initial={{ scale: 0.9, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               exit={{ scale: 0.9, opacity: 0 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <img src={selectedItem.image} alt={selectedItem.title} />
// // //               <div className="lightbox-info">
// // //                 <h3>{selectedItem.title}</h3>
// // //                 <div className="lightbox-meta">
// // //                   <span><Tag size={16} /> {selectedItem.category}</span>
// // //                   <span><MapPin size={16} /> {selectedItem.location}</span>
// // //                   <span><Calendar size={16} /> {selectedItem.date}</span>
// // //                 </div>
// // //                 <p>{selectedItem.description || "This moment captures the essence of KITD's journey in preserving and promoting Indian Classical Dance in Germany."}</p>
// // //                 <div className="lightbox-actions">
// // //                   <Link to={`/gallery/${selectedItem.slug}`} className="lightbox-link">
// // //                     View Details <ArrowRight size={16} />
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             <button 
// // //               className="lightbox-nav lightbox-next"
// // //               onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
// // //               disabled={currentIndex === filteredItems.length - 1}
// // //             >
// // //               <ChevronRight size={30} />
// // //             </button>

// // //             <div className="lightbox-counter">
// // //               {currentIndex + 1} / {filteredItems.length}
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //     </div>
// // //   );
// // // };

// // // export default GalleryPage;

// // // src/pages/Gallery/GalleryPage.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { 
// //   Calendar, 
// //   MapPin, 
// //   Tag, 
// //   Filter, 
// //   X,
// //   ArrowRight,
// //   Users,
// //   Heart,
// //   Camera,
// //   Sparkles,
// //   ChevronDown,
// //   Eye,
// //   Image as ImageIcon,
// //   Grid,
// //   List,
// //   Search,
// //   Star,
// //   Clock,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // import { 
// //   getGalleryItems,
// //   getFeaturedMoments,
// //   getEventHighlights,
// //   getCommunityStats,
// //   getFilterOptions
// // } from "../../services/mockGalleryService";

// // import "./GalleryPage.css";

// // const GalleryPage = () => {
// //   const [filteredItems, setFilteredItems] = useState([]);
// //   const [allItems, setAllItems] = useState([]);
// //   const [featuredItems, setFeaturedItems] = useState([]);
// //   const [events, setEvents] = useState([]);
// //   const [stats, setStats] = useState([]);
// //   const [filterOptions, setFilterOptions] = useState({
// //     categories: ["All"],
// //     years: ["All Years"],
// //     cities: ["All Cities"]
// //   });
// //   const [activeFilters, setActiveFilters] = useState({
// //     category: "All",
// //     year: "All Years",
// //     city: "All Cities"
// //   });
// //   const [isFilterOpen, setIsFilterOpen] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [loading, setLoading] = useState(true);
// //   const [viewMode, setViewMode] = useState("grid");
// //   const [hoveredCard, setHoveredCard] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       try {
// //         const items = await getGalleryItems();
// //         const featured = await getFeaturedMoments();
// //         const eventList = await getEventHighlights();
// //         const statsData = await getCommunityStats();
// //         const options = await getFilterOptions();

// //         setAllItems(items);
// //         setFilteredItems(items);
// //         setFeaturedItems(featured);
// //         setEvents(eventList);
// //         setStats(statsData);
// //         setFilterOptions(options);
// //       } catch (error) {
// //         console.error("Error fetching gallery data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     let filtered = allItems;

// //     if (activeFilters.category !== "All") {
// //       filtered = filtered.filter(item => item.category === activeFilters.category);
// //     }

// //     if (activeFilters.year !== "All Years") {
// //       filtered = filtered.filter(item => item.date.includes(activeFilters.year));
// //     }

// //     if (activeFilters.city !== "All Cities") {
// //       filtered = filtered.filter(item => item.location === activeFilters.city);
// //     }

// //     setFilteredItems(filtered);
// //   }, [activeFilters, allItems]);

// //   const handleFilterChange = (type, value) => {
// //     setActiveFilters(prev => ({ ...prev, [type]: value }));
// //     setIsFilterOpen(false);
// //   };

// //   const clearFilters = () => {
// //     setActiveFilters({
// //       category: "All",
// //       year: "All Years",
// //       city: "All Cities"
// //     });
// //   };

// //   const isFilterActive = activeFilters.category !== "All" || 
// //                          activeFilters.year !== "All Years" || 
// //                          activeFilters.city !== "All Cities";

// //   const openLightbox = (item, index) => {
// //     setSelectedItem(item);
// //     setCurrentIndex(index);
// //     document.body.style.overflow = 'hidden';
// //   };

// //   const closeLightbox = () => {
// //     setSelectedItem(null);
// //     document.body.style.overflow = 'unset';
// //   };

// //   const navigateLightbox = (direction) => {
// //     const newIndex = currentIndex + direction;
// //     if (newIndex >= 0 && newIndex < filteredItems.length) {
// //       setCurrentIndex(newIndex);
// //       setSelectedItem(filteredItems[newIndex]);
// //     }
// //   };

// //   useEffect(() => {
// //     const handleKeyDown = (e) => {
// //       if (!selectedItem) return;
// //       if (e.key === 'ArrowRight') navigateLightbox(1);
// //       if (e.key === 'ArrowLeft') navigateLightbox(-1);
// //       if (e.key === 'Escape') closeLightbox();
// //     };

// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => window.removeEventListener('keydown', handleKeyDown);
// //   }, [selectedItem, currentIndex]);

// //   if (loading) {
// //     return (
// //       <div className="gallery-loader">
// //         <div className="loader-spinner" />
// //         <p>Loading gallery...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="gallery-page">

// //       {/* ============================================
// //          1. HERO SECTION
// //          ============================================ */}
// //       <section className="gallery-hero">
// //         <div className="gallery-hero-bg">
// //           <img 
// //             src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// //             alt="KITD Gallery"
// //             loading="eager"
// //           />
// //           <div className="gallery-hero-overlay" />
// //           <div className="gallery-hero-gradient" />
// //         </div>
        
// //         <div className="container">
// //           <div className="gallery-hero-content">
// //             <motion.span 
// //               className="gallery-hero-tag"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2 }}
// //             >
// //               <Camera size={18} />
// //               PHOTO GALLERY
// //             </motion.span>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //             >
// //               Celebrating the Journey of
// //               <span>Indian Classical Dance</span>
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 }}
// //             >
// //               Explore memorable moments from performances, workshops, festivals, 
// //               SPANDA sessions and community gatherings that reflect the vibrant 
// //               journey of KITD across Germany.
// //             </motion.p>

// //             <motion.div 
// //               className="gallery-hero-stats"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5 }}
// //             >
// //               <div className="stat-item">
// //                 <span className="stat-number">{allItems.length}+</span>
// //                 <span className="stat-label">Moments Captured</span>
// //               </div>
// //               <div className="stat-divider" />
// //               <div className="stat-item">
// //                 <span className="stat-number">
// //                   {new Set(allItems.map(item => item.category)).size}+
// //                 </span>
// //                 <span className="stat-label">Categories</span>
// //               </div>
// //               <div className="stat-divider" />
// //               <div className="stat-item">
// //                 <span className="stat-number">
// //                   {new Set(allItems.map(item => item.location)).size}+
// //                 </span>
// //                 <span className="stat-label">Cities</span>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          2. INTRODUCTION
// //          ============================================ */}
// //       <section className="gallery-intro">
// //         <div className="container">
// //           <motion.div 
// //             className="gallery-intro-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <span className="section-tag">About Our Gallery</span>
// //             <h2>Every Picture Tells a Story</h2>
// //             <p className="intro-description">
// //               Our gallery captures the passion, dedication and cultural richness of the KITD community. 
// //               From stage performances to educational workshops, each moment reflects our shared commitment 
// //               to preserving and promoting Indian Classical Dance.
// //             </p>
// //           </motion.div>

// //           <div className="gallery-intro-features">
// //             {[
// //               { icon: <ImageIcon size={24} />, title: "Performance Highlights", desc: "Capturing the grace and energy of our classical dance performances" },
// //               { icon: <Users size={24} />, title: "Community Moments", desc: "Celebrating the people who make KITD a vibrant community" },
// //               { icon: <Heart size={24} />, title: "Cultural Connection", desc: "Bridging Indian classical dance with German audiences" },
// //               { icon: <Sparkles size={24} />, title: "Educational Workshops", desc: "Sharing knowledge and passion through hands-on learning" }
// //             ].map((feature, index) => (
// //               <motion.div 
// //                 key={index}
// //                 className="feature-card"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //               >
// //                 <div className="feature-icon">{feature.icon}</div>
// //                 <h3>{feature.title}</h3>
// //                 <p>{feature.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          3. GALLERY FILTERS
// //          ============================================ */}
// //       <section className="gallery-filters">
// //         <div className="container">
// //           <div className="filters-wrapper">
// //             <div className="filters-header">
// //               <div className="filters-title">
// //                 <Filter size={20} />
// //                 <span>Filter Gallery</span>
// //                 {isFilterActive && (
// //                   <span className="filter-badge">Active</span>
// //                 )}
// //               </div>

// //               <div className="filters-actions">
// //                 {isFilterActive && (
// //                   <button className="clear-filters-btn" onClick={clearFilters}>
// //                     <X size={16} />
// //                     Clear All
// //                   </button>
// //                 )}
// //                 <button 
// //                   className="mobile-filter-toggle"
// //                   onClick={() => setIsFilterOpen(!isFilterOpen)}
// //                 >
// //                   <Filter size={20} />
// //                   <span>Filters</span>
// //                 </button>

// //                 <div className="view-toggle">
// //                   <button
// //                     className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
// //                     onClick={() => setViewMode("grid")}
// //                     title="Grid View"
// //                   >
// //                     <Grid size={18} />
// //                   </button>
// //                   <button
// //                     className={`view-btn ${viewMode === "list" ? "active" : ""}`}
// //                     onClick={() => setViewMode("list")}
// //                     title="List View"
// //                   >
// //                     <List size={18} />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="filters-desktop">
// //               {[
// //                 { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// //                 { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// //                 { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// //               ].map((filter) => (
// //                 <div key={filter.type} className="filter-group">
// //                   <label>{filter.label}</label>
// //                   <div className="filter-select-wrapper">
// //                     <select 
// //                       value={filter.value} 
// //                       onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// //                       className="filter-select"
// //                     >
// //                       {filter.options.map(option => (
// //                         <option key={option} value={option}>{option}</option>
// //                       ))}
// //                     </select>
// //                     <ChevronDown size={16} className="filter-select-icon" />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <AnimatePresence>
// //               {isFilterOpen && (
// //                 <motion.div 
// //                   className="filters-mobile"
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   {[
// //                     { label: "Category", options: filterOptions.categories, value: activeFilters.category, type: "category" },
// //                     { label: "Year", options: filterOptions.years, value: activeFilters.year, type: "year" },
// //                     { label: "City", options: filterOptions.cities, value: activeFilters.city, type: "city" }
// //                   ].map((filter) => (
// //                     <div key={filter.type} className="filter-group">
// //                       <label>{filter.label}</label>
// //                       <div className="filter-select-wrapper">
// //                         <select 
// //                           value={filter.value} 
// //                           onChange={(e) => handleFilterChange(filter.type, e.target.value)}
// //                           className="filter-select"
// //                         >
// //                           {filter.options.map(option => (
// //                             <option key={option} value={option}>{option}</option>
// //                           ))}
// //                         </select>
// //                         <ChevronDown size={16} className="filter-select-icon" />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>

// //             <div className="filters-results">
// //               <span>{filteredItems.length} {filteredItems.length === 1 ? 'moment' : 'moments'} captured</span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          4. FEATURED MOMENTS
// //          ============================================ */}
// //       {featuredItems.length > 0 && (
// //         <section className="featured-moments">
// //           <div className="container">
// //             <motion.div 
// //               className="section-header"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //             >
// //               <span className="section-tag">Featured</span>
// //               <h2>Featured Moments</h2>
// //               <p>Highlighting our most memorable performances, workshops, and festivals</p>
// //             </motion.div>

// //             <div className="featured-grid">
// //               {featuredItems.map((moment, index) => (
// //                 <motion.div 
// //                   key={moment.id}
// //                   className={`featured-card ${hoveredCard === `featured-${index}` ? 'featured-card--hovered' : ''}`}
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1 }}
// //                   onMouseEnter={() => setHoveredCard(`featured-${index}`)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                 >
// //                   <div className="featured-card-image">
// //                     <img src={moment.image} alt={moment.title} />
// //                     <div className="featured-card-overlay">
// //                       <span className="featured-card-category">{moment.category}</span>
// //                       <button 
// //                         className="featured-card-link"
// //                         onClick={() => {
// //                           const itemIndex = filteredItems.findIndex(item => item.id === moment.id);
// //                           openLightbox(moment, itemIndex !== -1 ? itemIndex : index);
// //                         }}
// //                       >
// //                         <Eye size={20} />
// //                         View Details
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="featured-card-content">
// //                     <h3>{moment.title}</h3>
// //                     <div className="featured-card-meta">
// //                       <span><MapPin size={14} /> {moment.location}</span>
// //                       <span><Calendar size={14} /> {moment.date}</span>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* ============================================
// //          5. PHOTO GALLERY GRID
// //          ============================================ */}
// //       <section className="masonry-gallery">
// //         <div className="container">
// //           {filteredItems.length === 0 ? (
// //             <div className="no-results">
// //               <ImageIcon size={48} />
// //               <h3>No moments found</h3>
// //               <p>Try adjusting your filters to see more results</p>
// //               <button className="clear-filters-btn" onClick={clearFilters}>
// //                 Clear Filters
// //               </button>
// //             </div>
// //           ) : viewMode === "grid" ? (
// //             <div className="masonry-grid">
// //               {filteredItems.map((item, index) => (
// //                 <motion.div 
// //                   key={item.id}
// //                   className={`gallery-item ${hoveredCard === `grid-${index}` ? 'gallery-item--hovered' : ''}`}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: (index % 6) * 0.05 }}
// //                   onClick={() => openLightbox(item, index)}
// //                   onMouseEnter={() => setHoveredCard(`grid-${index}`)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                 >
// //                   <div className="gallery-item-image">
// //                     <img src={item.image} alt={item.title} loading="lazy" />
// //                     <div className="gallery-item-overlay">
// //                       <div className="gallery-item-info">
// //                         <h4>{item.title}</h4>
// //                         <div className="gallery-item-meta">
// //                           <span><Tag size={12} /> {item.category}</span>
// //                           <span><MapPin size={12} /> {item.location}</span>
// //                           <span><Calendar size={12} /> {item.date}</span>
// //                         </div>
// //                         <span className="gallery-item-click">Click to view</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="gallery-list">
// //               {filteredItems.map((item, index) => (
// //                 <motion.div 
// //                   key={item.id}
// //                   className="gallery-list-item"
// //                   initial={{ opacity: 0, x: -20 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.05 }}
// //                   onClick={() => openLightbox(item, index)}
// //                 >
// //                   <div className="gallery-list-image">
// //                     <img src={item.image} alt={item.title} loading="lazy" />
// //                   </div>
// //                   <div className="gallery-list-content">
// //                     <h4>{item.title}</h4>
// //                     <div className="gallery-list-meta">
// //                       <span><Tag size={12} /> {item.category}</span>
// //                       <span><MapPin size={12} /> {item.location}</span>
// //                       <span><Calendar size={12} /> {item.date}</span>
// //                     </div>
// //                     <p>{item.description || "A memorable moment from KITD's journey."}</p>
// //                     <span className="gallery-list-link">
// //                       View Details <ArrowRight size={14} />
// //                     </span>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* ============================================
// //          6. EVENT HIGHLIGHTS
// //          ============================================ */}
// //       {events.length > 0 && (
// //         <section className="event-highlights">
// //           <div className="container">
// //             <motion.div 
// //               className="section-header"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //             >
// //               <span className="section-tag">Events</span>
// //               <h2>Event Highlights</h2>
// //               <p>Explore our most memorable events and community gatherings</p>
// //             </motion.div>

// //             <div className="events-grid">
// //               {events.map((event, index) => (
// //                 <motion.div 
// //                   key={event.id}
// //                   className="event-card"
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   <div className="event-card-image">
// //                     <img src={event.image} alt={event.title} />
// //                     <div className="event-date-badge">
// //                       <span className="event-day">{event.date.split(' ')[0]}</span>
// //                       <span className="event-month">{event.date.split(' ')[1]}</span>
// //                     </div>
// //                   </div>
// //                   <div className="event-card-content">
// //                     <h3>{event.title}</h3>
// //                     <p>{event.description}</p>
// //                     <div className="event-card-meta">
// //                       <span><MapPin size={14} /> {event.location}</span>
// //                       <span><Users size={14} /> {event.attendees}+ attendees</span>
// //                     </div>
// //                     <Link to={`/events/${event.slug}`} className="event-link">
// //                       View Event <ArrowRight size={16} />
// //                     </Link>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* ============================================
// //          7. COMMUNITY MEMORIES
// //          ============================================ */}
// //       <section className="community-memories">
// //         <div className="community-memories-bg">
// //           <img 
// //             src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// //             alt="KITD Community"
// //             loading="lazy"
// //           />
// //           <div className="community-memories-overlay" />
// //         </div>
        
// //         <div className="container">
// //           <motion.div 
// //             className="community-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="section-tag light">Community</span>
// //             <h2>Every performance, every workshop, every collaboration</h2>
// //             <p>adds a new chapter to the KITD community story.</p>

// //             <div className="community-stats">
// //               {stats.map((stat, index) => (
// //                 <motion.div 
// //                   key={stat.label}
// //                   className="community-stat"
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   <span className="stat-number">{stat.number}</span>
// //                   <span className="stat-label">{stat.label}</span>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             <Link to="/about" className="community-cta">
// //               Discover Our Story <ArrowRight size={20} />
// //             </Link>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          8. CTA SECTION
// //          ============================================ */}
// //       <section className="gallery-cta">
// //         <div className="container">
// //           <motion.div 
// //             className="cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2>Be Part of Our Next Story</h2>
// //             <p>
// //               Join our upcoming events, performances and workshops and become 
// //               part of the growing KITD community.
// //             </p>
// //             <div className="cta-buttons">
// //               <Link to="/events" className="primary-btn">
// //                 Upcoming Events <ArrowRight size={18} />
// //               </Link>
// //               <Link to="/membership" className="secondary-btn">
// //                 Become a Member
// //               </Link>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          LIGHTBOX MODAL
// //          ============================================ */}
// //       <AnimatePresence>
// //         {selectedItem && (
// //           <motion.div 
// //             className="lightbox-modal"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={closeLightbox}
// //           >
// //             <button className="lightbox-close" onClick={closeLightbox}>
// //               <X size={28} />
// //             </button>
            
// //             <button 
// //               className="lightbox-nav lightbox-prev"
// //               onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
// //               disabled={currentIndex === 0}
// //             >
// //               <ChevronLeft size={30} />
// //             </button>

// //             <motion.div 
// //               className="lightbox-content"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <img src={selectedItem.image} alt={selectedItem.title} />
// //               <div className="lightbox-info">
// //                 <h3>{selectedItem.title}</h3>
// //                 <div className="lightbox-meta">
// //                   <span><Tag size={16} /> {selectedItem.category}</span>
// //                   <span><MapPin size={16} /> {selectedItem.location}</span>
// //                   <span><Calendar size={16} /> {selectedItem.date}</span>
// //                 </div>
// //                 <p>{selectedItem.description || "This moment captures the essence of KITD's journey in preserving and promoting Indian Classical Dance in Germany."}</p>
// //                 <div className="lightbox-actions">
// //                   <Link to={`/gallery/${selectedItem.slug}`} className="lightbox-link">
// //                     View Details <ArrowRight size={16} />
// //                   </Link>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <button 
// //               className="lightbox-nav lightbox-next"
// //               onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
// //               disabled={currentIndex === filteredItems.length - 1}
// //             >
// //               <ChevronRight size={30} />
// //             </button>

// //             <div className="lightbox-counter">
// //               {currentIndex + 1} / {filteredItems.length}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //     </div>
// //   );
// // };

// // export default GalleryPage;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   MapPin,
//   Filter,
//   X,
//   ArrowRight,
//   Camera,
//   Eye,
//   ChevronLeft,
//   ChevronRight,
//   Image as ImageIcon,
// } from "lucide-react";

// import { getAllGallery } from "../../api/gallery.api";

// import "./GalleryPage.css";

// const GalleryPage = () => {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   // ✅ Fetch gallery from API
//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         setLoading(true);
//         const res = await getAllGallery();
//         const data = res.data?.data || res.data || [];
//         setGalleryItems(Array.isArray(data) ? data : []);
//         setFilteredItems(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Failed to fetch gallery:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGallery();
//   }, []);

//   // Filter by search
//   useEffect(() => {
//     if (!searchQuery) {
//       setFilteredItems(galleryItems);
//       return;
//     }
//     const filtered = galleryItems.filter(item =>
//       item.title?.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredItems(filtered);
//   }, [searchQuery, galleryItems]);

//   const getImageUrl = (item) => {
//     if (!item?.image) return null;
//     if (item.image.startsWith('http')) return item.image;
//     return `${IMAGE_BASE_URL}/uploads/gallery/${item.image}`;
//   };

//   const openLightbox = (item, index) => {
//     setSelectedItem(item);
//     setCurrentIndex(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedItem(null);
//     document.body.style.overflow = '';
//   };

//   const navigateLightbox = (direction) => {
//     const newIndex = currentIndex + direction;
//     if (newIndex >= 0 && newIndex < filteredItems.length) {
//       setCurrentIndex(newIndex);
//       setSelectedItem(filteredItems[newIndex]);
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (!selectedItem) return;
//       if (e.key === 'Escape') closeLightbox();
//       if (e.key === 'ArrowRight') navigateLightbox(1);
//       if (e.key === 'ArrowLeft') navigateLightbox(-1);
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [selectedItem, currentIndex]);

//   if (loading) {
//     return (
//       <div className="gallery-page">
//         <div className="gallery-loader">
//           <div className="spinner" />
//           <p>Loading gallery...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="gallery-page">

//       {/* HERO */}
//       <section className="gallery-hero">
//         <div className="gallery-hero-bg">
//           <img src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Gallery" />
//           <div className="gallery-hero-overlay" />
//         </div>
//         <div className="gallery-hero-content">
//           <span className="gallery-hero-tag"><Camera size={18} /> PHOTO GALLERY</span>
//           <h1>Our <span>Moments</span></h1>
//           <p>Explore memorable moments from KITD events, performances, and workshops across Germany.</p>
//         </div>
//       </section>

//       {/* SEARCH */}
//       <section className="gallery-search">
//         <div className="container">
//           <div className="gallery-search-bar">
//             <Filter size={18} />
//             <input
//               type="text"
//               placeholder="Search gallery..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             {searchQuery && (
//               <button onClick={() => setSearchQuery("")}><X size={16} /></button>
//             )}
//           </div>
//           <p className="gallery-count">{filteredItems.length} photos</p>
//         </div>
//       </section>

//       {/* GALLERY GRID */}
//       <section className="gallery-grid-section">
//         <div className="container">
//           {filteredItems.length === 0 ? (
//             <div className="gallery-empty">
//               <ImageIcon size={48} />
//               <h3>No photos found</h3>
//               <p>Try adjusting your search.</p>
//             </div>
//           ) : (
//             <div className="gallery-grid">
//               {filteredItems.map((item, index) => {
//                 const imageUrl = getImageUrl(item);
//                 return (
//                   <div
//                     key={item.id}
//                     className="gallery-card"
//                     onClick={() => openLightbox(item, index)}
//                   >
//                     <div className="gallery-card-image">
//                       {imageUrl ? (
//                         <img src={imageUrl} alt={item.title} loading="lazy" />
//                       ) : (
//                         <div className="gallery-card-placeholder">
//                           <ImageIcon size={32} />
//                         </div>
//                       )}
//                       <div className="gallery-card-overlay">
//                         <Eye size={20} />
//                         <span>View</span>
//                       </div>
//                     </div>
//                     <div className="gallery-card-info">
//                       <h4>{item.title}</h4>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* LIGHTBOX */}
//       {selectedItem && (
//         <div className="lightbox" onClick={closeLightbox}>
//           <button className="lightbox-close" onClick={closeLightbox}><X size={24} /></button>
          
//           <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>
//             <ChevronLeft size={24} />
//           </button>

//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <img src={getImageUrl(selectedItem)} alt={selectedItem.title} />
//             <div className="lightbox-info">
//               <h3>{selectedItem.title}</h3>
//               <div className="lightbox-counter">{currentIndex + 1} / {filteredItems.length}</div>
//             </div>
//           </div>

//           <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       )}

//       {/* CTA */}
//       <section className="gallery-cta">
//         <div className="container">
//           <h2>Be Part of Our Story</h2>
//           <p>Join KITD and become part of Germany's Indian Classical Dance community.</p>
//           <div className="gallery-cta-buttons">
//             <Link to="/events" className="btn-primary">Upcoming Events <ArrowRight size={18} /></Link>
//             <Link to="/membership" className="btn-secondary">Become a Member</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GalleryPage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Eye,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getAllGallery } from "../../api/gallery.api";

import "./GalleryPage.css";

// Import images
import acthero from "../../assets/banner5.png";
import contactcta from "../../assets/contactcta.png";
import abt1 from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";
import abt3 from "../../assets/abt3.png";
import abt4 from "../../assets/abt4.png";

const fallbackImages = [abt1, abt2, abt3, abt4];

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await getAllGallery();
        console.log("Gallery API Response:", res);
        
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
        
        setGalleryItems(galleryData);
        setFilteredItems(galleryData);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const getImageUrl = (item) => {
    if (!item) return null;
    if (item.image) {
      if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
        return item.image;
      }
      return `${IMAGE_BASE_URL}/uploads/gallery/${item.image}`;
    }
    // Fallback to imported images
    const fallbackIndex = (item.id || 0) % fallbackImages.length;
    return fallbackImages[fallbackIndex];
  };

  const getFallbackImage = (index) => {
    return fallbackImages[index % fallbackImages.length];
  };

  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setCurrentIndex(newIndex);
      setSelectedItem(filteredItems[newIndex]);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedItem, currentIndex]);

  if (loading) {
    return (
      <div className="gp-gallery">
        <div className="gp-gallery__loading">
          <div className="gp-gallery__spinner" />
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Gallery | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Explore memorable moments from KITD events, performances, and workshops across Germany." />
      </Helmet>

      <div className="gp-gallery">

        {/* HERO */}
        <section className="gp-gallery__hero">
          <div className="gp-gallery__hero-bg">
            <img src={acthero} alt="KITD Gallery" loading="eager" />
            <div className="gp-gallery__hero-overlay" />
            <div className="gp-gallery__hero-gradient" />
          </div>
          <div className="gp-gallery__hero-container">
            <div className="gp-gallery__hero-content">
              <span className="gp-gallery__hero-tag">PHOTO GALLERY</span>
              <h1>
                Our <span className="gp-gallery__hero-title-accent">Moments</span>
              </h1>
              <p className="gp-gallery__hero-desc">
                Explore memorable moments from KITD events, performances, and workshops across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="gp-gallery__grid">
          <div className="gp-gallery__container">
            <div className="gp-gallery__header">
              <h2>Photo Gallery</h2>
              <span className="gp-gallery__count">{filteredItems.length} photos</span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="gp-gallery__empty">
                <ImageIcon size={48} strokeWidth={1.5} />
                <h3>No photos found</h3>
                <p>Gallery content will appear here once added.</p>
              </div>
            ) : (
              <div className="gp-gallery__grid-inner">
                {filteredItems.map((item, index) => {
                  const imageUrl = getImageUrl(item);
                  return (
                    <div
                      key={item.id || index}
                      className={`gp-gallery__card ${hoveredCard === index ? 'gp-gallery__card--hovered' : ''}`}
                      onClick={() => openLightbox(item, index)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ transitionDelay: `${(index % 8) * 0.05}s` }}
                    >
                      <div className="gp-gallery__card-image">
                        <img 
                          src={imageUrl || getFallbackImage(index)} 
                          alt={item.title || "Gallery image"} 
                          loading="lazy"
                        />
                        <div className="gp-gallery__card-overlay">
                          <Eye size={20} strokeWidth={1.5} />
                          <span>View</span>
                        </div>
                      </div>
                      <div className="gp-gallery__card-info">
                        <h4>{item.title || "Untitled"}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedItem && (
          <div className="gp-gallery__lightbox" onClick={closeLightbox}>
            <button className="gp-gallery__lightbox-close" onClick={closeLightbox}>
              <span className="gp-gallery__lightbox-close-icon">×</span>
            </button>
            
            <button 
              className="gp-gallery__lightbox-nav gp-gallery__lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>

            <div className="gp-gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img 
                src={getImageUrl(selectedItem) || getFallbackImage(currentIndex)} 
                alt={selectedItem.title || "Gallery image"} 
              />
              <div className="gp-gallery__lightbox-info">
                <h3>{selectedItem.title || "Untitled"}</h3>
                <span className="gp-gallery__lightbox-counter">
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>

            <button 
              className="gp-gallery__lightbox-nav gp-gallery__lightbox-next" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              disabled={currentIndex === filteredItems.length - 1}
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* CTA */}
        <section className="gp-gallery__cta">
          <div className="gp-gallery__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="gp-gallery__cta-overlay" />
          </div>
          <div className="gp-gallery__container">
            <div className="gp-gallery__cta-wrapper">
              <h2>Be Part of Our Story</h2>
              <p>Join KITD and become part of Germany's Indian Classical Dance community.</p>
              <div className="gp-gallery__cta-buttons">
                <Link to="/events" className="gp-gallery__cta-btn gp-gallery__cta-btn--primary">
                  Upcoming Events <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/membership" className="gp-gallery__cta-btn gp-gallery__cta-btn--secondary">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage;