// // src/pages/News/NewsDetails.jsx

// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { 
//   Calendar, 
//   Tag, 
//   ArrowLeft, 
//   ArrowRight,
//   Clock,
//   Share2,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Mail,
//   Copy,
//   Check,
//   User,
//   Eye
// } from "lucide-react";
// import { motion } from "framer-motion";

// import { getNewsItemBySlug, getRelatedNews } from "../../services/mockNewsService";

// import "./NewsDetails.css";

// const NewsDetails = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const found = await getNewsItemBySlug(slug);
//         setArticle(found);
        
//         if (found) {
//           const related = await getRelatedNews(found.id, found.category);
//           setRelatedNews(related);
//         }
//       } catch (error) {
//         console.error("Error fetching news article:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const title = article?.title || 'KITD News';
    
//     const shareUrls = {
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//       twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
//       linkedin: `https://www.linkedin.com/sharing/share-offscreen/?url=${encodeURIComponent(url)}`,
//       email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
//     };

//     if (platform === 'copy') {
//       navigator.clipboard.writeText(url).then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       });
//       return;
//     }

//     window.open(shareUrls[platform], '_blank', 'width=600,height=400');
//   };

//   if (loading) {
//     return (
//       <div className="news-details-loader">
//         <div className="loader-spinner" />
//         <p>Loading article...</p>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="news-details-not-found">
//         <h2>Article not found</h2>
//         <p>The news article you're looking for doesn't exist.</p>
//         <Link to="/news" className="back-btn">
//           <ArrowLeft size={16} />
//           Back to News
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="news-details-page">

//       {/* ============================================
//          HERO SECTION
//          ============================================ */}
//       <section className="details-hero">
//         <div className="details-hero-image">
//           <img src={article.image} alt={article.title} />
//           <div className="details-hero-overlay" />
//         </div>
//         <div className="container">
//           <motion.div 
//             className="details-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Link to="/news" className="back-link">
//               <ArrowLeft size={16} />
//               Back to News
//             </Link>
//             <span className="details-category">{article.category}</span>
//             <h1>{article.title}</h1>
//             <div className="details-meta">
//               <span><Calendar size={18} /> {article.date}</span>
//               <span><Clock size={18} /> {article.readTime || '3 min read'}</span>
//               <span><Eye size={18} /> {article.views || '150'} views</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          CONTENT SECTION
//          ============================================ */}
//       <section className="details-content">
//         <div className="container">
//           <div className="details-layout">
            
//             {/* Main Content */}
//             <div className="details-main">
//               {/* Author Info */}
//               <div className="author-section">
//                 <div className="author-avatar">
//                   <img src={article.authorImage || '/images/default-avatar.jpg'} alt={article.author || 'KITD'} />
//                 </div>
//                 <div className="author-info">
//                   <h4>{article.author || 'KITD Team'}</h4>
//                   <p>{article.authorRole || 'KITD Association'}</p>
//                 </div>
//               </div>

//               {/* Article Body */}
//               <div className="article-content">
//                 <p className="article-excerpt">{article.excerpt}</p>
                
//                 <div className="article-body">
//                   {article.content ? (
//                     <div dangerouslySetInnerHTML={{ __html: article.content }} />
//                   ) : (
//                     <>
//                       <p>
//                         This article explores the rich cultural heritage and community spirit 
//                         of KITD. Through performances, workshops, and collaborative initiatives, 
//                         KITD continues to bridge the gap between Indian classical dance and 
//                         German audiences.
//                       </p>
//                       <p>
//                         The organization's commitment to preserving and promoting classical 
//                         dance forms has created a vibrant community of artists, enthusiasts, 
//                         and supporters across Germany. From Berlin to Munich, KITD's presence 
//                         continues to grow and inspire.
//                       </p>
//                       <h3>Key Highlights</h3>
//                       <ul>
//                         <li>Community engagement programs across Germany</li>
//                         <li>Workshops and training sessions for all skill levels</li>
//                         <li>Collaborations with international artists</li>
//                         <li>Cultural exchange initiatives</li>
//                       </ul>
//                       <p>
//                         Stay connected with KITD for more updates on upcoming events, 
//                         workshops, and community initiatives that celebrate the rich 
//                         tradition of Indian classical dance.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="article-tags">
//                 <span className="tag-label">Tags:</span>
//                 <span className="tag">{article.category}</span>
//                 <span className="tag">{article.style || 'Classical Dance'}</span>
//                 <span className="tag">KITD</span>
//                 <span className="tag">Community</span>
//               </div>

