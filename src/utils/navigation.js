/**
 * Brand and navigation constants for M.S Solutions.
 * Edit contact details here once; the whole site (header, footer, contact page) reads from this file.
 */
export const BRAND = {
  name: 'M.S SOLUTIONS',
  shortName: 'M.S Solutions',
  slogan: 'Powering Businesses Through Technology.',
  email: 'official.mssolutions@gmail.com',
  phone: '+92 309 8170998',
  phoneHref: 'tel:+923098170998',
  instagram: 'https://www.instagram.com/mssolutions.official/',
  facebook: 'https://www.facebook.com/profile.php?id=61596069245952',
  instagramHandle: '@mssolutions.official',
  linkedin: 'https://www.linkedin.com/company/m.s-solutions/home/',
  linkedinHandle: 'M.S Solutions on LinkedIn',
  description:
    'M.S Solutions builds web applications, mobile apps and SaaS products for small schools and growing software businesses.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Services',
    links: [
      { label: 'Web applications', href: '/services#web-application-development' },
      { label: 'Mobile apps', href: '/services#mobile-application-development' },
      { label: 'SaaS products', href: '/services#saas-product-development' },
      { label: 'School websites', href: '/services#school-website-development' },
      { label: 'Maintenance & support', href: '/services#software-maintenance-support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our philosophy', href: '/about#philosophy' },
      { label: 'Product concepts', href: '/#concepts' },
      { label: 'How we work', href: '/#process' },
      { label: 'Contact', href: '/contact' },
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
