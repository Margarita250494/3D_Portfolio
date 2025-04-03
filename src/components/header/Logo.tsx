import { useEffect } from "react";
import { logo } from "../../assets";

type Props = {
  setIsScrolled: (value: boolean) => void;
};

export const Logo = ({ setIsScrolled }: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      if (setIsScrolled) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a href="/" className="header__logo" onClick={scrollUp}>
      <img
        className="logo"
        src={logo}
        alt="Margarita - Frontend Developer Logo"
      />
      <p className="header__logo-text">
        Margarita
        <span className="sr-only md:not-sr-only">| Fronted Developer</span>
      </p>
    </a>
  );
};
