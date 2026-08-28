import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.body) {
      return;
    }
    if (event.target.innerWidth > 1000) {
      this.sidePanel = false;
    }
    if (!this.sidePanel) {
      this.body.style.height = '100%';
    }
  }
  body: HTMLElement | null = null;
  sidePanel: boolean = false;
  constructor(
    private route: Router,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.body = this.document.querySelector('body');
    }
    this.route.events.subscribe(() => {
      this.sidePanel = false;
      if (this.body) {
        this.body.style.height = '100%';
      }
    });
  }
  toggleSidePanel() {
    this.sidePanel = !this.sidePanel;
    if (!this.body) {
      return;
    }
    if (this.sidePanel) {
      this.body.style.height = '92vh';
    } else {
      this.body.style.height = '100%';
    }
  }
}
