'use client';

import { useState, useRef } from 'react';
import Cursor from './Cursor';

export default function DesignOpportunities() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorContainerRef = useRef<HTMLDivElement>(null);
  
  // Original position for the "You" cursor
  const originalPosition = { left: 24, top: 48 };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cursorContainerRef.current) return;
    
    const cursorContainerRect = cursorContainerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the cursor container
    const x = e.clientX - cursorContainerRect.left;
    const y = e.clientY - cursorContainerRect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    // Capture initial mouse position on hover
    if (cursorContainerRef.current) {
      const cursorContainerRect = cursorContainerRef.current.getBoundingClientRect();
      const x = e.clientX - cursorContainerRect.left;
      const y = e.clientY - cursorContainerRect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative border border-[var(--divider)]" 
      style={{ 
        height: '172px',
        cursor: isHovering ? 'none' : 'pointer'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Corner squares - positioned on outer wrapper so they're not clipped */}
      <div 
        className="absolute border border-[var(--divider)] bg-[var(--bg-black)] z-10"
        style={{ 
          width: '10px', 
          height: '10px',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute border border-[var(--divider)] bg-[var(--bg-black)] z-10"
        style={{ 
          width: '10px', 
          height: '10px',
          top: 0,
          right: 0,
          transform: 'translate(50%, -50%)'
        }}
      />
      <div 
        className="absolute border border-[var(--divider)] bg-[var(--bg-black)] z-10"
        style={{ 
          width: '10px', 
          height: '10px',
          bottom: 0,
          left: 0,
          transform: 'translate(-50%, 50%)'
        }}
      />
      <div 
        className="absolute border border-[var(--divider)] bg-[var(--bg-black)] z-10"
        style={{ 
          width: '10px', 
          height: '10px',
          bottom: 0,
          right: 0,
          transform: 'translate(50%, 50%)'
        }}
      />
      
      {/* Inner content container with overflow-hidden to clip cursors */}
      <div className="relative bg-[var(--bg-black)] hover:bg-[#131313] transition-colors overflow-hidden h-full">
        <div className="container-main relative h-full">
        {/* Cursor container - Desktop only, hidden on mobile */}
        <div 
          ref={cursorContainerRef}
          className="hidden md:block absolute top-0 bottom-0"
          style={{ 
            left: '85%',
            width: '40%'
          }}
        >
          {/* Cursors container - arranged in a row, absolute positioned */}
          <div className="relative w-full h-full">
            {/* Cursor 1 - Pink/Magenta: follows mouse when hovering */}
            <div 
              className={`absolute ${isHovering ? '' : 'cursor-pink-animate'}`}
              style={{ 
                left: isHovering && mousePosition ? `${mousePosition.x}px` : `${originalPosition.left}px`,
                top: isHovering && mousePosition ? `${mousePosition.y}px` : `${originalPosition.top}px`,
                transition: isHovering ? 'none' : 'left 0.6s ease-out, top 0.6s ease-out',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999
              }}
            >
              <Cursor 
                color="#EE47BC" 
                name="You"
              />
            </div>
            {/* Cursor 2 - Green: top right to bottom right */}
            <div className="absolute cursor-green-animate" style={{ left: '96px', top: '100px' }}>
              <Cursor 
                color="#079669" 
                name="Dylan"
              />
            </div>
            {/* Cursor 3 - Red: top left to top right */}
            <div className="absolute cursor-red-animate" style={{ left: '100px', top: '24px' }}>
              <Cursor 
                color="#DC2625" 
                name="Max"
              />
            </div>
          </div>
        </div>

        <div className="relative grid h-full design-opportunities-grid">
          {/* Content spans columns 1-2 on desktop, full width on mobile */}
          <div className="col-span-2 md:col-span-2 px-4 flex flex-col justify-center h-full gap-4">
            {/* Text content (h3 + p) */}
            <div className="flex flex-col gap-2">
              <h3 className="text-h2 text-[var(--text-primary)]" style={{ fontSize: "18px" }}>
                Design Opportunities at Profound
              </h3>
              <p className="text-body-md text-[var(--text-secondary)]">
                Explore our design team, philosophy, and opportunities.
              </p>
            </div>
            {/* Button */}
            <div className="flex flex-col">
              <button className="btn-primary w-fit cursor-pointer">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

