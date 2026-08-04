import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { MapPin, ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const AUTO_CYCLE_MS = 2200;

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const hasBeforeAfter = Boolean(project.beforeImage);
  const [showBefore, setShowBefore] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!hasBeforeAfter || paused) return;
    intervalRef.current = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, AUTO_CYCLE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasBeforeAfter, paused]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-ink-900/5 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Base "after" image */}
      <img
        src={project.image}
        alt={`${project.title}${hasBeforeAfter ? ' — after' : ''}`}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
      {/* Crossfaded "before" image, only rendered when the project has one */}
      {hasBeforeAfter && (
        <img
          src={project.beforeImage}
          alt={`${project.title} — before`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            showBefore ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Type / category tag */}
      <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink-800 backdrop-blur">
        {project.type} · {project.category}
      </span>

      {/* Before / After indicator — auto-cycles; click to jump + pause on hover */}
      {hasBeforeAfter && (
        <div className="absolute right-4 top-4 z-10 flex items-center rounded-full bg-ink-950/60 p-1 backdrop-blur">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowBefore(true);
            }}
            className={`rounded-full px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.1em] transition-colors ${
              showBefore ? 'bg-cream-50 text-ink-900' : 'text-cream-100/70 hover:text-cream-50'
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowBefore(false);
            }}
            className={`rounded-full px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.1em] transition-colors ${
              !showBefore ? 'bg-emerald-500 text-ink-950' : 'text-cream-100/70 hover:text-cream-50'
            }`}
          >
            After
          </button>
        </div>
      )}

      {/* Hover arrow (only when no before/after toggle occupies that corner) */}
      {!hasBeforeAfter && (
        <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-emerald-500 text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      )}

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-xl font-medium text-cream-50">{project.title}</h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-cream-200/80">
          <MapPin size={12} className="text-emerald-300" />
          {project.location}
        </div>
      </div>
    </div>
  );
}
