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
    let start: any = null;

    // Función de easing: easeOutQuad aplica desaceleración.
    // t es un valor entre 0 y 1, y devuelve un valor modificado para que la animación decelere.
    const easeOutQuad = (t: number) => t * (2 - t);

    // Función animate: Se encarga de la animación utilizando requestAnimationFrame.
    const animate = (timestamp: number) => {
      if (!start) start = timestamp; // Se guarda el tiempo inicial en la primera llamada.
      const elapsed = timestamp - start; // Tiempo transcurrido desde el inicio.
      // progress es el avance de la animación, limitado a 1 (100%).
      const progress = Math.min(elapsed / 5500, 1);
      // Se aplica la función de easing para desacelerar la animación al final.
      const easedProgress = easeOutQuad(progress);
      // Se actualiza el estado del contador, redondeando el valor.
      setProgress(Math.floor(easedProgress * 100));

      // Si la animación no ha terminado, se solicita el siguiente frame.
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Se inicia la animación.
    requestAnimationFrame(animate);

    gsap.to(progressRef.current, {
      y:0,
      opacity: 1,
      duration: 0.5,
      delay: 0.15,
      ease: "power1.out",
    })
  }, []); // Se vuelve a ejecutar el efecto si 'target' o 'duration' cambian.

  useEffect(() => {
    if (progress >= 100) {
      const lt = gsap.timeline();

      lt.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.4,
        ease: "power1.out",
      })
      .to(loaderSectionRef.current, {
        y: "-100%",
        duration: .7,
        ease: "power2.in",
      })
    }
  }, [progress])
  return (
    <section ref={loaderSectionRef} className="h-screen w-screen bg-[url('/img/background-loader-image.jpg')] bg-cover bg-center fixed top-0 left-0 z-50 flex flex-col items-center justify-evenly">
      {children}

      <div ref={loaderRef} className="flex items-center gap-2 w-full px-40">
        <hr className="w-0 bg-white mr-auto animate-loader-lines" />
        <span ref={progressRef} className="text-neutral-300 text-8xl font-bold text-center opacity-0 translate-y-10">{progress}%</span>
        <hr className="w-0 bg-white ml-auto animate-loader-lines" />
      </div>
    </section>
  )
}
