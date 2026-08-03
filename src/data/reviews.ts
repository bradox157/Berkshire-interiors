export type Review = {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  service: string;
};

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Amara Otieno',
    initials: 'AO',
    rating: 5,
    date: '2 months ago',
    text: 'Berkshire transformed our Karen home beyond what we imagined. The team was punctual, tidy and genuinely listened. The living room now feels like a five-star lobby. Worth every shilling.',
    service: 'Interior Decorating',
  },
  {
    id: 'r2',
    name: 'David Kamau',
    initials: 'DK',
    rating: 5,
    date: '4 months ago',
    text: 'Hired them for a full kitchen remodel. Communication was clear throughout and they finished two days early. The marble island is a showpiece. Highly recommend for anyone in Westlands.',
    service: 'Remodelling',
  },
  {
    id: 'r3',
    name: 'Sarah Wanjiru',
    initials: 'SW',
    rating: 5,
    date: '5 months ago',
    text: 'Exterior painting of our Runda home — flawless finish and the crew protected all the landscaping. Colour advice was spot on. A year on and it still looks brand new.',
    service: 'Exterior Painting',
  },
  {
    id: 'r4',
    name: 'Michael Mwangi',
    initials: 'MM',
    rating: 5,
    date: '6 months ago',
    text: 'They installed herringbone parquet across our entire Spring Valley house. The craftsmanship is exceptional — straight lines, no squeaks, perfectly finished. True professionals.',
    service: 'Floor Fitting',
  },
  {
    id: 'r5',
    name: 'Grace Achieng',
    initials: 'GA',
    rating: 4,
    date: '7 months ago',
    text: 'Great work on our office fit-out in Kilimani. There were minor delays due to material imports but they kept us informed daily. Final result is beautiful and clients always compliment the space.',
    service: 'Interior Decorating',
  },
  {
    id: 'r6',
    name: 'James Mutua',
    initials: 'JM',
    rating: 5,
    date: '8 months ago',
    text: 'Built our family home in Lavington from scratch. Transparent pricing, solid project management, and they caught structural issues before they became problems. Felt like a real partnership.',
    service: 'Construction',
  },
];

export const ratingBreakdown = [
  { stars: 5, count: 15 },
  { stars: 4, count: 2 },
  { stars: 3, count: 1 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

export const averageRating = 4.8;
export const totalReviews = 18;
