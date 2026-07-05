'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Award, BookOpen, Star, FileCheck, Users, Shield, ArrowUpRight, GraduationCap } from 'lucide-react';

interface Stat {
  id: number;
  label: string;
  count: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
  details: string;
  gridClass: string;
  extraContent?: React.ReactNode;
}

export const AchievementsSection: React.FC = () => {
  const { playHoverSound } = useApp();

  const stats: Stat[] = [
    {
      id: 0,
      label: 'Published Books',
      count: 3,
      suffix: '',
      icon: <BookOpen className="w-5 h-5" />,
      color: '#3B82F6',
      details: 'Author of 3 distinct books on poetry, emotional intelligence, and startup principles.',
      gridClass: 'md:col-span-2 md:row-span-1 h-full min-h-[240px]',
      extraContent: (
        <div className="absolute right-6 bottom-4 top-4 hidden md:flex items-center space-x-2">
          {/* Overlapping Book Mockups */}
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              whileHover={{ y: -10, rotate: num === 2 ? 0 : num === 1 ? -6 : 6 }}
              className={`w-14 h-20 rounded-md border border-white/10 shadow-lg flex flex-col justify-between p-2 relative overflow-hidden bg-gradient-to-br ${
                num === 1 
                  ? 'from-brand-blue/30 to-brand-purple/20 -rotate-6 translate-y-3 z-0' 
                  : num === 2 
                  ? 'from-brand-purple/40 to-brand-accent/30 z-10 -translate-y-1 scale-105' 
                  : 'from-brand-accent/30 to-brand-blue/20 rotate-6 translate-y-3 z-0'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="w-full bg-white/20 h-1 rounded" />
              <div className="w-full bg-white/10 h-0.5 rounded" />
              <div className="text-[6px] font-mono text-white/40 text-center">VOL {num}</div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 1,
      label: 'Startup Ventures',
      count: 1,
      suffix: '',
      icon: <Star className="w-5 h-5" />,
      color: '#8B5CF6',
      details: 'Founder & CEO of Devoq Labs, building engineering teams and product lifecycles.',
      gridClass: 'md:col-span-1 md:row-span-1 h-full min-h-[240px]',
    },
    {
      id: 3,
      label: 'Internships Done',
      count: 4,
      suffix: '',
      icon: <FileCheck className="w-5 h-5" />,
      color: '#A78BFA',
      details: 'Hands-on roles in automation, script debugging, and agile project delivery.',
      gridClass: 'md:col-span-1 md:row-span-1 h-full min-h-[240px]',
    },
    {
      id: 4,
      label: 'Professional Certs',
      count: 8,
      suffix: '+',
      icon: <Shield className="w-5 h-5" />,
      color: '#3B82F6',
      details: 'AWS Machine Learning, Google App Marketing, and advanced cloud systems.',
      gridClass: 'md:col-span-1 md:row-span-1 h-full min-h-[240px]',
    },
    {
      id: 2,
      label: 'IIT Madras Projects',
      count: 10,
      suffix: '+',
      icon: <Award className="w-5 h-5" />,
      color: '#8B5CF6',
      details: 'Engaged in academic data analytics, event logistics, and on-campus algorithms.',
      gridClass: 'md:col-span-1 md:row-span-2 h-full min-h-[240px] md:min-h-[504px]',
      extraContent: (
        <div className="mt-4 border-t border-white/5 pt-4 space-y-3.5 hidden md:block">
          <div className="flex items-center space-x-2 text-xs text-white/50">
            <GraduationCap className="w-4 h-4 text-brand-purple" />
            <span>Data Science & Applications</span>
          </div>
          <div className="space-y-2">
            {['Paradox Coordinator', 'Database Architectures', 'Deep Learning Labs'].map((proj, pIdx) => (
              <div key={pIdx} className="bg-white/[0.02] border border-white/5 rounded-lg p-2 flex items-center justify-between text-[11px] text-white/70">
                <span>{proj}</span>
                <ArrowUpRight className="w-3 h-3 text-white/30" />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      label: 'Community Summits',
      count: 5,
      suffix: '+',
      icon: <Users className="w-5 h-5" />,
      color: '#A78BFA',
      details: 'Coordinated campus events, operational tracks, and corporate sponsorships.',
      gridClass: 'md:col-span-2 md:row-span-1 h-full min-h-[240px]',
      extraContent: (
        <div className="absolute right-6 bottom-4 top-4 hidden md:flex flex-col justify-center space-y-2 text-right">
          <span className="text-[10px] font-mono text-white/30">SUMMIT LOGS</span>
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-[11px] font-semibold text-white/80">IIT Madras Paradox 2026</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span className="text-[11px] font-semibold text-white/80">Operations Lead</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      {/* Glow shapes */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Credentials</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Achievements Wall</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            A track record of shipping projects, building teams, and writing books.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={idx}
              playHoverSound={playHoverSound}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: Stat;
  index: number;
  playHoverSound: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, playHoverSound }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    if (!isInView) return;

    let startTime = 0;
    const duration = 1200; // 1.2s

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      setDisplayCount(Math.floor(percent * stat.count));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setDisplayCount(stat.count);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, stat.count]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        playHoverSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden group select-none ${stat.gridClass}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Spotlight Background Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-0"
          style={{
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, rgba(139, 92, 246, 0.08), transparent)`,
            left: 0,
            top: 0,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Spotlight Border */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
          style={{
            border: '1px solid rgba(59, 130, 246, 0.3)',
            maskImage: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, black, transparent)`,
          }}
        />
      )}

      <div className="relative z-10 flex justify-between items-start" style={{ transform: 'translateZ(20px)' }}>
        <div
          className="p-2.5 rounded-xl border flex items-center justify-center text-white"
          style={{ borderColor: `${stat.color}30`, backgroundColor: `${stat.color}15`, color: stat.color }}
        >
          {stat.icon}
        </div>
        <div className="text-3xl md:text-5xl font-display font-black text-white flex items-baseline">
          <span>{displayCount}</span>
          <span className="text-brand-purple ml-0.5">{stat.suffix}</span>
        </div>
      </div>

      {stat.extraContent}

      <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
        <h3 className="text-xs font-semibold tracking-wide text-white uppercase font-mono mb-2">
          {stat.label}
        </h3>
        <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans max-w-[80%]">
          {stat.details}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
