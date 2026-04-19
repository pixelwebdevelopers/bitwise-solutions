import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Briefcase, ShieldCheck, Users, TrendingUp, FileCheck, Scale, Calculator, BarChart3, Quote, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import whyUs from "@/assets/why-us.jpg";
import svcAccounting from "@/assets/svc-accounting.jpg";
import svcTax from "@/assets/svc-tax.jpg";
import svcFinancial from "@/assets/svc-financial.jpg";
import svcDecision from "@/assets/svc-decision.jpg";
import svcLegal from "@/assets/svc-legal.jpg";
import testimonialsImg from "@/assets/testimonials.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bizwise Consultants — Business with Confidence | Karachi, Pakistan" },
      { name: "description", content: "Expert financial, taxation, accounting and business consulting services tailored for SMEs and startups in Karachi, Pakistan." },
      { property: "og:title", content: "Bizwise Consultants — Business with Confidence" },
      { property: "og:description", content: "Expert financial, taxation and business consulting services in Karachi, Pakistan." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Calculator, title: "Accounting Services", desc: "Remote bookkeeping, ERP implementation and monthly financial reporting.", img: svcAccounting },
  { icon: FileCheck, title: "Taxation Services", desc: "Monthly GST/PST returns, annual tax filing and tax representation.", img: svcTax },
  { icon: BarChart3, title: "Financial Management", desc: "Financial analysis, cash flow management and resource optimization.", img: svcFinancial },
  { icon: TrendingUp, title: "Decision Support", desc: "Investment analysis, business valuation and strategic planning.", img: svcDecision },
  { icon: Scale, title: "Legal & Secretarial", desc: "Company incorporation, SECP compliance and legal documentation.", img: svcLegal },
];

const reasons = [
  { icon: ShieldCheck, title: "Integrity & Confidentiality", desc: "Your business data and strategy are guarded with the highest standards." },
  { icon: Award, title: "Ethical & Professional", desc: "Every engagement upholds international professional standards." },
  { icon: Users, title: "Tailored SME Solutions", desc: "Built around the realities and budgets of growing businesses." },
  { icon: Briefcase, title: "Cost & Time Efficient", desc: "Lower fixed costs while improving financial control and speed." },
];

const testimonials = [
  { name: "Ali Hassan", role: "CEO, Karachi Tech Co.", text: "Highly reliable financial consultants — they transformed our reporting and gave us real visibility into our numbers." },
  { name: "Sara Khan", role: "Founder, BloomRetail", text: "Helped us streamline our tax processes and stay fully compliant. We saved time and money in the first quarter." },
  { name: "Imran Aslam", role: "Director, AlphaTrade", text: "Professional and trustworthy service. Bizwise feels like an extension of our own finance team." },
  { name: "Maira Siddiqui", role: "COO, NovaLogistics", text: "Their strategic advice on cash flow and investment was a turning point for our expansion plans." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl animate-float" />

        <div className="container-page relative py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" /> Karachi, Pakistan
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Business with <span className="text-brand">Confidence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed">
              Expert financial, taxation, and business consulting services tailored for growing
              businesses. We turn complexity into clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-105">
                Get Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-smooth hover:bg-white/15">
                Our Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[{n:"20+",l:"Years"},{n:"500+",l:"Clients"},{n:"100%",l:"Confidential"}].map(s => (
                <div key={s.l}>
                  <div className="text-3xl font-extrabold text-brand">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in hidden lg:block">
            <div className="absolute -inset-4 gradient-brand rounded-3xl blur-2xl opacity-40" />
            <img src={hero} alt="Business consulting team meeting" width={1600} height={1024} className="relative rounded-2xl shadow-elegant" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-up">
            <div className="absolute -top-6 -left-6 h-40 w-40 gradient-brand rounded-2xl opacity-20" />
            <img src={about} alt="Senior consultant in office" width={1200} height={1200} loading="lazy" className="relative rounded-2xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand text-brand-foreground px-6 py-4 rounded-2xl shadow-brand">
              <div className="text-3xl font-extrabold">20+</div>
              <div className="text-xs uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="Confidence built on two decades of expertise" center={false} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Bizwise Consultants is led by <strong className="text-foreground">Syed Khawar Raza Naqvi (CPA, MBA Finance)</strong> with
              20+ years of experience in accounting, taxation, compliance, and financial advisory. We help businesses
              navigate financial complexities, optimize operations, and make informed decisions.
            </p>
            <ul className="mt-8 space-y-3">
              {["20+ Years Experience", "SME Focused Solutions", "UAE Business Support", "End-to-end Compliance"].map(t => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-secondary/40">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="We treat your business like our own" subtitle="Trust, expertise and a partnership-first mindset on every engagement." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={r.title} style={{ animationDelay: `${i * 100}ms` }} className="group relative bg-card rounded-2xl p-7 shadow-soft hover-lift animate-fade-up overflow-hidden">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand/10 group-hover:bg-brand/20 transition-smooth" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-brand">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 relative rounded-3xl overflow-hidden shadow-elegant animate-fade-up">
            <img src={whyUs} alt="Business partnership handshake" width={1200} height={900} loading="lazy" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 gradient-overlay flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-bold text-white text-center px-6">"We treat your business like our own."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What We Do" title="Comprehensive consulting services" subtitle="From bookkeeping to strategic advisory — built for SMEs and startups." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} style={{ animationDelay: `${i * 80}ms` }} className="group rounded-2xl overflow-hidden bg-card shadow-soft hover-lift animate-fade-up">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-brand">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={testimonialsImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-page relative">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trusted by businesses across Pakistan</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} style={{ animationDelay: `${i * 100}ms` }} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/10 transition-smooth animate-fade-up">
                <Quote className="h-8 w-8 text-brand" />
                <p className="mt-4 text-primary-foreground/90 leading-relaxed">{t.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-brand flex items-center justify-center font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-primary-foreground/60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-center shadow-elegant animate-scale-in">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Ready to grow with confidence?</h2>
              <p className="mt-4 text-white/90 max-w-xl mx-auto">Book a free initial consultation today. No obligation, just clarity.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 font-bold text-primary shadow-elegant transition-smooth hover:scale-105">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
