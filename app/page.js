import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ display: "grid", gap: "32px" }}>

      {/* PROMO BANNER */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(60,60,60,0.9) 100%)",
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px",
          padding: "14px 16px",
          borderRadius: "14px",
          textAlign: "center",
          boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.08)",
          lineHeight: 1.6
        }}
      >
        🔥 عرض إطلاق الرياض: مساج منزلي داخل الرياض فقط – احجز الآن ويتم
        تأكيد السعر حسب موقعك ونوع الجلسة المطلوبة (رجال / نساء).
      </div>

      {/* SECTION 1: HERO WITH LOCAL IMAGE */}
      <section style={sectionShell}>
        {/* الصورة الرئيسية */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
            backgroundColor: "#000",
            height: "220px"
          }}
        >
          <img
            src="/IMG_7888.jpeg"
            alt="جلسة مساج منزلية - صورة توضح الستايل"
            style={heroImageStyle}
          />
        </div>

        {/* النص والأزرار */}
        <div style={{ padding: "24px" }}>
          {/* البادجات */}
          <div style={badgeRow}>
            <Badge dark>الرياض فقط</Badge>
            <Badge>خدمة منزلية</Badge>
            <Badge>رجال / نساء</Badge>
          </div>

          <h1 style={h1Style}>عزوز مساج</h1>

          <p style={leadP}>
            جلسات مساج منزلية احترافية داخل مدينة الرياض. استرخاء بزيوت
            دافئة، مساج علاجي لآلام العضلات، ومساج رياضي عميق للاستشفاء.
            نوصل لين بيتك أو مكتبك مع خصوصية وتعقيم كامل.
          </p>

          <div style={ctaRow}>
            <Link href="/book" style={primaryBtn}>
              احجز جلسة الآن
            </Link>

            <a
              href="https://snapchat.com/add/azizan99"
              style={ghostBtn}
            >
              تواصل سناب 👻
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={sectionCard}>
        <SectionTitle icon="💆‍♂️✨" text="ليش تختار عزوز مساج؟" />

        <div style={featureGrid}>
          <FeatureCard
            icon="🚗"
            title="نوصل لينك"
            desc="ما تحتاج تطلع من البيت. نجيك في موقعك داخل الرياض – منزل أو مكتب."
          />
          <FeatureCard
            icon="🧴"
            title="زيوت دافئة وعناية عضلية"
            desc="جلسات بزيوت مخصصة للاسترخاء أو للتخفيف من الشد في الرقبة وأسفل الظهر."
          />
          <FeatureCard
            icon="🧼"
            title="تعقيم وخصوصية"
            desc="معدات معقمة قبل وبعد كل جلسة. احترام كامل للخصوصية والحدود."
          />
          <FeatureCard
            icon="🕰️"
            title="مواعيد مرنة"
            desc="مساء / بعد الدوام / آخر الليل. نمشي مع جدولك، مو العكس."
          />
        </div>
      </section>

      {/* PACKAGES / الباقات */}
      <section style={sectionCard}>
        <SectionTitle icon="📋" text="الباقات المتوفرة" />

        <div style={servicesGrid}>
          <ServiceCard
            title="مساج استرخاء (60 دقيقة)"
            desc="راحة كاملة، نوم أعمق، تهدئة ضغطك اليومي بزيوت دافئة ولمسة ناعمة."
            price="250 ريال"
            img="/IMG_7889.webp"
            badge="راحة"
          />
          <ServiceCard
            title="مساج علاجي للشد العضلي (60 دقيقة)"
            desc="تركيز على عضلات متيبسة: رقبة، كتف، أسفل ظهر. مناسب للي يجلس كثير على الكمبيوتر."
            price="300 ريال"
            img="/IMG_7890.jpeg"
            badge="شد عضلي"
          />
          <ServiceCard
            title="مساج رياضي عميق (90 دقيقة)"
            desc="تفكيك عضلي واستشفاء بعد تمرين ثقيل أو مجهود عالي. ضغط أعمق وركّز على النقاط المتشنجة."
            price="380 ريال"
            img="/IMG_7891.webp"
            badge="رياضي"
          />
          <ServiceCard
            title="جلسة خاصة VIP داخل الرياض"
            desc="جلسة شخصية عندك إنت. هدوء، راحة، بدون انتظار ولا إزعاج صالونات."
            price="سعر حسب الموقع"
            img="/IMG_7892.jpeg"
            badge="VIP"
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link href="/book" style={primaryBtn}>
            احجز الآن
          </Link>
        </div>
      </section>

      {/* ABOUT / عن الخدمة */}
      <section
        style={{
          ...sectionCard,
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "12px",
            border: "1px solid #eee",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
            backgroundColor: "#000"
          }}
        >
          <img
            src="/IMG_7893.jpeg"
            alt="أجواء سبا نظيفة وتعقيم"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block"
            }}
          />
        </div>

        <div>
          <SectionTitle icon="🕯️" text="عن الخدمة" />

          <p style={pMain}>
            "عزوز مساج" مو صالون مزدحم. هذي خدمة مساج منزلية VIP داخل
            مدينة الرياض للناس اللي يبغون راحة فعلية بدون دوشة، بدون انتظار،
            وبدون عيون زيادة.
          </p>

          <p style={pSub}>
            الجلسات مهنية 100%: استرخاء، استشفاء، عناية بعضلاتك.
            ما فيه أي شي مخالف. احترام الحدود والخصوصية خط أحمر.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={sectionCard}>
        <SectionTitle icon="📲" text="كيف يتم الحجز؟" />

        <ol
          style={{
            margin: 0,
            padding: "0 20px",
            color: "#333",
            lineHeight: 1.7,
            fontSize: "15px"
          }}
        >
          <li>
            تعبي نموذج الحجز وتحدد نوع الجلسة + الحي + الوقت اللي يناسبك.
          </li>
          <li>يوصلنا الطلب مباشرة.</li>
          <li>
            نرجع لك للتأكيد (الوقت / التوفر / السعر النهائي حسب موقعك داخل
            الرياض).
          </li>
          <li>نوصل لموقعك ونبدأ الجلسة في جو هادي ونظيف.</li>
        </ol>

        <div
          style={{
            marginTop: "20px",
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#666"
          }}
        >
          للحجز السريع تواصل سناب 👇
          <br />
          <b>azizan99</b>
        </div>
      </section>
    </main>
  );
}

