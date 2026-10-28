# Manish Chouhan — Professional Personal Portfolio

A polished, credible, and editorial personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with an understated, human-crafted aesthetic inspired by modern digital studios and thoughtful independent developer portfolios.

---

## 🌿 Design System & Visual Direction

The visual design emphasizes clarity, credibility, generous whitespace, and restrained typography:

*   **Background**: `#F7F7F2` (Warm Off-White)
*   **Primary Text**: `#20231F` (Deep Charcoal — WCAG AAA contrast ratio > 14:1)
*   **Secondary Text**: `#6B7168` (Muted Slate — WCAG AA compliant)
*   **Accent Color**: `#58745C` (Restrained Forest Green)
*   **Accent Hover**: `#47604B`
*   **Borders**: `#E2E4DC` (Subtle Warm Borders)
*   **Card Background**: `#FFFFFF` (Crisp Editorial Card)
*   **Typography**: Clean sans-serif hierarchy utilizing **DM Sans** and **Space Grotesk**

---

## 🧭 Page Architecture & Flow

The portfolio is structured as a cohesive, accessible single-page layout:

1.  **Header (`Header.tsx`)**: Minimalist wordmark, accessible navigation (`Work`, `Experience`, `About`, `Skills`, `Credentials`, `Contact`), and prominent direct contact action.
2.  **Hero (`HeroSection.tsx`)**: Clear statement of identity, core focus, verified professional availability status, primary CTAs, and direct links to GitHub, LinkedIn, and email.
3.  **Selected Work (`ProjectsSection.tsx`)**: Curated technical case studies featuring:
    *   **HBB Mutation Analyzer**: Bioinformatics research tool parsing HGVS notation, querying ClinVar assertions, and synthesizing PubMed research with Gemini API.
    *   **Ad Automation OS**: Centralized operations platform for ad network connectors, rule automation, execution history, and audit logs.
    *   **Devoq Labs Speech Services**: Backend gateway abstracting Speech-to-Text and AI voice generation behind a consistent, secure REST API.
    *   **AgriBuddy**: Agricultural computer vision prototype diagnosing plant leaf pathogens from imagery.
    *   **Devoq Labs**: Entrepreneurial venture and digital product studio founded by Manish Chouhan.
4.  **Professional Experience (`ExperienceSection.tsx`)**: Compact chronological timeline detailing verified roles:
    *   Founder & CEO — Devoq Labs (Jun 2025 – Present)
    *   Project Manager — JJGillespie.com (Nov 2025 – Present)
    *   Associate Project Manager Intern — Excelerate (May 2025 – Jun 2025)
    *   Student Intern — Scaler School of Technology (2025)
    *   Python Programmer Intern — Codveda Technologies (2025)
5.  **About Me (`AboutSection.tsx`)**: Authentic personal background, self-taught programming journey from Rajasthan, ongoing BS in Data Science & Applications at **IIT Madras** (2025–2029), Harvard DCE studies, and published author reflections.
6.  **Skills (`SkillsSection.tsx`)**: Clean 4-discipline grid covering AI & Automation, Development, Product & Delivery, and Data & Analytics without vanity progress bars.
7.  **Achievements & Credentials (`AchievementsSection.tsx`)**: Compact, evidence-based credentials including Kaggle AI Agents Intensive, Google AI Programs, Neoteric Summit Dubai 2026, Paradox IIT Madras coordination, and published books.
8.  **Contact (`ContactSection.tsx`)**: Functional contact form with pre-formatted email dispatch, one-click email copy utility, verified LinkedIn & GitHub profiles, and valid resume download.
9.  **Footer (`Footer.tsx`)**: Subtle copyright, section navigation, and back-to-top interaction.

---

## 🛠️ Local Development & Build

### Prerequisites
*   Node.js (v18.x or newer, v20+ recommended)
*   npm (v9.x or newer)

### Installation
```bash
npm install --legacy-peer-deps
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
```

### Production Preview
```bash
npm run start
```

### Type Checking & Linting
```bash
npx tsc --noEmit
npm run lint
```

---

## 📄 License & Ownership
Copyright © 2025–2026 Manish Chouhan. All rights reserved.
