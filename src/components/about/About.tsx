import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { about, services } from "./data";
import ServiceCard from "./ServiceCard";
import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <section id="about" className="about">
      <motion.div variants={textVariant(0)}>
        <p className="about__intro">Introduction</p>
        <h2 className="about__title">Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[1.063rem] max-w-4xl leading-[1.875rem] font-light"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {about}
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10 items-stretch">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
      <TechStack />
    </section>
  );
};
