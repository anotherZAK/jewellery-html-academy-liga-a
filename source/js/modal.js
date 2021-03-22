'use strict';

(function () {
  var body = document.querySelector('.page-body');
  var modalLogin = document.querySelector('.modal--login');
  var modalCart = document.querySelector('.modal--cart');
  var mainNav = document.querySelector('.main-nav');

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
      body.classList.remove('page-body--fixed');
      mainNav.classList.remove('main-nav--opened');
      mainNav.classList.add('main-nav--closed');

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
})();
