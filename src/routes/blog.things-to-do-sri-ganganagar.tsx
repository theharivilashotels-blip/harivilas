import { createFileRoute, Link } from "@tanstack/react-router";

const url = "https://harivilas.lovable.app/blog/things-to-do-sri-ganganagar";
const title = "Top 5 Things to Do in Sri Ganganagar | Hari Vilas Hotel";
const description = "Planning a trip? Discover the top 5 things to do in Sri Ganganagar — from Gole Bazaar and Anoopgarh to Fort Rajwada — with tips from Hari Vilas Hotel.";

export const Route = createFileRoute("/blog/things-to-do-sri-ganganagar")({
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
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Sri Ganganagar Guide</p>
      <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
        Top 5 Things to Do in Sri Ganganagar
      </h1>
      <p className="mt-5 text-muted-foreground">
        Sri Ganganagar is a warm, welcoming city on the edge of Rajasthan — full of colour, food and history. Here are five experiences we recommend to guests staying at Hari Vilas Hotel.
      </p>

      <div className="prose prose-stone mt-8 max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="font-serif text-2xl">1. Gole Bazaar — shopping and street food</h2>
          <p className="text-muted-foreground">The city's most iconic market. Come hungry: kachori, samosa, chaat and the famous local sweets are all within a few steps.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">2. Fort Rajwada</h2>
          <p className="text-muted-foreground">A short drive from the hotel. Beautiful architecture and a peaceful spot for photographs.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">3. Hindumalkot Border</h2>
          <p className="text-muted-foreground">A memorable day trip. Watch the flag-lowering ceremony and take in the sense of history.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">4. Anoopgarh & Kali Devi Temple</h2>
          <p className="text-muted-foreground">A cultural and spiritual outing that pairs nicely with a leisurely lunch on the way back.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">5. Local Rajasthani thali</h2>
          <p className="text-muted-foreground">Ask our front desk for the current favourite — we're happy to book a table or arrange transport.</p>
        </section>
      </div>

      <div className="mt-10 rounded-sm border border-gold/40 bg-secondary/40 p-6">
        <h3 className="font-serif text-xl text-foreground">Stay with us</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Book a <Link to="/" hash="rooms" className="text-maroon underline">room at Hari Vilas Hotel</Link> for a comfortable, couple-friendly stay in the heart of Sri Ganganagar. See our <Link to="/" hash="amenities" className="text-maroon underline">amenities</Link> or head straight to <Link to="/" className="text-maroon underline">booking</Link>.
        </p>
      </div>
    </article>
  );
}
