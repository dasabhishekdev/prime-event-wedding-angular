import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss'],
})
export class PageComponentsComponent implements OnInit {
  constructor(private _activeRoute: ActivatedRoute, private route: Router) {}
  basePath: string;
  childPath: string;
  url: string;
  ngOnInit(): void {
    this.updateChildPath();
    this.route.events.subscribe(() => this.updateChildPath());
  }

  private updateChildPath(): void {
    this.basePath = this._activeRoute.routeConfig?.path ?? '';
    const slug = this._activeRoute.snapshot.firstChild?.routeConfig?.path;
    this.childPath = slug ? slug.replace(/-/g, ' ') : '';
  }
}
