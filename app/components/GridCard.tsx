import { ReactNode } from 'react';

interface GridCardProps {
  children: ReactNode;
  height?: number;
  className?: string;
  contentClassName?: string;
  borderClassName?: string;
  backgroundClassName?: string;
  overlayLabel?: string;
  blurOnHover?: boolean;
  showDividerRight?: boolean;
  showDividerBottom?: boolean;
}

const DEFAULT_HEIGHT = 156;

export default function GridCard({
  children,
  height = DEFAULT_HEIGHT,
  className = '',
  contentClassName = '',
  borderClassName = '',
  backgroundClassName = 'bg-[var(--bg-black)]',
  overlayLabel = 'Visit site',
  blurOnHover = true,
  showDividerRight = false,
  showDividerBottom = false,
}: GridCardProps) {
  const cardClasses = [
    'relative',
    'cursor-pointer',
    'group',
    backgroundClassName,
    borderClassName,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const contentClasses = [
    'h-full',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    blurOnHover ? 'transition-all duration-500 group-hover:blur-md' : '',
    contentClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} style={{ height: `${height}px` }}>
      <div className={contentClasses}>
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="text-[14px] opacity-0 translate-y-[4px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
          style={{ color: '#EEDD45' }}
        >
          {overlayLabel}
        </span>
      </div>

      {showDividerRight && <div className="absolute right-0 top-0 bottom-0 dotted-line" />}
      {showDividerBottom && <div className="absolute left-0 right-0 bottom-0 dotted-line" />}
    </div>
  );
}

