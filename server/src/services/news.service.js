import prisma from "../config/prisma.js";

export const getAll = async () => {
  return prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return prisma.news.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return prisma.news.create({
    data,
  });
};

export const update = async (id, data) => {
  return prisma.news.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return prisma.news.delete({
    where: {
      id: Number(id),
    },
  });
};