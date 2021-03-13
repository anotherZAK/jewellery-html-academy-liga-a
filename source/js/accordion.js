'use strict';

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
