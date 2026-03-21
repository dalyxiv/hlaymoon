import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  opacity: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  
  useEffect(() => {
    const colors = [
      'hsl(320, 60%, 55%)',
      'hsl(280, 35%, 50%)',
      'hsl(310, 50%, 55%)',
      'hsl(180, 40%, 40%)',
      'hsl(145, 35%, 45%)',
    ];
    
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 10,
      size: 6 + Math.random() * 10,
      color: colors[i % colors.length],
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute petal-fall"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationIterationCount: 'infinite',
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20">
            <ellipse cx="10" cy="10" rx="8" ry="5" fill={p.color} opacity={p.opacity} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;