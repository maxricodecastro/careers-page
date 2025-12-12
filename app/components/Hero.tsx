export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Container with max-width and padding */}
      <div className="container-main relative">
        {/* 4-column grid with fixed 264px columns */}
        <div 
          className="relative grid"
          style={{ gridTemplateColumns: 'repeat(4, 264px)' }}
        >
          {/* 5 vertical dotted lines */}
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 1 */}
          <div className="absolute left-[264px] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 2 */}
          <div className="absolute left-[528px] top-0 bottom-0 dotted-line" />
          
          {/* Divider after column 3 */}
          <div className="absolute left-[792px] top-0 bottom-0 dotted-line" />
          
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 dotted-line" />
          
          {/* Grid columns (for reference/visualization) */}
          <div className="h-screen" />
          <div className="h-screen" />
          <div className="h-screen" />
          <div className="h-screen" />
        </div>
      </div>
    </section>
  );
}

