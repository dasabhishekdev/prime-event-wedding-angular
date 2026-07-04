export const siteConfig = {
  name: 'Prime Event & Wedding',
  shortName: 'Prime Event',
  url: 'https://www.primeeventandwedding.co.in',
  email: 'primeeventandwedding@gmail.com',
  phone: '+91-9836366899',
  phoneAlt: '+91-6289054155',
  address: {
    street: 'Ultadanga Road',
    city: 'Kolkata',
    region: 'West Bengal',
    postalCode: '700048',
    country: 'India',
  },
  defaultDescription:
    'Prime Event & Wedding is a Kolkata-based event management company with 10+ years of experience planning weddings, engagements, corporate events, and celebrations across India.',
  ogImage: '/assets/marks/logo.png',
  social: {
    facebook: 'https://www.facebook.com/primeeventandwedding',
    instagram: 'https://www.instagram.com/primeeventandwedding',
    youtube: 'https://youtube.com/channel/UCFcpJy0aAGQEMSsm37FVW0w',
  },
  keywords: [
    'event management Kolkata',
    'wedding planners Kolkata',
    'corporate event organizers',
    'engagement ceremony planning',
    'birthday party organizers',
  ],
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: 'Prime Event & Wedding | Best Event Organizers in Kolkata',
    description:
      'Plan weddings, engagements, corporate events, and celebrations in Kolkata with Prime Event & Wedding. Full-service decor, venue, catering, and coordination.',
    path: '/Home/best-event-organizer',
  },
  services: {
    title: 'Event Services | Prime Event & Wedding Kolkata',
    description:
      'Explore wedding, engagement, birthday, college fest, corporate, and product launch event services from Prime Event & Wedding in Kolkata.',
    path: '/Home/default/services',
  },
  wedding: {
    title: 'Wedding & Anniversary Planning | Prime Event & Wedding',
    description:
      'Full-service wedding and anniversary planning in Kolkata — decor, venue, catering, photography, and end-to-end coordination.',
    path: '/Home/default/wedding-or-anniversary-event',
  },
  engagement: {
    title: 'Engagement & Ring Ceremony | Prime Event & Wedding',
    description:
      'Create a memorable engagement or ring ceremony in Kolkata with personalized decor, coordination, and guest experience planning.',
    path: '/Home/default/engagement-or-ring-ceremony-event',
  },
  birthday: {
    title: 'Birthday & House Party Events | Prime Event & Wedding',
    description:
      'Themed birthday and house party planning in Kolkata with decor, entertainment, food, and budget-friendly packages.',
    path: '/Home/default/birthday-house-party',
  },
  college: {
    title: 'School & College Fest Events | Prime Event & Wedding',
    description:
      'Professional school and college fest management in Kolkata — stage setup, artists, logistics, and on-ground coordination.',
    path: '/Home/default/school-college-event',
  },
  corporate: {
    title: 'Corporate & Office Events | Prime Event & Wedding',
    description:
      'Corporate event planning in Kolkata for conferences, office celebrations, and brand experiences with full production support.',
    path: '/Home/default/corporate-or-office-event',
  },
  productLaunch: {
    title: 'Product Launch Events | Prime Event & Wedding',
    description:
      'High-impact product launch events in Kolkata designed to build awareness, engage audiences, and drive sales momentum.',
    path: '/Home/default/product-launch-event',
  },
  gallery: {
    title: 'Event Gallery | Prime Event & Wedding Kolkata',
    description:
      'Browse wedding, corporate, engagement, and celebration galleries from Prime Event & Wedding events across Kolkata.',
    path: '/Home/default/portfolio',
  },
  whyUs: {
    title: 'Why Choose Us | Prime Event & Wedding',
    description:
      'See why families and brands trust Prime Event & Wedding for personalized planning, reliable execution, and memorable celebrations.',
    path: '/Home/default/why-primeevent',
  },
  about: {
    title: 'About Us | Prime Event & Wedding Kolkata',
    description:
      'Learn about Prime Event & Wedding — Kolkata event planners with a decade of experience in weddings and corporate celebrations.',
    path: '/Home/default/about',
  },
  contact: {
    title: 'Contact Us | Prime Event & Wedding Kolkata',
    description:
      'Get in touch with Prime Event & Wedding for wedding and event planning in Kolkata. Call +91 9836366899 or send a message.',
    path: '/Home/default/contact-us',
  },
  feedback: {
    title: 'Share Your Feedback | Prime Event & Wedding',
    description:
      'Tell Prime Event & Wedding about your event experience. Your feedback helps us improve every celebration we plan.',
    path: '/Home/default/feedback',
  },
};
