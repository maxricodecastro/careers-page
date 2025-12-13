import Image from 'next/image';

export default function FeaturedIn() {
  const logoSize = 36; // Single value to control logo size - aspect ratio maintained automatically
  
  const logos = [
    // Row 1
    { src: '/NewsLogo/Fortune.svg', alt: 'Fortune' },
    { src: '/NewsLogo/WSJ.svg', alt: 'Wall Street Journal' },
    { src: '/NewsLogo/Adweek_New.svg', alt: 'Adweek' },
    { src: '/NewsLogo/NewYorkTimes_New.svg', alt: 'The New York Times' },
    // Row 2
    { src: '/NewsLogo/TheInformation_New.svg', alt: 'The Information' },
    { src: '/NewsLogo/TechCrunch_New.svg', alt: 'TechCrunch' },
    { src: '/NewsLogo/FinancialTimes.svg', alt: 'Financial Times' },
    { src: '/NewsLogo/TBPN_New.svg', alt: 'TBPN' },
  ];

  return (
    <div className="relative mt-28">
      {/* Content container */}
      <div className="relative z-10 py-16">
        {/* Title - centered */}
        <div className="mb-12 text-center">
          <h1 className="text-h2 text-[var(--text-primary)]">
            Featured in
          </h1>
        </div>

        {/* Logo Grid Container - 2 rows x 4 columns with solid border */}
        <div className="relative border border-[var(--divider)]">
          {/* Horizontal dotted divider between rows */}
          <div 
            className="absolute left-0 right-0 top-1/2"
            style={{
              height: '1px',
              background: `repeating-linear-gradient(
                90deg,
                var(--divider) 0px,
                var(--divider) 6px,
                transparent 6px,
                transparent 12px
              )`
            }}
          />
          
          {/* Nested grid for logos - 2 rows x 4 columns */}
          <div 
            className="grid relative"
            style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
          >
            {/* Vertical dotted dividers between columns */}
            <div className="absolute left-[25%] top-0 bottom-0 dotted-line" />
            <div className="absolute left-[50%] top-0 bottom-0 dotted-line" />
            <div className="absolute left-[75%] top-0 bottom-0 dotted-line" />
            
            {/* Logo items - All 8 logos in 2 rows x 4 columns */}
            {logos.map((logo, index) => {
              const shouldApplyWhiteFilter = 
                logo.src.includes('Fortune') || 
                logo.src.includes('WSJ');
              
              return (
                <div
                  key={index}
                  className="flex items-center justify-center relative"
                  style={{ height: '140px' }}
                >
                  <div className="flex items-center justify-center w-full h-full px-4">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logoSize}
                      height={logoSize}
                      style={{ height: `${logoSize}px`, width: 'auto' }}
                      className={`object-contain ${
                        shouldApplyWhiteFilter ? 'filter brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