//               {/* Share Section */}
//               <div className="share-section">
//                 <h4>Share this article</h4>
//                 <div className="share-buttons">
//                   <button onClick={() => handleShare('facebook')} className="share-btn facebook" aria-label="Share on Facebook">
//                     <Facebook size={18} />
//                   </button>
//                   <button onClick={() => handleShare('twitter')} className="share-btn twitter" aria-label="Share on Twitter">
//                     <Twitter size={18} />
//                   </button>
//                   <button onClick={() => handleShare('linkedin')} className="share-btn linkedin" aria-label="Share on LinkedIn">
//                     <Linkedin size={18} />
//                   </button>
//                   <button onClick={() => handleShare('email')} className="share-btn email" aria-label="Share via Email">
//                     <Mail size={18} />
//                   </button>
//                   <button onClick={() => handleShare('copy')} className="share-btn copy" aria-label="Copy link">
//                     {copied ? <Check size={18} /> : <Copy size={18} />}
//                     <span className="share-tooltip">{copied ? 'Copied!' : 'Copy link'}</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <aside className="details-sidebar">
//               {/* Author Card */}
//               <div className="sidebar-card author-card">
//                 <h3>About the Author</h3>
//                 <div className="author-detail">
//                   <img src={article.authorImage || '/images/default-avatar.jpg'} alt={article.author || 'KITD'} />
//                   <div>
//                     <h4>{article.author || 'KITD Team'}</h4>
//                     <p>{article.authorRole || 'KITD Association'}</p>
//                   </div>
//                 </div>
//                 <p className="author-bio">
//                   {article.authorBio || 'Passionate about preserving and promoting Indian classical dance in Germany.'}
//                 </p>
//               </div>

//               {/* Related Articles */}
//               {relatedNews.length > 0 && (
//                 <div className="sidebar-card">
//                   <h3>Related Articles</h3>
//                   {relatedNews.map(related => (
//                     <Link key={related.id} to={`/news/${related.slug}`} className="related-article">
//                       <img src={related.image} alt={related.title} />
//                       <div className="related-article-info">
//                         <h4>{related.title}</h4>
//                         <span>{related.date}</span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}

//               {/* Newsletter Signup */}
//               <div className="sidebar-card newsletter-card">
//                 <h3>Subscribe to Newsletter</h3>
//                 <p>Get the latest news and updates from KITD</p>
//                 <Link to="/subscribe" className="subscribe-btn">
//                   Subscribe Now <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </aside>

//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          RELATED NEWS SECTION (Mobile)
//          ============================================ */}
//       {relatedNews.length > 0 && (
//         <section className="related-news-mobile">
//           <div className="container">
//             <h2>You might also like</h2>
//             <div className="related-grid-mobile">
//               {relatedNews.map(related => (
//                 <Link key={related.id} to={`/news/${related.slug}`} className="related-card-mobile">
//                   <img src={related.image} alt={related.title} />
//                   <div className="related-card-content">
//                     <h4>{related.title}</h4>
//                     <span>{related.date}</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ============================================
//          BACK TO TOP
//          ============================================ */}
//       <button 
//         className="back-to-top"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       >
//         <ArrowLeft size={20} />
//         Back to Top
//       </button>

//     </div>
//   );
// };

// export default NewsDetails;

// src/pages/News/NewsDetails.jsx

// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { 
//   Calendar, 
//   Tag, 
//   ArrowLeft, 
//   ArrowRight,
//   Clock,
//   Share2,
//   Eye,
//   Copy,
//   Check,
//   User,
//   Mail
// } from "lucide-react";
// import { motion } from "framer-motion";

// // Import React Icons for social media
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// import { getNewsItemBySlug, getRelatedNews } from "../../services/mockNewsService";

// import "./NewsDetails.css";

// const NewsDetails = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const found = await getNewsItemBySlug(slug);
//         setArticle(found);
        
//         if (found) {
//           const related = await getRelatedNews(found.id, found.category);
//           setRelatedNews(related);
//         }
//       } catch (error) {
//         console.error("Error fetching news article:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const title = article?.title || 'KITD News';
    
//     const shareUrls = {
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//       twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
//       linkedin: `https://www.linkedin.com/sharing/share-offscreen/?url=${encodeURIComponent(url)}`,
//       email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
//     };

//     if (platform === 'copy') {
//       navigator.clipboard.writeText(url).then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       });
//       return;
//     }

//     window.open(shareUrls[platform], '_blank', 'width=600,height=400');
//   };

//   if (loading) {
//     return (
//       <div className="news-details-loader">
//         <div className="loader-spinner" />
//         <p>Loading article...</p>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="news-details-not-found">
//         <h2>Article not found</h2>
//         <p>The news article you're looking for doesn't exist.</p>
//         <Link to="/news" className="back-btn">
//           <ArrowLeft size={16} />
//           Back to News
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="news-details-page">

//       {/* ============================================
//          HERO SECTION
//          ============================================ */}
//       <section className="details-hero">
//         <div className="details-hero-image">
//           <img src={article.image} alt={article.title} />
//           <div className="details-hero-overlay" />
//         </div>
//         <div className="container">
//           <motion.div 
//             className="details-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Link to="/news" className="back-link">
//               <ArrowLeft size={16} />
//               Back to News
//             </Link>
//             <span className="details-category">{article.category}</span>
//             <h1>{article.title}</h1>
//             <div className="details-meta">
//               <span><Calendar size={18} /> {article.date}</span>
//               <span><Clock size={18} /> {article.readTime || '3 min read'}</span>
//               <span><Eye size={18} /> {article.views || '150'} views</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          CONTENT SECTION
//          ============================================ */}
//       <section className="details-content">
//         <div className="container">
//           <div className="details-layout">
            
//             {/* Main Content */}
//             <div className="details-main">
//               {/* Author Info */}
//               <div className="author-section">
//                 <div className="author-avatar">
//                   <img src={article.authorImage || '/images/default-avatar.jpg'} alt={article.author || 'KITD'} />
//                 </div>
//                 <div className="author-info">
//                   <h4>{article.author || 'KITD Team'}</h4>
//                   <p>{article.authorRole || 'KITD Association'}</p>
//                 </div>
//               </div>

//               {/* Article Body */}
//               <div className="article-content">
//                 <p className="article-excerpt">{article.excerpt}</p>
                
//                 <div className="article-body">
//                   {article.content ? (
//                     <div dangerouslySetInnerHTML={{ __html: article.content }} />
//                   ) : (
//                     <>
//                       <p>
//                         This article explores the rich cultural heritage and community spirit 
//                         of KITD. Through performances, workshops, and collaborative initiatives, 
//                         KITD continues to bridge the gap between Indian classical dance and 
//                         German audiences.
//                       </p>
//                       <p>
//                         The organization's commitment to preserving and promoting classical 
//                         dance forms has created a vibrant community of artists, enthusiasts, 
//                         and supporters across Germany. From Berlin to Munich, KITD's presence 
//                         continues to grow and inspire.
//                       </p>
//                       <h3>Key Highlights</h3>
//                       <ul>
//                         <li>Community engagement programs across Germany</li>
//                         <li>Workshops and training sessions for all skill levels</li>
//                         <li>Collaborations with international artists</li>
//                         <li>Cultural exchange initiatives</li>
//                       </ul>
//                       <p>
//                         Stay connected with KITD for more updates on upcoming events, 
//                         workshops, and community initiatives that celebrate the rich 
//                         tradition of Indian classical dance.
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="article-tags">
//                 <span className="tag-label">Tags:</span>
//                 <span className="tag">{article.category}</span>
//                 <span className="tag">{article.style || 'Classical Dance'}</span>
//                 <span className="tag">KITD</span>
//                 <span className="tag">Community</span>
//               </div>

