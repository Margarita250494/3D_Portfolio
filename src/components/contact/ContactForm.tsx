import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { Form } from "./Form";
import { EarthCanvas } from "../3d-models/Earth";

export const ContactForm = () => {
  return (
    <div className="contact__form">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact__form-container"
      >
        <p className="contact__form-intro">Get in touch</p>
        <h3 className="contact__form-title">Contact.</h3>
        <Form />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="contact__form-graphic"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
