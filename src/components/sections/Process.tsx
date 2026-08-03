import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { PhoneCall, PencilRuler, Hammer, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Discovery Call',
    duration: 'Day 1',
    body: 'We listen to your vision, budget and timeline, then advise on what’s possible — no obligation, no jargon.',
  },
  {
    icon: PencilRuler,
    title: 'Design & Quote',
    duration: 'Week 1–2',
    body: 'You receive mood boards, material samples and a fixed, itemised quote. Nothing starts until you approve every detail.',
  },
  {
    icon: Hammer,
    title: 'Craft & Build',
    duration: 'On schedule',
    body: 'Our specialists execute with daily clean-downs and weekly progress updates. You’re never left wondering where things stand.',
  },
  {
    icon: Sparkles,
    title: 'Style & Handover',
    duration: 'Final day',
    body: 'We style, snag and walk you through the finished space. You only sign off when you’re completely delighted.',
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
          eyebrow="How We Work"
          title={
            <span className="text-cream-50">
              A calm, transparent <span className="italic text-emerald-300">process.</span>
            </span>
          }
          description="From first hello to final handover, you always know what’s happening, what’s next, and what it costs."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="group relative h-full rounded-3xl border border-cream-200/10 bg-ink-950/40 p-7 backdrop-blur transition-all duration-300 hover:border-emerald-400/30 hover:bg-ink-950/70">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cream-200/15 lg:block" />
                )}
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-ink-950">
                    <step.icon size={22} />
                  </span>
                  <span className="font-serif text-4xl font-semibold text-cream-200/15">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  {step.duration}
                </div>
                <h3 className="mt-2 font-serif text-xl font-medium text-cream-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
