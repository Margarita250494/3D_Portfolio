import { motion } from "framer-motion";
import { projects } from "./data";
import { useState } from "react";
import { ProjectsInfo } from "./ProjectsInfo";
import ProjectsSwiper from "./ProjectsSwiper";

export const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="projects"
      className="projects"
    >
      <motion.div>
        <p className="projects__intro">My projects</p>
        <h2 className="projects__title">Projects.</h2>
      </motion.div>
      <div className="projects__main">
        {/*left part */}
        <ProjectsInfo project={project} />
        {/*right part */}
        <ProjectsSwiper projects={projects} setProject={setProject} />
      </div>
    </motion.section>
  );
};
