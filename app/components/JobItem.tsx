interface JobItemProps {
  title: string;
  department?: string | null;
  location?: string[];
  isLast?: boolean;
}

export default function JobItem({ title, department, location, isLast }: JobItemProps) {
  return (
    <div className={`relative bg-[var(--bg-black)] hover:bg-[#131313] transition-colors border-t border-r border-l ${isLast ? 'border-b' : ''} border-[var(--divider)] cursor-pointer`}>
      {/* Mobile: Stacked layout, Desktop: Row layout */}
      <div className="container-main relative">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 py-6">
          {/* Group 1: Title + Department (same row on mobile and desktop) */}
          <div className="flex flex-row items-center gap-2" style={{ paddingLeft: '2px' }}>
            <span className="text-body-sm text-[var(--text-primary)]">
              {title}
            </span>
            {department && (
              <span className="text-body-sm text-[var(--text-secondary)]">
                {department}
              </span>
            )}
          </div>

          {/* Group 2: Location (Mobile: static, Desktop: absolute positioned) */}
          {location && location.length > 0 && (
            <div 
              className="text-body-sm text-[var(--text-secondary)] md:absolute job-item-location"
            >
              {location.join(', ')}
            </div>
          )}

          {/* Group 3: Learn more button */}
          <button className="btn-secondary cursor-pointer self-start">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

