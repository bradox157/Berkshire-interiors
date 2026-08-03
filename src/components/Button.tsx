import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  withArrow?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  'group inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-cream-50 hover:bg-emerald-700 hover:text-cream-50 shadow-lg shadow-ink-900/20 hover:shadow-emerald-700/30 hover:-translate-y-0.5',
  outline:
    'border border-ink-300 text-ink-800 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50',
  ghost: 'text-ink-700 hover:text-emerald-700 hover:bg-emerald-50',
  light:
    'bg-cream-50 text-ink-900 hover:bg-white shadow-lg shadow-ink-950/10 hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  sm: 'text-xs px-5 py-2.5',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm px-8 py-4 sm:text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  withArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={size === 'lg' ? 18 : 16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
