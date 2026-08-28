import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocalSeoContent } from '../config/local-seo.config';
import { getBreadcrumbLabel } from '../config/breadcrumb.config';
import { pageSeo, siteConfig, PageSeo } from '../config/site.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly jsonLdId = 'prime-event-jsonld';
  private readonly faqJsonLdId = 'prime-event-faq-jsonld';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document
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
    const url = this.normalizePath(this.router.url);
    const isPrivateRoute =
      url.startsWith('/admin') || url.startsWith('/client-review');

    if (isPrivateRoute) {
      this.clearFaqSchema();
      this.setMeta('robots', 'noindex, nofollow');
      return;
    }

    if (url.includes('/feedback')) {
      this.clearFaqSchema();
      this.setMeta('robots', 'noindex, follow');
      const seo = pageSeo['feedback'];
      this.applySeo(seo.title, seo.description, seo.path);
      return;
    }

    const seo = this.findSeoForUrl(url);
    this.applySeo(seo.title, seo.description, seo.path);
  }

  private normalizePath(url: string): string {
    const path = url.split('?')[0].split('#')[0];
    return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  }

  /** Longest-path-first exact match to avoid false positives. */
  private findSeoForUrl(url: string): PageSeo {
    const entries = Object.values(pageSeo).sort((a, b) => b.path.length - a.path.length);
    return entries.find((entry) => url === entry.path) ?? pageSeo['home'];
  }

  private applySeo(pageTitle: string, description: string, path: string): void {
    this.clearFaqSchema();

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

    this.injectStructuredData(pageTitle, description, path);
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
    let link = this.document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      this.document.head.appendChild(link);
    }
    link.href = href;
  }

  private clearFaqSchema(): void {
    this.document.getElementById(this.faqJsonLdId)?.remove();
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

    let script = this.document.getElementById(this.faqJsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = this.faqJsonLdId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  private injectStructuredData(pageTitle: string, description: string, path: string): void {
    const pageUrl = `${siteConfig.url}${path}`;
    const orgId = `${siteConfig.url}/#organization`;
    const websiteId = `${siteConfig.url}/#website`;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': websiteId,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.defaultDescription,
          inLanguage: 'en-IN',
          publisher: { '@id': orgId },
        },
        {
          '@type': ['EventPlanner', 'LocalBusiness'],
          '@id': orgId,
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
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: pageTitle,
          description,
          isPartOf: { '@id': websiteId },
          about: { '@id': orgId },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: this.buildBreadcrumbs(path),
        },
      ],
    };

    let script = this.document.getElementById(this.jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = this.jsonLdId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
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
    const label = getBreadcrumbLabel(slug);
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: `${siteConfig.url}${path}`,
    });

    return crumbs;
  }
}
