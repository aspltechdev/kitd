import prisma from "../config/prisma.js";

// =======================
// Get All Registrations
// =======================
export const getAll = async () => {
  return prisma.memberRegistration.findMany({
    include: {
      enquiry: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// =======================
// Get Registration By ID
// =======================
export const getById = async (id) => {
  return prisma.memberRegistration.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      enquiry: true,
    },
  });
};

// =======================
// Create Registration
// =======================
export const create = async (data) => {
  return prisma.memberRegistration.create({
    data,
  });
};

// =======================
// Update Registration
// =======================
export const update = async (id, data) => {
  return prisma.memberRegistration.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

// =======================
// Delete Registration
// =======================
export const remove = async (id) => {
  return prisma.memberRegistration.delete({
    where: {
      id: Number(id),
    },
  });
}; 