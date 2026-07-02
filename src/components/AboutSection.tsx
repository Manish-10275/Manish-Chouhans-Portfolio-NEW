'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { BookOpen, GraduationCap, Building2, Cpu, Rocket, Music, ArrowRight } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
  details: string[];
}

export const AboutSection: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const timelineEvents: TimelineEvent[] = [
    {
      id: 0,
      year: 'Early Journey',
      title: 'Government School Student',
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
      tag: 'Grit & Foundation',
      description: 'Struggled and learned in a local Government School, discovering a deep passion for coding and building early computer programs.',
      details: [
        'Built strong self-taught programming habits in Python and basic web structures.',
        'Overcame systemic educational resource barriers through open-source software.',
        'Established early leadership by mentoring classmates in computer basics.'
      ]
    },
    {
      id: 1,
      year: '2025 - 2029',
      title: 'IIT Madras BS Data Science',
      icon: <BookOpen className="w-5 h-5 text-brand-purple" />,
      tag: 'Academic Excellence',
      description: 'Accepted into the Indian Institute of Technology, Madras for BS in Data Science & Applications. Gaining expertise in statistical algorithms, machine learning model lifecycles, and large scale data processing.',
      details: [
        'Core Team Member of Paradox IIT Madras (2026), orchestrating operational logistics.',
        'Completed rigorous courses in Database Management systems, Linear Algebra, and Deep Learning.',
        'Collaborating on open-source scientific computing projects.'
      ]
    },
    {
      id: 2,
      year: 'June 2025 - Present',
      title: 'Founder & CEO of Devoq Labs',
      icon: <Building2 className="w-5 h-5 text-brand-accent" />,
      tag: 'Entrepreneurship',
      description: 'Launched a high-growth tech startup offering premium software engineering, custom AI integrations, and branding strategies.',
      details: [
        'Successfully delivered custom solutions for startups and global creators.',
        'Coordinating agile developer teams, designer boards, and marketing divisions.',
        'Increased client project retention by 150% through high-performance SLA execution.'
      ]
    },
    {
      id: 3,
      year: '2025',
      title: 'AI Projects & Builds',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      tag: 'AI Engineering',
      description: 'Conceptualized and built advanced machine learning models and pipelines addressing real-world pain points.',
      details: [
        'Mind Mitra: Created a custom AI-driven psychological companion powered by NLP.',
        'AgriBuddy: Engineered a diagnostic computer vision tool identifying crop health anomalies.',
        'Finozest: Built real-time analytics models for forecasting market asset trends.'
      ]
    },
    {
      id: 4,
      year: 'Present',
      title: 'Startup Builder & PM',
      icon: <Rocket className="w-5 h-5 text-brand-purple" />,
      tag: 'Product Leadership',
      description: 'Serving as Project Manager for JJGillespie.com and associate positions, orchestrating developer roadmaps and shipping products fast.',
      details: [
        'Organizing cross-functional backlogs using Agile/Scrum processes in Jira and Trello.',
        'Defining MVP scoping, go-to-market strategies, and client alignment interfaces.',
        'Bridging the gap between engineering complexity and corporate client objectives.'
      ]
    },
    {
      id: 5,
      year: 'Creative Outlets',
      title: 'Author & Music Creator',
      icon: <Music className="w-5 h-5 text-brand-accent" />,
      tag: 'Art & Expression',
      description: 'Expressing vision and storytelling through books and sound synthesis. Published author of 3 books, poet, songwriter, and composer.',
      details: [
        'Published 3 books exploring human emotions, startup growth hacks, and poetry.',
        'Singer-songwriter composing acoustic and synth original tracks.',
        'Actively sharing thoughts on personal branding, creative growth, and AI philosophy.'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Storyline</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4"
          >
            The Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Manish Chouhan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans"
          >
            A fusion of technical rigor, startup speed, and artistic creation.
          </motion.p>
        </div>

        {/* Timeline Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Timeline Buttons */}
          <div className="lg:col-span-5 space-y-3 relative z-10">
            {timelineEvents.map((evt, idx) => {
              const isActive = activeEvent === idx;
              return (
                <motion.button
                  key={evt.id}
                  onClick={() => {
                    setActiveEvent(idx);
                    playClickSound();
                  }}
                  onMouseEnter={playHoverSound}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border-brand-blue shadow-lg scale-[1.02]'
                      : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg border transition-colors ${
                      isActive ? 'bg-brand-blue/20 border-brand-blue/30 text-white' : 'bg-white/5 border-white/5 text-white/50'
                    }`}>
                      {evt.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest block mb-0.5">{evt.year}</span>
                      <h3 className="font-semibold text-xs md:text-sm text-white">{evt.title}</h3>
                    </div>
                  </div>
                  {isActive && <ArrowRight className="w-4 h-4 text-brand-purple" />}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full p-6 md:p-8 rounded-2xl glass-panel relative flex flex-col justify-between"
              >
                {/* Glowing subtle light inside card */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-brand-purple/10 blur-[50px] pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-brand-purple border border-brand-purple/30 bg-brand-purple/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {timelineEvents[activeEvent].tag}
                    </span>
                    <span className="text-xs font-mono text-white/40">{timelineEvents[activeEvent].year}</span>
                  </div>

                  <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-4">
                    {timelineEvents[activeEvent].title}
                  </h3>

                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-sans">
                    {timelineEvents[activeEvent].description}
                  </p>

                  <h4 className="text-xs font-bold font-mono tracking-wider text-white/50 mb-3 uppercase">Key Details & Achievements</h4>
                  <ul className="space-y-3">
                    {timelineEvents[activeEvent].details.map((detail, idx) => (
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        key={idx}
                        className="flex items-start space-x-2.5 text-xs md:text-sm text-white/60 leading-relaxed font-sans"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center space-x-3 text-[10px] font-mono text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>VERIFIED INSTANCE PROTOCOL</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
