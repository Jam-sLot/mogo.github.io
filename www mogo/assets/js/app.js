$(document).ready(function() {

    /*Fixed Header*/
            var header = $("#header"),
            introH = $("#intro").innerHeight(),
            scrollOffset = $(window).scrollTop();

        checkScroll(scrollOffset);

        $(window).on("scroll", function() {

            scrollOffset = $(this).scrollTop();

            checkScroll(scrollOffset);
        });

        function checkScroll(scrollOffset) {

            if( scrollOffset >= introH )    {
                header.addClass("fixed")
            }   else    {
                header.removeClass("fixed")
            }
        };
    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $("#burger__link a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*Hide menu*/
    $("#nav a, #burger__link a").on("click", function(event)    {
        $("#burger__link").removeClass("active");
        $("#burger__btn").removeClass("active");
    });

    /*Menu nav toglle*/
    $("#toggle__btn").on("click", function(event) {
    event.preventDefault();

        $("#burger__btn").addClass("active");
        $("#burger__link").toggleClass("active");


    });
    /*Collapse*/

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('collapse'),
            blockId1 = $(this).data('active');

        $(blockId).slideToggle();
        $(blockId1).toggleClass('active');
    });

//    Slider
    $('[data-slider]').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });


    });




















