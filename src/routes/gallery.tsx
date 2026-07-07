import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroExterior from "../assets/hero-exterior.jpg";
import roomMaharaja from "../assets/room-maharaja.jpg";
import roomDeluxe from "../assets/room-deluxe.jpg";
import roomPoolVilla from "../assets/room-pool-villa.jpg";
import dining from "../assets/dining.jpg";
import spa from "../assets/spa.jpg";
import pool from "../assets/pool.jpg";
import wedding from "../assets/wedding.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Hari Vilas" },
      { name: "description", content: "Explore The Hari Vilas Hotel — rooms, dining, pool, spa, exteriors and events." },
      { property: "og:title", content: "Gallery — The Hari Vilas" },
      { property: "og:image", content: heroExterior },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Rooms" | "Dining" | "Pool" | "Spa" | "Events" | "Exterior";
const cats: Cat[] = ["All", "Rooms", "Dining", "Pool", "Spa", "Events", "Exterior"];

const photos: { src: string; cat: Cat; alt: string }[] = [
  { src: heroExterior, cat: "Exterior", alt: "Palace exterior at twilight" },
  { src: roomMaharaja, cat: "Rooms", alt: "Maharaja Suite" },
  { src: roomDeluxe, cat: "Rooms", alt: "Deluxe Heritage Room" },
  { src: roomPoolVilla, cat: "Rooms", alt: "Private Pool Villa" },
  { src: dining, cat: "Dining", alt: "Sheesh Mahal restaurant" },
  { src: pool, cat: "Pool", alt: "Palace pool at night" },
  { src: spa, cat: "Spa", alt: "Vilas Spa treatment room" },
  { src: wedding, cat: "Events", alt: "Wedding mandap" },
];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A palace, seen through many eyes"
        subtitle="Photographs from our courtyards, kitchens, spa and celebrations."
        image={heroExterior}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                active === c ? "border-maroon bg-maroon text-ivory" : "border-border text-muted-foreground hover:border-gold hover:text-maroon"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setLightbox(i)}
              className="group aspect-square overflow-hidden rounded-sm"
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-maroon-deep/95 p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 text-ivory" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 text-ivory md:left-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? 0 : (v - 1 + filtered.length) % filtered.length)); }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            className="absolute right-4 text-ivory md:right-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? 0 : (v + 1) % filtered.length)); }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
