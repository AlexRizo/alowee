import type { JSX } from "astro/jsx-runtime"
import { useEffect, useState, type FC } from "react"

interface Props {
  children: JSX.Element;
}

export const Loader: FC<Props> = ({ children }) => {

  const [progress, setProgress] = useState<number>(0);

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
      const progress = Math.min(elapsed / 6000, 1);
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
  }, []); // Se vuelve a ejecutar el efecto si 'target' o 'duration' cambian.


  return (
    <section className="h-screen w-screen bg-black fixed top-0 left-0 z-50 flex flex-col items-center justify-evenly">
      {children}

      <div className="flex items-center gap-2 w-full px-40">
        <hr className="w-0 bg-white mr-auto animate-loader-lines" />
        <span className="text-white text-6xl font-bold text-center">{progress}%</span>
        <hr className="w-0 bg-white ml-auto animate-loader-lines" />
      </div>
    </section>
  )
}
