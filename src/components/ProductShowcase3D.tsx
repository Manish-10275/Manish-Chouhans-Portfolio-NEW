'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, Maximize2, Zap, ShieldCheck, Compass, Info, RotateCcw } from 'lucide-react';
import Magnetic from './Magnetic';

interface DeviceProps {
  explodeLevel: number;
  themeColor: string;
  selectedComponent: string | null;
  setSelectedComponent: (val: string | null) => void;
}

// 3D Scene Model child component
const DeviceModel: React.FC<DeviceProps> = ({ 
  explodeLevel, 
  themeColor, 
  selectedComponent, 
  setSelectedComponent 
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the device when not dragging
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1 + Math.sin(time * 0.05) * 0.1;
  });

  const gap = explodeLevel * 1.5; // Multiplier for vertical layer separation

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={0.9}>
      {/* Layer 1: Protective Front Glass Panel */}
      <mesh 
        position={[0, 0, 0.5 + gap]} 
        onClick={(e) => {
          e.stopPropagation();
          setSelectedComponent('Front Glass Screen');
        }}
      >
        <boxGeometry args={[3, 5.5, 0.04]} />
        <meshPhysicalMaterial 
          roughness={0.05}
          transmission={0.95}
          thickness={0.5}
          color={themeColor}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Layer 2: AMOLED Display Matrix */}
      <mesh 
        position={[0, 0, 0.3 + gap * 0.5]}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedComponent('AMOLED Panel');
        }}
      >
        <boxGeometry args={[2.9, 5.4, 0.02]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          emissive={themeColor}
          emissiveIntensity={selectedComponent === 'AMOLED Panel' ? 1.0 : 0.25}
          roughness={0.1}
        />
      </mesh>

      {/* Layer 3: System Logic Motherboard */}
      <group 
        position={[0, 1.3, 0 - gap * 0.2]}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedComponent('Logic Motherboard');
        }}
      >
        {/* Main Board Base */}
        <mesh>
          <boxGeometry args={[2.8, 2.2, 0.08]} />
          <meshStandardMaterial color="#082218" roughness={0.8} />
        </mesh>
        {/* CPU/Neural Chip core */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.9, 0.9, 0.08]} />
          <meshStandardMaterial 
            color="#181818" 
            emissive={themeColor} 
            emissiveIntensity={selectedComponent === 'Logic Motherboard' ? 1.8 : 0.4} 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Mini chip capacitor */}
        <mesh position={[-0.8, 0.4, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.15, 8]} />
          <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Layer 4: Lithium Battery Pack */}
      <mesh 
        position={[0, -1.2, 0 - gap * 0.5]}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedComponent('Graphite Battery');
        }}
      >
        <boxGeometry args={[2.7, 2.2, 0.16]} />
        <meshStandardMaterial 
          color="#121212" 
          metalness={0.4} 
          roughness={0.6}
          emissive={selectedComponent === 'Graphite Battery' ? themeColor : '#000'}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Layer 5: Titanium Rear Frame */}
      <mesh 
        position={[0, 0, -0.5 - gap]}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedComponent('Titanium Frame');
        }}
      >
        <boxGeometry args={[3.1, 5.6, 0.18]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.95} 
          roughness={0.15}
          emissive={selectedComponent === 'Titanium Frame' ? themeColor : '#000'}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

