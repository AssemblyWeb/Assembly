$(function (){

    $('.nav li a').each(function(){
        var path = window.location.href;
        var current = path.substring(path.lastIndexOf('/')+1);
        var url = $(this).attr('href');
        if(url == current){
            $(this).addClass('current');
        };
    });
});
