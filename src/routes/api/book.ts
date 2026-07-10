import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/book")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            name?: string;
            phone?: string;
            email?: string;
            room?: string;
            checkIn?: string;
            checkOut?: string;
            guests?: number | string;
            notes?: string;
          };

          const name = (body.name || "").toString().trim().slice(0, 120);
          const phone = (body.phone || "").toString().trim().slice(0, 40);
          const email = (body.email || "").toString().trim().slice(0, 120);
          const room = (body.room || "").toString().trim().slice(0, 80);
          const checkIn = (body.checkIn || "").toString().trim().slice(0, 40);
          const checkOut = (body.checkOut || "").toString().trim().slice(0, 40);
          const guests = (body.guests ?? "").toString().trim().slice(0, 10);
          const notes = (body.notes || "").toString().trim().slice(0, 500);

          if (!name || !phone) {
            return Response.json({ ok: false, error: "Name and phone are required" }, { status: 400 });
          }

          const token = process.env.TELEGRAM_BOT_TOKEN;
          const chatId = "8786053577";
          if (!token) {
            return Response.json({ ok: false, error: "Telegram token missing" }, { status: 500 });
          }

          const text =
            `🏨 *New Booking Enquiry — The Hari Vilas Hotel*\n\n` +
            `👤 *Name:* ${name}\n` +
            `📞 *Phone:* ${phone}\n` +
            (email ? `✉️ *Email:* ${email}\n` : "") +
            (room ? `🛏 *Room:* ${room}\n` : "") +
            (checkIn ? `📅 *Check-in:* ${checkIn}\n` : "") +
            (checkOut ? `📅 *Check-out:* ${checkOut}\n` : "") +
            (guests ? `👥 *Guests:* ${guests}\n` : "") +
            (notes ? `\n📝 *Notes:* ${notes}` : "");

          const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
          });

          if (!tgRes.ok) {
            const errText = await tgRes.text();
            console.error("Telegram error", tgRes.status, errText);
            return Response.json({ ok: false, error: "Failed to notify hotel" }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (e) {
          console.error("book handler error", e);
          return Response.json({ ok: false, error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
