# 🌌 Manish Chouhan — Futuristic 3D Personal Portfolio

A world-class, premium, and highly interactive developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It is designed to resemble the visual aesthetic of Apple-level minimalism, Linear.app smoothness, and Framer award-winning animations.

This repository serves as a showcase of advanced front-end capabilities, combining WebGL rendering, custom audio synthesis, mathematical layout projections, and smooth interactive physics.

---

## 🤖 AI & Developer Onboarding Guide

> [!IMPORTANT]
> **Read this section first if you are an AI agent or a new developer working on this project.**
> This codebase relies on specific architectural patterns, styling tokens, and interactive models. Please adhere to the following rules when modifying or extending this application:

### 1. Architectural Constraints
*   **State Management**: All global states (sound toggle, theme, active panels, Easter eggs, command palette status) **must** be accessed and mutated via `AppContext` (`src/context/AppContext.tsx`). Avoid localizing global features or introducing external state managers (like Redux or Zustand) unless explicitly requested.
*   **No Asset Bloat (Audio)**: Do not add `.mp3`, `.wav`, or other heavy audio assets to the project. All sound effects (hovers, clicks, chimes, ambient cabin drone) must be synthesized programmatically using the browser's **Web Audio API** via the `SoundManager` class (`src/lib/audio.ts`).
*   **Animations**: Leverage **Framer Motion** for UI transitions, spring-based interactions, and hover magnifications. Use **GSAP** if timeline-based sequence animations are required. Keep scroll animations smooth using the pre-configured **Lenis Scroll** wrapper (`src/components/SmoothScroll.tsx`).

### 2. Styling & Design System
*   **Theme**: The application defaults to a premium, high-contrast dark theme (`#050505`) with vibrant accent highlights (`#3B82F6` blue and `#8B5CF6` purple). Light mode is supported but dark mode is the primary cinematic experience.
*   **Glassmorphism**: When creating cards or modals, use the glassmorphic system defined in `src/app/globals.css`. Utilize Tailwind classes: `bg-white/5 backdrop-blur-md border border-white/10`.
*   **Interactive Hover Effects**: Buttons, cards, and links should trigger the `playHoverSound()` and `playClickSound()` from `useApp()` when hovered/clicked, and must feature micro-animations (e.g., scale-up, border-glow, or translate-y shift).

### 3. Mathematical & WebGL Coordinates
*   **Hero Scene**: The particle galaxy in `HeroScene.tsx` is built with raw **Three.js** (no React Three Fiber wrapper here, though R3F is in dependencies). It uses a custom `BufferGeometry` with 2,800 points distributed over a sphere using polar coordinates, deformed dynamically via wave math in the animation loop.
*   **Skills Galaxy**: The interactive 3D skill orbit in `SkillsSection.tsx` projects tag nodes onto a 2D canvas using a **Golden Spiral** (Fibonacci sphere) projection, mapping 3D coordinates $(X, Y, Z)$ to screen coordinates $(x, y)$ while scaling opacity and font-size based on depth ($Z$-axis position).

---

## 📂 Codebase Architecture

Below is the complete file map of the project, including the specific role of each file:

```bash
manish-chouhan-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css              # Global styles, scrollbars, perspective grids, and glassmorphism tokens
│   │   ├── layout.tsx               # Root layout, Google Fonts (Inter, Outfit), Metadata, and JSON-LD Schema scripts
│   │   ├── page.tsx                 # Main entry point importing and ordering all page sections
│   │   ├── robots.ts                # Search engine bot crawl configurations
│   │   └── sitemap.ts               # Dynamic XML sitemap generator
│   │
│   ├── components/
│   │   ├── AIAssistant.tsx          # Interactive chatbot simulating Manish's background, startups, and IIT Madras experience
│   │   ├── AboutSection.tsx         # Chronological growth timeline using glassmorphic timeline cards
│   │   ├── AchievementsSection.tsx  # Stat counters that animate and roll when scrolled into view
│   │   ├── CommandPalette.tsx       # Cmd+K / Ctrl+K Apple-style search, navigation, and Easter egg console
│   │   ├── ContactGlobe.tsx         # Three.js-based WebGL dotted globe showcasing global connectivity
│   │   ├── ContactSection.tsx       # Contact form with validation, social handles, and Calendly modal integration
│   │   ├── CustomCursor.tsx         # Custom fluid cursor trailing effect following mouse coords
│   │   ├── ExperienceSection.tsx    # Professional career timeline detailing roles and achievements
│   │   ├── FloatingDock.tsx         # macOS-style bottom navigation dock featuring magnification spring physics
│   │   ├── HeroScene.tsx            # Three.js WebGL particle sphere galaxy with fluid wave deformations
│   │   ├── HeroSection.tsx          # Hero copy, call-to-actions, and background particle overlay
│   │   ├── LoadingScreen.tsx        # Cinematic booting screen with log messages and a percentage counter
│   │   ├── ProjectsSection.tsx      # Interactive 3D mouse-tilt cards and case study details modals
│   │   ├── SkillsSection.tsx        # Interactive 3D skill constellation using golden spiral projection math
│   │   ├── SmoothScroll.tsx         # Lenis scroll controller wrapper for smooth scroll physics
│   │   └── TestimonialsSection.tsx  # Testimonial carousel with smooth card transitions
│   │
│   ├── context/
│   │   └── AppContext.tsx           # Global state provider (Theme, Sound, Command Palette, AI Assistant, Easter eggs)
│   │
│   └── lib/
│       └── audio.ts                 # Web Audio API SoundManager for synthesizer audio sweeps and cabin drones
│
├── tailwind.config.ts               # Custom Tailwind configuration (colors, animations, grid-patterns)
├── postcss.config.js                # PostCSS configuration
├── tsconfig.json                    # TypeScript compiler options
├── next.config.ts                   # Next.js compiler and build options
└── package.json                     # Dependency list and npm scripts
```

