'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText, Phone, MapPin, Terminal, Cpu } from 'lucide-react';
import InteractiveHeroCanvas from './InteractiveHeroCanvas';
import InteractiveTerminal from './InteractiveTerminal';
import { SectionMarker } from './EngineeringMotif';

export const HeroSection: React.FC = () => {
  const [activeVisualTab, setActiveVisualTab] = useState<'canvas' | 'terminal'>('canvas');

  // Animation variants with staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-10 border-b border-[#E2E4DC] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Engineering Status Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF1EC] border border-[#D7E2D9]">
                <span className="w-2 h-2 rounded-full bg-[#58745C] animate-pulse" />
                <span className="text-xs font-mono font-medium text-[#354837]">
                  BUILD • REASON • SHIP
                </span>
              </div>
              <span className="text-xs font-mono text-[#6B7168] hidden sm:inline">
                IIT Madras Data Science &amp; Harvard Studies
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[#20231F] leading-[1.08]">
                Software Engineer, AI Engineer &amp; Product Builder
              </h1>
            </motion.div>

            {/* Narrative / Professional Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#52584F] leading-relaxed font-normal max-w-2xl"
            >
              Architecting dependable backend systems, orchestrating generative AI workflows, and directing end-to-end product lifecycles. Combining analytical rigor in data science from <strong className="text-[#20231F] font-semibold">IIT Madras</strong> with strategic management principles from <strong className="text-[#20231F] font-semibold">Harvard University</strong>.
            </motion.p>

            {/* Micro Tech Stack Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono text-[#8D938A] mr-1.5">STACK //</span>
              {['TypeScript', 'Fastify', 'Next.js', 'Python', 'OpenAI & Gemini', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-white text-[#20231F] border border-[#E2E4DC] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#20231F] hover:bg-[#353A33] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium text-[#20231F] bg-white border border-[#E2E4DC] hover:bg-[#F0F1EA] hover:border-[#D1D4CA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58745C]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B7168]" />
              </a>

              <a
                href="/resume.pdf"
                download="Manish_Chouhan_CV.pdf"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium text-[#58745C] hover:text-[#47604B] bg-[#EBF1EC] hover:bg-[#E0EBE2] border border-[#D7E2D9] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </motion.div>

            {/* Contact Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#E2E4DC] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#6B7168]"
            >
              <a
                href="mailto:manishchouchan123@gmail.com"
                className="inline-flex items-center space-x-1.5 hover:text-[#20231F] transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#58745C]" />
                <span>manishchouchan123@gmail.com</span>
              </a>

              <a
                href="tel:+918905694021"
                className="inline-flex items-center space-x-1.5 hover:text-[#20231F] transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#58745C]" />
                <span>+91 89056 94021</span>
              </a>

              <span className="inline-flex items-center space-x-1.5 text-[#6B7168]">
                <MapPin className="w-3.5 h-3.5 text-[#8D938A]" />
                <span>Sojat Road, Pali, Rajasthan</span>
              </span>

              <div className="flex items-center space-x-3 ml-auto">
                <a
                  href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#20231F] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#58745C]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Manish-10275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-[#20231F] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#58745C]" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Living Engineering Canvas & Terminal */}
          <div className="lg:col-span-5 space-y-3">
            {/* Visualizer Mode Selector */}
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-mono text-[#8D938A] uppercase tracking-wider">
                Interactive Showcase
              </span>
              <div className="inline-flex p-1 rounded-lg bg-[#EAECE4] border border-[#DCDFD5] text-xs">
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('canvas')}
                  className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all flex items-center space-x-1.5 ${
                    activeVisualTab === 'canvas'
                      ? 'bg-white text-[#20231F] font-semibold shadow-xs'
                      : 'text-[#6B7168] hover:text-[#20231F]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Topology Graph</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('terminal')}
                  className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all flex items-center space-x-1.5 ${
                    activeVisualTab === 'terminal'
                      ? 'bg-white text-[#20231F] font-semibold shadow-xs'
                      : 'text-[#6B7168] hover:text-[#20231F]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Engineer REPL</span>
                </button>
              </div>
            </div>

            {/* Active Visualizer Render */}
            {activeVisualTab === 'canvas' ? (
              <InteractiveHeroCanvas />
            ) : (
              <InteractiveTerminal />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
