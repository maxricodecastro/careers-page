import { ReactNode } from 'react';
import GridCard from './GridCard';

interface FullWidthCardProps {
  children: ReactNode;
  height?: number;
  className?: string;
  contentClassName?: string;
  backgroundClassName?: string;
  borderClassName?: string;
  overlayLabel?: string;
  blurOnHover?: boolean;
}

export default function FullWidthCard({
  children,
  height = 156,
  className = '',
  contentClassName = '',
  backgroundClassName = 'bg-[var(--bg-black)]',
  borderClassName = 'border border-[var(--divider)]',
  overlayLabel = 'Visit site',
  blurOnHover = true,
}: FullWidthCardProps) {
  return (
    <GridCard
      height={height}
      className={className}
      contentClassName={contentClassName}
      backgroundClassName={backgroundClassName}
      borderClassName={borderClassName}
      overlayLabel={overlayLabel}
      blurOnHover={blurOnHover}
    >
      {children}
    </GridCard>
  );
}

