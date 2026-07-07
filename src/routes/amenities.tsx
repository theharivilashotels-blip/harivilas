import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import spa from "../assets/spa.jpg";
import pool from "../assets/pool.jpg";
import wedding from "../assets/wedding.jpg";
import dining from "../assets/dining.jpg";
import { Waves, Sparkles, Dumbbell, Users, Baby, Car } from "lucide-react";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities & Experiences — The Hari Vilas" },
      { name: "description", content: "Vilas Spa, palace pool, wellness studio, kids' club, concierge and airport transfers at The Hari Vilas." },
      { property: "og:title", content: "Amenities & Experiences — The Hari Vilas" },
      { property: "og:image", content: spa },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

const items = [
  { icon: Sparkles, img: spa, title: "Vilas Spa & Wellness", hours: "8 am – 10 pm", desc: "Ayurvedic therapies, hammam, and signature couple's rituals in candlelit stone suites carved into the palace walls." },
  { icon: Waves, img: pool, title: "Palace Pool", hours: "6 am – 9 pm", desc: "Twenty-eight metres of clear turquoise water, flanked by arched colonnades and cabanas that seem to hover over the courtyard." },
  { icon: Dumbbell, img: spa, title: "Wellness Studio", hours: "24 hours", desc: "Technogym equipment, private trainers on request, and sunrise yoga on the ramparts three mornings a week." },
  { icon: Users, img: wedding, title: "Banquet & Event Halls", hours: "By appointment", desc: "Three grand halls and two open-air venues, from intimate gatherings of thirty to celebrations of three hundred." },
  { icon: Baby, img: dining, title: "Little Vilas Kids' Club", hours: "9 am – 8 pm", desc: "Storytelling, craft, palace treasure hunts and film nights — supervised by our beloved nannies." },
  { icon: Car, img: pool, title: "Concierge & Transfers", hours: "24 hours", desc: "Airport chauffeurs, lake sunset cruises, City Palace tours and dinners in secret courtyards — all arranged." },
];

function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="A palace of quiet indulgences"
        subtitle="Everything you might wish for, and a few things you didn't know you'd love."
        image={spa}
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2 md:px-8 md:py-32">
        {items.map(({ icon: Icon, img, title, hours, desc }) => (
          <article key={title} className="group overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-1 hover:shadow-luxe">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={img} alt={title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-maroon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">{title}</h2>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{hours}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
