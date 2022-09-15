
jQuery(function() {

    /* Casestudy Slider */

    $('.p-services__case-study__inner__list ul').slick({ //{}を入れる
        autoplay: true,
        slidesToShow: 2,
        centerMode:true,
        centerPadding:'180px',
        dots:true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../assets/img/common/icn_arrow_slider_left_01.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../assets/img/common/icn_arrow_slider_left_02.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [
          {
            breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true,
                    centerMode:true,
                    centerPadding:'100px',
                }
          },
            {
            breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerMode:true,
                    centerPadding:'100px',
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                centerMode:true,
                dots: true,
                arrows: true,
                centerPadding:'70px',
            }
          }
        ]
    });

});