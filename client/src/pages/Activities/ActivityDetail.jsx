import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Share2,
  ChevronRight,
  Music,
  BookOpen,
  Users,
  Globe,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getActivityById } from "../../api/activity.api";

import "./ActivityDetail.css";

const iconMap = {
  performances: <Music size={24} />,
  workshops: <BookOpen size={24} />,
  spanda: <Sparkles size={24} />,
  exchange: <Globe size={24} />,
  community: <Users size={24} />,
  artists: <Award size={24} />,
};

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        setLoading(true);
        const res = await getActivityById(id);
        const data = res.data?.data || res.data;
        setActivity(data);
      } catch (err) {
        console.error("Failed to fetch activity:", err);
        setError("Activity not found.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchActivity();
  }, [id]);

  const getImageUrl = (activity) => {
    if (!activity) return null;
    if (activity.image) return `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
    return "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  };

  if (loading) {
    return (
      <div className="activity-detail">
        <div className="activity-detail__loading">
          <div className="spinner" />
          <p>Loading activity details...</p>
        </div>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div className="activity-detail">
        <div className="activity-detail__error">
          <h2>{error || "Activity Not Found"}</h2>
          <p>The activity you're looking for doesn't exist or has been removed.</p>
          <Link to="/activities" className="activity-detail__back-btn">
            <ArrowLeft size={18} /> Back to Activities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{activity.title} | KITD Activities</title>
        <meta name="description" content={activity.shortDescription || activity.description} />
      </Helmet>

      <div className="activity-detail">
        {/* Breadcrumb */}
        <div className="activity-detail__breadcrumb">
          <div className="activity-detail__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/activities">Activities</Link>
            <ChevronRight size={14} />
            <span>{activity.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="activity-detail__hero">
          <div
            className="activity-detail__hero-bg"
            style={{ backgroundImage: `url(${getImageUrl(activity)})` }}
          />
          <div className="activity-detail__hero-overlay" />
          <div className="activity-detail__container">
            <div className="activity-detail__hero-content">
              <Link to="/activities" className="activity-detail__back-link">
                <ArrowLeft size={18} /> Back to Activities
              </Link>
              <h1 className="activity-detail__title">{activity.title}</h1>
              <div className="activity-detail__meta">
                {activity.location && (
                  <span className="activity-detail__meta-item">
                    <MapPin size={16} /> {activity.location}
                  </span>
                )}
                {activity.date && (
                  <span className="activity-detail__meta-item">
                    <Calendar size={16} /> {new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="activity-detail__content">
          <div className="activity-detail__container">
            <div className="activity-detail__grid">
              {/* Main Content */}
              <div className="activity-detail__main">
                <div className="activity-detail__body">
                  <h2>About This Activity</h2>
                  <p>{activity.description}</p>
                  
                  {activity.shortDescription && (
                    <>
                      <h3>Overview</h3>
                      <p>{activity.shortDescription}</p>
                    </>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="activity-detail__actions">
                  <Link to="/membership" className="activity-detail__btn activity-detail__btn--primary">
                    Become a Member
                    <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                  </Link>
                  <Link to="/events" className="activity-detail__btn activity-detail__btn--secondary">
                    View Events
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="activity-detail__sidebar">
                <div className="activity-detail__info-card">
                  <h3>Activity Details</h3>
                  <ul>
                    {activity.location && (
                      <li>
                        <MapPin size={16} />
                        <div>
                          <strong>Location</strong>
                          <span>{activity.location}</span>
                        </div>
                      </li>
                    )}
                    {activity.date && (
                      <li>
                        <Calendar size={16} />
                        <div>
                          <strong>Date</strong>
                          <span>{new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </li>
                    )}
                    <li>
                      <Clock size={16} />
                      <div>
                        <strong>Status</strong>
                        <span className="activity-detail__status activity-detail__status--active">Active</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Related Activities */}
                <div className="activity-detail__related">
                  <h3>Other Activities</h3>
                  <Link to="/activities" className="activity-detail__related-link">
                    View All Activities <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivityDetail;