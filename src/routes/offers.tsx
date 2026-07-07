import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Calendar, Check } from "lucide-react";
import wedding from "../assets/wedding.jpg";
import roomPoolVilla from "../assets/room-pool-villa.jpg";
import roomDeluxe from "../assets/room-deluxe.jpg";
import spa from "../assets/spa.jpg";
import dining from "../assets/dining.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Packages — The Hari Vilas" },
      { name: "description", content: "Honeymoon, family, long-stay and seasonal packages at The Hari Vilas Hotel, Udaipur." },
      { property: "og:title", content: "Offers & Packages — The Hari Vilas" },
      { property: "og:image", content: roomPoolVilla },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});

const offers = [
  {
    img: roomPoolVilla, tag: "Honeymoon", title: "The Two of You", price: "₹58,000",
    validity: "Valid through Mar 2027",
    perks: ["3 nights in a Pool Villa", "Private candlelit dinner", "Couple's spa ritual", "Late 4 pm checkout"],
  },
  {
    img: roomDeluxe, tag: "Family", title: "Palace Playdays", price: "₹42,000",
    validity: "Valid on family weekends",
    perks: ["Two interconnecting rooms", "Kids' welcome hamper", "Daily breakfast for four", "Kids' club access"],
  },
  {
    img: spa, tag: "Wellness", title: "The Vilas Reset", price: "₹65,000",
    validity: "Year-round",
    perks: ["4 nights heritage room", "3 signature spa treatments", "Sunrise yoga daily", "Ayurvedic dining plan"],
  },
  {
    img: dining, tag: "Long Stay", title: "The Slow Escape", price: "₹1,20,000",
    validity: "Stay 5, pay for 4",
    perks: ["5 nights, pay for 4", "Daily breakfast & one dinner", "Curated Udaipur excursion", "Airport transfers"],
  },
  {
    img: wedding, tag: "Celebration", title: "Written in Gold", price: "On request",
    validity: "Bespoke",
    perks: ["Full-palace weddings", "Dedicated planner", "Mandap & décor", "Guest room blocks"],
  },
];

function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Reasons to stay a little longer"
        subtitle="Thoughtfully composed escapes for honeymoons, families and slow travellers."
        image={roomPoolVilla}
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2 md:px-8 md:py-32 lg:grid-cols-3">
        {offers.map((o) => (
          <article key={o.title} className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-1 hover:shadow-luxe">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={o.img} alt={o.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{o.tag}</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground">{o.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-gold" /> {o.validity}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {o.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between">
                <p className="font-serif text-2xl text-maroon">{o.price}</p>
                <Link to="/contact" className="btn-gold rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                  Book
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
