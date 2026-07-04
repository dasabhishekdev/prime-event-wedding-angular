import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientReviewFormComponent } from './client-review-form.component';

const routes: Routes = [
  { path: '', component: ClientReviewFormComponent },
  { path: ':name', component: ClientReviewFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientReviewRoutingModule {}
