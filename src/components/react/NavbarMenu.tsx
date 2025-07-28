import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MenuOptions = [
  {
    text: "INICIO",
    href: "/",
  },
  {
    text: "SERVICIOS INTEGRALES",
    href: "/servicios-integrales",
  },
  {
    text: "CAMPAÑAS INTERACTIVAS",
    href: "/campanas-interactivas",
  },
  {
    text: "DESARROLLO WEB",
    href: "/desarrollo-web",
  },
  {
    text: "EXPERIENCIAS AUDIOVISUALES",
    href: "/experiencias-audiovisuales",
  },
  {
    text: "SOLUCIONES IMPRESAS",
    href: "/soluciones-impresas",
  },
  {
    text: "DISEÑO DIGITAL",
    href: "/diseno-digital",
  },
];

export default function NavbarMenu({
  children,
  setMenuOpen,
}: {
  children: React.ReactNode;
  setMenuOpen?: (menuOpen: boolean) => void;
}) {
  const linesRef = useRef<HTMLHRElement[]>([]);
  const elementsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLElement>(null);
  const navMenuContentRef = useRef<HTMLDivElement>(null);

  
  const handleOpen = () => {
    // Asegura que todos los elementos estén visibles
    gsap.set(navMenuRef.current, { display: "block" });
    gsap.set(navMenuContentRef.current, { pointerEvents: "initial" });
  
    // Mover nav hacia abajo
    gsap.to(navMenuRef.current, {
      top: '0%',
      duration: 1,
      ease: "power2.inOut",
    });
  
    // Línea
    linesRef.current.forEach((line, index) => {
      gsap.to(line, {
        width: "100%",
        duration: 1.3,
        ease: "power3.inOut",
        delay: 0.6 + index * 0.2,
      });
    });
  
    // Botón y elementos
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut", delay: 1 }
    );
  
    elementsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          delay: .5 + (i + 1) * 0.2,
        }
      );
    });
  };
  
  const handleQuit = () => {
    setMenuOpen && setMenuOpen(false);
    // Ocultar menú con animación
    gsap.to(navMenuContentRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      pointerEvents: "none",
    });
  
    gsap.to(navMenuRef.current, {
      top: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 0.2,
      onComplete: () => {
        gsap.set(navMenuRef.current, { display: "none" });
        gsap.set(navMenuContentRef.current, { opacity: 1 });
        linesRef.current.forEach((line) => gsap.set(line, { width: 0 }));
      },
    });
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <nav
        ref={navMenuRef}
        className="fixed left-0 w-screen h-[100dvh] bg-warning-600 z-50 2xl:p-18 xl:p-16 lg:p-14 p-10 overflow-y-auto"
        style={{ top: '-100%' }}
      >
        <div
          ref={navMenuContentRef}
          className="flex flex-col xl:gap-8 gap-5"
        >
          <button
            ref={buttonRef}
            id="quit"
            className="cursor-pointer"
            onClick={handleQuit}
          >
            <img
              src="/icons/quit.svg"
              alt="Quit"
              width={77}
              height={77}
              className="2xl:w-19 xl:w-16 lg:w-14 w-12"
            />
          </button>
          {MenuOptions.map((option, index) => (
            <span
              key={option.href}
              className="relative text-outline hover:[text-stroke:2px] 2xl:text-5xl xl:text-4xl text-3xl leading-snug font-extrabold tracking-wide"
            >
              <a
                ref={(el) => {
                  if (el) elementsRef.current[index] = el;
                }}
                href={option.href}
                onClick={handleQuit}
              >
                {option.text}
              </a>
              <hr
                ref={(el) => {
                  if (el) linesRef.current[index] = el;
                }}
                className="w-0 text-success-600"
              />
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
