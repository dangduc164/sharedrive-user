jQuery(function() {
    // Mobile menu
    $('.js-toggle-menu').on('click', function() {
        $(this).toggleClass('active');
    });

    // Aos animation
    AOS.init({
        duration: 1000
    });
    $(window).on("scroll", function() {
        AOS.init({
            duration: 1000
        });
    });

    // select fake
    const inputs = document.getElementsByClassName('js-fake-input');
    const selects = document.getElementsByClassName('js-select');

    for (let i = 0; i < inputs.length; i++) {
        getSelected(i);
        selects[i].addEventListener("change", function() {
            getSelected(i);
        });
    }

    function getSelected(i) {
        inputs[i].value = selects[i].options[selects[i].selectedIndex].text;
    }

    // Dropdown toggle
    $('.c-dropdown__toggle').click(function(e) {
        e.preventDefault();
        $(this).next('.c-dropdown__menu').slideToggle();
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.c-dropdown__toggle') && !$(target).parents().is('.c-dropdown__toggle'))
        //{ $('.dropdown').hide(); }
        { $('.c-dropdown__menu').slideUp(); }
    });

    // p-index
    var $slider = $('.p-index__case__slider');
    var $progressBar = $('.p-index__case__progress-bar');

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar.css('width', calc + '%')
    });

    $('.p-index__case__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots: false,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    $('.p-index__column__slider-sp').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
    });


    //p-new-details
    $('.p-news-details__posts ul').slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.557" height="12.838" viewBox="0 0 7.557 12.838">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l.484.484.242.242,5.085,5.085-5.811,5.811" transform="translate(-340.914 -3656.707)" fill="none" stroke="#fff" stroke-width="1.5"/>
            </svg>
        </button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.402" height="12.683" viewBox="0 0 7.402 12.683">
                <path id="Path_49" data-name="Path 49" d="M0,11.622,5.811,5.811,0,0" transform="translate(0.53 0.53)" fill="none" stroke="#fff" stroke-width="1.5"/>
            </svg>
        </button>`,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //p-case-details
    $('.p-case-details__customer-voice__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots: false,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
                <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
            </svg>
        </button>`,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //p-about-member
    $('.p-about-details__member__slider ul').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        dots: false,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="9.063" height="16.004" viewBox="0 0 9.063 16.004">
        <path id="Path_49" data-name="Path 49" d="M7.472,14.944,0,7.472,7.472,0" transform="translate(1.061 0.53)" fill="none" stroke="#fff" stroke-width="1.5"/>
    </svg>
        </button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
        <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
    </svg>
        
    
        </button>`,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //p-about-pc
    $('.p-about-pc__office__slider').slick({
        autoplay: false,
        arrows: false,
        autoplay: true,
        // cssEase: 'linear',
        speed: 5000,
        infinite: true,
        slidesToShow: 3,
        dots: false,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="30.106" height="30.106" viewBox="0 0 30.106 30.106">
        <g id="Group_2914" data-name="Group 2914" transform="translate(30.106 30.106) rotate(180)">
          <g id="Path_48" data-name="Path 48" fill="none">
            <path d="M15.053,0A15.053,15.053,0,1,1,0,15.053,15.053,15.053,0,0,1,15.053,0Z" stroke="none"/>
            <path d="M 15.05291748046875 0.9999980926513672 C 11.29924774169922 0.9999980926513672 7.770248413085938 2.461757659912109 5.115997314453125 5.115997314453125 C 2.461757659912109 7.770248413085938 0.9999980926513672 11.29924774169922 0.9999980926513672 15.05291748046875 C 0.9999980926513672 18.80658721923828 2.461757659912109 22.33558654785156 5.115997314453125 24.98983764648438 C 7.770248413085938 27.64407730102539 11.29924774169922 29.10583686828613 15.05291748046875 29.10583686828613 C 18.80658721923828 29.10583686828613 22.33558654785156 27.64407730102539 24.98983764648438 24.98983764648438 C 27.64407730102539 22.33558654785156 29.10583686828613 18.80658721923828 29.10583686828613 15.05291748046875 C 29.10583686828613 11.29924774169922 27.64407730102539 7.770248413085938 24.98983764648438 5.115997314453125 C 22.33558654785156 2.461757659912109 18.80658721923828 0.9999980926513672 15.05291748046875 0.9999980926513672 M 15.05291748046875 -1.9073486328125e-06 C 23.36641693115234 -1.9073486328125e-06 30.10583686828613 6.739418029785156 30.10583686828613 15.05291748046875 C 30.10583686828613 23.36641693115234 23.36641693115234 30.10583686828613 15.05291748046875 30.10583686828613 C 6.739418029785156 30.10583686828613 -1.9073486328125e-06 23.36641693115234 -1.9073486328125e-06 15.05291748046875 C -1.9073486328125e-06 6.739418029785156 6.739418029785156 -1.9073486328125e-06 15.05291748046875 -1.9073486328125e-06 Z" stroke="none" fill="#1f1f1f"/>
          </g>
          <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l6.43,6.43-6.43,6.43" transform="translate(-329.761 -3648.769)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
        </g>
      </svg></button>
      `,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
        <svg id="Group_2913" data-name="Group 2913" xmlns="http://www.w3.org/2000/svg" width="30.106" height="30.106" viewBox="0 0 30.106 30.106">
        <g id="Path_48" data-name="Path 48" fill="none">
          <path d="M15.053,0A15.053,15.053,0,1,1,0,15.053,15.053,15.053,0,0,1,15.053,0Z" stroke="none"/>
          <path d="M 15.05291748046875 0.9999980926513672 C 11.29924774169922 0.9999980926513672 7.770248413085938 2.461757659912109 5.115997314453125 5.115997314453125 C 2.461757659912109 7.770248413085938 0.9999980926513672 11.29924774169922 0.9999980926513672 15.05291748046875 C 0.9999980926513672 18.80658721923828 2.461757659912109 22.33558654785156 5.115997314453125 24.98983764648438 C 7.770248413085938 27.64407730102539 11.29924774169922 29.10583686828613 15.05291748046875 29.10583686828613 C 18.80658721923828 29.10583686828613 22.33558654785156 27.64407730102539 24.98983764648438 24.98983764648438 C 27.64407730102539 22.33558654785156 29.10583686828613 18.80658721923828 29.10583686828613 15.05291748046875 C 29.10583686828613 11.29924774169922 27.64407730102539 7.770248413085938 24.98983764648438 5.115997314453125 C 22.33558654785156 2.461757659912109 18.80658721923828 0.9999980926513672 15.05291748046875 0.9999980926513672 M 15.05291748046875 -1.9073486328125e-06 C 23.36641693115234 -1.9073486328125e-06 30.10583686828613 6.739418029785156 30.10583686828613 15.05291748046875 C 30.10583686828613 23.36641693115234 23.36641693115234 30.10583686828613 15.05291748046875 30.10583686828613 C 6.739418029785156 30.10583686828613 -1.9073486328125e-06 23.36641693115234 -1.9073486328125e-06 15.05291748046875 C -1.9073486328125e-06 6.739418029785156 6.739418029785156 -1.9073486328125e-06 15.05291748046875 -1.9073486328125e-06 Z" stroke="none" fill="#1f1f1f"/>
        </g>
        <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l6.43,6.43-6.43,6.43" transform="translate(-329.761 -3648.769)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
      </svg></button>
      `,
        responsive: [{
            breakpoint: 769,
            settings: {
                dots: false,
                autoplaySpeed: 5000,
                speed: 500,
                cssEase: 'ease',
                slidesToShow: 1,
                arrows: true,
            }
        }]
    });

    //p-service-system
    $('ul.p-service-system__lhr__sp').slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_left.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_right.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});