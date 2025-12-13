import Image from 'next/image';

export default function FeaturedIn() {
  // Logo size controls - adjust these values to control individual logo sizes
  // Square type logos (more balanced): WSJ, Adweek, TechCrunch, Financial Times, TBPN
  // Long type logos (wide): Fortune, New York Times, The Information
  const logoSizes: Record<string, number> = {
    // Long type logos - exceptions: Fortune and The Information are larger
    fortune: 30,
    newYorkTimes: 20,
    theInformation: 24,
    // Square type logos - larger height for balanced appearance
    wsj: 32,
    adweek: 32,
    techCrunch: 32,
    financialTimes: 32,
    tbpn: 32,
  };
  
  const logos = [
    // Row 1
    { src: '/NewsLogo/Fortune.svg', alt: 'Fortune', sizeKey: 'fortune' },
    { src: '/NewsLogo/WSJ.svg', alt: 'Wall Street Journal', sizeKey: 'wsj' },
    { src: '/NewsLogo/Adweek_New.svg', alt: 'Adweek', sizeKey: 'adweek' },
    { src: '/NewsLogo/NewYorkTimes_New.svg', alt: 'The New York Times', sizeKey: 'newYorkTimes' },
    // Row 2
    { src: '/NewsLogo/TheInformation_New.svg', alt: 'The Information', sizeKey: 'theInformation' },
    { src: '/NewsLogo/TechCrunch_New.svg', alt: 'TechCrunch', sizeKey: 'techCrunch' },
    { src: '/NewsLogo/FinancialTimes.svg', alt: 'Financial Times', sizeKey: 'financialTimes' },
    { src: '/NewsLogo/TBPN_New.svg', alt: 'TBPN', sizeKey: 'tbpn' },
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
          
          {/* Nested grid for logos - Mobile: 2 rows x 2 columns, Desktop: 2 rows x 4 columns */}
          <div 
            className="grid relative featured-in-grid"
          >
            {/* Vertical dotted dividers between columns - Mobile: 1 divider at 50%, Desktop: 3 dividers */}
            <div className="absolute left-[50%] top-0 bottom-0 dotted-line" />
            <div className="hidden md:block absolute left-[25%] top-0 bottom-0 dotted-line" />
            <div className="hidden md:block absolute left-[75%] top-0 bottom-0 dotted-line" />
            
            {/* Logo items - All 8 logos in 2 rows x 4 columns */}
            {logos.map((logo, index) => {
              const shouldApplyWhiteFilter = 
                logo.src.includes('Fortune') || 
                logo.src.includes('WSJ');
              
              const logoSize = logoSizes[logo.sizeKey] || 24;
              // Long type logos: Fortune, New York Times, The Information
              const isLongLogo = ['fortune', 'newYorkTimes', 'theInformation'].includes(logo.sizeKey);
              
              return (
                <div
                  key={index}
                  className="flex items-center justify-center relative group cursor-pointer"
                  style={{ height: '140px' }}
                >
                  <div 
                    className={`flex items-center justify-center w-full h-full transition-all duration-500 group-hover:blur-md ${
                      isLongLogo ? 'px-2' : 'px-4'
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logoSize * 5} // Larger width for Next.js Image optimization
                      height={logoSize * 5}
                      style={{ 
                        height: `${logoSize}px`, 
                        width: 'auto', 
                        maxWidth: isLongLogo ? 'calc(100% - 8px)' : '100%'
                      }}
                      className={`object-contain ${
                        shouldApplyWhiteFilter ? 'filter brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                  {/* Visit site text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span 
                      className="text-[14px] opacity-0 translate-y-[4px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                      style={{ color: '#EEDD45' }}
                    >
                      Visit site
                    </span>
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

