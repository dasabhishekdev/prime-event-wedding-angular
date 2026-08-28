import { AfterViewInit, Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '.image, .gallery-img, .slide-img, img.slide-img__photo',
})
export class ImageLoadDirective implements AfterViewInit, OnDestroy {
  private cleanup?: () => void;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const host = this.el.nativeElement;
    const isImg = host.tagName === 'IMG';
    const container = isImg
      ? ((host.closest('.slider, .image, .gallery-img, .slide-img') as HTMLElement | null) ?? host)
      : host;
    const img = (isImg ? host : host.querySelector('img')) as HTMLImageElement | null;

    if (!img) {
      return;
    }

    const markLoaded = () => {
      this.renderer.addClass(container, 'is-loaded');
      this.renderer.addClass(img, 'is-loaded');
    };

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
      return;
    }

    const onLoad = () => markLoaded();
    img.addEventListener('load', onLoad, { once: true });
    img.addEventListener('error', onLoad, { once: true });
    this.cleanup = () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onLoad);
    };
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
