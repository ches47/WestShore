$(function(){
    
$('.header__slider').slick({
   infinite: true,
   fade: true,
   prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">  ', 
   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">  ', 
   asNavFor: '.slider-dotshead',
}); 

$('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
     responsive: [
    {
      breakpoint: 961,
      settings: "unslick"           
    },
  ]
});
   
$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">  ', 
   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">  ',
    asNavFor: '.slider-map',
    responsive: [
    {
      breakpoint: 1210,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        centerMode: true  
      }  
    }, 
      {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false  
      }  
    },  
  ]
    });

$('.slider-map').slick({
   slidesToShow: 8,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: '.surf-slider', 
   focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1103,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: true
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        centerMode: true  
      }
    },    
  ]
});    
    
$('.travel__slider, .shop__slider').slick({
   infinite: true,
   fade: true,
   prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">  ', 
   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">  ', 
});  
    
// + и - в разделе Sleep
$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    
});
    
// Атрибуты цены (ЦЕНЫ УСТАНАВЛИВАЕТ ЗАКАЗЧИК)     
$('.quantity-button').on('click', function(){
      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
});    
    
    
$('.surfboard-box__circle').on('click', function() {
  $(this).toggleClass('active')           
});   
    
$('.menu-btn').on('click', function(){
    $('.menu').toggleClass('active');
});
    
new WOW().init();    
       
});    