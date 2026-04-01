import { Program, ImpactStat } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'women-employment',
    title: 'Women Employment Program',
    shortDescription: 'Providing job opportunities to women, especially widows, through production work.',
    longDescription: 'Our flagship employment initiative focuses on empowering women who have lost their primary breadwinners. By establishing manufacturing units for essential hygiene products like sanitary pads and wipes, we provide not just a job, but a path to dignity and financial independence. This program integrates skill training with sustainable production, ensuring that every participant becomes a skilled artisan in their field.',
    benefits: [
      'Sustainable monthly income',
      'Skill certification in manufacturing',
      'Access to healthcare and counseling',
      'Community support network',
      'Flexible working hours for mothers'
    ],
    impactStats: [
      { label: 'Women Employed', value: '200+' },
      { label: 'Products Distributed', value: '50k+' }
    ],
    image: 'https://picsum.photos/seed/women-work/800/600'
  },
  {
    id: 'skill-development',
    title: 'Skill Development Training',
    shortDescription: 'Training individuals with practical skills to improve employability and income.',
    longDescription: 'We bridge the gap between potential and opportunity. Our comprehensive training modules cover vocational skills, digital literacy, and entrepreneurship. We don\'t just teach skills; we build careers. By partnering with local industries, we ensure our curriculum stays relevant to the modern job market, giving our graduates a competitive edge in securing long-term, stable employment.',
    benefits: [
      'Industry-recognized certifications',
      'Job placement assistance',
      'Entrepreneurship mentorship',
      'Digital literacy training',
      'Soft skills and communication workshops'
    ],
    impactStats: [
      { label: 'Graduates', value: '450+' },
      { label: 'Placement Rate', value: '85%' }
    ],
    image: 'https://picsum.photos/seed/skill-train/800/600'
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    shortDescription: 'Encouraging independence and leadership among women through support programs.',
    longDescription: 'Empowerment goes beyond economics. Our programs focus on building leadership, legal awareness, and self-advocacy among women. We create safe spaces for dialogue and growth, helping women take charge of their lives and their communities. Through workshops on rights, health, and financial management, we foster a generation of confident female leaders who drive social change.',
    benefits: [
      'Leadership development workshops',
      'Legal rights awareness',
      'Financial management training',
      'Health and wellness sessions',
      'Peer mentorship programs'
    ],
    impactStats: [
      { label: 'Leaders Trained', value: '120+' },
      { label: 'Workshops Held', value: '300+' }
    ],
    image: 'https://picsum.photos/seed/empower/800/600'
  },
  {
    id: 'safe-water',
    title: 'Safe Drinking Water',
    shortDescription: 'Ensuring access to clean and safe water in affected communities.',
    longDescription: 'Clean water is a fundamental human right. In crisis-affected areas, access to safe drinking water is often the first casualty. We implement community-led water purification systems and solar-powered borewells to ensure a steady supply of clean water. Our program also includes hygiene education to prevent water-borne diseases, creating a holistic approach to community health.',
    benefits: [
      'Access to clean drinking water',
      'Reduction in water-borne diseases',
      'Solar-powered infrastructure',
      'Community water management training',
      'Hygiene and sanitation education'
    ],
    impactStats: [
      { label: 'Villages Covered', value: '45+' },
      { label: 'Daily Liters Provided', value: '100k+' }
    ],
    image: 'https://picsum.photos/seed/water/800/600'
  },
  {
    id: 'scholarships',
    title: 'Educational Scholarships',
    shortDescription: 'Providing educational scholarships to victims of Manipur violence.',
    longDescription: 'Education is the most powerful tool for rebuilding a broken future. Our scholarship program specifically targets children and youth displaced or affected by the Manipur violence. We cover tuition fees, books, and living expenses, ensuring that trauma doesn\'t end a child\'s educational journey. We believe that by investing in their education today, we are securing the peace and prosperity of tomorrow.',
    benefits: [
      'Full tuition fee coverage',
      'Books and stationery allowance',
      'Psychological support and counseling',
      'Career guidance and pathfinding',
      'Safe hostel accommodations'
    ],
    impactStats: [
      { label: 'Scholars Supported', value: '350+' },
      { label: 'Schools Partnered', value: '25+' }
    ],
    image: 'https://picsum.photos/seed/education/800/600'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    label: '1000+ Lives Impacted',
    value: '1,000+',
    description: 'Direct beneficiaries of our various social and economic programs.'
  },
  {
    label: '500+ Families Supported',
    value: '500+',
    description: 'Households provided with essential resources and livelihood support.'
  },
  {
    label: '200+ Women Empowered',
    value: '200+',
    description: 'Women successfully integrated into our employment and leadership initiatives.'
  }
];
