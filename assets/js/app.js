//boton de volver a inicio
$(document).ready(function(){ 
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  }); 
});

//boton de volver a inicio movile
$(document).ready(function(){ 
  $('.ir-arriba2').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba2').slideDown(300);
    } else {
      $('.ir-arriba2').slideUp(300);
    }
  }); 

});