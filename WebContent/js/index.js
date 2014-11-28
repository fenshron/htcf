
/*index_控制高亮*/
$(document).ready(function(){
	$(".top_navigation .navite_li a").hover(function(){
		$(this).addClass("index_hover");
	},function(){
		$(this).removeClass("index_hover");
	}); 
});

/*about_left_控制高亮*/
$(document).ready(function(){
	$(".title_lei .left_div").hover(function(){
		$(this).addClass("left_hover");
	},function(){
		$(this).removeClass("left_hover");
	}); 
});
/**
 * 在线申购显示
 */
function app_buy_show(){
	$("#elect_content").fadeIn("fast");
}
/**
 * 在线申购隐藏
 */
function app_buy_hide(){
	$("#elect_content").fadeOut("fast");
}




/**
 * 管理进入显示
 */
function login_show(){
	$("#login_content").fadeIn("fast");
}
/**
 * 管理进入隐藏
 */
function login_hide(){
	$("#login_content").fadeOut("fast");
}

var index = {
	getValue:function(id){
		return $("#"+id).val();
	},
	check_email:function(id){
		var emailRegExp = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
		var email = index.getValue(id);
		if(!emailRegExp.test(email)){
			return false;
		}
		return true;
	},
	check_null:function(id){
		var value = index.getValue(id);
		if(null == value || '' == value){
			return false;
		}
		return true;
	},
	check_telephone:function(id){
		var telephoneRegExp = new RegExp(/^1((3\d)|(4[57])|(5[01256789])|(8\d))\d{8}$/);
		var telephone = index.getValue(id);
		if(!telephoneRegExp.test(telephone)){
			return false;
		}
		return true;
	},
	check_charater:function(id){
		var value = index.getValue(id);
		var charaterRegExp = new RegExp("[`~!%#$^@&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]") 
		var rs = ""; 
		for (var i = 0; i < value.length; i++) { 
			rs = rs+value.substr(i, 1).replace(charaterRegExp, ''); 
		} 
		return $.trim(rs); 
	},
	check_buy_name:function(){
		var id = "_app_buy_name";
		$("#"+id+"_nav").next().remove();
		if(!index.check_null(id)){
			$("#"+id+"_nav").text("不能为空");
			//$("#"+id).focus();
			return false;
		}
		$("#"+id+"_nav").val(index.check_charater(id));
		return true;
	},
	check_buy_phone:function(){
		var id = "_app_buy_telephone";
		$("#"+id+"_nav").next().remove();
		if(!index.check_null(id)){
			$("#"+id+"_nav").text("不能为空");
			//$("#"+id).focus();
			return false;
		}
		if(!index.check_telephone(id)){
			$("#"+id+"_nav").text("格式不对");
			//$("#"+id).focus();
			return false;
		}
		$("#"+id+"_nav").val(index.check_charater(id));
		return true;
	},
	check_buy_email:function(){
		var id = "_app_buy_email";
		$("#"+id+"_nav").next().remove();
		if(!index.check_null(id)){
			$("#"+id+"_nav").text("不能为空");
			//$("#"+id).focus();
			return false;
		}
		if(!index.check_email(id)){
			$("#"+id+"_nav").text("格式不对");
			//$("#"+id).focus();
			return false;
		}
		return true;
	},
	check_buy_onsubmit:function(){
		if(index.check_buy_name()&&index.check_buy_phone()&&index.check_buy_email()){
			return true;
		}
		return false;
	},
	check_login_password:function(){
		var id = "_login_password";
		$("#"+id).next().remove();
		if(!index.check_null(id)){
			$("#"+id).after("<span><font color='red'>不能为空</font></span>");
			//$("#"+id).focus();
			return false;
		}
		return true;
	},
	check_login_name:function(){
		var id = "_login_name";
		$("#"+id).next().remove();
		if(!index.check_null(id)){
			$("#"+id).after("<span><font color='red'>不能为空</font></span>");
			//$("#"+id).focus();
			return false;
		}
		$("#"+id).val(index.check_charater(id));
		return true;
	},
	check_login_submit:function(){
		if(index.check_login_name()&&index.check_login_password()){
			return true;
		}
		return false;
	}
}

