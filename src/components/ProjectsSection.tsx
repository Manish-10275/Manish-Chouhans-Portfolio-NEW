'use client';

import React from 'react';
import { ArrowUpRight, Github, AlertCircle, CheckCircle2, Layers, Cpu, Server, Sprout, Building2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  disclaimer?: string;
  repoUrl?: string;
  liveUrl?: string;
  isPrimary: boolean;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: 'hbb-mutation-analyzer',
    title: 'HBB Mutation Analyzer',
    category: 'Bioinformatics & Genomic Analysis',
    status: 'Ongoing Technical Project',
    icon: <Cpu className="w-5 h-5 text-[#58745C]" />,
    description:
      'A tool for exploring hemoglobin beta gene variants, HGVS notation, molecular consequences, ClinVar evidence, and supporting research. The project combines variant interpretation utilities with evidence retrieval and an AI assisted research workflow.',
    problem:
      'Genetic variant interpretation in hemoglobin beta (HBB) requires reconciling sequence coordinate formats, validating codon changes, cross-referencing ClinVar pathogenicity records, and reviewing scientific publications scattered across disparate databases.',
    solution:
      'Engineered an integrated exploration utility that parses HGVS variant strings, analyzes coding consequences, queries ClinVar assertion records, and uses Gemini to synthesize supporting biomedical research literature into a structured evidence view.',
    contribution:
      'Designed the variant parsing logic, integrated external biomedical APIs (ClinVar & PubMed), implemented LLM-assisted literature evidence synthesis, and built a clean research interface.',
    technologies: [
      'Python',
      'HGVS Parsing',
      'ClinVar API',
      'PubMed E-Utilities',
      'Gemini API',
      'Bioinformatics Data Models'
    ],
    disclaimer:
      'Research & exploratory software: This project is built for technical research and literature synthesis. It does not replace professional clinical interpretation, genetic counseling, or certified medical diagnostic procedures.',
    repoUrl: 'https://github.com/Manish-10275',
    isPrimary: true,
  },
  {
    id: 'ad-automation-os',
    title: 'Ad Automation OS',
    category: 'AI Automation & SaaS',
    status: 'In Development / Core Prototype',
    icon: <Layers className="w-5 h-5 text-[#58745C]" />,
    description:
      'An operations platform for connecting advertising services, managing automation workflows, and bringing rules execution, audit logs, and operational visibility into a unified interface.',
    problem:
      'Campaign teams managing multi-channel ad operations struggle with fragmented interfaces, inconsistent rule triggers, lack of central audit trails, and manual intervention when execution anomalies occur.',
    solution:
      'Developed a unified operations console that connects external advertising providers, enables structured automation rule authoring, tracks execution history, and records detailed audit logs for operational traceability.',
    contribution:
      'Architected the rule trigger execution pipeline, designed schema-validated logging mechanisms, built the operational dashboard UI in Next.js, and standardized API connector interfaces.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Rules Engine',
      'Audit Logging',
      'REST APIs',
      'Tailwind CSS'
    ],
    repoUrl: 'https://github.com/Manish-10275',
    isPrimary: true,
  },
  {
    id: 'devoq-speech-services',
    title: 'Devoq Labs Speech Services',
    category: 'AI Infrastructure & APIs',
    status: 'Backend API & Infrastructure',
    icon: <Server className="w-5 h-5 text-[#58745C]" />,
    description:
      'A backend service that brings speech transcription and AI voice generation behind a consistent API, with a focus on straightforward integration into other applications.',
    problem:
      'Integrating speech capabilities across different products often requires juggling disparate audio formats, differing vendor payload structures, and variable provider rate limits.',
    solution:
      'Created a centralized gateway microservice that abstracts speech-to-text and text-to-speech providers behind a standardized, predictable REST API with structured response schemas and error normalization.',
    contribution:
      'Implemented provider integrations with Google Cloud Speech-to-Text and AI33.pro voice APIs, configured payload translation layers, and created API documentation for developer consumption.',
    technologies: [
      'Node.js',
      'Express',
      'Google Speech-to-Text',
      'AI33.pro TTS API',
      'RESTful Architecture',
      'Audio Stream Handling'
    ],
    repoUrl: 'https://github.com/Manish-10275',
    isPrimary: true,
  },
  {
    id: 'agribuddy',
    title: 'AgriBuddy',
    category: 'Agricultural AI',
    status: 'Concept & Prototype',
    icon: <Sprout className="w-5 h-5 text-[#58745C]" />,
    description:
      'An AI powered plant disease detection concept focused on helping identify plant leaf diseases from images and exploring how computer vision can support agricultural decision making.',
    problem:
      'Delayed identification of crop plant foliar diseases causes preventable crop degradation, while agricultural expertise remains physically inaccessible in many rural farming areas.',
    solution:
      'Prototyped a convolutional neural network workflow that evaluates crop leaf imagery against established plant pathology datasets, outputting candidate condition indicators and standard remedial guidelines.',
    contribution:
      'Curated crop training datasets, experimented with CNN image classification architectures in Python, and evaluated model inferences on test leaf anomalies.',
    technologies: [
      'Python',
      'Computer Vision',
      'CNN / Deep Learning',
      'Dataset Preprocessing',
      'Model Evaluation'
    ],
    repoUrl: 'https://github.com/Manish-10275',
    isPrimary: false,
  },
  {
    id: 'devoq-labs-studio',
    title: 'Devoq Labs',
    category: 'Entrepreneurship & Product Development',
    status: 'Active Digital Studio',
    icon: <Building2 className="w-5 h-5 text-[#58745C]" />,
    description:
      'An independent digital and AI focused studio founded by Manish Chouhan, working across web applications, software development, UI and UX, and AI integration.',
    problem:
      'Early-stage businesses and founders often need technical partners who understand modern full-stack development, LLM integrations, and rapid product scoping without enterprise agency bloat.',
    solution:
      'Founded Devoq Labs as an agile product studio that translates technical concepts into functioning software, combining frontend engineering, AI workflows, and structured delivery management.',
    contribution:
      'Founder and lead developer. Responsible for client project scoping, architecture decisions, code implementation, developer coordination, and product delivery.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'AI Integration',
      'UI/UX Architecture',
      'Agile Delivery'
    ],
    liveUrl: 'https://devoqlabs.com',
    repoUrl: 'https://github.com/Manish-10275',
    isPrimary: false,
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-10 border-b border-[#E2E4DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#58745C] font-semibold mb-3">
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#20231F] mb-4">
            Products, systems, and technical explorations.
          </h2>
          <p className="text-base md:text-lg text-[#6B7168] leading-relaxed">
            A curated selection of software projects, AI automation pipelines, and infrastructure services built with a focus on real utility and sound engineering.
          </p>
        </div>

        {/* Primary Projects (Top 3) */}
        <div className="space-y-10 mb-14">
          {PROJECTS.filter((p) => p.isPrimary).map((project, index) => (
            <article
              key={project.id}
              className="bg-white border border-[#E2E4DC] rounded-2xl p-7 md:p-10 shadow-card-subtle hover:border-[#D1D4CA] transition-all duration-200"
            >
              {/* Header meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#EBECE6]">
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

                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#20231F] tracking-tight mb-4">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-[#20231F]/90 leading-relaxed font-normal mb-8 max-w-4xl">
                {project.description}
              </p>

              {/* Problem / Solution / Contribution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-[#EBECE6]">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7168] font-semibold mb-2">
                    The Problem
                  </h4>
                  <p className="text-sm text-[#6B7168] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7168] font-semibold mb-2">
                    Solution Built
                  </h4>
                  <p className="text-sm text-[#20231F] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7168] font-semibold mb-2">
                    My Contribution
                  </h4>
                  <p className="text-sm text-[#6B7168] leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Disclaimer if present */}
              {project.disclaimer && (
                <div className="mb-6 p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E2E4DC] flex items-start space-x-2.5 text-xs text-[#6B7168] leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-[#58745C] flex-shrink-0 mt-0.5" />
                  <span>{project.disclaimer}</span>
                </div>
              )}

              {/* Tech Tags & Actions */}
              <div className="pt-6 border-t border-[#EBECE6] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#20231F] hover:text-[#58745C] transition-colors py-1 px-2 rounded hover:bg-[#F1F2EC]"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#58745C] hover:text-[#47604B] transition-colors py-1 px-2 rounded hover:bg-[#EBF1EC]"
                    >
                      <span>Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Projects Grid (Projects 4 & 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.filter((p) => !p.isPrimary).map((project, index) => (
            <article
              key={project.id}
              className="bg-white border border-[#E2E4DC] rounded-2xl p-7 md:p-8 shadow-card-subtle hover:border-[#D1D4CA] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-md bg-[#EBF1EC] border border-[#D7E2D9]">
                      {project.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6B7168]">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-[#20231F] tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-[#20231F]/90 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6 pt-5 border-t border-[#EBECE6] text-xs">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-[#6B7168] block mb-1">
                      Problem &amp; Approach
                    </span>
                    <p className="text-[#6B7168] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono uppercase tracking-wider text-[#6B7168] block mb-1">
                      Contribution
                    </span>
                    <p className="text-[#20231F] leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-5 border-t border-[#EBECE6] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F1F2EC] text-[#20231F] border border-[#E2E4DC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-medium text-[#20231F] hover:text-[#58745C] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-medium text-[#58745C] hover:text-[#47604B] transition-colors ml-2"
                      >
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
