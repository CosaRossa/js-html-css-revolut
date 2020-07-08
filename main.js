$(document).ready(function () {
  $('li.drop-item > a').mouseenter(function () {
    $('.dropdown-lg').slideUp();
    $(this).next('.dropdown-lg').slideDown();
  });
  $('.dropdown-lg').mouseleave(function () {
    $('.dropdown-lg').slideUp();
  });
});
