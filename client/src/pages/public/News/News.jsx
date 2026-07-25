// // src/components/home/NewsSection/NewsSection.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CalendarDays, ArrowRight } from "lucide-react";

// import { getAllNews } from "../../../api/news.api";

// import "./NewsSection.css";

// const NewsSection = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const res = await getAllNews({
//         page: 1,
//         limit: 3,
//       });

//       const data =
//         res.data?.data?.news ||
//         res.data?.data ||
//         [];

//       setNews(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="news-section">

//       <div className="container">

//         <div className="section-header">

//           <span className="section-tag">
//             LATEST NEWS
//           </span>

//           <h2>
//             Stay Updated with
//             <br />
//             KITD Activities
//           </h2>

//           <p>
//             Discover announcements, event updates,
//             workshops, and community stories from KITD.
//           </p>

//         </div>

//         <div className="news-grid">

//           {news.map((item) => (

//             <article
//               className="news-card"
//               key={item.id}
//             >

//               <div className="news-image">

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                 />

//               </div>

//               <div className="news-content">

//                 <div className="news-date">

//                   <CalendarDays size={16} />

//                   <span>
//                     {new Date(
//                       item.createdAt
//                     ).toLocaleDateString()}
//                   </span>

//                 </div>

//                 <h3>
//                   {item.title}
//                 </h3>

//                 <p>
//                   {item.description?.slice(0, 140)}
//                   ...
//                 </p>

//                 <Link
//                   to={`/news/${item.slug}`}
//                   className="news-link"
//                 >
//                   Read More

//                   <ArrowRight size={18} />
//                 </Link>

//               </div>

//             </article>

//           ))}

//         </div>

//         <div className="news-footer">

//           <Link
//             to="/news"
//             className="view-news-btn"
//           >
//             View All News
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default NewsSection;

// src/components/home/NewsSection/NewsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, BookOpen, Megaphone, Users, Sparkles } from "lucide-react";

import { getAllNews } from "../../../api/news.api";

import "./NewsSection.css";

// Fallback news based on KITD newsletters and activities
const FALLBACK_NEWS = [
  {
    id: 1,
    title: "KITD Annual General Meeting 2025",
    description:
      "Members gathered for the annual general meeting to discuss achievements, future plans, and elect the new executive committee for the upcoming term.",
    image: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Announcement",
    createdAt: "2025-07-12",
    slug: "kitd-annual-general-meeting-2025",
  },
  {
    id: 2,
    title: "SPANDA Training Series Returns for 2025",
    description:
      "The monthly SPANDA training sessions continue this year, bringing together dancers and teachers for collaborative learning and artistic development.",
    image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Workshop",
    createdAt: "2025-06-28",
    slug: "spanda-training-series-2025",
  },
  {
    id: 3,
    title: "New Community Partnerships Established",
    description:
      "KITD announces new collaborations with cultural institutions across Germany to expand the reach of Indian Classical Dance performances and education.",
    image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    category: "Community",
    createdAt: "2025-06-15",
    slug: "new-community-partnerships",
  },
];

// Category configuration
const categoryConfig = {
  Announcement: { icon: <Megaphone size={11} />, className: "cat-announcement" },
  Workshop: { icon: <BookOpen size={11} />, className: "cat-workshop" },
  Community: { icon: <Users size={11} />, className: "cat-community" },
  Performance: { icon: <Sparkles size={11} />, className: "cat-performance" },
  Newsletter: { icon: <BookOpen size={11} />, className: "cat-newsletter" },
  Partnership: { icon: <Users size={11} />, className: "cat-partnership" },
  Volunteer: { icon: <Users size={11} />, className: "cat-volunteer" },
};

