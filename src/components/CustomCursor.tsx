'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '@/context/AppContext';

export const CustomCursor: React.FC = () => {
  const { playHoverSound } = useApp();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const trailRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    let activeElement: Element | null = null;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Update custom properties on html element for radial grid hover effect
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`);
      document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`);

      // Event delegation for custom cursor hover triggers
      const target = e.target as HTMLElement;
      if (target) {
        const hoverable = target.closest('a, button, [role="button"], input, select, textarea, .hover-trigger');
        if (hoverable) {
          if (activeElement !== hoverable) {
            activeElement = hoverable;
            setIsHovered(true);
            playHoverSound();
          }
        } else {
          if (activeElement !== null) {
            activeElement = null;
            setIsHovered(false);
          }
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      activeElement = null;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
      
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobile, playHoverSound]);

  // Smooth trail effect with RequestAnimationFrame
  useEffect(() => {
    if (isMobile || !isVisible) return;

    let animFrameId: number;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animFrameId = requestAnimationFrame(updateTrail);
    };

    animFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrameId);
  }, [position, isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={trailRef}
        className={`custom-cursor-ring ${isHovered ? 'custom-cursor-hover' : ''}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? '#8B5CF6' : '#3B82F6'
        }}
      />
    </>
  );
};

export default CustomCursor;
