$(document).ready(function () {
    function initializeSlider() {
      if ($(window).width() < 761) {
        $(".rates__row").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			centerMode: true,
			arrows: false,
			dots: false,
			infinite: true,
        });
      } else {
        $(".rates__row").slick("unslick");
      }
    }

    initializeSlider();

    $(window).resize(function () {
      initializeSlider();
    });
  });