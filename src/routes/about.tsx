import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import heroExterior from "../assets/hero-exterior.jpg";
import roomMaharaja from "../assets/room-maharaja.jpg";
import { Award, Leaf, HandHeart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — The Hari Vilas" },
      { name: "description", content: "The Hari Vilas Hotel — a 128-year-old heritage palace reborn as one of Udaipur's most beloved luxury retreats." },
      { property: "og:title", content: "Our Story — The Hari Vilas" },
      { property: "og:image", content: heroExterior },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A palace, an inheritance, a home"
        subtitle="For four generations, the Singh family has cared for these walls. Today, they welcome the world in."
        image={heroExterior}
      />

      <section className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-32">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Carved from Rajasthani sandstone in 1897 as a summer residence for Rawal Hari Singh, the palace has,
            over 128 years, been many things — a royal retreat, a rebel hideout during Independence, a school
            of classical music, and, since 1998, one of India's most quietly beloved heritage hotels.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Every archway you pass under has been touched by a craftsman's hand. Every recipe on our menu has
            been passed down through kitchens rather than cookbooks. And every one of our two hundred and forty
            colleagues comes from within a hundred kilometres of the palace — because the best hospitality, we
            believe, is the kind that grows out of the place it belongs to.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-8">
          {[
            { icon: Award, title: "Recognised", desc: "Condé Nast Traveller Gold List, Travel + Leisure T+L 500, Tatler India 101 Best Hotels." },
            { icon: Leaf, title: "Sustainable", desc: "100% solar hot water. Zero-waste kitchens. Locally sourced ingredients across every menu." },
            { icon: HandHeart, title: "Rooted", desc: "88% of colleagues from within Udaipur district. Ongoing patronage of local crafts and music." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-sm border border-border bg-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-maroon">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={roomMaharaja} alt="Interior detail" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our promise</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">To be worth the journey.</h2>
            <div className="divider-motif my-6 max-w-[10rem] justify-start"><span>◆</span></div>
            <p className="text-muted-foreground">
              When you leave The Hari Vilas, we want you to feel not merely rested, but restored. Not merely
              hosted, but known. That's the only kind of luxury we're interested in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
