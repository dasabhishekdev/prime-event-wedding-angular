import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ClientApiService {
  constructor(
    private _http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  getGalleryBypathCode(pageCode: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this._http.get(`../../assets/JSON/${pageCode}.json`);
  }

  getAllTestimonialsByApi() {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this._http.get(`${base_url}/api/client/v1/testimonials`);
  }

  submitReview(from: any) {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this._http.post(`${base_url}/api/client/v1/reviews`, from);
  }

  submitRequest(formData) {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this._http.post(`${base_url}/api/client/v1/request`, formData);
  }

  getImage(img_id) {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this._http.get(`${base_url}/api/image/${img_id}`);
  }
}
