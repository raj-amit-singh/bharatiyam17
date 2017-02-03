// modal js

$('#trigger-btn').click(function() {
  setTimeout(function() {
    var height = $('#myModal.in .modal-header').css('height');
  console.log(height);
  $('#myModal .modal-body').css("marginTop", height);
  }, 200);
})

// logo slider js

$('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 8,
    slideWidth: 189,
    slideMargin: 0,
    ticker: true,
    speed: 70000
});


// Scrolling JS


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});




//HDOI

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}