import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Video, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/trainings")({
  head: () => ({
    meta: [
      { title: "Trainings & Learning — Accounting, Tax & Tools | Bizwise Consultants" },
      { name: "description", content: "Professional trainings in Accounting, Taxation, Auditing and tools like QuickBooks, Tally, Excel & Power BI. Learning support for ACCA, ICAP, ICMAP and PIPFA students." },
      { property: "og:title", content: "Trainings — Bizwise Consultants" },
      { property: "og:description", content: "Skill-building for finance professionals and students." },
    ],
  }),
  component: TrainingsPage,
});

function TrainingsPage() {
  return (
    <>
      <section className="relative gradient-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={training} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-page relative text-center animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">Trainings & Learning</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Build skills that pay dividends</h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Practical training for working professionals and structured learning for accountancy students.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up">
            <img src={training} alt="Training session" width={1400} height={900} loading="lazy" className="rounded-2xl shadow-elegant w-full" />
          </div>
          <div className="animate-fade-up">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-brand">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold">Professional Trainings</h2>
            <p className="mt-4 text-muted-foreground">Hands-on, role-relevant training delivered by practicing experts.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Accounting", "Taxation", "Auditing", "QuickBooks", "Tally", "Excel", "Power BI", "Financial Modeling"].map(t => (
                <div key={t} className="flex items-center gap-2 rounded-lg bg-secondary/60 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-page">
          <SectionHeading eyebrow="Students" title="Learning Opportunities" subtitle="Mentoring and resources for ACCA, ICAP, ICMAP and PIPFA aspirants." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Curriculum Coaching", desc: "Topic-by-topic coaching aligned with each body's syllabus." },
              { icon: Video, title: "Video Tutorials", desc: "On-demand lessons covering core concepts and case studies." },
              { icon: Award, title: "Exam Preparation", desc: "Mock exams, past paper drills and time-management strategies." },
            ].map((c, i) => (
              <div key={c.title} style={{animationDelay:`${i*100}ms`}} className="bg-card rounded-2xl p-7 shadow-soft hover-lift animate-fade-up">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-brand">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center animate-fade-up">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-105">
              Enroll or Enquire <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
