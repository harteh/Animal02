
$(document).ready(function(){

    // 메뉴 호버 설정 시작
    $("#nav .nav_list .dep1").mouseover(function () {
        $(".dep2", this).slideDown();
    });
    $("#nav .nav_list .dep1").mouseleave(function () {
        $(".dep2", this).stop().slideUp();
    });
    // 메뉴 호버 설정 끝

    // 베너 슬라이드 설정 시작
    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".slide_wrap");
    img_count = imgs.children().length;
    
    //버튼을 클릭했을 대 함수 실행
    $('#back').click(function () {
        back();
    });
    $('#next').click(function (){
        next();
    });

    function back() {
        if(1<img_position){
            imgs.animate({
                left:'+=1200px'
            });
            img_position--;
        }
    }
    function next() {
        if(img_count>img_position){
            imgs.animate({
                left:'-=1200px'
            });
            img_position++;
        }
    }
    // 베너 슬라이드 설정 끝


    // 갤러리 베너 슬라이드 설정 시작
    var imgs;
    var img_count;
    var img_position = 1;
    

    imgs = $(".adopt_pic_wrap");
    img_count = imgs.children().length;

    //버튼을 클릭했을 대 함수 실행
    $('#ag_next').click(function () {
        next();
    });
    $('#ag_back').click(function (){        
        back();
    });

    function back() {
        if(1<img_position){
            imgs.animate({
                left:'+=230px'
            });
            img_position--;
        }
    }
    function next() {
        if(img_count>img_position){
            imgs.animate({
                left:'-=230px'
            });
            img_position++;
        }
    }
    // 갤러리 베너 슬라이드 설정 끝

    
});


/*Add class when scroll down*/
$(window).scroll(function(event){
    var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(".go-top").addClass("show");
  } else {
      $(".go-top").removeClass("show");
  }
});
/*Animation anchor*/
$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
});