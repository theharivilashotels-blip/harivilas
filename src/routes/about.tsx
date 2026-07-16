import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import heroFacade from "../assets/hero-facade-new.png.asset.json";
import suite1 from "../assets/suite-1.jpg";

function About() {
  return (
    <div className="bg-background pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-maroon">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mt-6 text-center md:mt-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">About Us</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">The Hari Vilas Hotel</h1>
          <div className="divider-motif mx-auto my-6 max-w-[10rem]"><span>◆</span></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A warm, couple-friendly boutique hotel in the heart of Sri Ganganagar — built on sincere hospitality, spotless comfort and every little detail that turns a stay into a story.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
            <img src={heroFacade.url} alt="The Hari Vilas Hotel facade in Sri Ganganagar" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">Hospitality, the Rajasthani way</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The Hari Vilas Hotel was built with a simple idea — Sri Ganganagar deserves a hotel that feels genuinely warm, is spotlessly clean, and treats every guest like family. From our beautifully lit facade to sixteen thoughtfully designed rooms, every detail is designed to make you feel at home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you are travelling for business, on a family holiday, or a couple planning a getaway, our team is here to make sure your stay is comfortable, private and memorable.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Values</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">What we stand for</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: "Warm hospitality", desc: "Every guest is greeted with genuine warmth — that's the Rajasthani way, and it's non-negotiable." },
              { icon: Sparkles, title: "Spotless comfort", desc: "Fresh linens, sanitised rooms and immaculate bathrooms — cleanliness you can see and feel." },
              { icon: ShieldCheck, title: "Safety & privacy", desc: "24×7 security, discreet check-in and quiet floors — your stay is safe and truly yours." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-sm border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-luxe">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold text-gold"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 rounded-sm border border-border bg-secondary/30 p-8 md:mt-24 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Location</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">In the heart of Sri Ganganagar</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              A few minutes from Sri Ganganagar railway station and Gole Bazaar, and within easy reach of Fort Rajwada. Free on-site parking, easy access and a peaceful stay.
            </p>
            <div className="mt-5 flex items-start gap-3 text-sm text-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              Plot No. 33, Thana RD, near Moti Palace, Old City, Sri Ganganagar, Rajasthan 335001
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/" className="btn-gold rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em]">Back to home</Link>
              <a href="tel:+919950629029" className="rounded-sm border border-maroon px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-maroon hover:bg-maroon hover:text-ivory">
                Call us
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img src={suite1} alt="A comfortable room at The Hari Vilas Hotel" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}

const url = "https://harivilas.lovable.app/about";
const title = "About Us — The Hari Vilas Hotel, Sri Ganganagar";
const description = "Learn the story behind The Hari Vilas Hotel — a warm, couple-friendly boutique hotel in the heart of Sri Ganganagar, Rajasthan.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: About,
});
