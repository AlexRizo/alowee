import { cn } from "@utils/cn";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  image: string;
}

export const ServicesSliderCard = ({
  title,
  subtitle,
  description,
  children,
  image,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const [originalWidth, setOriginalWidth] = useState<string>('');

  const tl1 = useRef<GSAPTimeline>(null);
  const tl2 = useRef<GSAPTimeline>(null);

  const [size, setSize] = useState<number>(428);
  const [scale, setScale] = useState<number>(2);
  
  useEffect(() => {
    if (cardRef.current) {
      const originalWidth = getComputedStyle(cardRef.current).width;
      setOriginalWidth(originalWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1520 && window.innerWidth > 1280) {
        setSize(352);
        setScale(1.8);
      } else if (window.innerWidth < 1280 && window.innerWidth > 1024) {
        setSize(300);
        setScale(1.5);
      } else {
        setSize(428);
        setScale(2);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleHoverCard = () => {
    const card = cardRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const icon = iconRef.current;

    tl1.current = gsap.timeline();
    const timeline1 = tl1.current;

    if (card) {
      timeline1.to(card, {
        width: size,
        duration: 0.5,
        ease: 'power2.inOut',
      }).to(icon, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0).to(title, {
        scale: scale,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0).to(subtitle, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0);
    }
  }

  const handleLeaveCard = () => {
    const card = cardRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const icon = iconRef.current;

    tl2.current = gsap.timeline({
      onStart: () => {
        tl1.current?.kill();
      }
    });
    
    const timeline2 = tl2.current;

    if (card) {
      timeline2.to(card, {
        width: originalWidth,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0.2).to(icon, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0.4).to(title, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0.4).to(subtitle, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 0.4);
    }
  }

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleHoverCard}
      onMouseLeave={handleLeaveCard}
      className="2xl:w-78 xl:w-72 lg:w-64 h-full bg-[#1F1E21] border border-[#F7F0F0]/25 text-[#F7F0F0] rounded-lg mx-auto relative group"
    >
      <div 
        className="w-full h-full absolute top-0 left-0 rounded-lg bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url('/img/${image}')` }}
      >
        <div className="w-full h-full bg-black/40 rounded-lg"></div>
      </div>
      <article className="relative flex flex-col items-center 2xl:gap-5 xl:gap-4 lg:gap-3">
        <div className="p-1.5 border-2 border-dashed rounded bg-neutral-600/20 mt-40" ref={iconRef}>
          {children}
        </div>
        <article className="text-center font-primary">
          <h3 className="font-semibold 2xl:text-xl xl:text-lg lg:text-base" ref={titleRef}>{title}</h3>
          <h4 className="xl:text-sm lg:text-xs underline decoration-error-300 underline-offset-4" ref={subtitleRef}>{subtitle}</h4>
        </article>
        <p className="text-center font-light 2xl:text-lg xl:text-base lg:text-sm text-[#F5F5F5] 2xl:max-w-[24ch] xl:max-w-[20ch] lg:max-w-[18ch]">
          {description}
        </p>
      </article>
    </div>
  );
};
