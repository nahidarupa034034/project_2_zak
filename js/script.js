$(function($) {
    // makes sure the whole site is loaded
    var wind = $(window);
    wind.on('load', function() {
        $("#loader").delay(1000).fadeOut("slow");
    });
    //menu-fixed part js
    var menubar = $('#custom_nav');
    var MenuOffset = menubar.offset().top;
    $(window).on('scroll', function() {
        var WinScroll = $(window).scrollTop();
        if (WinScroll > MenuOffset) {
            menubar.addClass('menu_fixed');
        } else {
            menubar.removeClass('menu_fixed');
        }
    });
    //Back to top Button
    var Backt = $(".backtop");
    Backt.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    $(window).on('scroll', function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            Backt.fadeIn(1000);
        } else if (scrolling > 200) {
            Backt.fadeOut(1000);
        }
    });
    // baner part js
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true,
        nextArrow: '.slidNext',
        prevArrow: '.slidPrv',
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    // feedback part js
    $('.feedbacks').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
    });

    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
    var simplefilter = $('.work_menu li');
    simplefilter.on('click', function() {
        simplefilter.removeClass('active');
        $(this).addClass('active');
    });
    // counter part js
    $('.counter-up').counterUp({
        time: 3000
    });
    // progress_bar part js 
    // $('document').ready(function() {
    //     $(window).on("scroll", function() {
    //         $(".progress").each(function(index, progress) {
    //             var progressBar = $(progress).find(".progress-bar");
    //             var progressPercent = parseInt($(progressBar).attr("data-progress"));
    //             if (WinScroll > $(progress).offset().top - 400) {
    //                 $(progressBar).css("width", progressPercent + "%").text(progressPercent + "%");
    //             }
    //         });
    //     })
    // });
    // team slider part js
    $('.member_info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        infinite: true,
        asNavFor: '.members_slider'
    });
    $('.members_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.member_info',
        dots: false,
        autoplay: true,
        infinite: true,
        centerPadding: 0,
        arrows: true,
        prevArrow: '.slid-laft-btn',
        nextArrow: '.slid-right-btn',
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Blogs part js
    $('.bolg_texts').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.blog-prv',
        nextArrow: '.blog-next',
        infinite: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Client part js
    $('.client_logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});