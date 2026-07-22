import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.event.findMany({
    orderBy: {
      eventDate: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.event.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.event.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.event.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.event.delete({
    where: {
      id: Number(id),
    },
  });
};