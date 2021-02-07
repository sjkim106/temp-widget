//menuArea script
$(document).ready(function () {     
    //menu별 화면 show
    $(".btn_menu").on('click', function () {
        var menu = $(this).data("menu");
        $(".gis_info").hide();
        $("#" + menu).show();

        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
});