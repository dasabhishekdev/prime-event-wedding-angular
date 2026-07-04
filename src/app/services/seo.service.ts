import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocalSeoContent } from '../config/local-seo.config';
import { pageSeo, siteConfig } from '../config/site.config';

const BREADCRUMB_LABELS: Record<string, string> = {
  services: 'Services',
  'contact-us': 'Contact Us',
  'why-primeevent': 'Why Choose Us',
  'wedding-or-anniversary-event': 'Wedding & Anniversary',
  'engagement-or-ring-ceremony-event': 'Engagement & Ring Ceremony',
  'birthday-house-party': 'Birthday & House Party',
  'school-college-event': 'School & College Fest',
  'corporate-or-office-event': 'Corporate Events',
  'product-launch-event': 'Product Launch',
  portfolio: 'Gallery',
  about: 'About Us',
  feedback: 'Feedback',
  'best-wedding-planners-kolkata': 'Best Wedding Planners Kolkata',
  'wedding-planning-kolkata': 'Wedding Planning Kolkata',
  'event-management-companies-kolkata': 'Event Management Kolkata',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly jsonLdId = 'prime-event-jsonld';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateFromRoute());

    this.updateFromRoute();
  }

  applyLocalSeoPage(content: LocalSeoContent): void {
    this.applySeo(content.title, content.metaDescription, content.path);
    this.injectFaqSchema(content.faqs);
  }

  updatePage(seoKey: keyof typeof pageSeo): void {
    const seo = pageSeo[seoKey];
    if (!seo) {
      return;
    }

    this.applySeo(seo.title, seo.description, seo.path);
  }

  private updateFromRoute(): void {
    const url = this.router.url.split('?')[0];
    const isPrivateRoute =
      url.startsWith('/admin') || url.startsWith('/client-review');

    if (isPrivateRoute) {
      this.setMeta('robots', 'noindex, nofollow');
      return;
    }

    if (url.includes('/feedback')) {
      this.setMeta('robots', 'noindex, follow');
      const seo = pageSeo['feedback'];
      this.applySeo(seo.title, seo.description, seo.path);
      return;
    }

    const match = Object.values(pageSeo).find((entry) => url.includes(entry.path));
    const seo = match ?? pageSeo['home'];
    this.applySeo(seo.title, seo.description, seo.path);
  }

  private applySeo(pageTitle: string, description: string, path: string): void {
    this.title.setTitle(pageTitle);
    this.setMeta('description', description);
    this.setMeta('keywords', siteConfig.keywords.join(', '));
    this.setMeta('author', siteConfig.name);
    this.setMeta('robots', 'index, follow');

    const canonical = `${siteConfig.url}${path}`;
    this.setLink('canonical', canonical);

    this.setMeta('og:title', pageTitle, true);
    this.setMeta('og:description', description, true);
    this.setMeta('og:type', 'website', true);
    this.setMeta('og:url', canonical, true);
    this.setMeta('og:site_name', siteConfig.name, true);
    this.setMeta('og:image', `${siteConfig.url}${siteConfig.ogImage}`, true);
    this.setMeta('og:image:width', '1200', true);
    this.setMeta('og:image:height', '630', true);
    this.setMeta('og:locale', 'en_IN', true);

    this.setMeta('twitter:card', 'summary_large_image');
    this.setMeta('twitter:title', pageTitle);
    this.setMeta('twitter:description', description);
    this.setMeta('twitter:image', `${siteConfig.url}${siteConfig.ogImage}`);

    this.injectStructuredData(path);
  }

  private setMeta(name: string, content: string, isProperty = false): void {
    const selector = isProperty ? `property='${name}'` : `name='${name}'`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [isProperty ? 'property' : 'name']: name, content });
      return;
    }
    this.meta.addTag({ [isProperty ? 'property' : 'name']: name, content });
  }

  private setLink(rel: string, href: string): void {
    let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  private injectFaqSchema(faqs: Array<{ question: string; answer: string }>): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    };

    let script = document.getElementById('prime-event-faq-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'prime-event-faq-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  private injectStructuredData(path: string): void {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.defaultDescription,
          inLanguage: 'en-IN',
        },
        {
          '@type': ['EventPlanner', 'LocalBusiness'],
          name: siteConfig.name,
          description: siteConfig.defaultDescription,
          url: siteConfig.url,
          logo: `${siteConfig.url}${siteConfig.ogImage}`,
          image: `${siteConfig.url}${siteConfig.ogImage}`,
          email: siteConfig.email,
          telephone: siteConfig.phone,
          priceRange: '₹₹',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '20:00',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 22.5868,
            longitude: 88.3949,
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.region,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.country,
          },
          areaServed: {
            '@type': 'City',
            name: 'Kolkata',
          },
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.youtube,
          ],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: this.buildBreadcrumbs(path),
        },
      ],
    };

    let script = document.getElementById(this.jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = this.jsonLdId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  private buildBreadcrumbs(path: string): Array<Record<string, string | number>> {
    const segments = path.split('/').filter(Boolean);
    const crumbs: Array<Record<string, string | number>> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteConfig.url}/Home/best-event-organizer`,
      },
    ];

    if (segments.length <= 2) {
      return crumbs;
    }

    const slug = segments[segments.length - 1];
    const label = BREADCRUMB_LABELS[slug] ?? slug.replace(/-/g, ' ');
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: `${siteConfig.url}${path}`,
    });

    return crumbs;
  }
}
