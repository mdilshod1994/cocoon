$(".header__burger").on("click", function (e) {
	$(this).toggleClass('active');
	$('.header').toggleClass('active');
	$('body').toggleClass('lock');
	$('.header__container').toggleClass('active');
});

$(".header__menu a").on("click", function (e) {
	$(".header__burger").removeClass('active');
	$('.header').removeClass('active');
	$('body').removeClass('lock');
	$('.header__container').removeClass('active');
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	return false;
});