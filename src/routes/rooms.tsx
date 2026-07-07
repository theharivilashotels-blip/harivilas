import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { BookingWidget } from "../components/site/BookingWidget";
import { Bed, Users, Maximize, Eye } from "lucide-react";
import roomMaharaja from "../assets/room-maharaja.jpg";
import roomDeluxe from "../assets/room-deluxe.jpg";
import roomPoolVilla from "../assets/room-pool-villa.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — The Hari Vilas" },
      { name: "description", content: "Regal heritage rooms, maharaja suites and private pool villas at The Hari Vilas Hotel, Udaipur." },
      { property: "og:title", content: "Rooms & Suites — The Hari Vilas" },
      { property: "og:image", content: roomMaharaja },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    name: "Deluxe Heritage Room", img: roomDeluxe, size: "42 m²", occupancy: "2 guests",
    bed: "King Bed", view: "Courtyard", price: 14500,
    desc: "Warm arches, marble floors and a private balcony above the courtyard. A gentle introduction to palace life.",
    amenities: ["Rain shower", "Nespresso bar", "Turndown ritual", "Complimentary Wi-Fi"],
  },
  {
    name: "Maharaja Suite", img: roomMaharaja, size: "78 m²", occupancy: "2 guests + 1 child",
    bed: "Canopy King", view: "Palace gardens", price: 32000,
    desc: "A canopy of ivory silk, hand-painted ceilings and a personal butler on call from sunrise to nightcap.",
    amenities: ["Personal butler", "Living room", "Freestanding tub", "Private terrace"],
  },
  {
    name: "Private Pool Villa", img: roomPoolVilla, size: "120 m²", occupancy: "2 guests",
    bed: "Four-Poster King", view: "Private pool", price: 58000,
    desc: "A plunge pool at the edge of the terrace, watched over by sandstone columns and a very forgiving sunset.",
    amenities: ["Private plunge pool", "Outdoor daybed", "Cocktail hour service", "Chauffeur car"],
  },
];

function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodations"
        title="Rooms & suites for the truly rested"
        subtitle="Ninety-two rooms and suites, each with its own personality. Choose the one that feels like yours."
        image={roomMaharaja}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <BookingWidget floating />
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-6 py-24 md:px-8 md:py-32">
        {rooms.map((r, i) => (
          <article
            key={r.name}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-sm">
              <img src={r.img} alt={r.name} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Suite</p>
              <h2 className="mt-3 font-serif text-4xl text-foreground">{r.name}</h2>
              <div className="divider-motif my-5 max-w-[8rem] justify-start"><span>◆</span></div>
              <p className="text-muted-foreground">{r.desc}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-foreground sm:grid-cols-4">
                <Meta icon={<Maximize className="h-4 w-4 text-gold" />} label={r.size} />
                <Meta icon={<Users className="h-4 w-4 text-gold" />} label={r.occupancy} />
                <Meta icon={<Bed className="h-4 w-4 text-gold" />} label={r.bed} />
                <Meta icon={<Eye className="h-4 w-4 text-gold" />} label={r.view} />
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {r.amenities.map((a) => (
                  <li key={a} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
                  <p className="font-serif text-3xl text-maroon">
                    ₹{r.price.toLocaleString()}
                    <span className="text-sm text-muted-foreground"> / night</span>
                  </p>
                </div>
                <Link to="/contact" className="btn-gold rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  Reserve now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
    </div>
  );
}
