const YTModal= document.getElementById('yt-modal')
const body= document.querySelector('body')
const YToverlay = document.getElementById("yt-overlay")
const YTcloseBtn = document.getElementById('yt-close')
const YTopenBtn = document.getElementById('video-btn')
var iframe = YTModal.getElementsByTagName('iframe')[0].contentWindow;
if(YTModal){
  YTopenBtn.addEventListener('click', ()=>{
    body.classList.add('lock')
    YTModal.classList.add('active')
    console.log(iframe);
    iframe.postMessage(
      '{"event":"command","func":"' + "playVideo" + '","args":""}',
      "*"
    );
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
    iframe.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  }
}
