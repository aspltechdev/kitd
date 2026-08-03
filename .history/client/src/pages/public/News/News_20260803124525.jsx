// // // // // src/components/home/NewsSection/NewsSection.jsx

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { CalendarDays, ArrowRight } from "lucide-react";

// // // // import { getAllNews } from "../../../api/news.api";

// // // // import "./NewsSection.css";

// // // // const NewsSection = () => {
// // // //   const [news, setNews] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchNews();
// // // //   }, []);

// // // //   const fetchNews = async () => {
// // // //     try {
// // // //       const res = await getAllNews({
// // // //         page: 1,
// // // //         limit: 3,
// // // //       });

// // // //       const data =
// // // //         res.data?.data?.news ||
// // // //         res.data?.data ||
// // // //         [];

// // // //       setNews(Array.isArray(data) ? data : []);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="news-section">

// // // //       <div className="container">

// // // //         <div className="section-header">

// // // //           <span className="section-tag">
// // // //             LATEST NEWS
// // // //           </span>

// // // //           <h2>
// // // //             Stay Updated with
// // // //             <br />
// // // //             KITD Activities
// // // //           </h2>

// // // //           <p>
// // // //             Discover announcements, event updates,
// // // //             workshops, and community stories from KITD.
// // // //           </p>

// // // //         </div>

// // // //         <div className="news-grid">

// // // //           {news.map((item) => (

// // // //             <article
// // // //               className="news-card"
// // // //               key={item.id}
// // // //             >

// // // //               <div className="news-image">

// // // //                 <img
// // // //                   src={item.image}
// // // //                   alt={item.title}
// // // //                 />

// // // //               </div>

// // // //               <div className="news-content">

// // // //                 <div className="news-date">

// // // //                   <CalendarDays size={16} />

// // // //                   <span>
// // // //                     {new Date(
// // // //                       item.createdAt
// // // //                     ).toLocaleDateString()}
// // // //                   </span>

// // // //                 </div>

// // // //                 <h3>
// // // //                   {item.title}
// // // //                 </h3>

// // // //                 <p>
// // // //                   {item.description?.slice(0, 140)}
// // // //                   ...
// // // //                 </p>

// // // //                 <Link
// // // //                   to={`/news/${item.slug}`}
// // // //                   className="news-link"
// // // //                 >
// // // //                   Read More

// // // //                   <ArrowRight size={18} />
// // // //                 </Link>

// // // //               </div>

// // // //             </article>

// // // //           ))}

// // // //         </div>

// // // //         <div className="news-footer">

// // // //           <Link
// // // //             to="/news"
// // // //             className="view-news-btn"
// // // //           >
// // // //             View All News
// // // //           </Link>

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // };

// // // // export default NewsSection;

// // // // src/components/home/NewsSection/NewsSection.jsx

// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { CalendarDays, ArrowRight, BookOpen, Megaphone, Users, Sparkles } from "lucide-react";

// // // import { getAllNews } from "../../../api/news.api";

// // // import "./NewsSection.css";

// // // // Fallback news based on KITD newsletters and activities
// // // const FALLBACK_NEWS = [
// // //   {
// // //     id: 1,
// // //     title: "KITD Annual General Meeting 2025",
// // //     description:
// // //       "Members gathered for the annual general meeting to discuss achievements, future plans, and elect the new executive committee for the upcoming term.",
// // //     image: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Announcement",
// // //     createdAt: "2025-07-12",
// // //     slug: "kitd-annual-general-meeting-2025",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "SPANDA Training Series Returns for 2025",
// // //     description:
// // //       "The monthly SPANDA training sessions continue this year, bringing together dancers and teachers for collaborative learning and artistic development.",
// // //     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Workshop",
// // //     createdAt: "2025-06-28",
// // //     slug: "spanda-training-series-2025",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "New Community Partnerships Established",
// // //     description:
// // //       "KITD announces new collaborations with cultural institutions across Germany to expand the reach of Indian Classical Dance performances and education.",
// // //     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // //     category: "Community",
// // //     createdAt: "2025-06-15",
// // //     slug: "new-community-partnerships",
// // //   },
// // // ];

// // // // Category configuration
// // // const categoryConfig = {
// // //   Announcement: { icon: <Megaphone size={11} />, className: "cat-announcement" },
// // //   Workshop: { icon: <BookOpen size={11} />, className: "cat-workshop" },
// // //   Community: { icon: <Users size={11} />, className: "cat-community" },
// // //   Performance: { icon: <Sparkles size={11} />, className: "cat-performance" },
// // //   Newsletter: { icon: <BookOpen size={11} />, className: "cat-newsletter" },
// // //   Partnership: { icon: <Users size={11} />, className: "cat-partnership" },
// // //   Volunteer: { icon: <Users size={11} />, className: "cat-volunteer" },
// // // };

// // // // Newsletter highlight
// // // const NEWSLETTER_HIGHLIGHT = {
// // //   title: "Nritya Vani — January 2025",
// // //   description: "Quarterly newsletter featuring community updates, artist spotlights, and upcoming events.",
// // //   link: "/news",
// // //   label: "Read Newsletter",
// // // };