---

## ⚙️ Core Systems & Mechanics

### 🎵 1. Web Audio API Sound Engine (`src/lib/audio.ts`)
To avoid asset loading overhead, the project utilizes raw oscillators and gains to synthesize sounds in real-time.
*   **Hover Sound**: A `triangle` wave oscillator that sweeps exponentially from $440\text{Hz}$ to $880\text{Hz}$ over a duration of $0.15$ seconds, coupled with an exponential gain decay.
*   **Click Sound**: A dual-oscillator combination of a high-frequency `sine` wave ($1200\text{Hz} \to 600\text{Hz}$ over $0.08$ seconds) for snap, and a low-frequency `triangle` wave ($150\text{Hz} \to 80\text{Hz}$ over $0.1$ seconds) for a satisfying punch.
*   **Chime Sound**: A four-note arpeggio (C5, E5, G5, C6) triggered sequentially with an offset of $0.08$ seconds per note using `sine` waves.
*   **Ambient Cockpit Drone**: A low-frequency multi-oscillator synthesizer (65.41Hz, 98.00Hz, 130.81Hz) detuned slightly (chorus effect) and modulated by slow Low-Frequency Oscillators (LFOs running at 0.1Hz - 0.2Hz) to create an organic, pulsing spaceship cabin atmosphere.

### 🌌 2. WebGL Particle Galaxy (`src/components/HeroScene.tsx`)
A Three.js points-system rendering **2,800 particles** distributed evenly on a sphere.
*   **Deformation Math**:
    For each particle, its distance $d$ from the origin is computed:
    $$d = \sqrt{x^2 + y^2 + z^2}$$
    A wave offset is applied dynamically using a sine function over elapsed time $t$:
    $$\text{wave} = \sin(0.6d - 1.5t) \times 0.25$$
    The particle's coordinates are deformed along its outward vector:
    $$\vec{P}_{\text{new}} = \vec{P}_{\text{initial}} + \frac{\vec{P}_{\text{initial}}}{d} \times \text{wave}$$
*   **Mouse Interaction**: The particle system rotates around the X and Y axes, smoothing the rotation velocity via a linear interpolation (lerp) toward the target mouse coordinates.

### 🪐 3. 3D Skill Constellation (`src/components/SkillsSection.tsx`)
Projects skill nodes in 3D space and maps them to a 2D interactive canvas.
*   **Distribution**: Coordinates are calculated using a **Fibonacci Sphere** algorithm to ensure perfect, equidistant spacing:
    $$z = 1 - \frac{2i}{N-1}$$
    $$r = \sqrt{1 - z^2}$$
    $$\theta = i \times \phi \quad (\text{where } \phi \text{ is the golden ratio angle } \approx 2.399963)$$
    $$x = r \cos(\theta), \quad y = r \sin(\theta)$$
*   **Projection**: These coordinates are rotated in 3D space based on mouse drag/auto-rotation speed. The $Z$ depth controls the rendering properties:
    *   **Scale**: Larger font size when $Z > 0$ (closer to camera).
    *   **Opacity**: Highly transparent when $Z < 0$ (farther away).

### ⌨️ 4. System Command Console (`src/components/CommandPalette.tsx`)
Triggered via `Ctrl + K` or `Cmd + K`. Provides quick actions:
*   **Navigation**: Instantly scroll to any page section.
*   **System Controls**: Toggle dark/light theme, toggle audio synthesizer.
*   **Easter Eggs**: Typing `graduation` or `iit` triggers a custom blue/purple `canvas-confetti` explosion. Typing `entrepreneur` triggers a continuous side-cannon confetti stream.

---

## 🛠️ Local Development & Operations

### Prerequisites
*   Node.js (v18.x or newer)
*   npm (v9.x or newer) or yarn

### Installation
Install all dependencies, including Tailwind, Three.js, Framer Motion, and GSAP:
```bash
npm install
```

### Dev Server
Launch the local Next.js development server with hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Compile the application for production:
```bash
npm run build
```
To run the compiled production bundle locally:
```bash
npm start
```

### Code Quality & Linting
Run ESLint to check for syntax or styling violations:
```bash
npm run lint
```

---

## ⚙️ Project Dependencies & Key Packages

*   `next`: Framework Core (v15.1.0)
*   `react` & `react-dom`: UI Layer (v19.0.0)
*   `three`: WebGL Rendering Engine (v0.171.0)
*   `framer-motion`: Physics-based spring and gesture animations (v11.15.0)
*   `gsap`: Time-sequenced timeline animations (v3.12.5)
*   `lenis`: Smooth scrolling system (v1.1.18)
*   `canvas-confetti`: Celebratory Easter egg effects (v1.9.3)
*   `lucide-react`: Icon set (v0.468.0)
