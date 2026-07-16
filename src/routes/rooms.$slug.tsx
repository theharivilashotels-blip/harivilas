import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, Check, Bed, Users, Maximize } from "lucide-react";
import { BookingModal } from "../components/site/BookingModal";
import { findRoom, rooms } from "../data/rooms";

function RoomDetail() {
  const { slug } = Route.useParams();
  const room = findRoom(slug);
  const [idx, setIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const h = () => setModalOpen(true);
    window.addEventListener("hv:book", h);
    return () => window.removeEventListener("hv:book", h);
  }, []);

  if (!room) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-foreground">Room not found</h1>
        <Link to="/" className="btn-gold mt-6 inline-flex rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em]">
          Back home
        </Link>
      </div>
    );
  }

  const total = room.images.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  return (
    <>
      <div className="bg-background pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-maroon">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 grid gap-10 md:mt-10 md:grid-cols-2 md:gap-12">
            {/* Gallery */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                {room.images.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${room.name} at The Hari Vilas Hotel — view ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                {total > 1 && (
                  <>
                    <button onClick={prev} aria-label="Previous image" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-sm hover:bg-background">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button onClick={next} aria-label="Next image" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-sm hover:bg-background">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {room.images.map((_, i) => (
                        <button
                          key={i}
                          aria-label={`Show image ${i + 1}`}
                          onClick={() => setIdx(i)}
                          className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-2 bg-ivory/80"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {total > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {room.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setIdx(i)}
                      className={`aspect-square overflow-hidden rounded-sm border-2 transition ${i === idx ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Room</p>
              <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">{room.name}</h1>
              <div className="divider-motif my-5 max-w-[8rem] justify-start"><span>◆</span></div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{room.longDesc}</p>

              <div className="mt-6 grid grid-cols-3 gap-3 rounded-sm border border-border bg-secondary/40 p-4">
                {room.size && (
                  <Info icon={Maximize} label="Size" value={room.size} />
                )}
                {room.occupancy && (
                  <Info icon={Users} label="Occupancy" value={room.occupancy} />
                )}
                <Info icon={Bed} label="Bed" value={room.features.find((f) => /bed/i.test(f)) || "Comfort"} />
              </div>

              <h2 className="mt-8 font-serif text-xl text-foreground">Room features</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-maroon"><Check className="h-3 w-3" /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-4 rounded-sm border border-gold/40 bg-card p-5 shadow-luxe">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Starts from</p>
                  <p className="font-serif text-3xl text-maroon">
                    ₹{room.price.toLocaleString()}
                    <span className="text-sm text-muted-foreground"> / night</span>
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-gold rounded-sm px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Other rooms */}
          <section className="mt-20 border-t border-border pt-14 md:mt-24">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Explore</p>
            <h2 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">Other rooms you might love</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.filter((r) => r.slug !== room.slug).map((r) => (
                <Link
                  key={r.slug}
                  to="/rooms/$slug"
                  params={{ slug: r.slug }}
                  className="group overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-1 hover:shadow-luxe"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={r.images[0]} alt={r.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-foreground">{r.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">From ₹{r.price.toLocaleString()} / night</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BookingModal open={modalOpen} room={room.name} price={room.price} onClose={() => setModalOpen(false)} />
    </>
  );
}

function Info({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="text-center">
      <Icon className="mx-auto h-4 w-4 text-gold" />
      <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

const site = "https://www.theharivilashotels.com";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = findRoom(params.slug);
    if (!room) throw notFound();
    return room;
  },
  head: ({ loaderData, params }) => {
    const room = loaderData;
    const title = room ? `${room.name} — The Hari Vilas Hotel, Sri Ganganagar` : "Room — The Hari Vilas Hotel";
    const description = room?.desc ?? "Book a room at The Hari Vilas Hotel, Sri Ganganagar.";
    const url = `${site}/rooms/${params.slug}`;
    const image = room?.images[0];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        ...(image ? [{ property: "og:image", content: image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: RoomDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 pt-32 pb-20 text-center">
      <h1 className="font-serif text-3xl text-foreground">Room not found</h1>
      <Link to="/" className="btn-gold mt-6 inline-flex rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em]">
        Back home
      </Link>
    </div>
  ),
});
