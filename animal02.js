$(document).ready(function(){

    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })

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
                left:'+=100%'
            });
            img_position--;
        }
    }
    function next() {
        if(img_count>img_position){
            imgs.animate({
                left:'-=100%'
            });
            img_position++;
        }
    }
    // 베너 슬라이드 설정 끝
});
    
$(document).ready(function(){
    // 입양대기목록 슬라이드 설정 시작
    var adp_imgs;
    var adp_img_count;
    var adp_img_position = 1;
    

    adp_imgs = $(".adopt_pic_wrap");
    adp_img_count = adp_imgs.children().length;

    //버튼을 클릭했을 대 함수 실행
    $('#ag_next').click(function () {
        next();
    });
    $('#ag_back').click(function (){        
        back();
    });

    function back() {
        if(1<adp_img_position){
            adp_imgs.animate({
                left:'+=230px'
            });
            adp_img_position--;
        }
    }
    function next() {
        if(adp_img_count>adp_img_position){
            adp_imgs.animate({
                left:'-=230px'
            });
            adp_img_position++;
        }
    }
    // 입양대기목록 슬라이드 설정 끝

})

/*Add class when scroll down*/
$(window).scroll(function(event){
    var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(".go-top").addClass("show");
  } else {
      $(".go-top").removeClass("show");
  }
});