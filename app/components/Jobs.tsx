'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import JobItem from './JobItem';
import DesignOpportunities from './DesignOpportunities';
import InvestorValues from './InvestorValues';
import jobsData from '../data/jobs.json';

export default function Jobs() {
  const [activeDepartment, setActiveDepartment] = useState<{ name: string; count: number } | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const departmentRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const jobsContainerRef = useRef<HTMLDivElement>(null);

  // Group jobs by department and maintain order (memoized)
  const departmentOrder = ['Engineering', 'Growth', 'Marketing', 'Customer Success', 'People'];
  const jobsByDepartment = useMemo(() => {
    return jobsData.reduce((acc, job) => {
      const dept = job.department || 'General';
      if (!acc[dept]) {
        acc[dept] = [];
      }
      acc[dept].push(job);
      return acc;
    }, {} as Record<string, typeof jobsData>);
  }, []);

  // Sort departments: ordered departments first, then others (memoized)
  const sortedDepartments = useMemo(() => {
    return Object.keys(jobsByDepartment).sort((a, b) => {
      const aIndex = departmentOrder.indexOf(a);
      const bIndex = departmentOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }, [jobsByDepartment]);

  // Detect when sticky header becomes sticky and stays sticky until end of jobs
  useEffect(() => {
    if (!stickyHeaderRef.current || !jobsContainerRef.current) return;

    const stickyHeader = stickyHeaderRef.current;
    const container = jobsContainerRef.current;

    const checkSticky = () => {
      const headerRect = stickyHeader.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Check if sticky header is at its sticky position (54px from top)
      const isHeaderSticky = headerRect.top <= 54;
      
      // Check if the bottom of the jobs container is still visible or above viewport
      // This ensures we stay sticky until we've scrolled past all jobs
      const containerBottom = containerRect.bottom;
      const isContainerStillVisible = containerBottom > 0;
      
      // Only set sticky if header is sticky AND container is still visible
      // This keeps it sticky until we've scrolled past all the job listings
      setIsSticky(isHeaderSticky && isContainerStillVisible);
    };

    // Initial check
    checkSticky();

    // Listen for scroll events
    window.addEventListener('scroll', checkSticky, { passive: true });
    window.addEventListener('resize', checkSticky, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkSticky);
      window.removeEventListener('resize', checkSticky);
    };
  }, []);

  // When sticky header becomes sticky, show first department
  useEffect(() => {
    if (isSticky && sortedDepartments.length > 0) {
      const firstDept = sortedDepartments.find(dept => dept !== 'General') || sortedDepartments[0];
      if (firstDept) {
        const count = jobsByDepartment[firstDept]?.length || 0;
        // Only set if not already set or if we're switching to sticky
        setActiveDepartment(prev => {
          if (!prev) {
            return { name: firstDept, count };
          }
          return prev;
        });
      }
    } else if (!isSticky) {
      setActiveDepartment(null);
    }
  }, [isSticky, sortedDepartments, jobsByDepartment]);

  // Detect which department is currently at the sticky header position
  useEffect(() => {
    if (!isSticky) {
      return;
    }

    const updateActiveDepartment = () => {
      const stickyHeaderPosition = 54; // Position where sticky header sits
      const scrollPosition = window.scrollY + stickyHeaderPosition;

      // Find which department section's top is at or just above the sticky header position
      const departments: Array<{ name: string; top: number }> = [];

      departmentRefs.current.forEach((ref, deptName) => {
        if (ref && deptName !== 'General') {
          const rect = ref.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          
          // Check if this department's top is at or above the sticky header position
          if (elementTop <= scrollPosition) {
            departments.push({ name: deptName, top: elementTop });
          }
        }
      });

      // Find the department that's closest to but above the sticky header position
      if (departments.length > 0) {
        const activeDept = departments.reduce((prev, current) => 
          current.top > prev.top ? current : prev
        );
        const count = jobsByDepartment[activeDept.name]?.length || 0;
        setActiveDepartment({ name: activeDept.name, count });
      } else {
        // Fallback: if no department found, use the first non-General department
        const firstDept = sortedDepartments.find(dept => dept !== 'General');
        if (firstDept) {
          const count = jobsByDepartment[firstDept]?.length || 0;
          setActiveDepartment({ name: firstDept, count });
        }
      }
    };

    // Initial check
    updateActiveDepartment();

    // Listen for scroll events with throttling for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveDepartment();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveDepartment, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveDepartment);
    };
  }, [isSticky, jobsByDepartment, sortedDepartments]);

  // Get header text
  const getHeaderText = () => {
    if (activeDepartment && activeDepartment.name !== 'General') {
      return `${activeDepartment.name} - ${activeDepartment.count}`;
    }
    return `We have ${jobsData.length} open positions`;
  };
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

          {/* Job Listings Container - wraps header and listings for sticky behavior */}
          <div ref={jobsContainerRef} className="col-span-2 md:col-span-4 relative z-10">
            {/* Job Listings Header - Mobile: stacked, Desktop: side by side - Sticky */}
            <div ref={stickyHeaderRef} className="sticky bg-[#101010] border-b border-[var(--divider)] px-4 pb-8 pt-8 mb-0 z-20" style={{ top: '54px' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                <h2 className="text-h2 text-[var(--text-primary)]">
                  {getHeaderText()}
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
            <div className="relative z-10">
              {sortedDepartments.map((department, deptIndex) => {
                const jobs = jobsByDepartment[department];
                const isLastDepartment = deptIndex === sortedDepartments.length - 1;
                return (
                  <div
                    key={department}
                    ref={(el) => {
                      if (el) departmentRefs.current.set(department, el);
                    }}
                    data-department={department}
                  >
                    {jobs.map((job, jobIndex) => {
                      const isLastJob = isLastDepartment && jobIndex === jobs.length - 1;
                      return (
                        <JobItem
                          key={job.id}
                          title={job.title}
                          department={job.department}
                          location={job.location}
                          isLast={isLastJob}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
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

