import {
  Sofa,
  PaintRoller,
  Hammer,
  LayoutGrid,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: 'interior-decorating',
    title: 'Interior Decorating',
    tagline: 'Curated spaces with soul',
    description:
      'From concept to final styling, we craft interiors that balance elegance, comfort and function — tailored to how you live and entertain.',
    icon: Sofa,
    features: [
      'Space planning & mood boards',
      'Furniture & soft-furnishing curation',
      'Lighting & colour consultation',
      'Final styling & accessorising',
    ],
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    tagline: 'A flawless first impression',
    description:
      'Premium, weather-resistant finishes that protect and elevate your façade. We prep meticulously so the colour stays true through Nairobi seasons.',
    icon: PaintRoller,
    features: [
      'Surface prep & crack repair',
      'Premium weatherproof coatings',
      'Colour matching & sampling',
      'Render & stucco restoration',
    ],
    image:
      'https://images.pexels.com/photos/18968164/pexels-photo-18968164.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'remodelling',
    title: 'Remodelling',
    tagline: 'Reimagine what you have',
    description:
      'Kitchens, bathrooms and full-home remodels — we modernise tired spaces while preserving character, on schedule and on budget.',
    icon: Hammer,
    features: [
      'Kitchen & bathroom remodels',
      'Wall & partition reconfiguration',
      'Plumbing & electrical upgrades',
      'Custom cabinetry & joinery',
    ],
    image:
      'https://images.pexels.com/photos/36511383/pexels-photo-36511383.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'floor-fitting',
    title: 'Floor Fitting',
    tagline: 'Grounded in craftsmanship',
    description:
      'Hardwood, parquet, tile and polished concrete — precision-fitted floors that anchor a room and last for decades.',
    icon: LayoutGrid,
    features: [
      'Hardwood & engineered timber',
      'Herringbone & parquet patterns',
      'Porcelain & natural stone tile',
      'Subfloor prep & levelling',
    ],
    image:
      'https://images.pexels.com/photos/15066939/pexels-photo-15066939.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'construction',
    title: 'Construction Company',
    tagline: 'Built from the ground up',
    description:
      'Full residential and commercial construction — from foundations to handover, with rigorous project management and trusted subcontractors.',
    icon: Building2,
    features: [
      'New builds & extensions',
      'Structural & foundation works',
      'Project management & scheduling',
      'Quality control & handover',
    ],
    image:
      'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
