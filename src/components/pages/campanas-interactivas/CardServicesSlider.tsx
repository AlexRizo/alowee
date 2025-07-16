import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { CardService } from "@utils/data";
import { useEffect, useRef, useState, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

interface CampainServiceCardProps {
  cardId?: string;
  title: string;
  description: string;
  image: string;
}

const CampainServiceCard: FC<CampainServiceCardProps> = ({
  cardId = "mobile-card",
  title,
  description,
  image,
}) => {
  return (
    <div
      id={cardId}
      className="bg-gray-200/8 lg:py-4 py-3 lg:px-6 px-4 flex items-start gap-4 rounded xl:max-w-[485px] lg:max-w-[400px] w-full"
    >
      <picture className="h-full lg:w-28 w-24">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </picture>
      <article>
        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold text-purple-300">
          {title}
        </h3>
        <p className="text-gray-50 description-p01 lg:text-base text-sm">
          {description}
        </p>
      </article>
    </div>
  );
};

interface Props {
  campanas: CardService[];
  section: string;
}

const CampainServiceSlider: FC<Props> = ({ campanas, section = ".section-03" }) => {
  const swiperRef = useRef<any>(null);

  const [slides, setSlides] = useState<CardService[][]>([]);

  useEffect(() => {
    setSlides(() => {
      const newSlides = [];

      for (let i = 0; i < campanas.length; i += 3) {
        newSlides.push(campanas.slice(i, i + 3));
      }

      return newSlides;
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      scroller: "main",
      trigger: section,
      onEnter: () => {
        gsap.from('#mobile-card', {
          delay: 0.7,
          y: 100,
          autoAlpha: 0,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out",
        });
      },
    });
  }, []);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
        <button onClick={handlePrev}>
          <ChevronLeft className="size-10" />
        </button>
        <button onClick={handleNext}>
          <ChevronRight className="size-10" />
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides
        grabCursor
        className="w-full"
        slideActiveClass="active-slide-service"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-9/10 flex flex-col gap-6 mx-auto">
              {slide.map((campana) => (
                <CampainServiceCard key={campana.id} {...campana} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CampainServiceSlider;
