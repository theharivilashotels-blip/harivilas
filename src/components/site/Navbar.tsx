import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#couples", label: "Couples" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar({ onBook }: { onBook?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border font-serif text-lg italic ${
              scrolled || open ? "border-maroon text-maroon" : "border-gold text-gold"
            }`}
          >
            H
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={`truncate font-serif text-base tracking-wide md:text-lg ${
                scrolled || open ? "text-foreground" : "text-ivory"
              }`}
            >
              The Hari Vilas Hotel
            </span>
            <span
              className={`hidden text-[10px] uppercase tracking-[0.3em] sm:block ${
                scrolled || open ? "text-muted-foreground" : "text-gold-soft/90"
              }`}
            >
              Sri Ganganagar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-maroon" : "text-ivory/90 hover:text-gold-soft"
              }`}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onBook?.()}
            className="btn-gold hidden rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] md:inline-flex"
          >
            Book Now
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-sm border lg:hidden ${
              scrolled || open ? "border-border text-foreground" : "border-ivory/40 text-ivory"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-serif text-lg text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setOpen(false); onBook?.(); }}
              className="btn-gold mt-4 rounded-sm px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
