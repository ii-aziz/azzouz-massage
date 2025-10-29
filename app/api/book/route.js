export async function POST(request) {
  const data = await request.json();

  console.log("حجز جديد:", data);

  // TODO: هنا تقدر فيما بعد تبرمج إرسال بريد لك تلقائي

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
