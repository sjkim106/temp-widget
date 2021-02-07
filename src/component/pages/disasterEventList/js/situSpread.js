//situSpread script
$(document).ready(function () {   
    //btn_tab active
    $(".btn_tab_area .btn_tab").click(function () {
        var tab = $(this).data("tab");
        $(".tab_info").hide();
        $("#" + tab).show();

        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //btn_spread_type active
    $(".spread_type_frame .btn_spread_type").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //slider
    $("#ex6").bootstrapSlider({
        formatter: function(value) {
          return 'Current value: ' + value;
        }
      });
    $("#ex6").on("slide", function(slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    //btn_spread_add active
    $(".btn_spread_add").click(function () {
        $(".broadcast_wrap .object_input").addClass("active");
        $(".broadcast_wrap .object_box").addClass("active");
        $(".btn_select").show();
        $(".btn_broadcast").show();
    });

    //selectric
    $("#selectStartSound").selectric();    
    $("#selectStartRepeat").selectric();    
    $("#selectRepeatCount").selectric();    
    $("#selectEndSound").selectric();    
    $("#selectEndRepeat").selectric(); 
    $("#selectSpreadType").selectric(); 
    
    //mCustomScrollbar
    $(".spread_object_box").mCustomScrollbar();

});