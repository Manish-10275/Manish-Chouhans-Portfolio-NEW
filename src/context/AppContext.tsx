'use client';

import React, { createContext, useContext, useState } from 'react';

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
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(100);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleSound = () => setSoundEnabled((prev) => !prev);
  const triggerEasterEgg = () => {};
  const noop = () => {};

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
        playHoverSound: noop,
        playClickSound: noop,
        playChimeSound: noop,
        activeSection,
        setActiveSection,
        mobileMenuOpen,
        setMobileMenuOpen,
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
