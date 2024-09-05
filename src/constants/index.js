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
  thesparksfoundation,
  clublogo,
  ultron,
  batteryapp,
  nodemailerapp
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Automation and Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "THE SPARKS FOUNDATION",
    icon: thesparksfoundation,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Integrated real-time date, time, and battery display features into a web-based unit conversion application, which enhanced the overall user experience and contributed to a 10% increase in traffic..",
      "Focusing primarily on front-end development, Built landing pages for few web-based applications, significantly enhancing their aesthetics and user experience, which led to an average 15% increase in user retention.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-Technical Lead",
    company_name: "NIST CLOUD COMPUTING CLUB",
    icon: clublogo,
    iconBg: "#E6DEDD",
    date: "August 2021 - January 2024",
    points: [
      "Co-organized over 10 workshops and events on the NIST campus, managing a team of 30 members and engaging over 500 students.",
      "These initiatives focused on helping students develop strong technical skills, fostering a tech-oriented environment, and enhancing their awareness of current industry trends and emerging technologies, thereby contributing to their overall professional growth.",
      ,
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "It is a rollercoaster to work with Vikash.",
    name: "Asish Panigrahi",
    designation: "Software Developer",
    company: "Spikewell",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG5LRlNpO6rrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707458177901?e=1730937600&v=beta&t=iKUexSTop7lWGG9gx1w3qGUkCOlWoAURdbimMiqzNNY",
  },
  {
    testimonial:
      "It is always an honour to work with Vikash.",
    name: "Ranjan Kishor",
    designation: "App Development Associate",
    company: "Accenture",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFMl1YmU7mvOg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689690151052?e=1730937600&v=beta&t=-KBSur4mIHlRzVEv_JBaE_msSMS6yU3g50PdsmKPFj4",
  },
  {
    testimonial:
      "Having worked with Vikash i can say he is a very quick learner and hard working developer.",
    name: "Kumar Sunny Suman",
    designation: "Web Developer",
    company: "Algohire",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGS6emulp_oZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693420488264?e=1730937600&v=beta&t=Fqey32aJ66_KckhuouY5MwBo5hirUXz0jaRHs_bEkEs",
  },
];

const projects = [
  {
    name: "Ultron AI",
    description:
      "Developed a full-stack web application for generating content based on a given prompt. The application was built using the MERN stack, with the OpenAI API integrated to generate content on the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ultron,
    source_code_link: "https://github.com/vikashkumar8507/ULTRON-ai-content-generator/tree/main",
  },
  {
    name: "KnowYourBattery",
    description:
      "Engineered a web application that provides real-time updates on a device’s battery status, including the current battery level, charging status, and estimated times for charging and discharging.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "batteryAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: batteryapp,
    source_code_link: "https://github.com/vikashkumar8507/BatteryAPI",
  },
  {
    name: "Nodemailer",
    description:
      "Built an email-sending web application utilizing CSS , EJS, and JavaScript. The backend is powered by Node.js and Express.js, providing a seamless and efficient solution for managing and sending emails.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "nodemailer",
        color: "pink-text-gradient",
      },
    ],
    image: nodemailerapp,
    source_code_link: "https://github.com/vikashkumar8507/Nodemailer/",
  },
];

export { services, technologies, experiences, testimonials, projects };
