import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { firstName, lastName, email, business, service, message } =
    await req.json();

  const { error } = await resend.emails.send({
    from: "Y2K Solutions <hello@y2ksolutionsllc.com>",
    to: "hello@y2ksolutionsllc.com",
    subject: `New inquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business:</strong> ${business || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <p><strong>Message:</strong> ${message || "None"}</p>
      <hr />
      <p>Reply directly to this email to respond to ${firstName}.</p>
    `,
    replyTo: email,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const params = new URLSearchParams({ firstName, lastName, email, business, service, message });
  await fetch(`${process.env.GOOGLE_SHEET_URL}?${params.toString()}`);

  return NextResponse.json({ success: true });
}
