'use strict';

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
