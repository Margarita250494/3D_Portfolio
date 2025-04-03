import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./data";
import { ExperienceCard } from "./ExperineceCard";

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.div variants={textVariant(1)}>
        <p className="experience__intro">What I have done so far</p>
        <h2 className="experience__title">Work Experience.</h2>
      </motion.div>
      <div className="experience__main">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
