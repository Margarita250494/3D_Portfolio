import { AlignJustify, EyeClosed } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeInOut, menuVariants } from "../../utils/motion";
import { Navigation } from "./Navigation";

export const MobileNav = () => {
  const [toogle, setToogle] = useState(false);

  const handleClick = () => {
    setToogle(!toogle);
  };
  return (
    <div className="header__mobile">
      {/*open/close button */}
      <button
        type="button"
        aria-expanded={toogle}
        aria-label={toogle ? "Close navigation menu" : "Open navigation menu"}
        onClick={handleClick}
        className="header__button"
      >
        <motion.span key={toogle ? "close" : "menu"} {...fadeInOut}>
          {toogle ? (
            <EyeClosed strokeWidth={1} color="#f3f3f3" size={30} />
          ) : (
            <AlignJustify strokeWidth={1} color="#f3f3f3" size={30} />
          )}
        </motion.span>
      </button>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={toogle ? "visible" : "hidden"}
        exit="exit"
        className="black-gradient header__mobile-menu"
        aria-hidden={!toogle}
        aria-expanded={toogle}
      >
        <Navigation isMobile={true} />
      </motion.div>
    </div>
  );
};
