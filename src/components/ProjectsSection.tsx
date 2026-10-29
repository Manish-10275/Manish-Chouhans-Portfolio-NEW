'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, AlertCircle, Layers, Cpu, Server, Sprout, HeartPulse, Terminal, Code2 } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';
import { SectionMarker } from './EngineeringMotif';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  isPrototype: boolean;
  problem: string;
  role: string;
  technologies: string[];
  bullets: string[];
  disclaimer?: string;
  repoUrl?: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: 'ad-automation-os',
    title: 'Ad Automation OS',
    subtitle: 'Full-Stack / Backend Engineering Project',
    category: 'Full-Stack & Backend Systems',
    status: 'Core Implementation',
    isPrototype: false,
    icon: <Layers className="w-5 h-5 text-[#58745C]" />,
    problem: 'Manual ad management across social graph APIs introduces operational drag, configuration errors, and slow campaign iteration.',
    role: 'Full-Stack Software Engineer • Architected the backend API gateway, integrated Meta Graph API, and configured CI/CD pipelines.',
    technologies: ['Next.js', 'Fastify', 'Prisma', 'Meta Graph API', 'PostgreSQL', 'Supabase', 'Vercel', 'Railway', 'CI/CD'],
    bullets: [
      'Architected and developed a full-stack automated ad management system integrating Meta Graph API with robust backend services.',
      'Engineered scalable database schemas using Prisma and PostgreSQL/Supabase, deployed via Vercel and Railway with CI/CD pipelines.'
    ],
    repoUrl: 'https://github.com/Manish-10275',
  },
  {
    id: 'mind-mitra',
    title: 'Mind Mitra',
    subtitle: 'AI-Powered Mental Health Platform',
    category: 'AI Application & UX Design',
    status: 'Platform Prototype',
    isPrototype: true,
    icon: <HeartPulse className="w-5 h-5 text-[#58745C]" />,
    problem: 'Individuals experiencing daily stress often lack accessible, structured interfaces for emotional reflection and guided cognitive coping strategies.',
    role: 'Product Conceptualizer & AI Builder • Designed dual-user dashboards and structured the natural language processing prompt flow.',
    technologies: ['Lovable AI', 'UI/UX', 'NLP Pipelines', 'Prompt Engineering', 'Dual Dashboards'],
    bullets: [
      'Spearheaded product conceptualization and development of a scalable mental health platform with dual-user dashboards.',
      'Developed an AI counseling companion utilizing natural language processing pipelines to deliver real-time emotional support and cognitive coping techniques.'
    ],
    disclaimer:
      'Exploratory wellness tool: Mind Mitra is designed as an interactive prototype companion for emotional reflection and coping strategies. It does not provide medical advice, psychotherapy, or clinical psychiatric diagnostic services.',
    repoUrl: 'https://github.com/Manish-10275',
  },
  {
    id: 'agribuddy',
    title: 'AgriBuddy',
    subtitle: 'Smart Crop Pathogen Diagnosis Pipeline (Prototype)',
    category: 'Agricultural AI Prototype',
    status: 'Research Prototype',
    isPrototype: true,
    icon: <Sprout className="w-5 h-5 text-[#58745C]" />,
    problem: 'Smallholder farmers frequently encounter crop yield loss due to delayed foliar disease identification and lack of immediate agronomic guidance.',
    role: 'Machine Learning & Backend Developer • Implemented computer vision feature classification model and structured the FastAPI inference service.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Computer Vision', 'Image Inferences'],
    bullets: [
      'Developed an agro-tech prototype pipeline using computer vision designed to diagnose crop plant pathogens and leaf diseases from uploaded photos.',
      'Configured a FastAPI service interface to process image inputs and serve diagnostic guidance for common agricultural conditions.'
    ],
    disclaimer:
      'Agricultural research prototype: This system was built to explore the feasibility of computer vision for crop foliar anomaly identification. It has not undergone field trials for production agricultural certification.',
    repoUrl: 'https://github.com/Manish-10275',
  },
  {
    id: 'devoq-speech-services',
    title: 'Devoq Labs Speech Services',
    subtitle: 'Voice Synthesis & Audio Processing Gateway',
    category: 'AI Infrastructure & APIs',
    status: 'Backend Microservice',
    isPrototype: false,
    icon: <Server className="w-5 h-5 text-[#58745C]" />,
    problem: 'Multiple client applications required a unified, secure gateway to handle speech transcription and neural voice generation without vendor lock-in.',
    role: 'Backend Microservices Engineer • Engineered the Express gateway, integrated Google STT and AI33.pro TTS endpoints, and packaged with Docker.',
    technologies: ['Node.js', 'Express.js', 'Google Cloud Speech-to-Text', 'AI33.pro TTS', 'Docker'],
    bullets: [
      'Engineered a centralized microservice gateway integrating Google Speech-to-Text with AI33.pro Text-to-Speech endpoints for automated voice synthesis.',
      'Implemented client API key authentication, request validation, and containerized deployment workflows using Docker.'
    ],
    repoUrl: 'https://github.com/Manish-10275',
  },
  {
    id: 'hbb-mutation-analyzer',
    title: 'HBB Mutation Analyzer',
    subtitle: 'Genomic Variant Research Tool (Prototype)',
    category: 'Bioinformatics Research Prototype',
    status: 'Research Prototype',
    isPrototype: true,
    icon: <Cpu className="w-5 h-5 text-[#58745C]" />,
    problem: 'Researchers analyzing Beta-Globin gene variants spend hours cross-referencing HGVS mutation strings manually across ClinVar and PubMed literature.',
    role: 'Bioinformatics & AI Developer • Built HGVS parsing algorithms, integrated NCBI ClinVar and PubMed APIs, and prompted Gemini AI for evidence summarization.',
    technologies: ['Python', 'HGVS Parsing', 'ClinVar API', 'PubMed API', 'Google Gemini API', 'Codon Analysis'],
    bullets: [
      'Designed a bioinformatics prototype to parse human Beta-Globin (HBB) gene variants using standard HGVS nomenclature and extract codon consequences.',
      'Aggregated variant classifications from NCBI ClinVar and literature citations via PubMed API, integrating Gemini AI to generate structured research summaries.'
    ],
    disclaimer:
      'Genomic variant research prototype: Built exclusively as an exploratory software tool to demonstrate variant nomenclature parsing and automated evidence synthesis. It is not a clinically validated diagnostic tool and must not be used for clinical decision-making or genetic counseling.',
    repoUrl: 'https://github.com/Manish-10275/HBB-GENE-MUTATION-PROJECT',
  },
];

