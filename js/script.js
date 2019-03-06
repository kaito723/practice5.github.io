(function(){
  var $win=$(window);

  $win.on('load scroll',function(){
    var $value=$(this).scrollTop();
    if($value>450){
      $('.feature1').fadeIn(2000);
    }
    if($value>920){
      $('.feature2').fadeIn(2000);
    }
    if($value>1300){
      $('.feature3').fadeIn(2000);
    }
    if($value>1680){
      $('.feature4').fadeIn(2000);
    }
  });

  $('.finance-btn').click(function(){
    if($('.finance-table').hasClass('close')){
      $('.finance-table').removeClass('close');
      $('.finance-table').slideDown();
    }else{
      $('.finance-table').addClass('close');
      $('.finance-table').slideUp();
    }
  });

  $('.card-btn').click(function(){
    if($('.card-table').hasClass('close')){
      $('.card-table').removeClass('close');
      $('.card-table').slideDown();
    }else{
      $('.card-table').addClass('close');
      $('.card-table').slideUp();
    }
  });

  $('.safe-btn').click(function(){
    if($('.safe-table').hasClass('close')){
      $('.safe-table').removeClass('close');
      $('.safe-table').slideDown();
    }else{
      $('.safe-table').addClass('close');
      $('.safe-table').slideUp();
    }
  });

  $('.ja-btn').click(function(){
    if($('.ja-table').hasClass('close')){
      $('.ja-table').removeClass('close');
      $('.ja-table').slideDown();
    }else{
      $('.ja-table').addClass('close');
      $('.ja-table').slideUp();
    }
  });
});
