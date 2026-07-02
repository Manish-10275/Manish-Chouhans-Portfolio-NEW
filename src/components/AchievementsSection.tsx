'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Award, BookOpen, Star, FileCheck, Users, ShieldAlert } from 'lucide-react';

interface Stat {
  id: number;
  label: string;
  count: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
  details: string;
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
      details: 'Author of 3 distinct books on poetry, emotional intelligence, and startup principles.'
    },
    {
      id: 1,
      label: 'Startup Ventures',
      count: 1,
      suffix: '',
      icon: <Star className="w-5 h-5" />,
      color: '#8B5CF6',
      details: 'Founder & CEO of Devoq Labs, orchestrating client contracts and product engineering.'
    },
    {
      id: 2,
      label: 'IIT Madras Projects',
      count: 10,
      suffix: '+',
      icon: <Award className="w-5 h-5" />,
      color: '#A78BFA',
      details: 'Engaged in academic data analytics, event logistics, and on-campus algorithms.'
    },
    {
      id: 3,
      label: 'Internships Done',
      count: 4,
      suffix: '',
      icon: <FileCheck className="w-5 h-5" />,
      color: '#3B82F6',
      details: 'Hands-on roles in automation, script debugging, and agile project delivery.'
    },
    {
      id: 4,
      label: 'Professional Certs',
      count: 8,
      suffix: '+',
      icon: <ShieldAlert className="w-5 h-5" />,
      color: '#8B5CF6',
      details: 'AWS Machine Learning Specialist, Google Play Console, Google App marketing.'
    },
    {
      id: 5,
      label: 'Community Summits',
      count: 5,
      suffix: '+',
      icon: <Users className="w-5 h-5" />,
      color: '#A78BFA',
      details: 'Coordinated campus events, operational tracks, and corporate sponsorships.'
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  const [isInView, setIsInView] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      onMouseEnter={playHoverSound}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between h-[220px] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[80px] h-[80px] rounded-full bg-white/[0.01] pointer-events-none" />

      <div className="flex justify-between items-start mb-6">
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

      <div>
        <h3 className="text-sm font-semibold tracking-wide text-white uppercase font-mono mb-2">
          {stat.label}
        </h3>
        <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans">
          {stat.details}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
