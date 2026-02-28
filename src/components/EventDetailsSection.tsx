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
          className="font-heading text-4xl md:text-5xl text-center text-foreground mb-4"
        >
          Celebrate With Us
        </motion.h2>
        <p className="text-center font-body text-muted-foreground mb-16">We would be honored by your presence</p>

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
            <h3 className="font-heading text-2xl text-foreground mb-6">Wedding Ceremony</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-rose" />
                <span className="font-body">April 25, 2025</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-rose" />
                <span className="font-body">6:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-rose" />
                <span className="font-body">Cairo, Egypt</span>
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
            {/* Arch-shaped frame */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-champagne/60 shadow-lg h-full min-h-[300px]">
              {/* Floral border decoration */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-champagne/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-champagne/30 to-transparent" />
              </div>
              
              {/* Stylized map background */}
              <div className="absolute inset-0 bg-cream flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blush/40 flex items-center justify-center animate-float">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground mb-2">Cairo, Egypt</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Venue details coming soon
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-4 italic">
                    On the banks of the eternal Nile
                  </p>
                </div>
              </div>
              
              {/* Corner floral decorations */}
              <svg className="absolute top-2 left-2 w-12 h-12 opacity-30" viewBox="0 0 50 50">
                <circle cx="10" cy="10" r="6" fill="hsl(350, 40%, 65%)" />
                <circle cx="20" cy="6" r="4" fill="hsl(5, 45%, 85%)" />
                <circle cx="6" cy="20" r="4" fill="hsl(145, 20%, 60%)" />
              </svg>
              <svg className="absolute bottom-2 right-2 w-12 h-12 opacity-30 rotate-180" viewBox="0 0 50 50">
                <circle cx="10" cy="10" r="6" fill="hsl(350, 40%, 65%)" />
                <circle cx="20" cy="6" r="4" fill="hsl(5, 45%, 85%)" />
                <circle cx="6" cy="20" r="4" fill="hsl(145, 20%, 60%)" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Dresscode / note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-script text-2xl text-primary">
            "Two souls, one heart, one forever"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
