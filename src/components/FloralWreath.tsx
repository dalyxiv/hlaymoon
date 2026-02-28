const FloralWreath = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const petals = Array.from({ length: 12 });
  const innerPetals = Array.from({ length: 8 });
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer ring of petals */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {petals.map((_, i) => {
            const angle = (i * 360) / petals.length;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 160 * Math.cos(rad);
            const cy = 200 + 160 * Math.sin(rad);
            const colors = [
              'hsl(350, 40%, 65%)',   // rose
              'hsl(5, 45%, 85%)',     // blush
              'hsl(320, 20%, 55%)',   // mauve
              'hsl(38, 50%, 80%)',    // champagne
              'hsl(145, 20%, 60%)',   // sage
              'hsl(350, 35%, 70%)',   // light rose
            ];
            return (
              <g key={i} transform={`rotate(${angle}, ${cx}, ${cy})`}>
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={22}
                  ry={35}
                  fill={colors[i % colors.length]}
                  opacity={0.7}
                />
                <ellipse
                  cx={cx + 8}
                  cy={cy - 5}
                  rx={15}
                  ry={25}
                  fill={colors[(i + 1) % colors.length]}
                  opacity={0.5}
                />
              </g>
            );
          })}
          {/* Decorative leaves */}
          {petals.map((_, i) => {
            const angle = (i * 360) / petals.length + 15;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 170 * Math.cos(rad);
            const cy = 200 + 170 * Math.sin(rad);
            return (
              <ellipse
                key={`leaf-${i}`}
                cx={cx}
                cy={cy}
                rx={8}
                ry={18}
                fill="hsl(145, 25%, 55%)"
                opacity={0.5}
                transform={`rotate(${angle + 45}, ${cx}, ${cy})`}
              />
            );
          })}
        </svg>
      </div>
      
      {/* Inner ring */}
      <div className="absolute inset-[15%] animate-spin-reverse-slow">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {innerPetals.map((_, i) => {
            const angle = (i * 360) / innerPetals.length;
            const rad = (angle * Math.PI) / 180;
            const cx = 150 + 110 * Math.cos(rad);
            const cy = 150 + 110 * Math.sin(rad);
            return (
              <g key={i}>
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={18}
                  ry={28}
                  fill="hsl(38, 50%, 80%)"
                  opacity={0.5}
                  transform={`rotate(${angle}, ${cx}, ${cy})`}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill="hsl(350, 40%, 65%)"
                  opacity={0.6}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default FloralWreath;
