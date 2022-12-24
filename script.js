$('.carrossel').slick({
  centerPadding: '60px',
  slidesToShow: 1,
  arrows: true,
  dots: true,
  asNavFor: '.legenda',
  adaptiveHeight: true,
});

$('.legenda').slick({
  centerPadding: '60px',
  slidesToShow: 1,
  arrows: false,
  dots: false,
  draggable: false,
  asNavFor: '.carrossel',
  fade: true,
  centerMode: true,
  adaptiveHeight: true,
  fade: true,
  cssEase: 'linear'
});
