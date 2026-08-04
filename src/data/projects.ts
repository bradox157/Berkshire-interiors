export type Project = {
  id: string;
  title: string;
  /** Primary split shown in the section filters. */
  type: 'Residential' | 'Commercial';
  /** Secondary tag shown on the card (Interiors, Kitchens, Office Fit-Out, etc). */
  category: string;
  location: string;
  /** "After" / main image. */
  image: string;
  /** "Before" image. When present, the card shows an auto-cycling Before/After toggle. */
  beforeImage?: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const projectTypes = ['Commercial', 'Residential'] as const;

export const projects: Project[] = [
  // ── Commercial ──────────────────────────────────────────────
  {
    id: 'c1',
    title: 'Indoor Swimming Pool',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/pool-finished-after.jpg',
    beforeImage: '/images/pool-construction-before.jpg',
    span: 'tall',
  },
  {
    id: 'c2',
    title: 'Fitness Gym',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/gym.jpg',
  },
  {
    id: 'c3',
    title: 'Spa Reception & Lounge',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/spa-reception.jpg',
    span: 'wide',
  },
  {
    id: 'c4',
    title: 'Spa Treatment Room',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/spa-treatment-room.jpg',
  },
  {
    id: 'c5',
    title: 'Barbershop',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/barbershop.jpg',
  },
  {
    id: 'c6',
    title: 'Salon Styling Area',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/salon-styling-area.jpg',
    span: 'wide',
  },
  {
    id: 'c7',
    title: 'Salon Pedicure Bar',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/salon-pedicure-area.jpg',
  },
  {
    id: 'c8',
    title: 'Reception Lounge',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/reception-lounge.jpg',
  },
  {
    id: 'c9',
    title: 'Nail Bar',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/nail-bar.jpg',
  },
  {
    id: 'c10',
    title: 'Sauna Room',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/sauna.jpg',
  },

  // ── Residential ─────────────────────────────────────────────
  {
    id: 'r1',
    title: 'Bright Living Room',
    type: 'Residential',
    category: 'New Build',
    location: 'Nairobi',
    image: '/images/living-room-bright.jpg',
    span: 'wide',
  },
  {
    id: 'r2',
    title: 'Open-Plan Living & Bar',
    type: 'Residential',
    category: 'Interiors',
    location: 'Nairobi',
    image: '/images/living-dining-bar.jpg',
  },
  {
    id: 'r3',
    title: 'Fitted Kitchen',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Nairobi',
    image: '/images/kitchen-cream-cabinets.jpg',
  },
  {
    id: 'r4',
    title: 'Guest Bedroom Suite',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Nairobi',
    image: '/images/guest-bedroom-suite.jpg',
    span: 'tall',
  },
  {
    id: 'r5',
    title: 'Blue Lounge',
    type: 'Residential',
    category: 'Interiors',
    location: 'Nairobi',
    image: '/images/blue-lounge.jpg',
  },
  {
    id: 'r6',
    title: 'Deluxe Bedroom Suite',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Nairobi',
    image: '/images/deluxe-bedroom-suite.jpg',
    span: 'wide',
  },
  {
    id: 'r7',
    title: 'Modern Fitted Kitchen',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Nairobi',
    image: '/images/kitchen-grey-pantry.jpg',
  },
  {
    id: 'r8',
    title: 'Compact Living Room',
    type: 'Residential',
    category: 'Interiors',
    location: 'Nairobi',
    image: '/images/compact-living-room.jpg',
  },
  {
    id: 'r9',
    title: 'En-suite Bathroom',
    type: 'Residential',
    category: 'Bathrooms',
    location: 'Nairobi',
    image: '/images/ensuite-bathroom.jpg',
  },
  {
    id: 'r10',
    title: 'Kitchen Fit-Out',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Nairobi',
    image: '/images/kitchen-fitout.jpg',
  },
  {
    id: 'r11',
    title: 'New Build Living Room',
    type: 'Residential',
    category: 'New Build',
    location: 'Nairobi',
    image: '/images/new-build-living-room.jpg',
    span: 'wide',
  },
  // Before/After kept last — real matching pair, shown on an auto-cycling toggle.
  {
    id: 'r12',
    title: 'Bedroom Makeover',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Nairobi',
    image: '/images/bedroom-after.jpg',
    beforeImage: '/images/bedroom-before.jpg',
    span: 'tall',
  },
];
