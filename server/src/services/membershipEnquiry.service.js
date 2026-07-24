import prisma from "../config/prisma.js";

export const getAll = async () => {
  return await prisma.membershipEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getById = async (id) => {
  return await prisma.membershipEnquiry.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const create = async (data) => {
  return await prisma.membershipEnquiry.create({
    data: {
      ...data,
      status: "NEW",
    },
  });
};

export const updateStatus = async (id, status) => {
  return await prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status,
    },
  });
};

export const approve = async (id) => {
  const enquiry = await prisma.membershipEnquiry.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!enquiry) {
    throw new Error("Membership enquiry not found");
  }

  const member = await prisma.member.create({
    data: {
      photo: enquiry.photo,
      fullName: enquiry.fullName,
      email: enquiry.email,
      mobile: enquiry.mobile,
      gender: enquiry.gender,
      membershipType: enquiry.membershipType,
      city: enquiry.city,
      state: enquiry.state,
      country: enquiry.country,
      joinedDate: new Date(),
      isActive: true,
    },
  });

  await prisma.membershipEnquiry.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "APPROVED",
    },
  });

  return member;
};

export const remove = async (id) => {
  return await prisma.membershipEnquiry.delete({
    where: {
      id: Number(id),
    },
  });
};