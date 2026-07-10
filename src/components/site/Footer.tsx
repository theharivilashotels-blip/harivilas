import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-24 bg-maroon-deep text-ivory">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold font-serif text-xl italic text-gold">
              H
            </span>
            <div>
              <p className="font-serif text-xl">The Hari Vilas Hotel</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">Sri Ganganagar, Rajasthan</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-ivory/70">
            A warm, couple-friendly boutique hotel in Sri Ganganagar. Sixteen thoughtfully designed rooms, sincere service, and every comfort you need.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { I: Instagram, href: "https://instagram.com" },
              { I: Facebook, href: "https://facebook.com" },
              { I: Youtube, href: "https://youtube.com" },
            ].map(({ I, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory/80 transition hover:border-gold hover:text-gold"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Explore</p>
          <ul className="space-y-3 text-sm text-ivory/75">
            {[
              ["#rooms", "Rooms"],
              ["#amenities", "Amenities"],
              ["#couples", "Couple Friendly"],
              ["#reviews", "Reviews"],
              ["#location", "Location"],
              ["/blog/things-to-do-sri-ganganagar", "Sri Ganganagar Guide"],
            ].map(([to, label]) =>
              to.startsWith("/") ? (
                <li key={to}>
                  <Link to={to} className="transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              ) : (
                <li key={to}>
                  <a href={to} className="transition hover:text-gold">
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Contact</p>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Plot No. 33, Thana RD, near Moti Palace, Old City, Sri Ganganagar, Rajasthan 335001, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+919950629029" className="hover:text-gold">+91 99506 29029</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:theharivilashotel@gmail.com" className="hover:text-gold break-all">theharivilashotel@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-5 font-serif text-lg text-gold">Guides</p>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li><Link to="/blog/things-to-do-sri-ganganagar" className="hover:text-gold">Top 5 Things to Do in Sri Ganganagar</Link></li>
            <li><Link to="/blog/heritage-and-amenities" className="hover:text-gold">Our Heritage & Amenities</Link></li>
            <li><Link to="/blog/best-time-to-visit" className="hover:text-gold">Best Time to Visit Sri Ganganagar</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} The Hari Vilas Hotel, Sri Ganganagar. All rights reserved.</p>
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
