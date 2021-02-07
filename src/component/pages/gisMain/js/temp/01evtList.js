//01 evtList script
$(document).ready(function () {     
    //list_card slide show/hide
    $(".evtlist_wrap .list_card .btn_show").on("click", function () {
        if ($(".evtlist_wrap .list_card .btn_show").hasClass("clicked")) {
            $(this).parents(".list_card").children(".card_body").slideUp(200);            
            $(this).removeClass("clicked");   
            $(this).removeClass("btn_hide");
        } else {
            $(this).parents(".list_card").children(".card_body").slideDown(200);       
            $(this).addClass("clicked"); 
            $(this).addClass("btn_hide");         
        }        
    });     
});