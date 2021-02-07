//gisIcon/gisWidget script
$(document).ready(function () {
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
   
});