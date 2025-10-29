import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ display: "grid", gap: "32px" }}>

      {/* Hero Section */}
      <section style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        border: "1px solid #eee"
      }}>
        <div style={{ fontSize: "14px", fontWeight: 500, color: "#555", marginBottom: "8px" }}>
          الرياض فقط
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
          خدمة مساج منزلية احترافية داخل مدينة الرياض – نجيك لين البيت أو المكتب.
          جلسات استرخاء، شد عضلي، ومساج رياضي عميق. خصوصية، تعقيم، وراحة بدون مشوار.
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

          <a href="https://snapchat.com/add/azizan99" style={{
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
          }}>
            تواصل سناب 👻
          </a>
        </div>
      </section>

      {/* Services / Pricing */}
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
          />
          <ServiceCard
            title="مساج علاجي للشد العضلي (60 دقيقة)"
            desc="تركيز على مناطق الألم والشد بعد دوام طويل أو جلوس كمبيوتر."
            price="300 ريال"
          />
          <ServiceCard
            title="مساج رياضي عميق (90 دقيقة)"
            desc="استشفاء، تفكيك العضلات بعد تمرين أو حمل أثقال."
            price="380 ريال"
          />
          <ServiceCard
            title="زيارة منزلية خاصة / جدة رجال"
            desc="خصوصية عالية – نجي لين عنوانك داخل الرياض."
            price="سعر خاص حسب الموقع"
          />
        </div>
      </section>

      {/* Trust / Why us */}
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
          <li>نجيك للبيت – ما تضيع وقتك بالمشاوير.</li>
          <li>تعقيم كامل للمعدات قبل وبعد كل جلسة.</li>
          <li>احترام كامل للخصوصية داخل منزلك.</li>
          <li>حجز واضح ومؤكد – ما فيه مفاجآت.</li>
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

function ServiceCard({ title, desc, price }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "16px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }}>
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
  );
}
