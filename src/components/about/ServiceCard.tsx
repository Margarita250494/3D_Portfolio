import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

type Props = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ title, icon, index }: Props) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient shadow-card about__card-container"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="about__card-wrapper"
        >
          <img src={icon} alt={title} className="about__card-img" />
          <h3 className="about__card-title">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
