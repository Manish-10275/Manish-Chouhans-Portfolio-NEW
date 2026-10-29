'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  category: 'code' | 'ai' | 'data' | 'infra';
}

interface Edge {
  source: number;
  target: number;
  active: boolean;
  packetProgress: number;
  packetSpeed: number;
}

export const InteractiveHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initGraph();
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Node definitions mapped proportionally
    const nodeDefinitions = [
      { label: 'TypeScript', sub: 'Core Logic', cat: 'code' as const, rx: 0.18, ry: 0.22, color: '#3178C6' },
      { label: 'Fastify & Node', sub: 'API Gateway', cat: 'code' as const, rx: 0.45, ry: 0.16, color: '#58745C' },
      { label: 'PostgreSQL', sub: 'Supabase / Prisma', cat: 'data' as const, rx: 0.22, ry: 0.52, color: '#336791' },
      { label: 'Data Science', sub: 'IIT Madras', cat: 'data' as const, rx: 0.48, ry: 0.46, color: '#58745C' },
      { label: 'OpenAI / Gemini', sub: 'LLM Reasoning', cat: 'ai' as const, rx: 0.78, ry: 0.24, color: '#412991' },
      { label: 'NLP Pipelines', sub: 'Speech & Sentiment', cat: 'ai' as const, rx: 0.82, ry: 0.54, color: '#58745C' },
      { label: 'Docker & Cloud', sub: 'Container Runtime', cat: 'infra' as const, rx: 0.38, ry: 0.82, color: '#2496ED' },
      { label: 'Product Systems', sub: 'User Solutions', cat: 'infra' as const, rx: 0.72, ry: 0.84, color: '#20231F' },
    ];

    let nodes: Node[] = [];
    let edges: Edge[] = [];

    const initGraph = () => {
      nodes = nodeDefinitions.map((def, i) => {
        const x = def.rx * width;
        const y = def.ry * height;
        return {
          id: `node-${i}`,
          label: def.label,
          sublabel: def.sub,
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: width < 640 ? 4 : 5.5,
          color: def.color,
          category: def.cat,
        };
      });

      // Explicit, meaningful architectural edges
      const edgePairs = [
        [0, 1], // TypeScript -> Fastify
        [1, 2], // Fastify -> PostgreSQL
        [0, 2], // TypeScript -> Prisma/Postgres
        [2, 3], // PostgreSQL -> Data Science
        [1, 4], // Fastify -> LLM Reasoning
        [4, 5], // LLM Reasoning -> NLP Pipelines
        [3, 5], // Data Science -> NLP
        [2, 6], // Postgres -> Docker & Cloud
        [6, 7], // Docker -> Product Systems
        [5, 7], // NLP Pipelines -> Product Systems
        [1, 7], // Fastify -> Product Systems
      ];

      edges = edgePairs.map(([source, target], idx) => ({
        source,
        target,
        active: true,
        packetProgress: (idx * 0.17) % 1,
        packetSpeed: 0.003 + (idx % 3) * 0.0015,
      }));
    };

    initGraph();

    // Mouse handlers
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };

      // Check hover
      let found: string | null = null;
      for (const node of nodes) {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < 24) {
          found = `${node.label} • ${node.sublabel}`;
          break;
        }
      }
      setHoveredNode(found);
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
      setHoveredNode(null);
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    // Render loop
    let lastTime = performance.now();
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid dots
      const gridSpacing = 32;
      ctx.fillStyle = '#E5E8E0';
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Physics / mouse reaction (if reduced motion is not requested)
      if (!motionQuery.matches) {
        nodes.forEach((node) => {
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - node.x;
            const dy = mouseRef.current.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 140;

            if (dist < maxDist && dist > 1) {
              const force = (1 - dist / maxDist) * 1.8;
              node.vx += (dx / dist) * force;
              node.vy += (dy / dist) * force;
            }
          }

          // Return to base spring
          const homeDx = node.baseX - node.x;
          const homeDy = node.baseY - node.y;
          node.vx += homeDx * 0.035;
          node.vy += homeDy * 0.035;

          // Friction damping
          node.vx *= 0.84;
          node.vy *= 0.84;

          node.x += node.vx;
          node.y += node.vy;
        });
      }

      // 1. Draw Edges
      edges.forEach((edge) => {
        const s = nodes[edge.source];
        const t = nodes[edge.target];
        if (!s || !t) return;

        // Base line
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = '#DDE2D8';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Animated data packet (pulsing dot along the edge)
        if (!motionQuery.matches) {
          edge.packetProgress += edge.packetSpeed;
          if (edge.packetProgress > 1) edge.packetProgress = 0;

          const px = s.x + (t.x - s.x) * edge.packetProgress;
          const py = s.y + (t.y - s.y) * edge.packetProgress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#58745C';
          ctx.fill();
        }
      });

      // 2. Draw Nodes
      nodes.forEach((node) => {
        const isHovered =
          mouseRef.current.active &&
          Math.hypot(mouseRef.current.x - node.x, mouseRef.current.y - node.y) < 28;

        // Outer glow on hover
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(88, 116, 92, 0.15)';
          ctx.fill();
        }

        // Concentric node ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? '#58745C' : '#E2E4DC';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#58745C' : '#FFFFFF';
        ctx.fill();

        // Node center pip
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FFFFFF' : '#58745C';
        ctx.fill();

        // Typography labels
        ctx.font = '600 11px var(--font-display, "Space Grotesk", sans-serif)';
        ctx.fillStyle = isHovered ? '#20231F' : '#3C423B';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y - node.radius - 8);

        ctx.font = '400 9px var(--font-sans, "DM Sans", sans-serif)';
        ctx.fillStyle = '#788075';
        ctx.fillText(node.sublabel, node.x, node.y + node.radius + 14);
      });

      if (!motionQuery.matches) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    if (!motionQuery.matches) {
      animFrameRef.current = requestAnimationFrame(render);
    } else {
      render(performance.now());
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      resizeObserver.disconnect();
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl bg-[#FAF9F5] border border-[#E2E4DC] overflow-hidden shadow-card-subtle select-none"
      aria-label="Interactive Architecture Graph: Computational connection between Code, Data Science, AI Reasoning, and Production Systems"
    >
      {/* Top Header Bar of Visualization */}
      <div className="absolute top-0 left-0 right-0 h-10 px-4 bg-[#F2F3EC]/90 backdrop-blur-sm border-b border-[#E2E4DC] flex items-center justify-between z-10 text-[11px] font-mono text-[#6B7168]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#58745C] animate-pulse" />
          <span className="font-semibold text-[#20231F]">SYSTEM_GRAPH // NODE_TOPOLOGY</span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] hidden sm:flex">
          <span className="px-2 py-0.5 rounded bg-white border border-[#E2E4DC] text-[#58745C]">
            ACTIVE PIPELINES
          </span>
          <span>8 NODES • 11 EDGES</span>
        </div>
      </div>

      {/* HTML5 Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Dynamic Hover Status Bar at Bottom */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#6B7168] bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-[#E2E4DC] pointer-events-none z-10">
        <div className="flex items-center space-x-2 truncate">
          <span className="text-[#58745C] font-semibold">STATUS:</span>
          <span className="text-[#20231F] truncate">
            {hoveredNode ? `Focused: ${hoveredNode}` : 'Hover / drag cursor to inspect engineering node connections'}
          </span>
        </div>
        <div className="text-[10px] text-[#8D938A] hidden md:block shrink-0 pl-2">
          {prefersReducedMotion ? 'Motion: Reduced' : 'Interactive Mesh: Live'}
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroCanvas;
