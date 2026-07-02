'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Search, Home, User, Laptop, Briefcase, Award, MessageSquare, Mail, Moon, Sun, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: 'Navigation' | 'Controls' | 'Easter Eggs';
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    theme,
    setTheme,
    soundEnabled,
    toggleSound,
    triggerEasterEgg,
    playClickSound
  } = useApp();

  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch('');
      setSelectedIndex(0);
    }
  }, [commandPaletteOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setCommandPaletteOpen(false);
      }
    };

    if (commandPaletteOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setCommandPaletteOpen(false);
  };

  const commands: CommandItem[] = [
    {
      icon: <Home className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Hero Section',
      category: 'Navigation',
      action: () => scrollToSection('hero')
    },
    {
      icon: <User className="w-4 h-4 text-brand-blue" />,
      label: 'Go to About Story',
      category: 'Navigation',
      action: () => scrollToSection('about')
    },
    {
      icon: <Laptop className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Skill Galaxy',
      category: 'Navigation',
      action: () => scrollToSection('skills')
    },
    {
      icon: <Briefcase className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Professional Experience',
      category: 'Navigation',
      action: () => scrollToSection('experience')
    },
    {
      icon: <Sparkles className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Projects Showcase',
      category: 'Navigation',
      action: () => scrollToSection('projects')
    },
    {
      icon: <Award className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Achievements Wall',
      category: 'Navigation',
      action: () => scrollToSection('achievements')
    },
    {
      icon: <MessageSquare className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Testimonials Carousel',
      category: 'Navigation',
      action: () => scrollToSection('testimonials')
    },
    {
      icon: <Mail className="w-4 h-4 text-brand-blue" />,
      label: 'Go to Contact Globe',
      category: 'Navigation',
      action: () => scrollToSection('contact')
    },
    {
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-purple-500" />,
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Controls',
      action: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setCommandPaletteOpen(false);
      }
    },
    {
      icon: soundEnabled ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />,
      label: soundEnabled ? 'Mute System Sounds' : 'Enable System Sounds (Recommended)',
      category: 'Controls',
      action: () => {
        toggleSound();
        setCommandPaletteOpen(false);
      }
    },
    {
      icon: <Terminal className="w-4 h-4 text-brand-accent animate-pulse" />,
      label: 'Secret: Celebrate IIT Madras (Confetti)',
      category: 'Easter Eggs',
      action: () => {
        triggerEasterEgg('iit');
        setCommandPaletteOpen(false);
      }
    },
    {
      icon: <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />,
      label: 'Secret: Startup Founder Cascade (Super Confetti)',
      category: 'Easter Eggs',
      action: () => {
        triggerEasterEgg('entrepreneur');
        setCommandPaletteOpen(false);
      }
    }
  ];

  // Filter commands
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!commandPaletteOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          playClickSound();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, selectedIndex, filteredCommands, playClickSound, setCommandPaletteOpen]);

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Backdrop reveal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            ref={containerRef}
            className="w-full max-w-xl bg-background/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass-panel"
          >
            {/* Search Input wrapper */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 space-x-3">
              <Search className="w-5 h-5 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-white border-0 outline-none placeholder-white/30 text-sm font-sans"
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] font-mono text-white/50 shadow-sm">
                ESC
              </kbd>
            </div>

            {/* List Results */}
            <div className="max-h-[350px] overflow-y-auto p-2 no-scrollbar">
              {filteredCommands.length > 0 ? (
                // Group by Category
                ['Navigation', 'Controls', 'Easter Eggs'].map((cat) => {
                  const itemsInCat = filteredCommands.filter((cmd) => cmd.category === cat);
                  if (itemsInCat.length === 0) return null;

                  return (
                    <div key={cat} className="mb-2">
                      <div className="px-3 py-1.5 text-[10px] font-bold font-mono tracking-wider text-white/40 uppercase">
                        {cat}
                      </div>
                      <div className="space-y-0.5">
                        {itemsInCat.map((cmd) => {
                          // Find overall index in full list for style selection
                          const overallIndex = filteredCommands.findIndex((c) => c.label === cmd.label);
                          const isSelected = overallIndex === selectedIndex;

                          return (
                            <button
                              key={cmd.label}
                              onClick={() => {
                                cmd.action();
                                playClickSound();
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-150 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border-l-2 border-brand-blue text-white shadow-sm'
                                  : 'hover:bg-white/5 text-white/70 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                {cmd.icon}
                                <span className="font-sans text-xs md:text-sm">{cmd.label}</span>
                              </div>
                              {isSelected && (
                                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                                  ENTER
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-white/40 text-xs md:text-sm font-mono flex flex-col items-center justify-center space-y-2">
                  <Terminal className="w-8 h-8 text-white/20 animate-pulse" />
                  <span>NO CONSOLE COMMANDS MATCHED.</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
