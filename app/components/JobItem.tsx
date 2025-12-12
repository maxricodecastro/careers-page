interface JobItemProps {
  title: string;
  department?: string | null;
  location?: string[];
  isLast?: boolean;
}

export default function JobItem({ title, department, location, isLast }: JobItemProps) {
  return (
    <div className={`relative bg-[var(--bg-black)] hover:bg-[#131313] transition-colors border-t border-r border-l ${isLast ? 'border-b' : ''} border-[var(--divider)] cursor-pointer`}>
      {/* Row layout with three groups: Title+Dept | Location | Button */}
      {/* Content spans full width, location aligned to start of column 3 (50% of grid) */}
      <div className="container-main relative">
        <div className="relative flex items-center justify-between py-6">
          {/* Group 1: Title + Department (left-aligned) */}
          {/* Padding matches mission section text padding (px-4 = 16px) */}
          <div className="flex items-center gap-2" style={{ paddingLeft: '2px' }}>
            <span className="text-body-sm text-[var(--text-primary)]">
              {title}
            </span>
            {department && (
              <span className="text-body-sm text-[var(--text-secondary)]">
                {department}
              </span>
            )}
          </div>

          {/* Group 2: Location (aligned to start of third column at 50% of grid) */}
          {/* Positioned at 50% of container-main width (start of column 3) with padding */}
          {/* TODO: Adjust padding as needed - currently 16px from column start */}
          {location && location.length > 0 && (
            <div 
              className="absolute text-body-sm text-[var(--text-secondary)]"
              style={{ 
                // 50% aligns with start of column 3 in the grid
                // Add padding to offset from the column edge
                left: 'calc(50% + 16px)', // TODO: Adjust padding value as needed
              }}
            >
              {location.join(', ')}
            </div>
          )}

          {/* Group 3: Learn more button (right-aligned) */}
          <button className="btn-secondary cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

