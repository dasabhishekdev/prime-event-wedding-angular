import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ClientApiService } from 'src/app/services/client-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  testimonials: any[] = [];
  base_url = environment.base_url;

  testimonialAutoplay:
    | { delay: number; disableOnInteraction: boolean; pauseOnMouseEnter: boolean }
    | false = {
    delay: 6500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  constructor(
    private _api: ClientApiService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.testimonialAutoplay = false;
    }

    this._api.getAllTestimonialsByApi().subscribe((res: any[]) => {
      this.testimonials = res;
    });
  }

  counter(i: number): unknown[] {
    return new Array(i);
  }
}
