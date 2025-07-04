import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "lucide-react";

const ACTIVE_SLIDE = 2;

const SLIDES = [
  {
    src: "img/services-2d.webp",
    video: "img/experiencias-audiovisuales/videos/video-01.mp4",
    alt: "2D",
  },
  {
    src: "img/services-cine.webp",
    video: "img/experiencias-audiovisuales/videos/video-01.mp4",
    alt: "Cine",
  },
  {
    src: "img/services-enterprise.webp",
    video: "img/experiencias-audiovisuales/videos/video-01.mp4",
    alt: "Enterprise",
  },
  {
    src: "img/services-social-media.webp",
    video: "img/experiencias-audiovisuales/videos/video-01.mp4",
    alt: "Social Media",
  },
  {
    src: "img/services-spots-video.webp",
    video: "img/experiencias-audiovisuales/videos/video-01.mp4",
    alt: "Spots Video",
  },
];

export const VideoSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(ACTIVE_SLIDE);
  const videoRef = useRef<any>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = SLIDES[activeSlide].video;
    }
  }, [activeSlide]);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    videoRef.current.pause();
  };

  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={ACTIVE_SLIDE}
        slidesPerView={"auto"}
        preventClicks={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="w-full py-12.5"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        onTouchStart={handlePause}
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="!w-[616px] aspect-[3/4] relative">
            <img
              src={slide.src}
              alt={slide.alt}
              className="block size-full object-cover select-none"
            />
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-red-500/40 z-100 flex items-center justify-center"
            >
              <PlayIcon className="w-10 h-10 text-white" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`w-[616px] aspect-[3/4] absolute z-100 ${
          !playing ? "hidden" : "block"
        }`}
      >
        <video
          ref={videoRef}
          src="img/services-spots-video.webp"
          className="block size-full object-cover select-none"
        />
      </div>
    </>
  );
};
