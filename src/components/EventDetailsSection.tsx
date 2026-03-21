import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Heart } from 'lucide-react';

const EventDetailsSection = () => {
  return (
    <section id="event-details" className="py-24 bg-gradient-to-b from-blush/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center text-foreground mb-2 tracking-[0.15em]"
        >
          Celebrate With Us
        </motion.h2>
        <p className="text-center font-elegant text-lg text-muted-foreground mb-4 italic">
          We are delighted to celebrate this special day with you 🤍
        </p>
        <p className="text-center font-body text-muted-foreground mb-16">
          Together with our loved ones, we invite you to our wedding celebration
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/70 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg text-center group hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-6 tracking-[0.1em]">Wedding Celebration</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-rose" />
                <span className="font-body">Friday, April 3rd, 2026</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-rose" />
                <span className="font-body">From 5:00 PM Sharp</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-rose" />
                <span className="font-body">Le Passage Hotel, Cairo International Airport</span>
              </div>
              <div className="mt-4 px-4 py-2 rounded-xl bg-blush/30 border border-border">
                <p className="font-body text-sm text-muted-foreground">
                  Kindly note: This will be an adults-only celebration 🤍
                </p>
                <p className="font-body text-sm text-primary font-semibold mt-1">
                  ⚠️ Kids are not allowed ⚠️
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-mauve/30 shadow-lg h-full min-h-[300px]">
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-mauve/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-mauve/20 to-transparent" />
              </div>
              
              <div className="absolute inset-0 bg-cream flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blush/40 flex items-center justify-center animate-float">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground mb-2 tracking-[0.1em]">Le Passage Hotel</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Cairo International Airport
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-4 italic">
                    Friday, April 3rd, 2026 • 5:00 PM
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ZqiGkZ5sdgsjJED18?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground font-heading text-sm tracking-[0.15em] uppercase hover:scale-105 transition-transform duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Corner floral decorations */}
              <svg className="absolute top-2 left-2 w-12 h-12 opacity-30" viewBox="0 0 50 50">
                <ellipse cx="12" cy="12" rx="8" ry="4" fill="hsl(320, 60%, 55%)" transform="rotate(-30, 12, 12)" />
                <ellipse cx="12" cy="12" rx="8" ry="4" fill="hsl(320, 60%, 55%)" transform="rotate(30, 12, 12)" />
                <ellipse cx="20" cy="6" rx="6" ry="3" fill="hsl(280, 35%, 50%)" />
                <ellipse cx="6" cy="20" rx="8" ry="4" fill="hsl(145, 35%, 45%)" transform="rotate(45, 6, 20)" />
              </svg>
              <svg className="absolute bottom-2 right-2 w-12 h-12 opacity-30 rotate-180" viewBox="0 0 50 50">
                <ellipse cx="12" cy="12" rx="8" ry="4" fill="hsl(320, 60%, 55%)" transform="rotate(-30, 12, 12)" />
                <ellipse cx="12" cy="12" rx="8" ry="4" fill="hsl(320, 60%, 55%)" transform="rotate(30, 12, 12)" />
                <ellipse cx="20" cy="6" rx="6" ry="3" fill="hsl(280, 35%, 50%)" />
                <ellipse cx="6" cy="20" rx="8" ry="4" fill="hsl(145, 35%, 45%)" transform="rotate(45, 6, 20)" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Inviting quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-script text-2xl md:text-3xl text-primary">
            "Our love story brought us here, but it's your love and support that make this day unforgettable"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;