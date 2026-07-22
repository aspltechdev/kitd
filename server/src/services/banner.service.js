// import prisma from "../config/prisma.js";

// export const getAll = async () => {
//   return await prisma.banner.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// export const getById = async (id) => {
//   return await prisma.banner.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
// };

// export const create = async (data) => {
//   return await prisma.banner.create({
//     data,
//   });
// };

// export const update = async (id, data) => {
//   return await prisma.banner.update({
//     where: {
//       id: Number(id),
//     },
//     data,
//   });
// };

// export const remove = async (id) => {
//   return await prisma.banner.delete({
//     where: {
//       id: Number(id),
//     },
//   });
// };




import prisma from "../config/prisma.js";
import fs from "fs";
import path from "path";

/**
 * Get All Banners
 */
export const getAllBanners = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
  } = query;

  const skip = (Number(page) - 1) * Number(limit);

  const where = {
    OR: [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        subtitle: {
          contains: search,
          mode: "insensitive",
        },
      },
    ],
  };

  const [banners, total] = await Promise.all([
    prisma.banner.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: [
        {
          displayOrder: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    }),

    prisma.banner.count({
      where,
    }),
  ]);

  return {
    banners,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

/**
 * Get Banner By ID
 */
export const getBannerById = async (id) => {
  const banner = await prisma.banner.findUnique({
    where: {
      id,
    },
  });

  if (!banner) {
    throw new Error("Banner not found.");
  }

  return banner;
};

/**
 * Create Banner
 */
export const createBanner = async (data) => {
  return await prisma.banner.create({
    data: {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,

      mediaType: data.mediaType,
      mediaUrl: data.mediaUrl,

      buttonText: data.buttonText,
      buttonLink: data.buttonLink,

      displayOrder: Number(data.displayOrder) || 1,
      isActive:
        data.isActive === "true" ||
        data.isActive === true,
    },
  });
};

/**
 * Update Banner
 */
export const updateBanner = async (id, data) => {
  const existing = await prisma.banner.findUnique({
    where: {
      id,
    },
  });

  if (!existing) {
    throw new Error("Banner not found.");
  }

  // Delete old media if new media uploaded
  if (data.mediaUrl && existing.mediaUrl) {
    const filePath = path.join(
      "src",
      "uploads",
      "banners",
      existing.mediaUrl
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  return await prisma.banner.update({
    where: {
      id,
    },

    data: {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,

      mediaType: data.mediaType,

      mediaUrl: data.mediaUrl || existing.mediaUrl,

      buttonText: data.buttonText,
      buttonLink: data.buttonLink,

      displayOrder:
        Number(data.displayOrder) ||
        existing.displayOrder,

      isActive:
        data.isActive === undefined
          ? existing.isActive
          : data.isActive === "true" ||
            data.isActive === true,
    },
  });
};

/**
 * Delete Banner
 */
export const deleteBanner = async (id) => {
  const banner = await prisma.banner.findUnique({
    where: {
      id,
    },
  });

  if (!banner) {
    throw new Error("Banner not found.");
  }

  // Delete uploaded file
  if (banner.mediaUrl) {
    const filePath = path.join(
      "src",
      "uploads",
      "banners",
      banner.mediaUrl
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  await prisma.banner.delete({
    where: {
      id,
    },
  });

  return true;
};

/**
 * Toggle Banner Status
 */
export const toggleBannerStatus = async (id) => {
  const banner = await prisma.banner.findUnique({
    where: {
      id,
    },
  });

  if (!banner) {
    throw new Error("Banner not found.");
  }

  return await prisma.banner.update({
    where: {
      id,
    },
    data: {
      isActive: !banner.isActive,
    },
  });
};