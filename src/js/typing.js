const futureSection = document.getElementById('future')
if(futureSection){
  const textContainer1 = document.getElementById('text-wrap')
  const textContainer2 = document.getElementById('text-wrap-scnd')
  const text = 'Объект стоит на полу, на фоне комната, окно, из окна падает свет, средняя глубина резкости'
  const text2 = 'дверь, лампа, плитка'

  let index = 0
  let index2 = 0
  let intervalId
  let interval2Id
  const frstType = (state)=>{
    if(state){
    textContainer1.innerHTML = ""
    textContainer2.innerHTML  = ""
    intervalId = setInterval(function(){
      if(index < text.length + 1){
        textContainer1.innerHTML = `${text.substring(0,index++)} <span></span>`;
      }else{
        clearInterval(intervalId);
        scndType(state)
      }
    }, 100);
    }else{
      scndType(state)
      textContainer1.innerHTML = ""
      textContainer2.innerHTML  = ""
      clearInterval(intervalId);
      clearInterval(interval2Id);
    }
  }
  const scndType = (state)=>{
    if(state){
      interval2Id = setInterval(function(){
        if(index2 < text2.length + 1){
          textContainer2.innerHTML = `${text2.substring(0,index2++)} <span></span>`;
        }else{
          clearInterval(interval2Id);
        }
      }, 100);
    }else{
      clearInterval(interval2Id);
    }

  }
  const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      index = 0
      index2=0
      frstType(true)
    }else{
      frstType(false)

    }
  })
  observer.observe(futureSection)
}

