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
    <div className={`relative bg-[var(--bg-black)] ${borderClasses} cursor-pointer group`} style={{ height: '156px' }}>
      <div className="h-full px-4 flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:blur-md">
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
      {/* Visit site text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span 
          className="text-[14px] opacity-0 translate-y-[4px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
          style={{ color: '#EEDD45' }}
        >
          Visit profile
        </span>
      </div>
      {/* Dotted divider */}
      {showDivider && <div className="absolute right-0 top-0 bottom-0 dotted-line" />}
    </div>
  );
}

