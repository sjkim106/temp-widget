//report script
$(document).ready(function () { 
    //datepicker 그리기
    $("#from_calendar").datepicker({
        dateFormat: "yy/mm/dd"
    });

    //btn_report_add active
    $(".btn_report_add").click(function () {
        $(".report_wrap .object_input").addClass("active");
        $(".report_wrap .object_box").addClass("active");
        $(".btn_file").show();
        $(".btn_save").show();
        $(".report_wrap .object_text").addClass("active");
    });

    //selectric
    $("#selectDepart").selectric();    
    $("#selectHour").selectric();    
    $("#selectMin").selectric();  
});