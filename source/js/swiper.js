'use strict';

import Swiper from 'swiper/bundle';

var swiper = new Swiper('.swiper-container', {

  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
