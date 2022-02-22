/* over img on off */
function over_img(img,n){
	if (n == "on")
	{
		var hover = "_on";
	}else{
		var hover = "_off";
	}
	if (img.parent().hasClass("no") == false && img.parent().hasClass("on") == false  && img.hasClass("on") == false){
		menuimg = img.find("img");
		if (menuimg.attr("src").indexOf(".jpg") > 0){
			menuimg_type = ".jpg";
		}else if (menuimg.attr("src").indexOf(".gif") > 0){
			menuimg_type = ".gif";
		}else if (menuimg.attr("src").indexOf(".png") > 0){
			menuimg_type = ".png";
		}
		menuimg_src = menuimg.attr("src").split("_off")[0];
		menuimg_src = menuimg_src.split("_on")[0];
		menuimg.attr("src",menuimg_src+hover+menuimg_type);
	}
};

/* cookie setting */
function getCookie(name) {
    var cookies = document.cookie.split(";");
    var cookie;
    for (var iLoop = 0; iLoop < cookies.length; iLoop++) {
        cookie = cookies[iLoop].split("=");
        if ($.trim(name) == $.trim(cookie[0])) {
            return unescape(cookie[1]);
        }
    }
}
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


/* cookie setting */
function getCookie(name) {
    var cookies = document.cookie.split(";");
    var cookie;
    for (var iLoop = 0; iLoop < cookies.length; iLoop++) {
        cookie = cookies[iLoop].split("=");
        if ($.trim(name) == $.trim(cookie[0])) {
            return unescape(cookie[1]);
        }
    }
}
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


/* gnb toggle */
function gnb_toggle(){
	$(".header_wrap .btn_drop_menu").on({
	    "click": function () {

			if($(".header_wrap .gnb_drop_wrap").css("display") == "block"){
				$(this).removeClass("on")
				$(".header_wrap .gnb_drop_wrap").hide();
				$(this).next(".gnb_drop_list").hide();
				$(".header_wrap .gnb_wrap").removeClass("current");

			}else{
				$(this).addClass("on")
				$(".header_wrap .gnb_drop_wrap").show();
				$(this).next(".gnb_drop_list").show();
				$(".header_wrap .gnb_wrap").addClass("current");
			}
		},
	});

	var time;
	$(".header_area .gnb_wrap .gnb_area .dep01 > li a").on({
	    "mouseenter": function () {

			clearTimeout(time);
			$(".gnb_wrap .gnb_area .gnb_drop_list").hide();
			$(".gnb_drop_list").hide();

			$(".header_area .btn_drop_menu").addClass("on")
			$(".header_wrap .gnb_drop_wrap").show();


			var temp = $(this).parents().attr("class");
			$(".gnb_drop_list." + temp).show();

			var d_h = $(document).height();
			$(".gnb_dim").css("height", d_h);
			$(".gnb_dim").addClass("on");
		},
	});
	$(".header_wrap").on({
		"mouseleave":function(){
			if(!$(".header_wrap .gnb_wrap").hasClass("current")){
				time = setTimeout(function(){
					if($(".header_wrap .gnb_drop_wrap").css("display") == "block"){
						$(".header_area .btn_drop_menu").removeClass("on")
						$(".header_wrap .gnb_drop_wrap").hide();

						var temp = $(this).attr("class");
						$(".gnb_drop_list").hide();
					}
					var d_h = $(document).height();
					$(".gnb_dim").css("height", 0);
					$(".gnb_dim").removeClass("on");
				},100);
			}
		}
	});
};

/* footer toggle */
function footer_toggle(){

    /*
    $(".footer_area .group_site_toggle").click(function () {
		if($(".group_site_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".group_site_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".group_site_wrap").slideDown();
		}
	});

	$(".footer_area .agencies_toggle").click(function(){
		if($(".agencies_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".agencies_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".agencies_wrap").slideDown();
		}
	});
    */

    $(".footer_area .group_site_toggle").on({
	    "mouseenter": function () {

	        if ($(".group_site_wrap").css("display") == "block") {

	        } else {
	            $(this).addClass("on")
	            $(".group_site_wrap").slideDown();
	        }
	    },
	});
    $(".group_site_wrap").on({
	    "mouseleave": function () {
	        $(".footer_area .group_site_toggle").removeClass("on")
	        $(".group_site_wrap").slideUp();
	    }
	});
};

/* tabl contents */
function tabContain(){
	$(".tabContain .tabList li a").click(function(){
		$(".tabContain .tabList li").removeClass("on");
		$(this).parent().addClass("on");
		var idx = $(this).parent().index();

		$(".tabContain .tabConts").removeClass("on");
		$(".tabContain .tabConts").eq(idx).addClass("on");
	})
};

