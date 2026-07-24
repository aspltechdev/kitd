import prisma from "../config/prisma.js";

export const getAll = async ({ search }) => {
  const where = search
    ? {
        OR: [
          {
            fullName: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            interests: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  return await prisma.volunteerRegistration.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.volunteerRegistration.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.volunteerRegistration.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      city: data.city,
      state: data.state,
      country: data.country,
      occupation: data.occupation,
      organization: data.organization,
      interests: data.interests,
      experience: data.experience,
      availability: data.availability,
      message: data.message,
    },
  });
};

export const updateStatus = async (id, status) => {
  return await prisma.volunteerRegistration.update({
    where: {
      id: Number(id),
    },
    data: {
      status,
    },
  });
};

export const remove = async (id) => {
  return await prisma.volunteerRegistration.delete({
    where: {
      id: Number(id),
    },
  });
};