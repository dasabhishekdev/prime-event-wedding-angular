import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import type Swiper from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSwiper') heroSwiper?: SwiperComponent;

  faCoffee = faPizzaSlice;

  heroConfig: SwiperOptions = {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 700,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    navigation: true,
    pagination: { clickable: true },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.heroConfig = { ...this.heroConfig, autoplay: false };
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Ensure autoplay starts after Swiper initializes (fade + loop can delay it).
    queueMicrotask(() => this.startHeroAutoplay());
  }

  onHeroInit([swiper]: [Swiper]): void {
    this.startHeroAutoplay(swiper);
  }

  onSlide(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.refresh();
    }
  }

  private startHeroAutoplay(swiper?: Swiper): void {
    const instance = swiper ?? this.heroSwiper?.swiperRef;
    if (instance?.autoplay && this.heroConfig.autoplay !== false) {
      instance.autoplay.start();
    }
  }
}
