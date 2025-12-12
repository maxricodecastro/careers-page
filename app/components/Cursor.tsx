interface CursorProps {
  color: string;
  size?: number;
  name?: string;
  labelOffsetX?: number;
  labelOffsetY?: number;
  cursorStrokeWidth?: number;
  labelStrokeWidth?: number;
}

export default function Cursor({ 
  color, 
  size = 16, 
  name, 
  labelOffsetX, 
  labelOffsetY,
  cursorStrokeWidth = 2,
  labelStrokeWidth = 2
}: CursorProps) {
  // Aspect ratio: width 84, height 90 (ratio = 90/84 = 1.0714...)
  const width = size;
  const height = size * (90 / 84);

  // Map fill colors to stroke colors
  const getStrokeColor = (fillColor: string): string => {
    const normalizedColor = fillColor.toUpperCase();
    const colorMap: Record<string, string> = {
      '#EE47BC': '#9D327D', // Pink
      'EE47BC': '#9D327D',
      '#079669': '#166448', // Green
      '079669': '#166448',
      '#DC2625': '#8C1F1D', // Red
      'DC2625': '#8C1F1D',
    };
    return colorMap[normalizedColor] || fillColor;
  };

  const strokeColor = getStrokeColor(color);

  // Convert hex color to rgba with opacity for softer glow
  const hexToRgba = (hex: string, opacity: number): string => {
    const normalizedHex = hex.replace('#', '');
    const r = parseInt(normalizedHex.substring(0, 2), 16);
    const g = parseInt(normalizedHex.substring(2, 4), 16);
    const b = parseInt(normalizedHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Glow color with reduced opacity for softer effect
  const glowColor = hexToRgba(color, 0.4);

  // Default label positioning: to the right of cursor, below it
  // labelOffsetX: offset from cursor's right edge (default: 4px gap)
  // labelOffsetY: offset from cursor's bottom edge (default: 0px)
  const defaultOffsetX = -4;
  const defaultOffsetY = 0;
  const offsetX = labelOffsetX !== undefined ? labelOffsetX : defaultOffsetX;
  const offsetY = labelOffsetY !== undefined ? labelOffsetY : defaultOffsetY;

  return (
    <div className="relative inline-block">
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 84 90" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1.69114 11.693C0.200072 4.56657 7.82868 -0.975947 14.1456 2.64434L77.2906 38.8326C83.6951 42.5034 82.6308 52.0484 75.5751 54.2188L49.361 62.2823C46.7966 63.0712 44.5906 64.7367 43.1297 66.9871L31.6855 84.617C27.5847 90.9332 17.8911 89.1214 16.3488 81.7502L1.69114 11.693Z" 
          fill={color}
          stroke={strokeColor}
          strokeWidth={cursorStrokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {name && (
        <div
          className="absolute whitespace-nowrap px-3 py-1 text-white text-sm font-medium"
          style={{
            backgroundColor: color,
            left: `calc(100% + ${offsetX}px)`,
            top: `calc(100% + ${offsetY}px)`,
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            borderBottomLeftRadius: '12px',
            border: `${labelStrokeWidth}px solid ${strokeColor}`,
            boxShadow: `0 0 1px ${glowColor}, 0 0 16px ${glowColor}`,
          }}
        >
          {name}
        </div>
      )}
    </div>
  );
}

