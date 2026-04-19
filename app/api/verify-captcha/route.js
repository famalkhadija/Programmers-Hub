export async function POST(req) {
  const { token } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  const data = await res.json();

  if (!data.success) {
    return new Response(
      JSON.stringify({ success: false, message: 'Captcha verification failed' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }, 
      }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }, 
  });
}
