export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "UI/UX" | "Backend";
  techStack: string[];
  imageUrl: string;
  link: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "NutriMind",
    description: "An AI-powered personalized nutrition and meal planner designed to help users track their dietary goals and generate smart meal recommendations.",
    category: "Full Stack",
    techStack: ["Figma", "Journey Mapping", "Prototyping"],
    imageUrl: "/NutriMind.png",
    link: "https://www.figma.com/design/kSBN6j5NP6aRVSzrrZ5jfh/HCI?node-id=0-1&t=ZA6Pp3ClyDEvD5BO-1",
  },
  {
    id: "02",
    title: "7-EVELYN",
    description: "A simple e-commerce site mock-up focused on a modern shopping experience. This application features product browsing, search, filtering, a shopping cart, and a secure checkout process.",
    category: "UI/UX",
    techStack: ["React", "Vite", "Tailwind CSS"],
    imageUrl: "/7-evelyn.png",
    link: "https://7-evelyn-gilt.vercel.app/",
  },
  {
    id: "03",
    title: "OS Portfolio",
    description: "The older version of my portfolio where i take inspiration from.",
    category: "UI/UX",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/os-portfolio.png",
    link: "https://os-portfolio-maeann.vercel.app/",
  },
];