// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import { getDashboard } from "../../../api/dashboard.api";

// import DashboardCard from "./DashboardCard";
// import RecentEvents from "./RecentEvents";
// import RecentNews from "./RecentNews";
// import LatestContacts from "./LatestContacts";
// import LatestMemberships from "./LatestMemberships";

// const Dashboard = () => {
//   const [dashboard, setDashboard] = useState({
//     statistics: {},
//     recentEvents: [],
//     recentNews: [],
//     latestMemberships: [],
//     latestContacts: [],
//   });

//   const [loading, setLoading] = useState(true);

//   const fetchDashboard = async () => {
//     try {
//       const response = await getDashboard();

//       console.log("Dashboard Response:", response.data);

//       if (response.data?.success) {
//         setDashboard(
//           response.data.data || {
//             statistics: {},
//             recentEvents: [],
//             recentNews: [],
//             latestMemberships: [],
//             latestContacts: [],
//           }
//         );
//       } else {
//         toast.error("Failed to load dashboard");
//       }
//     } catch (error) {
//       console.error(error);

//       toast.error(
//         error.response?.data?.message || "Failed to load dashboard"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <h2 className="text-xl font-semibold">
//           Loading Dashboard...
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Dashboard
//       </h1>

//       <DashboardCard
//         statistics={dashboard.statistics || {}}
//       />

//       <div className="grid lg:grid-cols-2 gap-6 mt-8">
//         <RecentEvents
//           events={dashboard.recentEvents || []}
//         />

//         <RecentNews
//           news={dashboard.recentNews || []}
//         />

//         <LatestMemberships
//           memberships={dashboard.latestMemberships || []}
//         />

//         <LatestContacts
//           contacts={dashboard.latestContacts || []}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { RefreshCw, AlertCircle, TrendingUp, Activity, BarChart3 } from "lucide-react";

import { getDashboard } from "../../../api/dashboard.api";

import DashboardCard from "./DashboardCard";
import RecentEvents from "./RecentEvents";
import RecentNews from "./RecentNews";
import LatestContacts from "./LatestContacts";
import LatestMemberships from "./LatestMemberships";

import "./Dashboard.css";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    statistics: {},
    recentEvents: [],
    recentNews: [],
    latestMemberships: [],
    latestContacts: [],
  });

  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isRefreshing: false,
    hasError: false,
    errorMessage: "",
  });

  const fetchDashboardData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setLoadingState((prev) => ({ ...prev, isRefreshing: true }));
      }

      const response = await getDashboard();

      if (response.data?.success) {
        setDashboardData(
          response.data.data || {
            statistics: {},
            recentEvents: [],
            recentNews: [],
            latestMemberships: [],
            latestContacts: [],
          }
        );
        setLoadingState((prev) => ({
          ...prev,
          hasError: false,
          errorMessage: "",
        }));

        if (isRefresh) {
          toast.success("Dashboard updated successfully");
        }
      } else {
        throw new Error("Failed to load dashboard data");
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error);
      
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to load dashboard";
      
      setLoadingState((prev) => ({
        ...prev,
        hasError: true,
        errorMessage,
      }));

      if (!isRefresh) {
        toast.error(errorMessage);
      }
    } finally {
      setLoadingState({
        isLoading: false,
        isRefreshing: false,
        hasError: false,
        errorMessage: "",
      });
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const handleRefresh = () => {
    fetchDashboardData(true);
  };

  const handleRetry = () => {
    setLoadingState({
      isLoading: true,
      isRefreshing: false,
      hasError: false,
      errorMessage: "",
    });
    fetchDashboardData();
  };

  // Loading State
  if (loadingState.isLoading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-page__loading">
          <div className="dashboard-page__loading-spinner">
            <div className="dashboard-page__spinner-ring" />
          </div>
          <div className="dashboard-page__loading-content">
            <BarChart3 size={48} className="dashboard-page__loading-icon" strokeWidth={1.5} />
            <h2 className="dashboard-page__loading-title">Loading Dashboard</h2>
            <p className="dashboard-page__loading-description">
              Fetching your analytics and insights...
            </p>
            <div className="dashboard-page__loading-progress">
              <div className="dashboard-page__loading-bar" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (loadingState.hasError && !dashboardData.statistics) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-page__error">
          <div className="dashboard-page__error-card">
            <div className="dashboard-page__error-icon-wrapper">
              <AlertCircle size={48} className="dashboard-page__error-icon" strokeWidth={1.5} />
            </div>
            <h2 className="dashboard-page__error-title">Unable to Load Dashboard</h2>
            <p className="dashboard-page__error-message">
              {loadingState.errorMessage}
            </p>
            <div className="dashboard-page__error-actions">
              <button
                onClick={handleRetry}
                className="dashboard-page__retry-btn"
              >
                <RefreshCw size={18} strokeWidth={2} />
                <span>Try Again</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      {/* Header Section */}
      <div className="dashboard-page__header">
        <div className="dashboard-page__header-content">
          <div className="dashboard-page__header-left">
            <div className="dashboard-page__header-icon">
              <TrendingUp size={28} strokeWidth={2} />
            </div>
            <div className="dashboard-page__header-text">
              <h1 className="dashboard-page__title">Dashboard</h1>
              <p className="dashboard-page__subtitle">
                Overview of your platform's performance and activities
              </p>
            </div>
          </div>

          <div className="dashboard-page__header-right">
            <div className="dashboard-page__update-info">
              <Activity size={14} className="dashboard-page__update-dot" />
              <span className="dashboard-page__update-text">Live updates</span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={loadingState.isRefreshing}
              className="dashboard-page__refresh-btn"
              title="Refresh dashboard data"
            >
              <RefreshCw
                size={18}
                strokeWidth={2}
                className={`dashboard-page__refresh-icon ${
                  loadingState.isRefreshing ? "dashboard-page__refresh-icon--spinning" : ""
                }`}
              />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="dashboard-page__section">
        <DashboardCard statistics={dashboardData.statistics || {}} />
      </div>

      {/* Content Grid */}
      <div className="dashboard-page__section">
        <div className="dashboard-page__grid">
          <div className="dashboard-page__grid-item">
            <RecentEvents events={dashboardData.recentEvents || []} />
          </div>

          <div className="dashboard-page__grid-item">
            <RecentNews news={dashboardData.recentNews || []} />
          </div>

          <div className="dashboard-page__grid-item">
            <LatestMemberships memberships={dashboardData.latestMemberships || []} />
          </div>

          <div className="dashboard-page__grid-item">
            <LatestContacts contacts={dashboardData.latestContacts || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;