'use strict';

var filterButton = document.querySelector('.catalog-form__filter-button');

if (filterButton) {
  var body = document.querySelector('.page-body');
  var filterMenu = document.querySelector('.catalog-filter');
  var filterMenuClose = document.querySelector('.catalog-filter__close');

  filterMenu.classList.remove('catalog-filter--nojs');


  filterButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    body.classList.add('page-body--fixed');
    filterMenu.classList.add('catalog-filter--open');
  });

  filterMenuClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    body.classList.remove('page-body--fixed');
    filterMenu.classList.remove('catalog-filter--open');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      body.classList.remove('page-body--fixed');
      filterMenu.classList.remove('catalog-filter--open');
    }
  });
}
