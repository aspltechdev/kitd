import prisma from "../config/prisma.js";

export const getHomeData = async () => {
  const [
    banners,
    activities,
    events,
    artists,
    gallery,
    news,
    testimonials,
    partners,
    settings,
  ] = await Promise.all([
    prisma.banner.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    }),

    prisma.activity.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    }),

    prisma.event.findMany({
      where: { isActive: true },
      take: 6,
      orderBy: {
        eventDate: "asc",
      },
    }),

    prisma.artist.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    }),

    prisma.gallery.findMany({
      take: 12,
      orderBy: { createdAt: "desc" },
    }),

    prisma.news.findMany({
      take: 4,
      orderBy: {
        publishedAt: "desc",
      },
    }),

    prisma.testimonial.findMany({
      where: { isActive: true },
    }),

    prisma.partner.findMany({
      where: { isActive: true },
    }),

    prisma.setting.findFirst(),
  ]);

  return {
    banners,
    activities,
    events,
    artists,
    gallery,
    news,
    testimonials,
    partners,
    settings,
  };
};