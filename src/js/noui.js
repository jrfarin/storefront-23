import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export const priceSlider = () => {
    const slidersPrice = document.querySelectorAll('.noui-slider-round');

    slidersPrice.forEach(function (slider) {
        noUiSlider.create(slider, {
            start: [10, 90],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            tooltips: true,
        });
    })
}
