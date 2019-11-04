$(document).ready(function(){


    $("#nav .nav_list .dep1").mouseover(function () {
        $(".dep2", this).slideDown();
    });
    $("#nav .nav_list .dep1").mouseleave(function () {
        $(".dep2", this).stop().slideUp();
    });


    
});