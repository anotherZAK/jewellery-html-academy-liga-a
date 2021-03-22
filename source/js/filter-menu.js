'use strict';

(function () {
  var filterButton = document.querySelector('.catalog-form__filter-button');

  if (filterButton) {
    var body = document.querySelector('.page-body');
    var header = body.querySelector('.page-header');
    var filterMenu = document.querySelector('.catalog-filter');
    var filterMenuClose = document.querySelector('.catalog-filter__close');
    var rangeFilter = filterMenu.querySelector('.range-filter');
    var rangeBar = rangeFilter.querySelector('.range-filter__bar');
    var minPrice = rangeFilter.querySelector('.range-filter__price--min');
    var maxPrice = rangeFilter.querySelector('.range-filter__price--max');

    filterMenu.classList.remove('catalog-filter--nojs');
    rangeFilter.classList.remove('range-filter--nojs');
    rangeBar.classList.remove('range-filter__bar--nojs');
    minPrice.textContent = '$ 55';
    maxPrice.textContent = '$ 155';

    filterButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      body.classList.add('page-body--fixed-filter');
      header.classList.add('page-header--hide');
      filterMenu.classList.add('catalog-filter--open');
    });

    filterMenuClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      body.classList.remove('page-body--fixed-filter');
      header.classList.remove('page-header--hide');
      filterMenu.classList.remove('catalog-filter--open');
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        body.classList.remove('page-body--fixed-filter');
        header.classList.remove('page-header--hide');
        filterMenu.classList.remove('catalog-filter--open');
      }
    });
  }
})();

