export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Container with max-width and padding */}
      <div className="container-main relative h-full">
        {/* 4-column grid with responsive columns (264px max, scales down) */}
        <div 
          className="relative grid h-full"
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
          
          {/* Overlay content - centered vertically, following grid layout */}
          <div className="col-span-4 flex flex-col items-center justify-center h-full relative z-10">
            {/* Big white circle with low opacity */}
            <div className="w-[324px] h-[324px] rounded-full bg-white opacity-10 mb-8" />
            
            {/* Main heading */}
            <h1 className="text-h1 text-[var(--text-primary)] text-center mb-6 max-w-xl">
              We help the world understand AI
            </h1>
            
            {/* Subheading */}
            <p className="text-body-lg text-[var(--text-primary)] text-center mb-8 max-w-sm">
              Join the team that's defining AI visibility for some of the biggest brands in the world
            </p>
            
            {/* Button */}
            <button 
              className="bg-white text-[var(--text-dark)] px-4 py-2 rounded-lg font-semibold text-base transition-opacity hover:opacity-80"
              style={{ fontSize: '16px' }}
            >
              View open roles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

