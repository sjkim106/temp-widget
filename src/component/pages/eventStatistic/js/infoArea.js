//infoArea script
$(document).ready(function () {     
    //selectric
    $("#selectPeriod").selectric();  

    //btn_evt active
    $(".btn_evt").on('click', function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
    
});