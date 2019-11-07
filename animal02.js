// 메뉴 호버 설정 시작
$(document).ready(function(){


    $("#nav .nav_list .dep1").mouseover(function () {
        $(".dep2", this).slideDown();
    });
    $("#nav .nav_list .dep1").mouseleave(function () {
        $(".dep2", this).stop().slideUp();
    });

    
});
// 메뉴 호버 설정 끝

// 베너 슬라이드 설정 시작
$(document).ready(function(){
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

})
// 베너 슬라이드 설정 끝