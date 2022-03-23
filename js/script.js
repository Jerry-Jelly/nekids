$(document).ready(function(){

    // 모달창
    $('.modal li:last-child').click(function(){
        $('.modal').fadeOut();
    });

    // 어사이드, 아웃트로
    $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    
        if(sPos>=700){
            $('.aside01').stop().animate({'margin-left':'0px'},500);
            $('.aside02').stop().animate({'opacity':'1'},500);
        }else{
            $('.aside01').stop().animate({'margin-left':'-170px'},500);
            $('.aside02').stop().animate({'opacity':'0'},500);
        }
        if(sPos>=3200){
            $('.outtro > ul > li > img').stop().animate({'top':'50%'},700);
        }else{
            $('.outtro > ul > li > img').stop().animate({'top':'150%'},700);
        }
    
    });

    // 배너
    $('.banner').hide();
    $('.banner').slideDown();
    $('.banner .fa-x').click(function(){
        $('.banner').slideUp();
    });

    
    
    // 탑헤더
    $('.sub01').hide();
    $('.gnb01 li').mouseenter(function(){
        $(this).find('.sub01').stop().slideDown();
    });
    $('.gnb01 li').mouseleave(function(){
        $(this).find('.sub01').stop().slideUp();
    });



    // 바텀헤더
    $('.sub02').hide();
    $('.gnb02 li').mouseenter(function(){
        $(this).find('.sub02').stop().slideDown();
    });
    $('.gnb02 li').mouseleave(function(){
        $(this).find('.sub02').stop().slideUp();
    });



    // 인트로
    $('.intro_img > li > img:nth-child(3)').animate({'opacity':'1'},1500);



    // 좌우로 움직이는 슬라이드
    $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
    $('.slide > ul').css('margin-left','-1920px');
    function moveSlide(){
        $('.slide > ul').animate({'margin-left':'-3840px'},1000,function(){
            $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
            $('.slide > ul').css('margin-left','-1920px');
    });
    }

  let Timer = setInterval(moveSlide, 8000);



    // 패밀리 사이트
    $('.family_sub').hide();
    $('.family').mouseenter(function(){
        $('.family_sub').stop().slideDown();
    });
    $('.family').mouseleave(function(){
        $('.family_sub').stop().slideUp();
    });

});