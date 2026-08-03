import { useState, type FormEvent } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { supabase } from '@/lib/supabase';
import { services } from '@/data/services';
import { Phone, MapPin, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const contactInfo = [
  { icon: MapPin, label: 'Visit us', value: 'Woodlands Mall, Wood Ave, Nairobi' },
  { icon: Phone, label: 'Call us', value: '0713 496125', href: 'tel:0713496125' },
  { icon: Mail, label: 'Email us', value: 'berkshireluxuryinteriors@gmail.com', href: 'mailto:berkshireluxuryinteriors@gmail.com' },
  { icon: Clock, label: 'Working hours', value: 'Mon – Sat: 8:00am – 6:00pm' },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      service: String(data.get('service') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service || !payload.message) {
      setStatus('error');
      setErrorMsg('Please fill in every field so we can give you a proper response.');
      return;
    }

    const { error } = await supabase.from('contact_inquiries').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or call us on 0713 496125.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <section id="contact" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let’s build something <span className="italic text-emerald-700">beautiful.</span>
            </>
          }
          description="Tell us about your space and what you envision. We’ll get back to you within one business day with next steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Contact info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-ink-950 p-8 text-cream-100 sm:p-10">
              <div>
                <h3 className="font-serif text-2xl font-medium text-cream-50">Studio details</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                  Based at Woodlands Mall in the heart of Nairobi — convenient for clients across the city.
                  Pop in for a consultation or reach us any of the ways below.
                </p>

                <ul className="mt-8 space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                        <item.icon size={18} />
                      </span>
                      <div>
                        <div className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm text-cream-100 transition-colors hover:text-emerald-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="mt-1 text-sm text-cream-100">{item.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 rounded-2xl border border-cream-200/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">Free consultation</span>
                </div>
                <p className="mt-2 text-sm text-cream-200/65">
                  Your first call is on us — no obligation, just honest advice about what’s possible.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-xl shadow-ink-900/5 sm:p-10">
              {status === 'success' ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-success-100 text-success-600">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-medium text-ink-900">
                    Thank you — message received!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
                    We’ve got your inquiry and will be in touch within one business day. For anything
                    urgent, call us on 0713 496125.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="e.g. Amara Otieno" />
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone number" name="phone" type="tel" placeholder="07XX XXX XXX" />
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
                        Service needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="w-full rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Multiple / Not sure">Multiple / Not sure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your space, timeline and budget range…"
                      className="w-full resize-none rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl bg-error-50 px-4 py-3 text-sm text-error-700">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button type="submit" size="lg" withArrow className="w-full sm:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function Field({ label, name, type = 'text', placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      />
    </div>
  );
}
