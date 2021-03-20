'use strict';

var body = document.querySelector('.page-body');
var burgerToggle = document.querySelector('.burger');
var mainNav = document.querySelector('.main-nav');
var pageHeader = document.querySelector('.page-header');

mainNav.classList.remove('main-nav--nojs');
pageHeader.classList.add('page-header--js');


burgerToggle.addEventListener('click', function () {
  body.classList.toggle('page-body--fixed');
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');

  var mainNavList = mainNav.querySelector('.main-nav__list');

  var mainNavListCompute = getComputedStyle(mainNavList);
  body.style.setProperty('--element-height', 2.2 * parseFloat(mainNavListCompute.height) + 'px');
});
