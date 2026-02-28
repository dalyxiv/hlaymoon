const FooterSection = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-background to-cream/60 text-center">
      <div className="container mx-auto px-4">
        <p className="font-script text-3xl text-primary mb-2">Ayman & Hla</p>
        <p className="font-body text-sm text-muted-foreground">
          Made with love • April 2025
        </p>
        <div className="mt-6 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="8" height="8" viewBox="0 0 20 20" className="opacity-40">
              <ellipse cx="10" cy="10" rx="8" ry="5" fill="hsl(350, 40%, 65%)" />
            </svg>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
