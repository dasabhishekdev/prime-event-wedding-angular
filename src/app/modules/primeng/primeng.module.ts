import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';

const PrimeNgModules = [DialogModule, DropdownModule, FileUploadModule, RatingModule];

@NgModule({
  imports: [CommonModule, ...PrimeNgModules],
  exports: [...PrimeNgModules],
})
export class PrimengModule {}
