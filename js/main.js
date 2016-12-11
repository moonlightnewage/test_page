$("#header .top-menu li").click(function() {
    $("#header .top-menu li").removeClass("active");
    $(this).toggleClass("active");
});

$("#header .top-menu li a").click(function() {
    $("#header .top-menu li a").removeClass("active");
    $(this).toggleClass("active");
});
