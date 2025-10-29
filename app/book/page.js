// داخل app/book/page.js — داخل submitBooking
const res = await fetch("/api/book", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-site-token": process.env.NEXT_PUBLIC_SITE_TOKEN // NEXT_PUBLIC_... متاحة على الclient
  },
  body: JSON.stringify({
    service,
    gender,
    name,
    area,
    time,
    notes
  })
});
