"use client";
import { useState } from "react";
import Link from "next/link";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    sessionType: "",
    gender: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^05\d{8}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("الرجاء إدخال رقم جوال صحيح يبدأ بـ 05 ويتكون من 10 أرقام");
      return;
    }

    console.log("Booking Data:", form);
    alert("تم إرسال الحجز بنجاح ✅ سيتم التواصل معك لتأكيد الموعد.");

    setForm({
      name: "",
      phone: "",
      sessionType: "",
      gender: "",
      date: "",
      notes: "",
    });
  };

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "32px",
        display: "grid",
        gap: "16px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
      }}
    >
      {/* صورة فوق */}
      <div
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#000",
        }}
      >
        <img
          src="/IMG_7888.jpeg"
          alt="جلسة مساج بزيوت دافئة"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        احجز جلستك الآن 💆‍♂️
      </h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        يرجى تعبئة البيانات التالية ليتم التواصل معك لتأكيد الموعد.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "14px", marginTop: "16px" }}
      >
        <label>
          الاسم الكامل:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="اكتب اسمك هنا"
            style={inputStyle}
          />
        </label>

        <label>
          رقم الجوال:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="05xxxxxxxx"
            style={inputStyle}
          />
        </label>

        <label>
          نوع الجلسة:
          <select
            name="sessionType"
            value={form.sessionType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">اختر نوع الجلسة</option>
            <option value="استرخاء">مساج استرخاء</option>
            <option value="شد عضلي">مساج علاجي للشد العضلي</option>
            <option value="رياضي">مساج رياضي عميق</option>
            <option value="VIP">جلسة خاصة VIP</option>
          </select>
        </label>

        <label>
          الجنس:
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">اختر</option>
            <option value="رجال">رجال</option>
            <option value="نساء">نساء</option>
          </select>
        </label>

        <label>
          التاريخ والوقت:
          <input
            type="datetime-local"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          ملاحظات إضافية:
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="أي تفاصيل إضافية..."
            style={{ ...inputStyle, height: "80px" }}
          />
        </label>

        {/* زر إرسال الطلب */}
        <button
          type="submit"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          إرسال الحجز
        </button>

        {/* زر العودة للصفحة الرئيسية */}
        <Link
          href="/"
          style={{
            textAlign: "center",
            textDecoration: "none",
            backgroundColor: "#fff",
            border: "1px solid #000",
            color: "#000",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          ⬅️ الرجوع للصفحة الرئيسية
        </Link>
      </form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginTop: "4px",
  fontSize: "15px",
};
