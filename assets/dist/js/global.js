(function ($) {
  $(document).ready(function () {

    $('.menu-icon').on('click', function () {
      $(this).toggleClass('menu-icon--open');

      if ($(this).hasClass('menu-icon--open')) {
        $('.menu').css('display', 'flex');
      } else {
        $('.menu').css('display', 'none');
      }
    });


    $('.menu__item').on('click', function () {
      $('.menu__item').removeClass('menu__item--active');
      $(this).addClass('menu__item--active');
    });

  });
})(jQuery);
