import project1 from "../assets/projects/bookStore.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const MY_DETAILS = {
  name: "Mridha Imran Kabir",
  title: "IT Engineer",
  company: "BIFPCL",
  companyLink: "https://www.bifpcl.com/",
  email: "imrankabir325@gmail.com",
  phoneNo: "+880 1614 126 363",
  address: "Rampal, Bagerhat, Bangladesh",
};


// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hi, I'm Mridha Imran Kabir, a backend-focused full-stack developer with a passion for Python and Django. Currently, I'm an IT Engineer at BIFPCL. I honed my skills at Barikoi and Phone Tech BD, building scalable web applications with technologies like Django, Laravel, and React.`;


export const SKILLSETS = [
  "Python (Django, Django REST Framework)",
  "PHP (Laravel, Livewire)",
  "JavaScript (React, Vue.js)",
  "Databases (MySQL, PostgreSQL, MongoDB)",
  "API Design (RESTful APIs)",
  "Frontend (HTML, CSS, TailwindCSS)",
  "DevOps (AWS, Nginx, Docker)",
  "Tools (Git, GitHub)",
  "Problem Solving (LeetCode, HackerRank)",
];

export const EXPERIENCES = [
  {
    year: "June, 2025 - Present",
    role: "IT Engineer",
    company: "BIFPCL",
    description: `Currently contributing to the IT operations and infrastructure at BIFPCL.`,
    technologies: ["System Administration", "IT Support"],
  },
  {
    year: "January, 2025 - June, 2025",
    role: "Junior Software Engineer",
    company: "Barikoi Maps",
    description: `Building scalable, location-intelligent backend systems using Laravel and MySQL. Working with Laravel Websockets, Redis, and advanced geospatial queries. Collaborating on Docker and AWS-based deployments.`,
    technologies: ["PHP", "Laravel", "Redis", "MySQL", "Nginx", "AWS", "Geospatial Queries"],
  },
  {
    year: "January, 2024 - January, 2025",
    role: "Backend Developer",
    company: "Phone Tech BD Ltd",
    description: `Led backend development for two large-scale applications from scratch. Enhanced application performance using Laravel, Livewire, and MySQL. Delivered secure and efficient APIs with clean, maintainable code.`,
    technologies: ["PHP", "Laravel", "Livewire", "MySQL", "JavaScript", "GitHub"],
  },
  {
    year: "June 2023 – August 2023",
    role: "Backend Intern",
    company: "Unicorn Software and Solutions",
    description: `Assisted in backend development and performed SQL-based data operations for internal tools. Collaborated closely with the team to learn best practices in Laravel and Git workflows.`,
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "GitHub"],
  },
  {
    year: "July 2022 - October 2022",
    role: "IT Intern",
    company: "ICT Cell, Khulna University",
    description: `Supported software and data management operations. Gained exposure to system infrastructure and network services.`,
    technologies: ["Data Management", "Software Tools", "Network Basics"],
  },
];


export const EDUCATIONS = [
  {
    title: "B.Sc in CSE",
    name: "Khulna University",
    location: "Khulna-9208, Bangladesh",
    year: "January, 2018 - March 2024",
  },
  {
    title: "HSC",
    name: "Digraj Degree College",
    location: "Mongla, Bagerhat",
    year: "July, 2014 - August, 2016",
  },
  {
    title: "SSC",
    name: "Sreefaltala Pilot Secondary School",
    location: "Rampal, Bagerhat",
    year: "Feruary 2012 - June 2014",
  },
  {
    title: "JSC",
    name: "Hurka SN High School",
    location: "Rampal, Bagerhat",
    year: "January, 2009 - February, 2012",
  },
  {
    title: "PSC",
    name: "Hurka Govt. Primary School",
    location: "Rampal, Bagerhat",
    year: "July, 2007 - December, 2008",
  },
  {
    title: "Primary",
    name: "Shisu Mongal Govt. Primary School",
    location: "Cantonment, Dhaka",
    year: "January, 2004 - July, 2007",
  },
];

export const PROJECTS = [
  {
    title: "Shifttrek – Employee Management System",
    appLink: "https://www.shifttrek.com/",
    gitLink: "https://www.shifttrek.com/",
    image: project4,
    description:
      "An efficient workforce scheduling and shift-tracking platform built for businesses. Focused on reliability and performance using Laravel + Livewire.",
    technologies: ["Laravel", "Livewire", "AlpineJS", "TailwindCSS", "MySQL"],
  },
  {
    title: "Task Manager – Full Stack Productivity Tool",
    appLink: "https://task-manager-live.vercel.app/tasks",
    gitLink: "https://github.com/imrankabir02/task-manager.git",
    image: project3,
    description:
      "A fully responsive task manager with Django REST API and React (TypeScript). Features include authentication, status tracking, and data persistence.",
    technologies: ["React", "TailwindCSS", "Django", "REST API", "PostgreSQL"],
  },
  {
    title: "Book Store – MERN Stack E-Commerce (Ongoing)",
    appLink: "https://book-store-mern-psi.vercel.app",
    gitLink: "https://github.com/imrankabir02/book-store-MERN.git",
    image: project1,
    description:
      "An e-commerce web app under development using the MERN stack. Includes category browsing, cart features, and secure login system.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
  },
  {
    title: "Chat App – Real-Time Messaging (Ongoing)",
    appLink: "https://live-chat-delta-pink.vercel.app",
    gitLink: "https://github.com/imrankabir02/LiveChat.git",
    image: project2,
    description:
      "A real-time chat application powered by MERN stack. Features include user authentication, message persistence, and live updates.",
    technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
  },
];
