'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const BOOT_LOGS = [
  'INITIALIZING SYSTEM ARCHITECTURE...',
  'ESTABLISHING CONNECTION TO IIT MADRAS DATA NODES...',
  'FETCHING PROJECTS DATABASE...',
  'LOADING DEVOQ LABS ECOSYSTEM...',
  'GENERATING 3D PARTICLES SPHERE...',
  'SYNCHRONIZING AI ASSISTANT MODEL...',
  'OPTIMIZING CLIENT SIDE INTERFACE...',
  'ACCESS GRANTED. WELCOME.'
];

export const LoadingScreen: React.FC = () => {
  const { loadingProgress, setLoadingProgress, loadingComplete, setLoadingComplete, playChimeSound } = useApp();
  const [currentLogIdx, setCurrentLogIdx] = useState(0);

  useEffect(() => {
    if (loadingComplete) return;

    // Simulate progress
    const duration = 2400; // 2.4s
    const stepTime = Math.round(duration / 100);
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setLoadingProgress(current);

      // Cycle logs relative to progress
      const targetLogIdx = Math.min(
        Math.floor((current / 100) * BOOT_LOGS.length),
        BOOT_LOGS.length - 1
      );
      setCurrentLogIdx(targetLogIdx);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoadingComplete(true);
          playChimeSound();
        }, 300);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [setLoadingProgress, setLoadingComplete, loadingComplete, playChimeSound]);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top Panel */}
          <div className="flex justify-between items-center text-xs md:text-sm font-mono text-white/40 z-10">
            <span>MC_SYSTEMS_v1.5.0</span>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span>SECURE PROTOCOL ACTIVE</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex flex-col justify-center items-start space-y-6 max-w-2xl w-full mx-auto my-auto z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-6xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40"
            >
              MANISH CHOUHAN
            </motion.h1>
            
            <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <div className="flex justify-between items-center w-full font-mono text-xs md:text-sm text-white/60">
              <div className="flex flex-col space-y-1 h-12 overflow-hidden justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentLogIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-brand-blue tracking-wide"
                  >
                    {BOOT_LOGS[currentLogIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-xl md:text-2xl font-bold font-display text-white">{loadingProgress}%</span>
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] md:text-xs font-mono text-white/30 space-y-4 md:space-y-0 z-10">
            <span>© 2026 MANISH CHOUHAN. ALL RIGHTS RESERVED.</span>
            <span>BUILT WITH NEXT.JS 15 + REACT THREE FIBER + FRAME MOTION</span>
          </div>

          {/* Glowing back lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
