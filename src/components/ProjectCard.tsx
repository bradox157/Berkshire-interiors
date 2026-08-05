import { useEffect, useRef, useState } from 'react';
import type { ProjectGroup } from '@/data/projects';
import { MapPin } from 'lucide-react';

type ProjectCardProps = {
  project: ProjectGroup;
  className?: string;
};

const AUTO_CYCLE_MS = 2600;

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const { images } = project;
  const hasMultiple = images.length > 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!hasMultiple || paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_CYCLE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, paused, images.length]);

  const current = images[index];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-ink-900/5 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stacked, crossfaded images */}
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={`${project.title} — ${img.caption}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Type / category tag */}
      <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink-800 backdrop-blur">
        {project.type} · {project.category}
      </span>

      {/* Photo count badge */}
      {hasMultiple && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-ink-950/60 px-2.5 py-1 text-[0.625rem] font-bold text-cream-100 backdrop-blur">
          {index + 1} / {images.length}
        </span>
      )}

      {/* Caption + dot navigation */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-xl font-medium text-cream-50">{project.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-cream-200/80">
          <MapPin size={12} className="text-emerald-300" />
          {project.location}
          <span className="text-cream-200/40">·</span>
          <span className="text-cream-200/80">{current.caption}</span>
        </div>

        {hasMultiple && (
          <div className="mt-3 flex gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Show photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-emerald-400' : 'w-1.5 bg-cream-50/40 hover:bg-cream-50/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
