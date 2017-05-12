// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require spree/frontend
//= require slick.min
//= require semantic-ui
//= require_tree .
//= require spree/frontend/solidus_i18n



function triggerSlideShow(){
    $('.miraSlider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
    });
    $('.miraSecondSlider').slick({
        infinite: true,
        centerPadding: '10px',
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 500,
        dots: false
    });
    $('.miraThirdSlider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 10,
        autoplay: true,
        autoplaySpeed: 150,
        dots: false
    });
}

Spree.ready(function(){
    triggerSlideShow();
    $('.special.cards .image').dimmer({
        on: 'hover'
    });

});