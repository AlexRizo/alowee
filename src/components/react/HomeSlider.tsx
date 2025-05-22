import { HomeSliderCard } from "@components/react/HomeSliderCard";
import { servicesWithShortDescription } from "@utils/data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Triangle } from "lucide-react";
import { cn } from "@utils/cn";

const buttonStyle = 'absolute top-1/2 -translate-y-1/2 z-10 bg-purple-400 rounded-full after:hidden cursor-pointer p-3 lg:block hidden'

export const HomeSlider = () => {
  return (
    <div className="relative 2xl:w-[67%] xl:w-[71%] lg:w-[78%] w-full mx-auto">
      <button className={cn(buttonStyle, 'custom-prev left-0 -rotate-90')}>
        <Triangle fill="white" className="2xl:size-6 xl:size-5"/>
      </button>
      <button className={cn(buttonStyle, 'custom-next right-0 rotate-90')}>
        <Triangle fill="white" className="2xl:size-6 xl:size-5"/>
      </button>

    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop
      className="mySwiper 2xl:w-[86%] xl:w-[89%] lg:w-[85%] w-full"
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {servicesWithShortDescription.map((service) => (
        <SwiperSlide key={service.id} className="py-4">
          <HomeSliderCard
            title={service.title}
            description={service.description}
          >
            <service.icon strokeWidth={1.5} className="xl:size-11 lg:size-10 size-11"/>
          </HomeSliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
