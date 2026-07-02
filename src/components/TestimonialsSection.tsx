'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 0,
      name: 'Julian Gillespie',
      role: 'CEO & Founder',
      company: 'JJGillespie.com',
      text: 'Manish Chouhan is a stellar Project Manager. He restructured our development backlogs, established precise version control practices, and led our engineering team with exceptional technical foresight. An absolute pleasure to build with.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 1,
      name: 'Aditya Vardhan',
      role: 'Technical Lead',
      company: 'Excelerate',
      text: 'Having worked with Manish during his project management internship, I was amazed by his ability to bridge complex machine learning requirements with clean UI/UX scoping. He works at a Silicon Valley execution speed.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Shruti Sen',
      role: 'Co-Founder',
      company: 'Mind Mitra project',
      text: 'Manish took our rough NLP counseling ideas and turned them into a fully working, secure, and production-ready AI application. His ability to build startups from the ground up, manage developers, and write modular code is world-class.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    playClickSound();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    playClickSound();
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-purple mb-4 tracking-widest uppercase font-mono"
          >
            <span>Reviews</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Collaborators</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-sans">
            Hear from startup founders, engineers, and clients who have shipped digital products with Manish.
          </p>
        </div>

        {/* Carousel slide container */}
        <div className="relative min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="p-8 md:p-12 rounded-3xl glass-panel relative flex flex-col md:flex-row gap-8 items-center"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-white/5 pointer-events-none" />

              {/* Avatar col */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center border border-background">
                  <Quote className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              {/* Review Text col */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <p className="text-white/80 text-sm md:text-lg leading-relaxed italic font-sans">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white tracking-tight">{testimonials[activeIndex].name}</h4>
                  <p className="text-[11px] md:text-xs font-mono text-brand-purple uppercase tracking-wider mt-0.5">
                    {testimonials[activeIndex].role} @ <span className="text-white/60">{testimonials[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation and Indicators */}
          <div className="flex justify-between items-center mt-8 px-4">
            {/* Left/Right buttons */}
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                onMouseEnter={playHoverSound}
                className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={playHoverSound}
                className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex space-x-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    playClickSound();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-brand-blue w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
