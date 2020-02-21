$(document).ready(function(){
    $("portfolio div").hover(function(){
        $(this).find("div").css({"display":"flex"});
    },function(){
        $(this).find("div").hide();
    });
});