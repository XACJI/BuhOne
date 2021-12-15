/* Слайдер */
let slider = document.querySelector('.slider');
const swiperSlider = new Swiper(slider.querySelector('.swiper'), {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
    },
    pagination: {
        el: slider.querySelector('.swiper-pagination'),
        type: 'bullets',
        bulletElement: 'button',
        clickable: true,
    },
});

/* открываем/закрываем popup спасибо */
let formBtns = document.querySelectorAll('.form__btn');
let popupCloses = document.querySelectorAll('.popup__close');

formBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.popups').classList.add('popups--open');
        document.querySelector('.popup--success').style.display = 'block';
        document.body.overflow = 'hidden';
    });
});
popupCloses.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        document.querySelector('.popups').classList.remove('popups--open');
        document.querySelector('.popup--success').style.display = '';
        document.body.overflow = '';
    });
});