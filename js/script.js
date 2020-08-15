$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('.header-list').fadeToggle();
    event.preventDefault();
  });
});