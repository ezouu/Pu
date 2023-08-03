import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C/C++",
    icon: css,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "HTML/CSS/JS",
    icon: backend,
  },
  {
    title: "Java",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Mission San Jose High School",
    company_name: "MSJHS",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - June 2022",
    points: [
      "1510 SAT (800 MATH 710 READING)",
      "127.5 AMC 10, 120 AMC 12",
      "3.7 Unweighted GPA",
      "Presidential Gold Service Award, Class of 2022 School President, Varsity Volleyball Team Captain, Club Volleyball Open National Bronze Medalist, FTC Robotics Team 14214 Team Captain.",
    ],
  },

  {
    title: "Private Teacher/Tutor",
    company_name: "All-Star Institute",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2018 - present",
    points: [
      "Taught 100+ students total through private and group tutoring in all areas of the sciences.",
      "Taught classes on Java, Python, as well as Geometry/Algebra 2 to competitive mathematics (AMC 8, 10, 12).",
      "Wrote and develop ciriculum path for students to rapidly improve in Math Olympiad and AMC.",
      "Currently teaching math olympiad and python in person to over 20 students.",
    ],
  },
  {
    title: "University of Santa Cruz California",
    company_name: "UCSC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2022 - June 2025",
    points: [
      "Computer Science B.S.",
      "June 2025 expected graduation date",
      "4.00 GPA (Dean’s Honors List) ",
      "Slugbotics, KASA, JASA, VSA",
    ],
  },
  {
    title: "Teachers Assistant",
    company_name: "Dorota Sawicka Ph.D",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2021 - Jun 2022",
    points: [
      "Physics (PHYS1) - Assisted preparing Labs, Exams, homework, study material, and grading assignments and compiling them for over 150 students.",
      "Assisted specific students with learning issues to help them understand concepts and improve their grades.",
      "Hosted office hours and private tutoring",
    ],
  },

  {
    title: "Dining Hall Worker",
    company_name: "UCSC Cowell/Stevenson Dining Hall",
    icon: tesla,
    iconBg: "#383E56",
    date: "June 2023 - present",
    points: [
      "Work-Study Program, Performed a variety of semi-skilled and skilled food preparations, serving, maintenance, and safety and sanitation functions in the kitchen or dining area.",
      "Helped maintain a smooth and efficient workflow.",
    ],
  },
];

const projects = [
  {
    name: "Stock Market Game",
    description:
      "In progress development of Stock Market Game a few friends and I started over the summer! Project is still in it's early development but will be finished soon...",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ezouu/stock-market-game",
  },
  {
    name: "Study in C",
    description:
      "My journey through self-learning C and more assembly through an ARM based processor. The github contains my version of printf, scanf, and more for the STM32 I am using to practice. I will continue to update the repository as I finish more projects. ",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "assembly",
        color: "green-text-gradient",
      },
      {
        name: "arm",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ezouu/arm_practice",
  },
  {
    name: "Snake in Assembly",
    description:
      "RISCV Assembly Snake final project for Com Sys/Assmbly Lan (CSE12). The github also contains several other labs done for that course.",
    tags: [
      {
        name: "assembly",
        color: "blue-text-gradient",
      },
      {
        name: "riscv",
        color: "green-text-gradient",
      },
      {
        name: "classwork",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ezouu/arm_snake",
  },
  {
    name: "This Website",
    description:
      "Followed Online tutorials on Vite + React, one of my first introductions to web development! Plannning on making more sites for my other activites.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/ezouu/portfolio",
  },
  
];

export { services, experiences, projects };