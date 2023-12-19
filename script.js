let changeIcon = function (icon) {
    icon.classList.toggle('fa-times')
}
changeIcon = (icon) => icon.classList.toggle('fa-times')



$(document).ready(function () {
    $('.brands').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });


    $('.reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });


    $('.blogs_slider').slick({
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });

});

