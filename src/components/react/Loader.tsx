import type { JSX } from "astro/jsx-runtime"
import gsap from "gsap";
import { useEffect, useRef, useState, type FC } from "react"

interface Props {
  children: JSX.Element;
}

export const Loader: FC<Props> = ({ children }) => {

  const [progress, setProgress] = useState<number>(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderSectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start: number | null = null;

    // Duraciones de cada fase (en milisegundos)
    const durationPhase1 = 2200; // Fase 1: de 0 a 40 (desaceleración)
    const durationPhase2 = 2000; // Fase 2: de 40 a 100 (aceleración)
    const totalDuration = durationPhase1 + durationPhase2;
    
    // Función de easing para desacelerar en la fase 1
    const easeOutQuad = (t: number) => t * (2 - t);
    
    // Función de easing para acelerar en la fase 2
    const easeInQuad = (t: number) => t * t;
    
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp; // Guarda el tiempo inicial en la primera llamada.
      const elapsed = timestamp - start;      // Tiempo transcurrido desde el inicio.
      let currentValue: number;
    
      if (elapsed <= durationPhase1) {
        // Fase 1: de 0 a 40
        // Se calcula el progreso de 0 a 1 en la primera fase.
        const progressPhase1 = elapsed / durationPhase1;
        // Se aplica easing para desacelerar al final de esta fase.
        const easedProgress = easeOutQuad(progressPhase1);
        // Se calcula el valor actual, llegando hasta 40.
        currentValue = easedProgress * 40;
      } else {
        // Fase 2: de 40 a 100
        // Se calcula el tiempo transcurrido en la segunda fase.
        const elapsedPhase2 = elapsed - durationPhase1;
        // Se calcula el progreso de 0 a 1 en esta fase, limitado a 1.
        const progressPhase2 = Math.min(elapsedPhase2 / durationPhase2, 1);
        // Se aplica easing para acelerar en esta fase.
        const easedProgress = easeInQuad(progressPhase2);
        // Se calcula el valor actual, partiendo desde 40 y llegando hasta 100.
        currentValue = 40 + easedProgress * 60;
      }
    
      // Actualiza el estado del contador (redondeado).
      setProgress(Math.floor(currentValue));
    
      // Si la animación no ha alcanzado el total, se solicita el siguiente frame.
      if (elapsed < totalDuration) {
        requestAnimationFrame(animate);
      }
    };
    
    // Inicia la animación.
    requestAnimationFrame(animate);
    // Se inicia la animación.
    requestAnimationFrame(animate);

    gsap.to(progressRef.current, {
      y:0,
      opacity: 1,
      duration: 0.7,
      delay: 0.3,
      ease: "power1.out",
    })
  }, []); // Se vuelve a ejecutar el efecto si 'target' o 'duration' cambian.

  useEffect(() => {
    if (progress >= 100) {
      const lt = gsap.timeline();

      lt.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power1.in",
      })
      .to(loaderSectionRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.in",
      })
    }
  }, [progress])
  return (
    <section ref={loaderSectionRef} className="h-screen w-screen bg-[url('/img/background-loader-image.jpg')] bg-cover bg-center fixed top-0 left-0 z-50 flex flex-col items-center justify-evenly">
      {children}

      <div ref={loaderRef} className="flex items-center gap-2 w-full px-40">
        <hr className="w-0 bg-white mr-auto animate-loader-lines" />
        <span ref={progressRef} className="text-neutral-300 text-9xl font-bold text-center opacity-0 translate-y-10">{progress}%</span>
        <hr className="w-0 bg-white ml-auto animate-loader-lines" />
      </div>
    </section>
  )
}
