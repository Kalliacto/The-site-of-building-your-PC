const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');

buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
    })
});

const buttonClose = document.querySelectorAll('.modal__close');

buttonClose.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'none';
    })
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.style.display = 'none';
    }
})