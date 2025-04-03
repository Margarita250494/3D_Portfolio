import { logo } from "../../assets";
import Soc1als from "../hero/Soc1als";

export const Footer = () => {
  return (
    <footer className="wrapper footer">
      <div className="footer__container">
        <div className="footer__main">
          <p className="footer__main-intro">Get in Touch With Me</p>
          <a className="footer__main-mail" href="mailto:margo250494@gmail.com">
            margo250494@gmail.com
          </a>
        </div>
        <div className="footer__links">
          <div>
            <a href="/" className="footer__links-logo">
              <img src={logo} alt="Margarita - Frontend Developer Logo" />
              <p className="p-0">
                Margarita
                <span className="sr-only md:not-sr-only">
                  | Fronted Developer
                </span>
              </p>
            </a>
          </div>
          <a href="tel:+4917661817824">+49 176 618 178 24</a>
          <Soc1als />
        </div>
      </div>
    </footer>
  );
};
