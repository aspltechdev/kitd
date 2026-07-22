import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.testimonial.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.testimonial.create({
    data,
  });
};

export const update = async (id, data) => {
  return await prisma.testimonial.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.testimonial.delete({
    where: {
      id: Number(id),
    },
  });
};