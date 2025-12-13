import InvestorProfile from './InvestorProfile';
import Values from './Values';

export default function InvestorValues() {
  // Logo size controls - adjust these values to control logo sizes
  // Base size is smaller (h-5 = 20px), larger logos use h-7 (28px) or h-8 (32px)
  const logoSizes = {
    sequoia: 'h-6',        // Base size
    kleiner: 'h-20',        // Larger
    nvidia: 'h-6',         // Base size
    khosla: 'h-5',         // Base size
    southPark: 'h-16',      // Larger
    saga: 'h-8',           // Base size
    svAngel: 'h-12',        // Larger
  };

  return (
    <div className="relative">
      {/* Title - left aligned */}
      <div className="container-main relative mb-6">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
          <div className="col-span-4 px-1">
            <h3 className="text-body-md text-[var(--text-primary)]">
              Our investors
            </h3>
          </div>
        </div>
      </div>

      {/* Three full-width boxes in a stack */}
      <div className="flex flex-col">
        {/* First row: Sequoia centered */}
        <div className="relative bg-[var(--bg-black)] border border-[var(--divider)] cursor-pointer group" style={{ height: '156px' }}>
          <div className="container-main relative h-full">
            <div className="relative grid h-full" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
              <div className="col-span-4 px-4 flex items-center justify-center h-full transition-all duration-500 group-hover:blur-md">
                <img 
                  src="/Investors/Sequoia_Capital_logo.svg" 
                  alt="Sequoia Capital" 
                  className={`${logoSizes.sequoia} w-auto filter brightness-0 invert`}
                />
              </div>
            </div>
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

        {/* Second row: Kleiner, NVIDIA, Khosla - separate boxes */}
        <div className="relative border-l border-r border-b border-[var(--divider)]">
          <div className="container-main relative">
            <div className="relative grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {/* Kleiner */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img 
                    src="/Investors/Kleiner.svg" 
                    alt="Kleiner Perkins" 
                    className={`${logoSizes.kleiner} w-auto max-h-full object-contain filter brightness-0 invert`}
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
              {/* NVIDIA */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img 
                    src="/Investors/NVIDIA_logo.svg" 
                    alt="NVIDIA" 
                    className={`${logoSizes.nvidia} w-auto max-h-full object-contain filter brightness-0 invert`}
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
              {/* Khosla */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img 
                    src="/Investors/Khosla_Ventures_Logo.svg" 
                    alt="Khosla Ventures" 
                    className={`${logoSizes.khosla} w-auto max-h-full object-contain filter brightness-0 invert`}
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
            </div>
          </div>
        </div>

        {/* Third row: SouthPark, SAGA, SV_Angel - separate boxes */}
        <div className="relative border-l border-r border-b border-[var(--divider)]">
          <div className="container-main relative">
            <div className="relative grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {/* SouthPark */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img  
                    src="/Investors/SouthPark.svg" 
                    alt="South Park Commons" 
                    className={`${logoSizes.southPark} w-auto max-h-full object-contain filter brightness-0 invert`}
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
              {/* SAGA */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img 
                    src="/Investors/SAGA.svg" 
                    alt="SAGA" 
                    className={`${logoSizes.saga} w-auto max-h-full object-contain filter brightness-0 invert`}
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
              {/* SV_Angel */}
              <div className="relative bg-[var(--bg-black)] cursor-pointer group" style={{ height: '156px' }}>
                <div className="h-full flex items-center justify-center transition-all duration-500 group-hover:blur-md">
                  <img 
                    src="/Investors/SV_Angel.svg" 
                    alt="SV Angel" 
                    className={`${logoSizes.svAngel} w-auto max-h-full object-contain filter brightness-0 invert`}
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
            </div>
          </div>
        </div>
      </div>

      {/* Two rows of investor profiles */}
      <div className="relative">
        <div className="container-main relative">
          <div className="grid -mx-4" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}>
            {/* Row 1 */}
            <InvestorProfile
              imageSrc="/Investors/People/rauchg.jpeg"
              name="Guillermo Rauch"
              role="CEO, Vercel"
              borderClasses="border-l border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/Karim.webp"
              name="Karim Atiyeh"
              role="CTO, Ramp"
              borderClasses="border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/Kevin.jpeg"
              name="Kevin Wang"
              role="CPO, Braze"
              borderClasses="border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/andrew.webp"
              name="Andrew Karam"
              role="Cofounder, AppLovin"
              borderClasses="border-r border-[var(--divider)]"
              showDivider={false}
            />

            {/* Row 2 */}
            <InvestorProfile
              imageSrc="/Investors/People/jordihays.jpeg"
              name="Jordi Hays"
              role="TBPN"
              borderClasses="border-l border-t border-b border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/joradn.jpeg"
              name="Jordan Singer"
              role="CEO, Mainframe"
              borderClasses="border-t border-b border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/scott belsky.jpeg"
              name="Scott Belsky"
              role="Partner, A24"
              borderClasses="border-t border-b border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/david senra.jpg"
              name="David Senra"
              role="Founders Podcast"
              borderClasses="border-r border-t border-b border-[var(--divider)]"
              showDivider={false}
            />
          </div>
        </div>
      </div>

      {/* Values section - with margin top */}
      <div className="relative mt-24 mb-16">
        <Values />
      </div>
    </div>
  );
}

