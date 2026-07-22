// import * as bannerService from "../services/banner.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const banners = await bannerService.getAll();

//     res.status(200).json({
//       success: true,
//       data: banners,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const getById = async (req, res) => {
//   try {
//     const banner = await bannerService.getById(req.params.id);

//     if (!banner) {
//       return res.status(404).json({
//         success: false,
//         message: "Banner not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: banner,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const create = async (req, res) => {
//   try {
//     const banner = await bannerService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Banner created successfully",
//       data: banner,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const banner = await bannerService.update(req.params.id, req.body);

//     res.status(200).json({
//       success: true,
//       message: "Banner updated successfully",
//       data: banner,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     await bannerService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Banner deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import * as bannerService from "../services/banner.service.js";

/**
 * Get All Banners
 */
export const getAllBanners = async (req, res, next) => {
  try {
    const banners = await bannerService.getAllBanners(req.query);

    return res.status(200).json({
      success: true,
      message: "Banners fetched successfully.",
      data: banners,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Banner By ID
 */
export const getBannerById = async (req, res, next) => {
  try {
    const banner = await bannerService.getBannerById(Number(req.params.id));

    return res.status(200).json({
      success: true,
      message: "Banner fetched successfully.",
      data: banner,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create Banner
 */
export const createBanner = async (req, res, next) => {
  try {
    const banner = await bannerService.createBanner({
      ...req.body,
      mediaUrl: req.file ? req.file.filename : null,
    });

    return res.status(201).json({
      success: true,
      message: "Banner created successfully.",
      data: banner,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Banner
 */
export const updateBanner = async (req, res, next) => {
  try {
    const banner = await bannerService.updateBanner(
      Number(req.params.id),
      {
        ...req.body,
        mediaUrl: req.file ? req.file.filename : undefined,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Banner updated successfully.",
      data: banner,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete Banner
 */
export const deleteBanner = async (req, res, next) => {
  try {
    await bannerService.deleteBanner(Number(req.params.id));

    return res.status(200).json({
      success: true,
      message: "Banner deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Toggle Banner Status
 */
export const toggleBannerStatus = async (req, res, next) => {
  try {
    const banner = await bannerService.toggleBannerStatus(
      Number(req.params.id)
    );

    return res.status(200).json({
      success: true,
      message: "Banner status updated successfully.",
      data: banner,
    });
  } catch (error) {
    next(error);
  }
};