$('.one-arrow').on('click', function () {
    $('#port-one').slideToggle('slow');
});

$('.two-arrow').on('click', function () {
    $('#port-two').slideToggle('slow');
});

$('.three-arrow').on('click', function () {
    $('#port-three').slideToggle('slow');
});

$('.four-arrow').on('click', function () {
    $('#port-four').slideToggle('slow');
});

$('#down-arrow-one').on("click", function () {
    $('#down-arrow-one').hide();
    $('#up-arrow-one').show();
});
$('#up-arrow-one').on("click", function () {
    $('#up-arrow-one').hide();
    $('#down-arrow-one').show();
})
$('#down-arrow-two').on("click", function () {
    $('#down-arrow-two').hide();
    $('#up-arrow-two').show();
});
$('#up-arrow-two').on("click", function () {
    $('#up-arrow-two').hide();
    $('#down-arrow-two').show();
})
$('#down-arrow-three').on("click", function () {
    $('#down-arrow-three').hide();
    $('#up-arrow-three').show();
});
$('#up-arrow-three').on("click", function () {
    $('#up-arrow-three').hide();
    $('#down-arrow-three').show();
})
$('#down-arrow-four').on("click", function () {
    $('#down-arrow-four').hide();
    $('#up-arrow-four').show();
});
$('#up-arrow-four').on("click", function () {
    $('#up-arrow-four').hide();
    $('#down-arrow-four').show();
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