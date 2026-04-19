import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Scale, Building2, Layers, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import resourcesImg from "@/assets/resources.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Tax, Legal & Compliance | Bizwise Consultants" },
      { name: "description", content: "Reference resources covering Income Tax, Sales Tax, Services Tax, Companies Act and more in Pakistan." },
      { property: "og:title", content: "Resources — Bizwise Consultants" },
      { property: "og:description", content: "Curated tax and legal references for Pakistani businesses." },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  { icon: FileText, title: "Income Tax", desc: "Income Tax Ordinance updates, rates, slabs and filing guides." },
  { icon: BookOpen, title: "Sales Tax", desc: "Federal and provincial sales tax laws, returns and notifications." },
  { icon: Layers, title: "Services Tax", desc: "Sindh, Punjab, KPK and Balochistan services tax frameworks." },
  { icon: Building2, title: "Companies Act", desc: "SECP regulations, company incorporation and statutory compliance." },
  { icon: Scale, title: "Others", desc: "Labour laws, FBR circulars, customs and SBP regulatory updates." },
];

function ResourcesPage() {
  return (
    <>
      <section className="relative gradient-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={resourcesImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-page relative text-center animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">Resources</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Knowledge at your fingertips</h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Curated guides, updates and references on Pakistan's tax and legal landscape.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Browse by category" title="Tax, legal & compliance references" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <a
                key={r.title}
                href="#"
                style={{animationDelay:`${i*80}ms`}}
                className="group bg-card rounded-2xl p-7 shadow-soft hover-lift animate-fade-up relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand/10 group-hover:bg-brand/20 transition-smooth" />
                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-brand">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:scale-125 transition-smooth" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
