/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$(function () {

    // 產品滾動
    var owl = $('.product-carousel');
    owl.owlCarousel({
        nav: true,
        loop: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // 首頁品牌滾動
    $('#brands-carousel-1').owlCarousel({
        nav: true,
        loop: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // 返回至頂部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("#scrollUp").fadeIn(1000);
        } else {
            $("#scrollUp").fadeOut(800);
        }
    });
    $("#scrollUp").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.icheck-minimal input').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green',
        increaseArea: '20%'
    });

});