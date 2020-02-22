$(document).ready(function(){
    $(".col-md-3#pr").hover(function(){
        $(this).find(".img-desk p").css("display","flex");
        //alert("in")
    },function(){
        $(this).find(".img-desk p").hide();
    });
});