/**
 * Brand and navigation constants for M.S Solutions.
 * Edit contact details here once; the whole site (header, footer, contact page) reads from this file.
 */
export const BRAND = {
  name: 'M.S SOLUTIONS',
  shortName: 'M.S Solutions',
  slogan: 'Powering Businesses Through Technology.',
  established: '2026',
  email: 'official.mssolutions@gmail.com',
  website: 'https://m-ssolution.web.app/',
  phone: '+92 309 8170998',
  phoneHref: 'tel:+923098170998',
  instagram: 'https://www.instagram.com/mssolutions.official/',
  facebook: 'https://www.facebook.com/profile.php?id=61596069245952',
  instagramHandle: '@mssolutions.official',
  linkedin: 'https://www.linkedin.com/company/m.s-solutions/home/',
  linkedinHandle: 'M.S Solutions on LinkedIn',
  description:
    'M.S Solutions is a professional digital solutions agency building custom web applications, e-commerce storefronts, mobile apps, and scalable SaaS platforms for small businesses and startups internationally.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services#web-development' },
      { label: 'E-commerce Development', href: '/services#ecommerce-development' },
      { label: 'Mobile App Development', href: '/services#mobile-app-development' },
      { label: 'SaaS Development', href: '/services#saas-development' },
      { label: 'UI/UX & Product Design', href: '/services#ui-ux-design' },
      { label: 'Social Media Management', href: '/services#social-media-management' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Portfolio & Concepts', href: '/portfolio' },
      { label: 'Our engineering process', href: '/#process' },
      { label: 'Why choose us', href: '/#why-us' },
      { label: 'Start a project', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
];
