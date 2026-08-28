import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getBreadcrumbLabel } from '../../config/breadcrumb.config';

@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss'],
})
export class PageComponentsComponent implements OnInit {
  pageTitle = '';

  constructor(private _activeRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.updatePageTitle();
    this.route.events.subscribe(() => this.updatePageTitle());
  }

  private updatePageTitle(): void {
    const slug = this._activeRoute.snapshot.firstChild?.routeConfig?.path ?? '';
    this.pageTitle = getBreadcrumbLabel(slug);
  }
}
