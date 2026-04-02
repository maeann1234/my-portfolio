export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "01",
    title: "Bridging the Gap Between UI/UX and Full Stack Development",
    slug: "bridging-ui-ux-full-stack",
    excerpt: "Why understanding GOMS modeling and Hierarchical Task Analysis makes you a better Next.js developer.",
    content: [
      "In the world of modern web development, there is often a harsh dividing line between the designers who dream up the interface and the engineers who build it. But as applications become more complex, that divide is becoming a massive bottleneck.",
      "By integrating UX research frameworks like Hierarchical Task Analysis (HTA) directly into my development workflow, I've found that component architecture becomes exponentially clearer. When you know exactly how a user intends to navigate a checkout flow, building the state management in React becomes a natural extension of that user journey.",
      "Ultimately, writing clean code is only half the battle. If the interface doesn't respect the user's cognitive load, the underlying technical brilliance doesn't matter."
    ],
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "UI/UX",
    imageUrl: "https://plus.unsplash.com/premium_photo-1720903984909-04be5b4cda06?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "02",
    title: "Architecting the Service Link Communicator",
    slug: "architecting-service-link-communicator",
    excerpt: "A deep dive into the routing and database architecture behind connecting service seekers and providers.",
    content: [
      "Building a multi-sided platform comes with unique challenges, specifically when it comes to state management and user routing based on their role.",
      "For the Service Link Communicator, the core challenge was ensuring that the dashboard dynamically adapted whether the active session belonged to a service seeker or a provider. This required a robust PostgreSQL schema and strict middleware checks in Next.js.",
      "The result was a seamless experience where data flows instantly between parties, proving that a solid backend architecture is the ultimate foundation for a great user experience."
    ],
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Full Stack",
    imageUrl: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "03",
    title: "Why C# and .NET Core Still Rule Enterprise Backends",
    slug: "csharp-dotnet-enterprise-backends",
    excerpt: "Exploring the performance and security benefits of strongly typed backend architectures for complex systems.",
    content: [
      "While JavaScript frameworks dominate the frontend conversation, C# and .NET Core remain absolute heavyweights when it comes to enterprise-grade backend infrastructure.",
      "Building the Enterprise Inventory Engine taught me the sheer power of Entity Framework and strongly typed data models. Catching errors at compile time rather than runtime saves countless hours of debugging when dealing with massive relational databases.",
      "The performance enhancements in the latest iterations of .NET prove that the ecosystem is not just surviving, but actively evolving to meet the demands of modern web applications."
    ],
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Backend",
    imageUrl: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];