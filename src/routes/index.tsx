import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Waves, Utensils, Sparkles, Wifi, Car, Dumbbell,
  Star, MapPin, ArrowRight, Quote,
} from "lucide-react";
import heroExterior from "../assets/hero-exterior.jpg";
import roomMaharaja from "../assets/room-maharaja.jpg";
import roomDeluxe from "../assets/room-deluxe.jpg";
import roomPoolVilla from "../assets/room-pool-villa.jpg";
import dining from "../assets/dining.jpg";
import spa from "../assets/spa.jpg";
import pool from "../assets/pool.jpg";
import wedding from "../assets/wedding.jpg";
import { BookingWidget } from "../components/site/BookingWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Hari Vilas Hotel — Royal Heritage Luxury in Udaipur" },
      {
        name: "description",
        content:
          "Step into The Hari Vilas — a 5-star heritage palace hotel in Udaipur. Regal suites, palace dining, spa rituals, and cinematic experiences.",
      },
    ],
  }),
  component: Home,
});

const rooms = [
  { name: "Deluxe Heritage Room", img: roomDeluxe, size: "42 m²", bed: "King Bed", price: 14500, desc: "Warm arches, marble floors and a private balcony above the courtyard." },
  { name: "Maharaja Suite", img: roomMaharaja, size: "78 m²", bed: "Canopy King", price: 32000, desc: "A canopy of ivory silk, hand-painted ceilings and a personal butler." },
  { name: "Private Pool Villa", img: roomPoolVilla, size: "120 m²", bed: "Four-Poster King", price: 58000, desc: "A plunge pool at the edge of the terrace, watched over by sandstone columns." },
];

const amenities = [
  { icon: Waves, label: "Palace Pool" },
  { icon: Sparkles, label: "Vilas Spa" },
  { icon: Utensils, label: "Fine Dining" },
  { icon: Dumbbell, label: "Wellness Studio" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Car, label: "Chauffeur Service" },
];

const testimonials = [
  { name: "Aditi & Rohan Mehra", city: "Mumbai", stars: 5, quote: "A dream. From the marigold welcome to the moonlit dinner in the courtyard, every moment felt cinematic." },
  { name: "James Whitfield", city: "London", stars: 5, quote: "The most soulful hotel I've stayed in. Staff remember your name, your tea, your story." },
  { name: "Sofía Álvarez", city: "Madrid", stars: 5, quote: "Design, service, food — all in perfect harmony. We're already planning our return." },
];

function Home() {
  return (
    <>
      <Hero />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <BookingWidget floating />
      </div>
      <Welcome />
      <FeaturedRooms />
      <Amenities />
      <WhyUs />
      <Experiences />
      <Testimonials />
      <GalleryStrip />
      <OffersPreview />
      <LocationCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroExterior}
        alt="The Hari Vilas palace at twilight"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/50 via-maroon-deep/30 to-maroon-deep/85" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="fade-up mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold-soft">
          <span className="h-px w-10 bg-gold" /> Udaipur, Rajasthan <span className="h-px w-10 bg-gold" />
        </p>
        <h1
          className="fade-up font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: "150ms" }}
        >
          The Hari Vilas
        </h1>
        <p
          className="fade-up mt-6 max-w-xl text-base text-ivory/85 md:text-lg"
          style={{ animationDelay: "300ms" }}
        >
          A living palace where royal Indian hospitality meets timeless modern luxury. Your escape begins the moment you arrive.
        </p>
        <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "450ms" }}>
          <a
            href="#rooms"
            className="btn-gold rounded-sm px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Discover the Suites
          </a>
          <Link
            to="/about"
            className="rounded-sm border border-ivory/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory transition hover:border-gold hover:text-gold"
          >
            Our Story
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60">
          <div className="mx-auto h-10 w-px animate-pulse bg-gold/70" />
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em]">Scroll</p>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Welcome</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            A palace with a heartbeat.
          </h2>
          <div className="divider-motif my-6 max-w-[10rem] justify-start"><span>◆</span></div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Carved from Rajasthani sandstone in 1897 and reborn as a private retreat, The Hari Vilas holds
            the hush of royal courtyards and the warmth of an old friend's home. Ninety-two rooms and suites,
            three restaurants, one legendary spa — and a staff who will remember your tea before you do.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Fact k="128" v="Years of legacy" />
            <Fact k="92" v="Rooms & suites" />
            <Fact k="4.9" v="Guest rating" />
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src={roomMaharaja}
              alt="Maharaja suite interior"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-gold bg-background p-5 shadow-luxe md:block">
            <p className="font-serif text-2xl text-maroon">Est. 1897</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Heritage grade I</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-maroon">{k}</p>
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{v}</p>
    </div>
  );
}

