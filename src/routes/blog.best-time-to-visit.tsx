import { createFileRoute, Link } from "@tanstack/react-router";

const url = "https://harivilas.lovable.app/blog/best-time-to-visit";
const title = "Best Time to Visit Sri Ganganagar | Hari Vilas Hotel";
const description = "When is the best time to visit Sri Ganganagar? A month-by-month guide to weather, festivals and travel tips from Hari Vilas Hotel.";

export const Route = createFileRoute("/blog/best-time-to-visit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-6 md:px-8">
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Travel Guide</p>
      <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">Best Time to Visit Sri Ganganagar</h1>
      <p className="mt-5 text-muted-foreground">Sri Ganganagar has a strong desert climate — hot summers and pleasant winters. Here's when to visit for the best experience.</p>
      <div className="prose prose-stone mt-8 max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="font-serif text-2xl">October to March — the sweet spot</h2>
          <p className="text-muted-foreground">Cool, sunny days and crisp evenings. Perfect for sightseeing, shopping in Gole Bazaar and day trips to Fort Rajwada.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">April to June — warm and quiet</h2>
          <p className="text-muted-foreground">Temperatures climb; ideal for travellers who prefer fewer crowds and better room rates.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">July to September — brief monsoon</h2>
          <p className="text-muted-foreground">Occasional showers and a fresh, green landscape. A lovely time for slow travel.</p>
        </section>
      </div>
      <div className="mt-10 rounded-sm border border-gold/40 bg-secondary/40 p-6">
        <h3 className="font-serif text-xl text-foreground">Plan your stay</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore our <Link to="/" hash="rooms" className="text-maroon underline">rooms</Link> and <Link to="/" hash="amenities" className="text-maroon underline">amenities</Link>, then <Link to="/" className="text-maroon underline">book directly</Link> for the best rates.
        </p>
      </div>
    </article>
  );
}
