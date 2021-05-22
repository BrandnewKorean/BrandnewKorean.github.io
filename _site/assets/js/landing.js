$(function(){
  $('#text1').animate({
    opacity: 1
  }, 500);

  var imageWrap = document.querySelectorAll('.image-wrap');
  var textWrap = document.querySelectorAll('.text-wrap');

  $(window).scroll(function(){
    for(var i=0;i<imageWrap.length;i++){
      if(window.scrollY + window.innerHeight >= $(imageWrap[i]).offset().top){
        $(imageWrap[i]).addClass('active');
        $(textWrap[i]).addClass('active');
      }
    }
  });
});
