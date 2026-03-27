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
    title: "Service Link Communicator",
    description: "A comprehensive web platform connecting service seekers with reliable service providers. Features a custom dashboard and robust category routing.",
    category: "Full Stack",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    imageUrl: "/placeholder-project.jpg",
    link: "https://github.com",
  },
  {
    id: "02",
    title: "E-Commerce Checkout Redesign",
    description: "An extensive user experience overhaul utilizing Hierarchical Task Analysis (HTA) and GOMS modeling to drastically reduce checkout friction.",
    category: "UI/UX",
    techStack: ["Figma", "Journey Mapping", "Prototyping"],
    imageUrl: "/placeholder-project.jpg",
    link: "https://figma.com",
  },
  {
    id: "03",
    title: "Enterprise Inventory Engine",
    description: "A secure, high-performance backend system built for relational data management, real-time inventory tracking, and complex reporting.",
    category: "Backend",
    techStack: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
    imageUrl: "/placeholder-project.jpg",
    link: "https://github.com",
  },
  {
    id: "04",
    title: "Audit Analytics Dashboard",
    description: "An internal dashboard designed for tracking quality assurance metrics and visualizing risk-based audit planning data.",
    category: "Full Stack",
    techStack: ["Laravel", "MySQL", "React", "Chart.js"],
    imageUrl: "/placeholder-project.jpg",
    link: "https://github.com",
  }
];