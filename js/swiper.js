const swiper = new Swiper('.swiper', {
     spaceBetween: 1,
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
    ,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
      ,
      scrollbar: {
        el: '.swiper-scrollbar',
      }
});