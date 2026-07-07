import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-maroon-deep text-ivory">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold font-serif text-xl italic text-gold">
              H
            </span>
            <div>
              <p className="font-serif text-xl">The Hari Vilas</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">A Heritage Hotel</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-ivory/70">
            A timeless retreat where royal Indian hospitality meets modern luxury. Every stay, a story.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory/80 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Explore</p>
          <ul className="space-y-3 text-sm text-ivory/75">
            {[
              ["/rooms", "Rooms & Suites"],
              ["/dining", "Dining"],
              ["/amenities", "Amenities"],
              ["/offers", "Offers & Packages"],
              ["/gallery", "Gallery"],
              ["/about", "Our Story"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Contact</p>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Palace Road, Old City, Udaipur, Rajasthan 313001, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+911234567890" className="hover:text-gold">+91 12345 67890</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:reserve@harivilas.com" className="hover:text-gold">reserve@harivilas.com</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Journal</p>
          <p className="text-sm text-ivory/70">
            Whispers from the palace — exclusive offers, seasonal escapes, and stories from Udaipur.
          </p>
          <form
            className="mt-4 flex overflow-hidden rounded-sm border border-ivory/25 bg-ivory/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none"
            />
            <button className="btn-gold px-5 text-xs font-semibold uppercase tracking-[0.2em]">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} The Hari Vilas Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
