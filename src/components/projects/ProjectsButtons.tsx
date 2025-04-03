import { Project } from "@/utils/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveUpRight, Github } from "lucide-react";

type Props = {
  project: Project;
};

const ProjectsButtons = ({ project }: Props) => {
  return (
    <div className="projects__buttons">
      {/*live project button */}
      {project.live !== "" && (
        <a href={project.live} target="_blank">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="projects__buttons-tooltip">
                <MoveUpRight
                  strokeWidth={1}
                  size={40}
                  className="projects__buttons-icon"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      )}
      {/*github project button */}
      <a href={project.github} target="_blank">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="projects__buttons-tooltip">
              <Github
                strokeWidth={1}
                size={40}
                className="projects__buttons-icon"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </div>
  );
};

export default ProjectsButtons;
