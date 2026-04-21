import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  FileCheck,
  BarChart3,
  TrendingUp,
  Scale,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import svcAccounting from "@/assets/svc-accounting.jpg";
import svcTax from "@/assets/svc-tax.jpg";
import svcFinancial from "@/assets/svc-financial.jpg";
import svcDecision from "@/assets/svc-decision.jpg";
import svcLegal from "@/assets/svc-legal.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Accounting, Taxation & Advisory | Bizwise Consultants" },
      {
        name: "description",
        content:
          "Accounting, taxation, financial management, decision support and legal & secretarial services for SMEs in Karachi, Pakistan.",
      },
      { property: "og:title", content: "Services — Bizwise Consultants" },
      {
        property: "og:description",
        content: "End-to-end consulting services tailored for SMEs and startups.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    img: svcAccounting,
    items: [
      "Remote Bookkeeping",
      "ERP & Software Implementation",
      "Monthly Financial Reporting",
      "Accounts Payable & Receivable",
      "Bank Reconciliation",
    ],
  },
  {
    icon: FileCheck,
    title: "Taxation Services",
    img: svcTax,
    items: [
      "Monthly GST / PST Returns",
      "Annual Tax Filing",
      "Tax Representation",
      "FBR Notices Handling",
      "Withholding Tax Compliance",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Management",
    img: svcFinancial,
    items: [
      "Financial Analysis & KPIs",
      "Cash Flow Management",
      "Resource Optimization",
      "Budgeting & Forecasting",
      "Profitability Reviews",
    ],
  },
  {
    icon: TrendingUp,
    title: "Decision Support",
    img: svcDecision,
    items: [
      "Investment Analysis",
      "Business Valuation",
      "Strategic Planning",
      "Feasibility Studies",
      "M&A Advisory",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Secretarial",
    img: svcLegal,
    items: [
      "Company Incorporation",
      "SECP Compliance",
      "Legal Documentation",
      "Board Resolutions",
      "Statutory Filings",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-page text-center animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">
            Solutions for every stage of growth
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Five practice areas, one trusted partner — to keep your finances sharp and compliance
            airtight.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative animate-fade-up">
                <div className="absolute -inset-3 gradient-brand rounded-3xl opacity-20 blur-xl" />
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="relative rounded-2xl shadow-elegant w-full"
                />
              </div>
              <div className="animate-fade-up">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-brand">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold">{s.title}</h2>
                <ul className="mt-6 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-105"
                >
                  Request Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Request Form */}
      <section id="request" className="py-24 bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service Request"
            title="Tell us what you need"
            subtitle="Fill the form and our team will reach out within 24 hours."
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch shortly.");
            }}
            className="mt-12 max-w-3xl mx-auto bg-card rounded-3xl shadow-elegant p-8 md:p-10 grid md:grid-cols-2 gap-5 animate-fade-up"
          >
            <Field label="Name" name="name" />
            <Field label="Business Name" name="business" />
            <Field label="Email" type="email" name="email" />
            <Field label="Mobile" name="mobile" />
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Service Description
              </label>
              <textarea
                required
                rows={5}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-smooth"
                placeholder="Tell us briefly about your requirement..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-[1.02]"
              >
                Submit Request <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-smooth"
      />
    </div>
  );
}
