$(".footer__menu a").on("click", function (e) {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	return false;
});
const copyrightsYear = document.querySelectorAll('#cr-year')
if(copyrightsYear){
  const currYear = new Date().getFullYear()
  copyrightsYear.forEach((cr)=>{
    cr.innerHTML = currYear
  })
}
