$("document").ready(function(){
    
    // 메뉴 호버 설정 시작
    $("#nav .nav_list .dep1").mouseover(function () {
        $(".dep2", this).slideDown();
    });
    $("#nav .nav_list .dep1").mouseleave(function () {
        $(".dep2", this).stop().slideUp();
    });
    // 메뉴 호버 설정 끝
    
    // 메인 슬라이드 설정 시작    
    var a = 0,
    leng = $(".slide .slide_wrap .box").length - 1,
    time = false;

    $(".slide img").click(function(e){       
        e.preventDefault();

        var i = $(".slide img").index(this);
        if(time == true){
            return;
        }

        setTimeout(function(){
            time = false;
        }, 1000)
        time = true;

        if( i == 0){
            // 왼쪽 화살표
            a--;
            if(a < 0) a = leng;
        }else{
            // 오른쪽 화살표
            a++;
            if(a > leng) a = 0;  //마지막 버튼 클릭 시 첫 장으로 스르륵 돌아감.
            // if(a > leng) a = leng;
        }
        console.log(a);

        $(".slide .slide_wrap").stop().animate({
            left: "-100" * a + "%"
        }, 1000)

    })  // 클릭이벤트 끝        // 메인 슬라이드 설정 끝

    // 입양대기 목록 슬라이드 설정 시작
    var b = 0,
        ado_leng = $(".adopt_pic .adopt_pic_wrap .box").length - 1, // .box 총 8개
        ado_btn = $(".gallery .adopt_txt .a_t_icon img");        

    ado_btn.click(function(e){
        e.preventDefault();

        var h = ado_btn.index(this);

        if(time == true){
            return;
        }
        setTimeout(function(){
            time = false;
        }, 1000)
        time = true;

        if (h == 0) {
            b--;
            if(b < 0) b = ado_leng;
        }else{
            b++;
            if(b > ado_leng) b = 0;
        }
        console.log(h);
        console.log(b);

        $(".adopt_pic .adopt_pic_wrap").stop().animate({
            left: "-25" * b + "%"
        }, 1000)

    })    // 입양대기 목록 슬라이드 설정 끝

    //  모바일 메뉴 수정중
    var menu_btn = $("header .h_bottom .menu-btn"),
        nav_wrap = $("header .h_bottom .nav_wrap"),
        nav_list = nav_wrap.find("#nav .nav_list_wrap .nav_list"),
        dep1 = nav_list.find(".dep1_txt");

    menu_btn.click(function(){
        nav_wrap.slideToggle(300)
    })
    // 모바일 메뉴 수정중

})