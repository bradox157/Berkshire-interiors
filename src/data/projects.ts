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
  /**
   * "Before" image. When present, the card shows a Before/After toggle.
   * PLACEHOLDER PAIRING — swap for a real before/after photo of the same
   * project once available.
   */
  beforeImage?: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const projectTypes = ['Commercial', 'Residential'] as const;

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Karen Family Residence',
    type: 'Residential',
    category: 'Interiors',
    location: 'Karen, Nairobi',
    image:
      'https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&w=1200',
    // PLACEHOLDER before image — replace with the real "before" shot of this project.
    beforeImage:
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p2',
    title: 'Westlands Marble Kitchen',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Westlands, Nairobi',
    image:
      'https://images.pexels.com/photos/36511383/pexels-photo-36511383.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p3',
    title: 'Lavington Master Suite',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Lavington, Nairobi',
    image:
      'https://images.pexels.com/photos/8135248/pexels-photo-8135248.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p4',
    title: 'Kilimani Penthouse Living',
    type: 'Residential',
    category: 'Interiors',
    location: 'Kilimani, Nairobi',
    image:
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p5',
    title: 'Runda Façade Refresh',
    type: 'Residential',
    category: 'Exteriors',
    location: 'Runda, Nairobi',
    image:
      'https://images.pexels.com/photos/18968164/pexels-photo-18968164.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p6',
    title: 'Kileleshwa Herringbone Floors',
    type: 'Residential',
    category: 'Interiors',
    location: 'Spring Valley, Nairobi',
    image:
      'https://images.pexels.com/photos/15066939/pexels-photo-15066939.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'c1',
    title: 'Indoor Swimming Pool',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/projects/pool-finished-after.jpg',
    beforeImage: '/images/projects/pool-construction-before.jpg',
    span: 'tall',
  },
  {
    id: 'c2',
    title: 'Fitness Gym',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/projects/gym.jpg',
  },
  {
    id: 'c3',
    title: 'Spa Reception & Lounge',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/projects/spa-reception.jpg',
    span: 'wide',
  },
  {
    id: 'c4',
    title: 'Spa Treatment Room',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/projects/spa-treatment-room.jpg',
  },
  {
    id: 'c5',
    title: 'Barbershop',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/projects/barbershop.jpg',
  },
  {
    id: 'c6',
    title: 'Salon Styling Area',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/projects/salon-styling-area.jpg',
    span: 'wide',
  },
  {
    id: 'c7',
    title: 'Salon Pedicure Bar',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/projects/salon-pedicure-area.jpg',
  },
  {
    id: 'c8',
    title: 'Reception Lounge',
    type: 'Commercial',
    category: 'Spa',
    location: 'Nairobi',
    image: '/images/projects/reception-lounge.jpg',
  },
  {
    id: 'c9',
    title: 'Nail Bar',
    type: 'Commercial',
    category: 'Salon',
    location: 'Nairobi',
    image: '/images/projects/nail-bar.jpg',
  },
  {
    id: 'c10',
    title: 'Sauna Room',
    type: 'Commercial',
    category: 'Wellness & Leisure',
    location: 'Nairobi',
    image: '/images/projects/sauna.jpg',
  },
  {
    id: 'p8',
    title: 'Kileleshwa Classic Bedroom',
    type: 'Residential',
    category: 'Bedrooms',
    location: 'Kileleshwa, Nairobi',
    image:
      'https://images.pexels.com/photos/8141958/pexels-photo-8141958.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p9',
    title: 'Muthaiga Chef’s Kitchen',
    type: 'Residential',
    category: 'Kitchens',
    location: 'Muthaiga, Nairobi',
    image:
      'https://images.pexels.com/photos/36777912/pexels-photo-36777912.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p10',
    title: 'Rosslyn Ridge Living',
    type: 'Residential',
    category: 'Interiors',
    location: 'Rosslyn, Nairobi',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p11',
    title: 'Nyari Estate Exterior',
    type: 'Residential',
    category: 'Exteriors',
    location: 'Nyari, Nairobi',
    image:
      'https://images.pexels.com/photos/35713650/pexels-photo-35713650.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p12',
    title: 'Parklands Parquet Detail',
    type: 'Residential',
    category: 'Interiors',
    location: 'Parklands, Nairobi',
    image:
      'https://images.pexels.com/photos/20843726/pexels-photo-20843726.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
