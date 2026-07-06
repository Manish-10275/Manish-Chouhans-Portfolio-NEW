'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Palette, Layers, Sliders, Play, RotateCw } from 'lucide-react';
import Magnetic from './Magnetic';

interface CardModelProps {
  cardStyle: 'glass' | 'cyber' | 'minimal';
  borderRadius: number;
  neonIntensity: number;
  shapesCount: number;
  activeColor: string;
}

// 3D Scene representing the customizable UI card
const InteractiveCard3D: React.FC<CardModelProps> = ({
  cardStyle,
  borderRadius,
  neonIntensity,
  shapesCount,
  activeColor,
}) => {
  const cardRef = useRef<THREE.Mesh>(null);
  const shapesRef = useRef<THREE.Group>(null);

  // Animate card tilt/orbit slightly and rotate extra floating shapes
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (cardRef.current) {
      cardRef.current.rotation.y = Math.sin(time * 0.4) * 0.15;
      cardRef.current.rotation.x = Math.cos(time * 0.3) * 0.1;
    }
    if (shapesRef.current) {
      shapesRef.current.rotation.y = time * 0.25;
      shapesRef.current.rotation.x = time * 0.12;
    }
  });

  // Determine material parameters based on cardStyle state
  const getMaterialProps = () => {
    switch (cardStyle) {
      case 'glass':
        return (
          <meshPhysicalMaterial
            roughness={0.08}
            transmission={0.85}
            thickness={0.6}
            color={activeColor}
            transparent
            opacity={0.65}
            clearcoat={1.0}
          />
        );
      case 'cyber':
        return (
          <meshStandardMaterial
            color="#0b0d19"
            roughness={0.15}
            metalness={0.9}
            emissive={activeColor}
            emissiveIntensity={0.25}
          />
        );
      case 'minimal':
      default:
        return (
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.4}
            metalness={0.05}
          />
        );
    }
  };

  return (
    <group>
      {/* Lights inside the scene reflecting off components */}
      <pointLight position={[2, 3, 4]} intensity={neonIntensity * 2} color={activeColor} />
      <pointLight position={[-2, -3, 3]} intensity={0.5} color="#fff" />

      {/* Primary Draggable/Customizable UI Card mesh */}
      <mesh ref={cardRef} castShadow receiveShadow>
        <boxGeometry args={[4.2, 2.6, 0.15]} />
        {getMaterialProps()}

        {/* Decorative Neon Logo/Symbol badge on the card surface */}
        <mesh position={[-1.5, 0.7, 0.09]}>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial 
            color={cardStyle === 'minimal' ? '#000' : activeColor} 
            emissive={cardStyle === 'minimal' ? '#000' : activeColor} 
            emissiveIntensity={1.5} 
          />
        </mesh>

        {/* Mock card chip element */}
        <mesh position={[-1.5, 0, 0.09]}>
          <boxGeometry args={[0.5, 0.4, 0.02]} />
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.1} />
        </mesh>

        {/* Mock signature stripes details */}
        <mesh position={[0.5, -0.6, 0.09]}>
          <boxGeometry args={[2.2, 0.08, 0.02]} />
          <meshStandardMaterial color={cardStyle === 'minimal' ? '#ccc' : 'rgba(255,255,255,0.1)'} />
        </mesh>
        <mesh position={[0.5, -0.8, 0.09]}>
          <boxGeometry args={[2.2, 0.08, 0.02]} />
          <meshStandardMaterial color={cardStyle === 'minimal' ? '#ccc' : 'rgba(255,255,255,0.1)'} />
        </mesh>
      </mesh>

      {/* Floating 3D Geometric layout shapes around the card */}
      <group ref={shapesRef}>
        {Array.from({ length: shapesCount }).map((_, i) => {
          const angle = (i / shapesCount) * Math.PI * 2;
          const radius = 3.2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = Math.sin(i) * 1.5;

          return (
            <mesh key={i} position={[x, y, z]}>
              {i % 3 === 0 ? (
                <sphereGeometry args={[0.18, 16, 16]} />
              ) : i % 3 === 1 ? (
                <boxGeometry args={[0.25, 0.25, 0.25]} />
              ) : (
                <torusGeometry args={[0.18, 0.06, 8, 24]} />
              )}
              <meshStandardMaterial 
                color={activeColor} 
                roughness={0.2} 
                metalness={0.7}
                emissive={activeColor}
                emissiveIntensity={0.3}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

export const DesignPlayground3D: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [mounted, setMounted] = useState(false);
  const [cardStyle, setCardStyle] = useState<'glass' | 'cyber' | 'minimal'>('glass');
  const [borderRadius, setBorderRadius] = useState<number>(16); // Visual range only
  const [neonIntensity, setNeonIntensity] = useState<number>(1.2);
  const [shapesCount, setShapesCount] = useState<number>(4);
  const [activeColor, setActiveColor] = useState<string>('#8B5CF6'); // Default Purple

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorPalettes = [
    { name: 'Luxury Purple', hex: '#8B5CF6' },
    { name: 'Electric Blue', hex: '#3B82F6' },
    { name: 'Retro Orange', hex: '#F97316' },
    { name: 'Cyber Emerald', hex: '#10B981' }
  ];

  return (
    <section id="design-playground" className="py-24 relative overflow-hidden bg-[#07070a] border-t border-white/5 select-none">
      <div className="absolute top-0 right-10 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Interactive Lab</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
            3D UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Design Playground</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Customize typography tokens, material physics, and layout geometries to inspect visual changes in real-time.
          </p>
        </div>

        {/* Playground Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8">
          
          {/* 3D Canvas Preview Column */}
          <div className="lg:col-span-7 h-[350px] md:h-[450px] bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden flex justify-center items-center">
            {mounted ? (
              <Canvas className="w-full h-full cursor-grab active:cursor-grabbing">
                <ambientLight intensity={1.5} />
                <directionalLight position={[4, 5, 3]} intensity={1} />
                <InteractiveCard3D
                  cardStyle={cardStyle}
                  borderRadius={borderRadius}
                  neonIntensity={neonIntensity}
                  shapesCount={shapesCount}
                  activeColor={activeColor}
                />
                <OrbitControls enableZoom={false} />
              </Canvas>
            ) : (
              <div className="font-mono text-xs text-white/30 animate-pulse">
                INITIALIZING 3D PLAYGROUND...
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 text-[9px] font-mono text-white/30 flex items-center space-x-1.5 pointer-events-none">
              <RotateCw className="w-3.5 h-3.5 text-brand-blue animate-spin-slow" />
              <span>DRAG TO ORBIT OR INSPECT SIDES</span>
            </div>
          </div>

          {/* Configurator Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Style Cards Toggles */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono text-white/40 uppercase block font-bold tracking-wider">Design Style Preset</span>
              <div className="grid grid-cols-3 gap-2.5">
                {(['glass', 'cyber', 'minimal'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => {
                      setCardStyle(style);
                      playClickSound();
                    }}
                    className={`py-3 rounded-xl border text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      cardStyle === style 
                        ? 'bg-white text-black border-white shadow-lg' 
                        : 'bg-white/5 border-white/5 text-white/60 hover:border-white/10 hover:text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors Palettes Selection */}
            <div className="space-y-2.5 border-t border-white/5 pt-5">
              <span className="text-[10px] font-mono text-white/40 uppercase block font-bold tracking-wider">Neon Branding Palette</span>
              <div className="flex gap-3">
                {colorPalettes.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => {
                      setActiveColor(c.hex);
                      playClickSound();
                    }}
                    className={`w-8 h-8 rounded-full border transition-all ${
                      activeColor === c.hex ? 'scale-115 border-white shadow-lg shadow-white/10' : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Sliders Configuration */}
            <div className="space-y-4 border-t border-white/5 pt-5 text-left">
              <span className="text-[10px] font-mono text-white/40 uppercase block font-bold tracking-wider mb-2">Typography & Element Geometry</span>
              
              {/* Shapes Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60">Layout Geometry Count</span>
                  <span className="text-brand-blue">{shapesCount} nodes</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="1"
                  value={shapesCount}
                  onChange={(e) => setShapesCount(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
              </div>

              {/* Neon Glow Light Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60">Neon Light Emission</span>
                  <span className="text-brand-purple">{neonIntensity.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.1"
                  value={neonIntensity}
                  onChange={(e) => setNeonIntensity(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
              </div>

              {/* Border Roundness */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60">CSS Border Radius</span>
                  <span className="text-brand-accent">{borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="32"
                  step="4"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
            </div>

            {/* Design Rules Card */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-[11px] font-mono text-white/50 leading-relaxed text-left flex items-start space-x-2.5">
              <Sliders className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold block mb-0.5">Real-time design token audit:</span>
                Active preset parameters compile CSS properties dynamically. Renders 3D light reflections based on metalness/transmission configs.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignPlayground3D;
