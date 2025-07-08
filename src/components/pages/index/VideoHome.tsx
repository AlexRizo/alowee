import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const VideoHome = () => {
  const [isCursorMoving, setIsCursorMoving] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const screenRef = useRef<any>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (!screenRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsCursorMoving(true);

      timerRef.current = setTimeout(() => {
        setIsCursorMoving(false);
      }, 1000); // tiempo en milisegundos sin movimiento
    }

    screenRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      screenRef.current.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      clearTimeout(timerRef.current);
    }
  }, [menuOpen]);

  return (
    <section
    className="h-screen snap-start bg-black"
    ref={screenRef}
    >
      <Header hidden={!isCursorMoving} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <video
          src="/video/video-home.mp4"
          autoPlay
          muted
          className="w-full h-full object-cover"
        ></video>
        <Footer hidden={!isCursorMoving} />
      </section>
  );
};
