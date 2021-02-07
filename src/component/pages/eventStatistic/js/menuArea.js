//menuArea script
$(document).ready(function () {     
    //btn_menu active
    $(".btn_menu").on('click', function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
    
});