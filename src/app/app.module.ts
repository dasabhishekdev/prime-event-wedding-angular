import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { ContactUsComponent } from './bars/contact-us/contact-us.component';
import { FooterComponent } from './bars/footer/footer.component';
import { ServicesComponent } from './pages/page-components/services/services.component';
import { WhyUsComponent } from './pages/page-components/why-us/why-us.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { WeddingPageComponent } from './pages/page-components/wedding-page/wedding-page.component';
import { EngagementPageComponent } from './pages/page-components/engagement-page/engagement-page.component';
import { BirthdayPageComponent } from './pages/page-components/birthday-page/birthday-page.component';
import { CollegeFestPageComponent } from './pages/page-components/college-fest-page/college-fest-page.component';
import { CorporateEventPageComponent } from './pages/page-components/corporate-event-page/corporate-event-page.component';
import { AdminComponent } from './admin/admin.component';
import { ImageUploadComponent } from './admin/image-upload/image-upload.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { GalleryComponent } from './pages/page-components/gallery/gallery.component';
import { TestimonialComponent } from './pages/page-components/testimonial/testimonial.component';
import { ReviewUploadComponent } from './admin/review-upload/review-upload.component';
import { ReviewsComponent } from './pages/page-components/reviews/reviews.component';
import { ClientReviewFormComponent } from './client-review-form/client-review-form.component';
import { ChangeGalleryComponent } from './admin/change-gallery/change-gallery.component';
import { ProductLaunchComponent } from './pages/page-components/product-launch/product-launch.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PagesComponent,
    ContactUsComponent,
    FooterComponent,
    ServicesComponent,
    WhyUsComponent,
    PageComponentsComponent,
    WeddingPageComponent,
    EngagementPageComponent,
    BirthdayPageComponent,
    CollegeFestPageComponent,
    CorporateEventPageComponent,
    AdminComponent,
    ImageUploadComponent,
    GalleryComponent,
    TestimonialComponent,
    ReviewUploadComponent,
    ReviewsComponent,
    ClientReviewFormComponent,
    ChangeGalleryComponent,
    ProductLaunchComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    PrimengModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
