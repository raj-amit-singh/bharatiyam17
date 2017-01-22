$('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 8,
    slideWidth: 189,
    slideMargin: 0,
    ticker: true,
    speed: 30000
});

$('#trigger-btn').click(function() {
  setTimeout(function() {
    var height = $('#myModal.in .modal-header').css('height');
  console.log(height);
  $('#myModal .modal-body').css("marginTop", height);
  }, 200);
})