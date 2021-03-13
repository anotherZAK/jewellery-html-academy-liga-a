/******/ "use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./source/js/burger-menu.js ***!
  \**********************************/


(function () {
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
})();

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/


var faqList = document.querySelector('.faq__list');
var faqButtons = document.querySelectorAll('.faq__button');
var nameLength = 33;

for (var i = 0; i < faqButtons.length; i++) {
  faqButtons[i].classList.add('accordion--closed');
}

faqList.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('accordion')) {
    var orderOfAccordion = evt.target.classList.value.slice(nameLength, nameLength + 1);
    faqButtons[orderOfAccordion].classList.toggle('accordion--closed');
  }
});

}();
