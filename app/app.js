function initURLListerner(){
    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });

}



$(document).ready(function(){
    initURLListerner()
})