'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Sparkles, Server, Instagram, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import Magnetic from './Magnetic';

// Dynamically load the WebGL scene to prevent hydration mismatches
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const SparklesBackground: React.FC = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // Generate 16 random sparkles
    const initialSparkles = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3.5 + 1,
    }));
    setSparkles(initialSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute rounded-full bg-brand-purple"
          style={{
            left: `${sp.x}%`,
            top: `${sp.y}%`,
            width: sp.size,
            height: sp.size,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [0, -40],
          }}
          transition={{
            duration: Math.random() * 2 + 1.8,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const { playHoverSound, playClickSound } = useApp();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    playClickSound();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden select-none">
      {/* 3D WebGL particle space scene background */}
      <HeroScene />

      {/* Dynamic Sparkles Floating Backdrop */}
      <SparklesBackground />

      {/* Main Overlay Contents */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full text-center space-y-8 flex flex-col items-center"
      >
        {/* Top Badging */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-brand-blue tracking-widest uppercase font-mono shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
          <span>PORTFOLIO DIRECTIVE v1.5</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-display font-black tracking-tight leading-none text-white select-text"
        >
          MANISH CHOUHAN
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-lg md:text-3xl font-display font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent"
        >
          Founder • Builder • Innovator
        </motion.div>

        {/* Pitch Statement */}
        <motion.p
          variants={itemVariants}
          className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed font-sans"
        >
          "I build startups, digital products, and AI-powered experiences that solve real-world problems."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20"
        >
          <Magnetic>
            <motion.button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={playHoverSound}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent hover:shadow-lg rounded-xl px-7 py-4 text-xs font-mono text-white transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Magnetic>

          <Magnetic>
            <motion.button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={playHoverSound}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-7 py-4 text-xs font-mono text-white transition-all cursor-pointer"
            >
              <span>Let's Build Together</span>
            </motion.button>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="https://canva.link/z8w8qqvzceccfyk"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-7 py-4 text-xs font-mono text-white transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-brand-blue" />
              <span>Download CV</span>
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* Social Icons row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-5 pt-4 z-20"
        >
          <Magnetic range={40} actionStrength={0.5}>
            <motion.a
              href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.2, y: -4, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/40 hover:text-white transition-all flex items-center justify-center cursor-pointer p-1"
            >
              <Linkedin className="w-5.5 h-5.5" />
            </motion.a>
          </Magnetic>

          <Magnetic range={40} actionStrength={0.5}>
            <motion.a
              href="https://github.com/Manish-10275"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.2, y: -4, rotate: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/40 hover:text-white transition-all flex items-center justify-center cursor-pointer p-1"
            >
              <Github className="w-5.5 h-5.5" />
            </motion.a>
          </Magnetic>

          <Magnetic range={40} actionStrength={0.5}>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.2, y: -4, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/40 hover:text-white transition-all flex items-center justify-center cursor-pointer p-1"
            >
              <Twitter className="w-5.5 h-5.5" />
            </motion.a>
          </Magnetic>

          <Magnetic range={40} actionStrength={0.5}>
            <motion.a
              href="https://www.instagram.com/i_m_manish_chouhan/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.2, y: -4, rotate: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/40 hover:text-white transition-all flex items-center justify-center cursor-pointer p-1"
            >
              <Instagram className="w-5.5 h-5.5" />
            </motion.a>
          </Magnetic>

          <Magnetic range={40} actionStrength={0.5}>
            <motion.a
              href="mailto:manishchouhan123@gmail.com"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              whileHover={{ scale: 1.2, y: -4, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/40 hover:text-white transition-all flex items-center justify-center cursor-pointer p-1"
            >
              <Mail className="w-5.5 h-5.5" />
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Floating Info Panels (Awwwards Style) */}
      <div className="absolute bottom-20 left-6 right-6 hidden md:flex justify-between items-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex items-center space-x-3 text-left max-w-xs shadow-md glass-panel"
        >
          <Server className="w-4 h-4 text-brand-blue" />
          <div>
            <span className="text-[9px] font-mono text-white/30 uppercase block">CORE ALIGNMENT</span>
            <span className="text-xs font-semibold text-white/80 font-sans block">IIT Madras BS Data Science</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex items-center space-x-3 text-left max-w-xs shadow-md glass-panel"
        >
          <Sparkles className="w-4 h-4 text-brand-purple" />
          <div>
            <span className="text-[9px] font-mono text-white/30 uppercase block">ACTIVE STARTUP</span>
            <span className="text-xs font-semibold text-white/80 font-sans block">Founder & CEO @ Devoq Labs</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-white/30 font-mono text-[9px] pointer-events-none select-none">
        <span>SCROLL DOWN</span>
        <div className="w-1.5 h-6 rounded-full bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-2.5 rounded-full bg-brand-blue absolute top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
