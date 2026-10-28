'use client';

import React from 'react';
import { ArrowUpRight, Github, AlertCircle, Layers, Cpu, Server, Sprout, HeartPulse } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  isPrototype: boolean;
  technologies: string[];
  bullets: string[];
  disclaimer?: string;
  repoUrl?: string;
  liveUrl?: string;
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
    technologies: ['Python', 'HGVS Parsing', 'ClinVar API', 'PubMed API', 'Google Gemini API', 'Codon Analysis'],
    bullets: [
      'Designed a bioinformatics prototype to parse human Beta-Globin (HBB) gene variants using standard HGVS nomenclature and extract codon consequences.',
      'Aggregated variant classifications from NCBI ClinVar and literature citations via PubMed API, integrating Gemini AI to generate structured research summaries.'
    ],
    disclaimer:
      'Genomic variant research prototype: Built exclusively as an exploratory software tool to demonstrate variant nomenclature parsing and automated evidence synthesis. It is not a clinically validated diagnostic tool and must not be used for clinical decision-making or genetic counseling.',
    repoUrl: 'https://github.com/Manish-10275',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Key Projects &amp; Technical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Engineered systems, AI platforms &amp; prototypes.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            All five technical projects from my finalized curriculum vitae, covering full-stack backend architectures, machine learning workflows, and research prototypes.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="bg-white border border-[#E2E4DC] rounded-2xl p-7 md:p-9 shadow-card-subtle hover:border-[#D1D4CA] transition-all duration-200"
            >
              {/* Header meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-[#EBECE6]">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-[#EBF1EC] border border-[#D7E2D9]">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168] block">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#58745C]">
                      Project 0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {project.isPrototype && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#FAF3E8] text-[#8C5E28] border border-[#E8D9C0]">
                      Prototype
                    </span>
                  )}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-5">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#20231F] tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-[#58745C] font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Bullets directly from CV */}
              <div className="space-y-2.5 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-3 text-sm md:text-base text-[#20231F]/90 leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58745C] mt-2.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer if present */}
              {project.disclaimer && (
                <div className="mb-6 p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E2E4DC] flex items-start space-x-2.5 text-xs text-[#6B7168] leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                  <span>{project.disclaimer}</span>
                </div>
              )}

              {/* Tech Tags & Repository Action */}
              <div className="pt-5 border-t border-[#EBECE6] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-[#8D938A] mr-1">Tech:</span>
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
                    <span>GitHub profile &amp; repositories</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
