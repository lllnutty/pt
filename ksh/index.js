function fnMove(seq){
    var offset = $("#div" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 2000);
}

gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
$(".section-group--stack-up").each(function (index, node) {
var $group = $(node);
var $section = $group.find(" > .section:not(:first-child)");

$section.each(function (index, node) {
  var $sectionOne = $(node);

  gsap.to($sectionOne, {
    ease: "none",
    scrollTrigger: {
      trigger: $sectionOne,
      start: "top 100%",
      end: "bottom 100%",
      pin: $sectionOne.prev(),
      pinSpacing: false,
      scrub: true,
    }
  });
});
});
}

SectionGroup__init();


function SliderBox1__init() {
$('.slider-box-1 > .slick').slick({
dots:false,
autoplay:true,    
autoplaySpeed:5000,
slidesToShow:1,
slidesToScroll:1,
centerMode:true,
centerPadding:0,
arrows:true,
prevArrow:".slider-box-1 > .arrows > .btn-arrow-left",
nextArrow:".slider-box-1 > .arrows > .btn-arrow-right"
});
}

SliderBox1__init();


<!--
function designPop1()
{
window.open("https://raw.githubusercontent.com/lllnutty/my-img/master/design/arte.png", "startpop", "top=20, left=200, width=1300, height=5386, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function designPop2()
{
window.open("https://raw.githubusercontent.com/lllnutty/my-img/master/design/converse.png", "startpop", "top=20, left=200, width=1400, height=4842, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function designPop3()
{
window.open("https://lllnutty.github.io/my-img/design/terarosa.png", "startpop", "top=20, left=200, width=1000, height=2200, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->
<!--
function openPop()
{
window.open("https://lllnutty.github.io/my-img/pt/uiux.png", "startpop", "top=20, left=200, width=1100, height=5300, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function openPop2()
{
window.open("https://raw.githubusercontent.com/lllnutty/my-img/master/pt/innisfree-pt.png", "startpop", "top=20, left=200, width=1320, height=820, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function openPop3()
{
window.open("https://raw.githubusercontent.com/lllnutty/my-img/master/pt/ticket-pt.png", "startpop", "top=20, left=200, width=1420, height=820, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function openPop4()
{
window.open("https://raw.githubusercontent.com/lllnutty/my-img/master/pt/poster-pt.png", "startpop", "top=20, left=200, width=900, height=1200, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function openPop5()
{
window.open("https://lllnutty.github.io/my-img/pt/terarosa-logo.png", "startpop", "top=20, left=200, width=1100, height=2200, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->

<!--
function openPop6()
{
window.open("https://lllnutty.github.io/my-img/pt/banner.png", "startpop", "top=20, left=200, width=1100, height=1600, scrollbars=yes, resizable=no ,status=no ,toolbar=no");
}
//-->