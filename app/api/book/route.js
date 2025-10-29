// app/api/book/route.js
import nodemailer from "nodemailer";

// بسيط: معدل طلبات in-memory (Vercel serverless قد يعيد تشغيل الـ container، لذلك هذا حل مبدئي فقط)
// للإنتاج استخدم Redis / Upstash للـ rate limiting مو هذا.
const RATE_LIMIT_DB = new Map(); // key = ip, value = { count, windowStart }

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 10); // عدد الطلبات
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60 * 60 * 1000); // نافذة بالميللي ثانية (1 ساعة)

function sanitize(s) {
  if (!s) return "";
  return String(s)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\r\n|\n|\r)/gm, " ")
    .trim()
    .slice(0, 1000); // safety length
}

export async function POST(request) {
  try {
    // تحقق رمز الموقع (هذه طريقة بسيطة تمنع طلبات عشوائية)
    const siteTokenHeader = request.headers.get("x-site-token") || "";
    if (!process.env.SECRET_SITE_TOKEN || siteTokenHeader !== process.env.SECRET_SITE_TOKEN) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401 });
    }

    // rate limiting بسيط
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const now = Date.now();
    const rec = RATE_LIMIT_DB.get(ip) || { count: 0, windowStart: now };
    if (now - rec.windowStart > RATE_LIMIT_WINDOW_MS) {
      rec.count = 0;
      rec.windowStart = now;
    }
    rec.count += 1;
    RATE_LIMIT_DB.set(ip, rec);
    if (rec.count > RATE_LIMIT_MAX) {
      return new Response(JSON.stringify({ ok: false, error: "Rate limit exceeded" }), { status: 429 });
    }

    const data = await request.json();

    // validations
    const required = ["service", "gender", "name", "area", "time"];
    for (const r of required) {
      if (!data[r] || String(data[r]).trim().length === 0) {
        return new Response(JSON.stringify({ ok: false, error: `${r} is required` }), { status: 400 });
      }
    }

    // sanitize
    const service = sanitize(data.service);
    const gender = sanitize(data.gender);
    const name = sanitize(data.name);
    const area = sanitize(data.area);
    const time = sanitize(data.time);
    const notes = sanitize(data.notes || "");

    console.log("حجز جديد:", { service, gender, name, area, time });

    // transporter (Outlook / Hotmail example)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true لو 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height:1.6; color:#111; font-size:14px">
        <h2 style="margin:0 0 12px 0; font-size:16px; font-weight:600; color:#000">حجز جديد - عزوز مساج</h2>
        <div><b>نوع الجلسة:</b> ${service}</div>
        <div><b>العميل:</b> ${name}</div>
        <div><b>الجنس:</b> ${gender}</div>
        <div><b>الموقع داخل الرياض:</b> ${area}</div>
        <div><b>الوقت المطلوب:</b> ${time}</div>
        <div><b>ملاحظات إضافية:</b> ${notes || "لا يوجد"}</div>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd" />
        <div style="font-size:12px;color:#666">أُرسل تلقائياً من صفحة الحجز.</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"عزوز مساج" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_EMAIL_TO,
      subject: `حجز جديد من ${name} - ${service}`,
      html: mailHtml
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
