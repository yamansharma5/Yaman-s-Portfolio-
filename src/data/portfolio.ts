// ============================================================
// PORTFOLIO DATA — Edit this file to personalize your portfolio
// ============================================================

export const personalInfo = {
  name: "Yaman",
  role: "Full Stack Developer",
  tagline: "Building scalable web apps with clean code & modern design.",
  email: "yamansharma.work@gmail.com",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1qZ71WvdwxJ7NHowJjiXeYk7mJaEzqxIm/view?usp=sharing",
  avatar: null, // Set to an image path if needed
};

export const about = `
  I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
  I love crafting clean, performant, and visually appealing web applications that solve real-world problems.
  When I'm not coding, I'm learning something new.
`;

export const skills = {
  Frontend: [
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js", "Express.js", "Next.js", "REST APIs",
    "MongoDB", "PostgreSQL",
  ],
  Tools: [
    "Git", "GitHub", "Vercel", "Postman",
    "VS Code", "GitHub Copilot", " OpenAI API",
  ],
};

export const journey = [
  {
    year: "2023",
    title: "Started Programming Journey",
    description: "Picked up C, C++ and began on HackerRank",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Web Development",
    description: "Learned HTML, CSS, JavaScript and built my first project.",
    type: "learning",
  },
  {
    year: "2025",
    title: "Web Development Deep Dive and DSA",
    description: "Learned HTML, CSS, JavaScript, Backend, Node.js, Express.js, MongoDB, React, Next.js",
    type: "education",
  },
  {
    year: "2026",
    title: "Full Stack Projects",
    description: "Developed multiple full-stack applications using React, Node.js, and MongoDB. Deployed on Vercel",
    type: "milestone",
  },
  {
    year: "2026",
    title: "Deep Dive into DSA and System Design",
    description: " ",
    type: "milestone",
  },

];

export const projects = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    description:
      "A context-aware AI chatbot built with Node.js and Hugging Face APIs featuring session management, swappable storage backends, and a responsive frontend.",
    tech: ["Node.js", "React", "Hugging Face", "MongoDB", "Express"],
    github: "https://github.com/yaman",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "MERN Broadcast App",
    description:
      "A location-based information broadcasting app that lets users share updates within a 5 km radius using geolocation APIs and real-time sockets.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Leaflet.js"],
    github: "https://github.com/yaman",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Interactive Wall Calendar",
    description:
      "A production-quality interactive wall calendar with diagonal hero overlay, note persistence via localStorage, and a date-range selectable grid.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/yaman",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Appointment Booking System",
    description:
      "Full-stack appointment booking system with Google Calendar integration, n8n workflow automation, email confirmations, and a business dashboard.",
    tech: ["Next.js", "Node.js", "Google Calendar API", "n8n", "PostgreSQL"],
    github: "https://github.com/yaman",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description:
      "This portfolio! Built with Next.js App Router, Tailwind CSS, and Framer Motion for smooth animations and a modern dark UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yaman",
    live: "",
    featured: false,
  },

];

export const achievements = [
  {
    title: "LeetCode — 100+ Problems Solved",
    description: "Consistently solving DSA problems; rated in top 60% globally.",
    icon: "code",
    date: "2026",
  },
  {
    title: "LeetCode Weekly Contest — Top 60%",
    description: "Ranked within top 60% in multiple weekly contests.",
    icon: "trophy",
    date: "2026",
  },
  {
    title: "HackerRank 4 Star Coder",
    description: "Achieved 4 star rank through consistent problem solving and contests.",
    icon: "star",
    date: "2023",
  },
  {
    title: "Hackathon Top 20",
    description: "Secured a position in the top 20 teams at a College hackathon.",
    icon: "award",
    date: "2023",
  },
];

export const certifications = [
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy / Jonas Schmedtmann",
    date: "2022",
    credentialUrl: "#",
  },
  {
    title: "React — The Complete Guide",
    issuer: "Udemy / Maximilian Schwarzmüller",
    date: "2022",
    credentialUrl: "#",
  },
  {
    title: "Node.js, Express, MongoDB & More",
    issuer: "Udemy / Jonas Schmedtmann",
    date: "2023",
    credentialUrl: "#",
  },
  {
    title: "Next.js & React — The Complete Guide",
    issuer: "Udemy / Maximilian Schwarzmüller",
    date: "2023",
    credentialUrl: "#",
  },
  {
    title: "TypeScript Bootcamp",
    issuer: "Zero To Mastery",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yamansharma5", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yamansharma06/", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/yaman05/", icon: "code2" },
  { name: "Twitter", url: "https://x.com/yaman_sharma19", icon: "twitter" },
];

export const stats = [
  { label: "LeetCode Problems", value: "100+", color: "#0ea5e9" },
  { label: "Certifications", value: `${certifications.length}`, color: "var(--accent)" },
  { label: "Contest Top %", value: "60%", color: "#0ea5e9" },
  { label: "HackerRank Stars", value: "4", color: "#0ea5e9" },
];