//               {/* Share Section */}
//               <div className="share-section">
//                 <h4>Share this article</h4>
//                 <div className="share-buttons">
//                   <button onClick={() => handleShare('facebook')} className="share-btn facebook" aria-label="Share on Facebook">
//                     <FaFacebookF size={18} />
//                   </button>
//                   <button onClick={() => handleShare('twitter')} className="share-btn twitter" aria-label="Share on Twitter">
//                     <FaTwitter size={18} />
//                   </button>
//                   <button onClick={() => handleShare('linkedin')} className="share-btn linkedin" aria-label="Share on LinkedIn">
//                     <FaLinkedinIn size={18} />
//                   </button>
//                   <button onClick={() => handleShare('email')} className="share-btn email" aria-label="Share via Email">
//                     <Mail size={18} />
//                   </button>
//                   <button onClick={() => handleShare('copy')} className="share-btn copy" aria-label="Copy link">
//                     {copied ? <Check size={18} /> : <Copy size={18} />}
//                     <span className="share-tooltip">{copied ? 'Copied!' : 'Copy link'}</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <aside className="details-sidebar">
//               {/* Author Card */}
//               <div className="sidebar-card author-card">
//                 <h3>About the Author</h3>
//                 <div className="author-detail">
//                   <img src={article.authorImage || '/images/default-avatar.jpg'} alt={article.author || 'KITD'} />
//                   <div>
//                     <h4>{article.author || 'KITD Team'}</h4>
//                     <p>{article.authorRole || 'KITD Association'}</p>
//                   </div>
//                 </div>
//                 <p className="author-bio">
//                   {article.authorBio || 'Passionate about preserving and promoting Indian classical dance in Germany.'}
//                 </p>
//               </div>

//               {/* Related Articles */}
//               {relatedNews.length > 0 && (
//                 <div className="sidebar-card">
//                   <h3>Related Articles</h3>
//                   {relatedNews.map(related => (
//                     <Link key={related.id} to={`/news/${related.slug}`} className="related-article">
//                       <img src={related.image} alt={related.title} />
//                       <div className="related-article-info">
//                         <h4>{related.title}</h4>
//                         <span>{related.date}</span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}

//               {/* Newsletter Signup */}
//               <div className="sidebar-card newsletter-card">
//                 <h3>Subscribe to Newsletter</h3>
//                 <p>Get the latest news and updates from KITD</p>
//                 <Link to="/subscribe" className="subscribe-btn">
//                   Subscribe Now <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </aside>

//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          RELATED NEWS SECTION (Mobile)
//          ============================================ */}
//       {relatedNews.length > 0 && (
//         <section className="related-news-mobile">
//           <div className="container">
//             <h2>You might also like</h2>
//             <div className="related-grid-mobile">
//               {relatedNews.map(related => (
//                 <Link key={related.id} to={`/news/${related.slug}`} className="related-card-mobile">
//                   <img src={related.image} alt={related.title} />
//                   <div className="related-card-content">
//                     <h4>{related.title}</h4>
//                     <span>{related.date}</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ============================================
//          BACK TO TOP
//          ============================================ */}
//       <button 
//         className="back-to-top"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       >
//         <ArrowLeft size={20} />
//         Back to Top
//       </button>

//     </div>
//   );
// };

// export default NewsDetails;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  ChevronRight,
  Newspaper,
  Mail,
  Tag,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getNewsById } from "../../api/news.api";