// // // const NewsSection = () => {
// // //   const [news, setNews] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     fetchNews();
    
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.15 }
// // //     );

// // //     const section = document.querySelector('.news-section');
// // //     if (section) observer.observe(section);

// // //     return () => {
// // //       if (section) observer.unobserve(section);
// // //     };
// // //   }, []);

// // //   const fetchNews = async () => {
// // //     try {
// // //       const res = await getAllNews({ page: 1, limit: 3 });
// // //       const data = res.data?.data?.news || res.data?.data || [];
      
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setNews(data);
// // //       } else {
// // //         setNews(FALLBACK_NEWS);
// // //       }
// // //     } catch (error) {
// // //       console.log("Using fallback news:", error);
// // //       setNews(FALLBACK_NEWS);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const formatDate = (dateString) => {
// // //     const date = new Date(dateString);
// // //     return date.toLocaleDateString("en-GB", {
// // //       day: "numeric",
// // //       month: "long",
// // //       year: "numeric",
// // //     });
// // //   };

// // //   const getCategoryConfig = (category) => {
// // //     return categoryConfig[category] || { icon: <Megaphone size={11} />, className: "cat-default" };
// // //   };

// // //   return (
// // //     <section className={`news-section ${isVisible ? 'visible' : ''}`}>
// // //       <div className="news-container">
        
// // //         {/* Section Header */}
// // //         <div className="news-header">
// // //           <div className="news-eyebrow">
// // //             <span className="news-eyebrow-line" />
// // //             <span className="news-eyebrow-text">News & Updates</span>
// // //           </div>
          
// // //           <h2 className="news-title">
// // //             Keeping the KITD
// // //             <br />
// // //             <span className="news-title-accent">Community Connected</span>
// // //           </h2>
          
// // //           <p className="news-subtitle">
// // //             Stay informed with the latest announcements, event highlights, 
// // //             workshops, member stories, and association updates from the 
// // //             KITD community.
// // //           </p>
// // //         </div>

// // //         {/* News Grid + Newsletter Sidebar */}
// // //         <div className="news-layout">
          
// // //           {/* Main News Grid */}
// // //           <div className="news-main">
// // //             {!loading && news.length > 0 && (
// // //               <div className="news-grid">
// // //                 {news.map((item, index) => {
// // //                   const category = getCategoryConfig(item.category);
                  
// // //                   return (
// // //                     <article
// // //                       className="news-card"
// // //                       key={item.id || index}
// // //                       style={{ transitionDelay: `${index * 0.1}s` }}
// // //                     >
// // //                       {/* Card Image */}
// // //                       <div className="news-card-image">
// // //                         <img
// // //                           src={item.image}
// // //                           alt={item.title}
// // //                           loading="lazy"
// // //                         />
                        
// // //                         {/* Category Badge */}
// // //                         {item.category && (
// // //                           <div className={`news-category-badge ${category.className}`}>
// // //                             {category.icon}
// // //                             <span>{item.category}</span>
// // //                           </div>
// // //                         )}
// // //                       </div>

// // //                       {/* Card Content */}
// // //                       <div className="news-card-content">
// // //                         {/* Date */}
// // //                         <div className="news-card-date">
// // //                           <CalendarDays size={13} strokeWidth={1.5} />
// // //                           <span>{formatDate(item.createdAt)}</span>
// // //                         </div>

// // //                         {/* Title */}
// // //                         <h3 className="news-card-title">
// // //                           {item.title}
// // //                         </h3>

// // //                         {/* Description */}
// // //                         <p className="news-card-description">
// // //                           {item.description?.length > 120
// // //                             ? `${item.description.slice(0, 120)}...`
// // //                             : item.description}
// // //                         </p>

// // //                         {/* Read Link */}
// // //                         <Link
// // //                           to={`/news/${item.slug || item.id}`}
// // //                           className="news-card-link"
// // //                         >
// // //                           <span>Read Article</span>
// // //                           <ArrowRight size={14} strokeWidth={1.5} />
// // //                         </Link>
// // //                       </div>
// // //                     </article>
// // //                   );
// // //                 })}
// // //               </div>
// // //             )}

// // //             {/* Empty State */}
// // //             {!loading && news.length === 0 && (
// // //               <div className="news-empty">
// // //                 <h3 className="news-empty-title">No News Yet</h3>
// // //                 <p className="news-empty-text">
// // //                   Association announcements, newsletters, and community 
// // //                   updates will appear here. Stay tuned for the latest 
// // //                   from the KITD community.
// // //                 </p>
// // //               </div>
// // //             )}

