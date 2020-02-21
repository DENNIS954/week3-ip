$(document).ready(function(){
    $("portfolio div").hover(function(){
        $(this).find(".img-desk").css({"display":"flex"});
    },function(){
        $(this).find(".img-desk").hide();
    });
});