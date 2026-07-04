import { Component, OnInit, ViewChild } from '@angular/core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import SwiperCore, {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  faCoffee = faPizzaSlice;

  ngOnInit(): void {}
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSlide() {
    AOS.refresh();
  }
}
