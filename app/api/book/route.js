import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    // تحقق من الحقول الأساسية
    if (!data.service || !data.name || !data.gender || !data.area || !data.time) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }

    // جهز الإيميل
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true لو تستخدم 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; line-height:1.6; color:#111; font-size:14px">
        <h2 style="margin:0 0 12px 0; font-size:16px; font-weight:600; color:#000">حجز جديد - عزوز مساج</h2>
        <div><b>الاسم:</b> ${data.name}</div>
        <div><b>الجنس:</b> ${data.gender}</div>
        <div><b>نوع الجلسة:</b> ${data.service}</div>
        <div><b>الحي داخل الرياض:</b> ${data.area}</div>
        <div><b>الوقت المطلوب:</b> ${data.time}</div>
        <div><b>ملاحظات:</b> ${data.notes || "لا يوجد"}</div>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd" />
        <div style="font-size:12px;color:#666">
          رسالة أوتوماتيكية من موقع عزوز مساج.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"عزوز مساج" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_EMAIL_TO,
      subject: `حجز جديد من ${data.name} (${data.gender})`,
      html: htmlBody
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
