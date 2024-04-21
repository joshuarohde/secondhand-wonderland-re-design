
$(document).ready(function(){
    $(".btn").hover(function(){
        $(this).addClass("animate__animated animate__pulse  animate__faster animate__infinite");
    }, function(){
        $(this).removeClass("animate__animated animate__pulse animate__faster animate__infinite");
    });
});


