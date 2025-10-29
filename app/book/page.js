"use client";
import { useState } from "react";

export default function BookPage() {
  const [service, setService] = useState("مساج استرخاء (60 دقيقة)");
  const [gender, setGender] = useState("رجال");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  async function submitBooking(e) {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-site-token": process.env.NEXT_PUBLIC_SITE_TOKEN
        },
        body: JSON.stringify({
          service,
          gender,
          name,
          area,
          time,
          notes
        })
      });

      if (res.ok) {
        setStatus("تم استلام طلبك ✅ سيتم التواصل معك للتأكيد النهائي.");
        setService("مساج استرخاء (60 دقيقة)");
        setGender("رجال");
        setName("");
        setArea("");
        setTime("");
        setNotes("");
      } else {
        setStatus("صار خطأ، حاول مرة ثانية أو تواصل على السناب azizan99 👻");
      }
    } catch (err) {
      console.error(err);
      setStatus("صار خطأ في الاتصال. جرّب بعد شوي 🙏");
    }
  }

  return (
    <main style={{
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
      border: "1px solid #eee"
    }}>
      <h1 style={{
        marginTop: 0,
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: 1.4,
        color: "#111"
      }}>
        حجز جلسة
      </h1>

      <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.6, marginTop: 0 }}>
        الخدمة متاحة داخل <b>مدينة الرياض فقط</b> (منزل / مكتب).<br />
        بعد إرسال الطلب، بنرجع لك للتأكيد بخصوص الوقت والسعر النهائي.
      </p>

      <form onSubmit={submitBooking} style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        
        <div>
          <label style={labelStyle}>نوع الجلسة</label>
          <select
            style={inputStyle}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>مساج استرخاء (60 دقيقة)</option>
            <option>مساج علاجي للشد العضلي (60 دقيقة)</option>
            <option>مساج رياضي عميق (90 دقيقة)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>الجنس</label>
          <select
            style={inputStyle}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>رجال</option>
            <option>نساء</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>اسمك</label>
          <input
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثال: أبو محمد / أم خالد"
            required
          />
        </div>

        <div>
          <label style={labelStyle}>الحي / الموقع داخل الرياض</label>
          <input
            style={inputStyle}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="الياسمين، النرجس، العقيق..."
            required
          />
        </div>

        <div>
          <label style={labelStyle}>الوقت اللي يناسبك</label>
          <input
            style={inputStyle}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="اليوم بعد العشاء / بكرة العصر / السبت الظهر"
            required
          />
        </div>

        <div>
          <label style={labelStyle}>ملاحظات (اختياري)</label>
          <textarea
            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="شد في الرقبة، ألم أسفل الظهر، أبغى جلسة هادئة..."
          />
        </div>

        <button type="submit" style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "14px 16px",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer"
        }}>
          إرسال الطلب
        </button>
      </form>

      {status && (
        <div style={{
          marginTop: "16px",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: 1.5,
          color: "#111",
          backgroundColor: "#f6f6f6",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "12px"
        }}>
          {status}
        </div>
      )}

      <div style={{
        marginTop: "24px",
        fontSize: "13px",
        lineHeight: 1.6,
        color: "#666"
      }}>
        للحجز السريع تواصل سناب 👇<br />
        <b>azizan99</b>
      </div>
    </main>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "#111",
  marginBottom: "6px"
};

const inputStyle = {
  width: "100%",
  borderRadius: "10px",
  border: "1px solid #ccc",
  padding: "12px 14px",
  fontSize: "15px",
  lineHeight: 1.4,
  outline: "none",
  backgroundColor: "#fff"
};
