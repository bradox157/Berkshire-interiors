import { Button } from '@/components/Button';
import { Star, ArrowDown, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxurious modern living room with elegant sofas and warm lighting"
          className="hero-zoom h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/55 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="animate-fade-in inline-flex items-center gap-2.5 rounded-full border border-cream-200/20 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-emerald-500 text-emerald-500" />
              ))}
            </span>
            <span className="text-xs font-medium tracking-wide text-cream-100">
              Rated 4.8 by 18 happy clients in Nairobi
            </span>
          </div>

          <h1
            className="mt-6 animate-fade-up font-serif text-4xl font-medium leading-[1.05] text-cream-50 text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            Where Nairobi’s finest
            <span className="block italic text-emerald-300">homes take shape.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-cream-100/85"
            style={{ animationDelay: '240ms' }}
          >
            Interior decorating, exterior painting, remodelling, floor fitting and full construction —
            delivered with uncompromising craftsmanship and a curator’s eye for detail.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '360ms' }}
          >
            <Button href="#contact" size="lg" variant="light" withArrow>
              Book a Consultation
            </Button>
            <Button href="#projects" size="lg" variant="ghost" className="text-cream-50 hover:bg-white/10">
              View Our Work
            </Button>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 grid max-w-lg animate-fade-up grid-cols-3 gap-6 border-t border-cream-200/15 pt-8"
            style={{ animationDelay: '480ms' }}
          >
            {[
              { value: '120+', label: 'Projects completed' },
              { value: '8 yrs', label: 'Crafting Nairobi homes' },
              { value: '100%', label: 'Client-focused' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-semibold text-emerald-300">{stat.value}</div>
                <div className="mt-1 text-xs leading-snug text-cream-200/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-200/60 transition-colors hover:text-cream-50 md:flex"
        aria-label="Scroll to services"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>

      {/* Guarantee badge */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-2 rounded-full border border-cream-200/15 bg-ink-900/50 px-4 py-2.5 text-xs text-cream-100 backdrop-blur-md lg:flex">
        <ShieldCheck size={15} className="text-emerald-400" />
        Licensed & insured in Kenya
      </div>
    </section>
  );
}