// // //             {/* Loading State */}
// // //             {loading && (
// // //               <div className="news-grid">
// // //                 {[1, 2, 3].map((item) => (
// // //                   <div key={item} className="news-card-skeleton">
// // //                     <div className="skeleton-image" />
// // //                     <div className="skeleton-content">
// // //                       <div className="skeleton-date" />
// // //                       <div className="skeleton-title" />
// // //                       <div className="skeleton-text" />
// // //                       <div className="skeleton-text short" />
// // //                       <div className="skeleton-link" />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Newsletter Sidebar */}
// // //           <div className="news-sidebar">
// // //             <div className="newsletter-highlight">
// // //               <div className="newsletter-highlight-header">
// // //                 <span className="newsletter-highlight-eyebrow">Latest Newsletter</span>
// // //               </div>
              
// // //               <div className="newsletter-highlight-content">
// // //                 <h4 className="newsletter-highlight-title">
// // //                   {NEWSLETTER_HIGHLIGHT.title}
// // //                 </h4>
// // //                 <p className="newsletter-highlight-desc">
// // //                   {NEWSLETTER_HIGHLIGHT.description}
// // //                 </p>
// // //                 <Link 
// // //                   to={NEWSLETTER_HIGHLIGHT.link} 
// // //                   className="newsletter-highlight-link"
// // //                 >
// // //                   <BookOpen size={14} strokeWidth={1.5} />
// // //                   <span>{NEWSLETTER_HIGHLIGHT.label}</span>
// // //                   <ArrowRight size={13} strokeWidth={1.5} />
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>

// // //         {/* Bottom CTA */}
// // //         {news.length > 0 && (
// // //           <div className="news-cta-wrapper">
// // //             <Link to="/news" className="news-cta">
// // //               <span>Explore News & Updates</span>
// // //               <span className="news-cta-icon">
// // //                 <ArrowRight size={16} strokeWidth={1.5} />
// // //               </span>
// // //             </Link>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default NewsSection;

// // // src/components/home/NewsSection/NewsSection.jsx

// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { CalendarDays, ArrowRight, BookOpen, Megaphone, Users, Sparkles, Newspaper, Clock, ChevronRight } from "lucide-react";

// // import { getAllNews } from "../../../api/news.api";

// // import "./NewsSection.css";

// // // Fallback news based on KITD newsletters and activities
// // const FALLBACK_NEWS = [
// //   {
// //     id: 1,
// //     title: "KITD Annual General Meeting 2025",
// //     description:
// //       "Members gathered for the annual general meeting to discuss achievements, future plans, and elect the new executive committee for the upcoming term.",
// //     image: "https://images.pexels.com/photos/14602419/pexels-photo-14602419.jpeg",
// //     category: "Announcement",
// //     createdAt: "2025-07-12",
// //     slug: "kitd-annual-general-meeting-2025",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.16) 0%, rgba(60, 10, 30, 0.35) 100%)",
// //     featured: true,
// //   },
// //   {
// //     id: 2,
// //     title: "SPANDA Training Series Returns for 2025",
// //     description:
// //       "The monthly SPANDA training sessions continue this year, bringing together dancers and teachers for collaborative learning and artistic development.",
// //     image: "https://images.pexels.com/photos/35685774/pexels-photo-35685774.jpeg",
// //     category: "Workshop",
// //     createdAt: "2025-06-28",
// //     slug: "spanda-training-series-2025",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.16) 0%, rgba(60, 10, 30, 0.35) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 3,
// //     title: "New Community Partnerships Established",
// //     description:
// //       "KITD announces new collaborations with cultural institutions across Germany to expand the reach of Indian Classical Dance performances and education.",
// //     image: "https://images.pexels.com/photos/29345537/pexels-photo-29345537.jpeg",
// //     category: "Community",
// //     createdAt: "2025-06-15",
// //     slug: "new-community-partnerships",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.16) 0%, rgba(60, 10, 30, 0.35) 100%)",
// //     featured: false,
// //   },
// // ];

// // // Category configuration
// // const categoryConfig = {
// //   Announcement: { icon: <Megaphone size={11} />, className: "kitd-news__cat--announcement" },
// //   Workshop: { icon: <BookOpen size={11} />, className: "kitd-news__cat--workshop" },
// //   Community: { icon: <Users size={11} />, className: "kitd-news__cat--community" },
// //   Performance: { icon: <Sparkles size={11} />, className: "kitd-news__cat--performance" },
// //   Newsletter: { icon: <BookOpen size={11} />, className: "kitd-news__cat--newsletter" },
// //   Partnership: { icon: <Users size={11} />, className: "kitd-news__cat--partnership" },
// //   Volunteer: { icon: <Users size={11} />, className: "kitd-news__cat--volunteer" },
// // };

// // // Newsletter highlight
// // const NEWSLETTER_HIGHLIGHT = {
// //   title: "Nritya Vani — January 2025",
// //   description: "Quarterly newsletter featuring community updates, artist spotlights, and upcoming events.",
// //   link: "/news",
// //   label: "Read Newsletter",
// // };

// // const NewsSection = () => {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     fetchNews();
    
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.15 }
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

// //   const fetchNews = async () => {
// //     try {
// //       const res = await getAllNews({ page: 1, limit: 3 });
// //       const data = res.data?.data?.news || res.data?.data || [];
      
