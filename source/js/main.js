/******/ "use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./source/js/burger-menu.js ***!
  \**********************************/


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

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/


var faqList = document.querySelector('.faq__list');
var catalogFilterList = document.querySelector('.catalog-filter__list');

if (faqList) {
  var faqButtons = faqList.querySelectorAll('.faq__button');
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
}

if (catalogFilterList) {
  var catalogFilterButtons = catalogFilterList.querySelectorAll('.catalog-filter__button');
  var nameLengthFilter = 44;

  for (var j = 0; j < catalogFilterButtons.length; j++) {
    catalogFilterButtons[j].classList.add('accordion--filter-closed');
  }

  catalogFilterList.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('accordion')) {
      evt.preventDefault();
    }

    if (evt.target.classList.contains('accordion')) {
      var orderOfAccordion = evt.target.classList.value.slice(nameLengthFilter, nameLengthFilter + 1);
      catalogFilterButtons[orderOfAccordion].classList.toggle('accordion--filter-closed');
    }
  });
}

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!****************************!*\
  !*** ./source/js/modal.js ***!
  \****************************/



var body = document.querySelector('.page-body');
var modalLogin = document.querySelector('.modal--login');
var modalCart = document.querySelector('.modal--cart');

if (modalLogin) {
  var loginButton = document.querySelector('.main-nav__login');
  var loginCloseButton = modalLogin.querySelector('.login-form__close');
  var loginForm = modalLogin.querySelector('.login-form');
  var userEmail = modalLogin.querySelector('input[type=email]');
  var userPassword = modalLogin.querySelector('input[type=password]');

  var isStorageSupport = true;
  var storageName = '';
  var storagePassword = '';

  var overlayClickHandle = function (evt) {
    if (modalLogin.classList.contains('modal--show') && !evt.target.classList.contains('main-nav__login')) {
      modalLogin.classList.remove('modal--show');
      modalLogin.classList.remove('modal--error');
      body.classList.remove('page-body--block-modal');
    }

    modalLogin.addEventListener('click', function (evtModal) {
      evtModal.stopPropagation();
    });
  };

  try {
    storageName = localStorage.getItem('userEmail');
    storagePassword = localStorage.getItem('userPassword');
  } catch (err) {
    isStorageSupport = false;
  }

  loginButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalLogin.classList.add('modal--show');
    body.classList.add('page-body--block-modal');

    if (storageName) {
      userEmail.value = storageName;
      userPassword.focus();
    } else if (storagePassword) {
      userPassword.value = storagePassword;
    } else {
      userEmail.focus();
    }

    document.addEventListener('click', overlayClickHandle);
  });

  loginCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalLogin.classList.remove('modal--show');
    modalLogin.classList.remove('modal--error');
    body.classList.remove('page-body--block-modal');
    document.removeEventListener('click', overlayClickHandle);
  });

  loginForm.addEventListener('submit', function (evt) {
    if (!userEmail.value || !userPassword.value) {
      evt.preventDefault();
      modalLogin.classList.remove('modal--error');
      modalLogin.classList.add('modal--error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userEmail', userEmail.value);
        localStorage.setItem('userPassword', userPassword.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (modalLogin.classList.contains('modal--show')) {
        evt.preventDefault();
        modalLogin.classList.remove('modal--show');
        modalLogin.classList.remove('modal--error');
        body.classList.remove('page-body--block-modal');
        document.removeEventListener('click', overlayClickHandle);
      }
    }
  });
}

if (modalCart) {
  var addButton = document.querySelector('.product-detailed__button');
  var closeCartButton = document.querySelector('.cart-info__close');

  var overlayClickHandle2 = function (evt) {
    if (modalCart.classList.contains('modal--show') && !evt.target.classList.contains('product-detailed__button')) {
      modalCart.classList.remove('modal--show');
      modalCart.classList.remove('modal--error');
      body.classList.remove('page-body--block-modal');
    }

    modalCart.addEventListener('click', function (evtModal) {
      evtModal.stopPropagation();
    });
  };

  addButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('modal--show');
    body.classList.add('page-body--block-modal');

    document.addEventListener('click', overlayClickHandle2);
  });

  closeCartButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.remove('modal--show');
    modalCart.classList.remove('modal--error');
    body.classList.remove('page-body--block-modal');
    document.removeEventListener('click', overlayClickHandle2);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (modalCart.classList.contains('modal--show')) {
        evt.preventDefault();
        modalCart.classList.remove('modal--show');
        modalCart.classList.remove('modal--error');
        body.classList.remove('page-body--block-modal');
        document.removeEventListener('click', overlayClickHandle2);
      }
    }
  });
}

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./source/js/filter-menu.js ***!
  \**********************************/


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

}();
