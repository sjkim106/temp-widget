//01broadcast script
$(document).ready(function () {     
    //tab별 화면 show
    $(".btn_tab").on('click', function () {
        var tab = $(this).data("tab");
        $(".tab_info").hide();
        $("#" + tab).show();

        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //mCustomScrollbar
    $(".broadcast_frame").mCustomScrollbar();

    //type_box active
    $(".type_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //selectric
    $("#selectStartSound").selectric();
    $("#selectStartRepeat").selectric();
    $("#selectEndSound").selectric();     
    $("#selectEndRepeat").selectric();     
    $("#selectRepeat").selectric();   

    //slider
    $("#ex6").bootstrapSlider({
        formatter: function(value) {
          return 'Current value: ' + value;
        }
      });
    $("#ex6").on("slide", function(slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

});