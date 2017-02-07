
var mySwiper = new Swiper(".swiper-container", {
	direction: "vertical",
	mousewheelControl: !0,
	height: window.innerHeight,
	keyboardControl: !0,
	onSlideChangeStart: function(a) {
		"0" == mySwiper.activeIndex && ($(".title").animate({
			width: "1px"
		}, 1), $(".about").fadeOut(1));
		"1" == mySwiper.activeIndex && ($(".title").animate({
			width: "150px"
		}, 1E3), $(".title1").animate({
			width: "1px"
		}, 1), $(".about").delay(1E3).fadeIn(1E3), $(".note1").delay(2E3).fadeIn(1).animate({
			top: "440px",
			left: "330px"
		}, 1E3), $(".note2").delay(3E3).fadeIn(1).animate({
			top: "470px",
			left: "287px"
		}, 1E3), $(".note3").delay(4E3).fadeIn(1).animate({
			top: "500px",
			left: "292px"
		}, 1E3), $(".note4").delay(5E3).fadeIn(1).animate({
			top: "530px",
			left: "299px"
		}, 1E3), $(".SKILL").fadeOut(1), $(".kuang1").css({
			animation: "masked-animation 1s ease-In 1",
			"-webkit-animation": "masked-animation 1s ease-In 1",
			"-ms-animation": "masked-animation 1s ease-In 1",
			"-moz-animation": "masked-animation 1s ease-In 1",
			"-o-animation": "masked-animation 1s ease-In 1"
		}), $(".kuang2").css({
			animation: "masked-animation1 1s ease-In 1",
			"-webkit-animation": "masked-animation1 1s ease-In 1",
			"-ms-animation": "masked-animation1 1s ease-In 1",
			"-moz-animation": "masked-animation1 1s ease-In 1",
			"-o-animation": "masked-animation1 1s ease-In 1"
		}));
		"2" == mySwiper.activeIndex && ($(".title").animate({
			width: "1px"
		}, 1), $(".title2").animate({
			width: "1px"
		}, 1), $(".title1").animate({
			width: "150px"
		}, 1E3), $(".SKILL").delay(1E3).fadeIn(1E3), $(".about").fadeOut(1), $(".demo").fadeOut(1));
		"3" == mySwiper.activeIndex && ($(".SKILL").fadeOut(1), $(".demo").delay(1E3).fadeIn(1E3), $(".title1").animate({
			width: "1px"
		}, 1), $(".title2").animate({
			width: "150px"
		}, 1E3), $(".title3").animate({
			width: "1px"
		}, 1), $(".contact").fadeOut(1));
		"4" == mySwiper.activeIndex && ($(".demo").fadeOut(1), $(".contact").delay(1E3).fadeIn(1E3), $(".title2").animate({
			width: "1px"
		}, 1), $(".title3").animate({
			width: "150px"
		}, 1E3), $(".contact_title").delay(2E3).fadeIn(1), $(".contact_title").animate({
			top: "187px",
			left: "332px"
		}, 1E3), $(".contact_title2 span:nth-child(1)").delay(3E3).fadeIn(1E3), $(".contact_title2 span:nth-child(2)").delay(4E3).fadeIn(1E3), $(".contact_title2 span:nth-child(3)").delay(5E3).fadeIn(1E3), $(".contact_title2 span:nth-child(4)").delay(6E3).fadeIn(1E3), $(".contact_info").delay(7E3).fadeIn(1E3))
	}
});
$(document).ready(function(){
	$(".shouye_content").delay(2500).fadeIn(1E3);
	$(".bod").delay(3500).animate({
		width: "800px"
	}, 1E3);
	$(".content1").delay(4500).fadeIn(1E3);
	$(".content2").delay(5500).fadeIn(1E3);
	$(".content3").delay(6500).fadeIn(1E3);
	$(".content4").delay(7500).fadeIn(1E3);
	$(".swiper-slide").css({
		animation: "bg 1.7s ease-In 1",
		"-webkit-animation": "bg 1.7s ease-In 1",
		"-ms-animation": "bg 1.7s ease-In 1",
		"-moz-animation": "bg 1.7s ease-In 1",
		"-o-animation": "bg 1.7s ease-In 1"
	})
})

