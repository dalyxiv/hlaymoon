import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2025-04-25T18:00:00');

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  // Rotating petal ring
  const petalCount = 16;

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-cream/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-4"
        >
          Counting Down to Forever
        </motion.h2>
        <p className="font-body text-muted-foreground mb-16">Every moment brings us closer</p>

        {/* Timer with petal ring */}
        <div className="relative inline-block">
          {/* Rotating petal ring */}
          <div className="absolute -inset-12 animate-spin-slow opacity-40">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {Array.from({ length: petalCount }).map((_, i) => {
                const angle = (i * 360) / petalCount;
                const rad = (angle * Math.PI) / 180;
                const cx = 200 + 180 * Math.cos(rad);
                const cy = 200 + 180 * Math.sin(rad);
                return (
                  <ellipse
                    key={i}
                    cx={cx}
                    cy={cy}
                    rx={12}
                    ry={20}
                    fill={i % 2 === 0 ? 'hsl(350, 40%, 65%)' : 'hsl(38, 50%, 80%)'}
                    opacity={0.6}
                    transform={`rotate(${angle}, ${cx}, ${cy})`}
                  />
                );
              })}
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex gap-4 md:gap-8"
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border border-border shadow-lg"
              >
                <span className="font-script text-3xl md:text-5xl text-primary">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-body text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-widest">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
