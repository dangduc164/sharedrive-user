//show popup 
function showPopup() {
    const openPopup = document.getElementById("popup");
    openPopup.style.display === 'none' ? openPopup.style.display = "block" : openPopup.style.display = "none";

}



// //cusstom input date
// $("#custom-input-date").datepicker({
//     dateFormat: 'yy/mm/dd',
//     language: 'ja',
// });

// // ACTIONS
// $("input").on("change", function(e) {
//     $(this).siblings(".label-error").text("");
//     $(this).removeClass("error");
// })

// $("#custom-input-date").on("focusout", function(e) {
//     if ($(this).val() != '') {
//         dateValidation($(this));
//     }
// })

// // CHECK
// function dateValidation(input) {
//     var errorLabel = input.siblings(".label-error");
//     var date = input.val();

//     input.removeClass("error");
//     errorLabel.text("");

//     var matches = /^(\d{1,2})[/\/](\d{1,2})[/\/](\d{4})$/.exec(date);
//     if (matches == null) {
//         input.addClass("error");
//         errorLabel.text("Date not valid.");
//     };

//     var d = matches[1];
//     var m = matches[2] - 1;
//     var y = matches[3];
//     var composedDate = new Date(y, m, d);

//     if (composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y) {} else {
//         input.addClass("error");
//         errorLabel.text("Date not valid.");
//     }
// }

//custom date input
$(".calendar").datepicker({
    dateFormat: 'yy/dd/mm',
    language: 'ja',
    firstDay: 1
});

$(document).on('click', '.date-picker .input', function(e) {
    let $me = $(this),
        $parent = $me.parents('.date-picker');
    $parent.toggleClass('open');
});


$(".calendar").on("change", function() {
    let $me = $(this),
        $selected = $me.val(),
        $parent = $me.parents('.date-picker');
    $parent.find('.result').children('span').html($selected);
});


//custom dropdown
$(function() {
    const list = $('.js-dropdown-list');
    const link = $('.js-link');
    link.click(function(e) {
        e.preventDefault();
        list.slideToggle(200);
    });
    list.find('li').click(function() {
        let text = $(this).find("label").html();
        // let icon = '<i class="fa fa-chevron-down"></i>';
        link.html(text);
        list.slideToggle(200);
        if (text === '* Reset') {
            link.html('会社/自宅/その他');
        }
    });

});

$(function showDrop() {
    const item = $('.js-dropdown-lists');
    const links = $('#js-links');
    links.click(function(e) {
        e.preventDefault();
        item.slideToggle(200);
    });
    item.find('li').click(function() {
        let text = $(this).find(".text-label").html();
        // let icon = '<i class="fa fa-chevron-down"></i>';
        links.html(text);
        item.slideToggle(200);
        if (text === '* Reset') {
            links.html('会社/自宅/その他');
        }
    });
});