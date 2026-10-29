'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Play, Code, Cpu, BookOpen } from 'lucide-react';

type Tab = 'profile' | 'pipeline' | 'tenets';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  const profileCode = `// engineer.profile.ts
export const ManishChouhan: Engineer = {
  title: "Software Engineer, AI Engineer & Product Builder",
  foundations: {
    dataScience: "IIT Madras (BS in Data Science & Applications)",
    management: "Harvard University (Business Administration Mgmt)"
  },
  coreStack: [
    "TypeScript", "Python", "Fastify", "Next.js", 
    "PostgreSQL / Prisma", "Docker", "FastAPI"
  ],
  aiCapabilities: [
    "LLM API Integration (OpenAI, Gemini)",
    "Speech & Voice Pipelines (Google STT, AI33.pro TTS)",
    "NLP Sentiment & Coping Architectures",
    "Computer Vision Prototyping (TensorFlow)"
  ],
  status: "Available for engineering roles & technical leadership"
};`;

  const pipelineLog = `[INFO]  10:14:02.118  REQ-8902 POST /v1/voice/synthesize
[AUTH]  10:14:02.122  API Key validated (Client: Devoq-Labs-Gateway)
[STT]   10:14:02.145  Google Cloud STT streaming session established
[AUDIO] 10:14:02.260  Audio frame buffered: 16kHz linear16 PCM
[TTS]   10:14:02.310  AI33.pro endpoint invoked: synthesis model v2
[RES]   10:14:02.420  Latency: 302ms • HTTP 200 • Stream dispatched
[STATS] 10:14:02.422  Zero audio buffer leaks • Container memory: 142MB`;

  const tenetsText = `# Technical & Product Philosophy

1. Deterministic Core, Probabilistic AI
   Build rock-solid backend foundations (strict typing, schema
   migrations, idempotency) before layering generative capabilities.

2. Measure Latency & Real-World Cost
   An AI workflow is only as good as its throughput, token budget,
   and user-perceived responsiveness.

3. End-to-End Product Ownership
   Bridge the gap between business objectives, architectural design,
   and production deployment.`;

  // Typing animation for active tab
  useEffect(() => {
    let currentContent = profileCode;
    if (activeTab === 'pipeline') currentContent = pipelineLog;
    if (activeTab === 'tenets') currentContent = tenetsText;

    setDisplayedText('');
    setTypingComplete(false);

    let index = 0;
    const step = Math.max(1, Math.floor(currentContent.length / 45));
    const timer = setInterval(() => {
      index += step;
      if (index >= currentContent.length) {
        setDisplayedText(currentContent);
        setTypingComplete(true);
        clearInterval(timer);
      } else {
        setDisplayedText(currentContent.slice(0, index));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [activeTab]);

  const copyToClipboard = () => {
    const textToCopy =
      activeTab === 'profile' ? profileCode : activeTab === 'pipeline' ? pipelineLog : tenetsText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#1E221E] text-[#E5E9E2] border border-[#323832] overflow-hidden shadow-2xl font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#161816] border-b border-[#2C322C] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80" />
          <span className="text-[11px] text-[#868E84] pl-2 select-none">
            manish@builder:~/{activeTab === 'profile' ? 'profile.ts' : activeTab === 'pipeline' ? 'speech-gateway.log' : 'philosophy.md'}
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center space-x-1.5 ${
              activeTab === 'profile'
                ? 'bg-[#2A312A] text-white font-medium'
                : 'text-[#868E84] hover:text-[#C5CDC2]'
            }`}
          >
            <Code className="w-3 h-3" />
            <span>profile.ts</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center space-x-1.5 ${
              activeTab === 'pipeline'
                ? 'bg-[#2A312A] text-white font-medium'
                : 'text-[#868E84] hover:text-[#C5CDC2]'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>pipeline.log</span>
          </button>

          <button
            onClick={() => setActiveTab('tenets')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center space-x-1.5 ${
              activeTab === 'tenets'
                ? 'bg-[#2A312A] text-white font-medium'
                : 'text-[#868E84] hover:text-[#C5CDC2]'
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>philosophy.md</span>
          </button>

          <div className="h-4 w-px bg-[#323832] mx-1" />

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="p-1 rounded text-[#868E84] hover:text-white transition-colors"
            title="Copy code"
            aria-label="Copy terminal content"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#98C379]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Viewer Body */}
      <div className="p-4 sm:p-5 overflow-x-auto min-h-[260px] max-h-[340px] leading-relaxed select-text">
        <pre className="text-[12px] font-mono text-[#D4DAD0]">
          <code>{displayedText}</code>
          {!typingComplete && (
            <span className="inline-block w-2 h-4 bg-[#7FB086] ml-1 animate-pulse align-middle" />
          )}
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-[#161816] border-t border-[#2C322C] flex items-center justify-between text-[10px] text-[#788075]">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FB086]" />
            <span>ENVIRONMENT: PRODUCTION-READY</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">TYPESCRIPT 5.7 • NODE 24</span>
        </div>
        <div>
          <span>UTF-8 • LF • 100% REPRODUCIBLE</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
