// app/api/book/route.js
import { bookingsMemory } from "./store";

function sanitize(s) {
  if (!s) return "";
  return String(s)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .slice(0, 500);
}

export async function POST(request) {
  try {
    // حماية بسيطة برمز
    const siteTokenHeader = request.headers.get("x-site-token") || "";
    if (!process.env.SECRET_SITE_TOKEN || siteTokenHeader !== process.env.SECRET_SITE_TOKEN) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401 });
    }

    const data = await request.json();

    // الحقول المطلوبة
    const required = ["service", "gender", "name", "area", "time"];
    for (const r of required) {
      if (!data[r] || String(data[r]).trim().length === 0) {
        return new Response(
          JSON.stringify({ ok: false, error: `${r} is required` }),
          { status: 400 }
        );
      }
    }

    // ننظف ونجهز
    const booking = {
      service: sanitize(data.service),
      gender: sanitize(data.gender),
      name: sanitize(data.name),
      area: sanitize(data.area),
      time: sanitize(data.time),
      notes: sanitize(data.notes || ""),
      createdAt: new Date().toISOString()
    };

    // نحفظه بالذاكرة
    bookingsMemory.push(booking);

    console.log("حجز جديد:", booking);

    // رد للفرونت
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
