$(document).ready(function(){
    $(".details-btn").on("click", function(e){
        let target = $(e.currentTarget);
        let cardBody = $(target).nextAll(".card-body");

        debugger;
        console.log($.trim(target.text()));
        $.trim(target.text()) == "Виж още информация" ? $(cardBody).slideDown(700) : $(cardBody).slideUp(700);
        $.trim(target.text()) == "Виж още информация" ? target.text("Скрий информация") : target.text("Виж още информация");
    })
})