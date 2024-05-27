const newsWrap = document.querySelector('.news__items')
const news = document.querySelectorAll('.news__item')
const tooltip = document.querySelector('.news__items-tooltip')
if(newsWrap){
  newsWrap.addEventListener("mousemove", (e)=>{
    tooltip.style.top = `${e.layerY}px`
    tooltip.style.left = `${e.layerX}px`
  })
  window.addEventListener("scroll", ()=>{
    tooltip.classList.remove('show')
  })
  news.forEach((item)=>{
    item.addEventListener("mouseover", ()=>{
      tooltip.classList.add('show')
    })
    item.addEventListener("mouseleave", ()=>{
      tooltip.classList.remove('show')
    })
  })
}
