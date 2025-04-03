import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

type Props = {
  btnStyles: string;
};

const WorkSliderBtns = ({ btnStyles }: Props) => {
  const swiper = useSwiper();
  return (
    <>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft strokeWidth={2} size={24} />
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight strokeWidth={2} size={24} />
      </button>
    </>
  );
};

export default WorkSliderBtns;
