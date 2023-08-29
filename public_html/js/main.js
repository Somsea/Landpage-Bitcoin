/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


$(document).ready(function () {


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });





    $(".image").click(function (event) {
        event.preventDefault();
    });
    $(".caption").click(function (event) {
        event.preventDefault();
        $.fancybox.open([
            {src: 'img/gallery-01.png'},
            {src: 'img/gallery-02.png'},
            {src: 'img/gallery-03.png'},
            {src: 'img/gallery-04.png'},
            {src: 'img/gallery-05.png'},
            {src: 'img/gallery-06.png'},
            {src: 'img/gallery-07.png'},
            {src: 'img/gallery-08.png'},
            {src: 'img/gallery-09.png'},
            {src: 'img/gallery-10.png'}
        ]);
    });
    
    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');


            if (position < windowHeight + scroll - 100) { // pustiti da element za 100 udje u vidno polje 
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }
    
    $(window).scroll(function () {
        animation();
    });

    animation();
    
    
    $('.navbar-nav a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top
            },
            2000,
            'linear'
            );
});




});



  
    






