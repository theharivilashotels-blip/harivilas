export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-24">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/60 to-maroon-deep/30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-8 md:pb-24">
        <p className="fade-up mb-4 text-xs uppercase tracking-[0.4em] text-gold-soft">{eyebrow}</p>
        <h1 className="fade-up max-w-3xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="fade-up mt-5 max-w-2xl text-base text-ivory/80 md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="divider-motif mt-8 max-w-xs">
          <span className="font-serif italic text-gold">◆</span>
        </div>
      </div>
    </section>
  );
}
