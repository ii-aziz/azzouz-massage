export async function POST(request) {
  const data = await request.json();

  console.log("حجز جديد:", data);
  // شكل البيانات:
  // {
  //   service: "...",
  //   gender: "...",
  //   name: "...",
  //   area: "...",
  //   time: "...",
  //   notes: "..."
  // }

  // 🔜 قريب بنركب إرسال إيميل لك هنا (SMTP)

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
