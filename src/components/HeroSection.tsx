import { motion } from 'framer-motion';
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
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
        {/* Welcome script */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-script text-4xl md:text-6xl text-white mb-6 drop-shadow-lg"
        >
          Welcome
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-elegant text-lg md:text-xl text-white/90 tracking-[0.3em] uppercase mb-12 drop-shadow-md"
        >
          You're cordially invited to
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="space-y-2 mb-12"
        >
          <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight tracking-[0.15em] drop-shadow-lg">
            HLA
          </h1>
          <span className="font-elegant text-2xl md:text-3xl text-white/80 italic block drop-shadow-md">and</span>
          <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight tracking-[0.15em] drop-shadow-lg">
            AYMAN'S
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-4 space-y-6"
        >
          <p className="font-heading text-2xl md:text-3xl text-white tracking-[0.25em] uppercase drop-shadow-lg">
            Wedding
          </p>
          <div className="space-y-3">
            <p className="font-elegant text-lg text-white/80 italic drop-shadow-md">at</p>
            <p className="font-heading text-base md:text-lg text-white tracking-[0.15em] uppercase drop-shadow-md">
              Le Passage Hotel
            </p>
            <p className="font-heading text-base md:text-lg text-white tracking-[0.15em] uppercase drop-shadow-md">
              Cairo International Airport
            </p>
          </div>
          <div className="pt-4 space-y-2">
            <p className="font-elegant text-base text-white/80 tracking-[0.2em] uppercase drop-shadow-md">
              Friday, April Third
            </p>
            <p className="font-elegant text-base text-white/80 tracking-[0.15em] drop-shadow-md">
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
          className="mt-14 animate-pulse-glow bg-primary text-primary-foreground font-heading text-lg px-10 py-4 rounded-full 
                     hover:scale-105 transition-transform duration-300 tracking-[0.2em] uppercase"
        >
          Celebrate With Us
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;