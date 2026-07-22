// import * as dashboardService from "../services/dashboard.service.js";

// export const getDashboard = async (req, res) => {
//   try {
//     const dashboard = await dashboardService.getDashboardStats();

//     res.status(200).json({
//       success: true,
//       data: dashboard,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import * as dashboardService from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const dashboard = await dashboardService.getDashboardStats();

    return res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: dashboard,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data",
      error: error.message,
    });
  }
};