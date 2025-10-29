// app/api/admin/bookings/route.js
import { bookingsMemory } from "../../book/store";

export async function GET(request) {
  // حماية بلوحة الادمن بباسورد
  // نطلب هيدر x-admin-key ونقارنه مع ADMIN_DASHBOARD_KEY من env
  const adminKeyHeader = request.headers.get("x-admin-key") || "";
  if (!process.env.ADMIN_DASHBOARD_KEY || adminKeyHeader !== process.env.ADMIN_DASHBOARD_KEY) {
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401 });
  }

  // نرجع كل الحجوزات
  return new Response(JSON.stringify({
    ok: true,
    bookings: bookingsMemory.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
