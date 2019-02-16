$('.drinkr-arrow').on('click', function () {
    $('#port-drinkr').slideToggle('slow');
});

$('.tp-arrow').on('click', function () {
    $('#port-tp').slideToggle('slow');
});

$('.nick-arrow').on('click', function () {
    $('#port-nick').slideToggle('slow');
});

$('.marvel-arrow').on('click', function () {
    $('#port-marvel').slideToggle('slow');
});

$('#down-arrow-drinkr').on("click", function () {
    $('#down-arrow-drinkr').hide();
    $('#up-arrow-drinkr').show();
});
$('#up-arrow-drinkr').on("click", function () {
    $('#up-arrow-drinkr').hide();
    $('#down-arrow-drinkr').show();
})
$('#down-arrow-tp').on("click", function () {
    $('#down-arrow-tp').hide();
    $('#up-arrow-tp').show();
});
$('#up-arrow-tp').on("click", function () {
    $('#up-arrow-tp').hide();
    $('#down-arrow-tp').show();
})
$('#down-arrow-nick').on("click", function () {
    $('#down-arrow-nick').hide();
    $('#up-arrow-nick').show();
});
$('#up-arrow-nick').on("click", function () {
    $('#up-arrow-nick').hide();
    $('#down-arrow-nick').show();
})
$('#down-arrow-marvel').on("click", function () {
    $('#down-arrow-marvel').hide();
    $('#up-arrow-marvel').show();
});
$('#up-arrow-marvel').on("click", function () {
    $('#up-arrow-marvel').hide();
    $('#down-arrow-marvel').show();
})

if ($(window).width() <= 1200) {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById('iconHeader');
    var sticky = header.offsetTop;
    var nameHeader = document.getElementById('initials');
    var mail = document.getElementById('mail-toggle');
    var resume = document.getElementById('resume-toggle');
    var link = document.getElementById('link-toggle');
    var git = document.getElementById('git-toggle');


    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
            nameHeader.style.display = 'flex';
            mail.classList.add('col-2');
            mail.classList.remove('col-3');
            resume.classList.add('col-2');
            resume.classList.remove('col-3');
            link.classList.add('col-2');
            link.classList.remove('col-3');
            git.classList.add('col-2');
            git.classList.remove('col-3');
        } else {
            header.classList.remove('sticky');
            nameHeader.style.display = 'none';
            mail.classList.add('col-3');
            mail.classList.remove('col-2');
            resume.classList.add('col-3');
            resume.classList.remove('col-2');
            link.classList.add('col-3');
            link.classList.remove('col-2');
            git.classList.add('col-3');
            git.classList.remove('col-2');
        }

        
    }
}