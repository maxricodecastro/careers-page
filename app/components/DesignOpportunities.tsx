import Cursor from './Cursor';

export default function DesignOpportunities() {
  return (
    <div className="relative border border-[var(--divider)] cursor-pointer" style={{ height: '172px' }}>
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
          className="hidden md:block absolute top-0 bottom-0"
          style={{ 
            left: '85%',
            width: '40%'
          }}
        >
          {/* Cursors container - arranged in a row, absolute positioned */}
          <div className="relative w-full h-full">
            {/* Cursor 1 - Pink/Magenta: bottom left to top left */}
            <div className="absolute cursor-pink-animate" style={{ left: '24px', top: '48px' }}>
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

