import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.gallery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.gallery.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.gallery.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.gallery.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.gallery.delete({
    where: {
      id: Number(id),
    },
  });
};