"use strict";function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}if($(".about").length>0){var slider=$(".about-model__slick").slick({dots:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,infinite:!1,asNavFor:".about-model__small"});$(".about-model__small").slick(_defineProperty({slidesToShow:1,slidesToScroll:1,asNavFor:".about-model__slick",arrows:!1,dots:!1,infinite:!0,fade:!0},"infinite",!1)),$(".arrow_prew").on("click",(function(e){$(this).parents(".about-model").find(".about-model__small").slick("slickPrev")})),$(".arrow_next").on("click",(function(e){$(this).parents(".about-model").find(".about-model__small").slick("slickNext")}))}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}$(".about-model__small").on("afterChange",(function(e,t,a){var n=a;n+=1,console.log(n),$(".about-designer__block, .about-reliability__box").removeClass("active"),$('[data-designer-block="'+n+'"]').addClass("active"),$('[data-reliability-box="'+n+'"]').addClass("active")})),$("[data-tab]").on("click",(function(e){e.preventDefault(),$(".about__tab").removeClass("active"),$(".about__block").removeClass("active"),$(this).addClass("active");var t=$(this).data("tab");$('[data-tab-block="'+t+'"]').toggleClass("active")})),$("[data-designer]").on("click",(function(e){e.preventDefault(),$(this).parent().parent().parent().find("[data-designer-img]").removeClass("active"),$(this).parent().find(".about-designer__tab").removeClass("active"),$(this).addClass("active");var t=$(this).data("designer");$(this).parent().parent().parent().find('[data-designer-img="'+t+'"]').addClass("active"),$(".about").find(".about-reliability__box.active").find("[data-reliability-img]").removeClass("active"),$(".about").find(".about-reliability__box.active").find('[data-reliability-img="'+t+'"]').addClass("active");var a=$(".about").find(".about-reliability__box.active").find(".about-reliability__bg-block.active img").attr("src");$(".about-reliability__box.active .ba__resize-img").css("background-image","url(../"+a+")")})),$(".about-reliability__btn").on("click",(function(e){e.preventDefault(),$(".about-reliability__info").addClass("hidden")})),$(".application__img").fancybox(_defineProperty({loop:!1,arrows:!1,infobar:!1,buttons:["close"],touch:!1,clickContent:"close",baseClass:"dark__bg"},"clickContent","close")),$("body").on("click",".dark__bg",(function(){$.fancybox.close()})),$((function(){var e="transitionend webkitTransitionEnd oTransitionEnd";if(!$(".ba").length)return!1;var t,a,n,i,o,s=0;function r(){if(t.hasClass("is-mouseleave"))return!1;t.addClass("is-moving").removeClass("is-mouseleave js-animation-play").find(".ba__resize").css({width:s+"%"}),a.css({left:s+"%"}),n.css({transform:"rotate("+o+"deg)"})}$(".ba").on("mousemove touchmove touchstart",(function(e){e.preventDefault();var l="touchstart"===e.type||"touchmove"===e.type,c=(e=l?e.originalEvent:e,l?e.targetTouches[0].pageX:e.pageX),d=l?e.targetTouches[0].pageY:e.pageY;t=$(this),a=t.find(".ba__handle"),n=t.find(".ba__arrow");var u=t.offset(),m=t.outerWidth(),v=t.outerHeight(),f=c-u.left,b=d-u.top;s=100/(m/f),100/(v/b);var p=u.left+m/2,h=u.top+v/2,_=c,g=d,y=Math.atan2(_-p,g-h);o=y*(180/Math.PI)*-1+90,i=window.requestAnimationFrame(r)})).on("mouseleave",(function(){a=$(this).find(".ba__handle"),(n=$(this).find(".ba__arrow")).css({transform:"rotate(180deg)"}),a.css({left:"50%"}),$(this).addClass("is-mouseleave").find(".ba__resize").css({width:"50%"}).on(e,(function(t){$(this).off(e).removeAttr("style").closest(".ba").addClass("js-animation-play")})),window.cancelAnimationFrame(i)})).on("mouseenter",(function(){$(this).removeClass("is-mouseleave js-animation-play").find(".ba__resize").off(e)})),window.innerWidth<1024&&$(".ba__image").each((function(){$(this).closest(".ba").removeAttr("class").addClass("ba js-animation-play")}))})),$(window).on("load resize",(function(){if(!$(".ba").length)return!1;$(".ba__image").each((function(){var e=$(this).closest(".ba").outerWidth();$(this).css("width",e+"px")}))})),$(".footer__menu a").on("click",(function(e){var t=$(this).attr("href"),a=$(t).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:a},600),!1}));var copyrightsYear=document.querySelectorAll("#cr-year");if(copyrightsYear){var currYear=(new Date).getFullYear();copyrightsYear.forEach((function(e){e.innerHTML=currYear}))}$(".header__burger").on("click",(function(e){$(this).toggleClass("active"),$(".header").toggleClass("active"),$("body").toggleClass("lock"),$(".header__container").toggleClass("active")})),$(".header__menu a").on("click",(function(e){$(".header__burger").removeClass("active"),$(".header").removeClass("active"),$("body").removeClass("lock"),$(".header__container").removeClass("active");var t=$(this).attr("href"),a=$(t).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:a},600),!1}));var _window=window,gsap=_window.gsap,titleElement=document.querySelector(".main-info__title"),words=titleElement.textContent.split(" "),htmlWithSpans=words.map((function(e){return"<span>".concat(e,"</span>")})).join(" ");titleElement.innerHTML=htmlWithSpans;var spanElements=Array.from(document.querySelectorAll(".main-info__title span")),animations=spanElements.map((function(e,t){return gsap.fromTo(e,{opacity:.05},{opacity:1,duration:.5,ease:"power1.inOut",paused:!0})})),lastScrollY=0;window.addEventListener("scroll",(function(){for(var e=window.scrollY,t=document.querySelector(".main-info").getBoundingClientRect().top,a=document.querySelector(".main-info").clientHeight,n=Math.max(0,Math.min(1,(e-t)/a)),i=Math.floor(n*spanElements.length),o=0;o<animations.length;o++)o===i?animations[o].progress(n):animations[o].progress(o<i?1:0);lastScrollY=e}));var newsWrap=document.querySelector(".news__items"),news=document.querySelectorAll(".news__item"),tooltip=document.querySelector(".news__items-tooltip");newsWrap&&(newsWrap.addEventListener("mousemove",(function(e){tooltip.style.top="".concat(e.layerY,"px"),tooltip.style.left="".concat(e.layerX,"px")})),window.addEventListener("scroll",(function(){tooltip.classList.remove("show")})),news.forEach((function(e){e.addEventListener("mouseover",(function(){tooltip.classList.add("show")})),e.addEventListener("mouseleave",(function(){tooltip.classList.remove("show")}))}))),$("[data-dots]").on("click",(function(e){e.preventDefault(),$(".promo__dots").removeClass("active"),$(".promo__box").removeClass("active"),$(this).addClass("active");var t=$(this).data("dots");$('[data-dots-block="'+t+'"]').toggleClass("active")})),$(".promo__card").on("click",(function(){$(this).toggleClass("active"),$(this).hasClass("active")?($(this).find("[data-img-card]").removeClass("active"),$(this).find("[data-img-card='2']").addClass("active"),$(this).parent().find(".promo__img").removeClass("active"),$(this).parent().find("[data-img='2']").addClass("active")):($(this).find("[data-img-card]").removeClass("active"),$(this).find("[data-img-card='1']").addClass("active"),$(this).parent().find(".promo__img").removeClass("active"),$(this).parent().find("[data-img='1']").addClass("active"))})),$(".promo__block",(function(){var e=document.getElementById("ba-overlay"),t=document.querySelectorAll("#ba-btn"),a=document.getElementById("ba-after"),n=function(e){var t=("touchmove"===e.type||"touchstart"===e.type?e.changedTouches[0].clientX-20:e.layerX)/e.target.clientWidth*100;"mousemove"===e.type||"touchmove"===e.type||"touchstart"===e.type?(a.classList.remove("-after-anim"),a.style.transition="none",a.style.width="".concat(t,"%"),i(!0,t)):(i(!1),setTimeout((function(){a.classList.add("-after-anim")}),520),a.style.transition="0.5s ease",a.style.width="50%")},i=function(e,a){t.forEach((function(t){e?(t.classList.remove("-btn-anim"),t.style.transition="none",t.style.left="".concat(a,"%")):(setTimeout((function(){t.classList.add("-btn-anim")}),520),t.style.transition="0.5s ease",t.style.left="50%")}))};e.addEventListener("mousemove",n),e.addEventListener("mouseleave",n),e.addEventListener("touchstart",n),e.addEventListener("touchmove",n),e.addEventListener("touchend",n);var o=document.getElementById("ba-prev"),s=document.getElementById("ba-next"),r=document.querySelectorAll("[data-ba-person]"),l=document.querySelectorAll("[data-ba-object]"),c=1,d="object",u=(r.length-2)/2;s.addEventListener("click",(function(){c<u&&(c++,m(d))})),o.addEventListener("click",(function(){c>=u&&(c--,m(d))}));var m=function(e){f(e),"person"===e?r.forEach((function(e){v(e)})):"object"===e&&l.forEach((function(e){v(e)}))},v=function(e){var t="person"===d?e.getAttribute("data-ba-person"):e.getAttribute("data-ba-object");c===+t?e.classList.add("-active"):e.classList.remove("-active")},f=function(e){"object"===e?r.forEach((function(e){e.classList.remove("-active")})):"person"===e&&l.forEach((function(e){e.classList.remove("-active")}))},b=document.querySelectorAll(".promo-btn");b.forEach((function(e){e.addEventListener("click",(function(e){"object"===(d=e.target.getAttribute("data-ba-model"))?(c=1,u=(l.length-2)/2,console.log(u),m(d)):(c=1,u=(r.length-2)/2,m(d)),p()}))}));var p=function(){b.forEach((function(e){var t=e.getAttribute("data-ba-model");d===t?e.classList.add("active"):e.classList.remove("active")}))}}));var sectionMainInfo=document.getElementById("main-info"),scrollToHandler=document.querySelector(".promo__mouse");scrollToHandler.addEventListener("click",(function(e){window.scroll({top:sectionMainInfo.offsetTop,behavior:"smooth"})})),$(document).ready((function(){function e(){$(window).width()<761?$(".rates__row").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!0,centerMode:!0,arrows:!1,dots:!1,infinite:!0}):$(".rates__row").slick("unslick")}e(),$(window).resize((function(){e()}))})),$(".step--js").on("click",(function(){var e=$(this).data("next-step");$(".steps__wrap").removeClass("active"),$('[data-step="'+e+'"]').addClass("active")})),$(".steps-model__card").on("click",(function(e){e.preventDefault(),$(".steps-model__card").removeClass("active"),$(this).addClass("active")})),$(".steps-bg__dots").on("click",(function(e){e.preventDefault(),$(".steps-bg__dots").removeClass("active"),$(this).addClass("active")}));var treadmill=document.getElementById("c-treadmill"),treadmillOverlay=document.getElementById("treadmill-overlay"),treadmillBox=document.querySelector(".treadmill__box");treadmill&&(treadmillOverlay.addEventListener("mousemove",(function(e){treadmillBox.classList.add("show"),treadmillBox.style.top="".concat(e.layerY,"px"),treadmillBox.style.left="".concat(e.layerX,"px"),treadmill.classList.add("active")})),treadmillOverlay.addEventListener("mouseover",(function(){treadmillBox.classList.add("show"),treadmill.classList.add("active")})),treadmillOverlay.addEventListener("mouseleave",(function(){treadmillBox.classList.remove("show"),treadmill.classList.remove("active")})),window.addEventListener("scroll",(function(){treadmillBox.classList.remove("show"),treadmill.classList.remove("active")})));var futureSection=document.getElementById("future");if(futureSection){var intervalId,interval2Id,textContainer1=document.getElementById("text-wrap"),textContainer2=document.getElementById("text-wrap-scnd"),text="Объект стоит на полу, на фоне комната, окно, из окна падает свет, средняя глубина резкости",text2="дверь, лампа, плитка",index=0,index2=0,frstType=function(e){e?(textContainer1.innerHTML="",textContainer2.innerHTML="",intervalId=setInterval((function(){index<text.length+1?textContainer1.innerHTML="".concat(text.substring(0,index++)," <span></span>"):(clearInterval(intervalId),scndType(e))}),100)):(scndType(e),textContainer1.innerHTML="",textContainer2.innerHTML="",clearInterval(intervalId),clearInterval(interval2Id))},scndType=function(e){e?interval2Id=setInterval((function(){index2<text2.length+1?textContainer2.innerHTML="".concat(text2.substring(0,index2++)," <span></span>"):clearInterval(interval2Id)}),100):clearInterval(interval2Id)},observer=new IntersectionObserver((function(e){e[0].isIntersecting?(index=0,index2=0,frstType(!0)):frstType(!1)}));observer.observe(futureSection)}