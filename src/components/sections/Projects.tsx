import { useState } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { MapPin, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative bg-cream-100/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title={
            <>
              Work that speaks <span className="italic text-emerald-700">for itself.</span>
            </>
          }
          description="A selection of recent commissions across Nairobi’s most discerning neighbourhoods — from full builds to single-room transformations."
        />

        {/* Filters */}
        <Reveal className="mt-12">
          <div className="hide-scrollbar flex gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-emerald-700 text-cream-50 shadow-lg shadow-emerald-700/25'
                    : 'bg-white text-ink-700 hover:bg-ink-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery grid */}
        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-ink-900/5 ${
                project.span === 'wide'
                  ? 'sm:col-span-2'
                  : project.span === 'tall'
                  ? 'sm:row-span-2'
                  : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Category tag */}
              <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink-800 backdrop-blur">
                {project.category}
              </span>

              {/* Hover arrow */}
              <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-emerald-500 text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </span>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl font-medium text-cream-50">{project.title}</h3>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-cream-200/80">
                  <MapPin size={12} className="text-emerald-300" />
                  {project.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Button href="#contact" variant="outline" withArrow>
            Start your own project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
