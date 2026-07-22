// const RecentNews = ({ news }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-5">

//       <h2 className="font-semibold mb-4">
//         Latest News
//       </h2>

//       {news.map((item) => (
//         <div
//           key={item.id}
//           className="border-b py-3"
//         >
//           <h4 className="font-medium">
//             {item.title}
//           </h4>

//           <p className="text-sm text-gray-500">
//             {item.createdAt}
//           </p>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default RecentNews;


import { useState } from "react";
import {
  Newspaper,
  ChevronRight,
  Clock,
  MoreVertical,
  Star,
  ExternalLink,
  Edit,
  Trash2,
  Eye,
  Tag,
  User,
  MessageSquare,
  Heart,
  Bookmark,
  Share2,
  TrendingUp,
  Pin,
} from "lucide-react";

import "./RecentNews.css";

const RecentNews = ({ news }) => {
  const [hoveredNews, setHoveredNews] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  const getInitials = (title) => {
    if (!title) return "?";
    return title
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getNewsColor = (title) => {
    const colors = [
      "linear-gradient(135deg, #3b82f6, #2563eb)",
      "linear-gradient(135deg, #10b981, #059669)",
      "linear-gradient(135deg, #f59e0b, #d97706)",
      "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      "linear-gradient(135deg, #ef4444, #dc2626)",
      "linear-gradient(135deg, #ec4899, #db2777)",
      "linear-gradient(135deg, #06b6d4, #0891b2)",
      "linear-gradient(135deg, #14b8a6, #0d9488)",
    ];
    
    if (!title) return colors[0];
    const index = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const getTimeAgo = (date) => {
    if (!date) return "";
    const now = new Date();
    const newsDate = new Date(date);
    const diffInHours = Math.floor((now - newsDate) / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
    return newsDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: newsDate.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  };

  const getReadingTime = (content) => {
    if (!content) return "2 min read";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const handleMenuToggle = (newsId) => {
    setActiveMenu(activeMenu === newsId ? null : newsId);
  };

  const toggleBookmark = (newsId) => {
    setBookmarkedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(newsId)) {
        newSet.delete(newsId);
      } else {
        newSet.add(newsId);
      }
      return newSet;
    });
  };

  const getCategoryColor = (category) => {
    const categories = {
      news: { color: "#3b82f6", bg: "#eff6ff" },
      blog: { color: "#8b5cf6", bg: "#f5f3ff" },
      announcement: { color: "#f59e0b", bg: "#fffbeb" },
      event: { color: "#10b981", bg: "#ecfdf5" },
      update: { color: "#06b6d4", bg: "#ecfeff" },
      press: { color: "#ef4444", bg: "#fef2f2" },
    };
    return categories[category?.toLowerCase()] || { color: "#64748b", bg: "#f1f5f9" };
  };

  if (!news || news.length === 0) {
    return (
      <div className="recent-news">
        <div className="recent-news__header">
          <div className="recent-news__header-left">
            <div className="recent-news__header-icon">
              <Newspaper size={18} strokeWidth={2} />
            </div>
            <h2 className="recent-news__title">Latest News</h2>
          </div>
        </div>
        
        <div className="recent-news__empty">
          <div className="recent-news__empty-icon">
            <Newspaper size={40} strokeWidth={1.5} />
          </div>
          <p className="recent-news__empty-text">No news articles yet</p>
          <p className="recent-news__empty-subtext">
            Published news and updates will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-news">
      {/* Header */}
      <div className="recent-news__header">
        <div className="recent-news__header-left">
          <div className="recent-news__header-icon">
            <Newspaper size={18} strokeWidth={2} />
          </div>
          <div className="recent-news__header-text">
            <h2 className="recent-news__title">Latest News</h2>
            <span className="recent-news__count">
              {news.length} {news.length === 1 ? "article" : "articles"}
            </span>
          </div>
        </div>
        
        <button className="recent-news__view-all">
          <span>View All</span>
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* News List */}
      <div className="recent-news__list">
        {news.slice(0, 5).map((item, index) => {
          const categoryStyle = getCategoryColor(item.category);
          const isBookmarked = bookmarkedItems.has(item.id);
          
          return (
            <div
              key={item.id || item._id || index}
              className={`recent-news__item ${
                hoveredNews === item.id ? "recent-news__item--hovered" : ""
              } ${index === 0 ? "recent-news__item--featured" : ""} ${
                item.isPinned ? "recent-news__item--pinned" : ""
              }`}
              onMouseEnter={() => setHoveredNews(item.id)}
              onMouseLeave={() => {
                setHoveredNews(null);
                setActiveMenu(null);
              }}
            >
              {/* Pinned Indicator */}
              {item.isPinned && (
                <div className="recent-news__pin-badge">
                  <Pin size={12} strokeWidth={2} />
                </div>
              )}

              {/* News Icon */}
              <div
                className="recent-news__icon"
                style={{ background: getNewsColor(item.title) }}
              >
                <span className="recent-news__icon-text">
                  {getInitials(item.title)}
                </span>
                {index === 0 && !item.isPinned && (
                  <span className="recent-news__featured-badge">
                    <Star size={10} fill="currentColor" />
                  </span>
                )}
              </div>

              {/* News Content */}
              <div className="recent-news__content">
                <div className="recent-news__content-header">
                  <h4 className="recent-news__name">
                    {item.title || "Untitled Article"}
                  </h4>
                  {item.isTrending && (
                    <span className="recent-news__trending-badge">
                      <TrendingUp size={10} strokeWidth={2} />
                      Trending
                    </span>
                  )}
                </div>

                <div className="recent-news__meta">
                  <span className="recent-news__time">
                    <Clock size={12} strokeWidth={2} />
                    {getTimeAgo(item.createdAt || item.publishedAt)}
                  </span>
                  
                  <span className="recent-news__reading-time">
                    {getReadingTime(item.content || item.description)}
                  </span>

                  {item.author && (
                    <span className="recent-news__author">
                      <User size={12} strokeWidth={2} />
                      {item.author}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="recent-news__description">
                    {item.description}
                  </p>
                )}

                <div className="recent-news__footer-meta">
                  {/* Category Badge */}
                  {item.category && (
                    <span
                      className="recent-news__category-badge"
                      style={{
                        backgroundColor: categoryStyle.bg,
                        color: categoryStyle.color,
                        borderColor: categoryStyle.color,
                      }}
                    >
                      <Tag size={10} strokeWidth={2} />
                      {item.category}
                    </span>
                  )}

                  {/* Stats */}
                  <div className="recent-news__stats">
                    {item.comments !== undefined && (
                      <span className="recent-news__stat">
                        <MessageSquare size={12} strokeWidth={2} />
                        {item.comments}
                      </span>
                    )}
                    {item.likes !== undefined && (
                      <span className="recent-news__stat">
                        <Heart size={12} strokeWidth={2} />
                        {item.likes}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="recent-news__actions">
                <button
                  className={`recent-news__bookmark-btn ${
                    isBookmarked ? "recent-news__bookmark-btn--active" : ""
                  }`}
                  onClick={() => toggleBookmark(item.id)}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
                >
                  <Bookmark
                    size={16}
                    strokeWidth={2}
                    fill={isBookmarked ? "currentColor" : "none"}
                  />
                </button>

                <button
                  className="recent-news__menu-btn"
                  onClick={() => handleMenuToggle(item.id)}
                  aria-label="News options"
                >
                  <MoreVertical size={16} strokeWidth={2} />
                </button>

                {activeMenu === item.id && (
                  <div className="recent-news__dropdown">
                    <button className="recent-news__dropdown-item">
                      <Eye size={14} />
                      <span>View Article</span>
                    </button>
                    <button className="recent-news__dropdown-item">
                      <Edit size={14} />
                      <span>Edit</span>
                    </button>
                    <button className="recent-news__dropdown-item">
                      <Share2 size={14} />
                      <span>Share</span>
                    </button>
                    <button className="recent-news__dropdown-item recent-news__dropdown-item--danger">
                      <Trash2 size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {news.length > 5 && (
        <div className="recent-news__footer">
          <button className="recent-news__footer-btn">
            <Newspaper size={16} strokeWidth={2} />
            <span>View all {news.length} articles</span>
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentNews;