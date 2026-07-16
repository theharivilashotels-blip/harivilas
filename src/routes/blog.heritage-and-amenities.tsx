import { createFileRoute, Link } from "@tanstack/react-router";

const url = "https://www.theharivilashotels.com/blog/heritage-and-amenities";
const title = "Hari Vilas Hotel Sri Ganganagar: Our Heritage and Amenities";
const description = "The story of Hari Vilas Hotel in Sri Ganganagar and the amenities that make our stay special — Wi-Fi, parking, spotless rooms, couple friendly service and more.";

export const Route = createFileRoute("/blog/heritage-and-amenities")({
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
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Story</p>
      <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
        Hari Vilas Hotel Sri Ganganagar: Our Heritage & Amenities
      </h1>
      <p className="mt-5 text-muted-foreground">
        Hari Vilas Hotel is a warm, family-run boutique hotel in the old city of Sri Ganganagar. Sixteen rooms, four categories, one goal — real comfort at fair prices.
      </p>
      <div className="prose prose-stone mt-8 max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="font-serif text-2xl">Location</h2>
          <p className="text-muted-foreground">Plot No. 33, Thana Road, near Moti Palace, Old City — minutes from Sri Ganganagar railway station and a short drive to Fort Rajwada.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Amenities</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>High-speed Wi-Fi across the hotel</li>
            <li>Free on-site parking</li>
            <li>Spotlessly clean, air-conditioned rooms</li>
            <li>High-speed lift</li>
            <li>Complimentary breakfast</li>
            <li>In-house restaurant and 24×7 room service</li>
            <li>Couple friendly — always</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Our rooms</h2>
          <p className="text-muted-foreground">Standard, Deluxe, Premium and Suite — see <Link to="/" hash="rooms" className="text-maroon underline">all four categories</Link>.</p>
        </section>
      </div>

      <div className="mt-10 rounded-sm border border-gold/40 bg-secondary/40 p-6">
        <h3 className="font-serif text-xl text-foreground">Ready to stay?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <Link to="/" className="text-maroon underline">Book your room now</Link> or view our <Link to="/" hash="rooms" className="text-maroon underline">room categories</Link>.
        </p>
      </div>
    </article>
  );
}
