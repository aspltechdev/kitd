import prisma from "../config/prisma.js";

export const getDashboardStats = async () => {
  const [
    banners,
    teams,
    activities,
    events,
    artists,
    gallery,
    news,
    memberships,
    contacts,
  ] = await Promise.all([
    prisma.banner.count(),
    prisma.team.count(),
    prisma.activity.count(),
    prisma.event.count(),
    prisma.artist.count(),
    prisma.gallery.count(),
    prisma.news.count(),
    prisma.membership.count(),
    prisma.contact.count(),
  ]);

  const recentEvents = await prisma.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  const recentNews = await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  const latestMemberships = await prisma.membership.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  const latestContacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return {
    statistics: {
      banners,
      teams,
      activities,
      events,
      artists,
      gallery,
      news,
      memberships,
      contacts,
    },
    recentEvents,
    recentNews,
    latestMemberships,
    latestContacts,
  };
};