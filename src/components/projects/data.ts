import { arrowGame, fitnessApp,futureTech,management,cakeArt } from "@/assets"
import { Project } from "@/utils/types"

export const projects:Project[] = [
    {
      num:"01",
      category:"frontend",
      title:"Fitness App",
      description:"This project is based on the YouTube tutorial by EdRoh. While the tutorial served as a foundational guide, the design and code have been modified to better suit the needs of this project.Feel free to check out the original tutorial for additional insights and a deeper understanding of the concepts.",
      stack:[
        {
          name:"React.js"
        },
        {
          name:"Tailwind.css"
        },
        {
          name:"Typescript"
        },
        {
          name:"Framer Motion"
        },
        {
          name:"Html 5"
        },
      ],
      image: fitnessApp,
      live: "",
      github:"https://github.com/Margarita250494/FitnessApp_React_Ts"
    },
    {
      num:"02",
      category:"frontend",
      title:"Cake Art",
      description:"My project targets small business owners offering beautifully customized cakes. I used HTML for structure, SCSS for a modern design, and JavaScript for interactive features like navigation, animations, and dynamic content. The goal was to highlight the products visually and create a seamless user experience.",
      stack:[
        {
          name:"Html 5"
        },
        {
          name:"Scss"
        },
        {
          name:"Javascript"
        },
        {
          name:"Gulp"
        }
      ],
      image:cakeArt,
      live: "https://margarita250494.github.io/VL_art_cake/",
      github:"https://github.com/Margarita250494/VL_art_cake"
    },
    {
      num:"03",
      category:"fullstack",
      title:"Project Management App",
      description:"This project is based on a YouTube tutorial, with additional improvements focusing on accessibility, correct tag usage, and styling refinements. The primary goal was to better understand the interaction between the frontend and backend, with a stronger emphasis on frontend development.",
      stack:[
        {
          name:"React.js"
        },
        {
          name:"Typescript"
        },
        {
          name:"Tailwind"
        },
        {
          name:"Redux"
        },
        {
          name:"Prisma"
        },
        {
          name:"Node.js"
        },
        {
          name:"PostgreSQL"
        },
        {
          name:"Express.js"
        },
      ],
      image:management,
      live: "",
      github:"https://github.com/Margarita250494/Project_Management_App"
    },
    {
      num:"04",
      category:"frontend",
      title:"Future Tech",
      description:"The goal was to transform an existing web app built with HTML, SCSS, and JavaScript into a modern React and TypeScript application. Vite was used for fast development and optimized performance.The design is based on a Figma template.Inspired by a YouTube tutorial, the app was completely rebuilt using React, TypeScript, and a component-based architecture for scalability and future-proofing.",
      stack:[
        {
          name:"React.js"
        },
        {
          name:"Typescript"
        },
        {
          name:"Scss"
        },
      ],
      image:futureTech,
      live: "",
      github:"https://github.com/Margarita250494/FutureTech_React_TS_SCSS"
    },
    {
      num:"05",
      category:"frontend",
      title:"Arrow Game",
      description:"This is a React-based Arrow Game project, built with TypeScript, Redux Toolkit, Material UI, Vitest for testing, and Vite for fast development. The game was inspired by a YouTube tutorial series, and I made several customizations to the style, structure, icons, and more to make it unique. The primary goal of this project was to learn and implement Redux and testing practices.",
      stack:[
        {
          name:"React.js"
        },
        {
          name:"Typescript"
        },
        {
          name:"Redux Toolkit"
        },
      ],
      image:arrowGame,
      live: "",
      github:"https://github.com/Margarita250494/React_Arrow_Game"
    },
  ]