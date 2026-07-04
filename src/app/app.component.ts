import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prime-event-and-wedding';

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.init();
    this.initAosWhenIdle();
  }

  private initAosWhenIdle(): void {
    const start = () =>
      AOS.init({
        once: true,
        duration: 800,
      });

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(start);
      return;
    }

    setTimeout(start, 100);
  }
}
