//main.js

$(function(){
    $('.depth1 > li').mouseover(function(){
        $('.depth2').addClass('show');
    });

    $('.depth1 > li').mouseout(function(){
        $('.depth2').removeClass('show')
    });

});

$(function(){
    
    $('.popup').addClass('show');

    
    $('#btn_close').click(function(){
        $('.popup').removeClass('show');
    })


});
ㄴ