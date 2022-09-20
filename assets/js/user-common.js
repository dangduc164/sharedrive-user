//show popup 
function togglePopup() {
    const openPopup = document.getElementById("popup");
    openPopup.style.display === 'none' ? openPopup.style.display = "block" : openPopup.style.display = "none";

}


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



//cusstom tabs calendar
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})