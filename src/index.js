import './styles/index.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1220: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    disabledClass: 'button-disabled'
  },
});