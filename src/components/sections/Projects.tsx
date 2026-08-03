import { useState } from 'react';
import { projects, projectTypes } from '@/data/projects';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectTypes)[number]>('Commercial');

  const filtered = projects.filter((p) => p.type === filter);

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
          description="Residential and commercial projects across Nairobi — browse by type, and toggle Before / After on select transformations."
        />

        {/* Filters */}
        <Reveal className="mt-12">
          <div className="hide-scrollbar flex gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === type
                    ? 'bg-emerald-700 text-cream-50 shadow-lg shadow-emerald-700/25'
                    : 'bg-white text-ink-700 hover:bg-ink-100'
                }`}
              >
                {type}
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
              className={
                project.span === 'wide'
                  ? 'sm:col-span-2'
                  : project.span === 'tall'
                  ? 'sm:row-span-2'
                  : ''
              }
            >
              <ProjectCard project={project} className="h-full" />
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
