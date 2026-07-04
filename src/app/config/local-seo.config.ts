export type LocalSeoContent = {
  title: string;
  metaDescription: string;
  path: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  comparisonRows: Array<{ feature: string; primeEvent: string; typical: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const localSeoPages: Record<string, LocalSeoContent> = {
  bestWeddingPlanners: {
    title: 'Best Wedding Planners in Kolkata | Prime Event & Wedding',
    metaDescription:
      'Compare top wedding planners in Kolkata. Prime Event & Wedding offers full-service decor, venue, catering, and coordination with 10+ years of experience.',
    path: '/Home/default/best-wedding-planners-kolkata',
    h1: 'Best Wedding Planners in Kolkata',
    intro:
      'Choosing among wedding planners in Kolkata means balancing experience, vendor networks, and how well a team understands your vision. Prime Event & Wedding has planned hundreds of weddings and celebrations across West Bengal with end-to-end coordination — from engagement to reception.',
    sections: [
      {
        heading: 'What makes a great wedding planner in Kolkata',
        body:
          'Look for planners who manage decor, venue liaison, catering coordination, artist booking, and on-ground execution. Prime Event & Wedding provides all of these under one team, reducing the stress of juggling multiple vendors during your wedding week.',
      },
      {
        heading: 'Full-service wedding planning in Kolkata',
        body:
          'Our packages cover haldi, sangeet, wedding day, and reception events. We work with families across budgets — from intimate gatherings to large destination-style celebrations in Kolkata and nearby cities.',
      },
      {
        heading: 'Why families choose Prime Event & Wedding',
        body:
          'With a decade of experience, transparent communication, and a portfolio of weddings, corporate events, and engagement ceremonies, we focus on personalized planning rather than one-size-fits-all templates.',
      },
    ],
    comparisonRows: [
      { feature: 'End-to-end coordination', primeEvent: 'Yes — single team', typical: 'Often split across vendors' },
      { feature: 'Experience in Kolkata', primeEvent: '10+ years', typical: 'Varies' },
      { feature: 'Decor & venue support', primeEvent: 'Included', typical: 'Often separate vendors' },
      { feature: 'Corporate + wedding expertise', primeEvent: 'Both', typical: 'Usually one focus' },
    ],
    faqs: [
      {
        question: 'How much do wedding planners charge in Kolkata?',
        answer:
          'Costs depend on guest count, venue, decor scale, and services. Prime Event & Wedding offers packages tailored to your budget — contact us for a custom quote.',
      },
      {
        question: 'Do you plan destination weddings from Kolkata?',
        answer:
          'Yes. We coordinate weddings and celebrations across India with vendor management and travel logistics support.',
      },
      {
        question: 'How early should we book a wedding planner?',
        answer:
          'We recommend booking 6–12 months ahead for peak wedding season in Kolkata to secure preferred venues and artists.',
      },
    ],
  },
  weddingPlanningKolkata: {
    title: 'Wedding Planning in Kolkata | Prime Event & Wedding',
    metaDescription:
      'Professional wedding planning in Kolkata — decor, venue, catering, photography coordination, and guest management by Prime Event & Wedding.',
    path: '/Home/default/wedding-planning-kolkata',
    h1: 'Wedding Planning in Kolkata',
    intro:
      'Wedding planning in Kolkata involves unique traditions, venue choices from banquet halls to heritage properties, and tight timelines during the wedding season. Prime Event & Wedding handles every detail so you can focus on your celebration.',
    sections: [
      {
        heading: 'Complete wedding planning services',
        body:
          'From theme selection and decor installation to food tasting, artist management, and day-of coordination, our team manages the full wedding timeline.',
      },
      {
        heading: 'Pre-wedding events',
        body:
          'We plan engagement ceremonies, ring ceremonies, haldi, mehendi, sangeet, and cocktail events with consistent styling and smooth transitions between functions.',
      },
      {
        heading: 'Vendor management',
        body:
          'Prime Event & Wedding maintains relationships with trusted photographers, caterers, florists, and entertainment artists across Kolkata to deliver quality within your budget.',
      },
    ],
    comparisonRows: [
      { feature: 'Day-of coordination', primeEvent: 'Dedicated team', typical: 'Limited hours' },
      { feature: 'Pre-wedding events', primeEvent: 'All ceremonies', typical: 'Wedding day only' },
      { feature: 'Custom themes', primeEvent: 'Fully personalized', typical: 'Template packages' },
      { feature: 'Local Kolkata network', primeEvent: 'Established vendors', typical: 'Newer networks' },
    ],
    faqs: [
      {
        question: 'What areas in Kolkata do you serve?',
        answer:
          'We serve all of Kolkata including Ultadanga, Salt Lake, New Town, South Kolkata, and surrounding areas in West Bengal.',
      },
      {
        question: 'Can you help with wedding venue selection?',
        answer:
          'Yes. We recommend and coordinate with venues suited to your guest count, budget, and theme preferences.',
      },
      {
        question: 'Do you offer partial planning services?',
        answer:
          'Yes. We offer full planning, partial planning, and day-of coordination depending on what you need.',
      },
    ],
  },
  eventManagementKolkata: {
    title: 'Event Management Companies in Kolkata | Prime Event & Wedding',
    metaDescription:
      'Leading event management company in Kolkata for weddings, corporate events, college fests, and product launches. Prime Event & Wedding — 10+ years experience.',
    path: '/Home/default/event-management-companies-kolkata',
    h1: 'Event Management Companies in Kolkata',
    intro:
      'Kolkata hosts weddings, corporate conferences, college fests, product launches, and private celebrations year-round. Prime Event & Wedding is a full-service event management company with expertise across all these categories.',
    sections: [
      {
        heading: 'Corporate and brand events',
        body:
          'We manage conferences, office celebrations, annual days, and product launches with stage design, AV, branding, and guest experience planning.',
      },
      {
        heading: 'Weddings and social celebrations',
        body:
          'Our wedding and engagement teams deliver decor, coordination, and guest management for families across Kolkata and beyond.',
      },
      {
        heading: 'College and school fests',
        body:
          'From artist booking and stage setup to security and sound systems, we handle large-scale campus events with professional production standards.',
      },
    ],
    comparisonRows: [
      { feature: 'Service range', primeEvent: 'Wedding + corporate + fest', typical: 'Single category' },
      { feature: 'Team experience', primeEvent: '10+ years', typical: 'Varies' },
      { feature: 'Production capability', primeEvent: 'Full AV & stage', typical: 'Basic setup' },
      { feature: 'Kolkata presence', primeEvent: 'Ultadanga HQ', typical: 'Varies' },
    ],
    faqs: [
      {
        question: 'What types of events does Prime Event & Wedding manage?',
        answer:
          'Weddings, engagements, birthdays, corporate events, product launches, school and college fests, and anniversary celebrations.',
      },
      {
        question: 'How do I get a quote for an event in Kolkata?',
        answer:
          'Call +91 9836366899 or email primeeventandwedding@gmail.com with your event date, type, and estimated guest count.',
      },
      {
        question: 'Do you provide decor and catering?',
        answer:
          'Yes. Decor, venue coordination, catering management, and artist booking are core parts of our event packages.',
      },
    ],
  },
};
