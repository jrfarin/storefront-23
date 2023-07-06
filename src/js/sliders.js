// SLIDERS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const showStrFields = new Swiper('.swpCategory', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: true,          
});

export const swiperColorPills =  new Swiper('.swiperColorPills', {
    modules: [Navigation],
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