function FeaturedRooms() {
  return (
    <section id="rooms" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Rooms & Suites</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Chambers fit for royalty</h2>
          </div>
          <Link to="/rooms" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
            All accommodations <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((r) => (
            <article key={r.name} className="group overflow-hidden rounded-sm border border-border bg-card transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{r.size} · {r.bed}</p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
                    <p className="font-serif text-2xl text-maroon">₹{r.price.toLocaleString()}<span className="text-sm text-muted-foreground"> / night</span></p>
                  </div>
                  <Link
                    to="/rooms"
                    className="rounded-sm border border-maroon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-ivory"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">The Vilas Experience</p>
        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Everything, thoughtfully considered</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex flex-col items-center rounded-sm border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-maroon transition group-hover:border-gold group-hover:bg-gold/10">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm font-medium text-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function useCounter(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.round(target * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return value;
}

function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stats = [
    { n: 128, label: "Years of hospitality" },
    { n: 92, label: "Rooms & suites" },
    { n: 250000, label: "Guests welcomed" },
    { n: 34, label: "International awards" },
  ];
  return (
    <section ref={ref} className="relative overflow-hidden bg-maroon-deep py-24 text-ivory md:py-32">
      <img src={pool} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Why choose us</p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">A legacy, still writing itself</h2>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => {
            const v = useCounter(s.n, visible);
            return (
              <div key={s.label} className="text-center">
                <p className="text-gold-shimmer font-serif text-5xl md:text-6xl">
                  {v.toLocaleString()}{s.n >= 1000 && v === s.n ? "+" : ""}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ivory/70">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  const items = [
    { img: dining, tag: "Dining", title: "A table by candlelight", desc: "Three restaurants. Local flavors, world plates, and a rooftop bar with a view of the lake." },
    { img: spa, tag: "Vilas Spa", title: "Ancient rituals, modern calm", desc: "Ayurvedic therapies, hammam and signature couple's suites carved into the palace walls." },
    { img: wedding, tag: "Celebrations", title: "Weddings written in gold", desc: "Courtyards, gardens and grand halls for gatherings of thirty to three hundred." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Experiences</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl text-foreground md:text-5xl">Days that turn into stories</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="group relative overflow-hidden rounded-sm">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={it.img} alt={it.title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">{it.tag}</p>
              <h3 className="mt-2 font-serif text-2xl">{it.title}</h3>
              <p className="mt-2 text-sm text-ivory/80">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Guest voices</p>
        <Quote className="mx-auto mt-6 h-10 w-10 text-gold" />
        <p key={i} className="fade-up mt-6 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
          "{t.quote}"
        </p>
        <div className="mt-6 flex justify-center gap-1 text-gold">
          {Array.from({ length: t.stars }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-maroon">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.city}</p>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              aria-label={`Testimonial ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const imgs = [roomDeluxe, dining, pool, spa, wedding, roomPoolVilla];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto mb-10 max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">@thehariviías</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">From the palace, lately</h2>
          </div>
          <Link to="/gallery" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
            Full gallery <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-6">
        {imgs.map((src, i) => (
          <div key={i} className="group aspect-square overflow-hidden">
            <img src={src} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </section>
  );
}

function OffersPreview() {
  const offers = [
    { tag: "Honeymoon", title: "The Two of You", desc: "3 nights, private candlelit dinner, couple's spa ritual and late checkout.", price: "₹58,000" },
    { tag: "Family", title: "Palace Playdays", desc: "Interconnecting rooms, kids' welcome hamper, complimentary breakfast.", price: "₹42,000" },
    { tag: "Long Stay", title: "The Slow Escape", desc: "Stay 5, pay for 4. Yoga sunrises, curated Udaipur excursions.", price: "₹1,20,000" },
  ];
  return (
    <section className="bg-maroon-deep py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Offers & Packages</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Reasons to stay a little longer</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div key={o.title} className="rounded-sm border border-ivory/15 bg-ivory/[0.03] p-8 transition hover:border-gold">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{o.tag}</p>
              <h3 className="mt-3 font-serif text-2xl">{o.title}</h3>
              <p className="mt-3 text-sm text-ivory/75">{o.desc}</p>
              <div className="mt-8 flex items-end justify-between">
                <p className="font-serif text-2xl text-gold-soft">{o.price}</p>
                <Link to="/offers" className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory hover:text-gold">
                  Book →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Find Us</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">On the edge of Lake Pichola</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            A five-minute drive from the City Palace, twenty from Maharana Pratap Airport. Our chauffeur can meet you at the gate.
          </p>
          <div className="mt-6 flex items-start gap-3 text-sm text-foreground">
            <MapPin className="mt-0.5 h-5 w-5 text-gold" />
            Palace Road, Old City, Udaipur, Rajasthan 313001
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Udaipur"
              target="_blank"
              rel="noreferrer"
              className="btn-gold rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Get directions
            </a>
            <Link to="/contact" className="rounded-sm border border-maroon px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-maroon hover:bg-maroon hover:text-ivory">
              Speak to concierge
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
          <iframe
            title="The Hari Vilas location"
            src="https://www.google.com/maps?q=Udaipur+Rajasthan&output=embed"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
