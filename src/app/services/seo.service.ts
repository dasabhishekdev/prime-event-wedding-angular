import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { pageSeo, siteConfig } from '../config/site.config';

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
          '@type': 'EventPlanner',
          name: siteConfig.name,
          description: siteConfig.defaultDescription,
          url: siteConfig.url,
          logo: `${siteConfig.url}${siteConfig.ogImage}`,
          image: `${siteConfig.url}${siteConfig.ogImage}`,
          email: siteConfig.email,
          telephone: siteConfig.phone,
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

    const label = segments[segments.length - 1].replace(/-/g, ' ');
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: label.charAt(0).toUpperCase() + label.slice(1),
      item: `${siteConfig.url}${path}`,
    });

    return crumbs;
  }
}
