import React, { type ReactNode, useEffect, useRef, useState } from 'react';

type AnimationType =
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number; // visibility ratio to trigger
  once?: boolean; // trigger animation only once
}

export const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // triggers slightly before entering view
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  // Animation base and active classes
  const getAnimationStyles = (): { base: string; active: string } => {
    switch (animation) {
      case 'fade-up':
        return {
          base: 'opacity-0 translate-y-12',
          active: 'opacity-100 translate-y-0',
        };
      case 'fade-in':
        return {
          base: 'opacity-0',
          active: 'opacity-100',
        };
      case 'slide-left':
        return {
          base: 'opacity-0 -translate-x-12',
          active: 'opacity-100 translate-x-0',
        };
      case 'slide-right':
        return {
          base: 'opacity-0 translate-x-12',
          active: 'opacity-100 translate-x-0',
        };
      case 'scale-up':
        return {
          base: 'opacity-0 scale-95',
          active: 'opacity-100 scale-100',
        };
      default:
        return {
          base: 'opacity-0 translate-y-12',
          active: 'opacity-100 translate-y-0',
        };
    }
  };

  const { base, active } = getAnimationStyles();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      <div
        className={`transition-all delay-[inherit] duration-[inherit] ease-out ${
          isIntersecting ? active : base
        }`}
      >
        {children}
      </div>
    </div>
  );
};
