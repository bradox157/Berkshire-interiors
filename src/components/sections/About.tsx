import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Rating } from '@/components/Rating';
import { Award, Users, Ruler, Heart } from 'lucide-react';

const stats = [
  { icon: Ruler, value: '120+', label: 'Projects delivered' },
  { icon: Users, value: '18', label: '5-star reviews' },
  { icon: Award, value: '8', label: 'Years in business' },
  { icon: Heart, value: '4.8', label: 'Avg. client rating' },
];

const principles = [
  {
    title: 'Craft over speed',
    body: 'We’d rather take an extra day and get the joinery right than rush a finish you’ll notice in a year.',
  },
  {
    title: 'Transparent pricing',
    body: 'Fixed quotes with no hidden line items. You approve the budget before a single tool enters your home.',
  },
  {
    title: 'Respect for your space',
    body: 'Daily clean-downs, protected floors and minimal disruption — we work like guests in your home.',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-24 text-cream-100 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, #10b981 0, transparent 35%), radial-gradient(circle at 85% 70%, #047857 0, transparent 35%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stylish living room with blue couch and modern decor"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.pexels.com/photos/15066939/pexels-photo-15066939.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Herringbone parquet floor in warm wood tones"
                  className="aspect-square w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <img
                  src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern bright bedroom with pendant lamps"
                  className="aspect-square w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Floating rating card */}
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-cream-200/10 bg-ink-900/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-semibold text-emerald-300">4.8</span>
                    <span className="text-xs text-cream-200/60">/ 5.0</span>
                  </div>
                  <div className="mt-1 text-xs text-cream-200/60">18 Google reviews</div>
                </div>
                <Rating value={4.8} size={16} />
                <div className="text-right">
                  <div className="text-xs font-semibold text-cream-50">Google Verified</div>
                  <div className="mt-1 text-[0.625rem] text-cream-200/50">Construction company</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="About Berkshire"
              align="left"
              title={
                <span className="text-cream-50">
                  A Nairobi studio built on <span className="italic text-emerald-300">trust and finish.</span>
                </span>
              }
              className="[&_p]:text-cream-200/75"
            />
            <Reveal delay={120}>
              <p className="mt-6 text-base leading-relaxed text-cream-200/75">
                Based at Woodlands Mall on Wood Avenue, Berkshire Luxury Interiors Kenya Ltd has spent
                nearly a decade turning Nairobi addresses into refined, liveable spaces. From a single
                feature wall to a full ground-up build, the same team owns your project start to finish.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={200 + i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-cream-200/10 bg-white/[0.03] p-5">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <span className="font-serif text-sm font-semibold">{i + 1}</span>
                    </span>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-cream-50">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-cream-200/65">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream-200/10 bg-cream-200/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="bg-ink-900/60 p-8 text-center backdrop-blur">
              <stat.icon size={24} className="mx-auto text-emerald-400" />
              <div className="mt-4 font-serif text-4xl font-semibold text-cream-50">{stat.value}</div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.18em] text-cream-200/55">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
