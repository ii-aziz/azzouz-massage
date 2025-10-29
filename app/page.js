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
        🔥 عرض إطلاق الرياض:  
        <span style={{ fontWeight: "700" }}>مساج منزلي داخل الرياض فقط</span>  
        – احجز الآن ويتم تأكيد السعر حسب الموقع والموديل المطلوب (رجال / نساء).
      </div>

      {/* SECTION 1: HERO WITH IMAGE */}
      <section style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: 0,
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr",
      }}>

        {/* صورة علوية */}
        <div
          style={{
            width: "100%",
            height: "220px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584466977773-e625c37cdd40?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* نص وأزرار */}
        <div style={{ padding: "24px" }}>
          {/* البادجات */}
          <div style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#555",
            marginBottom: "12px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}>
            <Badge dark>الرياض فقط</Badge>
            <Badge>خدمة منزلية</Badge>
            <Badge>رجال / نساء</Badge>
          </div>

          {/* العنوان + الوصف */}
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
            جلسات مساج منزلية احترافية داخل مدينة الرياض.  
            استرخاء بزيوت دافئة، مساج علاجي لآلام العضلات،
            ومساج رياضي عميق للاستشفاء.  
            نوصل لين بيتك أو مكتبك مع خصوصية وتعقيم كامل.
          </p>

          {/* الأزرار */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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

      {/* SECTION 2: WHY US */}
      <section style={sectionCard}>
        <SectionTitle
          icon="💆‍♂️✨"
          text="ليش تختار عزوز مساج؟"
        />

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

      {/* SECTION 3: PACKAGES WITH IMAGES */}
      <section style={sectionCard}>
        <SectionTitle
          icon="📋"
          text="الباقات المتوفرة"
        />

        <div style={servicesGrid}>
          <ServiceCard
            title="مساج استرخاء (60 دقيقة)"
            desc="راحة كاملة، نوم أعمق، تهدئة ضغطك اليومي بزيوت دافئة ولمسة ناعمة."
            price="250 ريال"
            img="https://images.unsplash.com/photo-1600334129128-685c93f6022f?auto=format&fit=crop&w=900&q=80"
            badge="راحة"
          />
          <ServiceCard
            title="مساج علاجي للشد العضلي (60 دقيقة)"
            desc="تركيز على عضلات متيبسة: رقبة، كتف، أسفل ظهر. مناسب لحمّلة المكتب."
            price="300 ريال"
            img="https://images.unsplash.com/photo-1580281658629-47dab5c4c4e0?auto=format&fit=crop&w=900&q=80"
            badge="شد عضلي"
          />
          <ServiceCard
            title="مساج رياضي عميق (90 دقيقة)"
            desc="تفكيك عضلي واستشفاء بعد تمرين ثقيل. ضغط أعمق وتركز على نقاط الشد."
            price="380 ريال"
            img="https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=900&q=80"
            badge="رياضي"
          />
          <ServiceCard
            title="جلسة خاصة VIP داخل الرياض"
            desc="جلسة شخصية عندك إنت. راحة وهدوء بدون انتظار ولا إزعاج صالونات."
            price="سعر حسب الموقع"
            img="https://images.unsplash.com/photo-1609899537878-94f247475e70?auto=format&fit=crop&w=900&q=80"
            badge="VIP"
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link href="/book" style={primaryBtn}>
            احجز الآن
          </Link>
        </div>
      </section>

      {/* SECTION 4: ABOUT / من نحن */}
      <section style={{
        ...sectionCard,
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "1fr"
      }}>
        {/* صورة سبا (مناشف ملفوفة + شموع) */}
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "12px",
            border: "1px solid #eee",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600028068383-e9832cbf5d1b?auto=format&fit=crop&w=900&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.07)"
          }}
        />

        <div>
          <SectionTitle icon="🕯️" text="عن الخدمة" />

          <p style={pMain}>
            "عزوز مساج" مو صالون مزدحم. هذي خدمة مساج منزلية VIP داخل
            مدينة الرياض للناس اللي يبغون راحة فعلية بدون دوشة، بدون انتظار،
            وبدون عيون زيادة.
          </p>

          <p style={pSub}>
            الجلسات مهنية 100%: استرخاء، استشفاء، عناية بعضلاتك.
            ما فيه أي شي مخالف. احترام حدود وخصوصية العميل خط أحمر.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section style={sectionCard}>
        <SectionTitle
          icon="📲"
          text="كيف يتم الحجز؟"
        />

        <ol style={{
          margin: 0,
          padding: "0 20px",
          color: "#333",
          lineHeight: 1.7,
          fontSize: "15px"
        }}>
          <li>تعبي نموذج الحجز وتحدد نوع الجلسة + الحي + الوقت اللي يناسبك.</li>
          <li>يوصلنا الطلب مباشرة.</li>
          <li>نرجع لك للتأكيد (الوقت / التوفر / السعر حسب موقعك).</li>
          <li>نوصل لموقعك ونبدأ الجلسة في جو هادي ونضيف.</li>
        </ol>

        <div style={{
          marginTop: "20px",
          fontSize: "13px",
          lineHeight: 1.6,
          color: "#666"
        }}>
          للحجز السريع تواصل سناب 👇<br />
          <b>azizan99</b>
        </div>
      </section>

    </main>
  );
}

/* Reusable bits */

function Badge({ children, dark }) {
  return (
    <span style={{
      backgroundColor: dark ? "#000" : "#f5f5f5",
      color: dark ? "#fff" : "#333",
      border: dark ? "1px solid #000" : "1px solid #ddd",
      padding: "4px 8px",
      borderRadius: "6px",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: 1.3
    }}>
      {children}
    </span>
  );
}

function SectionTitle({ icon, text }) {
  return (
    <h2 style={{
      margin: "0 0 16px 0",
      fontSize: "20px",
      lineHeight: 1.4,
      fontWeight: 700,
      color: "#111",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
      <span>{text}</span>
      <span style={{ fontSize: "18px" }}>{icon}</span>
    </h2>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "16px",
      backgroundColor: "#fff",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "12px",
      alignItems: "start",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)"
    }}>
      <div style={{
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
      }}>
        {icon}
      </div>
      <div style={{ display: "grid", gap: "4px" }}>
        <div style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#111",
          lineHeight: 1.4
        }}>
          {title}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#444",
          lineHeight: 1.5
        }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, price, img, badge }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      backgroundColor: "#fff",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
      display: "grid",
      gridTemplateRows: "160px auto"
    }}>
      {/* صورة الباقة */}
      <div
        style={{
          width: "100%",
          height: "160px",
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        <div style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 600,
          padding: "4px 8px",
          borderRadius: "8px",
          lineHeight: 1.3
        }}>
          {badge}
        </div>
      </div>

      {/* تفاصيل الخدمة */}
      <div style={{ padding: "16px", display: "grid", gap: "6px" }}>
        <div style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#111",
          lineHeight: 1.4
        }}>
          {title}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#444",
          lineHeight: 1.5
        }}>
          {desc}
        </div>
        <div style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#000",
          marginTop: "4px"
        }}>
          {price}
        </div>
      </div>
    </div>
  );
}

/* shared styles */
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
