import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../modules/primeng/primeng.module';
import { ClientReviewFormComponent } from './client-review-form.component';

const routes: Routes = [
  { path: '', component: ClientReviewFormComponent },
  { path: ':name', component: ClientReviewFormComponent },
];

@NgModule({
  declarations: [ClientReviewFormComponent],
  imports: [SharedModule, PrimengModule, RouterModule.forChild(routes)],
  exports: [ClientReviewFormComponent],
})
export class ClientReviewModule {}
