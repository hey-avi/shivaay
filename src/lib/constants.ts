import type { LucideIcon } from "lucide-react";
import { Mail, Linkedin, Github, Twitter as TwitterIcon, Users } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  dataAiHint: string;
  summary: string;
  bioHighlights: string[];
  contactLinks: {
    type: "email" | "linkedin" | "github" | "twitter";
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "avinash",
    name: "Avinash",
    role: "Lead Developer & Strategist",
    photoUrl: "https://photosly.in/wp-content/uploads/2024/03/instagram-cartoon-dp6-1.jpg",
    dataAiHint: "professional man",
    summary: "Avinash is a B.Tech 2nd-year student with a strong passion for web development and strategic thinking. He enjoys building clean, user-friendly applications and is always eager to learn new technologies.",
    bioHighlights: [
      "Loves to think differently and execute things.",
      "Currently learning AI and exploring new technologies.",
      "Works with Next.js and other modern frameworks.",
    ],
    contactLinks: [
      { type: "email", url: "mailto:avinash.meena2023@glbajajgroup.org" },
      { type: "linkedin", url: "https://www.linkedin.com/in/just-a-fresher/" },
      { type: "github", url: "https://github.com/hey-avi" },
    ],
  },
  {
    id: "neha",
    name: "Neha",
    role: "Frontend Developer & UI/UX Enthusiast",
    photoUrl: "https://photoscollection.in/wp-content/uploads/2024/08/Cartoon-Girl-DP88.jpg",
    dataAiHint: "professional woman",
    summary: "Neha is a creative B.Tech 2nd-year student with a keen eye for detail and a love for beautiful design. She specializes in frontend development, focusing on creating intuitive and accessible user experiences.",
    bioHighlights: [
      "Creative mind with an eye for detail.",
      "Learning HTML, CSS, and modern JS frameworks.",
      "Focuses on intuitive and accessible design.",
    ],
    contactLinks: [
      { type: "email", url: "mailto:neha.kumari2023@glbajajgroup.org" },
      { type: "linkedin", url: "https://www.linkedin.com/in/hey-neha/" },
      { type: "github", url: "https://github.com/hey-nehaa" },
    ],
  },
  {
    id: "deepak",
    name: "Deepak",
    role: "Backend Developer",
    photoUrl: "https://www.dpzone.in/wp-content/uploads/1/Cartoon-DP-for-WhatsApp-08.jpg",
    dataAiHint: "tech student man",
    summary: "Deepak is a driven B.Tech 2nd-year student who focuses on the server-side of applications. He is interested in building scalable, secure systems and enjoys tackling complex technical challenges.",
    bioHighlights: [
      "Focuses on server-side logic and database management.",
      "Interested in building scalable and secure applications.",
      "Enjoys solving complex technical challenges.",
    ],
    contactLinks: [
      { type: "email", url: "mailto:deepak.verma2023@glbajajgroup.org" },
      { type: "linkedin", url: "https://www.linkedin.com/in/deepak-verma-6476112a3/" },
      { type: "github", url: "https://github.com/octabot" },
    ],
  },
];

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
}

export const skills: Skill[] = [
  { id: "wordpress", name: "WordPress", level: 90 },
  { id: "html", name: "HTML5", level: 95 },
  { id: "php", name: "PHP", level: 85 },
  { id: "css", name: "CSS3", level: 92 },
  { id: "javascript", name: "JavaScript", level: 80 },
  { id: "react", name: "React/Next.js", level: 75 },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    id: "techspire-team",
    title: "Techspire Team Website",
    description: "The official team website for Techspire, showcasing projects, team members, and skills. Built with modern web technologies.",
    imageUrl: "https://socialify.git.ci/hey-avi/techspire-team/png?font=Jost&language=1&name=1&pattern=Charlie+Brown&theme=Auto",
    dataAiHint: "website project",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveLink: "https://github.com/hey-avi/techspire-team",
    repoLink: "https://github.com/hey-avi/techspire-team",
  },
  {
    id: "project-wip",
    title: "Exciting Things Are On The Way",
    description: "We are passionately working on new and innovative projects. Stay tuned to see what we build next!",
    imageUrl: "https://www.noblewebstudio.com/images/mobile-app-development.png",
    dataAiHint: "app development",
    tags: ["In Progress", "Innovation"],
    isPlaceholder: true,
  },
];

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  dataAiHint: string;
  date: string; // e.g., "October 26, 2023"
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Future of Web Development with Next.js 14",
    summary: "Exploring the latest features and improvements in Next.js 14 and how they impact modern web development practices.",
    imageUrl: "https://cdn-images-1.medium.com/v2/resize:fit:1600/1*oWTDWneR-SsfQ5_jmYcqOg.png",
    dataAiHint: "web development",
    date: "May 28, 2025",
    author: "Avinash",
    slug: "future-of-web-dev-nextjs-14",
  },
  {
    id: "blog-2",
    title: "Mastering Responsive Design Principles",
    summary: "A deep dive into creating websites that adapt flawlessly to any screen size, ensuring optimal user experience.",
    imageUrl: "https://uxmag.com/wp-content/uploads/2020/10/1400x765RD.png",
    dataAiHint: "responsive design",
    date: "May 22, 2025",
    author: "Neha",
    slug: "mastering-responsive-design",
  },
  {
    id: "blog-3",
    title: "Secure Authentication in PHP Applications",
    summary: "Best practices for implementing robust and secure user authentication systems in PHP-based web applications.",
    imageUrl: "https://www.timusnetworks.com/wp-content/uploads/2024/10/blog-kapak-gorseli-Secure-Authentication-1.jpg",
    dataAiHint: "coding security",
    date: "May 15, 2025",
    author: "Deepak",
    slug: "secure-php-authentication",
  },
];

export const allProjectTags = Array.from(new Set(projects.flatMap(p => p.tags)));

export const teamMemberIconMap: { [key: string]: LucideIcon } = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  twitter: TwitterIcon,
  default: Users, 
};
