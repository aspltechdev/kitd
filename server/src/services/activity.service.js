import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.activity.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.activity.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.activity.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.activity.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.activity.delete({
    where: {
      id: Number(id),
    },
  });
};