// src/services/mockGalleryService.js

// Mock data
const mockGalleryItems = [
  {
    id: 1,
    slug: "bharatanatyam-performance-berlin-2026",
    title: "Bharatanatyam Performance",
    category: "Performances",
    location: "Berlin",
    date: "15 June 2026",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A mesmerizing Bharatanatyam performance at the Berlin Cultural Centre, showcasing the grace and precision of classical Indian dance.",
    size: "large",
    featured: true,
    relatedEvent: {
      title: "Berlin Dance Festival 2026",
      slug: "berlin-dance-festival-2026",
      description: "Annual dance festival featuring performances from renowned classical dancers."
    }
  },
  {
    id: 2,
    slug: "spanda-workshop-munich-2026",
    title: "SPANDA Workshop",
    category: "Workshops",
    location: "Munich",
    date: "10 May 2026",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Interactive SPANDA workshop introducing participants to the fundamentals of Indian classical dance.",
    size: "medium",
    featured: true
  },
  {
    id: 3,
    slug: "annual-dance-festival-2025",
    title: "Annual Dance Festival 2025",
    category: "Festivals",
    location: "Hamburg",
    date: "20 December 2025",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The grand annual dance festival celebrating Indian classical dance with performances from artists across Germany.",
    size: "large",
    featured: true
  },
  {
    id: 4,
    slug: "community-gathering-frankfurt-2026",
    title: "Community Gathering",
    category: "Community",
    location: "Frankfurt",
    date: "5 March 2026",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A warm community gathering bringing together dance enthusiasts, artists, and supporters.",
    size: "medium"
  },
  {
    id: 5,
    slug: "kitd-meeting-cologne-2026",
    title: "KITD Executive Meeting",
    category: "Meetings",
    location: "Cologne",
    date: "25 January 2026",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Strategic planning meeting for KITD's upcoming events and initiatives.",
    size: "small"
  },
  {
    id: 6,
    slug: "kathak-workshop-berlin-2026",
    title: "Kathak Workshop",
    category: "Workshops",
    location: "Berlin",
    date: "2 April 2026",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Intensive Kathak workshop led by renowned artists exploring rhythm and expression.",
    size: "medium"
  },
  {
    id: 7,
    slug: "odissi-performance-munich-2026",
    title: "Odissi Performance",
    category: "Performances",
    location: "Munich",
    date: "18 April 2026",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A captivating Odissi performance featuring graceful movements and intricate poses.",
    size: "medium"
  },
  {
    id: 8,
    slug: "summer-festival-hamburg-2026",
    title: "Summer Dance Festival",
    category: "Festivals",
    location: "Hamburg",
    date: "15 July 2026",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A vibrant summer festival celebrating Indian classical dance with performances and workshops.",
    size: "large"
  }
];

const mockEventHighlights = [
  {
    id: 1,
    slug: "annual-dance-festival-2026",
    title: "Annual Dance Festival 2026",
    description: "A celebration of classical dance with performances from artists across Germany.",
    location: "Berlin",
    date: "15 June 2026",
    attendees: 350,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    slug: "spanda-workshop-series",
    title: "SPANDA Workshop Series",
    description: "Monthly workshops exploring the fundamentals of Indian classical dance.",
    location: "Multiple Cities",
    date: "10 May 2026",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    slug: "community-gathering-2026",
    title: "Community Gathering",
    description: "Bringing together the KITD community for cultural exchange and celebration.",
    location: "Frankfurt",
    date: "5 March 2026",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    slug: "youth-programme-2026",
    title: "Youth Dance Programme",
    description: "Engaging the next generation through dance workshops and mentorship.",
    location: "Hamburg",
    date: "10 April 2026",
    attendees: 80,
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const mockCommunityStats = [
  { number: "500+", label: "Community Members" },
  { number: "50+", label: "Events Organized" },
  { number: "15+", label: "Cities Across Germany" },
  { number: "10+", label: "Years of Excellence" }
];

// Service functions - Replace with actual API calls
export const getGalleryItems = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockGalleryItems;
};

export const getFeaturedMoments = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockGalleryItems.filter(item => item.featured);
};

export const getEventHighlights = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockEventHighlights;
};

export const getCommunityStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockCommunityStats;
};

export const getFilterOptions = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  const categories = ["All", ...new Set(mockGalleryItems.map(item => item.category))];
  const years = ["All Years", ...new Set(mockGalleryItems.map(item => item.date.split(" ").pop()))];
  const cities = ["All Cities", ...new Set(mockGalleryItems.map(item => item.location))];
  return { categories, years, cities };
};

export const getGalleryItemBySlug = async (slug) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockGalleryItems.find(item => item.slug === slug);
};

export const getRelatedGalleryItems = async (itemId, category) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockGalleryItems
    .filter(item => item.id !== itemId && item.category === category)
    .slice(0, 4);
};