import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const MY_DETAILS = {
  name: "Mridha Imran Kabir",
  title: "Backend Developer",
  company: "Phone Tech BD Ltd",
  email: "imrankabir325@gmail.com",
  phoneNo: "+880 1614 126 363",
  address: "M.A Bari St, Sonadanga, Khulna",
};

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Computer Science graduate from Khulna University with a focus on backend development and full-stack web technologies. Currently working as a Backend Developer at Phone Tech BD Ltd, I specialize in building efficient server-side applications using Laravel, PHP, and MySQL. My internship at Unicorn Software and Solutions enhanced my skills in configuring web environments and collaborating on back-end development. Proficient in C/C++, Java, JavaScript, and PHP, I have experience developing responsive web applications and personal portfolios. I'm passionate about problem-solving, regularly practicing on LeetCode and HackerRank.`;

export const EXPERIENCES = [
  {
    year: "January, 2024 - Present",
    role: "Backend Developer",
    company: "Phone Tech BD Ltd",
    description: `Developing and maintaining server-side applications using PHP, Laravel, and MySQL.
    Utilizing Livewire occasionally for front-end components. Delivering high-quality code with a focus on continuous improvement`,
    technologies: [
      "Php",
      "Laravel",
      "Livewire",
      "MySQL",
      "Javascript",
      "Github",
    ],
  },
  {
    year: "JJun. 2023 – Aug. 2023",
    role: "Internship",
    company: "Unicorn Software and Solutions ",
    description: `Collaborated on back-end development and performed SQL database CRUD operations.`,
    technologies: ["Php", "Laravel", "MySQL", "Javascript", "Github"],
  },
];

export const EDUCATIONS = [
  {
    title: "B.Sc in CSE",
    name: "Khulna University",
    location: "Khulna-9208, Bangladesh",
    year: "January, 2018 - March 2023",
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
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];
