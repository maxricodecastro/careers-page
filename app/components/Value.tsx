interface ValueProps {
  number: string;
  category: string;
  title: string;
  description: string;
  height?: string | number;
  borderClasses?: string;
  showRightDivider?: boolean;
}

export default function Value({
  number,
  category,
  title,
  description,
  height = '396px',
  borderClasses = 'border-t border-b border-l border-[var(--divider)]',
  showRightDivider = true,
}: ValueProps) {
  return (
    <div 
      className={`relative col-span-2 bg-[var(--bg-black)] ${borderClasses}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      <div className="h-full px-8 py-8 flex flex-col justify-between">
        {/* Top: Number / Category */}
        <div className="text-body-sm">
          <span className="text-[var(--text-secondary)]">{number}.</span>
          <span className="text-[var(--text-primary)]"> / {category}</span>
        </div>
        
        {/* Bottom: Title and Description */}
        <div className="flex flex-col gap-2">
          <div className="text-h3 text-[var(--text-primary)] font-medium">
            {title}
          </div>
          <div className="text-body text-[var(--text-secondary)]" style={{ maxWidth: '384px' }}>
            {description}
          </div>
        </div>
      </div>
      {/* Dotted divider on the right */}
      {showRightDivider && <div className="absolute right-0 top-0 bottom-0 dotted-line" />}
    </div>
  );
}

