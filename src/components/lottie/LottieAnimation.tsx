import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { cn } from '@utils/cn';

interface Props {
  path: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  id?: string;
}

export const LottieAnimation = ({
  path,
  className = '',
  loop = false,
  autoplay = false,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path,
    });

    return () => animation.destroy();
  }, [path, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={cn(className)}
    />
  );
};