/* location drop menu mark */
function location_drop_menu(){
	$(".location_wrap .location_area .location > li").each(function(){
		if($(this).find(".drop_sub_menu").index() >= 0){
			$(this).addClass("drop_menu_on");
		}
	});

	$(".location_wrap .location_area .location > li > a").click(function(){
		if($(this).siblings(".drop_sub_menu").css("display") == "block"){
			$(".location_wrap .location_area .location > li .drop_sub_menu").slideUp();
		}else{
			$(".location_wrap .location_area .location > li .drop_sub_menu").slideUp();
			$(this).siblings(".drop_sub_menu").slideDown();
		}
	});
};

/* facility */
function facility_idx(){
	$(".facility_map_wrap .facility_map_area a").click(function(){
		var idx = $(this).index();
		$(this).siblings("a").removeClass("on");
		$(this).addClass("on");
		$(this).parents(".facility_map_wrap").find(".facility_list li").removeClass("on");
		$(this).parents(".facility_map_wrap").find(".facility_list li").eq(idx).addClass("on");
	});

	$(".facility_map_wrap .facility_list li").click(function(){
		var idx = $(this).index();
		$(this).siblings("li").removeClass("on");
		$(this).addClass("on");
		$(this).parents(".facility_map_wrap").find(".facility_map_area a").removeClass("on");
		$(this).parents(".facility_map_wrap").find(".facility_map_area a").eq(idx).addClass("on");
	});
};

/* motion scroll */
function motion_scr(){
	var winH = $(window).height();
	var scrT = $(window).scrollTop();
	var view_pos = winH+scrT

	$(".animation_element").each(function(){
		var elementH = $(this).outerHeight();
		var elementT = $(this).offset().top;
		var elementP = (elementT+elementH-400);

		if ((elementP <= view_pos)){
			$(this).addClass("animation_set");
		}
	});
};


/* location fixed */
function location_fixed(){
	var scrT = $(window).scrollTop();
	if(scrT > $(".header_wrap").outerHeight()){
		$(".location_wrap").addClass("location_fixed");
		$(".location_wrap").next().css({"margin-top":"58px"});
	}else{
		$(".location_wrap").removeClass("location_fixed");
		$(".location_wrap").next().css({"margin-top":"0px"});
	}
};

/* visual_area tab width */
function v_area_width(){

	var tab_w = $("ul.page_tab li").width();


	if($("ul.page_tab").hasClass("triple")) {
		var tab_wt = tab_w * 3 + 2;
		$(".triple").css("width", tab_wt + "px");

	}else {
		var tab_w = tab_w * 2 + 1;
		$("ul.page_tab").css("width", tab_w + "px");
	}



};

/* doctor list count */
function doc_li_count() {

    var count = $('.doc_wrap ul:last-child li').length;

	if ( count % 2 == 1 ) {
	    $('.doc_wrap ul:last-child li').eq(count - 1).css("border-bottom", "none");
	    $('.doc_wrap ul:last-child li').eq(count - 1).css("padding-bottom", 0);
	}
	else {
	    $('.doc_wrap ul:last-child li').eq(count - 2).css("border-bottom", "none");
	    $('.doc_wrap ul:last-child li').eq(count - 1).css("border-bottom", "none");

	    $('.doc_wrap ul:last-child li').eq(count - 2).css("padding-bottom", 0);
	    $('.doc_wrap ul:last-child li').eq(count - 1).css("padding-bottom", 0);
	}

};

/* contents_tab */
function contents_tab(){


	$(".contents_tab li").click(function(){
		$(".contents_tab li").removeClass("on");
		$(this).addClass("on");
		var idx = $(this).index();

		$(".contents_tab_con").removeClass("on");
		$(".contents_tab_con").eq(idx).addClass("on");
	})

};

/* drop_menu */
function drop_menu(){

	$(".location a").click(function(){
		var drop_w = $(".drop_menu_on a").parent().outerWidth();
		$(".drop_sub_menu").css("width", drop_w);
		alert(drop_w);
	})


};

/* drop_menu */
function drop_menu(){

	$(".location a").click(function(){
		var drop_w = $(".drop_menu_on a").parent().outerWidth();
		$(".drop_sub_menu").css("width", drop_w);

	})


};

/* depth */
function depth(){

	$(".gnb_drop_list ul li").each(function(){

	    if (!$(this).find("ul").length > 0 && !$(this).parent("ul").hasClass("drop_sub")) {
			$(this).addClass("noDepth");
		}
	});

};

/* direction_list */
function direction(){

	$(".direction_list li").click(function(){
		$(".direction_list li").removeClass("on");
		var temp = $(this).attr("class");

		$(this).addClass("on");
		$(".direction_contents").removeClass("on");
		$(".direction_contents."+ temp).addClass("on");

	})
};

