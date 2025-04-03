import { ArrowDownToLine } from "lucide-react";

const HeroButton = () => {
  return (
    <button type="button">
      <a
        href="/public/CV.pdf"
        download="Margarita_Boiko_CV.pdf"
        role="button"
        aria-label="Download my CV"
        className="hero__button"
      >
        <p>Download CV</p>
        <ArrowDownToLine strokeWidth={1} size={24} />
      </a>
    </button>
  );
};

export default HeroButton;