// //       if (Array.isArray(data) && data.length > 0) {
// //         const newsWithGradient = data.map((item, index) => ({
// //           ...item,
// //           gradient: FALLBACK_NEWS[index]?.gradient || "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// //           featured: index === 0 ? true : false,
// //         }));
// //         setNews(newsWithGradient);
// //       } else {
// //         setNews(FALLBACK_NEWS);
// //       }
// //     } catch (error) {
// //       console.log("Using fallback news:", error);
// //       setNews(FALLBACK_NEWS);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-GB", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const getCategoryConfig = (category) => {
// //     return categoryConfig[category] || { icon: <Megaphone size={11} />, className: "kitd-news__cat--default" };
// //   };

// //   // Separate featured and regular news
// //   const featuredNews = news.find(item => item.featured);
// //   const regularNews = news.filter(item => !item.featured);

// //   return (
// //     <section className={`kitd-news ${isVisible ? 'kitd-news--visible' : ''}`} ref={sectionRef}>
// //       {/* Decorative Elements */}
// //       <div className="kitd-news__deco kitd-news__deco--1" />
// //       <div className="kitd-news__deco kitd-news__deco--2" />
// //       <div className="kitd-news__deco kitd-news__deco--3" />

// //       <div className="kitd-news__container">
        
// //         {/* Section Header */}
// //         <div className="kitd-news__header">
// //           <div className="kitd-news__eyebrow">
// //             <span className="kitd-news__eyebrow-line" />
// //             <span className="kitd-news__eyebrow-text">News & Updates</span>
// //           </div>
          
// //           <h2 className="kitd-news__title">
// //             Keeping the KITD
// //             <br />
// //             <span className="kitd-news__title-accent">Community Connected</span>
// //           </h2>
          
// //           <p className="kitd-news__subtitle">
// //             Stay informed with the latest announcements, event highlights, 
// //             workshops, member stories, and association updates from the 
// //             KITD community.
// //           </p>
// //         </div>

// //         {/* Main Content */}
// //         <div className="kitd-news__layout">
          
// //           {/* Left Column - Featured News */}
// //           <div className="kitd-news__featured">
// //             {!loading && featuredNews && (
// //               <div 
// //                 className={`kitd-news__featured-card ${hoveredCard === 'featured' ? 'kitd-news__featured-card--hovered' : ''}`}
// //                 onMouseEnter={() => setHoveredCard('featured')}
// //                 onMouseLeave={() => setHoveredCard(null)}
// //               >
// //                 <div 
// //                   className="kitd-news__featured-bg"
// //                   style={{ backgroundImage: `url(${featuredNews.image})` }}
// //                 />
// //                 <div 
// //                   className="kitd-news__featured-overlay"
// //                   style={{ background: featuredNews.gradient }}
// //                 />
                
// //                 <div className="kitd-news__featured-badge">
// //                   <Sparkles size={12} />
// //                   <span>Featured</span>
// //                 </div>

// //                 <div className="kitd-news__featured-content">
// //                   <div className="kitd-news__featured-top">
// //                     {featuredNews.category && (
// //                       <span className={`kitd-news__featured-cat ${getCategoryConfig(featuredNews.category).className}`}>
// //                         {getCategoryConfig(featuredNews.category).icon}
// //                         {featuredNews.category}
// //                       </span>
// //                     )}
// //                     <span className="kitd-news__featured-date">
// //                       <CalendarDays size={14} strokeWidth={1.5} />
// //                       {formatDate(featuredNews.createdAt)}
// //                     </span>
// //                   </div>
                  
// //                   <div className="kitd-news__featured-body">
// //                     <h3 className="kitd-news__featured-title">{featuredNews.title}</h3>
// //                     <p className="kitd-news__featured-desc">{featuredNews.description}</p>
// //                     <Link 
// //                       to={`/news/${featuredNews.slug || featuredNews.id}`}
// //                       className="kitd-news__featured-link"
// //                     >
// //                       <span>Read Full Article</span>
// //                       <ArrowRight size={16} strokeWidth={1.5} />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right Column - Regular News Cards */}
// //           <div className="kitd-news__grid">
// //             {!loading && regularNews.length > 0 && (
// //               <div className="kitd-news__grid-cards">
// //                 {regularNews.map((item, index) => {
// //                   const category = getCategoryConfig(item.category);
                  
// //                   return (
// //                     <div 
// //                       className={`kitd-news__grid-card ${hoveredCard === `grid-${index}` ? 'kitd-news__grid-card--hovered' : ''}`}
// //                       key={item.id || index}
// //                       style={{ transitionDelay: `${(index + 1) * 0.08}s` }}
// //                       onMouseEnter={() => setHoveredCard(`grid-${index}`)}
// //                       onMouseLeave={() => setHoveredCard(null)}
// //                     >
// //                       <div 
// //                         className="kitd-news__grid-bg"
// //                         style={{ backgroundImage: `url(${item.image})` }}
// //                       />
// //                       <div 
// //                         className="kitd-news__grid-overlay"
// //                         style={{ background: item.gradient }}
// //                       />
                      
