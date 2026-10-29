'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, Layers, Server, Shield, Sparkles, Terminal } from 'lucide-react';

interface Stage {
  id: string;
  label: string;
  tech: string;
  detail: string;
}

interface DiagramProps {
  projectId: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ projectId }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const getStages = (): Stage[] => {
    switch (projectId) {
      case 'ad-automation-os':
        return [
          {
            id: 'client',
            label: '1. Web Interface',
            tech: 'Next.js 15 & React',
            detail: 'Responsive ad management dashboard for configuring campaigns, creatives, and scheduling rules.',
          },
          {
            id: 'gateway',
            label: '2. High-Throughput API',
            tech: 'Fastify Microservice',
            detail: 'Low-latency backend validating payload schemas, managing session authentication, and orchestrating API calls.',
          },
          {
            id: 'external-api',
            label: '3. Ad Network Integration',
            tech: 'Meta Graph API',
            detail: 'Synchronous and asynchronous integration with Meta Graph API endpoints to automate ad launches and telemetry.',
          },
          {
            id: 'database',
            label: '4. Relational Storage',
            tech: 'Prisma ORM & PostgreSQL (Supabase)',
            detail: 'Type-safe database schema modeling campaign state, credential storage, and campaign audit histories.',
          },
          {
            id: 'deployment',
            label: '5. Automated Deployment',
            tech: 'Vercel + Railway CI/CD',
            detail: 'Separation of concerns with frontend served via Vercel edge and backend services hosted on Railway with automated pipelines.',
          },
        ];

      case 'mind-mitra':
        return [
          {
            id: 'input',
            label: '1. User Input Interface',
            tech: 'Lovable AI & Responsive Web',
            detail: 'Accessible entrypoint allowing users to express feelings and record situational thoughts through intuitive prompts.',
          },
          {
            id: 'nlp',
            label: '2. Sentiment & Context Parser',
            tech: 'NLP Pipelines',
            detail: 'Extracts emotional tone, sentiment markers, and conversational themes without collecting invasive personal identifiers.',
          },
          {
            id: 'coping-engine',
            label: '3. Cognitive Coping Engine',
            tech: 'Prompt Engineering & Logic Flow',
            detail: 'Applies validated cognitive behavioral frameworks to deliver empathetic reflection prompts and structured coping exercises.',
          },
          {
            id: 'dual-dashboard',
            label: '4. Dual-User Dashboard',
            tech: 'Dual Views (User / Analytics)',
            detail: 'Segmented user dashboard for tracking emotional patterns over time and structured summaries for wellness advisors.',
          },
        ];

      case 'agribuddy':
        return [
          {
            id: 'capture',
            label: '1. Foliar Image Capture',
            tech: 'Mobile Web Upload',
            detail: 'Ingests high-resolution plant leaf photos taken under diverse natural lighting and outdoor agricultural conditions.',
          },
          {
            id: 'preprocess',
            label: '2. Image Normalization',
            tech: 'Python / OpenCV',
            detail: 'Resizes, normalizes color channels, and isolates foliar lesions from soil and background noise.',
          },
          {
            id: 'inference',
            label: '3. Pathogen Classification',
            tech: 'TensorFlow / Computer Vision',
            detail: 'Evaluates visual patterns against trained crop pathogen models to infer likely fungal, bacterial, or blight conditions.',
          },
          {
            id: 'api-service',
            label: '4. Diagnostic Service',
            tech: 'FastAPI Backend',
            detail: 'Serves real-time inference predictions, confidence breakdown, and actionable agricultural remediation steps.',
          },
        ];

      case 'devoq-speech-services':
        return [
          {
            id: 'client-req',
            label: '1. Client Payload',
            tech: 'Audio Stream / JSON',
            detail: 'Inbound requests providing audio streams for transcription or text strings for voice synthesis.',
          },
          {
            id: 'auth-gateway',
            label: '2. Central API Gateway',
            tech: 'Node.js & Express.js',
            detail: 'Validates API keys, enforces request throttling, and safely routes traffic between internal microservices.',
          },
          {
            id: 'stt-service',
            label: '3. Speech-to-Text Pipeline',
            tech: 'Google Cloud Speech API',
            detail: 'High-accuracy streaming transcription converting voice inputs into structured text transcripts.',
          },
          {
            id: 'tts-service',
            label: '4. Neural Voice Synthesis',
            tech: 'AI33.pro TTS Engine',
            detail: 'Converts generated or provided text into natural-sounding voice streams with customizable vocal pacing.',
          },
          {
            id: 'container',
            label: '5. Containerized Service',
            tech: 'Docker Architecture',
            detail: 'Packaged microservice container ensuring uniform environment execution across local dev and cloud infrastructure.',
          },
        ];

      case 'hbb-mutation-analyzer':
        return [
          {
            id: 'nomenclature',
            label: '1. Variant Notation',
            tech: 'HGVS Nomenclature Input',
            detail: 'Ingests standard human Beta-Globin (HBB) variant strings (e.g., c.79G>A, p.Glu27Lys) from genomic datasets.',
          },
          {
            id: 'parser',
            label: '2. Codon & Mutation Parser',
            tech: 'Python Bioinformatics Module',
            detail: 'Validates HGVS syntax, parses codon position offsets, and determines missense, nonsense, or frameshift effects.',
          },
          {
            id: 'database-fetch',
            label: '3. Clinical & Literature Fetch',
            tech: 'NCBI ClinVar & PubMed APIs',
            detail: 'Queries ClinVar for clinical pathogenicity classifications and fetches peer-reviewed literature abstracts from PubMed.',
          },
          {
            id: 'gemini-engine',
            label: '4. Research Synthesis Engine',
            tech: 'Google Gemini API',
            detail: 'Synthesizes aggregated clinical annotations and literature abstracts into a clear, structured research summary.',
          },
        ];

      default:
        return [];
    }
  };

  const stages = getStages();
  if (stages.length === 0) return null;

  const currentStage = stages[activeStageIndex] || stages[0];

  return (
    <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#FAF9F5] border border-[#E2E4DC] text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8EAE0]">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-[#58745C]" />
          <span className="font-mono font-semibold uppercase tracking-wider text-[#20231F] text-[11px]">
            System Architecture &amp; Data Pipeline
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#6B7168]">
          Click stage to inspect component
        </span>
      </div>

      {/* Pipeline Stages Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
        {stages.map((stage, idx) => {
          const isSelected = idx === activeStageIndex;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-2.5 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-white border-[#58745C] shadow-sm ring-1 ring-[#58745C]'
                  : 'bg-white/60 hover:bg-white border-[#E2E4DC] text-[#6B7168]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-semibold ${isSelected ? 'text-[#58745C]' : 'text-[#8D938A]'}`}>
                  STEP 0{idx + 1}
                </span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#58745C]" />}
              </div>
              <div className={`font-medium text-xs truncate ${isSelected ? 'text-[#20231F]' : 'text-[#52584F]'}`}>
                {stage.label.replace(/^\d+\.\s*/, '')}
              </div>
              <div className="text-[10px] font-mono text-[#8D938A] truncate mt-0.5">
                {stage.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="p-4 rounded-lg bg-white border border-[#E2E4DC] shadow-sm">
        <div className="flex items-baseline justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#EBF1EC] text-[#58745C] border border-[#D7E2D9]">
              STAGE {activeStageIndex + 1} OF {stages.length}
            </span>
            <span className="font-display font-bold text-sm text-[#20231F]">
              {currentStage.label}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#58745C] font-semibold">
            {currentStage.tech}
          </span>
        </div>
        <p className="text-xs text-[#52584F] leading-relaxed">
          {currentStage.detail}
        </p>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
