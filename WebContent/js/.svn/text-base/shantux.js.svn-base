$(function(){
	var ul = $(".img1 ul");
	var li = $(".img1 li");
	var tli = $(".img1-title li");	
	var speed = 350;
	var autospeed = 1000;	
	var i=1;
	var index = 0;
	var n = 0;
    /* 标题按钮事件 */
	function lxfscroll() {		
			
				var index = tli.index($(this));					
				tli.removeClass("cur");
				$(this).addClass("cur");
				ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(index).css({"z-index":i});	
				li.eq(index).css({"left":"400px"});	
				ul.animate({left:"-400px"},speed); 	
				i++;	
			
    };
	/* 自动轮换 */
	function autoroll() {
					if(n >=2) {
						n = 0;
					}
					tli.removeClass("cur");
				tli.eq(n).addClass("cur");
					ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(n).css({"z-index":i});	
				li.eq(n).css({"left":"200px"});	
				 	
					n++;
					i++;
					timer = setTimeout(autoroll, autospeed);
					ul.animate({left:"-400px"},speed);
				};
	/* 鼠标悬停即停止自动轮换 */
				function stoproll() {
					li.hover(function() {
						clearTimeout(timer);
						n = $(this).prevAll().length+1;
					}, function() {
						timer = setTimeout(autoroll, autospeed);
					});
					tli.hover(function() {
						clearTimeout(timer);
						n = $(this).prevAll().length+1;
					}, function() {
						timer = setTimeout(autoroll, autospeed);
					});
				};			
	tli.mouseenter(lxfscroll);
	autoroll();
	stoproll();
});