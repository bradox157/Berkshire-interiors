import { useEffect, useState } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 shadow-[0_8px_30px_-12px_rgba(17,22,28,0.18)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Berkshire Luxury Interiors home">
          <Logo scrolled={scrolled} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-ink-900' : 'text-cream-50'
              }`}
            >
              Berkshire
            </span>
            <span
              className={`text-[0.625rem] font-medium uppercase tracking-[0.28em] transition-colors ${
                scrolled ? 'text-emerald-700' : 'text-cream-200'
              }`}
            >
              Luxury Interiors
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-600 ${
                  scrolled ? 'text-ink-700' : 'text-cream-100'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
              scrolled ? 'bg-cream-100 text-ink-700' : 'bg-white/10 text-cream-50 backdrop-blur'
            }`}
          >
            <Star size={13} className="fill-emerald-600 text-emerald-600" />
            4.8
            <span className={scrolled ? 'text-ink-400' : 'text-cream-200'}>(18)</span>
          </div>
          <a
            href="tel:0713496125"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-emerald-700"
          >
            <Phone size={15} className="transition-transform group-hover:-rotate-12" />
            0713 496125
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors lg:hidden ${
            scrolled ? 'text-ink-900 hover:bg-ink-100' : 'text-cream-50 hover:bg-white/10'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0713496125"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-cream-50"
          >
            <Phone size={16} /> Call 0713 496125
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo({ scrolled: _scrolled }: { scrolled: boolean }) {
  return (
    <img
      src="/images/logo-icon.png"
      alt="Berkshire Luxury Interiors"
      className="h-9 w-auto sm:h-10"
    />
  );
}
