// import {
//   Calendar,
//   Newspaper,
//   Users,
//   Mail,
// } from "lucide-react";

// const DashboardCard = ({ statistics }) => {
//   const cards = [
//     {
//       title: "Events",
//       value: statistics.events,
//       icon: <Calendar size={28} />,
//     },
//     {
//       title: "News",
//       value: statistics.news,
//       icon: <Newspaper size={28} />,
//     },
//     {
//       title: "Memberships",
//       value: statistics.memberships,
//       icon: <Users size={28} />,
//     },
//     {
//       title: "Contacts",
//       value: statistics.contacts,
//       icon: <Mail size={28} />,
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

//       {cards.map((card) => (
//         <div
//           key={card.title}
//           className="bg-white rounded-xl shadow p-6"
//         >
//           <div className="flex justify-between">

//             <div>

//               <h3 className="text-gray-500">
//                 {card.title}
//               </h3>

//               <p className="text-3xl font-bold mt-2">
//                 {card.value}
//               </p>

//             </div>

//             <div className="text-blue-600">
//               {card.icon}
//             </div>

//           </div>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default DashboardCard;


import { useState, useEffect } from "react";
import {
  Calendar,
  Newspaper,
  Users,
  Mail,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

import "./DashboardCard.css";

const DashboardCard = ({ statistics }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animate values on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        events: statistics.events || 0,
        news: statistics.news || 0,
        memberships: statistics.memberships || 0,
        contacts: statistics.contacts || 0,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [statistics]);

  const statCards = [
    {
      id: "events",
      title: "Total Events",
      value: statistics.events || 0,
      icon: <Calendar size={24} strokeWidth={1.75} />,
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      iconBg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
      iconColor: "#3b82f6",
      trend: "+12%",
      trendUp: true,
      description: "Active events this month",
      badge: "Live",
    },
    {
      id: "news",
      title: "Total News",
      value: statistics.news || 0,
      icon: <Newspaper size={24} strokeWidth={1.75} />,
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      iconBg: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
      iconColor: "#8b5cf6",
      trend: "+8%",
      trendUp: true,
      description: "Published articles",
      badge: null,
    },
    {
      id: "memberships",
      title: "Memberships",
      value: statistics.memberships || 0,
      icon: <Users size={24} strokeWidth={1.75} />,
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      iconBg: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
      iconColor: "#10b981",
      trend: "+24%",
      trendUp: true,
      description: "New members this week",
      badge: "Hot",
    },
    {
      id: "contacts",
      title: "Contacts",
      value: statistics.contacts || 0,
      icon: <Mail size={24} strokeWidth={1.75} />,
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      iconBg: "linear-gradient(135deg, #fffbeb, #fef3c7)",
      iconColor: "#f59e0b",
      trend: "-3%",
      trendUp: false,
      description: "Unread messages",
      badge: null,
    },
  ];

  const formatValue = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value?.toString() || "0";
  };

  return (
    <div className="stat-cards">
      <div className="stat-cards__grid">
        {statCards.map((card) => (
          <div
            key={card.id}
            className={`stat-cards__item ${
              hoveredCard === card.id ? "stat-cards__item--hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              "--card-gradient": card.gradient,
            }}
          >
            {/* Card Top Section */}
            <div className="stat-cards__header">
              <div className="stat-cards__header-left">
                <div
                  className="stat-cards__icon-wrapper"
                  style={{
                    background: card.iconBg,
                    color: card.iconColor,
                  }}
                >
                  {card.icon}
                </div>
                {card.badge && (
                  <span className={`stat-cards__badge stat-cards__badge--${card.badge.toLowerCase()}`}>
                    {card.badge}
                  </span>
                )}
              </div>
              
              <div className="stat-cards__trend">
                {card.trendUp ? (
                  <TrendingUp size={16} strokeWidth={2} className="stat-cards__trend-icon--up" />
                ) : (
                  <TrendingDown size={16} strokeWidth={2} className="stat-cards__trend-icon--down" />
                )}
                <span
                  className={`stat-cards__trend-value ${
                    card.trendUp ? "stat-cards__trend-value--up" : "stat-cards__trend-value--down"
                  }`}
                >
                  {card.trend}
                </span>
              </div>
            </div>

            {/* Card Value */}
            <div className="stat-cards__value-section">
              <span className="stat-cards__value">
                {formatValue(animatedValues[card.id] || card.value)}
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className={`stat-cards__arrow ${
                  hoveredCard === card.id ? "stat-cards__arrow--visible" : ""
                }`}
              />
            </div>

            {/* Card Title */}
            <h3 className="stat-cards__title">{card.title}</h3>

            {/* Card Description */}
            <p className="stat-cards__description">{card.description}</p>

            {/* Progress Bar */}
            <div className="stat-cards__progress">
              <div
                className="stat-cards__progress-bar"
                style={{
                  width: `${Math.min((card.value / 100) * 100, 100)}%`,
                  background: card.gradient,
                }}
              />
            </div>

            {/* Hover Gradient Border */}
            <div className="stat-cards__border-gradient" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;