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
    src: "img/services-2d.webp",
    video: "video/video-01.mp4",
    alt: "2D",
  },
  {
    src: "img/services-cine.webp",
    video: "video/video-02.mp4",
    alt: "Cine",
  },
  {
    src: "img/services-enterprise.webp",
    video: "video/video-03.mp4",
    alt: "Enterprise",
  },
  {
    src: "img/services-social-media.webp",
    video: "video/video-01.mp4",
    alt: "Social Media",
  },
  {
    src: "img/services-spots-video.webp",
    video: "video/video-03.mp4",
    alt: "Spots Video",
  },
];

const INITIAL_VIDEO_VALUES = {
  width: "616px",
  height: "820px",
};

export const VideoSlider = () => {
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
      ...INITIAL_VIDEO_VALUES,
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
      ...INITIAL_VIDEO_VALUES,
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
      height: "100vh",
      aspectRatio: "none",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      ScrollTrigger.create({
        scroller: "main",
        markers: true,
        trigger: swiperRef.current.el,
        start: "40% center",
        onEnter: () => {
          handlePlay();
        },
        onEnterBack: () => {
          handlePlay();
        },
        onLeave: () => {
          handleStop();
        },
        onLeaveBack: () => {
          handleStop();
        },
      });
    }
  }, []);

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
        className="w-full py-12.5"
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
          <SwiperSlide key={index} className="!w-[616px] !h-[820px] relative">
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
        className={`w-[616px] h-[820px] absolute z-100 ${
          !playing ? "hidden" : "block"
        }`}
      >
        <video
          ref={videoRef}
          src="img/services-spots-video.webp"
          muted={true}
          onEnded={handleVideoEnded}
          className="block size-full object-cover select-none"
        />
      </div>
    </>
  );
};
