import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ display: "grid", gap: "32px" }}>

      {/* Hero Section مع صورة */}
      <section style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "0",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
        overflow: "hidden"
      }}>

        {/* صورة الغلاف */}
        <div
          style={{
            width: "100%",
            height: "180px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584466977773-e625c37cdd40?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div style={{ padding: "24px" }}>
          <div style={{ fontSize: "13px", fontWeight: 500, color: "#555", marginBottom: "8px" }}>
            الرياض فقط · خدمة منزلية
          </div>

          <h1 style={{
            margin: "0 0 12px 0",
            fontSize: "28px",
            lineHeight: 1.3,
            fontWeight: 700,
            color: "#111"
          }}>
            عزوز مساج
          </h1>

          <p style={{
            margin: "0 0 20px 0",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#333",
            fontWeight: 400
          }}>
            جلسات مساج مهنية داخل مدينة الرياض.<br />
            استرخاء، شد عضلي، مساج رياضي عميق.<br />
            نوصل للبيت أو المكتب مع احترام كامل للخصوصية، للرجال والنساء.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/book" style={{
              textDecoration: "none",
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              textAlign: "center",
              flexShrink: 0
            }}>
              احجز جلسة الآن
            </Link>

            <a
              href="https://snapchat.com/add/azizan99"
              style={{
                textDecoration: "none",
                backgroundColor: "#fff",
                border: "1px solid #000",
                color: "#000",
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                textAlign: "center",
                flexShrink: 0
              }}
            >
              تواصل سناب 👻
            </a>
          </div>
        </div>
      </section>

      {/* خدمات / باقات */}
      <section style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        border: "1px solid #eee"
      }}>
        <h2 style={{
          margin: "0 0 16px 0",
          fontSize: "20px",
          lineHeight: 1.4,
          fontWeight: 700,
          color: "#111"
        }}>
          الباقات المتوفرة
        </h2>

        <div style={{
          display: "grid",
          gap: "16px"
        }}>
          <ServiceCard
            title="مساج استرخاء (60 دقيقة)"
            desc="راحة كاملة، تخفيف توتر، نوم أعمق."
            price="250 ريال"
            img="https://images.unsplash.com/photo-1600334129128-685c93f6022f?auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            title="مساج علاجي للشد العضلي (60 دقيقة)"
            desc="تركيز على مناطق الألم بعد دوام طويل أو جلوس كمبيوتر."
            price="300 ريال"
            img="https://images.unsplash.com/photo-1580281658629-47dab5c4c4e0?auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            title="مساج رياضي عميق (90 دقيقة)"
            desc="استشفاء للعضلات بعد تمرين أو حمل أثقال."
            price="380 ريال"
            img="https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            title="زيارة منزلية خاصة (داخل الرياض)"
            desc="جلستك في مكانك أنت. خصوصية، تعقيم كامل للمعدات."
            price="سعر خاص حسب الموقع"
            img="https://images.unsplash.com/photo-1609899537878-94f247475e70?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      {/* ليش تختارنا */}
      <section style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        border: "1px solid #eee"
      }}>
        <h2 style={{
          margin: "0 0 16px 0",
          fontSize: "20px",
          lineHeight: 1.4,
          fontWeight: 700,
          color: "#111"
        }}>
          ليش تختار عزوز مساج؟
        </h2>

        <ul style={{
          margin: 0,
          padding: "0 20px",
          color: "#333",
          lineHeight: 1.7,
          fontSize: "15px"
        }}>
          <li>خدمة منزلية: نوصل لك داخل الرياض.</li>
          <li>رجال ونساء – باحترام وسياسة واضحة.</li>
          <li>تعقيم كامل قبل وبعد كل جلسة.</li>
          <li>هدوء وخصوصية بدون أي إزعاج.</li>
          <li>لا تحتاج تروح سبا مزدحم ولا تنتظر دورك.</li>
        </ul>

        <div style={{ marginTop: "20px" }}>
          <Link href="/book" style={{
            textDecoration: "none",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 600,
            textAlign: "center",
            display: "inline-block"
          }}>
            احجز الآن
          </Link>
        </div>
      </section>

    </main>
  );
}

function ServiceCard({ title, desc, price, img }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      backgroundColor: "#fff",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)"
    }}>
      <div
        style={{
          width: "100%",
          height: "140px",
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div style={{ padding: "16px", display: "grid", gap: "6px" }}>
        <div style={{ fontSize: "16px", fontWeight: 600, color: "#111", lineHeight: 1.4 }}>
          {title}
        </div>
        <div style={{ fontSize: "14px", color: "#444", lineHeight: 1.5 }}>
          {desc}
        </div>
        <div style={{ fontSize: "15px", fontWeight: 600, color: "#000", marginTop: "4px" }}>
          {price}
        </div>
      </div>
    </div>
  );
}
