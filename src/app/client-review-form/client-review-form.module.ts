import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../modules/primeng/primeng.module';
import { ClientReviewFormComponent } from './client-review-form.component';

@NgModule({
  declarations: [ClientReviewFormComponent],
  imports: [SharedModule, PrimengModule],
  exports: [ClientReviewFormComponent],
})
export class ClientReviewFormModule {}
