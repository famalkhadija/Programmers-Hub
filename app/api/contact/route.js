import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;
    const data = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>', // change if using custom domain like this. from: 'Your App <contact@yourdomain.com>' and add domain to resend.com/domains

      to: 'famalkhadija@example.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    // ✅ Log message to server instead of sending email
    console.log(" New Contact Message Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }  catch (err) {
  console.error("Contact API Error:", err);
  return new Response(JSON.stringify({ error: err.message }), {
    status: 500,
  });
  }
}
