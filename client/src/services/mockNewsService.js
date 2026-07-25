// src/services/mockNewsService.js

const mockNewsItems = [
  {
    id: 1,
    slug: "annual-dance-festival-2026-announcement",
    title: "Annual Dance Festival 2026 - Call for Participation",
    category: "Announcements",
    date: "15 June 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "KITD announces its annual dance festival for 2026, inviting performers and artists from across Germany to participate in this cultural celebration.",
    content: "<p>KITD is proud to announce the Annual Dance Festival 2026...</p>",
    featured: true,
    author: "Priya Sharma",
    authorRole: "Festival Director",
    authorImage: "https://images.unsplash.com/photo-1494790108378-be9c3b7c0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    slug: "spanda-workshop-berlin-march-2026",
    title: "SPANDA Workshop: Berlin Edition - March 2026",
    category: "Workshops",
    date: "10 March 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Join us for an immersive SPANDA workshop in Berlin, exploring the fundamentals of Indian classical dance with renowned instructors.",
    content: "<p>The SPANDA workshop series continues in Berlin...</p>",
    featured: false,
    author: "Michael Weber",
    authorRole: "Workshop Coordinator",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    slug: "new-community-members-2026",
    title: "Welcoming Our New Community Members",
    category: "Community",
    date: "5 March 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "KITD extends a warm welcome to our newest community members who have joined us in preserving and promoting Indian classical dance.",
    content: "<p>We are delighted to welcome our new community members...</p>",
    featured: false,
    author: "Anna Schmidt",
    authorRole: "Community Manager",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    slug: "nritya-vani-newsletter-january-2026",
    title: "Nritya Vani - January 2026 Edition",
    category: "Newsletters",
    date: "20 January 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "The January edition of Nritya Vani features community stories, upcoming programmes, artist highlights and association updates.",
    content: "<p>Welcome to the January edition of Nritya Vani...</p>",
    featured: false,
    author: "Sarah Johnson",
    authorRole: "Newsletter Editor",
    authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    slug: "new-partnership-cultural-exchange-2026",
    title: "New Partnership for Cultural Exchange Programme",
    category: "Partnerships",
    date: "15 February 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "KITD announces a new partnership to expand cultural exchange programmes between Indian and German dance communities.",
    content: "<p>We are excited to announce a new partnership...</p>",
    featured: false,
    author: "Thomas Müller",
    authorRole: "Partnership Director",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    slug: "member-spotlight-spring-2026",
    title: "Member Spotlight: Celebrating Our Artists",
    category: "Members",
    date: "1 February 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Spotlighting the talented artists and members who contribute to the vibrant KITD community.",
    content: "<p>In this edition of Member Spotlight...</p>",
    featured: false,
    author: "Maria Garcia",
    authorRole: "Member Relations",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 7,
    slug: "european-dance-collaboration-2026",
    title: "European Dance Collaboration Initiative",
    category: "Events",
    date: "25 January 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "KITD participates in a European dance collaboration, bringing together diverse classical dance traditions.",
    content: "<p>KITD is proud to participate in a European dance collaboration...</p>",
    featured: false,
    author: "David Chen",
    authorRole: "Programme Director",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 8,
    slug: "community-gathering-frankfurt-2026",
    title: "Community Gathering: Frankfurt Edition",
    category: "Community",
    date: "15 January 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Join us for a community gathering in Frankfurt, celebrating dance, culture, and community spirit.",
    content: "<p>The Frankfurt community gathering brought together dance enthusiasts...</p>",
    featured: false,
    author: "Lisa Wagner",
    authorRole: "Event Coordinator",
    authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 9,
    slug: "new-workshop-series-2026",
    title: "Introducing Our 2026 Workshop Series",
    category: "Workshops",
    date: "10 January 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "KITD announces its comprehensive workshop series for 2026, covering multiple dance forms and skill levels.",
    content: "<p>We are excited to announce our 2026 workshop series...</p>",
    featured: false,
    author: "Robert Fischer",
    authorRole: "Workshop Director",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 10,
    slug: "annual-report-2025",
    title: "KITD Annual Report 2025 - Key Highlights",
    category: "Announcements",
    date: "5 January 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Our 2025 annual report highlights the achievements, growth, and community impact of KITD across Germany.",
    content: "<p>We are proud to present our 2025 annual report...</p>",
    featured: true,
    author: "KITD Executive Committee",
    authorRole: "Executive Committee",
    authorImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const mockNewsletterData = {
  title: "Nritya Vani Newsletter",
  description: "Read our latest newsletter featuring community stories, upcoming programmes, artist highlights and association updates.",
  image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  latestLink: "/news/nritya-vani-newsletter-january-2026",
  editions: [
    { title: "January 2026", link: "/news/nritya-vani-january-2026" },
    { title: "October 2025", link: "/news/nritya-vani-october-2025" },
    { title: "July 2025", link: "/news/nritya-vani-july-2025" },
    { title: "April 2025", link: "/news/nritya-vani-april-2025" }
  ]
};

export const getNewsItems = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockNewsItems;
};

export const getFeaturedNews = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNewsItems.filter(item => item.featured);
};

export const getNewsCategories = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return [...new Set(mockNewsItems.map(item => item.category))];
};

export const getNewsletterData = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockNewsletterData;
};

export const getArchiveYears = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  const years = [...new Set(mockNewsItems.map(item => item.date.split(" ").pop()))];
  return years.sort((a, b) => b - a);
};

export const getNewsByCategory = async (category) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNewsItems.filter(item => item.category === category);
};

export const getNewsByYear = async (year) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNewsItems.filter(item => item.date.includes(year));
};

export const getNewsItemBySlug = async (slug) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNewsItems.find(item => item.slug === slug);
};

export const getRelatedNews = async (itemId, category) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNewsItems
    .filter(item => item.id !== itemId && item.category === category)
    .slice(0, 3);
};