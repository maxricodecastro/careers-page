import Value from './Value';

export default function Values() {
  return (
    <div className="relative">
      {/* Title - left aligned */}
      <div className="container-main relative mb-6">
        <div className="values-title-grid grid">
          <div className="col-span-2 md:col-span-4 px-1">
            <h3 className="text-body-md text-[var(--text-primary)]">
              Our values
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked values, Desktop: 2x2 grid */}
      <div className="relative">
        <div className="container-main relative">
          <div className="grid -mx-4 values-grid">
            {/* Row 1 */}
            <Value
              number="01"
              category="Invent"
              title="Invent things and lead change"
              description="Creating things is fun! Why not do it every day? Forget tweaking old code. Add new knowledge to the world instead."
              borderClasses="border-t border-l border-r md:border-r-0 border-[var(--divider)]"
              showRightDivider={true}
            />
            <Value
              number="02"
              category="Experiment"
              title="Build with a bias toward action"
              description="Supercharge your impact with a team that's moving fast, for the biggest brands on Earth."
              borderClasses="border-t border-l border-r md:border-r md:border-l-0 border-[var(--divider)]"
              showRightDivider={false}
            />

            {/* Row 2 */}
            <Value
              number="03"
              category="Impact"
              title="Do the best work of your career"
              description="Come to Profound to do work that you didn't know you were capable of. Tackle challenges you didn't know existed."
              borderClasses="border-l border-r md:border-r-0 border-t border-b border-[var(--divider)]"
              showRightDivider={true}
            />
            <Value
              number="04"
              category="Build"
              title="Be part of the best culture"
              description="Join smart people who are passionate about their work, building things, and growing together. And have some fun while doing it."
              borderClasses="border-r border-l border-t border-b md:border-l-0 border-[var(--divider)]"
              showRightDivider={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

