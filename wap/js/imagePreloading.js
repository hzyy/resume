/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-12-12
 * Time: 下午6:10
 * 图片的预加载
 * To change this template use File | Settings | File Templates.
 */
/**************
 * 预加载
 **************/
function _PreLoadImg(b, e) {
    var c = 0,
        a = {},
        d = 0;
    for (src in b) {
        d++;
    }
    for (src in b) {
        a[src] = new Image();
        a[src].onload = function() {
            if (++c >= d) {
                e(a)
            }
        };
        a[src].src = b[src];
    }
}
_PreLoadImg([
    'upload/page1_title1.png',
    'upload/page1_tu1.png',
    'upload/page2_message.png',
    'upload/page2_shan.png',
    'upload/page2_yang.png',
    'upload/page2_yun.png',
    'upload/page3_content.png',
    'upload/page3_shan.png',
    'upload/page3_title.png',
    'upload/page3_tu1.png',
    'upload/page4_title.png',
    'upload/page4_tu.png',
    'upload/page5_p1.png',
    'upload/page5_p2.png',
    'upload/page5_p11.png',
    'upload/page5_title.png',
    'upload/page5_title2.png',
    'upload/page5_wx.png'
    ],function(){
        setTimeout(function(){
          var loader = document.getElementById('loading'),
              container = document.getElementById('swiper-container');
          swiper.slideTo(0, 1000, false);
          document.body.removeChild(loader);
          container.style.display = 'block';
        },1000);
      });
var swiper = new Swiper('.swiper-container', {
		loop : false,
		direction : 'vertical',
    effect: 'cube',
		setWrapperSize :true,
		nextButton:'.swiper-button-next',
		cube: {
      slideShadows: false,
      shadow: false,
      shadowOffset: 0,
      shadowScale: 0
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper);
      if (swiper.activeIndex=='1') {
        $(".page1 img[swiper-animate-delay='1s']").attr("swiper-animate-delay","0s");
      }
    },
    onInit: function(swiper) {
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper, speed) {
      swiperAnimate(swiper);
    },
    onTransitionStart: function(swiper){
      c(swiper.activeIndex);
    }
});
function c(x){
		/*if(x==1 || x==20){
			$(".p0 .p0_1").addClass("fadeInDownBig");
			$(".p0 .p0_2").addClass("fadeInUpBig");
			}else{
			$(".p0 .p0_1").removeClass("fadeInDownBig");
			$(".p0 .p0_2").removeClass("fadeInUpBig");
			for(var i=0;i<21;i++){
			var cname=x-1;
			if(x==0 || x==19){cname=18;}
			  if(cname==i){
			  $(".p"+cname+" .p"+cname+"_1").addClass("fadeInRight");
			  $(".p"+cname+" .p"+cname+"_2").addClass("fadeInLeft");
			  }else{
				 $(".p"+i+" .p"+i+"_1").removeClass("fadeInRight");
			     $(".p"+i+" .p"+i+"_2").removeClass("fadeInLeft");  
				  }
			}
				
		}*/
		}
$(".music").click(function(){
        if($(".icon-music").attr("num") == "1"){
            $(".icon-music").removeClass("open");
            $(".icon-music").attr("num","2")
            $(".music-span").css("display","none");
            document.getElementById("aud").pause();
            $(".music_text").html("关闭");
            $(".music_text").addClass("show_hide");
            setTimeout(musicHide,2000);
        }else{
            $(".icon-music").attr("num","1");
            $(".icon-music").addClass("open");
            $(".music-span").css("display","block");
            document.getElementById("aud").play();
            $(".music_text").html("开启");
            $(".music_text").addClass("show_hide");
            setTimeout(musicHide,2000);
        }
        function musicHide(){
            $(".music_text").removeClass("show_hide");
        }

	  });
