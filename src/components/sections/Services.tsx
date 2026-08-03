import { services } from '@/data/services';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Comprehensive interior{' '}
              <span className="italic text-emerald-700">& renovation solutions.</span>
            </>
          }
          description="We offer end-to-end interior and renovation solutions, all delivered with a commitment to quality, functionality and timeless design."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 40}>
              <div className="group h-full rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm shadow-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/10 sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-medium leading-snug text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-ink-800"
          >
            Discuss Your Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
