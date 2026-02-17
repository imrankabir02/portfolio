import project1 from "../assets/projects/bookStore.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import smoketracker from "../assets/projects/smoketracker.png";

export const MY_DETAILS = {
  name: "Mridha Imran Kabir",
  title: "Backend Engineer | Laravel & Django | Production Systems",
  company: "BIFPCL",
  companyLink: "https://www.bifpcl.com/",
  email: "imrankabir325@gmail.com",
  phoneNo: "+8801614126363",
  address: "Bagerhat, Bangladesh",
};

export const ABOUT_TEXT = `Backend engineer with 5+ years of experience designing, building, and stabilizing production-grade web applications. Strong expertise in Laravel, Django, MySQL, and REST API architecture.

Experienced in performance optimization, database indexing, query tuning, caching (Redis), background jobs, and secure authentication mechanisms. Worked with Docker-based environments, Linux servers, Nginx, and AWS-hosted deployments.

Focused on backend reliability, scalability, and clean architecture for high-traffic systems.`;

export const SKILLSETS = [
  "Laravel (Advanced, REST API Architecture)",
  "Python (Django, Django REST Framework)",
  "MySQL (Indexing, Query Optimization, Performance Tuning)",
  "Redis (Caching, Queues)",
  "Background Jobs & Scheduled Tasks",
  "RESTful API Design & Secure Authentication",
  "Linux Server Management (Ubuntu)",
  "Nginx & PHP-FPM Configuration",
  "Docker (Containerized Deployment)",
  "AWS (EC2 Deployment)",
  "Git & Version Control",
];

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "IT Engineer",
    company: "BIFPCL",
    description: `Managing IT infrastructure, Linux-based systems, and production stability. Supporting system reliability, monitoring, and secure operations within enterprise-level environments.`,
    technologies: ["Linux", "System Administration", "Network Services"],
  },
  {
    year: "January 2025 - June 2025",
    role: "Software Engineer",
    company: "Barikoi Maps",
    description: `Developed and optimized location-intelligent backend systems using Laravel and MySQL. Implemented geospatial queries and indexing for efficient spatial filtering. Integrated Redis for caching and queue handling. Worked with Laravel WebSockets for real-time features. Contributed to Docker-based deployments and AWS-hosted production environments. Improved API performance through structured indexing and query optimization.`,
    technologies: [
      "Laravel",
      "MySQL",
      "Redis",
      "WebSockets",
      "Docker",
      "AWS",
      "Geospatial Queries",
    ],
  },
  {
    year: "January 2024 - January 2025",
    role: "Backend Developer",
    company: "Phone Tech BD Ltd",
    description: `Led backend development of two Laravel-based applications from scratch. Designed scalable REST APIs, structured database schemas, and optimized queries for performance. Implemented secure authentication, validation, and modular architecture. Refactored legacy modules to improve maintainability and system stability.`,
    technologies: [
      "Laravel",
      "MySQL",
      "Livewire",
      "REST API",
      "Authentication",
      "Database Design",
    ],
  },
  {
    year: "June 2023 - August 2023",
    role: "Backend Intern",
    company: "Unicorn Software and Solutions",
    description: `Assisted in backend development and SQL-based data operations. Gained hands-on experience with Laravel architecture, Git workflows, and structured database management.`,
    technologies: ["Laravel", "MySQL", "Git"],
  },
];

export const EDUCATIONS = [
  {
    title: "B.Sc in Computer Science & Engineering",
    name: "Khulna University",
    location: "Khulna, Bangladesh",
    year: "January 2018 - March 2024",
  },
];

export const PROJECTS = [
  {
    title: "Shifttrek – Workforce Management System",
    appLink: "https://www.shifttrek.com/",
    gitLink: "https://www.shifttrek.com/",
    image: project4,
    description:
      "Production-grade workforce scheduling platform built with Laravel. Focused on backend stability, database efficiency, and reliable business logic handling for operational workflows.",
    technologies: ["Laravel", "MySQL", "Livewire", "TailwindCSS"],
  },
  {
    title: "Smoke Tracker – Structured Logging & Analytics System",
    appLink: "https://smoketracker01.pythonanywhere.com/",
    gitLink: "https://github.com/imrankabir02/smoke-tracker",
    image: smoketracker,
    description:
      "Backend-focused Django application designed for structured logging, statistical reporting, and data aggregation. Implemented role-based access, clean API structure, and production deployment configuration.",
    technologies: ["Django", "SQLite", "REST Architecture"],
  },
  {
    title: "Task Manager – REST API & Authentication System",
    appLink: "https://task-manager-live.vercel.app/tasks",
    gitLink: "https://github.com/imrankabir02/task-manager.git",
    image: project3,
    description:
      "Full-stack productivity system with Django REST API backend and React frontend. Designed secure authentication, structured API endpoints, and PostgreSQL-based data persistence.",
    technologies: ["Django", "React", "PostgreSQL", "REST API"],
  },
  {
    title: "Experimental MERN Backend Architecture",
    appLink: "https://book-store-mern-psi.vercel.app",
    gitLink: "https://github.com/imrankabir02/book-store-MERN.git",
    image: project1,
    description:
      "Experimental Node.js-based backend architecture focusing on modular API design and authentication workflows.",
    technologies: ["Node.js", "MongoDB", "REST API"],
  },
];
