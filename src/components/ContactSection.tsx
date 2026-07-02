'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar, Check, AlertCircle, X, Instagram, Download } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically load the 3D globe to avoid SSR window errors
const ContactGlobe = dynamic(() => import('./ContactGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-brand-blue border-t-transparent animate-spin" />
    </div>
  )
});

export const ContactSection: React.FC = () => {
  const { playClickSound, playHoverSound, playChimeSound } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playClickSound();

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      playChimeSound();
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background effects */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Network</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Extraordinary</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Ready to scale your next digital product, integrate custom AI models, or structure technical sprints? Drop a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Globe & Contacts */}
          <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 3D Globe container */}
            <div className="w-full max-w-[450px] aspect-square rounded-3xl bg-white/[0.01] border border-white/5 relative overflow-hidden">
              <ContactGlobe />
            </div>

            {/* Direct Details */}
            <div className="space-y-4 font-mono text-xs md:text-sm text-white/70 w-full max-w-[400px]">
              <div className="flex items-center space-x-3.5 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-brand-blue" />
                <a href="mailto:manishchouhan123@gmail.com" className="hover:text-white transition-colors">
                  manishchouhan123@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3.5 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-brand-purple" />
                <span>Sojat Road, Pali, Rajasthan, India (306103)</span>
              </div>
            </div>

            {/* Socials & Calendar Trigger */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              {/* Calendly button */}
              <button
                onClick={() => {
                  setCalendlyOpen(true);
                  playClickSound();
                }}
                onMouseEnter={playHoverSound}
                className="flex items-center space-x-2 bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg rounded-xl px-5 py-3 text-xs font-mono text-white transition-all cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Schedule a 1:1 Video Sync</span>
              </button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-xs font-mono text-white transition-all cursor-pointer"
              >
                <Download className="w-4.5 h-4.5 text-brand-blue" />
                <span>Download CV</span>
              </motion.a>

              {/* Social Icons row */}
              <div className="flex space-x-3.5">
                <motion.a
                  href="https://www.linkedin.com/in/manish-chouhan-2301a7230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-blue/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/Manish-10275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-purple/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.15, y: -3, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-accent/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/i_m_manish_chouhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-pink-500/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.15, y: -3, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl glass-panel relative overflow-hidden shadow-2xl"
            >
              {/* Internal microglow */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-brand-purple/5 blur-[50px] pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-6 font-display">
                Initialize Transmission
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold font-mono tracking-wider text-white/40 mb-2 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white outline-none placeholder-white/20 focus:border-brand-blue/50 focus:bg-white/[0.08] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold font-mono tracking-wider text-white/40 mb-2 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white outline-none placeholder-white/20 focus:border-brand-blue/50 focus:bg-white/[0.08] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold font-mono tracking-wider text-white/40 mb-2 uppercase">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project goals or queries..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white outline-none placeholder-white/20 focus:border-brand-blue/50 focus:bg-white/[0.08] transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg rounded-xl py-3.5 text-xs font-mono text-white transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>

                {/* Notifications */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-500/10 border border-green-500/30 rounded-xl p-3.5 flex items-center space-x-3 text-green-400"
                    >
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="text-xs font-mono">Transmission Successful. Manish will follow up shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Calendly Booking Iframe Modal */}
      <AnimatePresence>
        {calendlyOpen && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl bg-background border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[80vh]"
            >
              <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Live Schedule Sync</span>
                <button
                  onClick={() => {
                    setCalendlyOpen(false);
                    playClickSound();
                  }}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-[#151515]">
                {/* Calendly Iframe Mockup for Manish Chouhan */}
                <iframe
                  src="https://calendly.com/manishchouhan123?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full rounded-b-3xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
