//on safari and edge doest not recognize the scroll.
/*
$(window).scroll(function(){
  var $window = $(window),
      $scroll = $(this).scrollTop(),
       $climb = $('#climb'),
      $screen = $('#screen'),
       $phone = $('#phone'),
     $phoneXs = $('#phone-xs'),
        $poll = $('#poll');
//puse $ en funcion.. cambie ; x , en var
        ///on scroll appear
      //alert($scroll);
  if($scroll > $climb.offset().top - ($window.height()/1.2)){
    $climb.addClass("--isvisible");
  }
  if($scroll > $poll.offset().top - ($window.height()/1.2)){
    $poll.addClass("--isvisible");
  }
  if($scroll > $poll.offset().top - ($window.height()/1.2)){
    $poll.addClass("--isvisible");
  }
  if($scroll > $screen.offset().top - ($window.height()/1.2)){
    $screen.addClass("--isvisible-l");
  }
  if($scroll > $phone.offset().top - ($window.height()*0.9)){
    $phone.addClass("--isvisible-l");
  }
  if($scroll > $phoneXs.offset().top - ($window.height()/1.2)){
    $phoneXs.addClass("--isvisible-l");
  }

})(jQuery);
*/
/*
$(window).scroll(function($){
  var $window = $(window);
  var $section2height = $('#section3').offset().top;
        $circle1 = $('#circle1');
          $scroll = $(this).scrollTop();



  ///parallax//*
// /'+ $scroll * 1 - $section2height +'
    //alert($scroll-$section2height);

       $circle1.css({
         //'top' : ' -'+ $scroll * 1 + $section2height +'px'
         'transform' : 'translateY(-200px)'

       });

      // if($scroll >= $section2height){
      //};

})(jQuery);
*/
