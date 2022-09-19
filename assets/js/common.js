jQuery(function() {
    //show hide password
    $(".c-form__toggle-password").click(function() {
        let inputPassword = $(this).parent().find(".c-form__password");
        
        $(this).toggleClass("show")
        if (inputPassword.attr("type") == "password") {
            inputPassword.attr("type", "text");
        } else {
            inputPassword.attr("type", "password");
        }
    });

    //show hide faq
    $(".p-top-search__faq__question").click(function(){
        $(this).toggleClass("show");
        $(this).find(".p-top-search__faq__answer").slideToggle();
    })
    $(".p-top-faq__list__question").click(function(){
        $(this).toggleClass("show");
        $(this).find(".p-top-faq__list__answer").slideToggle();
    })

    // top driver slider
    $('.p-top-driver__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
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
    $('.p-top-driver__jobs__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots: false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/top-driver/icn_arrow_slider_left_01.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/top-driver/icn_arrow_slider_left_02.svg" class="slide-arrow prev-arrow"></button>',
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

    //top details
    $('.p-top-details__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
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

    //top search
    $('.p-top-search__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
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

    //top faq
    $('.p-top-faq__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
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

    //top register
    $('.p-top-register__slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrow: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
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

    //custom date input
    $( ".calendar" ).datepicker({
        dateFormat: 'yy/dd/mm',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
			$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	$(".calendar").on("change",function(){
		var $me = $(this),
			$selected = $me.val(),
			$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});

    //customs select
    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + '08:00-09:00'+ '<span>' + 'AM' + '</span>' + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function() {
                template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
        template += '</div></div>';
        
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function(event) {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    //avatar upload
    $("#imageUpload").change(function(data){

        var imageFile = data.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
    
        reader.onload = function(evt){
            $('.p-register-info__avatar-preview img').attr('src', evt.target.result);
            $('.p-register-info__avatar-preview img').hide();
            $('.p-register-info__avatar-preview img').fadeIn(650);
        }
    });

    //img upload
    upload("#imageUpload1")
    upload("#imageUpload2")
    upload("#imageUpload3")
    upload("#imageUpload4")
    upload("#imageUpload5")
});

function upload(elementId){
    $(elementId).change(function(data){

        var imageFile = data.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
    
        var root = $(this).parent().parent();

        reader.onload = function(evt){
            
            root.find('.p-register-upload-materials__avatar-preview').css('border', '1px solid #ccc');
            root.find('.p-register-upload-materials__avatar-preview img').attr('src', evt.target.result);
            root.find('.p-register-upload-materials__avatar-preview img').hide();
            root.find('.p-register-upload-materials__avatar-preview img').fadeIn(650);
        }
    });
}