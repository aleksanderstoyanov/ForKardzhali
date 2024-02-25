$(document).ready(function(){
    $(".article-toc > .nav > .nav-item > .nav-link").on("click", function(e){
        $(e.target).toggleClass("text-dark");
        $(e.target).toggleClass("active");

       $('.article-toc > .nav > .nav-item > .nav-link')
        .not(this)
        .each(function(_, element){
            $(element).removeClass("active");
            $(element).addClass("text-dark");
        })
    })
})