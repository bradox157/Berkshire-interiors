import { Phone, MapPin, Mail, Clock, Star, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Interior Decorating', href: '#services' },
      { label: 'Exterior Painting', href: '#services' },
      { label: 'Remodelling', href: '#services' },
      { label: 'Floor Fitting', href: '#services' },
      { label: 'Construction', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Projects', href: '#projects' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Our Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-cream-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #10b981 0, transparent 40%), radial-gradient(circle at 80% 80%, #047857 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
                <span className="font-serif text-xl font-bold leading-none">B</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-cream-50">Berkshire</span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-emerald-400">
                  Luxury Interiors
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-200/70">
              Nairobi’s trusted name in luxury interiors and construction. We turn houses into
              refined homes — with craftsmanship you can feel.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-cream-200/80">
              <Star size={15} className="fill-emerald-500 text-emerald-500" />
              <span className="font-semibold text-cream-50">4.8</span>
              <span>· 18 Google reviews</span>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-cream-200/80 transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <span className="text-cream-200/80">Woodlands Mall, Wood Ave, Nairobi</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <a href="tel:0713496125" className="text-cream-200/80 transition-colors hover:text-emerald-300">
                  0713 496125
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <a
                  href="mailto:hello@berkshireluxury.co.ke"
                  className="text-cream-200/80 transition-colors hover:text-emerald-300"
                >
                  hello@berkshireluxury.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                <span className="text-cream-200/80">Mon – Sat: 8:00am – 6:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-200/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-200/50">
            © {new Date().getFullYear()} Berkshire Luxury Interiors Kenya Ltd. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/50">
            Proudly crafted in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
