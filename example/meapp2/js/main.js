!function(){"use strict";$("#header").toolbar(),$("#footer").toolbar(),$("#menu").panel().enhanceWithin(),window.checkSizeAndOrientation=function(){var n=window.screen.width,e=window.screen.height,t=e>n,o="",i=document.getElementById("orientationContent");o="<p>SkÃ¤rmens storlek Ã¤r (w x h):<br>"+n+" x "+e,o+="<p>Orienteringen Ã¤r : "+(t?"PortrÃ¤tt":"Landskap"),i.innerHTML=o},window.checkSizeAndOrientation(),window.onresize=function(){window.checkSizeAndOrientation()},$(window).on("click",function(){var n=document.getElementById("swipeContent");n.innerHTML+="click, "}),$(window).on("tap",function(){var n=document.getElementById("swipeContent");n.innerHTML+="tap, "}),$(window).on("taphold",function(){var n=document.getElementById("swipeContent");n.innerHTML+="taphold, "}),$(window).on("swipe",function(){var n=document.getElementById("swipeContent");n.innerHTML+="swipe, "}),$(window).on("swipeleft",function(){var n=document.getElementById("swipeContent");n.innerHTML+="swipeleft, "}),$(window).on("swiperight",function(){var n=document.getElementById("swipeContent");n.innerHTML+="swiperight, "}),$(window).on("touchstart",function(){var n=document.getElementById("touchContent");n.innerHTML+="touchstart, "}),$(window).on("touchmove",function(){var n=document.getElementById("touchContent");n.innerHTML+="touchmove, "}),$(window).on("touchcancel",function(){var n=document.getElementById("touchContent");n.innerHTML+="touchcancel, "}),$(window).on("touchend",function(){var n=document.getElementById("touchContent");n.innerHTML+="touchend, "}),$('[data-swipeleft="back"]').on("swipeleft",function(){return window.history.back(),!1});var n=document.getElementById("draw"),e=n.getContext("2d");$("#draw").on("click",function(n){e.fillStyle="#FF0000",e.fillRect(n.offsetX-5,n.offsetY-5,10,10)}),$("#draw").on("touchmove",function(t){t.preventDefault();var o=n.offsetLeft,i=n.offsetTop,c=t.originalEvent.changedTouches[0].clientX-o,d=t.originalEvent.changedTouches[0].clientY-i;e.fillStyle="#00FF00",e.fillRect(c-5,d-5,10,10)})}();