/* Components */

function Badge({ children, dark }) {
  return (
    <span
      style={{
        backgroundColor: dark ? "#000" : "#f5f5f5",
        color: dark ? "#fff" : "#333",
        border: dark ? "1px solid #000" : "1px solid #ddd",
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: 1.3
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ icon, text }) {
  return (
    <h2
      style={{
        margin: "0 0 16px 0",
        fontSize: "20px",
        lineHeight: 1.4,
        fontWeight: 700,
        color: "#111",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}
    >
      <span>{text}</span>
      <span style={{ fontSize: "18px" }}>{icon}</span>
    </h2>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#fff",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "12px",
        alignItems: "start",
        boxShadow: "0 8px 20px rgba(0,0,0,0.04)"
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          backgroundColor: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 600
        }}
      >
        {icon}
      </div>
      <div style={{ display: "grid", gap: "4px" }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#111",
            lineHeight: 1.4
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#444",
            lineHeight: 1.5
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, price, img, badge }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        backgroundColor: "#fff",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
        display: "grid",
        gridTemplateRows: "160px auto"
      }}
    >
      {/* صورة الباقة */}
      <div
        style={{
          width: "100%",
          height: "160px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: 0.92
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 8px",
            borderRadius: "8px",
            lineHeight: 1.3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
          }}
        >
          {badge}
        </div>
      </div>

      {/* تفاصيل الخدمة */}
      <div style={{ padding: "16px", display: "grid", gap: "6px" }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#111",
            lineHeight: 1.4
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#444",
            lineHeight: 1.5
          }}
        >
          {desc}
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#000",
            marginTop: "4px"
          }}
        >
          {price}
        </div>
      </div>
    </div>
  );
}

/* shared styles */
const sectionShell = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: 0,
  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  border: "1px solid #eee",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "1fr"
};

const heroImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  objectPosition: "center",
  display: "block"
};

const badgeRow = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#555",
  marginBottom: "12px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px"
};

const h1Style = {
  margin: "0 0 12px 0",
  fontSize: "28px",
  lineHeight: 1.3,
  fontWeight: 700,
  color: "#111"
};

const leadP = {
  margin: "0 0 20px 0",
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#333",
  fontWeight: 400
};

const ctaRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px"
};

const sectionCard = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  border: "1px solid #eee"
};

const featureGrid = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px,100%),1fr))"
};

const servicesGrid = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))"
};

const pMain = {
  margin: 0,
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#333"
};

const pSub = {
  margin: "16px 0 0 0",
  fontSize: "14px",
  lineHeight: 1.7,
  color: "#555"
};

const primaryBtn = {
  textDecoration: "none",
  backgroundColor: "#000",
  color: "#fff",
  padding: "12px 16px",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: 600,
  textAlign: "center",
  flexShrink: 0
};

const ghostBtn = {
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
};
