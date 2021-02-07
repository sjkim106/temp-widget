//dashboard common script
$(document).ready(function () {   
    //menu별 화면 show
    $(".btn_menu").on('click', function () {
        var menu = $(this).data("menu");
        $(".menu_info").hide();
        $("#" + menu).show();

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
     
    //mCustomScrollbar
    $(".list_area").mCustomScrollbar();
});