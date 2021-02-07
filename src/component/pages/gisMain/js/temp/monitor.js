//투망 모니터링 script 
$(document).ready(function () {    
    //monitor_wrap slide show/hide
    $(".monitor_wrap .btn_tab").on("click", function () {
        if ($(".monitor_wrap .btn_tab").hasClass("clicked")) {
            $(this).removeClass("clicked");
            $(this).removeClass("open_tab");
        } else {
            $(this).addClass("clicked");
            $(this).addClass("open_tab");
        }
        if ($(".monitor_wrap .btn_tab").hasClass("clicked")) {
            $(".monitor_wrap").css({
                right: '-23.54vw'
            });
        } else {
            $(".monitor_wrap").css({
                right: '0'
            });
        }
    });    

    //cctv_box active
    $(".monitor_wrap .small_monitor_area .cctv_box").on('click', function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
});