// Newsletter highlight
const NEWSLETTER_HIGHLIGHT = {
  title: "Nritya Vani — January 2025",
  description: "Quarterly newsletter featuring community updates, artist spotlights, and upcoming events.",
  link: "/news",
  label: "Read Newsletter",
};

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.querySelector('.news-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fetchNews = async () => {
    try {
      const res = await getAllNews({ page: 1, limit: 3 });
      const data = res.data?.data?.news || res.data?.data || [];
      
      if (Array.isArray(data) && data.length > 0) {
        setNews(data);
      } else {
        setNews(FALLBACK_NEWS);
      }
    } catch (error) {
      console.log("Using fallback news:", error);
      setNews(FALLBACK_NEWS);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getCategoryConfig = (category) => {
    return categoryConfig[category] || { icon: <Megaphone size={11} />, className: "cat-default" };
  };

  return (
    <section className={`news-section ${isVisible ? 'visible' : ''}`}>
      <div className="news-container">
        
        {/* Section Header */}
        <div className="news-header">
          <div className="news-eyebrow">
            <span className="news-eyebrow-line" />
            <span className="news-eyebrow-text">News & Updates</span>
          </div>
          
          <h2 className="news-title">
            Keeping the KITD
            <br />
            <span className="news-title-accent">Community Connected</span>
          </h2>
          
          <p className="news-subtitle">
            Stay informed with the latest announcements, event highlights, 
            workshops, member stories, and association updates from the 
            KITD community.
          </p>
        </div>

        {/* News Grid + Newsletter Sidebar */}
        <div className="news-layout">
          
          {/* Main News Grid */}
          <div className="news-main">
            {!loading && news.length > 0 && (
              <div className="news-grid">
                {news.map((item, index) => {
                  const category = getCategoryConfig(item.category);
                  
                  return (
                    <article
                      className="news-card"
                      key={item.id || index}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {/* Card Image */}
                      <div className="news-card-image">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                        />
                        
                        {/* Category Badge */}
                        {item.category && (
                          <div className={`news-category-badge ${category.className}`}>
                            {category.icon}
                            <span>{item.category}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="news-card-content">
                        {/* Date */}
                        <div className="news-card-date">
                          <CalendarDays size={13} strokeWidth={1.5} />
                          <span>{formatDate(item.createdAt)}</span>
                        </div>

                        {/* Title */}
                        <h3 className="news-card-title">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="news-card-description">
                          {item.description?.length > 120
                            ? `${item.description.slice(0, 120)}...`
                            : item.description}
                        </p>

                        {/* Read Link */}
                        <Link
                          to={`/news/${item.slug || item.id}`}
                          className="news-card-link"
                        >
                          <span>Read Article</span>
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Empty State */}
            {!loading && news.length === 0 && (
              <div className="news-empty">
                <h3 className="news-empty-title">No News Yet</h3>
                <p className="news-empty-text">
                  Association announcements, newsletters, and community 
                  updates will appear here. Stay tuned for the latest 
                  from the KITD community.
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="news-grid">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="news-card-skeleton">
                    <div className="skeleton-image" />
                    <div className="skeleton-content">
                      <div className="skeleton-date" />
                      <div className="skeleton-title" />
                      <div className="skeleton-text" />
                      <div className="skeleton-text short" />
                      <div className="skeleton-link" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Sidebar */}
          <div className="news-sidebar">
            <div className="newsletter-highlight">
              <div className="newsletter-highlight-header">
                <span className="newsletter-highlight-eyebrow">Latest Newsletter</span>
              </div>
              
              <div className="newsletter-highlight-content">
                <h4 className="newsletter-highlight-title">
                  {NEWSLETTER_HIGHLIGHT.title}
                </h4>
                <p className="newsletter-highlight-desc">
                  {NEWSLETTER_HIGHLIGHT.description}
                </p>
                <Link 
                  to={NEWSLETTER_HIGHLIGHT.link} 
                  className="newsletter-highlight-link"
                >
                  <BookOpen size={14} strokeWidth={1.5} />
                  <span>{NEWSLETTER_HIGHLIGHT.label}</span>
                  <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        {news.length > 0 && (
          <div className="news-cta-wrapper">
            <Link to="/news" className="news-cta">
              <span>Explore News & Updates</span>
              <span className="news-cta-icon">
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