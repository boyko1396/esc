$(document).ready(function() {
	rangeSliderInit();
    select2Init();

    // range slider init
    function rangeSliderInit() {
        if ($('.js-range-age-init').length > 0) {
            var $slider = $('.js-range-age-init').get(0);
            var minVal = 18;
            var maxVal = 60;
            var gap = 1;

            noUiSlider.create($slider, {
                start: [minVal - gap, maxVal + gap],
                connect: true,
                tooltips: {
                    to: function(value) {
                        return Math.floor(value);
                    }
                },
                step: gap,
                range: {
                    'min': minVal,
                    'max': maxVal
                }
            });
        }

        if ($('.js-range-height-init').length > 0) {
            var $slider = $('.js-range-height-init').get(0);
            var minVal = 140;
            var maxVal = 200;
            var gap = 1;

            noUiSlider.create($slider, {
                start: [minVal - gap, maxVal + gap],
                connect: true,
                tooltips: {
                    to: function(value) {
                        return Math.floor(value);
                    }
                },
                step: gap,
                range: {
                    'min': minVal,
                    'max': maxVal
                }
            });
        }

        if ($('.js-range-weight-init').length > 0) {
            var $slider = $('.js-range-weight-init').get(0);
            var minVal = 40;
            var maxVal = 160;
            var gap = 1;

            noUiSlider.create($slider, {
                start: [minVal - gap, maxVal + gap],
                connect: true,
                tooltips: {
                    to: function(value) {
                        return Math.floor(value);
                    }
                },
                step: gap,
                range: {
                    'min': minVal,
                    'max': maxVal
                }
            });
        }

        if ($('.js-range-breast-init').length > 0) {
            var $slider = $('.js-range-breast-init').get(0);
            var minVal = 1;
            var maxVal = 8;
            var gap = 1;

            noUiSlider.create($slider, {
                start: [minVal - gap, maxVal + gap],
                connect: true,
                tooltips: {
                    to: function(value) {
                        return Math.floor(value);
                    }
                },
                step: gap,
                range: {
                    'min': minVal,
                    'max': maxVal
                }
            });
        }
    }

    // select2 init
    function select2Init() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: '100%'
            });
        }
    }
});