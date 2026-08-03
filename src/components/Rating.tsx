import { Star } from 'lucide-react';

type RatingProps = {
  value: number;
  size?: number;
  className?: string;
  showValue?: boolean;
};

export function Rating({ value, size = 16, className = '', showValue = false }: RatingProps) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.25 && value - full < 0.75;
  const rounded = value - full >= 0.75 ? full + 1 : full;

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < rounded;
          const half = hasHalf && i === rounded;
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star size={size} className="absolute inset-0 text-emerald-200" />
              {(filled || half) && (
                <Star
                  size={size}
                  className="absolute inset-0 text-emerald-600 fill-emerald-600"
                  style={{ clipPath: half ? 'inset(0 50% 0 0)' : 'none' }}
                />
              )}
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-ink-700">{value.toFixed(1)}</span>
      )}
    </div>
  );
}
