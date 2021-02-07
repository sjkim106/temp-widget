//gisPopup script
$(document).ready(function () {
    //cctv_popup btn_close active
    $(".cctv_popup .btn_close").click(function () {
        $(".cctv_popup").hide();
    });

    //cluster_popup btn_close active
    $(".cluster_popup .btn_close").click(function () {
        $(".cluster_popup").hide();
    });

    //cctv_camera_popup btn_close active
    $(".cctv_camera_popup .btn_close").click(function () {
        $(".cctv_camera_popup").hide();
    });

    //cctv_ptz_popup btn_close active
    $(".cctv_ptz_popup .btn_close").click(function () {
        $(".cctv_ptz_popup").hide();
    });

    //mCustomScrollbar
    $(".cluster_popup .popup_body").mCustomScrollbar();

    //menu별 화면 show
    $(".btn_ptztab").on('click', function () {
        var ptztab = $(this).data("ptztab");
        $(".ptz_tab").hide();
        $("#" + ptztab).show();

        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

});