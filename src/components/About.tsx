const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Anchor Point Lending
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Anchor Point Lending was founded in 2023 by Rivers Fike and Sam Lichmira, whose partnership began years earlier when they met while studying abroad in Sydney. After building their own real estate investing experience and launching a joint venture together, they created Anchor Point to bring flexible, relationship-driven capital to operators like themselves.
            </p>
            <p>
              The firm was built to serve borrowers overlooked by traditional lenders and to offer investors access to disciplined, real estate-backed lending opportunities. The name reflects their goal: to be a steady, reliable capital partner in a fast-moving market.
            </p>
          </div>
        </div>

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
