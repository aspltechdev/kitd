// import * as newsService from "../services/news.service.js";

// export const getAll = async (req, res) => {
//   try {
//     const news = await newsService.getAll();

//     res.status(200).json({
//       success: true,
//       data: news,
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
//     const news = await newsService.getById(req.params.id);

//     if (!news) {
//       return res.status(404).json({
//         success: false,
//         message: "News not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: news,
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
//     const news = await newsService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "News created successfully",
//       data: news,
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
//     const news = await newsService.update(req.params.id, req.body);

//     res.status(200).json({
//       success: true,
//       message: "News updated successfully",
//       data: news,
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
//     await newsService.remove(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "News deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.newsletter.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.newsletter.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const subscribe = async (data) => {
  return await prisma.newsletter.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.newsletter.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.newsletter.delete({
    where: {
      id: Number(id),
    },
  });
};