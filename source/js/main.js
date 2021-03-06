/******/ "use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./source/js/burger-menu.js ***!
  \**********************************/


(function () {
  var body = document.querySelector('.page-body');
  var burgerToggle = document.querySelector('.burger');
  var mainNav = document.querySelector('.main-nav');
  var mainNavList = mainNav.querySelector('.main-nav__list');
  var pageHeader = document.querySelector('.page-header');
  var bgContainer = document.querySelector('.background-container');
  var offsetTop = 100;

  mainNav.classList.remove('main-nav--nojs');
  bgContainer.classList.remove('background-container--nojs');
  bgContainer.classList.add('background-container--header');
  pageHeader.classList.add('page-header--js');


  burgerToggle.addEventListener('click', function () {
    body.classList.toggle('page-body--fixed');
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');

    var bodyHeight = mainNavList.offsetHeight;
    body.style.setProperty('--element-height', bodyHeight + offsetTop + 'px');
  });
})();

