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
      title: "Front-End Web Developer",
      icon: web,
    },
    {
      title: "Responsive Website Development",
      icon: mobile,
    },
    {
      title: "Ui/Ux Developmet",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Frontend development Intern",
      company_name: "The Spark Foundation",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Collaborated remotely with a team of professionals to design, develop, and maintain user-friendly websites.Developed a strong understanding of HTML5,CSS3,JavaScript,Bootstrap and had the opportunity to apply  knowledge to real-world projects.",
        "Implemented a new design for the website homepage that increased user satisfaction by 20x.",
        "Honed Problem-solving,Time management,Creativity,Self-motivated,Organizational skills, which will undoubtedly benefit me in my future career as a front-end developer",
        "Developed a responsive landing page that resulted in a 25x increase in Website performance.",
      ],
    },
    {

      title: "Master of Computer Applications(MCA)",
      company_name: "EWCM(Bangalore)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2021 - December 2023",
      points: [
        "Successfully completed numerous projects, including e-commerce websites, online portals, and web-based applications.",
        "Achieved First Rank in Academics at MCA EWCM Bangalore Acquired comprehensive knowledge of Advanced Web Programming.",
        "Consistently received positive feedback for delivering high-quality work within strict deadlines Contributed to a dynamic learning environment by sharing knowledge and ideas with peers.",
       
      ],
    },
    {
      title: "Bachelor of Computer Applications(BCA)",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2017 - September 2020",
      points: [
        "Graduated with Distinction in BCA, demonstrating a strong academic performance throughout the program.",
        "Gained practical experience in debugging and troubleshooting code issues.",
        "Prepared to tackle basic software development challenges and build innovative solutions that meet real-world needs.",
      ],
    },
   
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
        "I got an opportunity to interact with Sameer Dixit on a few occasions and he has impressed me with his knowledge of front end technologies. He is an avid learner and keen applicator of his learnings to the projects he has worked on. I highly recommend him.",
      name: "Anil Kulkarni",
      designation: "Head Of Engineering",
      company: "Zoom",
      image: "https://www.linkedin.com/in/ankit5999/overlay/photo/",
    },
    {
      testimonial:
        "Great person, enthusiast to lean new things. I will recommend Sammer as a great tech guy interested in development.",
      name: "Ankit Kumar",
      designation: "Team lead",
      company: "Solitera Limited",
      image: "https://www.linkedin.com/in/ankit5999/overlay/photo/",
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Happen Hive",
      description:
        "Household Income and Expense voice Assistant Tracker Engine Developed a custom Artificial Intelligence Income and Expense tracker application using React and Material-UI that allowed users to easily track their financial data.Improved data accuracy by implementing automated data validation processes, reducing data entry errors by 70x Integrated Speechly voice assistant technology to enable users to input and manage financial data using voice commands, resulting in a 50x increase in user engagement and improving accessibility for users with disabilities.Implemented a dynamic pie chart component using react-ui chart.js library to visually represent income and expense data, providing users with a clear and intuitive overview of their financial data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://happen-hive-react-speechly.netlify.app",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };