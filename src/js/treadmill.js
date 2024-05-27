const treadmill = document.getElementById('c-treadmill')
const treadmillOverlay = document.getElementById("treadmill-overlay")
const treadmillBox = document.querySelector('.treadmill__box')
if(treadmill){
  treadmillOverlay.addEventListener('mousemove', (e)=>{
    treadmillBox.classList.add('show')
    treadmillBox.style.top = `${e.layerY}px`
    treadmillBox.style.left = `${e.layerX}px`
    treadmill.classList.add('active')
  })
  treadmillOverlay.addEventListener('mouseover', ()=>{
    treadmillBox.classList.add('show')
    treadmill.classList.add('active')
  })
  treadmillOverlay.addEventListener('mouseleave', ()=>{
    treadmillBox.classList.remove('show')
    treadmill.classList.remove('active')
  })
  window.addEventListener("scroll", ()=>{
    treadmillBox.classList.remove('show')
    treadmill.classList.remove('active')
  })

}
