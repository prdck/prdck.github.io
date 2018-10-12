$(function(){
	(function(){
	//headTop
		var hello,
		today=new Date(),
		hour=today.getHours();
		if(hour < 6){
			hello='凌晨好！'
		}else if(hour < 9){ 
			hello='早上好！'
		}else if(hour < 12){
			hello='上午好！'
		}else if(hour < 14){ 
			hello='中午好！'
		}else if(hour < 17){
			hello='下午好！'
		}else if(hour < 19){ 
			hello=' 傍晚好！'
		}else if(hour < 22){
			hello='晚上好！'
		}else{
			hello='夜深了！ '
		}
		$("#sayHello").html("嗨，"+hello);
		
		var x = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var MSIE=navigator.userAgent.indexOf("MSIE");
		if(MSIE != -1){ 
			year =(today.getFullYear());
		}else{
			year = (today.getYear()+1900);
		} 
		var tdate=`${year}年${(today.getMonth() + 1 )}月${today.getDate()}日
			${x[today.getDay()]}`;
		$("#localtime").html(tdate);
		//aside：北京时间
		function bjTime(){
			var today=new Date(),
			 minutes = today.getMinutes(),
			second =today.getSeconds();
			if( minutes<10){
				 minutes="0"+ minutes;
			}
			if(second<10){
				second="0"+second;
			}
			$(".myMessage .runningTime span").text(hour+":"+minutes+":"+second);
		}
		bjTime();
		setInterval(bjTime, 1000);
	})();
	//点击搜索
	$(".navSearch>a").on("click",function(){
		var inputValue=$(".navSearch>input").val();
		if($.trim(inputValue)!=""){
			var url="https://www.baidu.com/s?wd="+inputValue;
			$(this).attr("href",url);
		}else{
			$(this).attr("href","/blog/index.html");
		}	
	});
	//enter键
	$(".navSearch>input").on("keydown",function(event){
		if (event.keyCode == "13"){
			var inputValue=$(this).val();
			if($.trim(inputValue)!=""){
				window.open("https://www.baidu.com/s?wd="+inputValue,"_self")
			}else{
				window.open("/blog/index.html","_self");
			}	
		}
	});
	for(let i=2;i<$("nav li").length;i++){
		$("nav li").eq(i).hover(function(){
			$(this).css('background',"deepskyblue");
			$(this).find("a").css({"font-weight":"bold","color":"white"});
		},function(){
			$(this).css("background","");
			$(this).find("a").css({"font-weight":"","color":""});
		});
		$("nav li").eq(i).on("click",function(){
			for(let i=2;i<$("nav li").length;i++){
				$("nav li").eq(i).removeClass("navActive");
			}
			$(this).addClass("navActive");
		});
	};
	//轮播图
	(function() {
		var i = 0;
		var clone = $('.banner .img li').first().clone(); //克隆第一个li
		$('.banner .img').append(clone);
		var size = $('.banner .img li').length; //统计li的个数
		$('.btn-left').click(function(){
			i--;
			move();
		})
		$('.btn-right').click(function(){
			i++;
			move();
		});
		function move() {
			if(i == size) { //判断i是否为6；
				$('.banner .img').css('left', 0);
				i = 1;
			}
			if(i == -1) {
				$('.banner .img').css({
					left: -(size - 1) * 850
				})
				i = size - 2;
			}
			$('.img').stop().animate({
				left: -i * 850
			}, 500);	
		};
		
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		$('.banner').hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() {
				i++;
				move();
			}, 2000);
		});
	})();
	//无缝滚动
	(function() {
		var i = 0;
		var clone = $('.fluid .fluid-img li').clone(); //克隆第一个li
		$('.fluid .fluid-img').append(clone);
		var size = $('.fluid .fluid-img li').length; //统计li的个数
		$('.fuild-left').click(function(){
			i--;
			move();
		})
		$('.fuild-right').click(function(){
			i++;
			move();
		});
		function move() {
			if(i == 7) { 
				$('.fluid .fluid-img').css('left', 0);
				i = 1;
			}
			if(i == -1) {
				$('.fluid .fluid-img').css({
					left: -6* 240
				})
				i = 5;
			}
			$('.fluid .fluid-img').stop().animate({
				left: -i *240
			}, 500);	
		};	
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);
		$('.fluidBtn').hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() {
				i++;
				move();
			}, 2000);
		});
		$('.fluid .fluid-img').hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() {
				i++;
				move();
			}, 2000);
		});
	})();	
})
