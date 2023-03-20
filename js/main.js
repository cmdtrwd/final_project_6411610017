var x = "";
for (i = 0; i < 8; i++) {
    x = x + 'Look Book <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0L16.1631 7.3426L22.229 2.67376L19.6631 9.8855L27.3148 9.67376L21 14L27.3148 18.3262L19.6631 18.1145L22.229 25.3262L16.1631 20.6574L14 28L11.8369 20.6574L5.77101 25.3262L8.33688 18.1145L0.685208 18.3262L7 14L0.685208 9.67376L8.33688 9.8855L5.77101 2.67376L11.8369 7.3426L14 0Z" fill="#F6D55C" /></svg>' ;
}

$(".content").html(x);

//-------------------------------------------------------


$(document).ready(function () {

    if ($(window).width() >= 415) {
        $(".desktop").removeClass("carousel-item");
    }
    else {
        $(".desktop").addClass("carousel-item");
    }

    //-------------------------------------------------------

    $(document).mousemove(function (event) {
        if ($(window).width() >= 415) {
            const x = (event.clientX) * 100 / ($(window).innerWidth()+ $(".frame2").position().left + ($(".frame2").innerWidth()/2)) + "%";
            const y = event.clientY * 100 / $(window).innerHeight() + "%";

            for (let i = 0; i < 2; i++) {
                $(".eye").css("left", x);
                $(".eye").css("top", y);
                $(".eye").css("transform", "translate(-" + x + ",-" + y + ")")
            }
        }
    });

    $("#atc-button").hover(function(){
        $(".blink").addClass("active");
    }, function(){
        $(".blink").removeClass("active");
      });

    //-------------------------------------------------------

    $(window).resize(function () {
        if ($(window).width() >= 415) {
            $(".desktop").removeClass("carousel-item");
        }
        else {
            $(".desktop").addClass("carousel-item");
            $(".eye").css("left", "10px");
            $(".eye").css("top", "5px");
            $(".eye").css("transform", "translate(0)")
        }
    });

    //-------------------------------------------------------

    let lastScrollTop = 0;

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();
        let positionMarquee = $(".marquee1").position().top;
        let translatePos = currentScrollTop-positionMarquee;
        let translatePos2 = -currentScrollTop+positionMarquee-750;

        $(".marquee1 .track").css("transform", "translate(" + translatePos + "px)");
        $(".marquee2 .track").css("transform", "translate(" + translatePos2 + "px)");
    });
});