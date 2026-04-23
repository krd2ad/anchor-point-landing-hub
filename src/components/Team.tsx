import { useState } from "react";
import { Phone, Mail, Linkedin, Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import riversPhoto from "@/assets/rivers.png";
import samPhoto from "@/assets/sam-headshot.png"; // or "@/assets/sam-headshot.png" if you use a new filename

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

const Team = () => {
  const [copiedValue, setCopiedValue] = useState("");

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => setCopiedValue(""), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Questions? Or want to get started? Get in touch with the people behind
            Anchor Point Lending.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {members.map((m) => (
            <div
              key={m.email}
              className="rounded-2xl border bg-background p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={m.photo} alt={`${m.name} headshot`} className="object-cover" />
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="text-2xl font-semibold">{m.name}</h3>
                  <p className="text-muted-foreground">{m.title}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 rounded-xl border px-4 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Phone
                      </p>
                      <p className="text-sm font-medium break-all">{m.phone}</p>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(m.phone)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {copiedValue === m.phone ? "Copied" : "Copy"}
                  </Button>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl border px-4 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <p className="text-sm font-medium break-all">{m.email}</p>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(m.email)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {copiedValue === m.email ? "Copied" : "Copy"}
                  </Button>
                </div>

                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4 mr-2 text-primary" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
