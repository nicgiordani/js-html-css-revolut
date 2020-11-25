$(document).ready(
  function () {

    $('#abbonamenti').mouseenter(
      function () {
        $('.abbonamenti').removeClass('hide');
        $('.chi-siamo').addClass('hide');
        $('.aiuto').addClass('hide');
      }
    );
    // $('.abbonamenti').mouseleave(
    //   function () {
    //     $('.abbonamenti').addClass('hide');
    //   }
    // );

    $('#chi-siamo').mouseenter(
      function () {
        $('.chi-siamo').removeClass('hide');
        $('.abbonamenti').addClass('hide');
        $('.aiuto').addClass('hide');
      }
    );
    // $('.chi-siamo').mouseleave(
    //   function () {
    //     $('.chi-siamo').addClass('hide');
    //   }
    // );

    $('#aiuto').mouseenter(
      function () {
        $('.aiuto').removeClass('hide');
        $('.chi-siamo').addClass('hide');
        $('.abbonamenti').addClass('hide');
      }
    );
    // $('.aiuto').mouseleave(
    //   function () {
    //     $('.aiuto').addClass('hide');
    //   }
    // );


  }
);
