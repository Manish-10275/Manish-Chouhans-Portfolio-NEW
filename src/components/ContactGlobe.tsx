'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ContactGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, previousMouseX: 0, previousMouseY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 400;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Earth Wireframe Sphere
    const sphereGeometry = new THREE.SphereGeometry(4.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const globeWireframe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeWireframe);

    // Dotted Shell
    const dotDensity = 800;
    const dotGeometry = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotDensity * 3);
    const dotColors = new Float32Array(dotDensity * 3);

    const colorBlue = new THREE.Color(0x3b82f6);
    const colorPurple = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < dotDensity; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const r = 4.52; // Slightly larger than wireframe
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      const mix = Math.random();
      const tempColor = colorBlue.clone().lerp(colorPurple, mix);
      dotColors[i * 3] = tempColor.r;
      dotColors[i * 3 + 1] = tempColor.g;
      dotColors[i * 3 + 2] = tempColor.b;
    }

    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    dotGeometry.setAttribute('color', new THREE.BufferAttribute(dotColors, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const dotTexture = new THREE.CanvasTexture(canvas);

    const dotMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dottedGlobe = new THREE.Points(dotGeometry, dotMaterial);
    globeGroup.add(dottedGlobe);

    // Glowing Markers (Coordinates)
    // Convert Lat/Long to Vector3
    const latLongToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.sin(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Locations
    const locations = [
      { name: 'IIT Madras (India)', lat: 13.0067, lon: 80.2406, color: 0x8b5cf6 },
      { name: 'Silicon Valley (USA)', lat: 37.7749, lon: -122.4194, color: 0x3b82f6 },
      { name: 'London (UK)', lat: 51.5074, lon: -0.1278, color: 0xa78bfa }
    ];

    const markers: THREE.Mesh[] = [];

    locations.forEach((loc) => {
      const markerPos = latLongToVector3(loc.lat, loc.lon, 4.54);
      const markerGeom = new THREE.SphereGeometry(0.12, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: loc.color,
        transparent: true,
        opacity: 0.9,
      });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.copy(markerPos);
      globeGroup.add(marker);
      markers.push(marker);

      // Add a small pulsating outer ring for each marker
      const ringGeom = new THREE.RingGeometry(0.15, 0.22, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: loc.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.copy(markerPos);
      ring.lookAt(new THREE.Vector3(0, 0, 0)); // look at center of earth
      globeGroup.add(ring);
    });

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Drag / Rotate Controls
    const onMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.previousMouseX = e.clientX;
      mouseRef.current.previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (mouseRef.current.isDragging) {
        const deltaX = e.clientX - mouseRef.current.previousMouseX;
        const deltaY = e.clientY - mouseRef.current.previousMouseY;
        
        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;

        mouseRef.current.previousMouseX = e.clientX;
        mouseRef.current.previousMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Auto-rotation if not dragging
      if (!mouseRef.current.isDragging) {
        globeGroup.rotation.y += 0.002;
      }

      // Pulsate markers
      markers.forEach((marker, idx) => {
        const scale = 1 + Math.sin(time * 3 + idx) * 0.2;
        marker.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      
      if (domEl && domEl.parentNode) {
        domEl.parentNode.removeChild(domEl);
      }
      
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      dotTexture.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <div ref={containerRef} className="w-full h-full absolute inset-0" />
      {/* Centered Glowing backdrop behind globe */}
      <div className="w-[200px] h-[200px] rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none absolute" />
    </div>
  );
};

export default ContactGlobe;
