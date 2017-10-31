$(document).ready(function() {
  $('#return').hide();
  $('.contentContainer').hide();
  $('#aboutJoe').hide();
  $('#overlayFade').delay(700).fadeOut();
  $('.mainLink').click(function(){
    $('#theNav').fadeOut();



    $('#return').delay(600).fadeIn();
    if (this.id === 'web') {
      $('#mediaContainer1').delay(600).fadeIn();
      $('html').css("background-image", "url(inc/greyBg.png)");
    } else if (this.id === 'vid') {
      $('#mediaContainer2').delay(600).fadeIn();
      $('html').css("background-image", "url(inc/squares.png)");
    } else if (this.id === 'misc') {
      $('#mediaContainer3').delay(600).fadeIn();
      $('html').css("background-image", "url(inc/colorBg.png)");
    } else if (this.id === 'about') {
      $('.contentContainer').fadeOut();
      $('#mediaContainer4').delay(600).fadeIn();

      $('#about').delay(420).fadeOut();
      $('html').css("background-image", "url(inc/colorBg.png)");
    } else {
      $('html').css("background-image", "url(inc/paperBg.png)");
    }

  });

  $('#return').click(function(){
    $('#return').fadeOut();
    $('.contentContainer').fadeOut();
    $('#theNav').delay(600).fadeIn();
    $('#about').delay(600).fadeIn();
    $('html').css("background-image", "url(inc/paperBg.png)");

  });

  // $('#about').click(function(){
  //   $('#return').fadeOut();
  //   $('.contentContainer').fadeOut();
  //   $('#theNav').delay(200).fadeOut();
  //   $('#main').delay(400).fadeOut();
  //   $('#about').delay(420).fadeOut();
  //   $('#aboutJoe').delay(800).fadeIn();
  //   $('html').css("background-image", "none");
  //
  // });


  $('#revert').click(function(){
    $('#aboutJoe').fadeOut();
    $('.contentContainer').delay(200).fadeOut();
    $('#main').delay(400).fadeIn();
    $('#theNav').delay(600).fadeIn();
    $('#about').delay(600).fadeIn();
    $('html').css("background-image", "url(inc/paperBg.png)");

  });



});
