$(document).ready(function() {
  // Side nav
  $(".burger-time").sideNav();

  //Magical disappearing logo
  $(window).scroll(function(){
      if($(this).scrollTop() > 25) {
          $('#logo')
            .attr('src','img/logo/blank.png');
      }
      if($(this).scrollTop() < 1) {
          $('#logo')
            .attr('src','img/logo/logo-white.svg');
      }
    });

  //   $("button").click(function(e){
  //   if ($(this).attr("class")==".button")
  //   {$(this).attr("class","open")
  //   $(this).siblings("a").attr("class","openimg")
  //   $(this).siblings(".myContentDiv").show(); }
  //   else
  //   {$(this).attr("class","closed")
  //   $(this).siblings("a").attr("class","closedimg")
  //   $(this).siblings(".myContentDiv").hide();
  //   }
  // });

  $("button").click(function(e){
  $('.icons').each(function() {
     var $img = $(this);
     var imgsrc = $img.attr('src');

     var imgsrc1 = imgsrc.substr(imgsrc.lastIndexOf("img/"));
     imgsrc1     = imgsrc.substr(4);
     var imgalt  = imgsrc1.substr(4,imgsrc.length - 4);

     var imgsrc2 ='img/icons/goodboy.png';
     $img.attr('src',imgsrc2);
     $img.attr('alt',imgalt);
   });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

});