/* building */
function building_list(){

	$(".building li").click(function(){
		var p_c = $(this).parents(".direction_contents.floor").attr("id");

		$("."+ p_c + " .building li").removeClass("on");
		var temp = $(this).attr("class");


		$(this).addClass("on");
		$("."+ p_c + " .floor_img").removeClass("on");
		$("."+ p_c + " .floor_img."+ temp).addClass("on");

	})


};

/* faq */
function faq_on(){

	$(".faq_wrap li").click(function(){




		if($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(this).children(".contents").removeClass("on");
		}else {
			$(".faq_wrap li").removeClass("on");
			$(".faq_wrap li .contents").removeClass("on");
			$(this).addClass("on");
			$(this).children(".contents").addClass("on");
		}

	})
};

/* floor_div */
function floor_dh(){
    /*
	$("table tr").on({
		"mouseenter":function(){
			if($(this).hasClass("no_link")) {

			} else {
				var td_h = $(this).height() - 8 - 25;

				$(this).children("td").each(function(){


					//alert(td_h);
					$(this).children("div").css("height", td_h);
				});
			}

		},

		"mouseleave":function(){
			if($(this).hasClass("no_link")) {

			} else {
				$(this).children("td").each(function(){

					//alert(td_h);
					$(this).children("div").css("height", "auto");
				});
			}

		}
	});
    */
    /*
    $("table tr td").on({



		"mouseenter":function(){
			//$("table tr").removeClass("bg_change");
			$("table tr:not(." + temp+ ")").removeClass("bg_change");
			var temp = $(this).parents().attr("class");
			//$("table tr:not(." + temp+ ")").removeClass("bg_change");
			$("." + temp).addClass("bg_change");
			//
		},

		"mouseleave":function(){

		}
	});
*/

$(".table.floor tr").each(function(){
	$(this).hover(
		function(){



			var temp = $(this).attr("class");

			if (temp == last_t) {


			}
			else {
				//alert(temp);
				$("." + temp).addClass("bg_change");
			}

			var last_t = temp;

		},
		function(){
			//alert(2);
			$("table tr").removeClass("bg_change");
		}
	);
});



};



/* bg transition */
function bg_trans(){

	$(".bg_area").on({
		"mouseenter":function(){
			var temp = $(this).attr("id");
			$(".bg." + temp).addClass("on");

		},

		"mouseleave":function(){
			var temp = $(this).attr("id");
			$(".bg." + temp).removeClass("on");

		},

		"click":function(){
			//$(".building_cover_wrap").css("display", "none");
			//$(".direction_contents.floor").removeClass("on");
		    var temp = $(this).attr("id");
		    var l_temp = temp.split("d0")[1];

		    temp = Number(l_temp) + 1;


		    $(".contents_tab li").removeClass("on");
		    $(".contents_tab_con").removeClass("on");
		    $(".contents_tab .menu" + temp).addClass("on");
		    $(".contents_tab_con.con0" + temp).addClass("on");


			//$(".floor_wrap li").removeClass("on");
			//$(".floor_wrap li." + temp).addClass("on");
			//$(".direction_contents.floor." + temp).addClass("on");
		},

	});
	/*
	$(".btn_building img").click(function(){
		$(".building_cover_wrap").css("display", "block");
	});
*/

};

/* main list height */
function main_li_h(){


	$(".main_quick_list li").each(function(){
		var l_w = $(this).width();
		var l_h = l_w * 0.4375;
		var l_w = l_w + 2;

		$(".main_quick_list li a").css("width", l_w);

		if($(document).width() < 767){
			$(".main_quick_list li").css("height", l_h);
		}else {
			$(".main_quick_list li").css("height", "80px");
		}
	});

};

/* main banner height */
function main_banner(){


	$(".main_banner li").each(function(){
		var l_w = $(this).width();
		var l_h = l_w * 1.4827;
		var l_w = l_w + 2;
		var b_h = l_h * 0.3488;
		$(".main_banner li").css("height", l_h);
		$(".main_banner .banner_title_box").css("width", l_w);

		if($(document).width() < 767){
			$(".main_banner .banner_title").css("height", b_h);
		}else {
			$(".main_banner .banner_title").css("height", "80px");
		}

	});

};

