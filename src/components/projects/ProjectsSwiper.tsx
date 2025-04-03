import { Project } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import WorkSliderBtns from "./WorkSliderBtns";

type Props = {
  projects: Project[];
  setProject: (project: Project) => void;
};

const ProjectsSwiper = ({ projects, setProject }: Props) => {
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <div className="projects__swiper">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="rounded-[1.25rem] shadow-card"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="projects__swiper-overlay">
              <div className="projects__swiper-overlay_inner"></div>
            </div>
            <div className="projects__swiper-img">
              <img src={project.image} alt="" className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
        {/* slider buttons */}
        <div className="projects__swiper-buttons">
          <WorkSliderBtns btnStyles="swiper__buttons" />
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsSwiper;
