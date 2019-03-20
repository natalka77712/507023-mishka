var showModalBtn = document.querySelectorAll('.order-js');
var overlay = document.querySelector('.popup');
var modal = document.querySelector('.popup__body');

function toggleModal(event) {
  event.preventDefault();
  if (modal.classList.contains('popup__body--add-cart')) {
    modal.classList.remove('popup__body--add-cart');
  } else {
    modal.classList.add('popup__body--add-cart');
  }

  if (overlay.classList.contains('popup--show')) {
    overlay.classList.remove('popup--show');
  } else {
    overlay.classList.add('popup--show');
  }
}

for (var i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", toggleModal);
}

overlay.addEventListener("click", toggleModal);
