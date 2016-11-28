$(document).ready(function() {
  $('a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    if ($(el)[0]) {
      $('body').animate({
      scrollTop: $(el)[0].offsetTop}, 1500);
    }
    return false;
  });
});