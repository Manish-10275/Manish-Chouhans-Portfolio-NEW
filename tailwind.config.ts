import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#F7F7F2',
          card: '#FFFFFF',
          text: '#20231F',
          muted: '#6B7168',
          subtle: '#8D938A',
          border: '#E2E4DC',
          'border-subtle': '#EBECE6',
          surface: '#F1F2EC',
          'surface-hover': '#E8EAE2',
          accent: {
            DEFAULT: '#58745C',
            hover: '#47604B',
            light: '#EBF1EC',
            subtle: '#D7E2D9',
            dark: '#354837',
          },
        },
        // Fallbacks and standard semantic mappings
        background: '#F7F7F2',
        foreground: '#20231F',
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card-subtle': '0 1px 3px rgba(32, 35, 31, 0.04), 0 1px 2px rgba(32, 35, 31, 0.02)',
        'card-hover': '0 10px 30px -10px rgba(32, 35, 31, 0.08), 0 4px 6px -2px rgba(32, 35, 31, 0.03)',
        'elevation': '0 20px 40px -15px rgba(32, 35, 31, 0.1)',
      },
      maxWidth: {
        'content': '72rem', // 1152px
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
