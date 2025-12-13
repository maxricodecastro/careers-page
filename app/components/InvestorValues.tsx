import FullWidthCard from './FullWidthCard';
import GridCard from './GridCard';
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
        <div className="investor-values-title-grid grid">
          <div className="col-span-2 md:col-span-4 px-1">
            <h3 className="text-body-md text-[var(--text-primary)]">
              Our investors
            </h3>
          </div>
        </div>
      </div>

      {/* Three full-width boxes in a stack */}
      <div className="flex flex-col">
        {/* First row: Sequoia centered - Mobile: full width, Desktop: full width */}
        <FullWidthCard>
          <div className="container-main relative h-full">
            <div className="relative grid h-full investor-values-logo-grid">
              <div className="col-span-2 md:col-span-4 px-4 flex items-center justify-center h-full">
                <img 
                  src="/Investors/Sequoia_Capital_logo.svg" 
                  alt="Sequoia Capital" 
                  className={`${logoSizes.sequoia} w-auto filter brightness-0 invert`}
                />
              </div>
            </div>
          </div>
        </FullWidthCard>

        {/* Second row: Kleiner, NVIDIA, Khosla - Mobile: full width stacked, Desktop: 3 columns */}
        <div className="relative bg-[var(--bg-black)] border-l border-r border-b border-[var(--divider)]">
          <div className="container-main relative">
            <div className="relative grid investor-values-three-grid">
              {/* Kleiner - Mobile: full width, Desktop: column 1 */}
              <GridCard
                className="col-span-2 md:col-span-1"
                borderClassName="border-b md:border-b-0 border-[var(--divider)]"
              >
                <img 
                  src="/Investors/Kleiner.svg" 
                  alt="Kleiner Perkins" 
                  className={`${logoSizes.kleiner} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
              {/* NVIDIA - Mobile: full width, Desktop: column 2 */}
              <GridCard
                className="col-span-2 md:col-span-1"
                borderClassName="border-b md:border-b-0 border-[var(--divider)]"
              >
                <img 
                  src="/Investors/NVIDIA_logo.svg" 
                  alt="NVIDIA" 
                  className={`${logoSizes.nvidia} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
              {/* Khosla - Mobile: full width, Desktop: column 3 */}
              <GridCard className="col-span-2 md:col-span-1">
                <img 
                  src="/Investors/Khosla_Ventures_Logo.svg" 
                  alt="Khosla Ventures" 
                  className={`${logoSizes.khosla} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
            </div>
          </div>
        </div>

        {/* Third row: SouthPark, SAGA, SV_Angel - Mobile: full width stacked, Desktop: 3 columns */}
        <div className="relative bg-[var(--bg-black)] border-l border-r border-b border-[var(--divider)]">
          <div className="container-main relative">
            <div className="relative grid investor-values-three-grid">
              {/* SouthPark - Mobile: full width, Desktop: column 1 */}
              <GridCard
                className="col-span-2 md:col-span-1"
                borderClassName="border-b md:border-b-0 border-[var(--divider)]"
              >
                <img  
                  src="/Investors/SouthPark.svg" 
                  alt="South Park Commons" 
                  className={`${logoSizes.southPark} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
              {/* SAGA - Mobile: full width, Desktop: column 2 */}
              <GridCard
                className="col-span-2 md:col-span-1"
                borderClassName="border-b md:border-b-0 border-[var(--divider)]"
              >
                <img 
                  src="/Investors/SAGA.svg" 
                  alt="SAGA" 
                  className={`${logoSizes.saga} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
              {/* SV_Angel - Mobile: full width, Desktop: column 3 */}
              <GridCard className="col-span-2 md:col-span-1">
                <img 
                  src="/Investors/SV_Angel.svg" 
                  alt="SV Angel" 
                  className={`${logoSizes.svAngel} w-auto max-h-full object-contain filter brightness-0 invert`}
                />
              </GridCard>
            </div>
          </div>
        </div>
      </div>

      {/* Two rows of investor profiles - Mobile: 2 per row, Desktop: 4 per row */}
      <div className="relative">
        <div className="container-main relative">
          <div className="grid -mx-4 investor-profiles-grid relative">
            {/* Horizontal dotted dividers between rows - Mobile: at 50% and 75%, Desktop: at 50% */}
            <div 
              className="absolute left-[-16px] right-[-16px] top-1/2 z-10"
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
            <div 
              className="absolute left-[-16px] right-[-16px] top-[75%] md:hidden z-10"
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
              borderClasses="border-[var(--divider)] md:border-l-0"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/Kevin.jpeg"
              name="Kevin Wang"
              role="CPO, Braze"
              borderClasses="border-l md:border-l-0 border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/andrew.webp"
              name="Andrew Karam"
              role="Cofounder, AppLovin"
              borderClasses="border-[var(--divider)] md:border-r md:border-l-0"
              showDivider={false}
            />

            {/* Row 2 */}
            <InvestorProfile
              imageSrc="/Investors/People/jordihays.jpeg"
              name="Jordi Hays"
              role="TBPN"
              borderClasses="border-l border-t-0 md:border-t border-b border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/joradn.jpeg"
              name="Jordan Singer"
              role="CEO, Mainframe"
              borderClasses="border-t-0 md:border-t border-b border-[var(--divider)] md:border-l-0"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/scott belsky.jpeg"
              name="Scott Belsky"
              role="Partner, A24"
              borderClasses="border-l md:border-l-0 border-t-0 md:border-t border-b border-[var(--divider)]"
              showDivider={true}
            />
            <InvestorProfile
              imageSrc="/Investors/People/david senra.jpg"
              name="David Senra"
              role="Founders Podcast"
              borderClasses="border-[var(--divider)] border-t-0 md:border-t border-b md:border-r md:border-l-0"
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

