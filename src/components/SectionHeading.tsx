type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} animate-fade-up`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
