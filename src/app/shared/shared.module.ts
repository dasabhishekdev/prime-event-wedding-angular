import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../bars/navbar/navbar.component';
import { FooterComponent } from '../bars/footer/footer.component';
import { ContactUsComponent } from '../bars/contact-us/contact-us.component';
import { ServicesComponent } from '../pages/page-components/services/services.component';
import { TestimonialComponent } from '../pages/page-components/testimonial/testimonial.component';
import { ReviewsComponent } from '../pages/page-components/reviews/reviews.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    ServicesComponent,
    TestimonialComponent,
    ReviewsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, SwiperModule, FontAwesomeModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    FontAwesomeModule,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    ServicesComponent,
    TestimonialComponent,
    ReviewsComponent,
  ],
})
export class SharedModule {}
