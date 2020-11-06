function SliderBox1__init() {
    $('.slider-box-1 > .slick').slick({
      arrows:true,
      dots:true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover:false,
      slidesToShow: 1,    
      slidesToScroll: 1,
      customPaging: function(slick, index) {
        return '<div class="page-btn"></div>';
      }
    });
  }
  
  $(function() {
    SliderBox1__init();
  });
  
  function SliderBox2__init() {
    $('.slider-box-2 > .slick-2').slick({
      dots:true,
      autoplay: true,
      pauseOnHover:false,
      slidesToShow: 5,
      slidesToScroll: 1,
          centerMode:true,
      centerPadding:0,
      arrows:true
    });
  }
  
  SliderBox2__init();