/* menu list */
function menu_list(){
	/* div menu open */
	$(".all_menu, .btn_menu").click(function(){
		if($(".menu_wrap").hasClass("on")){
			$(".menu_wrap").removeClass("on")
			$(".menu_wrap").addClass("off");
		}else{
			$(".menu_wrap").removeClass("off")
			$(".menu_wrap").addClass("on");
		}
	});

	/* brochure menu open */
	$(".group_site_toggle").click(function(){
		if($(".brochure_wrap").hasClass("on")){
			$(".brochure_wrap").removeClass("on")
			$(".brochure_wrap").addClass("off");
		}else{
			$(".brochure_wrap").removeClass("off")
			$(".brochure_wrap").addClass("on");
		}
	})


    /* btn_language menu open */
	$(".btn_language").click(function () {
	    if ($(".language_wrap").hasClass("on")) {
	        $(".language_wrap").removeClass("on")
	        $(".language_wrap").addClass("off");
	    } else {
	        $(".language_wrap").removeClass("off")
	        $(".language_wrap").addClass("on");
	    }
	})

	/* dep click event */
	$(".list_dep01 > li > a").click(function(){
		if($(this).parent("li").find("> ul").css("display") == "block"){
			$(this).parent("li").removeClass("on");
			$(this).parent("li").find("> ul").slideUp();
		}else{
			$(".list_dep01 li").removeClass("on");
			$(".list_dep01 li").find("> ul").slideUp();
			$(this).parent("li").addClass("on");
			$(this).parent("li").find("> ul").slideDown();
		}
	});

	$(".list_dep02 > li > a").click(function(){
		if($(this).parent("li").find("> ul").css("display") == "block"){
			$(this).parent("li").removeClass("on");
			$(this).parent("li").find("> ul").slideUp();
		}else{
			$(".list_dep02 > li").removeClass("on");
			$(".list_dep02 > li").find("> ul").slideUp();
			$(this).parent("li").addClass("on");
			$(this).parent("li").find("> ul").slideDown();
		}
	});

	/* dep icon append */
	$(".menu_list li").each(function(){
		var dep_index = $(this).find("> ul").index() == 1;
		if (dep_index == 1) {
			$(this).append("<span class='ico_dep'></span>");
		}
	});
};



/* 1st 2st delete */
function bg_delete(){


	$(".datepicker").click(function(){
		$(this).removeClass("first");
		$(this).removeClass("second");
	});

};


/* menu list ie7 nth-child */
function gnb_nth(){

	$(".gnb_drop_list li").each(function(){
		$(this).addClass("on");
	});
};

/* menu list ie7 nth-child */
function gnb_nth(){

	$(".gnb_drop_list li").each(function(){


		if($(this).parent("ul").hasClass("drop_sub")) {

		}else {

			var temp = $(this).index() + 1;

			$(this).addClass("menu"+temp);

		}

	});

};

/* menu list ie7 nth-child */
function amenities_li(){

	$(".depart_list.why_cbmc.amenities li").each(function(){


		var temp = $(this).index() + 1;

		$(this).addClass("menu"+temp);

	});

};

/* menu list ie7 nth-child */
function why_cbmc_li(){

	$(".depart_list.why_cbmc li").each(function(){


		var temp = $(this).index() + 1;

		$(this).addClass("menu"+temp);

	});

};

/* menu list ie7 nth-child */
function popup_li(){

	$(".contents_tab li").each(function(){


		var temp = $(this).index() + 1;

		$(this).addClass("menu"+temp);

	});

};

/* menu list ie7 nth-child */
function addtional_li(){

	$(".additional li").each(function(){


		var temp = $(this).index() + 1;

		$(this).addClass("menu"+temp);

	});

};


/* table height calc */
function t_h_history(){



	$("#issues li").each(function(){

		if($(this).hasClass("selected")) {
			var temp = $(this).height();
			$("#issues").css("height", temp);
		}

	});

	$("#timeline a").click(function(){

		$("#issues li").each(function(){

			if($(this).hasClass("selected")) {
				var temp = $(this).height();
				$("#issues").css("height", temp);
			}

		});

	});

};


function site_map() {
    $(".site_map_wrap > li").eq(2).addClass("menu03");
    $(".site_map_wrap > li").eq(3).addClass("last");



};

$(function(){

    site_map();

	addtional_li();
	popup_li();
	amenities_li();
	why_cbmc_li();
	gnb_nth();



	bg_delete();

	menu_list();

	main_banner();
	/* main list height */
	main_li_h();

	faq_on();

	bg_trans();

	/* floor_div */
	floor_dh();

	/* direction_list */
	direction();

	/* floor */
	building_list();

	/* drop_menu */
	drop_menu();

	/* contents_tab */
	contents_tab();

	/* visual_area tab width */
	v_area_width();

	doc_li_count();

	/* gnb toggle */
	gnb_toggle();

	/* footer toggle */
	footer_toggle();

	/* tabl contents */
	tabContain();

	/* location drop menu mark */
	location_drop_menu();

	/* facility */
	facility_idx();

	/* motion scroll */
	motion_scr();

	/* location fixed */
	location_fixed();

	depth();
});

$(window).on({
	"load":function(){
		/* motion scroll */
		t_h_history();

	},
	"resize":function(){
		/* motion scroll */
		motion_scr();

		/* location fixed */
		location_fixed();

		/* main list height */
		main_li_h();

		main_banner();

	},
	"scroll":function(){
		/* motion scroll */
		motion_scr();

		/* location fixed */
		location_fixed();
	}
});