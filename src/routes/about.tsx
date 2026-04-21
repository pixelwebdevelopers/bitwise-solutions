import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Globe, Target, Heart } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import about from "@/assets/about.jpg";
import whyUs from "@/assets/why-us.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Bizwise Consultants | 20+ Years of Financial Expertise" },
      {
        name: "description",
        content:
          "Led by Syed Khawar Raza Naqvi (CPA, MBA Finance) with 20+ years of experience in accounting, taxation and financial advisory in Pakistan.",
      },
      { property: "og:title", content: "About Bizwise Consultants" },
      {
        property: "og:description",
        content: "Two decades of experience helping SMEs grow with confidence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-page text-center animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            About Us
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Who We Are</h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Two decades of expertise dedicated to helping SMEs and entrepreneurs make confident
            financial decisions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-up">
            <img
              src={about}
              alt="Syed Khawar Raza Naqvi"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand text-brand-foreground px-6 py-4 rounded-2xl shadow-brand">
              <div className="text-3xl font-extrabold">CPA · MBA</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="Led by Syed Khawar Raza Naqvi"
              center={false}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Bizwise Consultants is led by{" "}
              <strong className="text-foreground">Syed Khawar Raza Naqvi (CPA, MBA Finance)</strong>
              , a seasoned finance professional with over 20 years of experience in accounting,
              taxation, regulatory compliance, and strategic financial advisory.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work side-by-side with founders, owners and finance teams to navigate complexity,
              control costs and unlock growth — across Pakistan and the UAE.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "20+ Years Experience",
                "SME Focused",
                "UAE Business Support",
                "Confidential & Ethical",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-lg bg-secondary/60 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand" />{" "}
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-page">
          <SectionHeading eyebrow="Our Values" title="What drives us every day" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Client First",
                desc: "Your success defines ours. Every engagement is a partnership.",
              },
              {
                icon: Target,
                title: "Precision",
                desc: "Numbers must be accurate, advice must be actionable.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We hold ourselves to international professional standards.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We embed with your team for outcomes, not just outputs.",
              },
              {
                icon: Globe,
                title: "Cross-Border",
                desc: "Local expertise in Pakistan with UAE business support.",
              },
              {
                icon: CheckCircle2,
                title: "Compliance",
                desc: "Stay ahead of regulators with proactive monitoring.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="bg-card rounded-2xl p-7 shadow-soft hover-lift animate-fade-up"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={whyUs}
              alt="Partnership"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 gradient-overlay flex items-center justify-center text-center px-6">
              <div className="text-white animate-fade-up">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Let's grow your business together
                </h3>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-md bg-brand px-7 py-3 font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
