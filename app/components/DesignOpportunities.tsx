import Cursor from './Cursor';

export default function DesignOpportunities() {
  return (
    <div className="relative bg-[var(--bg-black)] hover:bg-[#131313] transition-colors border border-[var(--divider)] cursor-pointer overflow-hidden" style={{ height: '172px' }}>
      <div className="container-main relative h-full">
        {/* Cursor container - absolute positioned, fills height, spans columns 3-4 width */}
        {/* Positioned relative to DesignOpportunities component, clipped by its width */}
        <div 
          className="absolute top-0 bottom-0"
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

        <div className="relative grid h-full" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
          {/* Content spans columns 1-2 (same as mission section) */}
          <div className="col-span-2 px-4 flex flex-col gap-4 justify-center h-full">
            <h3 className="text-h2 text-[var(--text-primary)]" style={{ fontSize: "18px" }}>
              Design Opportunities at Profound
            </h3>
            <p className="text-body-md text-[var(--text-secondary)]">
              Explore our design team, philosophy, and opportunities.
            </p>
            <button className="btn-primary w-fit cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

