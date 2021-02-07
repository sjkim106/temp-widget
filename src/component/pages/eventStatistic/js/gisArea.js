//gisArea script
$(document).ready(function () {      
    //loc_box
    $(".loc_box").mouseover(function(){    
        var mapbg = $(this).data("mapbg");    
        $("#" + mapbg).addClass("hover");
    });
    $(".loc_box").mouseout(function(){
        var mapbg = $(this).data("mapbg"); 
        $("#" + mapbg).removeClass("hover");
    });

    $(".loc_box").on('click', function () {   
        $(this).addClass("active");
        var mapbg = $(this).data("mapbg");    
        $("#" + mapbg).addClass("active");
    });
});