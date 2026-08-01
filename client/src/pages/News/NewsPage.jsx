// // src/pages/News/NewsPage.jsx

// import { useState, useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Calendar, 
//   MapPin, 
//   Tag, 
//   Filter, 
//   X,
//   ArrowRight,
//   Users,
//   Heart,
//   Camera,
//   Sparkles,
//   ChevronDown,
//   Eye,
//   Image as ImageIcon,
//   Newspaper,
//   Clock,
//   BookOpen,
//   Mail,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import mock data service
// import { 
//   getNewsItems,
//   getFeaturedNews,
//   getNewsCategories,
//   getNewsletterData,
//   getArchiveYears,
//   getNewsByCategory,
//   getNewsByYear
// } from "../../services/mockNewsService";

// import "./NewsPage.css";

// const NewsPage = () => {
//   const [allNews, setAllNews] = useState([]);
//   const [filteredNews, setFilteredNews] = useState([]);
//   const [featuredNews, setFeaturedNews] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [newsletterData, setNewsletterData] = useState(null);
//   const [archiveYears, setArchiveYears] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);

//   // Fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [news, featured, cats, newsletter, years] = await Promise.all([
//           getNewsItems(),
//           getFeaturedNews(),
//           getNewsCategories(),
//           getNewsletterData(),
//           getArchiveYears()
//         ]);

//         setAllNews(news);
//         setFilteredNews(news);
//         setFeaturedNews(featured);
//         setCategories(cats);
//         setNewsletterData(newsletter);
//         setArchiveYears(years);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Apply filters
//   useEffect(() => {
//     let filtered = allNews;

//     if (activeCategory !== "All") {
//       filtered = filtered.filter(item => item.category === activeCategory);
//     }

//     if (selectedYear) {
//       filtered = filtered.filter(item => item.date.includes(selectedYear));
//     }

//     setFilteredNews(filtered);
//     setCurrentPage(1);
//   }, [activeCategory, selectedYear, allNews]);

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setIsFilterOpen(false);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(selectedYear === year ? null : year);
//     setIsFilterOpen(false);
//   };

//   const clearFilters = () => {
//     setActiveCategory("All");
//     setSelectedYear(null);
//   };

