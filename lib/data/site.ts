import type { NavLink, SocialLink } from "./types";

export const site = {
  name: "Kuldeep Raj",
  initials: "KR",
  role: "Full-Stack Software Engineer",
  title: "Kuldeep Raj — Full-Stack Software Engineer",
  description:
    "Third-year Computer Science engineer building production-grade SaaS platforms, REST APIs, and AI-powered applications across the full stack — React, FastAPI, PostgreSQL, Docker, and AWS.",
  url: "https://kuldeepraj.dev",
  email: "iamkuldeepraj55@gmail.com",
  phone: "+91 95088 74235",
  phoneHref: "tel:+919508874235",
  github: "https://github.com/kuldeep31016",
  githubHandle: "github.com/kuldeep31016",
  linkedin: "https://www.linkedin.com",
  resumePath: "/Kuldeep_Raj_Resume.pdf",
  accent: "#9A6B3C",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];
