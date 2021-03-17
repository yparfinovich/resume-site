"use strict";

$(document).ready(function () {
  console.log('hi');
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
  $('.icon-menu').on('click', function () {
    console.log(this);
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
  });
});