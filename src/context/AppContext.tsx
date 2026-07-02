'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { audio } from '@/lib/audio';

type Theme = 'light' | 'dark';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  aiAssistantOpen: boolean;
  setAiAssistantOpen: (open: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  loadingComplete: boolean;
  setLoadingComplete: (complete: boolean) => void;
  triggerEasterEgg: (type: string) => void;
  playHoverSound: () => void;
  playClickSound: () => void;
  playChimeSound: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark for premium cyberpunk feel
    
    setThemeState(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, []);

  const toggleSound = useCallback(() => {
    const newState = audio.toggle();
    setSoundEnabled(newState);
    if (newState) {
      audio.playChime();
    }
  }, []);

  const playHoverSound = useCallback(() => {
    if (soundEnabled) audio.playHover();
  }, [soundEnabled]);

  const playClickSound = useCallback(() => {
    if (soundEnabled) audio.playClick();
  }, [soundEnabled]);

  const playChimeSound = useCallback(() => {
    if (soundEnabled) audio.playChime();
  }, [soundEnabled]);

  const triggerEasterEgg = useCallback((type: string) => {
    if (typeof window === 'undefined') return;
    
    import('canvas-confetti').then((confetti) => {
      if (type === 'iit') {
        // Special IIT celebration
        confetti.default({
          particleCount: 150,
          spread: 80,
          colors: ['#3B82F6', '#8B5CF6', '#ffffff']
        });
      } else if (type === 'entrepreneur') {
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
          confetti.default({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
          confetti.default({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }
    });

    if (soundEnabled) audio.playChime();
  }, [soundEnabled]);

  // Keyboard shortcut listener for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        if (soundEnabled) {
          audio.playClick();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        soundEnabled,
        toggleSound,
        commandPaletteOpen,
        setCommandPaletteOpen,
        aiAssistantOpen,
        setAiAssistantOpen,
        loadingProgress,
        setLoadingProgress,
        loadingComplete,
        setLoadingComplete,
        triggerEasterEgg,
        playHoverSound,
        playClickSound,
        playChimeSound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
