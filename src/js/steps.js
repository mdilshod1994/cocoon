$('.step--js').on("click", function () {
	var step = $(this).data("next-step");
	$(".steps__wrap").removeClass("active");
	$('[data-step="' + step + '"]').addClass("active");
});

$(".steps-model__card").on("click", function(e){
	e.preventDefault();
	$(".steps-model__card").removeClass("active");
	$(this).addClass("active");
});

$(".steps-bg__dots").on("click", function(e){
	e.preventDefault();
	$(".steps-bg__dots").removeClass("active");
	$(this).addClass("active");
});