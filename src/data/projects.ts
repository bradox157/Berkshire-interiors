export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const projectCategories = [
  'All',
  'Interiors',
  'Kitchens',
  'Bedrooms',
  'Exteriors',
  'Construction',
] as const;

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Karen Family Residence',
    category: 'Interiors',
    location: 'Karen, Nairobi',
    image:
      'https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p2',
    title: 'Westlands Marble Kitchen',
    category: 'Kitchens',
    location: 'Westlands, Nairobi',
    image:
      'https://images.pexels.com/photos/36511383/pexels-photo-36511383.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p3',
    title: 'Lavington Master Suite',
    category: 'Bedrooms',
    location: 'Lavington, Nairobi',
    image:
      'https://images.pexels.com/photos/8135248/pexels-photo-8135248.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p4',
    title: 'Kilimani Penthouse Living',
    category: 'Interiors',
    location: 'Kilimani, Nairobi',
    image:
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p5',
    title: 'Runda Façade Refresh',
    category: 'Exteriors',
    location: 'Runda, Nairobi',
    image:
      'https://images.pexels.com/photos/18968164/pexels-photo-18968164.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p6',
    title: 'Killeshah Herringbone Floors',
    category: 'Interiors',
    location: 'Spring Valley, Nairobi',
    image:
      'https://images.pexels.com/photos/15066939/pexels-photo-15066939.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p7',
    title: 'Riverside Tower Build',
    category: 'Construction',
    location: 'Riverside Drive, Nairobi',
    image:
      'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
  },
  {
    id: 'p8',
    title: 'Kileleshwa Classic Bedroom',
    category: 'Bedrooms',
    location: 'Kileleshwa, Nairobi',
    image:
      'https://images.pexels.com/photos/8141958/pexels-photo-8141958.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p9',
    title: 'Muthaiga Chef’s Kitchen',
    category: 'Kitchens',
    location: 'Muthaiga, Nairobi',
    image:
      'https://images.pexels.com/photos/36777912/pexels-photo-36777912.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p10',
    title: 'Rosslyn Ridge Living',
    category: 'Interiors',
    location: 'Rosslyn, Nairobi',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'p11',
    title: 'Nyari Estate Exterior',
    category: 'Exteriors',
    location: 'Nyari, Nairobi',
    image:
      'https://images.pexels.com/photos/35713650/pexels-photo-35713650.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p12',
    title: 'Parklands Parquet Detail',
    category: 'Interiors',
    location: 'Parklands, Nairobi',
    image:
      'https://images.pexels.com/photos/20843726/pexels-photo-20843726.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
