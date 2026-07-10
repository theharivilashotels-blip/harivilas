import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";

export type BookingModalProps = {
  open: boolean;
  room?: string;
  price?: number;
  onClose: () => void;
};

export function BookingModal({ open, room, price, onClose }: BookingModalProps) {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setErrMsg("");
    }
  }, [open, room]);

  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, room, checkIn, checkOut, guests, notes }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErrMsg(data.error || "Something went wrong");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch (e) {
      setErrMsg("Network error");
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-deep/70 px-3 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a room"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-sm border border-gold/40 bg-background shadow-luxe"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 text-foreground transition hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-y-auto px-6 py-8 md:px-8">
          {status === "sent" ? (
            <div className="py-8 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-gold/10 text-gold">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">Your booking is confirmed</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Thank you, {name || "guest"}. We will call you in a minute to finalise your stay at The Hari Vilas Hotel.
              </p>
              <button
                onClick={onClose}
                className="btn-gold mt-8 rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Reserve</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                {room ? `Book the ${room}` : "Book your stay"}
              </h3>
              {price !== undefined && (
                <p className="mt-1 text-sm text-muted-foreground">
                  From <span className="font-serif text-lg text-maroon">₹{price.toLocaleString()}</span> / night
                </p>
              )}

              <form onSubmit={submit} className="mt-6 grid gap-4">
                <Field label="Full name">
                  <input required value={name} onChange={(e) => setName(e.target.value)} className="hv-input" placeholder="Your name" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone">
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="hv-input" placeholder="+91 …" inputMode="tel" />
                  </Field>
                  <Field label="Email (optional)">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="hv-input" placeholder="you@email.com" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Check in">
                    <input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="hv-input" />
                  </Field>
                  <Field label="Check out">
                    <input type="date" min={checkIn} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="hv-input" />
                  </Field>
                </div>
                <Field label="Guests">
                  <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="hv-input">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Notes (optional)">
                  <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="hv-input resize-none" placeholder="Anniversary, arrival time, dietary needs…" />
                </Field>

                {status === "error" && (
                  <p className="rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {errMsg || "Something went wrong. Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold mt-2 rounded-sm px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
                <p className="text-[11px] text-muted-foreground">
                  We'll call you in a minute to confirm. Or call us directly at{" "}
                  <a href="tel:+919950629029" className="text-maroon underline">+91 99506 29029</a>.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        .hv-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.75rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hv-input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 25%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
