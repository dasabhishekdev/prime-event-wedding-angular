import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localSeoPages } from '../../../config/local-seo.config';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-local-seo-page',
  templateUrl: './local-seo-page.component.html',
  styleUrls: ['./local-seo-page.component.scss'],
})
export class LocalSeoPageComponent implements OnInit {
  content = localSeoPages['bestWeddingPlanners'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
    const seoKey = this.route.snapshot.data['seoKey'] as string;
    this.content = localSeoPages[seoKey] ?? localSeoPages['bestWeddingPlanners'];
    this.seo.applyLocalSeoPage(this.content);
  }
}
