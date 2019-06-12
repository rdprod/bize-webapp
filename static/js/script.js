
//Функция обработки scroll на основной странице

$(document).ready( function() {
  $('.video > ul').scrollLeft(345);
});


//Функции обработки вывода текста в блоке about

$(document).scroll( function() {
  if ( $(document).scrollTop() > 130 )
  {
    setTimeout( function() {
      $('.js-change-opacity-1 > span').css({opacity: 1});
    }, 0);

    setTimeout( function() {
      $('.js-change-opacity-2 > span').css({opacity: 1});
    }, 500);

    setTimeout( function() {
      $('.js-change-opacity-3 > span').css({opacity: 1});}, 1000); 
  }
});

/*//Функции обработки валидности формы

$(document).ready(function() {

  //Вход
  $('.form-sign-in').submit(function(e) {

    $('.error').hide();
    
    var email = $('#email-sign-in').val();
    var password = $('#pass-sign-in').val();
 
    var regExEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    
    var validEmail = regExEmail.test(email);

    if (!validEmail) {
      $('.sign-in-error-email').show();
      e.preventDefault();
    }
    if (password.length < 8) {
      $('.sign-in-error-pass').show();
      e.preventDefault();
    }
  });

  //Регистрация
  $('.form-sign-up').submit(function(e) {
  
    $('.error').hide();

    var name = $('#name-sign-up').val();
    var surname = $('#surname-sign-up').val();
    var email = $('#email-sign-up').val();
    var password = $('#pass-sign-up').val();
    var repassword = $('#repass-sign-up').val();
 
    var regExEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    var regExName = /^[A-ZА-Я][A-ZА-Яa-zа-я-]+$/;
    var regExPass = /(?=.*[0-9]){2,}(?=.*[!@#$%^&*])(?=.*[a-z]){2,}(?=.*[A-Z]){2,}[0-9a-zA-Z!@#$%^&*]{8,}/

    var validName = regExName.test(name);
    var validSurname = regExName.test(surname);
    var validEmail = regExEmail.test(email);
    var validPass = regExPass.test(password);

    if (!validName) {
      $('.sign-up-error-name').show();
      e.preventDefault();
    }
    if (!validSurname) {
      $('.sign-up-error-surname').show();
      e.preventDefault();
    }
    if (!validEmail) {
      $('.sign-up-error-email').show();
      e.preventDefault();
    }
    if (!validPass) {
      $('.sign-up-error-pass').show();
      e.preventDefault();
    }
    if (password != repassword){
      $('.sign-up-error-repass').show();
      e.preventDefault();
    }
  });


  //Возврат пароля
  $('.form-reset').submit(function(e) {
    
    $('.error').hide();

    var email = $('#email-reset').val();

    var regExEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

    var validEmail = regExEmail.test(email);

    if (!validEmail) {
      $('.reset-error-email').show();
      e.preventDefault();
    }
  });
});



//Функции обработки показа формы

$('.label-tab.sign-in-label').click(function(event){
  
  $('#arrow').css({left: '32px'});
  $('#arrow').addClass('fade-out');

  $('.label-tab').removeClass('checked-tab');
  $('.label-tab.sign-in-label').addClass('checked-tab');
  
  $('.form-sign-up').addClass('fade-out');
  $('.form-reset').addClass('fade-out');

  setTimeout( function() {
    $(".form-sign-in").show();
    $('.form-sign-in').addClass('fade-in');

    $(".form-sign-up").hide();
    $(".form-reset").hide();
    $('#arrow').removeClass('fade-out');
    $('#arrow').addClass('fade-in');
    $('.form-sign-up').removeClass('fade-out');
    $('.form-reset').removeClass('fade-out');

    setTimeout( function() {
      $('.form-sign-in').removeClass('fade-in');
      $('#arrow').removeClass('fade-in');
    }, 450);
  }, 450);
});

$('.label-tab.sign-up-label').click(function(event){
  
  $('#arrow').css({left: '137px'});
  $('#arrow').addClass('fade-out');

  $('.label-tab').removeClass('checked-tab');
  $('.label-tab.sign-up-label').addClass('checked-tab');

  $('.form-sign-in').addClass('fade-out');
  $('.form-reset').addClass('fade-out');

  setTimeout( function() {
    $(".form-sign-up").show();
    $('.form-sign-up').addClass('fade-in');

    $(".form-sign-in").hide();
    $(".form-reset").hide();
    $('#arrow').removeClass('fade-out');
    $('#arrow').addClass('fade-in');
    $('.form-sign-in').removeClass('fade-out');
    $('.form-reset').removeClass('fade-out');

    setTimeout( function() {
      $('.form-sign-up').removeClass('fade-in');
      $('#arrow').removeClass('fade-in');
    }, 450);
  }, 450);
});

$('.label-tab.reset-label').click(function(event){
  
  $('#arrow').css({left: '404px'});
  $('#arrow').addClass('fade-out');

  $('.label-tab').removeClass('checked-tab');
  $('.label-tab.reset-label').addClass('checked-tab');

  $('.form-sign-in').addClass('fade-out');
  $('.form-sign-up').addClass('fade-out');

  setTimeout( function() {
    $(".form-reset").show();
    $('.form-reset').addClass('fade-in');

    $(".form-sign-in").hide();
    $(".form-sign-up").hide();
    $('#arrow').removeClass('fade-out');
    $('#arrow').addClass('fade-in');
    $('.form-sign-in').removeClass('fade-out');
    $('.form-sign-up').removeClass('fade-out');

    setTimeout( function() {
      $('.form-reset').removeClass('fade-in');
      $('#arrow').removeClass('fade-in');
    }, 450);
  }, 450);
});*/


//Ajax обработка-комметариев
$('.form-comment-container').submit(function(e) {
  
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "/feedback.html",
    data: $('.form-comment-container').serialize(),
    success: function(data) {
      $('.main-comment-area').prepend(`
        <div class="comment-area">
          <img src="/static/images/placeholder.png">
          <div class="comment-text">
            <h2>${ data.user }</h2>
            ${ data.text }
          </div>
        </div>
      `)  
      $('#id_text').val('');
      $('.not-comment').hide();
    } 
  });

});