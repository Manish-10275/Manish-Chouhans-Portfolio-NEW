'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Home, User, Laptop, Briefcase, Award, Sparkles, Mail, Terminal, Volume2, VolumeX, Sun, Moon } from 'lucide-react';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  action: () => void;
}

export const FloatingDock: React.FC = () => {
  const {
    theme,
    setTheme,
    soundEnabled,
    toggleSound,
    setCommandPaletteOpen,
    playClickSound,
    playHoverSound
  } = useApp();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(Infinity);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems: DockItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      action: () => scrollToSection('hero')
    },
    {
      icon: <User className="w-5 h-5" />,
      label: 'About',
      action: () => scrollToSection('about')
    },
    {
      icon: <Laptop className="w-5 h-5" />,
      label: 'Skills',
      action: () => scrollToSection('skills')
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Experience',
      action: () => scrollToSection('experience')
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: 'Projects',
      action: () => scrollToSection('projects')
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: 'Achievements',
      action: () => scrollToSection('achievements')
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Contact',
      action: () => scrollToSection('contact')
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      label: 'Console (Ctrl+K)',
      action: () => setCommandPaletteOpen(true)
    },
    {
      icon: soundEnabled ? <Volume2 className="w-5 h-5 text-green-400" /> : <VolumeX className="w-5 h-5 text-white/50" />,
      label: soundEnabled ? 'Mute' : 'Unmute',
      action: () => toggleSound()
    },
    {
      icon: theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-500" />,
      label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      action: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9980] pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHoveredIndex(null);
        }}
        className="mx-auto flex h-16 items-end gap-3 rounded-2xl px-4 pb-3 border border-white/10 bg-background/80 backdrop-blur-md shadow-2xl pointer-events-auto glass-panel"
      >
        {dockItems.map((item, idx) => (
          <DockIcon
            key={idx}
            mouseX={mouseX}
            idx={idx}
            item={item}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            playClickSound={playClickSound}
            playHoverSound={playHoverSound}
          />
        ))}
      </motion.div>
    </div>
  );
};

interface DockIconProps {
  mouseX: any;
  idx: number;
  item: DockItem;
  hoveredIndex: number | null;
  setHoveredIndex: (val: number | null) => void;
  playClickSound: () => void;
  playHoverSound: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({
  mouseX,
  idx,
  item,
  hoveredIndex,
  setHoveredIndex,
  playClickSound,
  playHoverSound
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: width as any, height: height as any }}
      onMouseEnter={() => {
        setHoveredIndex(idx);
        playHoverSound();
      }}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => {
        item.action();
        playClickSound();
      }}
      className="relative flex aspect-square items-center justify-center rounded-xl bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: -45, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            className="absolute left-1/2 -translate-x-1/2 rounded-md bg-black/90 border border-white/10 px-2 py-1 text-[10px] font-mono text-white whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-center">{item.icon}</div>
    </motion.div>
  );
};

export default FloatingDock;
