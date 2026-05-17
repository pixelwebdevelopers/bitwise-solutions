import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  industry: string;
  challenge: string;
  solution: string;
  delay?: number;
}

export function IndustryCard({
  icon: Icon,
  industry,
  challenge,
  solution,
  delay = 0,
}: IndustryCardProps) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="group relative h-full overflow-hidden rounded-3xl bg-card border border-border/50 p-8 shadow-soft hover-lift animate-fade-up"
    >
      {/* Background Decor */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-smooth" />

      <div className="relative">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-brand transition-transform group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-foreground">{industry}</h3>

        <div className="mt-6 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand/70">
              The Challenge
            </span>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{challenge}</p>
          </div>

          <div className="pt-4 border-t border-border/50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              Our Solution
            </span>
            <p className="mt-1 text-sm text-foreground/90 font-medium leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
