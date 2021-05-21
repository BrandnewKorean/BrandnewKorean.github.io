$(function(){
  if($('body').hasClass('light')) $('#change-mode').text('light');
  else $('#change-mode').text('dark');

  $('#change-mode').click(function(){
    if($('body').hasClass('light')){
      $('body').removeClass('light');
      $('body').addClass('dark');
    }else{
      $('body').removeClass('dark');
      $('body').addClass('light');
    }

    if($('body').hasClass('light')) $('#change-mode').text('light');
    else $('#change-mode').text('dark');
  });

  $('#change-mode').hover(function(){
    if($('body').hasClass('light')) $('#change-mode').text('dark');
    else $('#change-mode').text('light');
  }, function(){
    if($('body').hasClass('light')) $('#change-mode').text('light');
    else $('#change-mode').text('dark');
  });
});