// //                       <div className="kitd-news__grid-content">
// //                         <div className="kitd-news__grid-top">
// //                           {item.category && (
// //                             <span className={`kitd-news__grid-cat ${category.className}`}>
// //                               {category.icon}
// //                               {item.category}
// //                             </span>
// //                           )}
// //                         </div>
                        
// //                         <div className="kitd-news__grid-body">
// //                           <h4 className="kitd-news__grid-title">{item.title}</h4>
// //                           <div className="kitd-news__grid-meta">
// //                             <span className="kitd-news__grid-date">
// //                               <CalendarDays size={12} strokeWidth={1.5} />
// //                               {formatDate(item.createdAt)}
// //                             </span>
// //                           </div>
// //                           <Link 
// //                             to={`/news/${item.slug || item.id}`}
// //                             className="kitd-news__grid-link"
// //                           >
// //                             <span>Read</span>
// //                             <ArrowRight size={12} strokeWidth={1.5} />
// //                           </Link>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             )}

// //             {/* Newsletter Highlight */}
// //             {!loading && (
// //               <div className="kitd-news__newsletter">
// //                 <div className="kitd-news__newsletter-icon">
// //                   <BookOpen size={20} strokeWidth={1.5} />
// //                 </div>
// //                 <h4 className="kitd-news__newsletter-title">
// //                   {NEWSLETTER_HIGHLIGHT.title}
// //                 </h4>
// //                 <p className="kitd-news__newsletter-desc">
// //                   {NEWSLETTER_HIGHLIGHT.description}
// //                 </p>
// //                 <Link 
// //                   to={NEWSLETTER_HIGHLIGHT.link} 
// //                   className="kitd-news__newsletter-link"
// //                 >
// //                   <span>{NEWSLETTER_HIGHLIGHT.label}</span>
// //                   <ChevronRight size={16} strokeWidth={1.5} />
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Empty State */}
// //         {!loading && news.length === 0 && (
// //           <div className="kitd-news__empty">
// //             <div className="kitd-news__empty-icon">
// //               <Newspaper size={48} strokeWidth={1} />
// //             </div>
// //             <h3 className="kitd-news__empty-title">No News Yet</h3>
// //             <p className="kitd-news__empty-text">
// //               Association announcements, newsletters, and community 
// //               updates will appear here. Stay tuned for the latest 
// //               from the KITD community.
// //             </p>
// //           </div>
// //         )}

// //         {/* Loading State */}
// //         {loading && (
// //           <div className="kitd-news__loading">
// //             <div className="kitd-news__skeleton kitd-news__skeleton--featured" />
// //             <div className="kitd-news__skeleton kitd-news__skeleton--grid" />
// //             <div className="kitd-news__skeleton kitd-news__skeleton--grid" />
// //           </div>
// //         )}

// //         {/* Bottom CTA */}
// //         {news.length > 0 && (
// //           <div className="kitd-news__cta-wrapper">
// //             <Link to="/news" className="kitd-news__cta">
// //               <span>Explore All News</span>
// //               <span className="kitd-news__cta-icon">
// //                 <ArrowRight size={16} strokeWidth={1.5} />
// //               </span>
// //             </Link>
// //           </div>
// //         )}

// //       </div>
// //     </section>
// //   );
// // };

// // export default NewsSection;


// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { CalendarDays, ArrowRight, BookOpen, Megaphone, Users, Sparkles, Newspaper, Clock } from "lucide-react";

// import { getAllNews } from "../../../api/news.api";

// import "./NewsSection.css";

// // Fallback news based on KITD newsletters and activities
// const FALLBACK_NEWS = [
//   {
//     id: 1,
//     title: "KITD Annual General Meeting 2025",
//     description: "Members gathered for the annual general meeting to discuss achievements, future plans, and elect the new executive committee for the upcoming term.",
//     image: "https://images.pexels.com/photos/14602419/pexels-photo-14602419.jpeg",
//     category: "Announcement",
//     createdAt: "2025-07-12",
//     slug: "kitd-annual-general-meeting-2025",
//   },
//   {
//     id: 2,
//     title: "SPANDA Training Series Returns for 2025",
//     description: "The monthly SPANDA training sessions continue this year, bringing together dancers and teachers for collaborative learning and artistic development.",
//     image: "https://images.pexels.com/photos/35685774/pexels-photo-35685774.jpeg",
//     category: "Workshop",
//     createdAt: "2025-06-28",
//     slug: "spanda-training-series-2025",
//   },
//   {
//     id: 3,
//     title: "New Community Partnerships Established",
//     description: "KITD announces new collaborations with cultural institutions across Germany to expand the reach of Indian Classical Dance performances and education.",
//     image: "https://images.pexels.com/photos/29345537/pexels-photo-29345537.jpeg",
//     category: "Community",
//     createdAt: "2025-06-15",
//     slug: "new-community-partnerships",
//   },
//   {
//     id: 4,
//     title: "City Concert Series 2025",
//     description: "The annual City Concert series brings together dancers and musicians for an evening of classical Indian dance performances across multiple cities.",
//     image: "https://images.pexels.com/photos/16715886/pexels-photo-16715886.jpeg",
//     category: "Performance",
//     createdAt: "2025-05-20",
//     slug: "city-concert-series-2025",
//   },
// ];

