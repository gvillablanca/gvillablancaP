$(document).ready(function(){ 
$('elemento-a-animar').smoove(options);

$('section').smoove({offset:'40%'});


//boton de volver a inicio
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

function procesar(xform){
  window.open(xform, 'nventana', 'width=450,height=300,status=yes,resizable=yes,scrollbars=yes');
}