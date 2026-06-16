import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Transformer WAF",
    category: "AI-Driven Threat Detection",
    description:
      "An AI-driven Web Application Firewall using Transformer models for real-time HTTP anomaly and threat detection with 95% accuracy. Integrated with Nginx/Apache with REST APIs, a web UI, and an automated retraining pipeline.",
    tech: ["Python", "FastAPI", "PyTorch", "SQLite", "Docker"],
    href: "https://github.com/kuldeep31016/Web-Application-Firewall",
  },
  {
    title: "Net Zero Campus",
    category: "Sustainability SaaS Dashboard",
    description:
      "A full-stack SaaS dashboard with real-time analytics, AI-driven insights, and gamified resource tracking engaging 300+ users. Multi-tenant role-based authentication and consumption analytics improved goal tracking by 40%.",
    tech: ["React.js", "Node.js", "MongoDB", "Firebase", "OpenAI API"],
    href: "https://github.com/kuldeep31016/netzero-campus-platform",
  },
  {
    title: "Nabha Telemedicine",
    category: "AI-Powered Health Platform",
    description:
      "An AI-powered telemedicine platform connecting 500+ rural patients and doctors, improving communication efficiency by 40%. Emergency response, multilingual, and offline-first features boosted accessibility by 35%.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/kuldeep31016/Telemedicine",
  },
];
