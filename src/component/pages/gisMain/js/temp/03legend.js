//03 legend script
$(document).ready(function () {     
    //btn_map_type active
    $(".legend_wrap .btn_map_type").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //mCustomScrollbar
    $(".legend_wrap .facil_list_area").mCustomScrollbar();
});