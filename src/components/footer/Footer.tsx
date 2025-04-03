import { logo } from "../../assets";
import Soc1als from "../hero/Soc1als";

export const Footer = () => {
  return (
    <footer className="wrapper footer">
      <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
        <div className="flex flex-col gap-3">
          <p className="text-center text-accent text-xl md:text-3xl">
            Get in Touch With Me
          </p>
          <a
            className="text-center text-2xl md:text-5xl"
            href="mailto:margo250494@gmail.com"
          >
            margo250494@gmail.com
          </a>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-y-10 gap-x-0 lg:gap-x-50">
          <div className="">
            <a href="/" className="flex items-center gap-2">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={logo}
                alt="Margarita - Frontend Developer Logo"
              />
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
