$(function(){
	mainVisual();
	mainMenu();
	familySite();

	function mainVisual(){
		var $visual = $('.visual');
		var $visualD = $('.visual > div > div');
		var $visualW = 957/4;
		var sizeUp = 373;
		var sizeother =(957 - 373)/3;
		var easing = 'easeInCubic';
		var time = 500;


		$visualD.css('width',$visualW).on('mouseenter foucs',function(){
			$visualD.find('> a > span.pattern').show();
			$visualD.not($(this)).stop().animate({'width':sizeother},time,easing)
			.find('.on').stop().animate({'opacity':'0','top':'60px'})
			.next().delay(time).stop(true,false).animate({'opacity':'1'})
			.siblings('p').find('img:first').stop(true,true).fadeIn(time).next().stop(true,true).fadeOut();

			$(this).find('> a > span.pattern').hide()
			$(this).stop().animate({'width':sizeUp},time,easing)
			.find('h2:eq(1)').stop().animate({'opacity':'0'})
			.prev().delay(time).stop(true,false).animate({'opacity':'1','top':'70px'},time,easing)
			.siblings('p').find('img').fadeToggle(time);

			var idx = $(this).index();
			$visualD.each(function(e){
				$(this).find('> a > span.shadow').attr('class','shadow')
				if(e < idx){
					$(this).find('> a > span.shadow').addClass('right');
				}
				if(e > idx){
					$(this).find('> a > span.shadow').addClass('left');
				}
			});
		});
		$visual.on('mouseleave',function(){
			$visualD.find('> a > span.pattern').hide();
			$visualD.find('> a > span.shadow').attr('class','shadow');
			$visualD.stop().animate({'width':$visualW},time,easing)
			.find('.on').stop().animate({'opacity':'0','top':'60px'})
			.next().delay(time).stop(true,false).animate({'opacity':'1'})
			.siblings('p').find('img:first').stop(true,true).fadeIn(time).next().stop(true,true).fadeOut();
		});
	};

	function mainMenu(){
		var $menu = $('.mainMenu li');
		var easing = 'easeOutSine'
		var backgroundMotion = ['center ','center ','55% ','37% ','45% '];
		$menu.each(function(){
			$(this).find('>a').css({'background-position':backgroundMotion[$(this).index()] + 0 +'px'});
		});

		$menu.hover(function(){
			$(this).find('>a').stop().animate({'background-position':backgroundMotion[$(this).index()] + 5 +'px',color:'#2a77c5'},easing);
		},function(){
			$(this).find('>a').stop().animate({'background-position':backgroundMotion[$(this).index()] + 0 +'px',color:'#333'},easing);
		});
	};

	function familySite(){
		$('.familySite dt').click(function(){
			$(this).next().slideToggle();
		});
	};
});
function windowPopup(url, w, h, s, name){
	if (w==null) w = '100%';
	if (h==null) h = '100%';
	var l,t = '0';
	if (screen.width && screen.height) {
	l = (screen.width-w)/2;
	t = (screen.height-h)/2;
	}
	if (s==null) s = '0';
	if (name==null) name = '';
	window.open(url, name, 'width='+w+',height='+h+',left='+l+',top='+t+',resizable=0,menubar=0,toolbar=0,scrollbars='+s+',status=0');
	}
