import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { FaqAccordion, type FaqItem } from '@/components/FaqAccordion';
import {
  Award,
  Users,
  Ruler,
  Heart,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Gem,
  ClipboardCheck,
  Clock,
  Lightbulb,
} from 'lucide-react';

const stats = [
  { icon: Ruler, value: '120+', label: 'Projects delivered' },
  { icon: Users, value: '18', label: '5-star reviews' },
  { icon: Award, value: '8', label: 'Years in business' },
  { icon: Heart, value: '4.8', label: 'Avg. client rating' },
];

const whyChooseUs = [
  {
    icon: Sparkles,
    title: 'Personalized solutions',
    body: 'Design solutions tailored to your lifestyle and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Experienced professionals',
    body: 'A team committed to quality workmanship on every project.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent communication',
    body: 'Clear updates throughout every stage of your project.',
  },
  {
    icon: Gem,
    title: 'Premium materials',
    body: 'Sourced from trusted, quality-checked suppliers.',
  },
  {
    icon: ClipboardCheck,
    title: 'End-to-end management',
    body: 'One team, accountable from concept to completion.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    body: 'Reliable timelines, without compromising on quality.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative design',
    body: 'Balancing beauty, comfort and everyday functionality.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'How long does an interior design project take?',
    answer:
      'Every project is unique. Timelines depend on the size, complexity and scope of work. We provide a detailed project schedule before work begins.',
  },
  {
    question: 'Do you work within a client’s budget?',
    answer:
      'Yes. We tailor every design proposal to meet your goals while respecting your investment.',
  },
  {
    question: 'Can I hire Berkshire for design only?',
    answer:
      'Absolutely. We offer both design-only consultations and complete design-and-build solutions.',
  },
  {
    question: 'Do you source furniture and materials?',
    answer:
      'Yes. We help clients source quality materials, furniture, lighting, décor and accessories from trusted suppliers.',
  },
  {
    question: 'Do you supervise contractors?',
    answer:
      'Yes. We provide professional site supervision and project management to ensure work is completed to the highest standards.',
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
        {/* Intro */}
        <SectionHeading
          eyebrow="About Berkshire"
          title={
            <span className="text-cream-50">
              A full-service studio built on <span className="italic text-emerald-300">trust and craft.</span>
            </span>
          }
          className="[&_p]:text-cream-200/75"
        />

        <Reveal delay={100} className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
          <p className="text-base leading-relaxed text-cream-200/75">
            Berkshire Luxury Interiors is a full-service interior design and renovation company
            dedicated to creating elegant, functional and timeless spaces. We believe every space
            has the potential to inspire, improve productivity and enhance everyday living.
          </p>
          <p className="text-base leading-relaxed text-cream-200/75">
            Our team works closely with homeowners, businesses, developers and investors to
            provide tailored design solutions that meet each client's unique needs. From concept
            development to project completion, we focus on quality craftsmanship, innovative
            design and exceptional customer service.
          </p>
          <p className="text-base leading-relaxed text-cream-200/75">
            Whether you're building from the ground up, renovating an existing property, or simply
            refreshing your interiors, we bring your vision to life with creativity,
            professionalism and precision.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream-200/10 bg-cream-200/10 lg:grid-cols-4">
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

        {/* Meet the Founder */}
        <div className="mt-28 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-emerald-600" />
                Meet Our Founder
              </span>
              <h3 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl">
                The vision behind{' '}
                <span className="italic text-emerald-300">Berkshire Luxury Interiors.</span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-cream-200/75">
                Purity Komen, Founder &amp; Creative Director of Berkshire Luxury Interiors,
                built the company on a simple belief: that every space has the potential to
                inspire and improve the way people live and work. That philosophy now guides every
                project the studio takes on, from single-room refreshes to full commercial
                fit-outs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream-200/75">
                Under this leadership, Berkshire Luxury Interiors was recognised as the{' '}
                <span className="text-cream-50">Best Interior Design Company</span> and awarded a{' '}
                <span className="text-cream-50">5-Star Rating Distinction</span> at the Kenya
                Excellent Brands Awards — a milestone that reflects the studio's ongoing commitment
                to quality, craftsmanship and client satisfaction.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-cream-200/10 bg-white/[0.03] p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <Award size={20} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-cream-50">
                    Best Interior Design Company
                  </div>
                  <div className="mt-0.5 text-xs text-cream-200/60">
                    Kenya Excellent Brands Awards · 5-Star Rating Distinction
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <img
                src="/images/founder-award.jpg"
                alt="Purity Komen, Founder of Berkshire Luxury Interiors, holding the Best Interior Design Company award"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-cream-200/10 bg-ink-900/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2 text-emerald-300">
                  <Award size={16} />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                    Award-Winning Studio
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why Choose Us */}
        <div className="mt-28">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <span className="text-cream-50">
                Why clients choose <span className="italic text-emerald-300">Berkshire.</span>
              </span>
            }
            className="[&_p]:text-cream-200/75"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-2xl border border-cream-200/10 bg-white/[0.03] p-5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <item.icon size={16} />
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-cream-50">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-cream-200/65">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={480} className="mx-auto mt-10 max-w-xl text-center">
            <p className="font-serif text-lg italic text-cream-200/80">
              Our goal is simple: to create spaces you'll love for years to come.
            </p>
          </Reveal>
        </div>

        {/* FAQs */}
        <div className="mt-28">
          <SectionHeading
            eyebrow="FAQs"
            title={
              <span className="text-cream-50">
                Frequently asked <span className="italic text-emerald-300">questions.</span>
              </span>
            }
            className="[&_p]:text-cream-200/75"
          />
          <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={faqs} theme="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
