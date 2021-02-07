//dashboard common script
$(document).ready(function () {    
    //dash_info_wrap slide show/hide
    $(".dash_info_wrap .btn_tab").on("click", function () {
        if ($(".dash_info_wrap .btn_tab").hasClass("clicked")) {
            $(this).removeClass("clicked");
            $(this).removeClass("open_tab");
        } else {
            $(this).addClass("clicked");
            $(this).addClass("open_tab");
        }
        if ($(".dash_info_wrap .btn_tab").hasClass("clicked")) {
            $(".dash_info_wrap").css({
                left: '-23.54vw'
            });
        } else {
            $(".dash_info_wrap").css({
                left: '0'
            });
        }
    });    

    //btn_view active
    $(".menu_btn_area .btn_menu").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //list_card active
    $(".list_card").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

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
});