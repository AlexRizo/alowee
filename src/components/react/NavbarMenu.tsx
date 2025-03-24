import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NavbarMenuProps {
  // Si necesitas props, agrégalas aquí
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function NavbarMenu({ setIsMenuOpen }: NavbarMenuProps) {
  const linesRef = useRef<HTMLHRElement[]>([]);
  const elementsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLElement>(null);
  const navMenuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbarTl = gsap.timeline();
    const tl = gsap.timeline();
    const elementsTl = gsap.timeline();
    const allElementsTl = gsap.timeline();

    navbarTl.from(navMenuRef.current, {
      top: '-100%',
      duration: 1,
      ease: 'power2.inOut',
    });
    
    // Animación de líneas
    linesRef.current.forEach((line, index) => {
      if (index === 0) {
        tl.to(line, {
          width: '100%',
          duration: 0.5,
          ease: 'power3.inOut',
          delay: .6
        });
      } else {
        tl.to(line, {
          width: '100%',
          duration: 0.5,
          ease: 'power3.inOut',
        });
      }
    });

    // Animación de elementos
    elementsTl.from(buttonRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    });

    elementsRef.current.forEach((element, index) => {
      elementsTl.from(element, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, (index + 1) * 0.5);
    });

    // Manejador del botón quit
    const handleQuit = () => {
      allElementsTl
        .to(navMenuContentRef.current, {
          opacity: 0,
          duration: .5,
          ease: 'power2.inOut',
        })
        .to(navMenuRef.current, {
          top: '-100%',
          duration: 1,
          ease: 'power2.inOut',
        }, 0.2)
        .to(navMenuRef.current, {
          display: 'none',
        })
        .to(navMenuRef.current, {
          top: 0,
          onComplete: () => {
            setIsMenuOpen(false);
          }
        });
    };

    buttonRef.current?.addEventListener('click', handleQuit);

    // Limpieza
    return () => {
      buttonRef.current?.removeEventListener('click', handleQuit);
    };
  }, []);

  return (
    <nav ref={navMenuRef} className="fixed top-0 left-0 w-full h-full bg-warning-600 z-50 p-18">
      <div 
        ref={navMenuContentRef}
        className="text-[5.60rem] leading-[inherit] text-outline flex flex-col gap-5 font-extrabold"
      >
        <button ref={buttonRef} id="quit" className="cursor-pointer">
          <img src="./icons/quit.svg" alt="Quit" width={77} height={77} />
        </button>
        {['DISEÑO', 'ANIMACIÓN 2D Y VIDEO', 'DISEÑO WEB', 'CAMPAÑAS INTERACTIVAS'].map((text, index) => (
          <span key={text} className="relative">
            <a 
              ref={el => { if (el) elementsRef.current[index] = el }}
              href={`/#${text.toLowerCase().replace(/ /g, '-')}`}
            >
              {text}
            </a>
            <hr ref={el => { if (el) linesRef.current[index] = el }} className="w-0"/>
          </span>
        ))}
      </div>
    </nav>
  );
}