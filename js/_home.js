(function($){
  var  arrow = $('#arrow');
        logo = $("#hero-logo");
        text = $("#hero-text");
      verNav = $("#cd-vertical-nav");
          tl = new TimelineLite();

tl
    .from(logo, 1,{autoAlpha: 0})
    .from(text, 0.5,{autoAlpha: 0, y: -5})
    .from(verNav, 0.5,{autoAlpha: 0, right: 40})
    .from(arrow, 1,{autoAlpha: 0, ease: Bounce.easeOut, y: -200,delay: 1 });

arrow.hover(over,out);
function over(){
  TweenMax.to(this, 0.3, {y: -5})
}
function out(){
  TweenMax.to(this, 0.3, {y: 5, ease: Bounce.easeOut})
}
})(jQuery);
