import { useState } from "react";
import { CalendarDays, Users, ShieldCheck } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function BookingWidget({ floating = false }: { floating?: boolean }) {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);
  const navigate = useNavigate();

  return (
    <div
      className={`w-full max-w-5xl rounded-sm border border-gold/40 bg-background/95 p-5 shadow-luxe backdrop-blur md:p-6 ${
        floating ? "relative z-10 -mt-24 md:-mt-32" : ""
      }`}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div className="divider-motif hidden sm:flex">
          <span className="font-serif text-sm italic text-maroon">Reserve your escape</span>
        </div>
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-gold" /> Best Price Guarantee
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/rooms" });
        }}
        className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]"
      >
        <Field label="Check In" icon={<CalendarDays className="h-4 w-4 text-gold" />}>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground focus:outline-none"
          />
        </Field>
        <Field label="Check Out" icon={<CalendarDays className="h-4 w-4 text-gold" />}>
          <input
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground focus:outline-none"
          />
        </Field>
        <Field label="Guests" icon={<Users className="h-4 w-4 text-gold" />}>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-transparent text-sm text-foreground focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
            ))}
          </select>
        </Field>
        <button
          type="submit"
          className="btn-gold rounded-sm px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em]"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex flex-col gap-1 rounded-sm border border-border bg-background px-4 py-3 transition-colors hover:border-gold">
      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
