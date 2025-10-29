// app/api/book/store.js

// مصفوفة في الذاكرة بنسجّل فيها الطلبات
// ملاحظة: هذا يروح لو Vercel سوّى restart أو deploy جديد.
// الهدف هنا أنك تقدر تتابع live وتفهم البزنس، مو تخزين دائم.
export const bookingsMemory = [];
