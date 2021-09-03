$(function(){

    $('.details-table').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });

    $('.team__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow team__prev"><svg class="icon"><use xlink:href="images/sprite.svg#left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow team__next"><svg class="icon"><use xlink:href="images/sprite.svg#right"></use></svg></button></button>',
        infinite: false
    });
    $('.production__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow production__prev"><svg class="icon"><use xlink:href="images/sprite.svg#left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow production__next"><svg class="icon"><use xlink:href="images/sprite.svg#right"></use></svg></button></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    infinite: true,
                    autoplay: true
                }
            }
        ]    
    });

    $('.header__btn').on('click', function(){
        $('.header__navigation').toggleClass('header__navigation--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    $('.header__navigation-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

        $('.header__navigation').removeClass('header__navigation--active');
        $('.header__btn-item').removeClass('header__btn-item--active');
    });
    
    new WOW().init();

    var mixer = mixitup('.material__holder');
    mixer.filter('.category-a');
});