import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Wifi, Sparkles, Star, MapPin, ArrowRight, Quote,
  ChevronLeft, ChevronRight, Coffee, Heart, ShieldCheck, ParkingCircle,
  BedDouble, Utensils,
} from "lucide-react";
import { BookingModal } from "../components/site/BookingModal";
import heroFallback from "../assets/hero-exterior.jpg";
import suite1 from "../assets/suite-1.jpg";
import suite2 from "../assets/suite-2.jpg";
import heroHotel from "../assets/hero-hotel.png.asset.json";

const HERO_IMAGE = heroHotel.url;

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 1350,
    desc: "Warm, spacious and beautifully finished. The perfect everyday luxury for solo travellers and couples.",
    images: [
      "https://i.ibb.co/DPFSDdBD/IMG-4544.jpg",
      "https://i.ibb.co/LXTZxnxL/IMG-4540.jpg",
    ],
    features: ["King bed", "AC", "Free Wi-Fi", "24×7 room service"],
  },
  {
    id: "premium",
    name: "Standard Room",
    price: 1550,
    desc: "Upgraded comfort, elegant décor and thoughtful touches for a truly restful stay.",
    images: [
      "https://i.ibb.co/MxFPdDD8/IMG-4535.jpg",
      "https://i.ibb.co/kVhD79bb/IMG-4536.jpg",
      "https://i.ibb.co/tGsjkNH/IMG-4598.jpg",
    ],
    features: ["Premium bedding", "Work desk", "Complimentary breakfast", "Free Wi-Fi"],
  },
  {
    id: "suite",
    name: "Suite Room",
    price: 3150,
    desc: "Our most spacious room — a private living area, king bed and premium amenities. Ideal for couples and special occasions.",
    images: [suite1, suite2],
    features: ["Separate living area", "King bed", "Couple friendly", "Late checkout"],
  },
  {
    id: "standard",
    name: "Premium Room",
    price: 1150,
    desc: "Clean, comfortable and value-for-money. Everything you need for a great night's sleep.",
    images: [
      "https://i.ibb.co/dsW6qzhk/IMG-4594.jpg",
      "https://i.ibb.co/sJMQ7rpz/IMG-4595.jpg",
    ],
    features: ["Queen bed", "AC", "Free Wi-Fi", "TV"],
  },
];

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: ParkingCircle, label: "Free Parking" },
  { icon: Sparkles, label: "Spotlessly Clean" },
  { icon: BedDouble, label: "Premium Rooms" },
  { icon: ArrowRight, label: "High-Speed Lift" },
  { icon: Coffee, label: "Complimentary Breakfast" },
  { icon: Utensils, label: "In-house Restaurant" },
  { icon: ShieldCheck, label: "24×7 Security" },
];

