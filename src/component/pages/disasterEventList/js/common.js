//dashboard common script
$(document).ready(function () { 
    //list_box active
    $(".list_area .list_frame .list_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //mCustomScrollbar
    $(".list_area").mCustomScrollbar();
    $(".spread_list_area").mCustomScrollbar();
    $(".tree_area").mCustomScrollbar();

    //btn_menu active
    $(".btn_menu_area .btn_menu").click(function () {
        var menu = $(this).data("menu");
        $(".menu_info").hide();
        $("#" + menu).show();

        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //spread_box active
    $(".spread_list_area .spread_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        $(".tree_area").addClass("active");
        $(".spread_object_box").addClass("active");
        $(".sms_wrap .object_input").addClass("active");
        $(".share_wrap .object_input").addClass("active");
        $(".share_wrap .object_box").addClass("active");
        $(".situ_spread_wrap .object_text").addClass("active");
        $(".situ_content_area .btn_add").show();
        $(".btn_spread").show();
        $(".btn_share").show();
    });
    
});