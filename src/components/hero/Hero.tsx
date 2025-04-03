import { ComputersCanvas } from "../3d-models/Computers";
import { heroInfo } from "./data";
import HeroButton from "./HeroButton";
import Soc1als from "./Soc1als";

export const Hero = () => {
  const heroDescription = heroInfo.find((info) => "desc" in info)?.desc || "";
  return (
    <section className="wrapper hero">
      <div className="hero__body">
        <div className="hero__info">
          <div className="hero__info-accent">
            <div className="accent-1 bg-accent" />
            <div className="accent-2 violet-gradient" />
          </div>
          <div className="hero__info-container">
            <h1 className="hero__info-title">
              Hi, I&apos;m <span className="text-accent">Margarita</span>
            </h1>
            <p className="hero__info-description">{heroDescription}</p>
            <Soc1als />
            <HeroButton />
          </div>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};