const testimonials = [
  { name: "Aditi & Rohan Mehra", city: "Delhi", stars: 5, quote: "A wonderful couple-friendly stay in Sri Ganganagar. The Suite Room was beautiful and the staff treated us so warmly." },
  { name: "Vikram Choudhary", city: "Jaipur", stars: 5, quote: "Cleanest hotel I've stayed at in the city. Comfortable bed, great Wi-Fi and free parking right at the door." },
  { name: "Neha Sharma", city: "Chandigarh", stars: 5, quote: "The Premium Room was worth every rupee. Loved the food and the polite staff. Will definitely come again." },
  { name: "Arjun Verma", city: "Bikaner", stars: 5, quote: "Perfect location near the old city. Booked the Deluxe Room — spotless and quiet. Highly recommended." },
  { name: "Priya Iyer", city: "Mumbai", stars: 5, quote: "The couple-friendly service made our anniversary special. Rooms are elegant and the hotel is well maintained." },
];

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{ name: string; price: number } | undefined>();

  function openBooking(room?: { name: string; price: number }) {
    setSelectedRoom(room);
    setModalOpen(true);
  }

  useEffect(() => {
    const h = () => openBooking();
    window.addEventListener("hv:book", h);
    return () => window.removeEventListener("hv:book", h);
  }, []);


  return (
    <>
      <Hero onBook={() => openBooking()} />
      <Welcome onBook={() => openBooking()} />
      <FeaturedRooms onBook={openBooking} />
      <Amenities />
      <CoupleFriendly onBook={() => openBooking({ name: "Suite Room", price: 3150 })} />
      <Stats />
      <Testimonials />
      <Location />
      <BookingModal
        open={modalOpen}
        room={selectedRoom?.name}
        price={selectedRoom?.price}
        onClose={() => setModalOpen(false)}
      />
      {/* Floating book button - mobile */}
      <button
        onClick={() => openBooking()}
        className="btn-gold fixed bottom-4 right-4 z-40 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-luxe md:hidden"
      >
        Book Now
      </button>
    </>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const words = ["The", "Hari", "Vilas", "Hotel"];
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-maroon-deep">
      {/* Blurred backdrop so portrait hero image fills any screen elegantly */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
      />
      <img
        src={heroFallback}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <img
        src={HERO_IMAGE}
        alt="The Hari Vilas Hotel — luxury stay in Sri Ganganagar, Rajasthan"
        onLoad={() => setLoaded(true)}
        className={`hero-zoom absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-[1400ms] md:object-cover md:object-top ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/50 via-maroon-deep/20 to-maroon-deep/90" />

      {/* Curtain reveal veil */}
      <div className="hero-veil pointer-events-none absolute inset-0 z-20 bg-maroon-deep" style={{ animationDelay: "100ms" }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-5 pb-16 text-center md:justify-center md:pb-0">
        <p className="fade-up mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold-soft sm:text-[11px] sm:tracking-[0.5em]" style={{ animationDelay: "1200ms" }}>
          <span className="h-px w-8 bg-gold sm:w-10" /> Sri Ganganagar, Rajasthan <span className="h-px w-8 bg-gold sm:w-10" />
        </p>

        <h1 className="font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-7xl lg:text-8xl">
          <span className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-x-5">
            {words.map((w, i) => (
              <span
                key={w + i}
                className="hero-word"
                style={{ animationDelay: `${1400 + i * 180}ms` }}
              >
                {w}
              </span>
            ))}
          </span>
          <span
            className="hero-line mx-auto mt-5 block h-px w-24 bg-gold sm:w-32"
            style={{ animationDelay: "2200ms" }}
          />
          <span
            className="fade-up mt-5 block font-serif text-lg italic text-gold-soft sm:text-xl md:text-2xl"
            style={{ animationDelay: "2400ms" }}
          >
            Luxury Stay in Sri Ganganagar
          </span>
        </h1>

        <p
          className="fade-up mt-6 max-w-xl text-sm text-ivory/85 sm:text-base md:text-lg"
          style={{ animationDelay: "2600ms" }}
        >
          A warm, couple-friendly boutique hotel in the heart of Sri Ganganagar — sixteen thoughtfully designed rooms, sincere hospitality and every comfort you deserve.
        </p>
        <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10" style={{ animationDelay: "2800ms" }}>
          <button
            onClick={onBook}
            className="btn-gold rounded-sm px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Book Now
          </button>
          <a
            href="#rooms"
            className="rounded-sm border border-ivory/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory transition hover:border-gold hover:text-gold"
          >
            View Rooms
          </a>
        </div>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ivory/60 sm:block">
          <div className="mx-auto h-10 w-px animate-pulse bg-gold/70" />
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em]">Scroll</p>
        </div>
      </div>
    </section>
  );
}

function Welcome({ onBook }: { onBook: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Welcome</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            A warm hotel in Sri Ganganagar, made for real comfort.
          </h2>
          <div className="divider-motif my-6 max-w-[10rem] justify-start"><span>◆</span></div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Hari Vilas Hotel is a proudly couple-friendly boutique hotel in Sri Ganganagar. Sixteen elegantly appointed rooms, a warm and respectful team, high-speed Wi-Fi, free parking and a spotlessly clean environment — everything you need for a wonderful stay near Gole Bazaar, the railway station and Fort Rajwada.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <Fact k="16" v="Rooms" />
            <Fact k="1000+" v="Happy guests" />
            <Fact k="4.9" v="Guest rating" />
          </div>
          <button
            onClick={onBook}
            className="btn-gold mt-8 inline-flex rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Book your stay
          </button>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
            <img
              src={suite1}
              alt="Elegant suite room at Hari Vilas Hotel Sri Ganganagar"
              loading="lazy"
              width={1600}
              height={2000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-sm border border-gold bg-background p-4 shadow-luxe sm:-left-6 sm:p-5">
            <p className="font-serif text-xl text-maroon sm:text-2xl">Couple Friendly</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">Sri Ganganagar</p>
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

function FeaturedRooms({ onBook }: { onBook: (r: { name: string; price: number }) => void }) {
  return (
    <section id="rooms" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Rooms</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">Our four room categories</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            From value-conscious Standard rooms to our spacious Suite — every room is spotlessly clean, air-conditioned and thoughtfully designed.
          </p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r) => (
            <RoomCard key={r.id} room={r} onBook={() => onBook({ name: r.name, price: r.price })} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({
  room,
  onBook,
}: {
  room: (typeof rooms)[number];
  onBook: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const total = room.images.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {room.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${room.name} at Hari Vilas Hotel Sri Ganganagar — view ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-sm transition hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-sm transition hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-2 bg-ivory/70"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-xl text-foreground md:text-2xl">{room.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{room.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {room.features.map((f) => (
            <li key={f} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{f}</li>
          ))}
        </ul>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
            <p className="font-serif text-2xl text-maroon">
              ₹{room.price.toLocaleString()}
              <span className="text-xs text-muted-foreground"> / night</span>
            </p>
          </div>
          <button
            onClick={onBook}
            className="btn-gold rounded-sm px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Amenities</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">Everything, thoughtfully considered</h2>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          High-speed Wi-Fi, free parking, spotlessly clean rooms, a high-speed lift, and every comfort a modern traveller expects.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex flex-col items-center rounded-sm border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe md:p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-maroon transition group-hover:border-gold group-hover:bg-gold/10 md:h-14 md:w-14">
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </span>
            <p className="mt-3 text-sm font-medium text-foreground md:mt-4">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CoupleFriendly({ onBook }: { onBook: () => void }) {
  const points = [
    { icon: Heart, title: "Warm, respectful welcome", desc: "Couples are always welcome. Valid ID is all we ever ask for — no awkward questions." },
    { icon: ShieldCheck, title: "Privacy first", desc: "Discreet check-in, do-not-disturb honoured, quiet floors — your time together is yours." },
    { icon: Sparkles, title: "Room, done right", desc: "Fresh linens, spotless bathrooms, mood lighting and a real double bed you'll actually love." },
    { icon: Coffee, title: "Little extras", desc: "Complimentary tea on arrival, late checkout on request, and a curated in-room dining menu." },
  ];
  return (
    <section id="couples" className="relative overflow-hidden bg-maroon-deep py-20 text-ivory md:py-28">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #d4af37 0%, transparent 40%), radial-gradient(circle at 80% 60%, #d4af37 0%, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Couple Friendly</p>
          <h2 className="mt-3 font-serif text-3xl text-ivory sm:text-4xl md:text-5xl">Made for the two of you</h2>
          <p className="mt-4 text-sm text-ivory/80 md:text-base">
            At Hari Vilas Hotel, couples are genuinely welcome — celebrated, even. Whether it's an anniversary, a honeymoon, a weekend away, or simply a night just for the two of you, expect a warm, private and comfortable stay every single time.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-sm border border-ivory/15 bg-ivory/[0.04] p-6 transition hover:border-gold">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-ivory">{title}</h3>
              <p className="mt-2 text-sm text-ivory/75">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={onBook}
            className="btn-gold rounded-sm px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Book the Suite for Two
          </button>
        </div>
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

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stats = [
    { n: 16, label: "Rooms" },
    { n: 1000, label: "Guests welcomed" },
    { n: 4, label: "Room categories" },
    { n: 24, label: "Hours front desk" },
  ];
  return (
    <section ref={ref} className="bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} target={s.n} label={s.label} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ target, label, start }: { target: number; label: string; start: boolean }) {
  const v = useCounter(target, start);
  return (
    <div className="text-center">
      <p className="text-gold-shimmer font-serif text-4xl md:text-6xl">
        {v.toLocaleString()}{target >= 1000 && v === target ? "+" : ""}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:mt-3 md:text-xs">{label}</p>
    </div>
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
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 md:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Guest voices</p>
        <Quote className="mx-auto mt-6 h-9 w-9 text-gold md:h-10 md:w-10" />
        <p key={i} className="fade-up mt-6 font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl md:text-3xl">
          "{t.quote}"
        </p>
        <div className="mt-6 flex justify-center gap-1 text-gold">
          {Array.from({ length: t.stars }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-maroon">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.city}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
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

function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Find Us</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">In the heart of Sri Ganganagar</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            A few minutes from Sri Ganganagar railway station and Gole Bazaar, and within easy reach of Fort Rajwada. Free on-site parking for all guests.
          </p>
          <div className="mt-6 flex items-start gap-3 text-sm text-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            Plot No. 33, Thana RD, near Moti Palace, Old City, Sri Ganganagar, Rajasthan 335001
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hari+Vilas+Hotel+Plot+33+Thana+Road+Moti+Palace+Old+City+Sri+Ganganagar+Rajasthan+335001"
              target="_blank"
              rel="noreferrer"
              className="btn-gold rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Get directions
            </a>
            <a href="tel:+919950629029" className="rounded-sm border border-maroon px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-maroon hover:bg-maroon hover:text-ivory">
              Call concierge
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
          <iframe
            title="The Hari Vilas Hotel — Sri Ganganagar location"
            src="https://www.google.com/maps?q=Plot+No.+33,+Thana+Road,+near+Moti+Palace,+Old+City,+Sri+Ganganagar,+Rajasthan+335001&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

const canonical = "https://harivilas.lovable.app/";
const description = "Discover the best hotels in Sri Ganganagar at Hari Vilas Hotel. Enjoy luxurious rooms, complimentary breakfast, and easy access to local attractions.";
const title = "Top Hotels in Sri Ganganagar – Hari Vilas Hotel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "keywords", content: "hotels in Sri Ganganagar, Hari Vilas Hotel, luxury hotel Sri Ganganagar, budget hotel Sri Ganganagar, hotel near Sri Ganganagar railway station, hotel near Fort Rajwada, couple friendly hotel Sri Ganganagar" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Hari Vilas Hotel",
          description,
          url: canonical,
          telephone: "+91-99506-29029",
          email: "theharivilashotel@gmail.com",
          image: HERO_IMAGE,
          priceRange: "₹₹",
          starRating: { "@type": "Rating", ratingValue: "4.9" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 33, Thana Road, near Moti Palace, Old City",
            addressLocality: "Sri Ganganagar",
            addressRegion: "Rajasthan",
            postalCode: "335001",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 29.9094, longitude: 73.8800 },
          checkinTime: "12:00",
          checkoutTime: "11:00",
          amenityFeature: [
            "High-Speed Wi-Fi",
            "Free Parking",
            "Couple Friendly",
            "Air Conditioning",
            "24×7 Front Desk",
            "In-house Restaurant",
            "High-Speed Lift",
            "Complimentary Breakfast",
          ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": canonical + "#business",
          name: "Hari Vilas Hotel",
          image: HERO_IMAGE,
          telephone: "+91-99506-29029",
          email: "theharivilashotel@gmail.com",
          url: canonical,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 33, Thana Road, near Moti Palace, Old City",
            addressLocality: "Sri Ganganagar",
            addressRegion: "Rajasthan",
            postalCode: "335001",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 29.9094, longitude: 73.8800 },
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: canonical },
            { "@type": "ListItem", position: 2, name: "Rooms", item: canonical + "#rooms" },
            { "@type": "ListItem", position: 3, name: "Amenities", item: canonical + "#amenities" },
            { "@type": "ListItem", position: 4, name: "Location", item: canonical + "#location" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});
