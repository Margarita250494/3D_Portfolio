import { BallCanvas } from "../3d-models/Ball";
import { technologies } from "./data";

export const TechStack = () => {
  return (
    <div className="about__tech">
      {technologies.map((technologie) => (
        <div className="about__tech-ball" key={technologie.name}>
          <BallCanvas icon={technologie.icon} />
        </div>
      ))}
    </div>
  );
};
