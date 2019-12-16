$(function(){
   var count = 1;
   
   setInterval(function(){

    console.log(count);
    if(count > 2) count = 0;

    $('.slider img').removeClass('show');

    $('.slider img')
        .eq(count)
        .addClass('show');
        count++;
        
   },4000);
})