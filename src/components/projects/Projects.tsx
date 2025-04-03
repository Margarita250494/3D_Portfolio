import { motion } from "framer-motion";
import { projects } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import { MoveUpRight, Github } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import WorkSliderBtns from "./WorkSliderBtns";

export const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="projects"
      className="projects"
    >
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My projects
        </p>
        <h2 className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:gap-[2.875rem] gap-4">
          {/*left part */}
          <div className="flex flex-col gap-4 lg:justify-between order-2 lg:order-none">
            {/*outline num */}
            <p className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </p>
            {/*project category */}
            <h3 className="text-[2.625rem] font-bold leading-none text-white group-hover:text-accent duration-500 capitalize">
              {project.category} project
            </h3>
            {/*project description */}
            <p className="text-secondary/60">{project.description}</p>
            {/*stack */}
            <ul className="flex gap-4 flex-wrap">
              {project.stack.map((technologie, index) => (
                <li key={technologie.name} className="text-xl text-accent">
                  {technologie.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            {/*border */}
            <div className="border border-secondary/20"></div>
            {/*buttons*/}
            <div className="flex items-center gap-4">
              {/*live project button */}
              {project.live !== "" && (
                <a href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[4.375rem] h-[4.375rem] rounded-full bg-secondary/5 flex justify-center items-center group">
                        <MoveUpRight
                          strokeWidth={1}
                          size={40}
                          className="text-white group-hover:text-accent duration-200"
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
                    <TooltipTrigger className="w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group">
                      <Github
                        strokeWidth={1}
                        size={40}
                        className="text-white group-hover:text-accent duration-200"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          </div>
          {/*right part */}
          <div className="lg:max-w-[60%] h-fit rounded-[1.25rem]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="rounded-[1.25rem] shadow-card"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.title}>
                  <div className="h-auto relative group flex justify-center items-center bg-transparent">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  </div>
                  <div className="relative w-full h-full flex justify-center items-center">
                    <img
                      src={project.image}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none">
                <WorkSliderBtns btnStyles="bg-accent/20 hover:bg-secondary/60 text-white w-[2rem] h-[2rem] flex justify-center items-center duration-300 rounded-xl" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
