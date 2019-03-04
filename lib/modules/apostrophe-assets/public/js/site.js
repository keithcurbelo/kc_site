var showingSlider = false;
var showMenu = false;

$(function () {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.

  console.log('Welcome to my site. I am a young developer constantly growing myself,\
 whether it be my skills or my character. I hope you like what you see\
 and hopefully we can work together =)');
  // console.log($("#html").attr('aria-valuenow'))
  // $('nav').hide()
});

$("a[href='#top']").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});

$("a[href='#about']").click(function () {
  // var pos =
  $("html, body").animate({
    scrollTop: $("#about").offset().top - 72
  }, "slow");
  return false;
});

$("a[href='#skills']").click(function () {
  $("html, body").animate({
    scrollTop: $("#skills").offset().top - 72
  }, "slow");
  return false;
});

$("a[href='#contact']").click(function () {
  $("html, body").animate({
    scrollTop: $("#contact").offset().top
  }, "slow");
  return false;
});

$(document).ready(function () {
  // $('nav').hide();
  $('#profile-pic').fadeIn(800,
    (function hidenext(jq) {
      // console.log('here', jq)
      jq.eq(0).animate({
        opacity: 1, //'toggle',
      }, 400, function () {
        (jq = jq.slice(1)).length && hidenext(jq);
      }).css("display", "block");
    })($('.media'))
  )

  $('#header-icons').animate({
      opacity: 1, //'toggle',
    }, 2000,
    (function hidenext(jq) {
      // console.log('here', jq)
      jq.eq(0).animate({
        opacity: 1, //'toggle',
      }, 400, function () {
        (jq = jq.slice(1)).length && hidenext(jq);
      }) //.css("display", "inline-block");
    })($('.media-icon'))
  )

  $('#header-box').animate({
      opacity: 1, //'toggle',
    }, 5000,
    (function hidenext(jq) {
      // console.log('here', jq)
      jq.eq(0).animate({
        opacity: 1, //'toggle',
      }, 800, function () {
        (jq = jq.slice(1)).length && hidenext(jq);
      }) //.css("display", "inline-block");
    })($('.header-info'))
  )

  // $('#profile-pic').animate({
  //     opacity: 'toggle',
  //     // height: 'toggle'
  //     // direction: 'up'
  //   }, 2900)
});
var prev = 0;

$(window).scroll(function () {
  // $("#skills").fadeOut('swing');

  var scroll = $(document).scrollTop()
  // console.log($(document).scrollTop())
  if (scroll > prev) {
    // if (!showMenu) {
    //   showMenu = true
    $('.nav').fadeIn(500).css('display', 'flex');
    // }
    // $('nav').fadeOut(2000);
    // if (scroll > prev) {
    // console.log('prev', prev);
    // var st = scroll //$(document).scroll();
    //   $('.nav').fadeOut(800) //.css('display', 'flex');
    // prev = st;
    // }
    // $('nav').fadeIn(800).css('display', 'flex');

    if ($(document).scrollTop() > 500) {
      if (!showingSlider) {
        showingSlider = true;
        $('.progress-bar').each(function () {
          // do something
          // console.log($(this).attr('aria-valuenow'))
          $(this).animate({
            'width': `${ $(this).attr('aria-valuenow')}%`,
          }, 1100);

        });

        $('.tool-icon') //.css('opacity', '1.0')
          .animate({
            opacity: 1.0,
            // left: '50px'
          }, 1000)
          .slideDown(1000)
        // console.log('showingSlider', showingSlider)
        // $(".tool-ico").show("slide", {
        //   direction: "down",
        // }, 2000);
      }
    }
  } else {
    showMenu = false;
    $('nav').fadeOut(700);
  }
  // else { 
  //   if (showingSlider) {
  //     showingSlider = false;
  //     // $('#skills').animate({
  //     //   top: -150
  //     // }, 500);
  //   }
  // }
});