// const categoryConfig = {
//   Announcement: { icon: <Megaphone size={11} />, className: "kitd-news__cat--announcement" },
//   Workshop: { icon: <BookOpen size={11} />, className: "kitd-news__cat--workshop" },
//   Community: { icon: <Users size={11} />, className: "kitd-news__cat--community" },
//   Performance: { icon: <Sparkles size={11} />, className: "kitd-news__cat--performance" },
//   Newsletter: { icon: <BookOpen size={11} />, className: "kitd-news__cat--newsletter" },
//   Partnership: { icon: <Users size={11} />, className: "kitd-news__cat--partnership" },
//   Volunteer: { icon: <Users size={11} />, className: "kitd-news__cat--volunteer" },
// };

// const NewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     fetchNews();
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
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

//   const fetchNews = async () => {
//     try {
//       const res = await getAllNews({ page: 1, limit: 4 });
      
//       let newsData = [];
//       if (res?.data?.data) {
//         if (Array.isArray(res.data.data)) {
//           newsData = res.data.data;
//         } else if (res.data.data.news) {
//           newsData = res.data.data.news;
//         }
//       } else if (Array.isArray(res?.data)) {
//         newsData = res.data;
//       } else if (Array.isArray(res)) {
//         newsData = res;
//       }
      
//       if (newsData.length > 0) {
//         const formattedNews = newsData.map((item, index) => {
//           let imageUrl = FALLBACK_NEWS[index % FALLBACK_NEWS.length]?.image;
          
//           if (item.image) {
//             if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
//               imageUrl = item.image;
//             } else {
//               imageUrl = `${IMAGE_BASE_URL}/uploads/news/${item.image}`;
//             }
//           }
          
//           return {
//             id: item.id,
//             title: item.title || "KITD News",
//             description: item.description || "Stay updated with the latest news from KITD.",
//             image: imageUrl,
//             category: item.category || "Announcement",
//             createdAt: item.createdAt || new Date().toISOString(),
//             slug: item.slug || `news-${item.id}`,
//           };
//         });
//         setNews(formattedNews);
//       } else {
//         setNews(FALLBACK_NEWS);
//       }
//     } catch (err) {
//       console.error("Error fetching news:", err);
//       setNews(FALLBACK_NEWS);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "TBD";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   const getCategoryConfig = (category) => {
//     return categoryConfig[category] || { icon: <Megaphone size={11} />, className: "kitd-news__cat--default" };
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % Math.ceil(news.length / 3));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + Math.ceil(news.length / 3)) % Math.ceil(news.length / 3));
//   };

//   // Get visible cards based on current slide
//   const getVisibleCards = () => {
//     const cardsPerSlide = 3;
//     const start = currentSlide * cardsPerSlide;
//     const end = start + cardsPerSlide;
//     return news.slice(start, end);
//   };

//   return (
//     <section className={`kitd-news ${isVisible ? 'kitd-news--visible' : ''}`} ref={sectionRef}>
//       {/* Decorative Elements */}
//       <div className="kitd-news__deco kitd-news__deco--1" />
//       <div className="kitd-news__deco kitd-news__deco--2" />
//       <div className="kitd-news__deco kitd-news__deco--3" />

//       <div className="kitd-news__container">
        
//         {/* Section Header */}
//         <div className="kitd-news__header">
//           <div className="kitd-news__eyebrow">
//             <span className="kitd-news__eyebrow-line" />
//             <span className="kitd-news__eyebrow-text">News & Updates</span>
//           </div>
          
//           <h2 className="kitd-news__title">
//             Keeping the KITD
//             <br />
//             <span className="kitd-news__title-accent">Community Connected</span>
//           </h2>
          
//           <p className="kitd-news__subtitle">
//             Stay informed with the latest announcements, event highlights, 
//             workshops, member stories, and association updates from the 
//             KITD community.
//           </p>
//         </div>

//         {/* News Cards Grid */}
//         {!loading && news.length > 0 && (
//           <div className="kitd-news__grid">
//             <div className="kitd-news__grid-inner">
//               {news.map((item, index) => {
//                 const category = getCategoryConfig(item.category);
//                 return (
//                   <div 
//                     className={`kitd-news__card ${hoveredCard === index ? 'kitd-news__card--hovered' : ''}`}
//                     key={item.id || index}
//                     style={{ transitionDelay: `${index * 0.08}s` }}
//                     onMouseEnter={() => setHoveredCard(index)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-news__card-image"
//                       style={{ backgroundImage: `url(${item.image})` }}
//                     />
//                     <div className="kitd-news__card-overlay" />
                    
