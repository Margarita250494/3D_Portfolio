import { StarsCanvas } from "../3d-models/Stars";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <ContactForm />
      <StarsCanvas />
    </section>
  );
};
