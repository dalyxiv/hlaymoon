import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

const EnvelopeIntro = ({ onOpen, isOpen }: EnvelopeIntroProps) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onClick={onOpen}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[hsl(280,35%,25%)] via-[hsl(310,40%,30%)] to-[hsl(260,30%,20%)] cursor-pointer"
        >
          {/* Floating petals in background */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full opacity-20"
              style={{
                background: `hsl(${310 + i * 15}, 50%, 60%)`,
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          <div className="flex flex-col items-center gap-8">
            {/* Envelope */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="group"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Envelope body */}
                <svg width="280" height="200" viewBox="0 0 280 200" className="drop-shadow-2xl">
                  {/* Envelope back */}
                  <rect x="10" y="40" width="260" height="150" rx="8" fill="hsl(38, 50%, 88%)" stroke="hsl(38, 40%, 75%)" strokeWidth="1.5" />
                  
                  {/* Envelope flap (top) */}
                  <motion.path
                    d="M10,40 L140,120 L270,40"
                    fill="hsl(38, 45%, 82%)"
                    stroke="hsl(38, 40%, 75%)"
                    strokeWidth="1.5"
                    className="group-hover:fill-[hsl(38,50%,78%)] transition-colors"
                  />
                  
                  {/* Inner fold lines */}
                  <path d="M10,190 L140,120 L270,190" fill="none" stroke="hsl(38, 35%, 78%)" strokeWidth="1" opacity="0.5" />
                  
                  {/* Heart seal */}
                  <motion.g
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <circle cx="140" cy="85" r="18" fill="hsl(340, 60%, 55%)" />
                    <path
                      d="M132,82 C132,78 136,75 140,79 C144,75 148,78 148,82 C148,87 140,92 140,92 C140,92 132,87 132,82Z"
                      fill="hsl(0, 0%, 100%)"
                    />
                  </motion.g>

                  {/* Decorative flowers on corners */}
                  <circle cx="30" cy="55" r="4" fill="hsl(310, 50%, 65%)" opacity="0.6" />
                  <circle cx="250" cy="55" r="4" fill="hsl(310, 50%, 65%)" opacity="0.6" />
                  <circle cx="30" cy="175" r="4" fill="hsl(180, 40%, 55%)" opacity="0.6" />
                  <circle cx="250" cy="175" r="4" fill="hsl(180, 40%, 55%)" opacity="0.6" />

                  {/* Letter peeking out */}
                  <rect x="50" y="20" width="180" height="50" rx="4" fill="white" opacity="0.9" />
                  <text x="140" y="42" textAnchor="middle" fontFamily="'Great Vibes', cursive" fontSize="16" fill="hsl(310, 50%, 45%)">
                    Hla & Ayman
                  </text>
                  <text x="140" y="58" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="10" fill="hsl(260, 20%, 45%)" letterSpacing="2">
                    YOU'RE INVITED
                  </text>
                </svg>
              </motion.div>
            </motion.div>

            {/* Text below envelope */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-center space-y-3"
            >
              <p className="font-script text-3xl md:text-4xl text-white/90 drop-shadow-lg">
                You've received an invitation
              </p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-elegant text-base md:text-lg text-white/60 tracking-[0.3em] uppercase"
              >
                Tap to open
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeIntro;
