// src/components/home/NewsSection/NewsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

import { getAllNews } from "../../../api/news.api";

import "./NewsSection.css";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await getAllNews({
        page: 1,
        limit: 3,
      });

      const data =
        res.data?.data?.news ||
        res.data?.data ||
        [];

      setNews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="news-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            LATEST NEWS
          </span>

          <h2>
            Stay Updated with
            <br />
            KITD Activities
          </h2>

          <p>
            Discover announcements, event updates,
            workshops, and community stories from KITD.
          </p>

        </div>

        <div className="news-grid">

          {news.map((item) => (

            <article
              className="news-card"
              key={item.id}
            >

              <div className="news-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="news-content">

                <div className="news-date">

                  <CalendarDays size={16} />

                  <span>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description?.slice(0, 140)}
                  ...
                </p>

                <Link
                  to={`/news/${item.slug}`}
                  className="news-link"
                >
                  Read More

                  <ArrowRight size={18} />
                </Link>

              </div>

            </article>

          ))}

        </div>

        <div className="news-footer">

          <Link
            to="/news"
            className="view-news-btn"
          >
            View All News
          </Link>

        </div>

      </div>

    </section>
  );
};

export default NewsSection;