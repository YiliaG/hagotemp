/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$(function () {
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

    $('#brands-carousel-1').owlCarousel({
        nav: true,
        loop: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


});