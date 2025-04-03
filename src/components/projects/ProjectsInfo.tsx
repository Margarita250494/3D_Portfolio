import { Project } from "@/utils/types";
import ProjectsButtons from "./ProjectsButtons";

type Props = {
  project: Project;
};

export const ProjectsInfo = ({ project }: Props) => {
  return (
    <div className="projects__main-info">
      {/*outline num */}
      <p className="projects__number text-outline">{project.num}</p>
      {/*project category */}
      <h3 className="projects__category">{project.category} project</h3>
      {/*project description */}
      <p className="projects__description">{project.description}</p>
      {/*stack */}
      <ul className="projects__list">
        {project.stack.map((technologie, index) => (
          <li key={technologie.name} className="projects__item">
            {technologie.name}
            {index !== project.stack.length - 1 && ","}
          </li>
        ))}
      </ul>
      {/*border */}
      <div className="projects__border"></div>
      {/*buttons*/}
      <ProjectsButtons project={project} />
    </div>
  );
};
