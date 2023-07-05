// SLIDERS
export function showStrFields() {
    new Swiper('.swpCategory', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        freeMode: true,          
    });
}
export function swiperColorPills() {
    new Swiper('.swiperColorPills', {
        slidesPerView: 5,
        spaceBetween: 5,
        navigation: {
            nextEl: ".swiper-button-next"
        },
        breakpoints:{
            768 :{
                slidesPerView: 6,
            },
            992 :{
                slidesPerView: 7,
                spaceBetween: 8,
            },
            1200 :{
                slidesPerView: 8,
                spaceBetween: 5,
            },
        }         
    });
}