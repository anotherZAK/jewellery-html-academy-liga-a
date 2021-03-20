'use strict';

import Swiper from 'swiper/bundle';

var cartSwiper = undefined;
var cartSwiperSelector = document.querySelector('.swiper--product-detailed');
var productsSwiperDesktop = undefined;
var productsSwiperTablet = undefined;
var productsSwiperMobile = undefined;
var productsSwiperSelector = document.querySelector('.swiper--products');
var swiperPagination = undefined;
var breakpointMobile = 767;
var breakpointTablet = 1023;

function initCartSwiper() {
  var screenWidth = document.documentElement.clientWidth;

  if (screenWidth < breakpointMobile && cartSwiper === undefined && cartSwiperSelector) {
    cartSwiperSelector.classList.remove('product-detailed__gallery--nojs');
    swiperPagination = document.querySelector('.swiper__pagination');
    swiperPagination.classList.add('swiper__pagination--show');

    cartSwiper = new Swiper('.swiper--product-detailed', {
      slideClass: 'swiper__slide',
      pagination: {
        el: '.swiper__pagination--product-detailed',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + total;
        }
      },
    });
  } else if (screenWidth > breakpointMobile && cartSwiper !== undefined && cartSwiperSelector) {
    cartSwiperSelector.classList.remove('product-detailed__gallery--nojs');
    cartSwiper.destroy();
    cartSwiper = undefined;
    swiperPagination.classList.remove('swiper__pagination--show');
  }
}

function initProductsSwiper() {
  var screenWidth = document.documentElement.clientWidth;

  if (screenWidth < breakpointMobile && productsSwiperSelector) {
    productsSwiperSelector.classList.remove('products__gallery--nojs');
    if (productsSwiperTablet) {
      productsSwiperTablet.destroy();
      productsSwiperTablet = undefined;
    }

    productsSwiperMobile = new Swiper('.swiper--products', {
      slideClass: 'swiper__slide',
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper__pagination--products',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + total;
        }
      },
      navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
      },
    });
  } else if (screenWidth < breakpointTablet && screenWidth > breakpointMobile && productsSwiperSelector) {
    productsSwiperSelector.classList.remove('products__gallery--nojs');
    if (productsSwiperTablet ) {
      productsSwiperTablet.destroy();
      productsSwiperTablet = undefined;
    } else if (productsSwiperMobile) {
      productsSwiperMobile.destroy();
      productsSwiperMobile = undefined;
    }

    productsSwiperTablet = new Swiper('.swiper--products', {
      slideClass: 'swiper__slide',
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper__pagination--products',
        clickable: true,
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet--active',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
      },
    });
  } else if (screenWidth > breakpointTablet && productsSwiperSelector) {
    productsSwiperSelector.classList.remove('products__gallery--nojs');
    if (productsSwiperTablet) {
      productsSwiperTablet.destroy();
      productsSwiperTablet = undefined;
    }

    productsSwiperDesktop = new Swiper('.swiper--products', {
      slideClass: 'swiper__slide',
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper__pagination--products',
        clickable: true,
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet--active',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
      },
    });
  }
}

initCartSwiper();
initProductsSwiper();

window.addEventListener('resize', function () {
  initCartSwiper();
  initProductsSwiper();
});
