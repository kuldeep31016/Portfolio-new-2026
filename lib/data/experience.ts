import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    period: "Nov 2025 — Mar 2026",
    role: "Full-Stack Developer",
    company: "MyDukan",
    type: "Internship",
    commitment: "Full-time",
    points: [
      "Shipped multi-tenant SaaS ERP features; architected Redux + RTK Query state across product, inventory, and billing modules — cutting redundant API calls and improving frontend performance by 30%.",
      "Redesigned product and stock workflows handling 10K+ SKUs per tenant, improving data consistency and overall UI quality.",
    ],
  },
  {
    period: "Oct 2025 — Jan 2026",
    role: "Full-Stack Developer",
    company: "Vrittify AI",
    type: "Internship",
    commitment: "Part-time",
    points: [
      "Developed scalable modules using React.js, Express, and MongoDB in a team of 5+, contributing to a 30% improvement in feature delivery speed.",
      "Designed and deployed RESTful APIs for production use, ensuring reliability and maintainability across distributed services.",
    ],
  },
  {
    period: "Nov 2025 — Jan 2026",
    role: "Backend Developer",
    company: "Dealora",
    type: "Internship",
    commitment: "Part-time",
    points: [
      "Built and optimized RESTful APIs, database schemas, and automated background jobs for a coupon-based mobile app.",
      "Handled real-time data synchronization and improved overall system reliability under production load.",
    ],
  },
];
