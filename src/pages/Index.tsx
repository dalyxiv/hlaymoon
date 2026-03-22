import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import LoveStorySection from '@/components/LoveStorySection';
import EventDetailsSection from '@/components/EventDetailsSection';
import FooterSection from '@/components/FooterSection';
import FallingPetals from '@/components/FallingPetals';
import EnvelopeIntro from '@/components/EnvelopeIntro';

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <>
      <EnvelopeIntro onOpen={() => setEnvelopeOpened(true)} isOpen={envelopeOpened} />
      {envelopeOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen"
        >
          <FallingPetals />
          <HeroSection />
          <CountdownSection />
          <LoveStorySection />
          <EventDetailsSection />
          <FooterSection />
        </motion.div>
      )}
    </>
  );
};

export default Index;
