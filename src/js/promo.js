$("[data-dots]").on("click", function (e) {
	e.preventDefault();
	$('.promo__dots').removeClass('active');
	$('.promo__box').removeClass('active');
	$(this).addClass('active');
	var dots = $(this).data('dots');
	$('[data-dots-block="' + dots + '"]').toggleClass('active');
});

$('.promo__card').on("click", function(){
	$(this).toggleClass("active");
	if($(this).hasClass("active")) {
		$(this).find("[data-img-card]").removeClass("active");
		$(this).find("[data-img-card='2']").addClass("active");
		$(this).parent().find(".promo__img").removeClass("active");
		$(this).parent().find("[data-img='2']").addClass("active");
	} else {
		$(this).find("[data-img-card]").removeClass("active");
		$(this).find("[data-img-card='1']").addClass("active");
		$(this).parent().find(".promo__img").removeClass("active");
		$(this).parent().find("[data-img='1']").addClass("active");
	}
});
$('.promo__block', ()=>{
  const baOverlay = document.getElementById('ba-overlay')
  const baBtn = document.querySelectorAll('#ba-btn')
  const baAfter = document.getElementById('ba-after')
  const ba = (e) => {
    const xMove = e.type === "touchmove" || e.type === "touchstart" ? e.changedTouches[0].clientX - 20 : e.layerX
    const percent = (xMove / e.target.clientWidth) * 100
    if (e.type === "mousemove" || e.type === "touchmove" || e.type === "touchstart") {
      baAfter.classList.remove('-after-anim')
      baAfter.style.transition = "none"
      baAfter.style.width = `${percent}%`
      setBaBtnItems(true, percent)
    } else {
      setBaBtnItems(false)
      setTimeout(() => {
        baAfter.classList.add('-after-anim')
      }, 520)
      baAfter.style.transition = "0.5s ease"
      baAfter.style.width = "50%"
    }
  }
  const setBaBtnItems = (state, percent) => {
    baBtn.forEach(btn => {
      if(state){
        btn.classList.remove('-btn-anim')
        btn.style.transition = "none"
        btn.style.left = `${percent}%`
      }else{
        setTimeout(() => {
          btn.classList.add('-btn-anim')
        }, 520)
        btn.style.transition = "0.5s ease"
        btn.style.left = "50%"
      }
    });
  }
  baOverlay.addEventListener('mousemove', ba)
  baOverlay.addEventListener('mouseleave', ba)
  baOverlay.addEventListener('touchstart', ba)
  baOverlay.addEventListener('touchmove', ba)
  baOverlay.addEventListener('touchend', ba)

  // ******
  const prev = document.getElementById('ba-prev')
  const next = document.getElementById('ba-next')

  const dataPersonImgs = document.querySelectorAll('[data-ba-person]')
  const dataObjectImgs = document.querySelectorAll('[data-ba-object]')
  let curIdx = 1
  let switchType = 'object'
  let totalIdx = (dataPersonImgs.length - 2) / 2
  next.addEventListener('click', ()=>{
    if(curIdx < totalIdx){
      curIdx++
      setClassDataImgs(switchType)
    }
  })
  prev.addEventListener('click', ()=>{
    if(curIdx >= totalIdx){
      curIdx--
      setClassDataImgs(switchType)
    }
  })

  const setClassDataImgs = (type)=>{
    removeClasses(type)
    if(type === 'person'){
      dataPersonImgs.forEach(img => {
        setClassDataImg(img)
      });
    }else if(type === 'object'){
      dataObjectImgs.forEach(img => {
        setClassDataImg(img)
      });
    }
  }

  const setClassDataImg = (img)=>{
    const dataset = switchType === 'person' ? img.getAttribute('data-ba-person') : img.getAttribute('data-ba-object')
    if(curIdx === +dataset){
      img.classList.add('-active')
    }else{
      img.classList.remove('-active')
    }
  }

  const removeClasses = (type) =>{
    if(type === 'object'){
      dataPersonImgs.forEach(img => {
        img.classList.remove('-active')
      });
    }else if(type === 'person'){
      dataObjectImgs.forEach(img => {
        img.classList.remove('-active')
      });
    }
  }

  // ******
  const switchBtns = document.querySelectorAll('.promo-btn')
  switchBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
      switchType = e.target.getAttribute('data-ba-model')
      if(switchType === 'object'){
        curIdx = 1
        totalIdx = (dataObjectImgs.length - 2) / 2
        console.log(totalIdx);
        setClassDataImgs(switchType)
      }else{
        curIdx = 1
        totalIdx = (dataPersonImgs.length - 2) / 2
        setClassDataImgs(switchType)
      }
      setClassSwitchBtns()
    })

  })

 const setClassSwitchBtns = ()=>{
  switchBtns.forEach((btn)=>{
    let type = btn.getAttribute('data-ba-model')
    if(switchType === type){
      btn.classList.add('active')
    }else{
      btn.classList.remove('active')
    }
  })
 }
})

const sectionMainInfo = document.getElementById('main-info');
const scrollToHandler = document.querySelector('.promo__mouse')
scrollToHandler.addEventListener('click', (e)=>{
window.scroll({
  top: sectionMainInfo.offsetTop,
  behavior: "smooth"
})
})

