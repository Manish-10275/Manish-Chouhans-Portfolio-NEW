'use client';

import React, { useEffect, useRef } from 'react';

export const InteractiveMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    interface GridPoint {
      x: number;
      y: number;
      ax: number;
      ay: number;
      vx: number;
      vy: number;
    }

    const points: GridPoint[] = [];
    const spacing = 70; // Grid cell size
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = c * spacing;
        const py = r * spacing;
        points.push({
          x: px,
          y: py,
          ax: px,
          ay: py,
          vx: 0,
          vy: 0,
        });
      }
    }

    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-populate points grid
      points.length = 0;
      const newCols = Math.ceil(width / spacing) + 1;
      const newRows = Math.ceil(height / spacing) + 1;
      for (let r = 0; r < newRows; r++) {
        for (let c = 0; c < newCols; c++) {
          const px = c * spacing;
          const py = r * spacing;
          points.push({
            x: px,
            y: py,
            ax: px,
            ay: py,
            vx: 0,
            vy: 0,
          });
        }
      }
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      points.forEach((p) => {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limit = 160;

          if (dist < limit) {
            const force = (limit - dist) / limit;
            const angle = Math.atan2(dy, dx);
            // Push points away from mouse
            p.vx -= Math.cos(angle) * force * 3.5;
            p.vy -= Math.sin(angle) * force * 3.5;
          }
        }

        // Return to anchor position
        const springX = (p.ax - p.x) * 0.08;
        const springY = (p.ay - p.y) * 0.08;
        p.vx += springX;
        p.vy += springY;

        // Apply friction/damping
        p.vx *= 0.86;
        p.vy *= 0.86;

        p.x += p.vx;
        p.y += p.vy;
      });

      // Draw Grid Lines
      ctx.lineWidth = 0.5;
      const activeCols = Math.ceil(width / spacing) + 1;

      points.forEach((p, idx) => {
        const col = idx % activeCols;
        const row = Math.floor(idx / activeCols);

        // Link right neighbor
        if (col < activeCols - 1 && idx + 1 < points.length) {
          const rightP = points[idx + 1];
          const dx = rightP.x - p.x;
          const dy = rightP.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Fade links if stretched beyond original spacing
          const alpha = Math.max(0, 0.07 - (dist - spacing) * 0.002);
          if (alpha > 0) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(rightP.x, rightP.y);
            ctx.stroke();
          }
        }

        // Link bottom neighbor
        if (idx + activeCols < points.length) {
          const bottomP = points[idx + activeCols];
          const dx = bottomP.x - p.x;
          const dy = bottomP.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const alpha = Math.max(0, 0.07 - (dist - spacing) * 0.002);
          if (alpha > 0) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottomP.x, bottomP.y);
            ctx.stroke();
          }
        }
      });

      // Draw active node points
      points.forEach((p) => {
        // Calculate velocity magnitude to make fast moving nodes glow brighter
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const radius = 1 + speed * 0.15;
        const opacity = Math.min(0.25, 0.08 + speed * 0.05);

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-55" />;
};

export default InteractiveMesh;