export const ProductShowcase3D: React.FC = () => {
  const { playClickSound, playHoverSound } = useApp();
  const [mounted, setMounted] = useState(false);
  const [explodeLevel, setExplodeLevel] = useState<number>(0);
  const [activeColor, setActiveColor] = useState<string>('#3B82F6'); // Default Blue
  const [selectedComponent, setSelectedComponent] = useState<string | null>('Logic Motherboard');

  useEffect(() => {
    setMounted(true);
  }, []);

  const componentsSpecs: Record<string, { title: string; desc: string; icon: React.ReactNode; specs: string[] }> = {
    'Front Glass Screen': {
      title: 'Glass Shield v2',
      desc: 'Oleophobic anti-reflective structural layer designed to survive drops and eliminate blue light fatigue.',
      icon: <Maximize2 className="w-5 h-5 text-brand-blue" />,
      specs: ['Corning Victus 3', '99.8% Transparency', '9H scratch certification']
    },
    'AMOLED Panel': {
      title: 'Quantum AMOLED 120Hz',
      desc: 'Ultra-thin, variable refresh display supporting true black contrasts and high responsive touch targets.',
      icon: <Compass className="w-5 h-5 text-brand-purple" />,
      specs: ['120Hz Dynamic RR', 'WCAG AAA contrast compliant', '2400 nits Peak brightness']
    },
    'Logic Motherboard': {
      title: 'Octa-Core Neural SoC',
      desc: 'Advanced motherboard routing AI instructions and server computations with negligible circuit latency.',
      icon: <Cpu className="w-5 h-5 text-brand-accent" />,
      specs: ['4nm Silicon Architecture', 'Integrated TPU block', '16GB LPDDR5X channels']
    },
    'Graphite Battery': {
      title: 'Solid-State Battery Pack',
      desc: 'High-density graphite cells delivering continuous power cycles and technical safety management.',
      icon: <Zap className="w-5 h-5 text-brand-blue" />,
      specs: ['5200mAh Solid State cells', '100W Fast-Charging sync', 'Battery Health optimizer']
    },
    'Titanium Frame': {
      title: 'Grade 5 Titanium Chassis',
      desc: 'Luxury structural frame engineered to distribute impact energy and maintain internal thermal cooling.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-purple" />,
      specs: ['Titanium-Alloy structure', 'Integrated Vapor chamber', 'IP68 waterproof seal']
    }
  };

  const colors = [
    { name: 'Neon Blue', value: '#3B82F6' },
    { name: 'Vibrant Violet', value: '#8B5CF6' },
    { name: 'Cyber Emerald', value: '#10B981' }
  ];

  return (
    <section id="device-lab" className="py-24 relative overflow-hidden bg-background border-t border-white/5 select-none">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-brand-blue mb-4 tracking-widest uppercase font-mono"
          >
            <span>Product Lab</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4 select-text">
            Exploded <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">3D Product Architectures</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-sans">
            Rotate the device with your cursor. Explode the hardware layers and audit components in real-time.
          </p>
        </div>

        {/* 3D Canvas & Spec Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 relative">
          
          {/* Controls Bar top */}
          <div className="lg:col-span-12 flex flex-wrap justify-between items-center gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-mono text-white/40 uppercase">LED NEON THEME</span>
              <div className="flex space-x-2">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => {
                      setActiveColor(c.value);
                      playClickSound();
                    }}
                    className={`w-5 h-5 rounded-full border transition-all ${
                      activeColor === c.value ? 'scale-115 border-white' : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-mono text-white/40 uppercase">EXPLODED VIEW DIAL</span>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl p-1">
                {[0, 0.5, 1].map((val, idx) => (
                  <button
                    key={val}
                    onClick={() => {
                      setExplodeLevel(val);
                      playClickSound();
                    }}
                    className={`px-3 py-1 text-[9px] font-mono rounded-lg transition-all ${
                      explodeLevel === val ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {idx === 0 ? 'DEFAULT' : idx === 1 ? 'SEMIMED' : 'MAX EXP'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Column */}
          <div className="lg:col-span-7 flex justify-center items-center h-[350px] md:h-[480px] relative bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
            {mounted ? (
              <Canvas className="w-full h-full cursor-grab active:cursor-grabbing">
                <ambientLight intensity={1.8} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
                <pointLight position={[-5, -5, -5]} intensity={0.5} />
                <DeviceModel 
                  explodeLevel={explodeLevel} 
                  themeColor={activeColor} 
                  selectedComponent={selectedComponent}
                  setSelectedComponent={setSelectedComponent}
                />
                <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI * 3/4} />
              </Canvas>
            ) : (
              <div className="w-full h-full bg-[#0a0a0d] flex items-center justify-center text-white/30 font-mono text-xs">
                BOOTING 3D SYSTEM ENGINE...
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 text-[9px] font-mono text-white/30 flex items-center space-x-1.5 pointer-events-none">
              <RotateCcw className="w-3 h-3 text-brand-blue animate-spin-slow" />
              <span>DRAG TO ROTATE IN 3D ORBIT SPACE</span>
            </div>
          </div>

          {/* Spec details Card */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {selectedComponent ? (
                <motion.div
                  key={selectedComponent}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 bg-white/[0.01] border border-white/5 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                      {componentsSpecs[selectedComponent].icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-brand-purple tracking-widest uppercase">COMPONENT AUDIT</span>
                      <h3 className="text-xl font-bold tracking-tight text-white">{componentsSpecs[selectedComponent].title}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-sans">
                    {componentsSpecs[selectedComponent].desc}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <h4 className="text-[10px] font-bold font-mono tracking-wider text-white/40 uppercase flex items-center space-x-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>Hardware Parameters</span>
                    </h4>
                    <div className="space-y-2">
                      {componentsSpecs[selectedComponent].specs.map((spec, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs font-mono text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center text-white/40 font-mono text-xs py-16">
                  Click on any device hardware component inside the 3D viewer to audit specifications.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;
