import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  theme?: 'dark' | 'light';
};

export function FaqAccordion({ items, theme = 'dark' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDark = theme === 'dark';

  return (
    <div className="divide-y divide-cream-200/10 overflow-hidden rounded-3xl border border-cream-200/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className={isDark ? 'bg-ink-950/40' : 'bg-white'}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`font-sans text-sm font-semibold sm:text-base ${
                  isDark ? 'text-cream-50' : 'text-ink-900'
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                } ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-6 pb-5 text-sm leading-relaxed ${
                    isDark ? 'text-cream-200/70' : 'text-ink-600'
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
