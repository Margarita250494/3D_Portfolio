import { globalCT, htw } from "../../assets";
import { Experience } from "../../utils/types";

export const experiences:Experience[] = [
    {
      title: "Frontend Developer Intern",
      company_name: "Global CT",
      icon: globalCT,
      iconBg: "#131E36",
      date: "April 2024 - August 2024",
      points: [
        "Improved UX/UI of an existing web application using React, TypeScript, and SCSS.",
        "Collaborated in an agile team to refine and implement new features.",
        "Presented results to stakeholders and received feedback on best practices in frontend development.",
      ],
    },
    {
      title: "Student HTW: Internationale Medieninformatik",
      company_name: "HTW",
      icon: htw,
      iconBg: "#EFF0F3",
      date: "April 2022 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];