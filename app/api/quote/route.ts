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
    timeWindow: formData.get("timeWindow")
  };

  // TODO: Connect to Resend or Nodemailer and send quote request emails.
  // This stub keeps the interface clean while you add credentials later.
  console.log("Quote request received", payload);

  return NextResponse.json({ ok: true });
}
