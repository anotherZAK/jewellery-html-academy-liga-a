'use strict';

var filterButton = document.querySelector('.catalog-form__filter-button');

if (filterButton) {
  var body = document.querySelector('.page-body');
  var header = body.querySelector('.page-header');
  var filterMenu = document.querySelector('.catalog-filter');
  var filterMenuClose = document.querySelector('.catalog-filter__close');

  filterMenu.classList.remove('catalog-filter--nojs');


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
