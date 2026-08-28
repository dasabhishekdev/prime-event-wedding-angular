export const BREADCRUMB_LABELS: Record<string, string> = {
  services: 'Event Services',
  'contact-us': 'Contact Us',
  'why-primeevent': 'Why Choose Us',
  'wedding-or-anniversary-event': 'Wedding & Anniversary Planning',
  'engagement-or-ring-ceremony-event': 'Engagement & Ring Ceremony',
  'birthday-house-party': 'Birthday & House Party',
  'school-college-event': 'School & College Fest',
  'corporate-or-office-event': 'Corporate Events',
  'product-launch-event': 'Product Launch Events',
  portfolio: 'Event Gallery',
  about: 'About Us',
  feedback: 'Share Feedback',
  'best-wedding-planners-kolkata': 'Best Wedding Planners in Kolkata',
  'wedding-planning-kolkata': 'Wedding Planning in Kolkata',
  'event-management-companies-kolkata': 'Event Management Companies in Kolkata',
};

export function getBreadcrumbLabel(slug: string): string {
  if (!slug) {
    return '';
  }
  return BREADCRUMB_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
