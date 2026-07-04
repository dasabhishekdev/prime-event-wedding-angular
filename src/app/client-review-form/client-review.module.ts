import { NgModule } from '@angular/core';
import { ClientReviewFormModule } from './client-review-form.module';
import { ClientReviewRoutingModule } from './client-review-routing.module';

@NgModule({
  imports: [ClientReviewFormModule, ClientReviewRoutingModule],
})
export class ClientReviewModule {}
