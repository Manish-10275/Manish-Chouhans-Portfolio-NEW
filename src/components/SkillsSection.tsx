'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Sparkles, Star, Target, Code, Database, Globe, Lightbulb, TrendingUp } from 'lucide-react';
import Magnetic from './Magnetic';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  technologies: string[];
}

export const SkillsSection: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      name: 'AI & Machine Learning',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      color: '#3B82F6',
      description: 'Building modern machine learning models and leveraging state-of-the-art NLP pipelines.',
      technologies: ['Artificial Intelligence Fundamentals', 'Machine Learning Fundamentals', 'Prompt Engineering', 'OpenAI APIs', 'Data Analysis', 'Tableau', 'Excel']
    },
    {
      name: 'Web Development',
      icon: <Code className="w-5 h-5 text-brand-purple" />,
      color: '#8B5CF6',
      description: 'Crafting responsive, high-performance modern web architectures and robust backend services.',
      technologies: ['React.js & Next.js 15', 'Node.js & NestJS', 'Firebase & REST APIs', 'TypeScript & JavaScript', 'HTML/CSS & Tailwind v4', 'Python Development']
    },
    {
      name: 'Project Management',
      icon: <Target className="w-5 h-5 text-brand-accent" />,
      color: '#A78BFA',
      description: 'Directing technical sprints and software delivery life-cycles with maximum transparency.',
      technologies: ['Project Planning & Execution', 'Agile & Scrum Methodologies', 'Stakeholder Management', 'Risk Assessment & Mitigation', 'Resource Allocation', 'Jira, Trello, Notion']
    },
    {
      name: 'Startup Building',
      icon: <Lightbulb className="w-5 h-5 text-brand-blue" />,
      color: '#3B82F6',
      description: 'Synthesizing product value propositions and translating ideas into scalable businesses.',
      technologies: ['Startup Leadership', 'Product Development & MVPs', 'Innovation Management', 'Design Thinking & Scoping', 'Growth Hacking Strategy']
    },
    {
      name: 'UI/UX Design',
      icon: <Star className="w-5 h-5 text-brand-purple" />,
      color: '#8B5CF6',
      description: 'Designing elegant high-fidelity mockups and establishing cohesive, luxury brands.',
      technologies: ['Figma Prototyping', 'Framer Interactions', 'Brand Identity Design', 'Logo Design', 'User Interface Layouts', 'UX Mapping']
    },
    {
      name: 'Cloud Technologies',
      icon: <Globe className="w-5 h-5 text-brand-accent" />,
      color: '#A78BFA',
      description: 'Deploying highly available microservices and managing cloud serverless operations.',
      technologies: ['AWS Cloud Fundamentals', 'Google Cloud Platform (GCP)', 'Git & GitHub Workflows', 'CI/CD Pipelines', 'Netlify & Vercel Scaling']
    },
    {
      name: 'Marketing & Business',
      icon: <TrendingUp className="w-5 h-5 text-brand-blue" />,
      color: '#3B82F6',
      description: 'Acquiring organic traction and crafting high-conversion customer funnel journeys.',
      technologies: ['Digital Marketing Ops', 'Social Media Strategy', 'Content Writing & Copywriting', 'SEO Technical Optimization', 'Market Research & Analytics']
    },
    {
      name: 'Leadership & Comms',
      icon: <Sparkles className="w-5 h-5 text-brand-purple" />,
      color: '#8B5CF6',
      description: 'Building cohesive engineering units and managing client relations effectively.',
      technologies: ['Public Speaking', 'Presentation Design', 'Technical Documentation', 'Client Relationship Management', 'Cross-Functional Collaboration']
    }
  ];

  // Ref to hold hoveredNode to prevent closure state bugs in listeners
  const hoveredNodeRef = useRef<string | null>(null);
  useEffect(() => {
    hoveredNodeRef.current = hoveredNode;
  }, [hoveredNode]);

  // Ref to hold categories to avoid redeclaration dependency trigger in canvas loop
  const categoriesRef = useRef<SkillCategory[]>(categories);
  const selectedCategoryRef = useRef<number>(selectedCategory);
  useEffect(() => {
    selectedCategoryRef.current = selectedCategory;
  }, [selectedCategory]);

  // 3D Tag Sphere Logic on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = canvas.clientWidth;
    let height = canvas.height = canvas.clientHeight;

    // Adjust canvas resolution for high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    interface Point3D {
      x: number;
      y: number;
      z: number;
      x2d: number;
      y2d: number;
      scale: number;
      alpha: number;
      label: string;
      color: string;
      radius: number;
    }

    const radius = Math.min(width, height) * 0.33;
    const points: Point3D[] = [];

    // Calculate golden spiral points for sphere
    const count = categoriesRef.current.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        x2d: 0,
        y2d: 0,
        scale: 0,
        alpha: 0,
        label: categoriesRef.current[i].name,
        color: categoriesRef.current[i].color,
        radius: 6
      });
    }

    let angleY = 0.005;
    let angleX = 0.003;

    // Track mouse coordinates over canvas
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      
      // Speed up rotation based on mouse offset
      angleY = mouseX * 0.00005;
      angleX = mouseY * 0.00005;
    };

    const handleMouseLeave = () => {
      angleY = 0.005;
      angleX = 0.003;
      setHoveredNode(null);
    };

    const handleCanvasClick = () => {
      if (hoveredNodeRef.current) {
        const idx = categoriesRef.current.findIndex(cat => cat.name === hoveredNodeRef.current);
        if (idx !== -1) {
          setSelectedCategory(idx);
          playClickSound();
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleCanvasClick);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate coordinates
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Calculate positions and sort points by Z (depth) for proper layering
      points.forEach((p) => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Project 3D to 2D
        const fov = 350; // Perspective parameter
        p.scale = fov / (fov + z2);
        p.alpha = (p.scale - 0.5) * 1.5; // Fade items in back
        
        p.x2d = width / 2 + p.x * p.scale;
        p.y2d = height / 2 + p.y * p.scale;
      });

      // Sort points by depth
      const sortedPoints = [...points].sort((a, b) => b.z - a.z);

      // Draw Orbit Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Render neural link constellation connections from selected category node
      const activeNode = points.find(p => p.label === categoriesRef.current[selectedCategoryRef.current].name);
      if (activeNode && activeNode.alpha > 0) {
        points.forEach((other) => {
          if (other.label !== activeNode.label && other.alpha > 0) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * activeNode.alpha * other.alpha * activeNode.scale})`;
            ctx.lineWidth = 0.5 * other.scale;
            ctx.beginPath();
            ctx.moveTo(activeNode.x2d, activeNode.y2d);
            ctx.lineTo(other.x2d, other.y2d);
            ctx.stroke();
          }
        });
      }

      // Render nodes
      sortedPoints.forEach((p) => {
        if (p.alpha <= 0) return;

        // Check if mouse is hovering over node center (22px radius hit)
        const dx = (mouseX + width / 2) - p.x2d;
        const dy = (mouseY + height / 2) - p.y2d;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isHovered = dist < 22;

        if (isHovered && hoveredNodeRef.current !== p.label) {
          setHoveredNode(p.label);
          playHoverSound();
        }

        ctx.save();
        ctx.globalAlpha = Math.min(Math.max(p.alpha, 0), 1);
        
        const isSelected = p.label === categoriesRef.current[selectedCategoryRef.current].name;

        // Selected Pulsing Ring
        if (isSelected) {
          const pulse = 1.2 + Math.sin(Date.now() * 0.005) * 0.2;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * p.scale * 2 * pulse, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Node Glow Ring
        if (isHovered || isSelected) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = p.color;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = isHovered ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * p.scale * 2.2, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Inner glowing node point
        ctx.fillStyle = (isHovered || isSelected) ? '#ffffff' : p.color;
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, p.radius * p.scale * (isHovered || isSelected ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fill();

        // Selected orbital electrons
        if (isSelected) {
          const time = Date.now() * 0.0035;
          for (let j = 0; j < 3; j++) {
            const orbitRadius = 16 + j * 5;
            const orbitAngle = time + j * (Math.PI * 2 / 3);
            const particleX = p.x2d + Math.cos(orbitAngle) * orbitRadius * p.scale;
            const particleY = p.y2d + Math.sin(orbitAngle) * orbitRadius * p.scale;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(particleX, particleY, 2 * p.scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Label
        ctx.font = `bold ${Math.round(11 * p.scale)}px var(--font-sans)`;
        ctx.fillStyle = (isHovered || isSelected) ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
        ctx.textAlign = 'center';
        ctx.fillText(p.label, p.x2d, p.y2d - 14 * p.scale);

        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleCanvasClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [playHoverSound, playClickSound]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background select-none">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-purple mb-4 tracking-widest uppercase font-mono"
          >
            <span>Skill Constellations</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">3D Skill Galaxy</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Spin the galaxy node matrix. Click directly on nodes or choose from the categories below to activate specific constellations.
          </p>
        </div>

        {/* Categories grid menu */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <Magnetic key={cat.name} range={40} actionStrength={0.35}>
                <button
                  onClick={() => {
                    setSelectedCategory(idx);
                    playClickSound();
                  }}
                  onMouseEnter={playHoverSound}
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border text-left transition-all duration-300 w-full ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-blue/15 to-brand-purple/15 border-brand-blue text-white shadow-lg'
                      : 'bg-white/5 border-white/5 text-white/60 hover:border-white/15 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-blue/20 text-white' : 'bg-white/5 text-white/50'}`}>
                    {cat.icon}
                  </div>
                  <span className="text-xs md:text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{cat.name}</span>
                </button>
              </Magnetic>
            );
          })}
        </div>

        {/* 3D Galaxy Canvas & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8">
          {/* Canvas Col */}
          <div className="lg:col-span-6 flex justify-center items-center h-[350px] md:h-[450px] relative">
            <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
            <div className="absolute bottom-2 text-[10px] font-mono text-white/30 flex items-center space-x-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
              <span>SPHERICAL 3D ORBIT MATRICES DETECTED</span>
            </div>
          </div>

          {/* Details Col */}
          <div className="lg:col-span-6 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                    {categories[selectedCategory].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-purple tracking-widest uppercase">CATALOGUE PROTOCOL</span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{categories[selectedCategory].name}</h3>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed font-sans">
                  {categories[selectedCategory].description}
                </p>

                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-white/40 mb-3 uppercase">Engineered Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories[selectedCategory].technologies.map((tech, idx) => (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        key={tech}
                        className="text-xs font-mono bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-full px-3 py-1.5 text-white/80 hover:text-white transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
