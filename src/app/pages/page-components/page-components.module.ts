import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponentsComponent } from './page-components.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { WeddingPageComponent } from './wedding-page/wedding-page.component';
import { EngagementPageComponent } from './engagement-page/engagement-page.component';
import { BirthdayPageComponent } from './birthday-page/birthday-page.component';
import { CollegeFestPageComponent } from './college-fest-page/college-fest-page.component';
import { CorporateEventPageComponent } from './corporate-event-page/corporate-event-page.component';
import { ProductLaunchComponent } from './product-launch/product-launch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from '../about/about.component';
import { LocalSeoPageComponent } from './local-seo-page/local-seo-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from '../../bars/contact-us/contact-us.component';
import { ClientReviewFormModule } from '../../client-review-form/client-review-form.module';
import { ClientReviewFormComponent } from '../../client-review-form/client-review-form.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponentsComponent,
    children: [
      { path: 'services', component: ServicesComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'why-primeevent', component: WhyUsComponent },
      { path: 'wedding-or-anniversary-event', component: WeddingPageComponent },
      { path: 'engagement-or-ring-ceremony-event', component: EngagementPageComponent },
      { path: 'birthday-house-party', component: BirthdayPageComponent },
      { path: 'school-college-event', component: CollegeFestPageComponent },
      { path: 'corporate-or-office-event', component: CorporateEventPageComponent },
      { path: 'product-launch-event', component: ProductLaunchComponent },
      { path: 'feedback', component: ClientReviewFormComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: GalleryComponent },
      { path: 'best-wedding-planners-kolkata', component: LocalSeoPageComponent, data: { seoKey: 'bestWeddingPlanners' } },
      { path: 'wedding-planning-kolkata', component: LocalSeoPageComponent, data: { seoKey: 'weddingPlanningKolkata' } },
      { path: 'event-management-companies-kolkata', component: LocalSeoPageComponent, data: { seoKey: 'eventManagementKolkata' } },
    ],
  },
];

@NgModule({
  declarations: [
    PageComponentsComponent,
    WhyUsComponent,
    WeddingPageComponent,
    EngagementPageComponent,
    BirthdayPageComponent,
    CollegeFestPageComponent,
    CorporateEventPageComponent,
    ProductLaunchComponent,
    GalleryComponent,
    AboutComponent,
    LocalSeoPageComponent,
  ],
  imports: [SharedModule, ClientReviewFormModule, PrimengModule, RouterModule.forChild(routes)],
})
export class PageComponentsModule {}
