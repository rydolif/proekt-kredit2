$(function(){
    var today = new Date();
    var my_year = today.getFullYear();
    var my_month = today.getMonth();
    var my_date = today.getDate()+1;
    var my_date2 = today.getDate()-1;
    var month_last = today.getMonth()-1;
    var month = today.getMonth()-1;
    var note = $('#note'),

    //ts = new Date(2016, 3, 25),
        ts = new Date(my_year, my_month, my_date);
    newYear = true;
    if((today.getMonth()) == 0 || 2 || 4 || 6 || 7 || 9 || 11){
        if((today.getDate()) > 30){
            my_date = 1
        }
    }
    if((today.getMonth()) == 3 || 5 || 8 || 10){
        if((today.getDate()) > 29){
            my_date = 1
        }
    }
    if((today.getMonth()) == 0){
        month = 'января';
        month_last = ' декабря'
    }
    if((today.getMonth()) == 1){
        month = 'февраля';
        month_last = ' января'
    }
    if((today.getMonth()) == 2){
        month = 'марта';
        month_last = ' февраля'
    }
    if((today.getMonth()) == 3){
        month = 'апреля';
        month_last = ' марта'
    }
    if((today.getMonth()) == 4){
        month = 'мая';
        month_last = ' апреля'
    }
    if((today.getMonth()) == 5){
        month = 'июня';
        month_last = ' мая'
    }
    if((today.getMonth()) == 6){
        month = 'июля';
        month_last = ' июня'
    }
    if((today.getMonth()) == 7){
        month = 'августа';
        month_last = ' июля'
    }
    if((today.getMonth()) == 8){
        month = 'сентября';
        month_last = ' августа'
    }
    if((today.getMonth()) == 9){
        month = 'октября';
        month_last = ' сентября'
    }
    if((today.getMonth()) == 10){
        month = 'ноября';
        month_last = ' октября'
    }
    if((today.getMonth()) == 11){
        month = 'декабря';
        month_last = ' ноября'
    }

    var dt = my_date-1;
    $('#countdown').countdown({

        timestamp : ts,

        callback  : function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";

            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";

            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";

            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){

                message += "left until the new year!";
                // document.getElementById("dt").innerHTML = dt;
                // document.getElementById("today").innerHTML = my_date2;
                // document.getElementById("month").innerHTML = month;
                if((my_date) == 1){
                    document.getElementById("month_last").innerHTML = month_last;
                }
            }

            else {

                message += "left to 10 days from now!";

            }

            note.html(message);

        }

    });

});

$(function() {
//-------------------------------slider---------------------------------------
   var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  })

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
        email: "Введите Email",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          email: jQuery('.form-' + index).find("input[name=email]").val(),
          date: jQuery('.form-' + index).find("input[name=date]").val(),
          inn: jQuery('.form-' + index).find("input[name=inn]").val(),
          citizenship: jQuery('.form-' + index).find("input[name=citizenship]").val(),
          addres: jQuery('.form-' + index).find("input[name=addres]").val(),
          addresfact: jQuery('.form-' + index).find("input[name=addresfact]").val(),
          passport: jQuery('.form-' + index).find("input[name=passport]").val(),
          seria: jQuery('.form-' + index).find("input[name=seria]").val(),
          kem: jQuery('.form-' + index).find("input[name=kem]").val(),
          education: jQuery('.form-' + index).find("input[name=education]").val(),
          specialty: jQuery('.form-' + index).find("input[name=specialty]").val(),
          desired: jQuery('.form-' + index).find("input[name=desired]").val(),
          salary: jQuery('.form-' + index).find("input[name=salary]").val(),
          employment: jQuery('.form-' + index).find("input[name=employment]").val(),
          children: jQuery('.form-' + index).find("input[name=children]").val(),
          changedthename: jQuery('.form-' + index).find("input[name=changedthename]").val(),
          comment: jQuery('.form-' + index).find("textarea[name=comment]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }


});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });
