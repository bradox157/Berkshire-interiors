import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import {
  PhoneCall,
  MapPin,
  PencilRuler,
  Palette,
  Hammer,
  ClipboardCheck,
  KeyRound,
  LifeBuoy,
} from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Book a Consultation',
    body: 'Reach out and tell us about your project, goals and timeline — no obligation.',
  },
  {
    icon: MapPin,
    title: 'Site Visit & Assessment',
    body: 'We visit your space to assess the site, take measurements and understand the brief.',
  },
  {
    icon: PencilRuler,
    title: 'Design Concept & Quotation',
    body: 'You receive a design concept and a detailed, itemised quotation to review.',
  },
  {
    icon: Palette,
    title: 'Material Selection',
    body: 'Together we select finishes, furniture and materials that fit your style and budget.',
  },
  {
    icon: Hammer,
    title: 'Project Execution',
    body: 'Our team gets to work, executing the design with skilled, hands-on craftsmanship.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    body: 'Every detail is inspected against our quality standards before handover.',
  },
  {
    icon: KeyRound,
    title: 'Project Handover',
    body: 'We walk you through the finished space and hand over your keys, snag-free.',
  },
  {
    icon: LifeBuoy,
    title: 'After-Sales Support',
    body: 'Our relationship continues after handover, with support whenever you need it.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-900 py-24 text-cream-100 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, transparent 49%, #10b981 49%, #10b981 51%, transparent 51%)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <span className="text-cream-50">
              A calm, transparent <span className="italic text-emerald-300">process.</span>
            </span>
          }
          description="From first consultation to after-sales support, you always know what's happening, what's next, and what it costs."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const isLastInRow = (i + 1) % 4 === 0;
            return (
              <Reveal key={step.title} delay={(i % 4) * 120}>
                <div className="group relative h-full rounded-3xl border border-cream-200/10 bg-ink-950/40 p-7 backdrop-blur transition-all duration-300 hover:border-emerald-400/30 hover:bg-ink-950/70">
                  {/* Connector line */}
                  {i < steps.length - 1 && !isLastInRow && (
                    <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cream-200/15 lg:block" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-ink-950">
                      <step.icon size={22} />
                    </span>
                    <span className="font-serif text-4xl font-semibold text-cream-200/15">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-cream-50">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-200/65">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
