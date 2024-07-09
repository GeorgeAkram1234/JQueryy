/// <reference types="../@types/jquery"/>



$('.open h3 , .open i').on('click', function () {
    $('.sidebar').animate({ width: 'toggle', paddingInline: 'toggle' }, 600);
    $('.open').animate({ marginLeft: '230px' }, 600)
    if($('.sidebar').css('width') > 0){
        $('.open').css({cssText : 'margin-left : 0px'})
    }
})


$('.fa-times').on('click', function () {
    $('.sidebar').animate({ width: 'toggle', paddingInline: 'toggle' }, 600);
    $('.open').animate({ marginLeft: '0px' }, 600)

})

$('.bar h2').on('click', function (e) {
    let chosenBar = $(e.target).next()
    $(chosenBar).slideToggle(600)
    $('.bar h2').not(e.target).next().slideUp(600)

})

let countDownDate = new Date("Apr 8, 2027 7:55:52").getTime();

let x = setInterval(function () {

    let Today = new Date().getTime();
    let distance = countDownDate - Today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').html("-" + days + " D")
    $('#hrs').html(hours + " h")
    $('#mins').html(minutes + " m")
    $('#secs').html(seconds + " s")

    if (distance < 0) {
        clearInterval(x);
        $('#days').html('EXPIRED')
        $('#hrs').html('EXPIRED')
        $('#mins').html('EXPIRED')
        $('#secs').html('EXPIRED')
    }
}, 1000);

document.forms[0].addEventListener('click', function (e) {
    e.preventDefault()
})

$('#msg').on('input', function () {
    let typing = $('#msg').val().length
    $('#num').html(100 - typing)
    if (typing > 100) {
        $('#num').html('Expired')
    }
})

$('.nav-link').on('click', function (e) {
    let secId = $(e.target).attr('href')
    let secOffset = $(secId).offset().top
    $('html , body').animate({ scrollTop: secOffset - 60 }, 1200)
})

