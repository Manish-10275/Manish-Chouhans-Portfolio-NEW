'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useApp } from '@/context/AppContext';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loadingComplete } = useApp();

  useEffect(() => {
    // Only run scroll smoothing if loading is finished
    if (!loadingComplete) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple style easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [loadingComplete]);

  return <>{children}</>;
};

export default SmoothScroll;
