import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.membership.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.membership.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.membership.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.membership.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.membership.delete({
    where: {
      id: Number(id),
    },
  });
};