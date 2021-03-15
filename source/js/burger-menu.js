'use strict';

var body = document.querySelector('.page-body');
var burgerToggle = document.querySelector('.burger');
var mainNav = document.querySelector('.main-nav');
var mainNavList = mainNav.querySelector('.main-nav__list');
var pageHeader = document.querySelector('.page-header');
var offsetTop = 100;

mainNav.classList.remove('main-nav--nojs');
pageHeader.classList.add('page-header--js');


burgerToggle.addEventListener('click', function () {
  body.classList.toggle('page-body--fixed');
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');

  var bodyHeight = mainNavList.offsetHeight;
  body.style.setProperty('--element-height', bodyHeight + offsetTop + 'px');
});
