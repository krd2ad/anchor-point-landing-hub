const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Anchor Point Lending
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Anchor Point Lending was founded with a clear mission: to provide real estate
              investors and developers with reliable, relationship-driven capital solutions.
              We believe that great projects deserve great partners—and that starts with
              trust, transparency, and speed.
            </p>
            <p>
              Our team brings decades of combined experience across private lending,
              commercial real estate, and structured finance. We understand that every deal
              is unique, and we take a hands-on approach to structuring loans that align
              with our borrowers' goals and timelines.
            </p>
            <p>
              Whether you're an experienced developer or closing your first investment
              property, Anchor Point Lending is here to help you move forward with
              confidence. We're not just a lender—we're a strategic partner invested in
              your success.
            </p>
          </div>
        </div>

        {/* Visual panel */}
        <div className="hidden lg:block">
          <div className="rounded-lg bg-accent h-80 flex items-center justify-center">
            <div className="text-center text-accent-foreground/60 px-8">
              <div className="text-6xl font-bold mb-2 text-accent-foreground/80">APL</div>
              <p className="text-sm">Anchor Point Lending</p>
              <p className="text-xs mt-1 text-accent-foreground/40">Capital · Trust · Execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
