/**
 * M.S SOLUTIONS - Concept Project Demonstrations
 * 
 * IMPORTANT NOTE:
 * These projects are functional architectural blueprints and concept demonstrations
 * engineered by M.S Solutions to illustrate our design, technical architecture, and
 * product thinking. They are transparently labelled as concept demonstrations,
 * not completed client work.
 */

export const PORTFOLIO_PROJECTS = [
  {
    id: 'salonflow',
    title: 'SalonFlow',
    type: 'Concept Demonstration',
    tagline: 'Modern Salon & Spa Appointment Management Platform',
    category: 'Web & Mobile Application',
    industry: 'Beauty & Lifestyle Commerce',
    status: 'Interactive Architecture Blueprint',
    featured: true,
    summary:
      'A seamless multi-location booking and client management web platform that enables boutique salons and independent stylists to automate appointment scheduling, eliminate no-shows, and accept upfront deposits.',
    challenge:
      'Independent salons lose up to 18% of billable hours to manual phone coordination, double-bookings, and last-minute cancellations without financial recourse.',
    solution:
      'SalonFlow introduces real-time visual seat allocation, automated SMS & WhatsApp appointment reminders, smart calendar syncing with Google Calendar, and frictionless deposit checkout.',
    keyFeatures: [
      'Self-service appointment scheduler with real-time stylist availability',
      'Automated SMS & WhatsApp confirmation and reminder workflows',
      'Staff schedule management, commission tracking & tip allocation',
      'Integrated Stripe card pre-authorization & contactless payments',
      'Customer profile history, service notes, and loyalty reward tiers',
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Stripe API', 'Twilio'],
    deliverables: [
      'Customer Web Booking App',
      'Stylist Mobile Companion',
      'Admin Master Dashboard',
      'API Contract Specification',
    ],
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere',
    type: 'Concept Demonstration',
    tagline: 'Next-Generation Headless E-commerce Storefront',
    category: 'E-commerce Platform',
    industry: 'Retail & Direct-to-Consumer',
    status: 'High-Fidelity Architecture Prototype',
    featured: true,
    summary:
      'A lightning-fast, conversion-optimized direct-to-consumer (D2C) e-commerce storefront with instant instant-search filtering, localized currency pricing, and a single-page frictionless checkout experience.',
    challenge:
      'Traditional monolithic e-commerce templates suffer from bloated script bundles, sluggish mobile page loads exceeding 4.2 seconds, and multi-step drop-offs during cart review.',
    solution:
      'ShopSphere leverages a modern headless React frontend paired with edge caching to deliver sub-700ms page transitions, an instant side-cart drawer, and 1-click Express Checkout.',
    keyFeatures: [
      'Sub-second page speed with edge rendering & optimized image pipelines',
      'Dynamic multi-faceted product filtering with live inventory counts',
      'Frictionless slide-out cart drawer with dynamic free-shipping progress',
      'Global multi-currency support with automatic geolocation detection',
      'Automated abandoned-cart recovery triggers & customer order portal',
    ],
    techStack: ['Next.js', 'TypeScript', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe', 'Redis'],
    deliverables: [
      'D2C Responsive Storefront',
      'Micro-Checkout Pipeline',
      'Inventory Sync Middleware',
      'Brand Design System',
    ],
  },
  {
    id: 'businesspilot',
    title: 'BusinessPilot',
    type: 'Concept Demonstration',
    tagline: 'All-In-One SaaS Operations & Business Intelligence Console',
    category: 'SaaS Platform',
    industry: 'B2B & Enterprise Operations',
    status: 'Full System Architecture Defined',
    featured: true,
    summary:
      'A centralized operational intelligence dashboard engineered for growing software companies and service agencies to track live MRR metrics, customer churn, team utilization, and client deliverables in real time.',
    challenge:
      'Growing businesses juggle 5 to 7 disconnected tools for billing, team tasking, customer support, and revenue tracking, leading to blind spots and delayed decision making.',
    solution:
      'BusinessPilot aggregates distributed operational pipelines into unified executive telemetry with granular role-based permissions, automated KPI alerts, and exportable stakeholder reports.',
    keyFeatures: [
      'Real-time financial telemetry: MRR, ARR, Churn, LTV, and burn rate',
      'Interactive client project progress boards with milestone milestones',
      'Role-based multi-user workspace with enterprise permission matrices',
      'Granular audit trail capturing administrative modifications',
      'Customizable report builder with scheduled PDF & Excel exports',
    ],
    techStack: ['Angular / React', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Chart.js', 'JWT / OAuth2'],
    deliverables: [
      'Executive Analytics Portal',
      'Multi-Tenant Core Engine',
      'Telemetry Sync Worker',
      'Role Management Framework',
    ],
  },
];
