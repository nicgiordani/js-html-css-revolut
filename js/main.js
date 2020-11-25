$(document).ready(
  function () {

    $('.header-right ul li:nth-child(2)').mouseenter(
      function () {
        $('.abbonamenti').removeClass('hide');
      }
    );
    $('.header-right ul li:nth-child(2)').mouseleave(
      function () {
        $('.abbonamenti').addClass('hide');
      }
    );

    $('.header-right ul li:nth-child(3)').mouseenter(
      function () {
        $('.chi-siamo').removeClass('hide');
      }
    );
    $('.header-right ul li:nth-child(3)').mouseleave(
      function () {
        $('.chi-siamo').addClass('hide');
      }
    );


  }
);
