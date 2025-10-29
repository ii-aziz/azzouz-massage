"use client";
import { useState } from "react";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  async function loadBookings() {
    setError("");
    setLoaded(false);

    try {
      const res = await fetch("/api/admin/bookings", {
        method: "GET",
        headers: {
          "x-admin-key": key
        }
      });

      if (!res.ok) {
        setError("مفتاح غير صحيح");
        return;
      }

      const data = await res.json();
      if (!data.ok) {
        setError("مفتاح غير صحيح");
        return;
      }

      setBookings(data.bookings || []);
      setLoaded(true);
    } catch (err) {
      console.error(err);
      setError("خطأ في الاتصال");
    }
  }

  return (
    <main style={{
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
      border: "1px solid #eee",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "#111"
    }}>
      <h1 style={{
        marginTop: 0,
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: 1.4,
        color: "#000"
      }}>
        لوحة الحجوزات
      </h1>

      <p style={{ marginTop: "0", color: "#444", fontSize: "13px", lineHeight: 1.6 }}>
        هذه الصفحة خاصة فيك أنت فقط. أدخل الباسورد ثم اضغط "عرض الحجوزات".
      </p>

      <div style={{ display: "grid", gap: "12px", maxWidth: "320px", marginBottom: "20px" }}>
        <label style={{ fontWeight: 600 }}>الباسورد</label>
        <input
          type="password"
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "12px 14px",
            fontSize: "15px",
            lineHeight: 1.4,
            outline: "none",
            backgroundColor: "#fff"
          }}
          placeholder="ادخل الباسورد الإداري"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <button
          onClick={loadBookings}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            width: "100%"
          }}
        >
          عرض الحجوزات
        </button>
      </div>

      {error && (
        <div style={{
          backgroundColor: "#ffefef",
          color: "#a00000",
          border: "1px solid #e0a0a0",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "13px",
          fontWeight: 500,
          marginBottom: "16px"
        }}>
          {error}
        </div>
      )}

      {loaded && bookings.length === 0 && (
        <div style={{
          backgroundColor: "#f6f6f6",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          fontSize: "13px"
        }}>
          لا يوجد حجوزات حتى الآن.
        </div>
      )}

      {loaded && bookings.length > 0 && (
        <div style={{ display: "grid", gap: "12px" }}>
          {bookings.map((b, i) => (
            <div key={i} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "16px",
              backgroundColor: "#fafafa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
            }}>
              <div><b>الاسم:</b> {b.name}</div>
              <div><b>الجنس:</b> {b.gender}</div>
              <div><b>نوع الجلسة:</b> {b.service}</div>
              <div><b>الحي داخل الرياض:</b> {b.area}</div>
              <div><b>الوقت المطلوب:</b> {b.time}</div>
              {b.notes && <div><b>ملاحظات:</b> {b.notes}</div>}
              <div style={{ fontSize: "12px", color: "#555", marginTop: "8px" }}>
                {new Date(b.createdAt).toLocaleString("ar-SA")}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
