//dashboard common script
$(document).ready(function () {   
    //btn_view active
    $(".menu_btn_area .btn_menu").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //list_box active
    $(".list_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //sensor_box active
    $(".sensor_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
    
    //mCustomScrollbar
    $(".dash_body").mCustomScrollbar();
          
});