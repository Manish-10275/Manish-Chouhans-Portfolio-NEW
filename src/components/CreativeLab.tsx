'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Sparkles, Eye, X, Palette, Type, Layout, Cpu, MousePointerClick } from 'lucide-react';
import Magnetic from './Magnetic';

interface DesignConcept {
  id: number;
  category: 'Branding' | 'UI/UX Design' | 'Typography & Motion';
  title: string;
  subtitle: string;
  description: string;
  palette: string[];
  fontFamily: string;
  colorsNotes: string;
  typographyNotes: string;
  layoutNotes: string;
  gradient: string;
  mockup: React.ReactNode;
}

export const CreativeLab: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [activeTab, setActiveTab] = useState<'All' | 'Branding' | 'UI/UX Design' | 'Typography & Motion'>('All');
  const [selectedConcept, setSelectedConcept] = useState<DesignConcept | null>(null);

  const concepts: DesignConcept[] = [
    {
      id: 0,
      category: 'Branding',
      title: 'Devoq Labs Rebrand',
      subtitle: 'Geometric Luxury Startups',
      description: 'A premium, futuristic startup brand system orchestrating overlapping lines, luxury violet gradients, and dark-glass elements to build corporate authority.',
      palette: ['#8B5CF6', '#3B82F6', '#10B981', '#0F172A'],
      fontFamily: 'Outfit / Space Grotesk',
      colorsNotes: 'Core luxury violet (#8B5CF6) paired with tech blue (#3B82F6). Emerald (#10B981) highlights success metrics.',
      typographyNotes: 'Outfit for high-impact display titles (semi-expanded tracking) + Space Grotesk for mono parameters.',
      layoutNotes: 'Strict 12-column grid utilizing bento-style blocks with uniform 24px grid gaps.',
      gradient: 'from-violet-600/20 via-blue-600/10 to-transparent',
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#0b0c10] border border-white/5 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center space-x-2">
              {/* Geometric Brand Logo */}
              <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-1 rotate-45">
                <div className="w-full h-full bg-[#0b0c10] rounded-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                </div>
              </div>
              <span className="font-display font-bold text-xs tracking-wider text-white">DEVOQ LABS</span>
            </div>
            <span className="text-[8px] font-mono text-white/30 border border-white/10 px-1.5 py-0.5 rounded">v2.0</span>
          </div>

          <div className="space-y-3 relative z-10 my-4">
            <div className="w-2/3 h-2.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded" />
            <div className="w-full h-1 bg-white/10 rounded" />
            <div className="w-4/5 h-1 bg-white/10 rounded" />
          </div>

          <div className="flex space-x-1.5 relative z-10">
            {['#8B5CF6', '#3B82F6', '#10B981'].map((c) => (
              <div key={c} className="flex-1 h-5 rounded border border-white/10 flex items-center justify-center text-[7px] font-mono font-bold" style={{ backgroundColor: c }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 1,
      category: 'UI/UX Design',
      title: 'Mind Mitra Companion',
      subtitle: 'Soothing Mental Interfaces',
      description: 'A psychological, highly-accessible chat system designed to reduce anxiety. Focuses on safe typography scales, low-contrast dark themes, and high touch target ratios.',
      palette: ['#059669', '#0EA5E9', '#111827', '#F3F4F6'],
      fontFamily: 'Inter / DM Sans',
      colorsNotes: 'Safe emerald (#059669) promotes peace, slate base (#111827) eliminates eye strain, soft warm white text prevents fatigue.',
      typographyNotes: 'Inter body texts at exactly 1.6x line-height ratio for high readability. Heading scales in bold DM Sans.',
      layoutNotes: 'Responsive mobile layouts optimized for single-thumb scrolling, safe zones, and 48px tap targets.',
      gradient: 'from-emerald-600/20 via-sky-600/10 to-transparent',
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0a0f12] border border-white/5 rounded-2xl relative">
          {/* Soothing Mobile Interface mock */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[10px] font-semibold text-white/90">Mitra Bot</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>

          <div className="flex-1 my-3 flex flex-col justify-end space-y-2.5">
            <div className="self-start bg-white/5 border border-white/5 rounded-xl rounded-tl-none p-2 max-w-[80%] text-[8px] text-white/70">
              Take a slow, deep breath in for 4 seconds.
            </div>
            <div className="self-end bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl rounded-tr-none p-2 max-w-[80%] text-[8px] text-white">
              Doing it now. Feels calmer.
            </div>
          </div>

          <div className="flex items-center space-x-1.5 border border-white/5 bg-white/[0.02] rounded-lg p-1">
            <div className="flex-1 h-3.5 bg-white/5 rounded-md" />
            <div className="w-3.5 h-3.5 rounded-md bg-emerald-600 flex items-center justify-center text-[7px] text-white">➜</div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: 'UI/UX Design',
      title: 'AgriBuddy Dashboard',
      subtitle: 'High-Contrast Rural Tools',
      description: 'A technical dashboard addressing farmers with visual limits. Features oversized interactive buttons, high accessibility contrasts (exceeding WCAG AAA), and clear iconography.',
      palette: ['#16A34A', '#D97706', '#1E293B', '#FFFFFF'],
      fontFamily: 'Inter / Outfit',
      colorsNotes: 'Natural forest green (#16A34A) for crops, safety amber (#D97706) for disease warnings, high-density slate backing.',
      typographyNotes: 'Oversized tracking, sans headings with clean numerical charts in monospace fonts.',
      layoutNotes: 'Responsive tablet card matrix featuring quick-touch buttons with expanded hit Slop values.',
      gradient: 'from-green-600/20 via-amber-600/10 to-transparent',
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-4 bg-[#081009] border border-white/5 rounded-2xl">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono text-green-400 font-bold uppercase tracking-wider">CROP STATUS</span>
            <span className="text-[8px] font-semibold bg-green-500/10 border border-green-500/30 px-1.5 py-0.5 rounded text-green-400">98% HEALTHY</span>
          </div>

          <div className="my-3 space-y-2">
            <div className="flex justify-between items-end border-b border-white/5 pb-1">
              <span className="text-[10px] text-white/50">Corn Field C</span>
              <span className="text-xs font-mono font-bold text-white">4.2ha</span>
            </div>
            {/* Mock chart grid */}
            <div className="h-10 w-full flex items-end space-x-1 pt-2">
              {[20, 45, 30, 60, 50, 85].map((val, i) => (
                <div key={i} className="flex-1 bg-green-600/20 border border-green-500/40 rounded-t" style={{ height: `${val}%` }} />
              ))}
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 py-1.5 rounded-lg text-[9px] font-semibold font-mono text-white transition-colors">
            RUN PATHOGEN DIAGNOSIS
          </button>
        </div>
      )
    },
    {
      id: 3,
      category: 'Typography & Motion',
      title: 'Cinematic Typography',
      subtitle: 'Serif & Gradient Explorations',
      description: 'A visual experiment showcasing elegant typography hierarchies—merging editorial serif fonts with vibrant flowing gradients to build dynamic content experiences.',
      palette: ['#EC4899', '#F43F5E', '#0B132B', '#E2E8F0'],
      fontFamily: 'Playfair Display / Inter',
      colorsNotes: 'High-vibrancy hot pink (#EC4899) and intense rose (#F43F5E) layered over a deep nebula space backdrop.',
      typographyNotes: 'Large, elegant Serif headings (italicized words for accent) contrasted with light geometric sans text.',
      layoutNotes: 'Fluid, single-column alignment with generous vertical white space (64px padding bounds).',
      gradient: 'from-pink-600/20 via-rose-600/10 to-transparent',
      mockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#0c050d] border border-white/5 rounded-2xl relative overflow-hidden">
          {/* Shifting radial backing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-pink-500/20 blur-xl pointer-events-none" />

          <div className="text-[8px] font-mono text-pink-500 tracking-widest uppercase">LAB POSTER #04</div>

          <div className="my-4 space-y-1 relative z-10 text-left">
            <h1 className="text-xl md:text-2xl font-serif text-white leading-none italic font-light">
              Design is
            </h1>
            <h1 className="text-2xl md:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 leading-none">
              SILENT POETRY.
            </h1>
          </div>

          <div className="text-[8px] text-white/50 leading-relaxed font-sans max-w-[90%]">
            Visual rhythm dictates readability. A study in typography contrast and color psychology.
          </div>
        </div>
      )
    }
  ];

  const filteredConcepts = activeTab === 'All' 
    ? concepts 
    : concepts.filter(c => c.category === activeTab);

  return (
    <section id="creative-lab" className="py-24 relative overflow-hidden bg-background border-t border-white/5 select-none">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Creative Lab</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4 select-text">
            UI/UX & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Design System Spec Sheets</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Explore live interactive mockups rendering design systems in real-time. Hover to reveal specs, click to audit tokens.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['All', 'Branding', 'UI/UX Design', 'Typography & Motion'] as const).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <Magnetic key={tab} range={30} actionStrength={0.4}>
                <button
                  onClick={() => {
                    setActiveTab(tab);
                    playClickSound();
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-5 py-2.5 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-white text-black border-white shadow-lg font-bold' 
                      : 'bg-white/5 border-white/5 text-white/60 hover:border-white/10 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              </Magnetic>
            );
          })}
        </div>

        {/* Concept Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredConcepts.map((concept) => (
              <motion.div
                layout
                key={concept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl border border-white/5 bg-white/[0.01] p-6 flex flex-col md:flex-row gap-6 items-center hover:border-white/10 hover:bg-white/[0.02] transition-all overflow-hidden"
              >
                {/* Spotlight Background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none`} />

                {/* Mockup Showcase Panel */}
                <div className="w-[200px] h-[220px] flex-shrink-0 relative group-hover:scale-102 transition-transform duration-300">
                  {concept.mockup}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl pointer-events-none">
                    <div className="flex items-center space-x-1.5 bg-black/80 border border-white/10 px-3 py-1.5 rounded-full text-[9px] font-mono text-white/90">
                      <Eye className="w-3.5 h-3.5 text-brand-blue" />
                      <span>AUDIT DESIGN SYSTEM</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 space-y-4 text-center md:text-left relative z-10">
                  <div>
                    <span className="text-[9px] font-mono text-brand-purple uppercase tracking-widest">{concept.category}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">{concept.title}</h3>
                    <p className="text-xs text-white/40 font-mono mt-0.5">{concept.subtitle}</p>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                    {concept.description}
                  </p>

                  <div className="flex justify-center md:justify-start items-center space-x-3">
                    <button
                      onClick={() => {
                        setSelectedConcept(concept);
                        playClickSound();
                      }}
                      onMouseEnter={playHoverSound}
                      className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] font-mono text-white transition-all cursor-pointer"
                    >
                      <MousePointerClick className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Inspect System Specs</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* System Spec Sheet Audit Modal */}
      <AnimatePresence>
        {selectedConcept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedConcept(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-2xl bg-[#090a0d] border border-white/10 rounded-3xl relative overflow-hidden shadow-2xl z-10 p-6 md:p-8"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-blue/15 text-brand-blue border border-brand-blue/20">
                    <Palette className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight font-display">{selectedConcept.title}</h3>
                    <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest">{selectedConcept.category} Spec Sheet</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedConcept(null);
                    playClickSound();
                  }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-white/50 transition-all cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Spec Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Mockup Preview column */}
                <div className="bg-black/35 border border-white/5 rounded-2xl p-5 flex items-center justify-center h-[240px]">
                  <div className="w-[180px] h-[200px]">
                    {selectedConcept.mockup}
                  </div>
                </div>

                {/* Audit specifications */}
                <div className="space-y-5 text-left">
                  {/* Swatches block */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-white/30 uppercase block font-bold tracking-wider">Color Harmony Swatches</span>
                    <div className="flex gap-2">
                      {selectedConcept.palette.map((color, i) => (
                        <div key={i} className="flex-1 flex flex-col space-y-1 items-center">
                          <div className="w-full h-8 rounded-lg border border-white/10" style={{ backgroundColor: color }} />
                          <span className="text-[8px] font-mono text-white/40">{color}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-sans">{selectedConcept.colorsNotes}</p>
                  </div>

                  {/* Typography scale */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3.5">
                    <div className="flex items-center space-x-1.5 text-[9px] font-mono text-white/30 uppercase font-bold tracking-wider">
                      <Type className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Typography Pairing Scale</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-2 rounded-lg text-xs font-mono text-white/80">
                      {selectedConcept.fontFamily}
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-sans">{selectedConcept.typographyNotes}</p>
                  </div>

                  {/* Layout & Composition */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3.5">
                    <div className="flex items-center space-x-1.5 text-[9px] font-mono text-white/30 uppercase font-bold tracking-wider">
                      <Layout className="w-3.5 h-3.5 text-brand-purple" />
                      <span>Grid & Structural Layout</span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-sans">{selectedConcept.layoutNotes}</p>
                  </div>
                </div>
              </div>

              {/* Footer specs */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/30">
                <div className="flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                  <span>COMPLIANCE: WCAG 2.2 AA COMPATIBLE</span>
                </div>
                <span>AUDIT SECURE</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreativeLab;
