import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.artist.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.artist.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.artist.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.artist.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.artist.delete({
    where: {
      id: Number(id),
    },
  });
};