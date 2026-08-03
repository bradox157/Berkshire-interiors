import { reviews, ratingBreakdown, averageRating, totalReviews } from '@/data/reviews';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Rating } from '@/components/Rating';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const maxCount = Math.max(...ratingBreakdown.map((r) => r.count));

  return (
    <section id="reviews" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Loved by Nairobi <span className="italic text-emerald-700">homeowners.</span>
            </>
          }
          description="Real feedback from real clients. We’re proud of our 4.8-star average — and we work for it on every project."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
          {/* Summary card */}
          <Reveal>
            <div className="sticky top-28 rounded-3xl border border-ink-100 bg-gradient-to-b from-cream-100 to-cream-50 p-8 shadow-lg shadow-ink-900/5">
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <div className="font-serif text-6xl font-semibold leading-none text-ink-900">
                    {averageRating.toFixed(1)}
                  </div>
                  <Rating value={averageRating} size={18} className="mt-3 justify-center" />
                  <div className="mt-2 text-xs text-ink-500">{totalReviews} reviews</div>
                </div>
                <div className="h-20 w-px bg-ink-200" />
                <div className="flex-1 space-y-2">
                  {ratingBreakdown.map((r) => (
                    <div key={r.stars} className="flex items-center gap-2.5">
                      <span className="flex w-8 items-center gap-0.5 text-xs font-medium text-ink-600">
                        {r.stars}
                        <Star size={11} className="fill-emerald-600 text-emerald-600" />
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                        <div
                          className="h-full rounded-full bg-emerald-600 transition-all duration-700"
                          style={{ width: `${(r.count / Math.max(maxCount, 1)) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 text-right text-xs text-ink-400">{r.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100">
                  <Star size={20} className="fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">Verified on Google</div>
                  <div className="text-xs text-ink-500">All reviews are from real clients</div>
                </div>
              </div>

              <a
                href="https://www.google.com/search?q=Berkshire+Luxury+Interiors+Kenya+Ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-ink-900 py-3.5 text-center text-sm font-semibold text-cream-50 transition-colors hover:bg-emerald-700"
              >
                Read all reviews on Google
              </a>
            </div>
          </Reveal>

          {/* Review cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal key={review.id} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-cream-50">
                        {review.initials}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-ink-900">{review.name}</div>
                        <div className="text-xs text-ink-400">{review.date}</div>
                      </div>
                    </div>
                    <Quote size={28} className="text-emerald-200" />
                  </div>

                  <Rating value={review.rating} size={14} className="mt-4" />

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">“{review.text}”</p>

                  <div className="mt-5 border-t border-ink-100 pt-4">
                    <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      {review.service}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
