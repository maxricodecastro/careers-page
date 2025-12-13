import JobItem from './JobItem';
import DesignOpportunities from './DesignOpportunities';
import InvestorValues from './InvestorValues';
import jobsData from '../data/jobs.json';

export default function Jobs() {
  return (
    <section className="relative w-full border border-t border-divider">
      
      {/* Background - gradient from top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] to-[#171717]" />
      
      {/* Container with max-width and padding */}
      <div className="container-main relative">
        {/* Mobile: 2-column grid, Desktop: 4-column grid */}
        <div className="jobs-grid relative grid">
          {/* Mobile: 3 vertical dotted lines, Desktop: 5 vertical dotted lines */}
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 1 - Mobile: 50%, Desktop: 25% */}
          <div className="absolute left-[50%] md:left-[25%] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 2 - Desktop only: 50% */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 3 - Desktop only: 75% */}
          <div className="hidden md:block absolute left-[75%] top-0 bottom-0 dotted-line" />
          
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 dotted-line" />
          
          {/* Content container - Mobile: stacked, Desktop: grid */}
          <div className="col-span-2 md:col-span-4 relative z-10 grid py-32 jobs-content-grid">
            {/* Mission section - Mobile: full width, Desktop: spans columns 1-2 */}
            <div className="col-span-2 md:col-span-2 px-4">
              {/* Height is based on content */}
              <h2 className="text-h3 text-[var(--text-primary)] mb-4">
                Our mission
              </h2>
              <p className="text-h2 text-[var(--text-primary)] mb-6 max-w-[324px]">
                To build the best technology so businesses can understand and control how they appear in AI answers.
              </p>
              <p className="text-body-md text-[var(--text-secondary)] mb-8 max-w-[384px]">
                At Profound, we believe that AI visibility will become every company's most important metric.
              </p>
              <p className="text-body-md text-[var(--text-secondary)] max-w-[384px]">
                We're building an early-stage team here in NYC, SF, Buenos Aires, and London to work on one of the world's most interesting technical challenges: AI interpretability.
              </p>
            </div>
            
            {/* Stats wrapper - Mobile: all stats in column 1 stacked, Desktop: column 3 */}
            <div className="col-span-1 md:col-span-1 px-4 stats-column stats-column-1 mt-8 md:mt-0">
              {/* Height is based on content */}
              <div className="mb-8 relative">
                {/* Left border aligned with grid column line - visible on mobile and desktop */}
                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-[#555555]" />
                <div className="text-h2 text-[var(--text-primary)] mb-2">1B+</div>
                <div className="text-body text-[var(--text-secondary)]">Citations analyzed daily</div>
              </div>
              <div className="mb-8 md:mb-0 relative">
                {/* Left border aligned with grid column line - visible on mobile and desktop */}
                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-[#555555]" />
                <div className="text-h2 text-[var(--text-primary)] mb-2">30B+</div>
                <div className="text-body text-[var(--text-secondary)]">Crawler visits analyzed daily</div>
              </div>
            </div>
            
            {/* Stats section - Mobile: continues in column 1 (below previous stats), Desktop: column 4 */}
            <div className="col-span-1 md:col-span-1 px-4 stats-column stats-column-2">
              {/* Height is based on content */}
              <div className="relative">
                {/* Left border aligned with grid column line - visible on mobile and desktop */}
                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-[#555555]" />
                <div className="text-h2 text-[var(--text-primary)] mb-2">10M+</div>
                <div className="text-body text-[var(--text-secondary)]">Prompts analyzed daily</div>
              </div>
            </div>
          </div>

          {/* Job Listings Header - Mobile: stacked, Desktop: side by side */}
          <div className="col-span-2 md:col-span-4 relative z-10 mb-8" style={{ marginBottom: '32px' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 px-4">
              <h2 className="text-h2 text-[var(--text-primary)]">
                We have {jobsData.length} open positions
              </h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <button className="btn-primary flex items-center gap-2">
                  All departments
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-primary flex items-center gap-2">
                  All locations
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings - spans all columns, stacked vertically */}
          <div className="col-span-2 md:col-span-4 relative z-10">
            {jobsData.map((job, index) => (
              <JobItem
                key={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                isLast={index === jobsData.length - 1}
              />
            ))}
          </div>

          {/* Design Opportunities Component - spans all columns */}
          <div className="col-span-2 md:col-span-4 relative z-10" style={{ marginTop: '96px', marginBottom: '96px' }}>
            <DesignOpportunities />
          </div>

          {/* Investor Values Component - spans all columns */}
          <div className="col-span-2 md:col-span-4 relative z-10">
            <InvestorValues />
          </div>
        </div>
      </div>
    </section>
  );
}

