if ($('.about').length > 0) {
    var slider = $('.about-model__slick').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: false,
		asNavFor: '.about-model__small'
    });
    $('.about-model__small').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.about-model__slick',
		arrows: false,
		dots: false,
		infinite: true,
		fade: true,
		infinite: false,
    });
    $('.arrow_prew').on("click", function(event) {
		$(this).parents('.about-model').find('.about-model__small').slick('slickPrev');
    });
    $('.arrow_next').on("click", function(event) {
		$(this).parents('.about-model').find('.about-model__small').slick('slickNext');
    });
}


$('.about-model__small').on('afterChange', function(event, slick, currentSlide){
	// Получите значение из data-model-slide активного слайда
	var activeSlideValue = currentSlide;
	activeSlideValue = activeSlideValue + 1;
	console.log(activeSlideValue)
	
	// Найдите элемент с соответствующим значением data-designer-block и добавьте класс active
	$('.about-designer__block, .about-reliability__box').removeClass('active'); // Уберите класс active с предыдущего активного элемента, если есть
	$('[data-designer-block="' + activeSlideValue + '"]').addClass('active');
	$('[data-reliability-box="' + activeSlideValue + '"]').addClass('active');
  });

$("[data-tab]").on("click", function (e) {
	e.preventDefault();
	$('.about__tab').removeClass('active');
	$('.about__block').removeClass('active');
	$(this).addClass('active');
	var tab = $(this).data('tab');
	$('[data-tab-block="' + tab + '"]').toggleClass('active');
});

$("[data-designer]").on("click", function (e) {
	e.preventDefault();
	$(this).parent().parent().parent().find('[data-designer-img]').removeClass('active');
	$(this).parent().find('.about-designer__tab').removeClass('active');
	$(this).addClass('active');
	var designer = $(this).data('designer');
	$(this).parent().parent().parent().find('[data-designer-img="' + designer + '"]').addClass('active');
	$(".about").find('.about-reliability__box.active').find('[data-reliability-img]').removeClass('active');
	$(".about").find('.about-reliability__box.active').find('[data-reliability-img="' + designer + '"]').addClass('active');
	// Находим активный элемент с классом 'active' внутри элемента с классом 'about-reliability__box'
	var activeReliabilityImg = $(".about").find('.about-reliability__box.active').find('.about-reliability__bg-block.active img');
	var imagePath = activeReliabilityImg.attr('src');
	$('.about-reliability__box.active .ba__resize-img').css('background-image', 'url(../' + imagePath + ')');
});

$(".about-reliability__btn").on("click", function (e) {
	e.preventDefault();
	$('.about-reliability__info').addClass('hidden');
});