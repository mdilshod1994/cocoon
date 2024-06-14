const YTModal= document.getElementById('yt-modal')
const body= document.querySelector('body')
const YToverlay = document.getElementById("yt-overlay")
const YTcloseBtn = document.getElementById('yt-close')
const YTopenBtn = document.getElementById('video-btn')
const video = document.getElementById('yt-modal__video')
if(YTModal){
  YTopenBtn.addEventListener('click', ()=>{
    body.classList.add('lock')
    YTModal.classList.add('active')
    video.play()
    video.muted= false
  })
  YToverlay.addEventListener('click', ()=>{
    closeModal()
  })
  YTcloseBtn.addEventListener('click', ()=>{
    closeModal()
  })
  function closeModal(){
    YTModal.classList.remove('active')
    body.classList.remove('lock')
    video.pause();
    video.muted= true

    video.currentTime = 0;
  }
}