//                     <div className="kitd-news__card-content">
//                       <div className="kitd-news__card-top">
//                         <span className={`kitd-news__card-category ${category.className}`}>
//                           {category.icon}
//                           {item.category}
//                         </span>
//                         <span className="kitd-news__card-date">
//                           <CalendarDays size={12} strokeWidth={1.5} />
//                           {formatDate(item.createdAt)}
//                         </span>
//                       </div>
                      
//                       <div className="kitd-news__card-body">
//                         <h3 className="kitd-news__card-title">{item.title}</h3>
//                         <p className="kitd-news__card-description">
//                           {item.description?.length > 100 
//                             ? `${item.description.slice(0, 100)}...` 
//                             : item.description}
//                         </p>
//                         <Link 
//                           to={`/news/${item.slug || item.id}`}
//                           className="kitd-news__card-link"
//                         >
//                           <span>Read More</span>
//                           <ArrowRight size={14} strokeWidth={1.5} />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && news.length === 0 && (
//           <div className="kitd-news__empty">
//             <div className="kitd-news__empty-icon">
//               <Newspaper size={48} strokeWidth={1} />
//             </div>
//             <h3 className="kitd-news__empty-title">No News Yet</h3>
//             <p className="kitd-news__empty-text">
//               Association announcements, newsletters, and community 
//               updates will appear here. Stay tuned for the latest 
//               from the KITD community.
//             </p>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="kitd-news__loading">
//             <div className="kitd-news__skeleton-card">
//               <div className="kitd-news__skeleton-image" />
//               <div className="kitd-news__skeleton-content">
//                 <div className="kitd-news__skeleton-category" />
//                 <div className="kitd-news__skeleton-title" />
//                 <div className="kitd-news__skeleton-text" />
//                 <div className="kitd-news__skeleton-text short" />
//                 <div className="kitd-news__skeleton-link" />
//               </div>
//             </div>
//             <div className="kitd-news__skeleton-card">
//               <div className="kitd-news__skeleton-image" />
//               <div className="kitd-news__skeleton-content">
//                 <div className="kitd-news__skeleton-category" />
//                 <div className="kitd-news__skeleton-title" />
//                 <div className="kitd-news__skeleton-text" />
//                 <div className="kitd-news__skeleton-text short" />
//                 <div className="kitd-news__skeleton-link" />
//               </div>
//             </div>
//             <div className="kitd-news__skeleton-card">
//               <div className="kitd-news__skeleton-image" />
//               <div className="kitd-news__skeleton-content">
//                 <div className="kitd-news__skeleton-category" />
//                 <div className="kitd-news__skeleton-title" />
//                 <div className="kitd-news__skeleton-text" />
//                 <div className="kitd-news__skeleton-text short" />
//                 <div className="kitd-news__skeleton-link" />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         {news.length > 0 && (
//           <div className="kitd-news__cta-wrapper">
//             <Link to="/news" className="kitd-news__cta">
//               <span>Explore All News</span>
//               <span className="kitd-news__cta-icon">
//                 <ArrowRight size={16} strokeWidth={1.5} />
//               </span>
//             </Link>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default NewsSection;

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, BookOpen, Megaphone, Users, Sparkles, Newspaper, Clock } from "lucide-react";

import { getAllNews } from "../../../api/news.api";

import "./NewsSection.css";

// Fallback news based on KITD newsletters and activities

