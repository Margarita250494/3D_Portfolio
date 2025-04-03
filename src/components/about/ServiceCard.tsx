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
        className="w-full green-pink-gradient p-[0.063rem] rounded-[1.25rem] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[1.25rem] py-5 px-12 h-[14rem] md:h-[17.5rem] w-[14rem] md:w-[17.5rem] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain bg-transparent"
          />
          <h3 className="text-white text-[1.25rem] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