export const ProjectsSection: React.FC = () => {
  // Store view mode ('overview' or 'architecture') per project
  const [activeViews, setActiveViews] = useState<Record<string, 'overview' | 'architecture'>>({
    'ad-automation-os': 'architecture',
    'mind-mitra': 'overview',
    'agribuddy': 'overview',
    'devoq-speech-services': 'architecture',
    'hbb-mutation-analyzer': 'overview',
  });

  const toggleView = (projectId: string, view: 'overview' | 'architecture') => {
    setActiveViews((prev) => ({ ...prev, [projectId]: view }));
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="SEC.01" code="SYSTEMS_&_PIPELINES" label="Engineering Portfolio" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Engineered systems, AI platforms &amp; prototypes.
          </h2>
          <p className="text-base md:text-lg text-[#52584F] leading-relaxed">
            Concrete evidence of engineering ability across full-stack architectures, generative AI microservices, and analytical prototypes—with full architectural transparency.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => {
            const currentView = activeViews[project.id] || 'overview';

            return (
              <article
                key={project.id}
                className="bg-white border border-[#E2E4DC] rounded-2xl p-7 md:p-9 shadow-card-subtle hover:border-[#CBD1C4] transition-all duration-200"
              >
                {/* Header Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#EBECE6]">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#58745C]">
                        SYSTEM 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Mode Toggle Pills (Overview vs Architecture Blueprint) */}
                  <div className="flex items-center space-x-2">
                    <div className="inline-flex p-1 rounded-lg bg-[#F1F2EC] border border-[#E2E4DC] text-xs">
                      <button
                        type="button"
                        onClick={() => toggleView(project.id, 'overview')}
                        className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all ${
                          currentView === 'overview'
                            ? 'bg-white text-[#20231F] font-semibold shadow-xs'
                            : 'text-[#6B7168] hover:text-[#20231F]'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleView(project.id, 'architecture')}
                        className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all flex items-center space-x-1 ${
                          currentView === 'architecture'
                            ? 'bg-white text-[#58745C] font-semibold shadow-xs'
                            : 'text-[#6B7168] hover:text-[#20231F]'
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Architecture</span>
                      </button>
                    </div>

                    {project.isPrototype && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#FAF3E8] text-[#8C5E28] border border-[#E8D9C0]">
                        Prototype
                      </span>
                    )}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#20231F] tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-[#58745C] font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Conditional View: Overview vs Architecture */}
                {currentView === 'overview' ? (
                  <div className="space-y-6">
                    {/* Problem & Role Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E4DC] text-xs">
                      <div>
                        <span className="font-mono font-semibold uppercase tracking-wider text-[#6B7168] block mb-1">
                          The Problem Solved
                        </span>
                        <p className="text-[#353A33] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono font-semibold uppercase tracking-wider text-[#58745C] block mb-1">
                          Role &amp; Core Contribution
                        </span>
                        <p className="text-[#353A33] leading-relaxed">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* Verified Implementation Bullets */}
                    <div className="space-y-2.5">
                      {project.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start space-x-3 text-sm md:text-base text-[#20231F]/90 leading-relaxed font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#58745C] mt-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <ArchitectureDiagram projectId={project.id} />
                  </div>
                )}

                {/* Disclaimer if present */}
                {project.disclaimer && (
                  <div className="mt-6 p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E2E4DC] flex items-start space-x-2.5 text-xs text-[#6B7168] leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                    <span>{project.disclaimer}</span>
                  </div>
                )}

                {/* Tech Tags & Repository Action */}
                <div className="mt-6 pt-5 border-t border-[#EBECE6] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-[#8D938A] mr-1">STACK:</span>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#20231F] hover:text-[#58745C] transition-colors py-1 px-2.5 rounded hover:bg-[#F1F2EC]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub profile &amp; repos</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
