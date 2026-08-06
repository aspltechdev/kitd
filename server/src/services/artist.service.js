// // import prisma from "../config/prisma.js";

// // export const getAll = async () => {
// //   return await prisma.artist.findMany({
// //     orderBy: {
// //       createdAt: "desc",
// //     },
// //   });
// // };

// // export const getById = async (id) => {
// //   return await prisma.artist.findUnique({
// //     where: {
// //       id: Number(id),
// //     },
// //   });
// // };

// // export const create = async (data) => {
// //   return await prisma.artist.create({
// //     data,
// //   });
// // };

// // export const update = async (id, data) => {
// //   return await prisma.artist.update({
// //     where: {
// //       id: Number(id),
// //     },
// //     data,
// //   });
// // };

// // export const remove = async (id) => {
// //   return await prisma.artist.delete({
// //     where: {
// //       id: Number(id),
// //     },
// //   });
// // };

// // services/artist.service.js

// import prisma from "../config/prisma.js";

// // Get ALL artists (for admin panel)
// export const getAll = async () => {
//   return await prisma.artist.findMany({
//     orderBy: { createdAt: "desc" },
//   });
// };

// // Get only PUBLIC artists (for website)
// export const getPublic = async () => {
//   return await prisma.artist.findMany({
//     where: { isPublic: true },
//     orderBy: { createdAt: "desc" },
//   });
// };

// export const getById = async (id) => {
//   return await prisma.artist.findUnique({
//     where: { id: Number(id) },
//   });
// };

// export const create = async (data) => {
//   return await prisma.artist.create({ data });
// };

// export const update = async (id, data) => {
//   return await prisma.artist.update({
//     where: { id: Number(id) },
//     data,
//   });
// };

// // Toggle visibility
// export const toggleVisibility = async (id) => {
//   const artist = await prisma.artist.findUnique({ where: { id: Number(id) } });
//   return await prisma.artist.update({
//     where: { id: Number(id) },
//     data: { isPublic: !artist.isPublic },
//   });
// };

// export const remove = async (id) => {
//   return await prisma.artist.delete({
//     where: { id: Number(id) },
//   });
// };


// services/artist.service.js

// import prisma from "../config/prisma.js";

// // Get ALL artists (Admin)
// export const getAll = async () => {
//   return await prisma.artist.findMany({
//     orderBy: { createdAt: "desc" },
//   });
// };

// // Get only PUBLIC artists (Website)
// export const getPublic = async () => {
//   return await prisma.artist.findMany({
//     where: { isPublic: true },
//     orderBy: { createdAt: "desc" },
//   });
// };

// export const getById = async (id) => {
//   return await prisma.artist.findUnique({
//     where: { id: Number(id) },
//   });
// };

// export const create = async (data) => {
//   return await prisma.artist.create({ data });
// };

// export const update = async (id, data) => {
//   return await prisma.artist.update({
//     where: { id: Number(id) },
//     data,
//   });
// };

// // Toggle isPublic
// export const toggleVisibility = async (id) => {
//   const artist = await prisma.artist.findUnique({ where: { id: Number(id) } });
//   if (!artist) throw new Error("Artist not found");
  
//   return await prisma.artist.update({
//     where: { id: Number(id) },
//     data: { isPublic: !artist.isPublic },
//   });
// };

// export const remove = async (id) => {
//   return await prisma.artist.delete({
//     where: { id: Number(id) },
//   });
// };

import prisma from "../config/prisma.js";

// Get ALL artists (Admin)
export const getAll = async () => {
  return await prisma.artist.findMany({
    orderBy: { createdAt: "desc" },
  });
};

// Get only PUBLIC artists (Website)
export const getPublic = async () => {
  return await prisma.artist.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: "desc" },
  });
};

export const getById = async (id) => {
  return await prisma.artist.findUnique({
    where: { id: Number(id) },
  });
};

// ✅ Find artist by email (for cascading delete)
export const findByEmail = async (email) => {
  return await prisma.artist.findFirst({
    where: { email: email },
  });
};

export const create = async (data) => {
  return await prisma.artist.create({ data });
};

export const update = async (id, data) => {
  return await prisma.artist.update({
    where: { id: Number(id) },
    data,
  });
};

// Toggle isPublic
export const toggleVisibility = async (id) => {
  const artist = await prisma.artist.findUnique({ where: { id: Number(id) } });
  if (!artist) throw new Error("Artist not found");
  
  return await prisma.artist.update({
    where: { id: Number(id) },
    data: { isPublic: !artist.isPublic },
  });
};

export const remove = async (id) => {
  return await prisma.artist.delete({
    where: { id: Number(id) },
  });
};