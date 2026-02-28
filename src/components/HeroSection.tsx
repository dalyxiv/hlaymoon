import { motion } from 'framer-motion';
import FloralWreath from './FloralWreath';

const HeroSection = () => {
  const scrollToRSVP = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-floral-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-background to-blush/30" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
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
            >
              <h1 className="font-script text-5xl md:text-7xl text-primary leading-tight">
                Ayman
              </h1>
              <span className="font-script text-3xl md:text-4xl text-mauve">&</span>
              <h1 className="font-script text-5xl md:text-7xl text-primary leading-tight">
                Hla
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 space-y-3"
        >
          <p className="font-heading text-xl md:text-2xl text-foreground/80 tracking-widest uppercase">
            We're Getting Married!
          </p>
          <p className="font-body text-lg text-muted-foreground">
            April 2025 • Cairo, Egypt
          </p>
        </motion.div>

        {/* RSVP button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, type: 'spring', stiffness: 200 }}
          onClick={scrollToRSVP}
          className="mt-10 animate-float animate-pulse-glow bg-primary text-primary-foreground font-heading text-lg px-10 py-4 rounded-full 
                     hover:scale-105 transition-transform duration-300 tracking-wider uppercase"
        >
          ✿ RSVP ✿
        </motion.button>
      </div>

      {/* Decorative corner florals */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="15" cy="15" r="12" fill="hsl(350, 40%, 65%)" />
          <circle cx="35" cy="8" r="8" fill="hsl(5, 45%, 85%)" />
          <circle cx="8" cy="35" r="8" fill="hsl(145, 20%, 60%)" />
          <ellipse cx="25" cy="30" rx="10" ry="6" fill="hsl(38, 50%, 80%)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="15" cy="15" r="12" fill="hsl(350, 40%, 65%)" />
          <circle cx="35" cy="8" r="8" fill="hsl(5, 45%, 85%)" />
          <circle cx="8" cy="35" r="8" fill="hsl(145, 20%, 60%)" />
          <ellipse cx="25" cy="30" rx="10" ry="6" fill="hsl(38, 50%, 80%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
