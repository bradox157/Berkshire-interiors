// Supabase Edge Function: notify-contact-inquiry
//
// Triggered by a Database Webhook on INSERT into `contact_inquiries`.
// Sends an email to the studio owner via Resend so every website inquiry
// lands in the inbox instead of only sitting in the Supabase table.
//
// Required secrets (set with `supabase secrets set`):
//   RESEND_API_KEY   - API key from resend.com
//   NOTIFY_TO_EMAIL  - the inbox that should receive inquiries
//                       (e.g. berkshireluxuryinteriors@gmail.com)
//   NOTIFY_FROM_EMAIL - a verified sender, e.g. onboarding@resend.dev
//                        for testing, or notifications@yourdomain.com
//                        once you verify a domain in Resend.

Deno.serve(async (req) => {
  try {
    const payload = await req.json();

    // Database Webhooks send { type, table, record, old_record, schema }
    const record = payload.record ?? payload.new ?? payload;

    const {
      name = 'Unknown',
      email = 'Unknown',
      phone = 'Unknown',
      service = 'Unknown',
      message = '',
    } = record ?? {};

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const NOTIFY_TO_EMAIL = Deno.env.get('NOTIFY_TO_EMAIL');
    const NOTIFY_FROM_EMAIL = Deno.env.get('NOTIFY_FROM_EMAIL') ?? 'onboarding@resend.dev';

    if (!RESEND_API_KEY || !NOTIFY_TO_EMAIL) {
      return new Response(
        JSON.stringify({ error: 'Missing RESEND_API_KEY or NOTIFY_TO_EMAIL secret' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color:#065f46;">New inquiry — Berkshire Luxury Interiors</h2>
        <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding:6px 0; font-weight:600; width:120px;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Phone</td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Service</td><td>${escapeHtml(service)}</td></tr>
        </table>
        <p style="margin-top:16px; font-weight:600;">Project details</p>
        <p style="white-space: pre-wrap; background:#f8f7f4; padding:12px 16px; border-radius:8px;">${escapeHtml(message)}</p>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Berkshire Interiors Website <${NOTIFY_FROM_EMAIL}>`,
        to: [NOTIFY_TO_EMAIL],
        reply_to: email,
        subject: `New inquiry from ${name} — ${service}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return new Response(JSON.stringify({ error: 'Resend request failed', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});

function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
