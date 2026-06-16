import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "Schema Design",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Redux",
      "RTK Query",
      "HTML / CSS",
      "Tailwind",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3)",
      "Docker",
      "Firebase",
      "Linux",
      "Git / GitHub",
      "CI/CD",
    ],
  },
  {
    title: "CS Fundamentals",
    full: true,
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "System Design",
      "Distributed Systems",
    ],
  },
];
