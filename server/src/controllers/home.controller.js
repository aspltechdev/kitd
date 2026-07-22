import * as homeService from "../services/home.service.js";

export const getHome = async (req, res) => {
  try {
    const data = await homeService.getHomeData();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};