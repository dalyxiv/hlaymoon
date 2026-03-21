const Flower = ({ cx, cy, size, color, petalColor, rotation = 0 }: { cx: number; cy: number; size: number; color: string; petalColor: string; rotation?: number }) => {
  const petalCount = 5;
  return (
    <g transform={`rotate(${rotation}, ${cx}, ${cy})`}>
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (i * 360) / petalCount;
        const rad = (angle * Math.PI) / 180;
        const px = cx + size * 0.6 * Math.cos(rad);
        const py = cy + size * 0.6 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={px}
            cy={py}
            rx={size * 0.55}
            ry={size * 0.35}
            fill={petalColor}
            opacity={0.75}
            transform={`rotate(${angle}, ${px}, ${py})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={size * 0.25} fill={color} opacity={0.9} />
    </g>
  );
};

const Leaf = ({ cx, cy, angle, size }: { cx: number; cy: number; angle: number; size: number }) => (
  <g transform={`rotate(${angle}, ${cx}, ${cy})`}>
    <path
      d={`M${cx},${cy} Q${cx + size * 0.4},${cy - size * 0.8} ${cx + size},${cy - size * 0.2} Q${cx + size * 0.5},${cy + size * 0.3} ${cx},${cy}`}
      fill="hsl(145, 35%, 45%)"
      opacity={0.6}
    />
  </g>
);

const FloralWreath = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const outerCount = 10;
  const innerCount = 7;

  const flowerStyles = [
    { color: 'hsl(50, 50%, 60%)', petalColor: 'hsl(320, 60%, 55%)' },
    { color: 'hsl(50, 45%, 55%)', petalColor: 'hsl(280, 35%, 55%)' },
    { color: 'hsl(45, 50%, 58%)', petalColor: 'hsl(310, 50%, 60%)' },
    { color: 'hsl(50, 45%, 55%)', petalColor: 'hsl(340, 45%, 60%)' },
    { color: 'hsl(45, 50%, 55%)', petalColor: 'hsl(290, 40%, 55%)' },
  ];

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {Array.from({ length: outerCount }).map((_, i) => {
            const angle = (i * 360) / outerCount;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 155 * Math.cos(rad);
            const cy = 200 + 155 * Math.sin(rad);
            const style = flowerStyles[i % flowerStyles.length];
            return (
              <Flower key={i} cx={cx} cy={cy} size={24} color={style.color} petalColor={style.petalColor} rotation={angle} />
            );
          })}
          {Array.from({ length: outerCount }).map((_, i) => {
            const angle = (i * 360) / outerCount + 18;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 165 * Math.cos(rad);
            const cy = 200 + 165 * Math.sin(rad);
            return <Leaf key={`l-${i}`} cx={cx} cy={cy} angle={angle + 30} size={18} />;
          })}
        </svg>
      </div>

      {/* Inner ring */}
      <div className="absolute inset-[18%] animate-spin-reverse-slow">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {Array.from({ length: innerCount }).map((_, i) => {
            const angle = (i * 360) / innerCount;
            const rad = (angle * Math.PI) / 180;
            const cx = 150 + 105 * Math.cos(rad);
            const cy = 150 + 105 * Math.sin(rad);
            const style = flowerStyles[(i + 2) % flowerStyles.length];
            return (
              <Flower key={i} cx={cx} cy={cy} size={18} color={style.color} petalColor={style.petalColor} rotation={angle * 2} />
            );
          })}
          {Array.from({ length: innerCount }).map((_, i) => {
            const angle = (i * 360) / innerCount + 25;
            const rad = (angle * Math.PI) / 180;
            const cx = 150 + 112 * Math.cos(rad);
            const cy = 150 + 112 * Math.sin(rad);
            return <Leaf key={`il-${i}`} cx={cx} cy={cy} angle={angle - 10} size={14} />;
          })}
        </svg>
      </div>
    </div>
  );
};

export default FloralWreath;