import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../../utils/types";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="experience__img">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
      className="experience__card"
    >
      <div>
        <h3 className="experience__card-title">{experience.title}</h3>
        <p className="experience__card-company" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="experience__list">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="experience__list-item"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
