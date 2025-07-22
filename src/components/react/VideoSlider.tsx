import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Swiper as SwiperType } from "swiper";

const ACTIVE_SLIDE = 2;

const SLIDES = [
  {
    src: "/img/services-2d.webp",
    video: "/video/video-01.mp4",
    alt: "2D",
  },
  {
    src: "/img/services-cine.webp",
    video: "/video/video-02.mp4",
    alt: "Cine",
  },
  {
    src: "/img/services-enterprise.webp",
    video: "/video/video-03.mp4",
    alt: "Enterprise",
  },
  {
    src: "/img/services-social-media.webp",
    video: "/video/video-01.mp4",
    alt: "Social Media",
  },
  {
    src: "/img/services-spots-video.webp",
    video: "/video/video-03.mp4",
    alt: "Spots Video",
  },
];

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

const INITIAL_VIDEO_VALUES = {
  "2xl": {
    width: "616px",
    height: "820px",
  },
  "xl": {
    width: "516px",
    height: "720px",
  },
  "lg": {
    width: "416px",
    height: "620px",
  },
  "md": {
    width: "316px",
    height: "520px",
  },
};

type SizePrefix = "2xl" | "xl" | "lg" | "md";

export const VideoSlider = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [sizePrefix, setSizePrefix] = useState<SizePrefix>("2xl");
  const [isRendering, setIsRendering] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
      const windowSizeKey = windowSize.width > 1520 ? "2xl" : windowSize.width > 1280 ? "xl" : windowSize.width > 1024 ? "lg" : "md";
      setSizePrefix(windowSizeKey);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const [activeSlide, setActiveSlide] = useState<number>(ACTIVE_SLIDE);
  const [playing, setPlaying] = useState<boolean>(false);

  const videoRef = useRef<any>(null);
  const videoContainerRef = useRef<any>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const timerToPlay = useRef<NodeJS.Timeout | null>(null);

  const tl = useRef<any>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = SLIDES[activeSlide].video;
    }
  }, [activeSlide]);

  const setInitialVideoSize = () => {
    gsap.set(videoContainerRef.current, {
      ...INITIAL_VIDEO_VALUES[sizePrefix],
    });
  };

  const handlePlayVideo = () => {
    if (timerToPlay.current) {
      clearTimeout(timerToPlay.current);
    }

    setPlaying(true);
    startVideoAnimation();
    videoRef.current.play();
  };

  const handlePlay = () => {
    if (isRendering) {
      setIsRendering(false);
      return;
    };
    if (timerToPlay.current) {
      clearTimeout(timerToPlay.current);
    }

    timerToPlay.current = setTimeout(() => {
      handlePlayVideo();
    }, 3000);
  };

  const handlePause = () => {
    setPlaying(false);
    tl.current?.clear();
    setInitialVideoSize();
    videoRef.current.pause();
  };

  const handleVideoEnded = () => {
    tl.current?.to(videoContainerRef.current, {
      ...INITIAL_VIDEO_VALUES[sizePrefix],
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        handlePause();
        if (swiperRef.current) {
          if (swiperRef.current.activeIndex === SLIDES.length - 1) {
            swiperRef.current.slideTo(0);
          } else {
            swiperRef.current.slideNext();
          }
        }
      },
    });
  };

  const handleStop = () => {
    tl.current?.pause();
    setPlaying(false);
    setInitialVideoSize();
    videoRef.current.pause();
  };

  const startVideoAnimation = () => {
    tl.current = gsap.timeline();

    tl.current.to(videoContainerRef.current, {
      delay: 1,
      width: "80vw",
      height: "90vh",
      aspectRatio: "none",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

useEffect(() => {
  if (!swiperRef.current) return;

  const st = ScrollTrigger.create({
    scroller: "main", // si estás usando locomotivescroll, asegúrate que "main" sea correcto
    trigger: swiperRef.current!.el,
    markers: true,
    start: "top center", // puedes ajustar esto
    onEnter: () => {
      handlePlay();
      console.log("onEnter");
    },
    onEnterBack: handlePlay,
    onLeave: handleStop,
    onLeaveBack: handleStop,
  });

  handleStop();

  return () => {
    st.kill();
  };
}, [swiperRef.current]);

  return (
    <>
      <Swiper
        effect="coverflow"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
        className="w-full"
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex)
          handlePlay();
        }}
        onTouchStart={() => {
          handlePause();

          if (timerToPlay.current) {
            clearTimeout(timerToPlay.current);
          }
        }}
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="2xl:!w-[616px] 2xl:!h-[820px] xl:!w-[516px] xl:!h-[720px] lg:!w-[416px] lg:!h-[620px] !w-[316px] !h-[520px] relative">
            <img
              src={slide.src}
              alt={slide.alt}
              className="block size-full object-cover select-none"
            />
            <button
              onClick={handlePlayVideo}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-red-500/40 z-100 flex items-center justify-center"
            >
              <PlayIcon className="w-10 h-10 text-white" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={videoContainerRef}
        className={`2xl:w-[616px] 2xl:h-[820px] xl:w-[516px] xl:h-[720px] lg:w-[416px] lg:h-[620px] w-[316px] h-[520px] absolute z-100 ${
          !playing ? "hidden" : "block"
        }`}
      >
        <video
          ref={videoRef}
          src="/img/services-spots-video.webp"
          muted={true}
          onEnded={handleVideoEnded}
          className="block size-full object-cover object-center select-none"
        />
      </div>
    </>
  );
};
