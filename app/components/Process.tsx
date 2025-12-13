import ProcessFeature from './ProcessFeature';
import FeaturedIn from './FeaturedIn';

export default function Process() {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-black)]" />
      
      {/* Container with max-width and padding */}
      <div className="container-main relative">
        {/* Mobile: 2-column grid, Desktop: 4-column grid */}
        <div className="process-section-grid relative grid">
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
          
          {/* Process Feature Component - spans all columns */}
          <div className="col-span-2 md:col-span-4 relative z-10 mt-28">
            <ProcessFeature />
          </div>
          
          {/* Featured In Component - spans all columns, underneath ProcessFeature */}
          <div className="col-span-2 md:col-span-4 relative z-10">
            <FeaturedIn />
          </div>
        </div>
      </div>
    </section>
  );
}