//   const isFilterActive = activeCategory !== "All" || selectedYear !== null;

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return (
//       <div className="news-loader">
//         <div className="loader-spinner" />
//         <p>Loading news...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="news-page">

//       {/* ============================================
//          1. HERO SECTION
//          ============================================ */}
//       <section className="news-hero">
//         <div className="news-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="news-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="news-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <Newspaper size={18} />
//               NEWS & UPDATES
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Keeping the KITD
//               <span>Community Connected</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Stay informed with the latest association announcements, event highlights, 
//               workshops, member stories and community updates from KITD across Germany.
//             </motion.p>

//             <motion.div 
//               className="news-hero-stats"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <div className="stat-item">
//                 <span className="stat-number">{allNews.length}+</span>
//                 <span className="stat-label">Articles Published</span>
//               </div>
//               <div className="stat-divider" />
//               <div className="stat-item">
//                 <span className="stat-number">{categories.length}</span>
//                 <span className="stat-label">Categories</span>
//               </div>
//               <div className="stat-divider" />
//               <div className="stat-item">
//                 <span className="stat-number">{archiveYears.length}</span>
//                 <span className="stat-label">Years of Coverage</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          2. INTRODUCTION
//          ============================================ */}
//       <section className="news-intro">
//         <div className="container">
//           <motion.div 
//             className="news-intro-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="section-tag">About Our News</span>
//             <h2>Official News & Announcements</h2>
//             <p className="intro-description">
//               Explore the latest happenings within the KITD community. From performances 
//               and workshops to organisational updates and cultural initiatives, this is 
//               your destination for staying connected with our growing network.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          3. FEATURED NEWS
//          ============================================ */}
//       {featuredNews.length > 0 && (
//         <section className="featured-news">
//           <div className="container">
//             <motion.div 
//               className="section-header"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="section-tag">Featured</span>
//               <h2>Featured Story</h2>
//             </motion.div>

//             <motion.div 
//               className="featured-news-card"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             >
//               <Link to={`/news/${featuredNews[0].slug}`} className="featured-news-link">
//                 <div className="featured-news-image">
//                   <img src={featuredNews[0].image} alt={featuredNews[0].title} />
//                   <div className="featured-news-badge">{featuredNews[0].category}</div>
//                 </div>
//                 <div className="featured-news-content">
//                   <div className="featured-news-meta">
//                     <span><Calendar size={16} /> {featuredNews[0].date}</span>
//                     <span><Clock size={16} /> {featuredNews[0].readTime || '5 min read'}</span>
//                   </div>
//                   <h3>{featuredNews[0].title}</h3>
//                   <p>{featuredNews[0].excerpt}</p>
//                   <span className="read-more">
//                     Read Article <ArrowRight size={16} />
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* ============================================
//          4. CATEGORIES & FILTERS
//          ============================================ */}
//       <section className="news-filters">
//         <div className="container">
//           <div className="filters-wrapper">
//             <div className="filters-header">
//               <div className="filters-title">
//                 <Filter size={20} />
//                 <span>Browse News</span>
//                 {isFilterActive && (
//                   <span className="filter-badge">Active</span>
//                 )}
//               </div>

//               <div className="filters-actions">
//                 {isFilterActive && (
//                   <button className="clear-filters-btn" onClick={clearFilters}>
//                     <X size={16} />
//                     Clear All
//                   </button>
//                 )}
//                 <button 
//                   className="mobile-filter-toggle"
//                   onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 >
//                   <Filter size={20} />
//                   <span>Filters</span>
//                 </button>
//               </div>
//             </div>

//             {/* Desktop Categories */}
//             <div className="categories-desktop">
//               <button 
//                 className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
//                 onClick={() => handleCategoryChange('All')}
//               >
//                 All
//               </button>
//               {categories.map(category => (
//                 <button 
//                   key={category}
//                   className={`category-btn ${activeCategory === category ? 'active' : ''}`}
//                   onClick={() => handleCategoryChange(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Categories */}
//             <AnimatePresence>
//               {isFilterOpen && (
//                 <motion.div 
//                   className="categories-mobile"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <button 
//                     className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
//                     onClick={() => handleCategoryChange('All')}
//                   >
//                     All
//                   </button>
//                   {categories.map(category => (
//                     <button 
//                       key={category}
//                       className={`category-btn ${activeCategory === category ? 'active' : ''}`}
//                       onClick={() => handleCategoryChange(category)}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Results Count */}
//             <div className="filters-results">
//               <span>{filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'} found</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          5. LATEST NEWS GRID
//          ============================================ */}
//       <section className="news-grid-section">
//         <div className="container">
//           {filteredNews.length === 0 ? (
//             <div className="no-results">
//               <Newspaper size={48} />
//               <h3>No articles found</h3>
//               <p>Try adjusting your filters to see more results</p>
//               <button className="clear-filters-btn" onClick={clearFilters}>
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="news-grid">
//                 {currentItems.map((news, index) => (
//                   <motion.article 
//                     key={news.id}
//                     className="news-card"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: (index % 6) * 0.05 }}
//                   >
//                     <Link to={`/news/${news.slug}`} className="news-card-link">
//                       <div className="news-card-image">
//                         <img src={news.image} alt={news.title} loading="lazy" />
//                         <span className="news-card-category">{news.category}</span>
//                       </div>
//                       <div className="news-card-content">
//                         <div className="news-card-meta">
//                           <span><Calendar size={14} /> {news.date}</span>
//                           <span><Clock size={14} /> {news.readTime || '3 min read'}</span>
//                         </div>
//                         <h3>{news.title}</h3>
//                         <p>{news.excerpt}</p>
//                         <span className="read-more">
//                           Read Article <ArrowRight size={14} />
//                         </span>
//                       </div>
//                     </Link>
//                   </motion.article>
//                 ))}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="pagination">
//                   <button 
//                     className="pagination-btn"
//                     onClick={() => paginate(currentPage - 1)}
//                     disabled={currentPage === 1}
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
                  
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
//                     <button
//                       key={number}
//                       className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
//                       onClick={() => paginate(number)}
//                     >
//                       {number}
//                     </button>
//                   ))}
                  
//                   <button 
//                     className="pagination-btn"
//                     onClick={() => paginate(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </section>

//       {/* ============================================
//          6. NEWSLETTER HIGHLIGHTS (Nritya Vani)
//          ============================================ */}
//       {newsletterData && (
//         <section className="newsletter-highlight">
//           <div className="container">
//             <motion.div 
//               className="newsletter-wrapper"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="newsletter-content">
//                 <span className="section-tag">Newsletter</span>
//                 <h2>Nritya Vani Newsletter</h2>
//                 <p>{newsletterData.description}</p>
                
//                 <Link to={newsletterData.latestLink} className="newsletter-btn">
//                   <Mail size={20} />
//                   Read Latest Newsletter
//                 </Link>

//                 <div className="newsletter-archive">
//                   <h4>Older Editions</h4>
//                   <div className="editions-list">
//                     {newsletterData.editions.map((edition, index) => (
//                       <Link key={index} to={edition.link} className="edition-link">
//                         {edition.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="newsletter-image">
//                 <img src={newsletterData.image} alt="Nritya Vani Newsletter" />
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* ============================================
//          7. ARCHIVE SECTION
//          ============================================ */}
//       <section className="archive-section">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Archive</span>
//             <h2>Browse by Year</h2>
//             <p>Explore our news archive by selecting a year</p>
//           </motion.div>

//           <div className="archive-grid">
//             {archiveYears.map((year, index) => (
//               <motion.button
//                 key={year}
//                 className={`archive-card ${selectedYear === year ? 'active' : ''}`}
//                 onClick={() => handleYearChange(year)}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <span className="archive-year">{year}</span>
//                 <span className="archive-count">
//                   {allNews.filter(item => item.date.includes(year)).length} articles
//                 </span>
//                 {selectedYear === year && (
//                   <span className="archive-active">Active</span>
//                 )}
//               </motion.button>
//             ))}
//           </div>

//           {selectedYear && (
//             <motion.div 
//               className="archive-results"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <p>
//                 Showing articles from {selectedYear}
//                 <button onClick={() => setSelectedYear(null)} className="clear-year-btn">
//                   <X size={14} />
//                   Clear
//                 </button>
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* ============================================
//          8. CTA SECTION
//          ============================================ */}
//       <section className="news-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>Stay Connected with KITD</h2>
//             <p>
//               Subscribe to receive the latest news, event announcements and community 
//               updates directly in your inbox.
//             </p>
//             <div className="cta-buttons">
//               <Link to="/subscribe" className="primary-btn">
//                 <Mail size={18} />
//                 Subscribe
//               </Link>
//               <Link to="/contact" className="secondary-btn">
//                 Contact KITD
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default NewsPage;


// src/pages/News/NewsPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Calendar, 
//   Filter, 
//   X,
//   ArrowRight,
//   Newspaper,
//   Clock,
//   Mail,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import { 
//   getNewsItems,
//   getFeaturedNews,
//   getNewsCategories,
//   getNewsletterData,
//   getArchiveYears
// } from "../../services/mockNewsService";

// import "./NewsPage.css";

// const NewsPage = () => {
//   const [allNews, setAllNews] = useState([]);
//   const [filteredNews, setFilteredNews] = useState([]);
//   const [featuredNews, setFeaturedNews] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [newsletterData, setNewsletterData] = useState(null);
//   const [archiveYears, setArchiveYears] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [news, featured, cats, newsletter, years] = await Promise.all([
//           getNewsItems(),
//           getFeaturedNews(),
//           getNewsCategories(),
//           getNewsletterData(),
//           getArchiveYears()
//         ]);

//         setAllNews(news);
//         setFilteredNews(news);
//         setFeaturedNews(featured);
//         setCategories(cats);
//         setNewsletterData(newsletter);
//         setArchiveYears(years);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     let filtered = allNews;

//     if (activeCategory !== "All") {
//       filtered = filtered.filter(item => item.category === activeCategory);
//     }

//     if (selectedYear) {
//       filtered = filtered.filter(item => item.date.includes(selectedYear));
//     }

//     setFilteredNews(filtered);
//     setCurrentPage(1);
//   }, [activeCategory, selectedYear, allNews]);

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setIsFilterOpen(false);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(selectedYear === year ? null : year);
//     setIsFilterOpen(false);
//   };

//   const clearFilters = () => {
//     setActiveCategory("All");
//     setSelectedYear(null);
//   };

//   const isFilterActive = activeCategory !== "All" || selectedYear !== null;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return (
//       <div className="news-loader">
//         <div className="loader-spinner" />
//         <p>Loading news...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="news-page">

//       <section className="news-hero">
//         <div className="news-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="news-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="news-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <Newspaper size={18} />
//               NEWS & UPDATES
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Keeping the KITD
//               <span>Community Connected</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Stay informed with the latest association announcements, event highlights, 
//               workshops, member stories and community updates from KITD across Germany.
//             </motion.p>

//             <motion.div 
//               className="news-hero-stats"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <div className="stat-item">
//                 <span className="stat-number">{allNews.length}+</span>
//                 <span className="stat-label">Articles Published</span>
//               </div>
//               <div className="stat-divider" />
//               <div className="stat-item">
//                 <span className="stat-number">{categories.length}</span>
//                 <span className="stat-label">Categories</span>
//               </div>
//               <div className="stat-divider" />
//               <div className="stat-item">
//                 <span className="stat-number">{archiveYears.length}</span>
//                 <span className="stat-label">Years of Coverage</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="news-intro">
//         <div className="container">
//           <motion.div 
//             className="news-intro-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="section-tag">About Our News</span>
//             <h2>Official News & Announcements</h2>
//             <p className="intro-description">
//               Explore the latest happenings within the KITD community. From performances 
//               and workshops to organisational updates and cultural initiatives, this is 
//               your destination for staying connected with our growing network.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {featuredNews.length > 0 && (
//         <section className="featured-news">
//           <div className="container">
//             <motion.div 
//               className="section-header"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="section-tag">Featured</span>
//               <h2>Featured Story</h2>
//             </motion.div>

//             <motion.div 
//               className="featured-news-card"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             >
//               <Link to={`/news/${featuredNews[0].slug}`} className="featured-news-link">
//                 <div className="featured-news-image">
//                   <img src={featuredNews[0].image} alt={featuredNews[0].title} />
//                   <div className="featured-news-badge">{featuredNews[0].category}</div>
//                 </div>
//                 <div className="featured-news-content">
//                   <div className="featured-news-meta">
//                     <span><Calendar size={16} /> {featuredNews[0].date}</span>
//                     <span><Clock size={16} /> {featuredNews[0].readTime || '5 min read'}</span>
//                   </div>
//                   <h3>{featuredNews[0].title}</h3>
//                   <p>{featuredNews[0].excerpt}</p>
//                   <span className="read-more">
//                     Read Article <ArrowRight size={16} />
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       <section className="news-filters">
//         <div className="container">
//           <div className="filters-wrapper">
//             <div className="filters-header">
//               <div className="filters-title">
//                 <Filter size={20} />
//                 <span>Browse News</span>
//                 {isFilterActive && (
//                   <span className="filter-badge">Active</span>
//                 )}
//               </div>

//               <div className="filters-actions">
//                 {isFilterActive && (
//                   <button className="clear-filters-btn" onClick={clearFilters}>
//                     <X size={16} />
//                     Clear All
//                   </button>
//                 )}
//                 <button 
//                   className="mobile-filter-toggle"
//                   onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 >
//                   <Filter size={20} />
//                   <span>Filters</span>
//                 </button>
//               </div>
//             </div>

//             <div className="categories-desktop">
//               <button 
//                 className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
//                 onClick={() => handleCategoryChange('All')}
//               >
//                 All
//               </button>
//               {categories.map(category => (
//                 <button 
//                   key={category}
//                   className={`category-btn ${activeCategory === category ? 'active' : ''}`}
//                   onClick={() => handleCategoryChange(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <AnimatePresence>
//               {isFilterOpen && (
//                 <motion.div 
//                   className="categories-mobile"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <button 
//                     className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
//                     onClick={() => handleCategoryChange('All')}
//                   >
//                     All
//                   </button>
//                   {categories.map(category => (
//                     <button 
//                       key={category}
//                       className={`category-btn ${activeCategory === category ? 'active' : ''}`}
//                       onClick={() => handleCategoryChange(category)}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div className="filters-results">
//               <span>{filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'} found</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="news-grid-section">
//         <div className="container">
//           {filteredNews.length === 0 ? (
//             <div className="no-results">
//               <Newspaper size={48} />
//               <h3>No articles found</h3>
//               <p>Try adjusting your filters to see more results</p>
//               <button className="clear-filters-btn" onClick={clearFilters}>
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="news-grid">
//                 {currentItems.map((news, index) => (
//                   <motion.article 
//                     key={news.id}
//                     className="news-card"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: (index % 6) * 0.05 }}
//                   >
//                     <Link to={`/news/${news.slug}`} className="news-card-link">
//                       <div className="news-card-image">
//                         <img src={news.image} alt={news.title} loading="lazy" />
//                         <span className="news-card-category">{news.category}</span>
//                       </div>
//                       <div className="news-card-content">
//                         <div className="news-card-meta">
//                           <span><Calendar size={14} /> {news.date}</span>
//                           <span><Clock size={14} /> {news.readTime || '3 min read'}</span>
//                         </div>
//                         <h3>{news.title}</h3>
//                         <p>{news.excerpt}</p>
//                         <span className="read-more">
//                           Read Article <ArrowRight size={14} />
//                         </span>
//                       </div>
//                     </Link>
//                   </motion.article>
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className="pagination">
//                   <button 
//                     className="pagination-btn"
//                     onClick={() => paginate(currentPage - 1)}
//                     disabled={currentPage === 1}
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
                  
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
//                     <button
//                       key={number}
//                       className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
//                       onClick={() => paginate(number)}
//                     >
//                       {number}
//                     </button>
//                   ))}
                  
//                   <button 
//                     className="pagination-btn"
//                     onClick={() => paginate(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </section>

//       {newsletterData && (
//         <section className="newsletter-highlight">
//           <div className="container">
//             <motion.div 
//               className="newsletter-wrapper"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="newsletter-content">
//                 <span className="section-tag">Newsletter</span>
//                 <h2>Nritya Vani Newsletter</h2>
//                 <p>{newsletterData.description}</p>
                
//                 <Link to={newsletterData.latestLink} className="newsletter-btn">
//                   <Mail size={20} />
//                   Read Latest Newsletter
//                 </Link>

//                 <div className="newsletter-archive">
//                   <h4>Older Editions</h4>
//                   <div className="editions-list">
//                     {newsletterData.editions.map((edition, index) => (
//                       <Link key={index} to={edition.link} className="edition-link">
//                         {edition.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="newsletter-image">
//                 <img src={newsletterData.image} alt="Nritya Vani Newsletter" />
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       <section className="archive-section">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Archive</span>
//             <h2>Browse by Year</h2>
//             <p>Explore our news archive by selecting a year</p>
//           </motion.div>

//           <div className="archive-grid">
//             {archiveYears.map((year, index) => (
//               <motion.button
//                 key={year}
//                 className={`archive-card ${selectedYear === year ? 'active' : ''}`}
//                 onClick={() => handleYearChange(year)}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <span className="archive-year">{year}</span>
//                 <span className="archive-count">
//                   {allNews.filter(item => item.date.includes(year)).length} articles
//                 </span>
//                 {selectedYear === year && (
//                   <span className="archive-active">Active</span>
//                 )}
//               </motion.button>
//             ))}
//           </div>

//           {selectedYear && (
//             <motion.div 
//               className="archive-results"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <p>
//                 Showing articles from {selectedYear}
//                 <button onClick={() => setSelectedYear(null)} className="clear-year-btn">
//                   <X size={14} />
//                   Clear
//                 </button>
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       <section className="news-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>Stay Connected with KITD</h2>
//             <p>
//               Subscribe to receive the latest news, event announcements and community 
//               updates directly in your inbox.
//             </p>
//             <div className="cta-buttons">
//               <Link to="/subscribe" className="primary-btn">
//                 <Mail size={18} />
//                 Subscribe
//               </Link>
//               <Link to="/contact" className="secondary-btn">
//                 Contact KITD
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default NewsPage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  X,
  ArrowRight,
  Newspaper,
  Search,
  Mail,
} from "lucide-react";

