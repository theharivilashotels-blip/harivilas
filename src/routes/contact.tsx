import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import pool from "../assets/pool.jpg";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — The Hari Vilas" },
      { name: "description", content: "Reserve your stay, plan an event or reach our concierge at The Hari Vilas Hotel, Udaipur." },
      { property: "og:title", content: "Contact — The Hari Vilas" },
      { property: "og:image", content: pool },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A conversation, whenever you're ready"
        subtitle="Our concierge answers within the hour, day or night."
        image={pool}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-32">
        <aside>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Get in touch</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">The concierge is listening</h2>
          <div className="divider-motif my-6 max-w-[8rem] justify-start"><span>◆</span></div>

          <ul className="space-y-6 text-sm">
            <Info icon={<MapPin className="h-4 w-4 text-gold" />} label="Palace Road, Old City, Udaipur, Rajasthan 313001, India" />
            <Info icon={<Phone className="h-4 w-4 text-gold" />} label={<a href="tel:+911234567890">+91 12345 67890</a>} />
            <Info icon={<Mail className="h-4 w-4 text-gold" />} label={<a href="mailto:reserve@harivilas.com">reserve@harivilas.com</a>} />
            <Info icon={<MessageCircle className="h-4 w-4 text-gold" />} label={<a href="https://wa.me/911234567890">WhatsApp concierge</a>} />
          </ul>

          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-sm border border-border">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Udaipur+Rajasthan&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-sm border border-border bg-card p-8 md:p-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Enquire</p>
          <h3 className="mt-3 font-serif text-3xl text-foreground">Tell us how you'd like to stay</h3>

          <div className="mt-8 grid gap-5">
            <Field label="Full name"><input required className="input" placeholder="Aditi Mehra" /></Field>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
              <Field label="Phone"><input className="input" placeholder="+91 …" /></Field>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Check in"><input type="date" className="input" /></Field>
              <Field label="Check out"><input type="date" className="input" /></Field>
            </div>
            <Field label="Message">
              <textarea required rows={5} className="input resize-none" placeholder="A quiet honeymoon, an anniversary dinner, a slow week of yoga — tell us the story." />
            </Field>

            <button type="submit" className="btn-gold mt-2 rounded-sm px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em]">
              {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
            </button>
            <p className="text-xs text-muted-foreground">By sending, you agree to our privacy policy. We reply within one hour.</p>
          </div>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 25%, transparent); }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </>
  );
}

function Info({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-foreground">
      <span className="mt-0.5">{icon}</span>
      <span>{label}</span>
    </li>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
