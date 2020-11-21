function SliderBox__init() {
    var pageBtnHover = false;
    
    $('.slider-box .pages > div').mouseenter(function() {
      pageBtnHover = true;
      
      var $this = $(this);
      var $slider = $this.closest('.slider-box');
      
      $this.siblings('.active').removeClass('active');
      $this.addClass('active');
  
      var index = $this.index();
  
      $slider.find('.slides > div.active').removeClass('active');
      $slider.find('.slides > div').eq(index).addClass('active');
    });
    
    $('.slider-box .pages > div').mouseleave(function() {
      pageBtnHover = false;
    });
    
    setInterval(function() {
      if ( pageBtnHover ) {
        return;
      }
      
      var $postBtn = $('.slider-box .pages > .active').next();
      
      if ( $postBtn.length == 0 ) {
        $postBtn = $('.slider-box .pages > :first-child');
      }
      
      $postBtn.mouseenter();
      pageBtnHover = false;
    }, 5500);
  }
  
  SliderBox__init();
  
  console.clear();
  var $window = $(window);
  
  function TopBar__init() {
    var $topBar = $('.top-bar');
    
    $(window).scroll(function() {
      var scrollTop = $window.scrollTop();
      
      console.log("scrollTop : " + scrollTop);
      
      if ( scrollTop > 0 ) {
        $topBar.addClass('active');
      }
      else {
        $topBar.removeClass('active');
      }
    });
  }
  
  TopBar__init();
  
  /* 발견되면 활성화시키는 라이브러리 시작 */
  function ActiveOnVisible__init() {
    $('.active-on-visible').each(function(index, node) {
      var $node = $(node);
  
      var onFuncName = $node.attr('data-active-on-visible-on-func-name');
      var offFuncName = $node.attr('data-active-on-visible-off-func-name');
  
      $node.data('data-active-on-visible-on-func-name', onFuncName);
      $node.data('data-active-on-visible-off-func-name', offFuncName);
    });
  
    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();
  
    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__initOffset() {
    var windowHeight = $(window).height();
  
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.offset().top;
  
      var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
      var translateX = matrix[12] || matrix[4];
      var translateY = matrix[13] || matrix[5];
  
      if ( translateY ) {
        offsetTop -= translateY;
      }
  
      $node.attr('data-active-on-visible-offsetTop', offsetTop);
      $node.data('data-active-on-visible-offsetTop', offsetTop);
  
      if ( !$node.attr('data-active-on-visible-diff-y') ) {
        $node.attr('data-active-on-visible-diff-y', '0');
      }
  
      if ( !$node.attr('data-active-on-visible-delay') ) {
        $node.attr('data-active-on-visible-delay', '0');
      }
  
      var diffY = $node.attr('data-active-on-visible-diff-y');
      var delay = $node.attr('data-active-on-visible-delay');
  
      if ( diffY.substr(-2, 2) == 'vh' ) {
        diffY = parseInt(diffY);
  
        diffY = windowHeight * (diffY / 100);
      }
      else if ( diffY.substr(-1, 1) == '%' ) {
        diffY = parseInt(diffY);
  
        diffY = $node.height() * (diffY / 100);
      }
      else {
        diffY = parseInt(diffY);
      }
  
      $node.attr('data-active-on-visible-diff-y-real', diffY);
      $node.data('data-active-on-visible-diff-y', diffY);
      $node.data('data-active-on-visible-delay', delay);
    });
  
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
      var delay = parseInt($node.data('data-active-on-visible-delay'));
  
      var onFuncName = $node.data('data-active-on-visible-on-func-name');
      var offFuncName = $node.data('data-active-on-visible-off-func-name');
  
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var nodeHeight = $node.height();
  
      if ( scrollTop + windowHeight + diffY > offsetTop ) {
        setTimeout(function() {
          if ( $node.hasClass('active') == false ) {
            $node.addClass('active');
  
            if ( $node.hasClass('can-active-once') ) {
              $node.addClass('actived');
            }
  
            if ( window[onFuncName] ) {
              window[onFuncName]($node);
            }
          }
        }, delay);
      }
      else {
        if ( $node.hasClass('active') ) {
          $node.removeClass('active');
  
          if ( window[offFuncName] ) {
            window[offFuncName]($node);
          }
        }
      }
    });
  }
  
  $(function() {
    setTimeout(function() {
      ActiveOnVisible__init();
    }, 3000);
  })
  /* 발견되면 활성화시키는 라이브러리 끝 */
  
  /* 지도 */
  var container = document.getElementById('map'); 
  var options = { 
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 7 
  };
  
  var map = new kakao.maps.Map(container, options); 
  var geocoder = new kakao.maps.services.Geocoder();
  
  
  geocoder.addressSearch('제주특별자치도 제주시 애월읍 어림비로 478', function(result, status) {
  
  
       if (status === kakao.maps.services.Status.OK) {
  
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
  
          var marker = new kakao.maps.Marker({
              map: map,
              position: coords
          });
  
  
          var infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;font-size:0.7rem;">아르떼뮤지엄<br>TEL:064-799-9009</div>'
          });
          infowindow.open(map, marker);
  
  
          map.setCenter(coords);
      } 
  });    
  /* 지도 끝 */
  
      function fnMove(seq){
          var offset = $("#div" + seq).offset();
          $('html, body').animate({scrollTop : offset.top}, 400);
      }