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

    //facil_select_area slide show/hide
    $(".facil_select_area .btn_open").on("click", function () {
        if ($(".facil_select_area .btn_open").hasClass("clicked")) {
            $(this).parents(".facil_select_head").siblings(".facil_select_body").slideUp(200);            
            $(this).removeClass("clicked");   
            $(this).removeClass("btn_close");
        } else {
            $(this).parents(".facil_select_head").siblings(".facil_select_body").slideDown(200);       
            $(this).addClass("clicked"); 
            $(this).addClass("btn_close");         
        }        
    });  

    //gis_icon active
    $(".gis_icon").click(function () {
        $(this).addClass("active");
    });

    //counter_icon active
    $(".counter_icon").click(function () {
        $(this).addClass("active");
    });

    //sensor_loc_icon active
    $(".sensor_loc_icon").click(function () {
        $(this).addClass("active");
    });
});