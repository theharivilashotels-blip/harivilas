import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import dining from "../assets/dining.jpg";
import spa from "../assets/spa.jpg";
import pool from "../assets/pool.jpg";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — The Hari Vilas" },
      { name: "description", content: "Three signature restaurants and a rooftop bar at The Hari Vilas, Udaipur." },
      { property: "og:title", content: "Dining — The Hari Vilas" },
      { property: "og:image", content: dining },
      { property: "og:url", content: "/dining" },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),
  component: DiningPage,
});

const venues = [
  {
    img: dining,
    tag: "Signature",
    name: "Sheesh Mahal",
    cuisine: "Modern Rajasthani",
    hours: "7:00 – 11:00 pm",
    desc: "A candlelit hall of mirrors where royal recipes are quietly reinvented. Reservations recommended.",
    signature: "Laal maas with saffron pilaf",
  },
  {
    img: pool,
    tag: "All-day",
    name: "The Courtyard",
    cuisine: "International",
    hours: "6:30 am – 11:30 pm",
    desc: "An open-air brasserie under the arches — sunrise breakfasts, long lunches and unhurried dinners.",
    signature: "Wood-fired flatbreads",
  },
  {
    img: spa,
    tag: "Rooftop",
    name: "Suraj Bar",
    cuisine: "Cocktails & Small Plates",
    hours: "5:00 pm – 1:00 am",
    desc: "The lake, the sunset and a mezcal negroni in your hand. Live jazz on weekends.",
    signature: "The Vilas Sundowner",
  },
];

function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title="Three restaurants. One unforgettable table."
        subtitle="Whether it's laal maas by candlelight or an espresso in the courtyard, every meal here has a memory attached."
        image={dining}
      />
      <div className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:px-8 md:py-32">
        {venues.map((v, i) => (
          <article
            key={v.name}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-sm">
              <img src={v.img} alt={v.name} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">{v.tag}</p>
              <h2 className="mt-3 font-serif text-4xl text-foreground">{v.name}</h2>
              <p className="mt-2 text-sm italic text-muted-foreground">{v.cuisine}</p>
              <div className="divider-motif my-5 max-w-[8rem] justify-start"><span>◆</span></div>
              <p className="text-muted-foreground">{v.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
                <Clock className="h-4 w-4 text-gold" /> {v.hours}
              </div>
              <div className="mt-4 rounded-sm border border-gold/40 bg-secondary/40 p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Chef's signature</p>
                <p className="mt-1 font-serif text-lg text-foreground">{v.signature}</p>
              </div>
              <Link to="/contact" className="btn-gold mt-8 inline-flex rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]">
                Reserve a table
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
