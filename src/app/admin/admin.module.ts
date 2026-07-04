import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ReviewUploadComponent } from './review-upload/review-upload.component';
import { ChangeGalleryComponent } from './change-gallery/change-gallery.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../modules/primeng/primeng.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'review-uploader', pathMatch: 'full' },
      { path: 'review-uploader', component: ReviewUploadComponent },
      { path: 'change-gallery', component: ChangeGalleryComponent },
      { path: 'gallery-uploader', component: ImageUploadComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    ImageUploadComponent,
    ReviewUploadComponent,
    ChangeGalleryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimengModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
