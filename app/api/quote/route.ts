import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    services: formData.getAll("services"),
    size: formData.get("size"),
    spigot: formData.get("spigot"),
    contactMethod: formData.get("contactMethod"),
    notes: formData.get("notes")
  };

  const response = await fetch(
    "https://formsubmit.co/ajax/cartercedric35@gmail.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        _subject: "New Pressure Wash of Atlanta Quote Request",
        Name: payload.name,
        Phone: payload.phone,
        Email: payload.email,
        Address: payload.address,
        Services: payload.services.map((item) => String(item)).join(", "),
        "Approximate Size": payload.size,
        "Exterior Spigot": payload.spigot,
        "Preferred Contact Method": payload.contactMethod,
        "Additional Notes": payload.notes
      })
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Unable to send request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
