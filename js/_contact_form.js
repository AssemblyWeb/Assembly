$(function(){
  $(".form .input-group input").focusout(function(){
    var text_val=$(this).val();
    if(text_val===""){
      $(this).removeClass('has-value');
    }else{
      $(this).addClass('has-value');
    }
  });
  $('.form-control').on('focus blur', function (e) {
      $(this).parents('.form-group').toggleClass('focused', (
      e.type === 'focus' || this.value.length > 0));
  }).trigger('blur');
});
