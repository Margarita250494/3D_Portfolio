import { Link } from "react-scroll";
import { navLinks } from "./data";

type Props = {
  isMobile: boolean;
};

export const Navigation = ({ isMobile }: Props) => {
  return (
    <nav className="header__menu" role="menu">
      <ul className={`header__menu-list ${isMobile ? "mobile" : "desctop"}`}>
        {navLinks.map((link, index) => (
          <li key={link.id} role="button" className="header__menu-item">
            <Link
              to={link.id}
              smooth={true}
              duration={index * 100}
              activeClass="active"
              spy={true}
              hashSpy={true}
              offset={-100}
              spyThrottle={500}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
