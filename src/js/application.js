$(".application__img").fancybox({
	loop : false,
	arrows: false,
	infobar: false,
	buttons : [
		'close'
	],
	touch: false,
	clickContent: 'close',
	baseClass: "dark__bg",
	clickContent: 'close'
});

$('body').on('click', ".dark__bg", function() {
	$.fancybox.close();
});