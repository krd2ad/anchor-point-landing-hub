import { Phone, Mail, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import riversPhoto from "@/assets/rivers.png";
import samPhoto from "@/assets/sam.png";

const members = [
  {
    name: "Sam",
    title: "Managing Partner",
    initials: "S",
    phone: "215.406.0472",
    email: "Sam@anchorpointlending.com",
    linkedin: "https://www.linkedin.com/in/sam-lichmira-70337136/",
    photo: samPhoto,
  },
  {
    name: "Rivers",
    title: "Managing Partner",
    initials: "R",
    phone: "504.214.5329",
    email: "Rivers@anchorpointlending.com",
    linkedin: "https://www.linkedin.com/in/rivers-fike-p-e-43b47213/",
    photo: riversPhoto,
  },
];

const Team = () => (
  <section id="team" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Questions? Or want to get started? Get in touch with the people behind Anchor Point Lending.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {members.map((m) => (
          <div
            key={m.name}
            className="bg-card rounded-lg border border-border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <Avatar className="h-20 w-20 mx-auto mb-5">
              <AvatarImage src={m.photo} alt={`${m.name} headshot`} className="object-cover" />
              <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-bold">
                {m.initials}
              </AvatarFallback>
            </Avatar>

            <h3 className="text-xl font-semibold text-card-foreground mb-1">{m.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{m.title}</p>

            <div className="flex items-center justify-center gap-4">
              <a
                href={`tel:${m.phone.replaceAll(".", "")}`}
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label={`Call ${m.name}`}
              >
                <Phone className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${m.email}`}
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label={`Email ${m.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label={`${m.name} LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
