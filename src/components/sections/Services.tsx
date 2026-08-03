import { useState } from 'react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Check, ArrowRight } from 'lucide-react';

export function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Five disciplines, <span className="italic text-emerald-700">one standard.</span>
            </>
          }
          description="Every service is led by specialists and held to the same exacting finish — because luxury lives in the details you only notice when they’re perfect."
        />

        {/* Service selector tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-ink-900 text-cream-50 shadow-lg shadow-ink-900/15'
                  : 'bg-white text-ink-700 hover:bg-ink-100'
              }`}
            >
              <s.icon size={16} className={active === i ? 'text-emerald-400' : 'text-emerald-700'} />
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <Reveal key={service.id} className="mt-12">
          <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink-900/5 lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
              <img
                key={service.image}
                src={service.image}
                alt={service.title}
                className="h-full w-full animate-fade-in object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-cream-50/95 px-4 py-2 text-xs font-semibold text-ink-800 backdrop-blur">
                <service.icon size={14} className="text-emerald-700" />
                {service.tagline}
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="eyebrow">
                <span className="h-px w-8 bg-emerald-600" />
                Service
              </span>
              <h3 className="mt-4 font-serif text-3xl font-medium text-ink-900">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {service.description}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-emerald-700"
              >
                Enquire about {service.title}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
