interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  showDivider?: boolean;
}

function ProcessStep({ number, title, description, showDivider = true }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="px-8 py-8 flex flex-col justify-between min-h-[132px]">
        {/* Number at top */}
        <div className="text-body mb-2 text-[var(--text-primary)]">
          {number}.
        </div>
        {/* Title and Description at bottom */}
        <div className="flex flex-col gap-2" style={{ maxWidth: '384px' }}>
          <div className="text-body text-[var(--text-primary)]">
            {title}
          </div>
          <div className="text-body text-[var(--text-secondary)]">
            {description}
          </div>
        </div>
      </div>
      {/* Solid divider at the bottom */}
      {showDivider && (
        <div 
          className="absolute left-0 right-0 bottom-0 border-b border-[var(--divider)]"
        />
      )}
    </div>
  );
}

export default function ProcessFeature() {
  return (
    <div className="relative">
      {/* Title - left aligned with same spacing as "Our investors" */}
      <div className="container-main relative mb-6">
        <div className="process-title-grid grid">
          <div className="col-span-2 md:col-span-4 px-1">
            <h3 className="text-body-md text-[var(--text-primary)]">
              Our process
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked layout, Desktop: Two boxes side by side */}
      <div className="relative">
        <div className="container-main relative">
          <div className="grid -mx-4 items-stretch process-feature-grid flex-col md:grid">
            {/* Left box - Mobile: small height, Desktop: spans 2 columns */}
            <div className="relative col-span-2 bg-[#0F0F0F] border-t border-b border-l border-r md:border-r-0 border-[var(--divider)] flex flex-col process-left-box">
              {/* Mobile: Small box with minimal padding, Desktop: Full height sticky */}
              <div className="relative flex-1">
                <div className="px-8 py-4 md:sticky md:px-8 md:py-8 flex items-center md:items-start" style={{ top: '54px', bottom: '32px' }}>
                  <div className="text-h2 text-[var(--text-primary)] font-medium" style={{ maxWidth: '384px' }}>
                    Candid. Respectful. Honest
                  </div>
                </div>
              </div>
              {/* Dotted divider on the right - Desktop only */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 dotted-line" />
            </div>

            {/* Right box - Mobile: stacked, Desktop: spans 2 columns */}
            <div className="relative col-span-2 bg-[#0F0F0F] border-t border-b border-l border-r md:border-l-0 border-[var(--divider)] flex flex-col">
              <div className="flex flex-col">
                <div className="relative">
                  <ProcessStep
                    number="01"
                    title="Intro call"
                    description="We'll schedule a 15-30 minute chat to get to know you, discuss your work history, and answer your questions."
                    showDivider={true}
                  />
                </div>
                <div className="relative">
                  <ProcessStep
                    number="02"
                    title="Debrief"
                    description="We'll debrief as a team and get back to you within a few days."
                    showDivider={true}
                  />
                </div>
                <div className="relative">
                  <ProcessStep
                    number="03"
                    title="Onsite"
                    description="If you're a good fit, we'll invite you to a day-long onsite. This onsite will give both you and our team the chance to collaborate and determine if we're the right match."
                    showDivider={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