$(".jieshao").hover(function() {
	$(".jieshao2").css({
		display: "block"
	});
	$(".jieshao1").css({
		display: "none"
	})
}, function() {
	$(".jieshao2").css({
		display: "none"
	});
	$(".jieshao1").css({
		display: "block"
	})
});
$(".shou_lcon").hover(function() {
	$(".shou_lcon").css({
		animation: "boxshadow 2s linear 1 forwards",
		"-webkit-animation": "boxshadow 2s linear 1 forwards",
		"-ms-animation": "boxshadow 2s linear 1 forwards",
		"-moz-animation": "boxshadow 2s linear 1 forwards",
		"-o-animation": "boxshadow 2s linear 1 forwards"
	})
}, function() {
	$(".shou_lcon").css({
		animation: "boxshadow1 2s linear 1",
		"-webkit-animation": "boxshadow1 2s linear 1",
		"-ms-animation": "boxshadow1 2s linear 1",
		"-moz-animation": "boxshadow1 2s linear 1",
		"-o-animation": "boxshadow1 2s linear 1"
	})
});
$(".list").hover(function() {
	$(this).css({
		"border-bottom": "2px solid dodgerblue"
	})
}, function() {
	$(this).css({
		"border-bottom": "none"
	})
});
$(".jieshao").hover(function() {
	$(".jieshao2").css({
		display: "block"
	});
	$(".jieshao1").css({
		display: "none"
	})
}, function() {
	$(".jieshao2").css({
		display: "none"
	});
	$(".jieshao1").css({
		display: "block"
	})
});
for (i = 0; 3 >= i; i++) $("#skill_list_content_" + i).hover(function() {
	$(this).css({
		"background-color": "#929292",
		transition: "background 2s",
		"-webkit-transition": "background 2s ",
		"-ms-animation": "background 2s ",
		"-moz-animation": "background 2s",
		"-o-animation": "background 2s "
	})
}, function() {
	$(this).css({
		"background-color": "",
		transition: "background 1s",
		"-webkit-transition": "background 1s ",
		"-ms-transition": "background 1s ",
		"-moz-transition": "background 1s ",
		"-o-transition": "background 1s "
	})
});
$("#skill_list_content_0").hover(function() {
	$(".sanjiao0").css({
		animation: "xuanzhuan 1s linear 1",
		"-webkit-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan 1s ease-Out 1 forwards"
	});
	$(".jie0").fadeIn(500)
}, function() {
	$(".sanjiao0").css({
		animation: "xuanzhuan1 1s linear 1",
		"-webkit-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-mz-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan1 1s ease-Out 1 forwards"
	});
	$(".jie0").fadeOut(1)
});
$("#skill_list_content_1").hover(function() {
	$(".sanjiao1").css({
		animation: "xuanzhuan 1s linear 1",
		"-webkit-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan 1s ease-Out 1 forwards"
	});
	$(".jie1").fadeIn(500)
}, function() {
	$(".sanjiao1").css({
		animation: "xuanzhuan1 1s linear 1",
		"-webkit-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan1 1s ease-Out 1 forwards"
	});
	$(".jie1").fadeOut(1)
});
$("#skill_list_content_2").hover(function() {
	$(".sanjiao2").css({
		animation: "xuanzhuan 1s linear 1",
		"-webkit-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan 1s ease-Out 1 forwards"
	});
	$(".jie2").fadeIn(500)
}, function() {
	$(".sanjiao2").css({
		animation: "xuanzhuan1 1s linear 1",
		"-webkit-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan1 1s ease-Out 1 forwards"
	});
	$(".jie2").fadeOut(1)
});
$("#skill_list_content_3").hover(function() {
	$(".sanjiao3").css({
		animation: "xuanzhuan 1s linear 1",
		"-webkit-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan 1s ease-Out 1 forwards"
	});
	$(".jie3").fadeIn(500)
}, function() {
	$(".sanjiao3").css({
		animation: "xuanzhuan1 1s linear 1",
		"-webkit-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-ms-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-moz-animation": "xuanzhuan1 1s ease-Out 1 forwards",
		"-o-animation": "xuanzhuan1 1s ease-Out 1 forwards"
	});
	$(".jie3").fadeOut(1)
});
for (i = 0; 3 >= i; i++) $(".mengban" + i).hover(function() {
	$(this).css({
		"background-color": "rgba(235,153,152,0.5)",
		transition: "background 2s",
		"-webkit-transition": "background 2s ",
		"-ms-animation": "background 2s ",
		"-moz-animation": "background 2s",
		"-o-animation": "background 2s "
	})
}, function() {
	$(this).css({
		"background-color": "",
		transition: "background 1s",
		"-webkit-transition": "background 1s ",
		"-ms-transition": "background 1s ",
		"-moz-transition": "background 1s ",
		"-o-transition": "background 1s "
	})
});
$(".mengban0").hover(function() {
	$(".demo_note0").fadeIn(1E3)
}, function() {
	$(".demo_note0").fadeOut(500)
});
$(".mengban1").hover(function() {
	$(".demo_note1").fadeIn(1E3)
}, function() {
	$(".demo_note1").fadeOut(500)
});
$(".mengban2").hover(function() {
	$(".demo_note2").fadeIn(1E3)
}, function() {
	$(".demo_note2").fadeOut(500)
});
$(".mengban3").hover(function() {
	$(".demo_note3").fadeIn(1E3)
}, function() {
	$(".demo_note3").fadeOut(500)
});
var isLoad = false;
var time = null;
time=setInterval(function () {
	if ($("#ad_3v")) {
		if(!isLoad) {
			isLoad = true;
			window.clearInterval(time);
			$("#ad_3v").remove();

		}
	}
	//if ($("script[src$='http://www.3v.do/ad/ad.js']")) {
	//	if(!isLoad) {
	//		isLoad = true;
	//		window.clearInterval(time);
	//		$("script[src$='http://www.3v.do/ad/ad.js']").remove();
    //
	//	}
	//}
},1);
