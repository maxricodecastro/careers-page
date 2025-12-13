interface InvestorProfileProps {
  imageSrc: string;
  name: string;
  role: string;
  borderClasses?: string;
  showDivider?: boolean;
}

export default function InvestorProfile({
  imageSrc,
  name,
  role,
  borderClasses = 'border-l border-[var(--divider)]',
  showDivider = true,
}: InvestorProfileProps) {
  return (
    <div className={`relative bg-[var(--bg-black)] hover:bg-[#131313] transition-colors ${borderClasses} cursor-pointer`} style={{ height: '140px' }}>
      <div className="h-full px-4 flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full border border-[var(--divider)] overflow-hidden flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="text-center">
          <div className="text-body-sm text-[var(--text-primary)]">{name}</div>
          <div className="text-body-sm text-[var(--text-secondary)]">{role}</div>
        </div>
      </div>
      {/* Dotted divider */}
      {showDivider && <div className="absolute right-0 top-0 bottom-0 dotted-line" />}
    </div>
  );
}