import { getAllNews } from "../../api/news.api";

import "./NewsPage.css";

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  // ✅ Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await getAllNews();
        const data = res.data?.data || res.data || [];
        setNewsItems(Array.isArray(data) ? data : []);
        setFilteredNews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Filter by search
  useEffect(() => {
    if (!searchQuery) {
      setFilteredNews(newsItems);
      return;
    }
    const filtered = newsItems.filter(item =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchQuery, newsItems]);

  const getImageUrl = (item) => {
    if (!item?.image) return null;
    if (item.image.startsWith('http')) return item.image;
    return `${IMAGE_BASE_URL}/uploads/news/${item.image}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="news-page">
        <div className="news-loader">
          <div className="spinner" />
          <p>Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page">

      {/* HERO */}
      <section className="news-hero">
        <div className="news-hero-bg">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="News" />
          <div className="news-hero-overlay" />
        </div>
        <div className="container">
          <div className="news-hero-content">
            <span className="news-hero-tag"><Newspaper size={18} /> NEWS & UPDATES</span>
            <h1>Keeping the KITD <span>Community Connected</span></h1>
            <p>Stay informed with the latest announcements, event highlights, and community updates from KITD across Germany.</p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="news-search">
        <div className="container">
          <div className="news-search-bar">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}><X size={16} /></button>
            )}
          </div>
          <p className="news-count">{filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}</p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="news-grid-section">
        <div className="container">
          {filteredNews.length === 0 ? (
            <div className="news-empty">
              <Newspaper size={48} />
              <h3>No articles found</h3>
              <p>Try adjusting your search.</p>
            </div>
          ) : (
            <div className="news-grid">
              {filteredNews.map((item) => {
                const imageUrl = getImageUrl(item);
                return (
                  <article key={item.id} className="news-card">
                    <Link to={`/news/${item.id}`} className="news-card-link">
                      <div className="news-card-image">
                        {imageUrl ? (
                          <img src={imageUrl} alt={item.title} loading="lazy" />
                        ) : (
                          <div className="news-card-placeholder">
                            <Newspaper size={32} />
                          </div>
                        )}
                      </div>
                      <div className="news-card-content">
                        {item.createdAt && (
                          <div className="news-card-date">
                            <Calendar size={14} /> {formatDate(item.createdAt)}
                          </div>
                        )}
                        <h3>{item.title}</h3>
                        {item.description && (
                          <p>{item.description.length > 120 ? `${item.description.substring(0, 120)}...` : item.description}</p>
                        )}
                        <span className="news-card-read">
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="news-cta">
        <div className="container">
          <div className="news-cta-content">
            <h2>Stay Connected with KITD</h2>
            <p>Subscribe to receive the latest news, event announcements and community updates.</p>
            <div className="news-cta-buttons">
              <Link to="/membership" className="btn-primary">
                <Mail size={18} /> Become a Member
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact KITD
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NewsPage;