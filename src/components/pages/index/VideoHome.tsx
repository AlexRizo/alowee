import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const VideoHome = () => {
  const [isCursorMoving, setIsCursorMoving] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);
  
  const screenRef = useRef<any>(null);
  const timerRef = useRef<any>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsCursorMoving(true);

    timerRef.current = setTimeout(() => {
      setIsCursorMoving(false);
    }, 1000); // tiempo en milisegundos sin movimiento
  }, []);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    setIsCursorMoving(true);
    screenRef.current.removeEventListener('mousemove', handleMouseMove);
  }

  useEffect(() => {
    if (!screenRef.current || isVideoEnded) return;

    screenRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      screenRef.current.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (isVideoEnded) return;
    
    if (menuOpen) {
      clearTimeout(timerRef.current);
      screenRef.current.removeEventListener('mousemove', handleMouseMove);
    } else {
      screenRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      screenRef.current.removeEventListener('mousemove', handleMouseMove);
    }
  }, [menuOpen]);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 5500);
  }, []);

  return (
    <section
    className="h-[100dvh] snap-start bg-black"
    ref={screenRef}
    >
      <Header hidden={!isCursorMoving} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <video
          ref={videoRef}
          src="/video/video-home.mp4"
          muted
          className="w-full h-full object-cover"
          onEnded={() => handleVideoEnded()}
        ></video>
        <Footer hidden={!isCursorMoving} />
      </section>
  );
};
