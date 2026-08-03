import {
  Ruler,
  Hammer,
  Building2,
  ChefHat,
  Bath,
  Layers,
  PaintRoller,
  LayoutGrid,
  Lightbulb,
  Armchair,
  Blinds,
  Archive,
  PaintBucket,
  Building,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: 'interior-design-space-planning',
    title: 'Interior Design & Space Planning',
    description:
      'Thoughtful layouts and design concepts that make every room work harder and feel better.',
    icon: Ruler,
  },
  {
    id: 'home-renovations-remodeling',
    title: 'Home Renovations & Remodeling',
    description:
      'Full home makeovers that refresh tired spaces without losing what makes them yours.',
    icon: Hammer,
  },
  {
    id: 'office-design-fit-outs',
    title: 'Office Design & Fit-Outs',
    description:
      'Functional, professional workspaces designed and fitted out from the ground up.',
    icon: Building2,
  },
  {
    id: 'kitchen-design-installation',
    title: 'Kitchen Design & Installation',
    description:
      'Custom kitchen layouts, cabinetry and installation built around how you cook and gather.',
    icon: ChefHat,
  },
  {
    id: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    description:
      'Modern, durable bathroom upgrades — from fittings and tiling to full reconfigurations.',
    icon: Bath,
  },
  {
    id: 'gypsum-ceilings-decorative-features',
    title: 'Gypsum Ceilings & Decorative Features',
    description:
      'Statement ceilings and decorative detailing that add character and depth overhead.',
    icon: Layers,
  },
  {
    id: 'painting-decorative-finishes',
    title: 'Painting & Decorative Finishes',
    description:
      'Precision interior painting and decorative finishes for a flawless, lasting result.',
    icon: PaintRoller,
  },
  {
    id: 'flooring-installation',
    title: 'Flooring Installation',
    description:
      'Expert fitting of tile, wood, laminate and more — a solid foundation for every room.',
    icon: LayoutGrid,
  },
  {
    id: 'lighting-design',
    title: 'Lighting Design',
    description:
      'Layered lighting plans that set the mood and highlight your space at every hour.',
    icon: Lightbulb,
  },
  {
    id: 'custom-furniture-joinery',
    title: 'Custom Furniture & Joinery',
    description:
      "Bespoke furniture and joinery, built to measure for spaces off-the-shelf can't fit.",
    icon: Armchair,
  },
  {
    id: 'curtains-blinds-soft-furnishings',
    title: 'Curtains, Blinds & Soft Furnishings',
    description:
      'Curtains, blinds and soft furnishings selected and fitted to finish a room properly.',
    icon: Blinds,
  },
  {
    id: 'wardrobes-storage-solutions',
    title: 'Wardrobes & Storage Solutions',
    description:
      'Built-in wardrobes and smart storage that keep every room clutter-free and organised.',
    icon: Archive,
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description:
      'Weather-resistant exterior finishes that protect your property and elevate its façade.',
    icon: PaintBucket,
  },
  {
    id: 'commercial-interior-design',
    title: 'Commercial Interior Design',
    description:
      'Interiors for retail, hospitality and commercial spaces designed to work for your brand.',
    icon: Building,
  },
  {
    id: 'project-management-site-supervision',
    title: 'Project Management & Site Supervision',
    description:
      'Hands-on project management and site supervision, keeping every job on time and on budget.',
    icon: ClipboardList,
  },
];
