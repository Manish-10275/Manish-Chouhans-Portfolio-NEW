'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { ExternalLink, Github, Sparkles, X, ChevronRight, Check } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  tech: string[];
  liveUrl: string;
  gitUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    features: string[];
  };
}

export const ProjectsSection: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 0,
      title: 'Mind Mitra',
      subtitle: 'AI Mental Companion',
      description: 'An intelligent AI counseling agent leveraging deep natural language processing models to deliver real-time emotional support and cognitive coping techniques.',
      imgUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
      tech: ['Next.js', 'OpenAI APIs', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      liveUrl: 'https://devoqlabs.com',
      gitUrl: 'https://github.com/manishchouhan123',
      caseStudy: {
        problem: 'Access to psychiatric support is expensive and suffers from structural delays, making quick relief hard for people undergoing mild anxiety attacks.',
        solution: 'Mind Mitra operates 24/7, employing customized prompts and sentiment classification architectures to offer immediate, conversational relief strategies.',
        features: [
          'Conversational sentiment analysis tracking patient emotional spikes.',
          'Secure, anonymous database storage ensuring maximum compliance.',
          'Dynamic cognitive therapy suggestions triggered based on user prompts.'
        ]
      }
    },
    {
      id: 1,
      title: 'AgriBuddy',
      subtitle: 'Smart Crop Diagnosis',
      description: 'A futuristic agro-tech pipeline using computer vision to diagnose crop plant pathogens from simple cell photos, advising corrective treatments.',
      imgUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React Native', 'AWS S3'],
      liveUrl: 'https://devoqlabs.com',
      gitUrl: 'https://github.com/manishchouhan123',
      caseStudy: {
        problem: 'Rural farmers lose up to 40% of seasonal yields due to delayed identification of leaf pathogens and incorrect pesticide applications.',
        solution: 'AgriBuddy lets farmers photograph crop leaves and instantly runs it through a mobile-optimized CNN model to deliver highly accurate diagnosis files.',
        features: [
          'Off-line compatible Convolutional Neural Network (CNN) model caching.',
          'Automated multi-lingual treatment sheets listing organic and chemical remedies.',
          'GPS-linked mapping tracking local crop disease spreads.'
        ]
      }
    },
    {
      id: 2,
      title: 'Devoq Labs Portal',
      subtitle: 'Startup Agency Systems',
      description: 'The core business dashboard for Devoq Labs, handling automated project milestones, ticketing structures, client invoices, and live UI reviews.',
      imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Stripe'],
      liveUrl: 'https://devoqlabs.com',
      gitUrl: 'https://github.com/manishchouhan123',
      caseStudy: {
        problem: 'Technical agency operations suffer from fragmented tool stacks (Jira, Google Drive, Stripe), delaying project delivery and review feedback.',
        solution: 'Devoq Labs Portal merges client communications, live milestone tracking, visual design approvals, and invoicing into a unified WebGL workspace.',
        features: [
          'Integrated Figma review components letting clients comment on live site frames.',
          'Smart contract/invoice generation synced with Stripe milestones.',
          'Encrypted project file storage and task delegation dashboards.'
        ]
      }
    },
    {
      id: 3,
      title: 'Finozest',
      subtitle: 'Market Intelligence Engine',
      description: 'A clean financial modeling application displaying asset patterns, forecasting market spikes, and compiling personalized stock reports.',
      imgUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
      tech: ['React.js', 'FastAPI', 'Tableau API', 'Pandas', 'Docker'],
      liveUrl: 'https://devoqlabs.com',
      gitUrl: 'https://github.com/manishchouhan123',
      caseStudy: {
        problem: 'Retail investors struggle to dissect complex market data sets and coordinate financial variables across different charting portals.',
        solution: 'Finozest parses global indicators, summarizes trends using LLMs, and presents real-time data through glassmorphic charts.',
        features: [
          'Auto-updating chart pipelines plotting historical prices and moving averages.',
          'AI-synthesized morning portfolio reports compiled automatically.',
          'Interactive sliders for simulating investment return scenarios.'
        ]
      }
    },
    {
      id: 4,
      title: 'Space Portfolio',
      subtitle: 'Cinematic Digital Realm',
      description: 'The award-winning portfolio you are experiencing, featuring Web Audio API sound engines, raw Three.js particle spheres, and Command Palettes.',
      imgUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      tech: ['Next.js 15', 'Three.js', 'Framer Motion', 'Web Audio API', 'SEO'],
      liveUrl: '#',
      gitUrl: 'https://github.com/manishchouhan123',
      caseStudy: {
        problem: 'Most developer portfolios are flat, templated, and fail to demonstrate high-end engineering capabilities, blending into generic layouts.',
        solution: 'Built a multi-sensory futuristic dashboard that highlights technical mastery, data analytics expertise, and design aesthetics simultaneously.',
        features: [
          'On-the-fly browser synthesized sound effects utilizing Web Audio API oscillators.',
          'Lightweight WebGL galaxy models and responsive custom cursor rings.',
          'Structured JSON-LD entity mappings achieving perfect 100 SEO scores.'
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative grids */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-purple mb-4 tracking-widest uppercase font-mono"
          >
            <span>Showcase</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Build Showcase</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Explore advanced AI systems, enterprise SaaS frameworks, and custom web experiences. Click a card to read case study details.
          </p>
        </div>

        {/* Horizontal Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onClick={() => {
                setSelectedProject(proj);
                playClickSound();
              }}
              playHoverSound={playHoverSound}
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-3xl bg-background/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass-panel max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-brand-blue" />
                  <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Case Study Analysis</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    playClickSound();
                  }}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 no-scrollbar flex-1">
                {/* Intro */}
                <div>
                  <h3 className="text-2xl md:text-4xl font-display font-black tracking-tight text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-brand-blue font-mono text-xs md:text-sm">{selectedProject.subtitle}</p>
                </div>

                {/* Grid info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-white/5 py-6">
                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-wider text-white/40 mb-2 uppercase">The Problem</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans">{selectedProject.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-wider text-white/40 mb-2 uppercase">Our Solution</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans">{selectedProject.caseStudy.solution}</p>
                  </div>
                </div>

                {/* Key specs */}
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-white/40 mb-4 uppercase">Core Capabilities & Integrations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedProject.caseStudy.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 bg-white/5 border border-white/5 rounded-xl p-3.5">
                        <Check className="w-4.5 h-4.5 text-brand-purple flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-white/70 leading-relaxed font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono tracking-wider text-white/40 uppercase">Technology Constellation</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex justify-end space-x-3 flex-shrink-0">
                <a
                  href={selectedProject.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-white transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg rounded-xl px-4 py-2.5 text-xs font-mono text-white transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Execute Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// 3D Tilt Card Wrapper Component
interface CardProps {
  project: Project;
  onClick: () => void;
  playHoverSound: () => void;
  index: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, onClick, playHoverSound, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Normalize coordinates to [-0.5, 0.5] relative to center
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Set rotation angles
    setRotateX(-y * 15); // Rotate around X based on vertical offset
    setRotateY(x * 15);  // Rotate around Y based on horizontal offset
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={playHoverSound}
        onClick={onClick}
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden glass-panel-hover cursor-pointer p-4 flex flex-col justify-between h-[380px] relative"
      >
        <div>
          {/* Project Thumbnail */}
          <div className="w-full h-[160px] rounded-xl overflow-hidden mb-5 border border-white/5 relative">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-60" />
            <span className="absolute bottom-3 right-3 text-[9px] font-mono text-white/70 bg-black/80 px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">
              {project.tech[0]}
            </span>
          </div>

          <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest mb-1.5 block">
            {project.subtitle}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-purple transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-xs md:text-sm line-clamp-2 leading-relaxed font-sans mb-4">
            {project.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
          {/* Render tags */}
          <div className="flex space-x-1">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[8px] md:text-[9px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-white/50">
                {t}
              </span>
            ))}
          </div>
          <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-brand-blue group-hover:translate-x-1.5 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
