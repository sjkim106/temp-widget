//gisIcon/gisWidget script
$(document).ready(function () {
    //btn active
    $(".btn_evtlist").click(function () {
        $(this).addClass("active");
    });
    $(".btn_search").click(function () {
        $(this).addClass("active");
    });
    $(".btn_legend").click(function () {
        $(this).addClass("active");
    });

    //btn_view active
    $(".view_box .btn_view").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //selectric
    $("#selectDo").selectric();
    $("#selectGun").selectric();
    $("#selectEup").selectric();

    //gis_icon active
    $(".gis_icon").click(function () {
        $(this).addClass("active");
    });

    //cluster_icon active
    $(".cluster_icon").click(function () {
        $(this).addClass("active");
    });

    //castnet_icon active
    $(".castnet_icon").click(function () {
        $(this).addClass("active");
    });
    
    //cluster_icon active
    $(".cluster_icon").click(function () {
        $(this).addClass("active");
    });
        
});