const categoryConfig = {
  Announcement: { icon: <Megaphone size={11} />, className: "kitd-news__cat--announcement" },
  Workshop: { icon: <BookOpen size={11} />, className: "kitd-news__cat--workshop" },
  Community: { icon: <Users size={11} />, className: "kitd-news__cat--community" },
  Performance: { icon: <Sparkles size={11} />, className: "kitd-news__cat--performance" },
  Newsletter: { icon: <BookOpen size={11} />, className: "kitd-news__cat--newsletter" },
  Partnership: { icon: <Users size={11} />, className: "kitd-news__cat--partnership" },
  Volunteer: { icon: <Users size={11} />, className: "kitd-news__cat--volunteer" },
};

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    fetchNews();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  const fetchNews = async () => {
    try {
      const res = await getAllNews({ page: 1, limit: 4 });
      
      let newsData = [];
      if (res?.data?.data) {
        if (Array.isArray(res.data.data)) {
          newsData = res.data.data;
        } else if (res.data.data.news) {
          newsData = res.data.data.news;
        }
      } else if (Array.isArray(res?.data)) {
        newsData = res.data;
      } else if (Array.isArray(res)) {
        newsData = res;
      }
      
      if (newsData.length > 0) {
        const formattedNews = newsData.map((item, index) => {
          let imageUrl = FALLBACK_NEWS[index % FALLBACK_NEWS.length]?.image;
          
          if (item.image) {
            if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
              imageUrl = item.image;
            } else {
              imageUrl = `${IMAGE_BASE_URL}/uploads/news/${item.image}`;
            }
          }
          
          return {
            id: item.id,
            title: item.title || "KITD News",
            description: item.description || "Stay updated with the latest news from KITD.",
            image: imageUrl,
            category: item.category || "Announcement",
            createdAt: item.createdAt || new Date().toISOString(),
            slug: item.slug || `news-${item.id}`,
          };
        });
        setNews(formattedNews);
      } else {
        setNews(FALLBACK_NEWS);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setNews(FALLBACK_NEWS);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getCategoryConfig = (category) => {
    return categoryConfig[category] || { icon: <Megaphone size={11} />, className: "kitd-news__cat--default" };
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(news.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(news.length / 3)) % Math.ceil(news.length / 3));
  };

  // Get visible cards based on current slide
  const getVisibleCards = () => {
    const cardsPerSlide = 3;
    const start = currentSlide * cardsPerSlide;
    const end = start + cardsPerSlide;
    return news.slice(start, end);
  };

  return (
    <section className={`kitd-news ${isVisible ? 'kitd-news--visible' : ''}`} ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="kitd-news__deco kitd-news__deco--1" />
      <div className="kitd-news__deco kitd-news__deco--2" />
      <div className="kitd-news__deco kitd-news__deco--3" />

      <div className="kitd-news__container">
        
        {/* Section Header */}
        <div className="kitd-news__header">
          <div className="kitd-news__eyebrow">
            <span className="kitd-news__eyebrow-line" />
            <span className="kitd-news__eyebrow-text">News & Updates</span>
          </div>
          
          <h2 className="kitd-news__title">
            Keeping the KITD
            <br />
            <span className="kitd-news__title-accent">Community Connected</span>
          </h2>
          
          <p className="kitd-news__subtitle">
            Stay informed with the latest announcements, event highlights, 
            workshops, member stories, and association updates from the 
            KITD community.
          </p>
        </div>

        {/* News Cards Grid */}
        {!loading && news.length > 0 && (
          <div className="kitd-news__grid">
            <div className="kitd-news__grid-inner">
              {news.map((item, index) => {
                const category = getCategoryConfig(item.category);
                return (
                  <div 
                    className={`kitd-news__card ${hoveredCard === index ? 'kitd-news__card--hovered' : ''}`}
                    key={item.id || index}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-news__card-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="kitd-news__card-overlay" />
                    
                    <div className="kitd-news__card-content">
                      <div className="kitd-news__card-top">
                        <span className={`kitd-news__card-category ${category.className}`}>
                          {category.icon}
                          {item.category}
                        </span>
                        <span className="kitd-news__card-date">
                          <CalendarDays size={12} strokeWidth={1.5} />
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                      
                      <div className="kitd-news__card-body">
                        <h3 className="kitd-news__card-title">{item.title}</h3>
                        <p className="kitd-news__card-description">
                          {item.description?.length > 100 
                            ? `${item.description.slice(0, 100)}...` 
                            : item.description}
                        </p>
                        <Link 
                          to={`/news/${item.slug || item.id}`}
                          className="kitd-news__card-link"
                        >
                          <span>Read More</span>
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && news.length === 0 && (
          <div className="kitd-news__empty">
            <div className="kitd-news__empty-icon">
              <Newspaper size={48} strokeWidth={1} />
            </div>
            <h3 className="kitd-news__empty-title">No News Yet</h3>
            <p className="kitd-news__empty-text">
              Association announcements, newsletters, and community 
              updates will appear here. Stay tuned for the latest 
              from the KITD community.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="kitd-news__loading">
            <div className="kitd-news__skeleton-card">
              <div className="kitd-news__skeleton-image" />
              <div className="kitd-news__skeleton-content">
                <div className="kitd-news__skeleton-category" />
                <div className="kitd-news__skeleton-title" />
                <div className="kitd-news__skeleton-text" />
                <div className="kitd-news__skeleton-text short" />
                <div className="kitd-news__skeleton-link" />
              </div>
            </div>
            <div className="kitd-news__skeleton-card">
              <div className="kitd-news__skeleton-image" />
              <div className="kitd-news__skeleton-content">
                <div className="kitd-news__skeleton-category" />
                <div className="kitd-news__skeleton-title" />
                <div className="kitd-news__skeleton-text" />
                <div className="kitd-news__skeleton-text short" />
                <div className="kitd-news__skeleton-link" />
              </div>
            </div>
            <div className="kitd-news__skeleton-card">
              <div className="kitd-news__skeleton-image" />
              <div className="kitd-news__skeleton-content">
                <div className="kitd-news__skeleton-category" />
                <div className="kitd-news__skeleton-title" />
                <div className="kitd-news__skeleton-text" />
                <div className="kitd-news__skeleton-text short" />
                <div className="kitd-news__skeleton-link" />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {news.length > 0 && (
          <div className="kitd-news__cta-wrapper">
            <Link to="/news" className="kitd-news__cta">
              <span>Explore All News</span>
              <span className="kitd-news__cta-icon">
                <ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsSection;