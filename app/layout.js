export const metadata = {
  title: "عزوز مساج | مساج منزلي في الرياض",
  description: "جلسات مساج احترافية داخل مدينة الرياض – نجي لين بيتك. استرخاء، شد عضلي، رياضي."
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
            <div style={{ fontWeight: 600, fontSize: "15px", color: "#000" }}>عزوز مساج</div>
            <div>مساج منزلي داخل مدينة الرياض</div>
            <div>حجز أسرع عبر السناب: <span style={{ fontWeight: 600 }}>azizan99</span> 👻</div>
            <div style={{ marginTop: "8px", opacity: 0.7, fontSize: "12px", lineHeight: 1.6 }}>
              جلسات استرخاء وعناية عضلية فقط. جميع الخدمات قانونية ومحترمة وغير مخالفة.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
