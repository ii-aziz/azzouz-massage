export const metadata = {
  title: "عزوز مساج | خدمة مساج منزلي في الرياض",
  description: "مساج استرخاء ورياضي داخل الرياض - نجيك لين البيت. احجز الآن."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{
        margin: 0,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        backgroundColor: "#fafafa",
        color: "#111"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px 80px 24px"
        }}>
          {children}

          <footer style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid #ddd",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#444"
          }}>
            <div style={{ fontWeight: 600 }}>عزوز مساج</div>
            <div>خدمة مساج منزلية داخل الرياض</div>
            <div>لحجز أسرع: سناب <span style={{ fontWeight: 600 }}>azizan99</span></div>
            <div style={{ marginTop: "8px", opacity: 0.7 }}>الخصوصية محترمة / أدوات معقمة / راحة كاملة</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
