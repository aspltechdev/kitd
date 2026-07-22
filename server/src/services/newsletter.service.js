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
  const existingSubscriber = await prisma.newsletter.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingSubscriber) {
    throw new Error("Email is already subscribed.");
  }

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