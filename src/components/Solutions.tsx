import { Building2, Hammer, TrendingUp, Landmark } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Bridge Loans",
    description:
      "Short-term financing to bridge the gap between acquisition and permanent capital. Fast closings and flexible terms tailored to your timeline.",
  },
  {
    icon: Landmark,
    title: "Commercial",
    description:
      "Financing for income-producing commercial real estate including office, retail, multifamily, and mixed-use properties.",
  },
  {
    icon: Hammer,
    title: "Fix and Flip",
    description:
      "Capital for acquisition and renovation of residential properties. Quick approvals so you never miss a deal.",
  },
  {
    icon: Building2,
    title: "Ground-Up Construction",
    description:
      "Development financing from the ground up. We partner with experienced builders to fund new construction projects.",
  },
];

const Solutions = () => (
  <section id="solutions" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Solutions</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tailored lending products designed for every stage of the real estate investment lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg border border-border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
            <span className="mt-5 text-sm font-medium text-primary cursor-default">
              Learn More →
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
