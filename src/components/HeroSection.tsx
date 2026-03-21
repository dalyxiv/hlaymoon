import { motion } from 'framer-motion';
import FloralWreath from './FloralWreath';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  const scrollToRSVP = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Watercolor flower background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/30" />
      {/* Botanical leaf decorations */}
      <div className="absolute top-0 right-0 w-64 h-96 opacity-30">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <path d="M180,0 Q160,80 140,150 Q120,200 160,280 Q180,340 170,400" fill="none" stroke="hsl(145, 35%, 45%)" strokeWidth="3" />
          <ellipse cx="150" cy="80" rx="35" ry="18" fill="hsl(145, 35%, 45%)" opacity="0.6" transform="rotate(-30, 150, 80)" />
          <ellipse cx="165" cy="140" rx="30" ry="15" fill="hsl(145, 35%, 45%)" opacity="0.5" transform="rotate(20, 165, 140)" />
          <ellipse cx="145" cy="200" rx="38" ry="18" fill="hsl(145, 35%, 45%)" opacity="0.55" transform="rotate(-15, 145, 200)" />
          <ellipse cx="160" cy="270" rx="32" ry="16" fill="hsl(145, 35%, 45%)" opacity="0.45" transform="rotate(25, 160, 270)" />
          <ellipse cx="170" cy="340" rx="28" ry="14" fill="hsl(145, 35%, 45%)" opacity="0.4" transform="rotate(-10, 170, 340)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-96 opacity-30">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <path d="M20,400 Q40,320 60,250 Q80,200 40,120 Q20,60 30,0" fill="none" stroke="hsl(145, 35%, 45%)" strokeWidth="3" />
          <ellipse cx="50" cy="320" rx="35" ry="18" fill="hsl(145, 35%, 45%)" opacity="0.6" transform="rotate(30, 50, 320)" />
          <ellipse cx="35" cy="260" rx="30" ry="15" fill="hsl(145, 35%, 45%)" opacity="0.5" transform="rotate(-20, 35, 260)" />
          <ellipse cx="55" cy="200" rx="38" ry="18" fill="hsl(145, 35%, 45%)" opacity="0.55" transform="rotate(15, 55, 200)" />
          <ellipse cx="40" cy="130" rx="32" ry="16" fill="hsl(145, 35%, 45%)" opacity="0.45" transform="rotate(-25, 40, 130)" />
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Welcome script */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-script text-4xl md:text-6xl text-white mb-4 drop-shadow-lg"
        >
          Welcome
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-elegant text-lg md:text-xl text-white/90 tracking-[0.3em] uppercase mb-8 drop-shadow-md"
        >
          You're cordially invited to
        </motion.p>

        {/* Rotating floral wreath */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <FloralWreath size={420} />
          
          {/* Names inside wreath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="space-y-1"
            >
              <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight tracking-[0.15em] drop-shadow-lg">
                HLA
              </h1>
              <span className="font-elegant text-2xl md:text-3xl text-white/80 italic block drop-shadow-md">and</span>
              <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight tracking-[0.15em] drop-shadow-lg">
                AYMAN'S
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 space-y-4"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground tracking-[0.25em] uppercase">
            Wedding
          </p>
          <div className="space-y-2">
            <p className="font-elegant text-lg text-muted-foreground italic">at</p>
            <p className="font-heading text-base md:text-lg text-foreground tracking-[0.15em] uppercase">
              Le Passage Hotel
            </p>
            <p className="font-heading text-base md:text-lg text-foreground tracking-[0.15em] uppercase">
              Cairo International Airport
            </p>
          </div>
          <div className="pt-2 space-y-1">
            <p className="font-elegant text-base text-muted-foreground tracking-[0.2em] uppercase">
              Friday, April Third
            </p>
            <p className="font-elegant text-base text-muted-foreground tracking-[0.15em]">
              3/4/2026
            </p>
          </div>
        </motion.div>

        {/* RSVP button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, type: 'spring', stiffness: 200 }}
          onClick={scrollToRSVP}
          className="mt-10 animate-pulse-glow bg-primary text-primary-foreground font-heading text-lg px-10 py-4 rounded-full 
                     hover:scale-105 transition-transform duration-300 tracking-[0.2em] uppercase"
        >
          ✿ Celebrate With Us ✿
        </motion.button>
      </div>

      {/* Large decorative flower - center background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <svg viewBox="0 0 400 400" className="w-[80vmin] h-[80vmin]">
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60);
            return (
              <ellipse
                key={i}
                cx="200"
                cy="200"
                rx="160"
                ry="80"
                fill="hsl(320, 60%, 55%)"
                transform={`rotate(${angle}, 200, 200)`}
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;