import ProcessFeature from './ProcessFeature';
import FeaturedIn from './FeaturedIn';

export default function Process() {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-black)]" />
      
      {/* Container with max-width and padding */}
      <div className="container-main relative">
        {/* 4-column grid with responsive columns (264px max, scales down) */}
        <div 
          className="relative grid"
          style={{ gridTemplateColumns: 'repeat(4, minmax(0, 264px))' }}
        >
          {/* 5 vertical dotted lines - positioned at column boundaries */}
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 1 - 25% of grid width */}
          <div className="absolute left-[25%] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 2 - 50% of grid width */}
          <div className="absolute left-[50%] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 3 - 75% of grid width */}
          <div className="absolute left-[75%] top-0 bottom-0 dotted-line" />
          
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 dotted-line" />
          
          {/* Process Feature Component - spans all 4 columns */}
          <div className="col-span-4 relative z-10 mt-28">
            <ProcessFeature />
          </div>
          
          {/* Featured In Component - spans all 4 columns, underneath ProcessFeature */}
          <div className="col-span-4 relative z-10">
            <FeaturedIn />
          </div>
        </div>
      </div>
    </section>
  );
}

