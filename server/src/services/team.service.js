// import prisma from "../config/prisma.js";

// export const getAll = async () => {
//   return await prisma.team.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// export const getById = async (id) => {
//   return await prisma.team.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
// };

// export const create = async (data) => {
//   return await prisma.team.create({
//     data,
//   });
// };

// export const update = async (id, data) => {
//   return await prisma.team.update({
//     where: {
//       id: Number(id),
//     },
//     data,
//   });
// };

// export const remove = async (id) => {
//   return await prisma.team.delete({
//     where: {
//       id: Number(id),
//     },
//   });
// };

// import prisma from "../config/prisma.js";

// // Get ALL team members (Admin)
// export const getAll = async () => {
//   return await prisma.team.findMany({
//     orderBy: [
//       { level: "asc" },      // BOARD first, then MEMBER
//       { sortOrder: "asc" },
//       { createdAt: "desc" },
//     ],
//   });
// };

// // Get PUBLIC team members for website (grouped by level)
// export const getPublic = async () => {
//   const members = await prisma.team.findMany({
//     where: { isPublic: true },
//     orderBy: [
//       { level: "asc" },
//       { sortOrder: "asc" },
//     ],
//   });

//   return {
//     boardOfDirectors: members.filter(m => m.level === "BOARD"),
//     members: members.filter(m => m.level === "MEMBER"),
//     all: members,
//   };
// };

// export const getById = async (id) => {
//   return await prisma.team.findUnique({
//     where: { id: Number(id) },
//   });
// };

// export const create = async (data) => {
//   return await prisma.team.create({ data });
// };

// export const update = async (id, data) => {
//   return await prisma.team.update({
//     where: { id: Number(id) },
//     data,
//   });
// };

// // Toggle visibility (Public/Hidden)
// export const toggleVisibility = async (id) => {
//   const member = await prisma.team.findUnique({ where: { id: Number(id) } });
//   if (!member) throw new Error("Team member not found");
  
//   return await prisma.team.update({
//     where: { id: Number(id) },
//     data: { isPublic: !member.isPublic },
//   });
// };

// export const remove = async (id) => {
//   return await prisma.team.delete({
//     where: { id: Number(id) },
//   });
// };


import prisma from "../config/prisma.js";

// Get ALL team members (Admin)
export const getAll = async () => {
  return await prisma.team.findMany({
    orderBy: [
      { level: "asc" },
      { sortOrder: "asc" },
      { createdAt: "desc" },
    ],
  });
};

// Get PUBLIC team members for website (grouped by level)
export const getPublic = async () => {
  const members = await prisma.team.findMany({
    where: { isPublic: true },
    orderBy: [
      { level: "asc" },
      { sortOrder: "asc" },
    ],
  });

  return {
    boardOfDirectors: members.filter(m => m.level === "BOARD"),
    members: members.filter(m => m.level === "MEMBER"),
    all: members,
  };
};

export const getById = async (id) => {
  return await prisma.team.findUnique({
    where: { id: Number(id) },
  });
};

// ✅ Find team member by email (for cascading delete)
export const findByEmail = async (email) => {
  return await prisma.team.findFirst({
    where: { email: email },
  });
};

export const create = async (data) => {
  return await prisma.team.create({ data });
};

export const update = async (id, data) => {
  return await prisma.team.update({
    where: { id: Number(id) },
    data,
  });
};

// Toggle visibility (Public/Hidden)
export const toggleVisibility = async (id) => {
  const member = await prisma.team.findUnique({ where: { id: Number(id) } });
  if (!member) throw new Error("Team member not found");
  
  return await prisma.team.update({
    where: { id: Number(id) },
    data: { isPublic: !member.isPublic },
  });
};

export const remove = async (id) => {
  return await prisma.team.delete({
    where: { id: Number(id) },
  });
};