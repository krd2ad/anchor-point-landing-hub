import { Button } from "@/components/ui/button";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center bg-accent text-accent-foreground overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent via-navy-light to-accent opacity-90" />

    <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-center max-w-4xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
        Flexible, Relationship-Driven Capital for Real Estate Operators
      </h1>
      <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
        Founded by experienced real estate investors, Anchor Point Lending provides
        disciplined, reliable capital for borrowers who need a steady partner in a fast-moving market.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base rounded-md"
        >
          <a href="#solutions">Explore Solutions</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white px-8 text-base rounded-md"
        >
          <a href="#team">Contact Us</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