import "./NewsDetail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await getNewsById(id);
        const data = res.data?.data || res.data;
        setNews(data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Article not found.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchNews();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImageUrl = (item) => {
    if (!item?.image) return null;
    if (item.image.startsWith('http')) return item.image;
    return `${IMAGE_BASE_URL}/uploads/news/${item.image}`;
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

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="news-detail">
        <div className="news-detail__loading">
          <div className="spinner" />
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="news-detail">
        <div className="news-detail__error">
          <Newspaper size={48} />
          <h2>{error || "Article Not Found"}</h2>
          <p>The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/news" className="news-detail__back-btn">
            <ArrowLeft size={18} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = getImageUrl(news);

  return (
    <>
      <Helmet>
        <title>{news.title} | KITD News</title>
        <meta name="description" content={news.description?.substring(0, 160)} />
      </Helmet>

      <div className="news-detail">

        {/* Breadcrumb */}
        <div className="news-detail__breadcrumb">
          <div className="news-detail__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/news">News</Link>
            <ChevronRight size={14} />
            <span>{news.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="news-detail__hero">
          <div className="news-detail__container">
            <Link to="/news" className="news-detail__back-link">
              <ArrowLeft size={18} /> Back to News
            </Link>
            
            <div className="news-detail__meta">
              {news.createdAt && (
                <span className="news-detail__meta-item">
                  <Calendar size={16} /> {formatDate(news.createdAt)}
                </span>
              )}
              <span className="news-detail__meta-item">
                <Clock size={16} /> 5 min read
              </span>
            </div>

            <h1 className="news-detail__title">{news.title}</h1>

            <button onClick={copyLink} className="news-detail__share-btn">
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </section>

        {/* Featured Image */}
        {imageUrl && (
          <section className="news-detail__image-section">
            <div className="news-detail__container">
              <div className="news-detail__featured-image">
                <img src={imageUrl} alt={news.title} />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="news-detail__content">
          <div className="news-detail__container">
            <div className="news-detail__grid">
              
              {/* Main Content */}
              <div className="news-detail__main">
                <div className="news-detail__body">
                  <p className="news-detail__lead">{news.description}</p>
                  
                  {/* Additional content would go here */}
                  <div className="news-detail__text">
                    <p>
                      This article provides the latest updates and information from KITD Germany. 
                      Stay tuned for more news and announcements about Indian Classical Dance events, 
                      workshops, and community activities across Germany.
                    </p>
                  </div>
                </div>

                {/* Tags / Categories */}
                <div className="news-detail__tags">
                  <span className="news-detail__tag">
                    <Tag size={14} /> KITD News
                  </span>
                  <span className="news-detail__tag">
                    <Tag size={14} /> Announcement
                  </span>
                </div>

                {/* Share */}
                <div className="news-detail__share">
                  <h4>Share this article</h4>
                  <button onClick={copyLink} className="news-detail__copy-btn">
                    <Share2 size={16} /> Copy Link
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="news-detail__sidebar">
                <div className="news-detail__sidebar-card">
                  <h3>Article Info</h3>
                  <ul>
                    {news.createdAt && (
                      <li>
                        <Calendar size={16} />
                        <div>
                          <strong>Published</strong>
                          <span>{formatDate(news.createdAt)}</span>
                        </div>
                      </li>
                    )}
                    <li>
                      <Clock size={16} />
                      <div>
                        <strong>Read Time</strong>
                        <span>5 min read</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="news-detail__sidebar-card">
                  <h3>More News</h3>
                  <Link to="/news" className="news-detail__more-link">
                    View All Articles <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="news-detail__cta">
          <div className="news-detail__container">
            <div className="news-detail__cta-wrapper">
              <h2>Stay Updated</h2>
              <p>Subscribe to receive the latest news and updates from KITD.</p>
              <div className="news-detail__cta-buttons">
                <Link to="/membership" className="news-detail__cta-btn news-detail__cta-btn--primary">
                  <Mail size={18} /> Become a Member
                </Link>
                <Link to="/news" className="news-detail__cta-btn news-detail__cta-btn--secondary">
                  <ExternalLink size={18} /> All News
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetail;