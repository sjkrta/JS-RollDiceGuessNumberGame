'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
for (let i = 0; i < show.length; i++) {
    show[i].addEventListener('click', openModal);
    close.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

}
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})