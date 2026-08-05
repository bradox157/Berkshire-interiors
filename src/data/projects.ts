export type ProjectImage = {
  src: string;
  /** Shown as the small caption while this specific photo is on screen. */
  caption: string;
};

export type ProjectGroup = {
  id: string;
  /** Card title — the category itself, since one card now represents the whole category. */
  title: string;
  type: 'Residential' | 'Commercial';
  category: string;
  location: string;
  /** Auto-cycles through these, crossfading, with dot navigation. */
  images: ProjectImage[];
  span?: 'wide' | 'tall' | 'normal';
};

export const projectTypes = ['Commercial', 'Residential'] as const;

export const projects: ProjectGroup[] = [
  // ── Commercial ──────────────────────────────────────────────
  {
    id: 'c-wellness',
    title: 'Wellness & Leisure',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    span: 'tall',
    images: [
      { src: '/images/pool-construction-before.jpg', caption: 'Indoor Pool — Before' },
      { src: '/images/pool-finished-after.jpg', caption: 'Indoor Pool — After' },
      { src: '/images/gym.jpg', caption: 'Fitness Gym' },
      { src: '/images/sauna.jpg', caption: 'Sauna Room' },
    ],
  },
  {
    id: 'c-spa',
    title: 'Spa',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    span: 'wide',
    images: [
      { src: '/images/spa-reception.jpg', caption: 'Spa Reception & Lounge' },
      { src: '/images/spa-treatment-room.jpg', caption: 'Treatment Room' },
      { src: '/images/reception-lounge.jpg', caption: 'Reception Lounge' },
    ],
  },
  {
    id: 'c-salon',
    title: 'Salon',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    images: [
      { src: '/images/barbershop.jpg', caption: 'Barbershop' },
      { src: '/images/salon-styling-area.jpg', caption: 'Styling Area' },
      { src: '/images/salon-pedicure-area.jpg', caption: 'Pedicure Bar' },
      { src: '/images/nail-bar.jpg', caption: 'Nail Bar' },
    ],
  },

  // ── Residential ─────────────────────────────────────────────
  {
    id: 'r-new-build',
    title: 'New Build',
    type: 'Residential',
    category: 'New Build',
    location: 'Nairobi',
    span: 'wide',
    images: [
      { src: '/images/living-room-bright.jpg', caption: 'Bright Living Room' },
      { src: '/images/new-build-living-room.jpg', caption: 'New Build Living Room' },
    ],
  },
  {
    id: 'r-interiors',
    title: 'Interiors',
    type: 'Residential',
    category: 'Interiors',
    location: 'Nairobi',
    images: [
      { src: '/images/living-dining-bar.jpg', caption: 'Open-Plan Living & Bar' },
      { src: '/images/blue-lounge.jpg', caption: 'Blue Lounge' },
      { src: '/images/compact-living-room.jpg', caption: 'Compact Living Room' },
    ],
  },
  {
    id: 'r-kitchens',
    title: 'Kitchens',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Nairobi',
    images: [
      { src: '/images/kitchen-cream-cabinets.jpg', caption: 'Fitted Kitchen' },
      { src: '/images/kitchen-grey-pantry.jpg', caption: 'Modern Fitted Kitchen' },
      { src: '/images/kitchen-fitout.jpg', caption: 'Kitchen Fit-Out' },
    ],
  },
  {
    id: 'r-bedrooms',
    title: 'Bedrooms',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Nairobi',
    span: 'tall',
    images: [
      { src: '/images/guest-bedroom-suite.jpg', caption: 'Guest Bedroom Suite' },
      { src: '/images/deluxe-bedroom-suite.jpg', caption: 'Deluxe Bedroom Suite' },
      { src: '/images/bedroom-before.jpg', caption: 'Bedroom Makeover — Before' },
      { src: '/images/bedroom-after.jpg', caption: 'Bedroom Makeover — After' },
    ],
  },
  {
    id: 'r-bathrooms',
    title: 'Bathrooms',
    type: 'Residential',
    category: 'Bathrooms',
    location: 'Nairobi',
    images: [{ src: '/images/ensuite-bathroom.jpg', caption: 'En-suite Bathroom' }],
  },
];
