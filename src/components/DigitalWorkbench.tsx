'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Folder, FileText, Pin, X, Eye, Laptop, BookOpen, Link, Star, CornerDownLeft } from 'lucide-react';
import Magnetic from './Magnetic';

interface FloatingWindow {
  id: string;
  title: string;
  content: React.ReactNode;
  x: number;
  y: number;
}

export const DigitalWorkbench: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const workbenchRef = useRef<HTMLDivElement>(null);
  const [openWindows, setOpenWindows] = useState<FloatingWindow[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

  const openWindow = (id: string, title: string, content: React.ReactNode) => {
    // Check if window is already open
    if (openWindows.some((w) => w.id === id)) {
      setActiveWindowId(id);
      return;
    }
    
    // Add new window with slightly offset coordinates
    const offset = openWindows.length * 25;
    const newWindow: FloatingWindow = {
      id,
      title,
      content,
      x: 50 + offset,
      y: 60 + offset,
    };
    
    setOpenWindows([...openWindows, newWindow]);
    setActiveWindowId(id);
    playClickSound();
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(openWindows[0]?.id || null);
    }
    playClickSound();
  };

  // Projects window content
  const projectsContent = (
    <div className="space-y-4 font-sans text-white/80 text-xs md:text-sm p-1">
      <p className="text-white/60 mb-2 font-mono text-[10px]">Total items matching tag: 3</p>
      
      <div className="border-b border-white/5 pb-2.5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-white flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span>Mind Mitra AI</span>
          </span>
          <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-brand-blue">Active</span>
        </div>
        <p className="text-white/50 text-[11px] mt-1">An intelligent mental counseling pipeline leveraging sentiment classification models.</p>
      </div>

      <div className="border-b border-white/5 pb-2.5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-white flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span>AgriBuddy Pathogen Diagnosis</span>
          </span>
          <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-brand-purple">Active</span>
        </div>
        <p className="text-white/50 text-[11px] mt-1">A smart computer vision tool analyzing leaf pathogens to advise rural farmers.</p>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-white flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Devoq Labs Suite</span>
          </span>
          <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-brand-accent">Enterprise</span>
        </div>
        <p className="text-white/50 text-[11px] mt-1">High-performance custom web apps built for startups and global enterprises.</p>
      </div>
    </div>
  );

  // Creative/Design Lab specs content
  const designSpecsContent = (
    <div className="space-y-4 font-mono text-[11px] text-white/70 p-1">
      <div>
        <span className="text-brand-purple block uppercase font-bold tracking-wider mb-1">Grid System specs</span>
        <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-white/80">
          TYPE: Responsive Bento Grid<br />
          COLS: 12 Columns / 6 Columns Mobile<br />
          GAP: 24px Uniform<br />
          PADDING: 32px Container Bounds
        </div>
      </div>
      <div>
        <span className="text-brand-blue block uppercase font-bold tracking-wider mb-1">Color Palette</span>
        <div className="flex gap-1.5">
          {['#050505', '#3B82F6', '#8B5CF6', '#A78BFA'].map((c) => (
            <div key={c} className="flex-1 flex flex-col space-y-0.5 items-center">
              <div className="w-full h-5 rounded border border-white/10" style={{ backgroundColor: c }} />
              <span className="text-[8px] font-mono text-white/40">{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="text-brand-accent block uppercase font-bold tracking-wider mb-1">Typography tokens</span>
        <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-white/80">
          Display: Space Grotesk (tracking-tight)<br />
          Body: DM Sans (line-height: 1.6x)<br />
          Editorial Accent: Playfair Display Italic<br />
          Comments: Caveat (Cursive handwritten note)
        </div>
      </div>
    </div>
  );

  // About/Identity content
  const identityContent = (
    <div className="space-y-4 font-sans text-white/80 text-xs md:text-sm p-1">
      <div className="flex items-center space-x-4">
        {/* Mock profile sketch */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-0.5 relative shrink-0">
          <div className="w-full h-full bg-[#0d0e12] rounded-[14px] flex items-center justify-center">
            <span className="font-serif italic text-lg text-brand-blue">MC</span>
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-accent rounded-full border border-black flex items-center justify-center">
            <Star className="w-2.5 h-2.5 text-black fill-black" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">Manish Chouhan</h4>
          <p className="text-[10px] font-mono text-white/40">Founder & CEO, Devoq Labs</p>
          <p className="text-[10px] font-mono text-white/40">IIT Madras Data Science</p>
        </div>
      </div>

      <p className="text-[11px] text-white/60 leading-relaxed font-sans mt-2">
        Multidisciplinary tech builder bridging raw code architectures with high-fidelity creative visual designs. Dedicated to designing premium web products.
      </p>

      <div className="flex gap-2">
        <a 
          href="https://calendly.com/manishchouhan10042006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center bg-white text-black font-semibold py-2 rounded-xl text-[10px] hover:bg-white/90 transition-colors"
        >
          Book 1-on-1 Sync
        </a>
      </div>
    </div>
  );

  return (
    <section id="interactive-workbench" className="py-24 relative overflow-hidden bg-background border-t border-white/5 select-none">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-purple mb-4 tracking-widest uppercase font-mono"
          >
            <span>Interactive Space</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Archival Workbench</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            A tactile, scrapbook desktop experience inspired by wildyriftian.com. Drag nodes, stack cards, and double-click files to open windows.
          </p>
        </div>

        {/* Workbench Desktop Area */}
        <div 
          ref={workbenchRef}
          className="relative min-h-[580px] border border-white/5 bg-[#08080a] rounded-3xl overflow-hidden p-6 md:p-8"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        >
          {/* Cursive Doodles/Handwritten Annotation */}
          <div className="absolute top-6 right-8 text-right pointer-events-none z-10 hidden md:block">
            <span className="font-script text-brand-accent text-xl rotate-[3deg] block">
              Drag folders to fling them around!
            </span>
            <span className="font-script text-white/30 text-sm block">
              Double-click file icons to open windows
            </span>
          </div>

          <div className="absolute bottom-6 left-6 pointer-events-none z-10 hidden md:flex items-center space-x-1 font-script text-brand-blue text-lg rotate-[-2deg]">
            <CornerDownLeft className="w-5 h-5" />
            <span>Interactive tactile desk simulation</span>
          </div>

          {/* Desktop Folders/Items */}
          
          {/* 1. Projects Folder */}
          <motion.div
            drag
            dragConstraints={workbenchRef}
            dragElastic={0.08}
            onDoubleClick={() => openWindow('projects', 'Projects Archive', projectsContent)}
            className="absolute top-16 left-12 cursor-grab active:cursor-grabbing z-20 flex flex-col items-center space-y-1.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
          >
            <div className="relative">
              <Folder className="w-12 h-12 text-yellow-500/80 fill-yellow-500/20" />
              <Laptop className="w-4.5 h-4.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-[10px] font-mono font-bold text-white/80">projects_db</span>
          </motion.div>

          {/* 2. Design System specs folder */}
          <motion.div
            drag
            dragConstraints={workbenchRef}
            dragElastic={0.08}
            onDoubleClick={() => openWindow('design_specs', 'Design System Spec Sheet', designSpecsContent)}
            className="absolute top-48 left-16 cursor-grab active:cursor-grabbing z-20 flex flex-col items-center space-y-1.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
          >
            <div className="relative">
              <Folder className="w-12 h-12 text-brand-blue/80 fill-brand-blue/20" />
              <FileText className="w-4.5 h-4.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-[10px] font-mono font-bold text-white/80">design_tokens</span>
          </motion.div>

          {/* 3. About Me folder */}
          <motion.div
            drag
            dragConstraints={workbenchRef}
            dragElastic={0.08}
            onDoubleClick={() => openWindow('identity', 'Digital Identity Card', identityContent)}
            className="absolute top-80 left-12 cursor-grab active:cursor-grabbing z-20 flex flex-col items-center space-y-1.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
          >
            <div className="relative">
              <Folder className="w-12 h-12 text-brand-purple/80 fill-brand-purple/20" />
              <BookOpen className="w-4.5 h-4.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-[10px] font-mono font-bold text-white/80">manish_bio</span>
          </motion.div>

          {/* 4. Draggable Sticky Note */}
          <motion.div
            drag
            dragConstraints={workbenchRef}
            dragElastic={0.08}
            className="absolute top-16 right-16 cursor-grab active:cursor-grabbing z-20 w-44 p-4 rounded-xl bg-pink-900/10 border border-pink-500/30 text-pink-300 shadow-xl flex flex-col justify-between rotate-[-3deg] hover:bg-pink-900/15 transition-all"
          >
            <div className="flex justify-between items-center mb-2 pb-1 border-b border-pink-500/20">
              <span className="text-[9px] font-mono tracking-wider font-bold">STICKY_TASK</span>
              <Pin className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            </div>
            <ul className="space-y-1.5 font-script text-base text-pink-200/90 leading-tight">
              <li>1. Sync with Calendly</li>
              <li>2. Rebrand Devoq Labs</li>
              <li>3. Polish 3D Globe</li>
              <li>4. IITM Assignments</li>
            </ul>
          </motion.div>

          {/* 5. Draggable Polaroid Frame */}
          <motion.div
            drag
            dragConstraints={workbenchRef}
            dragElastic={0.08}
            className="absolute bottom-16 right-16 cursor-grab active:cursor-grabbing z-20 w-40 p-3 bg-neutral-900 border border-white/10 rounded-lg shadow-2xl flex flex-col space-y-3 rotate-[4deg] hover:border-white/20 transition-all"
          >
            {/* Visual display box */}
            <div className="w-full h-28 bg-[#121214] border border-white/5 rounded flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              {/* Abstract avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#121214] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif italic text-xs font-light">MC</span>
                </div>
              </div>
            </div>
            {/* Polaroid caption */}
            <div className="text-center font-script text-lg text-white/70 leading-none">
              Manish, 2026
            </div>
          </motion.div>

          {/* Render Active Windows Stack */}
          <AnimatePresence>
            {openWindows.map((win) => {
              const isActive = activeWindowId === win.id;
              return (
                <motion.div
                  key={win.id}
                  drag
                  dragConstraints={workbenchRef}
                  dragElastic={0.05}
                  initial={{ opacity: 0, scale: 0.95, y: win.y, x: win.x }}
                  animate={{ opacity: 1, scale: 1, y: win.y, x: win.x }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onPointerDown={() => setActiveWindowId(win.id)}
                  className={`absolute w-72 bg-[#0d0e12] border rounded-2xl shadow-2xl overflow-hidden flex flex-col cursor-grab active:cursor-grabbing ${
                    isActive ? 'z-40 border-white/15 shadow-brand-blue/5' : 'z-30 border-white/5 opacity-80'
                  }`}
                  style={{ top: 0, left: 0 }}
                >
                  {/* Window Title Bar */}
                  <div className="flex justify-between items-center px-4 py-2.5 bg-black/40 border-b border-white/5">
                    <span className="text-[10px] font-mono text-white/50 tracking-wider flex items-center space-x-1.5 font-bold">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-brand-blue animate-pulse' : 'bg-white/20'}`} />
                      <span>{win.title}</span>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(win.id);
                      }}
                      className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  {/* Window Content */}
                  <div className="p-4 select-text cursor-default">
                    {win.content}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkbench;
