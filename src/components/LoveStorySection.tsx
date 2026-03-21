import { motion } from 'framer-motion';
import couplePhoto from '@/assets/couple-photo.png';

const milestones = [
  {
    title: 'The Day We Met',
    description: 'Two paths crossed and everything changed forever. What started as a chance encounter blossomed into something beautiful beyond words.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <circle cx="22" cy="30" r="14" fill="none" stroke="hsl(320, 60%, 55%)" strokeWidth="2.5" />
        <circle cx="38" cy="30" r="14" fill="none" stroke="hsl(280, 35%, 50%)" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'The Engagement',
    description: 'Under the golden light of a Cairo sunset, a question was asked and a forever was promised. The Nile witnessed our love story unfold.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <circle cx="30" cy="28" r="8" fill="none" stroke="hsl(40, 60%, 50%)" strokeWidth="2" />
        <circle cx="30" cy="20" r="4" fill="hsl(320, 60%, 55%)" opacity="0.8" />
        <path d="M20 36 Q30 20 40 36" fill="none" stroke="hsl(40, 60%, 50%)" strokeWidth="2" />
        <circle cx="18" cy="22" r="1.5" fill="hsl(40, 60%, 50%)" opacity="0.6" />
        <circle cx="42" cy="24" r="1" fill="hsl(40, 60%, 50%)" opacity="0.5" />
        <circle cx="36" cy="14" r="1.5" fill="hsl(40, 60%, 50%)" opacity="0.7" />
      </svg>
    ),
    image: couplePhoto,
  },
  {
    title: 'The Wedding Day',
    description: 'The best is yet to come! Join us as we celebrate the beginning of our forever journey together.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <path d="M18 42 L22 22 Q30 14 38 22 L42 42" fill="none" stroke="hsl(320, 60%, 55%)" strokeWidth="2" />
        <path d="M22 22 Q30 18 38 22" fill="none" stroke="hsl(145, 35%, 45%)" strokeWidth="1.5" />
        <circle cx="26" cy="38" r="2" fill="hsl(280, 35%, 50%)" />
        <circle cx="34" cy="38" r="2" fill="hsl(280, 35%, 50%)" />
        <line x1="26" y1="36" x2="26" y2="28" stroke="hsl(145, 35%, 45%)" strokeWidth="1" />
        <line x1="34" y1="36" x2="34" y2="28" stroke="hsl(145, 35%, 45%)" strokeWidth="1" />
      </svg>
    ),
  },
];

const LoveStorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream/50 to-blush/20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center text-foreground mb-4 tracking-[0.15em]"
        >
          Our Love Story
        </motion.h2>
        <p className="text-center font-elegant text-lg text-muted-foreground mb-16 italic">A journey written in the stars</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vine line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sage via-rose to-mauve md:-translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 bg-card border-2 border-rose rounded-full p-2 shadow-md">
                {milestone.icon}
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                }`}
              >
                <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-heading text-2xl text-primary mb-2">{milestone.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {milestone.description}
                  </p>
                  {milestone.image && (
                    <div className="mt-4 rounded-xl overflow-hidden border-2 border-mauve/30">
                      <img
                        src={milestone.image}
                        alt="Ayman and Hla's engagement"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative leaves */}
      <div className="absolute top-20 right-0 opacity-10 animate-float-gentle">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <ellipse cx="60" cy="60" rx="40" ry="20" fill="hsl(145, 35%, 45%)" transform="rotate(30, 60, 60)" />
          <ellipse cx="60" cy="60" rx="35" ry="15" fill="hsl(145, 35%, 45%)" transform="rotate(-20, 60, 60)" />
        </svg>
      </div>
    </section>
  );
};

export default LoveStorySection;