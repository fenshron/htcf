function is_null(obj){
	if(typeof(obj) == 'undefined' || obj == null || obj == ''){
		return true;
	}
	return false;
};
function is_numeric(val){
	if(is_null(val) || isNaN(val)){
		return false;
	}
	return true;
};
function is_int(val){
	if(!is_numeric(val)){
		return false; 
	}
	if(val.toString().indexOf(".") >= 0){
		return false;
	}
	return true;
}; 
function is_id_card(value) {
	value = $.trim(value);
	value = value.replace(/ /g, ''); 
	
	var idCard = new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/);
	if (!idCard.test(value)) {
		return false;
	}
	
	var len = value.length;
	if (len == 18) {
		var re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/);
		var arrSplit = value.match(re);
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay){
			return false;
		}
	} else if (len == 15) {
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
		var arrSplit = value.match(re);
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay){
			return false;
		}
	}	
    return true;
}
function is_mobile(value){
	value = $.trim(value); 
	var length = value.length;
	var reg = /^((1[3458]{1}[0-9]{1})+\d{8})$/;
     return (length == 11 && reg.test(value));
};
function is_phone(value) {
	value = $.trim(value);
	var reg = /^\d{3,4}-\d{7,9}$/;
    return reg.test(value);
};
function is_url(val){
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(val);
};
function is_ip(ip){
	var pattern=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
	return pattern.test(ip);
};
function is_email(val){   
	val = val.trim();
    var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;   
    return re.test(val);   
};
function is_json_empty(json){
	if(is_null(json)){
		return true;
	} 
    var val = true; 
    $.each(json, function(){
    	val = false;
    	return false;
    });
    return val;
};
function check_length_bak(val, min, max){
	if(is_null(val)){
		if(min != 0){
			return false;
		}else{
			return true;
		}
	}else{
		var len = 0;    
	    for (var i=0; i<val.length; i++) {    
	        if (val.charCodeAt(i)>127 || val.charCodeAt(i)==94) {    
	             len += 2;    
	         } else {    
	             len ++;    
	         }    
	     }
		if(is_numeric(min) && len < min){
			return false;
		}
		if(is_numeric(max) && len > max){
			return false;
		}
	}
	return true;
};
function check_length(val, min, max){
	if(is_null(val)){
		if(min != 0){
			return false;
		}else{
			return true;
		}
	}else{
		var len = 0;    
		val = val.trim();
		if(is_numeric(min) && val.length < min){
			return false;
		}
		if(is_numeric(max) && val.length > max){
			return false;
		}
	}
	return true;
};
function get_byte_range_length(value){
	var length = value.length;
	for (var i=0; i < value.length; i++) {
	 	if(value.charCodeAt(i) > 127)
			length++;
	}
	return length;
};

function isIE6(){
	return ($.browser.msie && ($.browser.version == 6.0) && !$.support.style);
};
function isChrome(){
	return (navigator.userAgent.toLowerCase().match(/chrome/) != null);
};

String.prototype.trim = function() { 
	return this.replace(/(^\s*)|(\s*$)/g, ""); 
};
String.prototype.ltrim = function() { 
	return this.replace(/(^\s*)/g, "");
};
String.prototype.rtrim = function() { 
	return this.replace(/(\s*$)/g, ""); 
};
Date.prototype.format = function(format) {  
    var o = {  
        "M+" :this.getMonth() + 1, // month  
        "d+" :this.getDate(), // day  
        "h+" :this.getHours(), // hour  
        "m+" :this.getMinutes(), // minute  
        "s+" :this.getSeconds(), // second  
        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter  
        "S" :this.getMilliseconds()  
    };  
  
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "")  
                .substr(4 - RegExp.$1.length));  
    }  
  
    for ( var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]  
                    : ("00" + o[k]).substr(("" + o[k]).length));  
        } 
    }  
    return format;
};
function getDateFromYYYY_MM_DD(dateStr){
	var year = dateStr.substring(0,4);
	var month = dateStr.substring(5,7);
	var day = dateStr.substring(8,10);
	return new Date(year,month-1,day);
};
Date.prototype.dateAdd = function(interval,number){
	var d = this;
	var k={"y":"FullYear", "q":"Month", "m":"Month", "w":"Date", "d":"Date", "h":"Hours", "n":"Minutes", "s":"Seconds", "ms":"MilliSeconds"};
	var n={"q":3, "w":7};
	eval("d.set"+k[interval]+"(d.get"+k[interval]+"()+"+((n[interval]||1)*number)+")");
	return d;
};
function get_url_param(name) { 
    return get_url_param_by_location(name, window.location);
};
function get_url_param_by_location(name,location) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null){
    	return unescape(r[2]); 
    }
    return null;
};
function focusInput(input_id) { 
	if($('#'+input_id).length > 0){
		var len = $('#'+input_id).val().length;
		focusInputEx(input_id, len, len);
		$('#'+input_id).focus();
	}
};
function focusInputEx(input_id, selectionStart, selectionEnd) { 
	setSelectionRange(document.getElementById(input_id), selectionStart, selectionEnd);
};
function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
	    input.focus();
	    input.setSelectionRange(selectionStart, selectionEnd);
	}
	else if (input.createTextRange) {
	    var range = input.createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', selectionEnd);
	    range.moveStart('character', selectionStart);
	    range.select();
	}
};

function getMoneyBigFormat(tranvalue){
		   var i=1;
		   var dw2 = new Array("","万","亿");//大单位
		   var dw1 = new Array("拾","佰","仟");//小单位
		   var dw = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");//整数部分用
			//以下是小写转换成大写显示在合计大写的文本框中     
		   //分离整数与小数
		   var source = splits(tranvalue);
		   var num = source[0];
		   var dig = source[1];
		  
		   //转换整数部分
		   var k1=0;//计小单位
		   var k2=0;//计大单位
		   var sum = 0;
		   var str="";
		   var len = source[0].length;//整数的长度
		   for(i=1;i<=len;i++){
				var n = source[0].charAt(len-i);//取得某个位数上的数字
				var bn = 0;
				if(len-i-1>=0){
				 	bn = source[0].charAt(len-i-1);//取得某个位数前一位上的数字
				}
				sum = sum+Number(n);
				if(sum!=0){
					str = dw[Number(n)].concat(str);//取得该数字对应的大写数字，并插入到str字符串的前面
					if(n=='0')sum = 0;
				}
				if(len-i-1>=0){//在数字范围内
				   if(k1!=3){//加小单位
				   		if(bn!=0){
					   		str = dw1[k1].concat(str);
				   		}
					   k1++;
				   }else{//不加小单位，加大单位
					  k1=0;
					  var temp = str.charAt(0);
					  if(temp=="万" || temp=="亿")//若大单位前没有数字则舍去大单位
						 str = str.substr( 1, str.length-1);
					 	 str = dw2[k2].concat(str);
						 sum = 0;
				 	 }
			   }
			  if(k1==3)//小单位到千则大单位进一
			  { k2++;}
		   }
		   
		   //转换小数部分
		   var strdig="";
		   if(dig!=""){
				  var n = dig.charAt(0);
				 if(n!=0){
					   strdig += dw[Number(n)]+"角";//加数字
				 }
				 var n = dig.charAt(1);
				 if(n!=0){
					strdig += dw[Number(n)]+"分";//加数字
				 }
			}

		   str += "元"+strdig;
		   if(strdig==""){
			   str = str+"整";
			}

		   var yuanIndex = str.indexOf("元",0);
		   if(yuanIndex==0){
			   str=strdig;   
	  }
	  return str; 
};
function splits(tranvalue){
	var value = new Array('','');
	var temp = tranvalue.split(".");
	for(var i=0; i< temp.length; i++){
		value[i] = temp[i];
	}
	return value;
};

var dp_resource = {
		closeText: '关闭',
		prevText: '&#x3c;上月',
		nextText: '下月&#x3e;',
		currentText: '今天',
		monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		weekHeader: '周',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'
}; 
function init_all_datepicker(){
	$.datepicker.regional['zh-CN'] = dp_resource; 
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);

	$(".has_datepicker").unbind();
	$(".has_datepicker").datepicker({
		onSelect: function(dateText, inst) {
		},
		changeYear:true,
		changeMonth:true,
		yearRange:'1900:2030' 
	});
	$('.has_datepicker').keyup(function(e){
		var key = e.which;
        if (key == 46 || key == 8) {
        	e.preventDefault();
        	$(this).val('');
        }
	});
	$('.has_datepicker').each(function(){
		$(this).attr("readonly", "readonly");
	});
	
	$(".has_datepicker_year").unbind();
	$(".has_datepicker_year").datepicker({
		onSelect: function(dateText, inst) {
		},
		dateFormat:'yy',
		changeYear:true,
		changeMonth:true,
		yearRange:'1900:2030'
	});
	$('.has_datepicker_year').keyup(function(e){
		var key = e.which;
        if (key == 46 || key == 8) {
        	e.preventDefault();
        	$(this).val('');
        }
	});
	$('.has_datepicker_year').each(function(){
		$(this).attr("readonly", "readonly");
	});
};

function ajaxGetDataEx(param, func, data_type){
    ajaxGetDataRaw("/", param, func, data_type);
};

function ajaxGetData(pathUrl,param, func, data_type){
    ajaxGetDataRaw(pathUrl, param, func, data_type);
};

function ajaxGetDataRaw(urlRoot, param, func, data_type){
    if(is_null(data_type)){
        data_type = 'json';
    }    
    $.ajax({
       url:urlRoot + 'caff_ajax.do', 
       type:'post',
       dataType:data_type,
       data:param,
       contentType:"application/x-www-form-urlencoded;charset=UTF-8",
       error: function(data, status, e){
//            alert("ajaxGetData error:data=" + data + ", status=" + status  + ", e=" + e);
       },
       success:func
    }); 
};

/**
 * 以下功能实现iframge的高度与实际内容的高度相适配
 */
var IFRAME_IDS = [];
var IFRAME_HEIGHT_ADAPT_CALLBACK = [];
function addIframeHeightAdaptCallback(callback) { 
	if(typeof(callback) == "function"){
		IFRAME_HEIGHT_ADAPT_CALLBACK.push(callback);
	} 
};
function startAdaptIframeHeight(frameIds) { 
	IFRAME_IDS = [];//重置
	$(frameIds).each(function(i){
		if(!is_null(frameIds[i])){
			IFRAME_IDS.push(frameIds[i]);
		}
	});
	adaptIframeHeightEx();
};
function adaptIframeHeightEx() {  
	var isComplate = true;
	$(IFRAME_IDS).each(function(i){
		var frameId = IFRAME_IDS[i];
		if(!is_null(frameId)){
			var iframe = document.getElementById(frameId);
			if(iframe != null){
				isComplate = false;
				
				var heightExpected = $("#" + frameId).contents().find("body").outerHeight(true);
				if(heightExpected > 0){
					if(heightExpected != iframe.height){
						iframe.height = heightExpected;
					}else if(heightExpected > 50){ 
						$(".iframeLoading").hide();
						isComplate = true;
					}
				}
			}
		}
	}); 
	
	if(!isComplate){
		setTimeout(adaptIframeHeightEx, 1000);//make sure just to refresh limit times
	}else{
		$(IFRAME_HEIGHT_ADAPT_CALLBACK).each(function(i){
			IFRAME_HEIGHT_ADAPT_CALLBACK[i]();
		}); 
	}
};

var TEMP_FRAME_ID = null;
var TEMP_FRAME_FUNC = null;
function adaptIframeHeightWithFrameId(frameId, func) {  
	var isComplate = true;
	TEMP_FRAME_ID = frameId;
	TEMP_FRAME_FUNC = func;
	adaptIframeHeightWithFrameIdEx();
};
function adaptIframeHeightWithFrameIdEx() {  
	var isComplate = true;
	if(!is_null(TEMP_FRAME_ID)){
		var iframe = document.getElementById(TEMP_FRAME_ID);
		if(iframe != null){
			isComplate = false;
			
			var heightExpected = $("#" + TEMP_FRAME_ID).contents().find("body").outerHeight(true);
			if(heightExpected > 0){
				if(heightExpected != iframe.height){
					iframe.height = heightExpected;
				}else if(heightExpected > 50){ 
					$(".iframeLoading").hide();
					isComplate = true;
				}
			}
		}
	}
	
	if(!isComplate){
		setTimeout(adaptIframeHeightWithFrameIdEx, 1000);//make sure just to refresh limit times
	}else if(typeof(TEMP_FRAME_FUNC) == "function"){
		TEMP_FRAME_FUNC();
	}
};


/**
 * 产生一个分页导航条，此方法针对动态页面
 * 
 * @param rootURL rootURL为不带参数不带问号的页面url
 * @param $navDiv 导航条的DIV容器
 * @param currentIndex 当前页码
 * @param pageCount 分页总数
 * @param totalCount 记录总数
 * @param navClass 页码块的样式类
 * @param currentNavClass 当前页码块的样式
 */
/*function getPageImageAjax(navDiv,container_id,index){
	var item_image='<div id="navId" class="page_nav" style="height:30px;font-size:12px;font-family:Tahoma;" >'+
		'<span class="page_pre_disabled page_nav_block" title="上一页"></span>'+
		'<span class="page_current page_nav_block">' + index + '</span>'+
		'<span class="page_next_disabled page_nav_block">下一页</span></div>';
	$('#'+navDiv).append(item_image);
	getImageAjax(container_id,index);
}*/

function getImageAjax(container_id,index){ 
	
	var www=returnUrlRoot();
	var userid = returnBeanUserId();
	$('#'+container_id).empty();
	showImgDivClassCreate(container_id);
	 ajaxGetData(www,
            {"hkey":"getCommonFiles", "uid":userid, "index":index},
            function(data){
            	$('.pagesText').html(data.pages);
            	$('.pagesTexts').attr("value",data.index);
            	$('.numberPages').attr("value",data.index);
            	var list = JSON.parse(data.list);            	
             	for(var i in list ){
	                 	    var val="1"; 	
	                 	 	var thisId; 
             	    	var cd = $(".showImgDivClass").length; 	 
             	    	$(".showImgDivClass").each(function(){  	                 	    		
             	    		thisId=$(this).attr("id");
             	    		if(list[i].id == thisId){
	                 	    		return false;
	                 	    	}else
                 	    	if(thisId.substr(0,2) == "di" ){ 
             	    			forlistHtml(list[i],thisId); 	 		                 	    		
                 	    		$(this).attr('title',''+list[i].title);
                 	    		$(this).attr('id',''+list[i].id);
             	    			return false;
							}										
             	    	}); 
             	    	if(	cd == "1" ){
	                 	    	for(j=0;j < list.length;j++){
             	    			forListImg(list[j],container_id);		
	                 	    	}							
						}
                     }                            
           },'json'
    );
}

var editor;
function kindEditor_create(K,id,kindEditorImgurl){
	  KindEditor.lang({
		  	image : '选择图片'
		  });
	  
		  KindEditor.plugin('image', function(K) {
		  	var self = this, name = 'image';
		  	self.clickToolbar(name, function() {
		  		alertImgXC(kindEditorImgurl);
		  	});
		  }); 
	  editor=K.create('textarea[id="'+id+'"]', {
	  		resizeType : 0,
	  		allowPreviewEmoticons : false,
	  		allowImageUpload : false,
	  		items : [
	  			'removeformat','forecolor', 'hilitecolor', 'bold', 'italic', 'underline','strikethrough',
	  			'|', 'fontname', 'fontsize', '|',  'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
	  			'insertunorderedlist', '|', 'emoticons', 'image', 'link','media']
	  	});
} 


function alertImgXC(url){
	var scroll = "no";
	$.layer({
		type:2,
		title:'相册',
		iframe:{
		src : url,
		scrolling: 'no'
		},
		area:['720px','450px'],
		offset:['100px','']						
	});				
}

function layerPage(id){
	var i = $.layer({
	    type : 1,
	    title : false,
	    fix : false,
	    offset:['20px' , ''],
	    area : ['515px','315px'],
	    page : {dom : '#'+id}
	});	
}

function alertLayerBannerImg(url,id){
	var img_url = url;
	$('#'+id+' img').removeAttr("width");
	$('#'+id+' img').attr("src",url);
	$('#'+id+' img').css("display","none");
	var img = new Image();
	img.src = img_url;
	img.onload = function(){
		var iwidth,iheight;
		iwidth=img.width;// 打印
		iheight=img.height;
		if(iwidth>1200){
			iwidth = iwidth/2;
			iheight= iheight/2;
			$('#'+id+' img').attr("width",iwidth+"px");
			$('#'+id+' img').attr("height",iheight+"px");
		}
		layerBananerPage(id,iwidth,iheight);
	};
	$('#'+id+' img').css("display","block");
}

function borrowerImageBorderappend(classname){
	$('.borrowerImageBorder .borrowerImage').each(function(i){		
		var url =$(this).attr("src");
		var imageid=$(this).attr("imageid");
		var img_url='<img src='+url+'  class="fl c_p borrowerImageIcons d_n"  imageId='+imageid+' ></img>';  
		parent.$('.usermaterialImageIcon').append(img_url);
	});	
}

function deElementImg(calssname){
	parent.$('.'+calssname).each(function(i){
		parent.$(this).remove();
	});
}

function alertLayerUsermaterialImage(url,id,imgid){
	var img_url = url;
	var img = new Image();	
	img.src = img_url;	
	if($('.borrowerImageBorder .borrowerImage').size()>0){
		deElementImg('borrowerImageIcon');
		deElementImg('borrowerImageIcons');
		borrowerImageBorderappend('usermaterialImage');
	}else if($('.borrowerImageBorder .borrowerImage').size()==0){
		deElementImg('borrowerImageIcon');
	}	
	var imageids = parent.$(".borrowerImageIcon").eq("0").attr("imageId");
	parent.$('#'+id+'>img').remove();
	var img_item='<img id="imgid'+id +'" imageId='+imgid+' ></img>';
	parent.$('#'+id).css("text-align","center");
	parent.$('#'+id).append(img_item);
	img.onload = function(){
		var iwidth,iheight;
		iwidth=img.width;// 打印
		iheight=img.height;	
		parent.$('#'+id+' >img').css("width",iwidth+"px");
		parent.$('#'+id+' >img').css("height",iheight+"px");
		parent.$('#'+id+' >img').css("margin-top",(600-iheight)/2+'px');		
		parent.$('#'+id).css("width","915px");
		parent.$('#'+id).css("height","635px");
		parent.$('#'+id).css("overflow","scroll");
		parent.$('#imgid'+id).attr("src",url);
		layerBananerPage(id,'915px','635px');
		var imageid2 = parent.$('#imgid'+id).attr("imageId");
		parent.$(".borrowerImageIcons").each(function(i){  
			var imageid = $(this).attr("imageId");
			if(imageid2 == imageid){
				if(parent.$(".borrowerImageIcons").size()<=10){
					parent.$('.iconprevious').css("display","none");
					parent.$('.iconnext').css("display","none");
					for(j=0;j<parent.$(".borrowerImageIcons").size();j++){
						addImgappend("borrowerImageIcon",parent.$(".borrowerImageIcons").eq(j).attr("imageId"),parent.$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
					}borderColor(imageid2,imageid);return false;
				}else{
					parent.$('.iconprevious').css("display","block");
					parent.$('.iconnext').css("display","block");
					if(i<10 && parent.$(".borrowerImageIcons").size()>10){
						for(j=0;j<10;j++){
							addImgappend("borrowerImageIcon",parent.$(".borrowerImageIcons").eq(j).attr("imageId"),parent.$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
						}borderColor(imageid2,imageid);return false;
					}
					if(i>=10){						
						if( (parseInt(i/10)+1)*10>=parent.$(".borrowerImageIcons").size() ){							
							for(j=parent.$(".borrowerImageIcons").size()-10;j<parent.$(".borrowerImageIcons").size();j++){
								addImgappend("borrowerImageIcon",parent.$(".borrowerImageIcons").eq(j).attr("imageId"),parent.$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
							}borderColor(imageid2,imageid);return false;
						}else{							
							for(j=parseInt(i/10)*10;j<(parseInt(i/10)+1)*10;j++){
								addImgappend("borrowerImageIcon",parent.$(".borrowerImageIcons").eq(j).attr("imageId"),parent.$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
							}borderColor(imageid2,imageid);return false;
						}
					}
				}
			}
		});
	};
}
$('.iconprevious').live('click',function(){
	var i = 0;
	var imageid = $("#imgidusermaterialImage").attr("imageId");
	var imageids = $(".borrowerImageIcon").eq("0").attr("imageId");
	$('#borrowerImageIcon > img').remove();	
	$(".borrowerImageIcons").each(function(index){
		if(imageid == $(this).attr("imageId") || imageids == $(this).attr("imageId")){
			if($(".borrowerImageIcons").size()<=10){
				for(j=0;j<$(".borrowerImageIcons").size();j++){
					addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
				}layer.msg("已经到达第一页", 1,9);borderColor(imageid,$(this).attr("imageId"));return false;
			}else if($(this).attr("imageId") == imageids) {
				//alert("index="+index);				
				if(index>=9){
					for(j=index-9;j<(index+10);j++){
						addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
					}borderColor(imageid,$(this).attr("imageId"));return false;
				}else{
					for(j=0;j<10;j++){
						addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
					}
					if(imageids == $(".borrowerImageIcons").eq("0").attr("imageId"))layer.msg("已经到达第一页",1,9);borderColor(imageid,$(this).attr("imageId"));return false;
				}
			}
		}
	});
});

$('.iconnext').live('click',function(){
	var i = $(".borrowerImageIcon").size()-1;
	var imageid =  $("#imgidusermaterialImage").attr("imageId");
	var imageids = $(".borrowerImageIcon").eq("9").attr("imageId");
	
	$('#borrowerImageIcon > img').remove();
	$(".borrowerImageIcons").each(function(index){
		if(imageid == $(this).attr("imageId") || imageids == $(this).attr("imageId") ){	
			
			if($(".borrowerImageIcons").size()<=10){
				for(j=0;j<$(".borrowerImageIcons").size();j++){
					addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
				}layer.msg("已经到了最后一页", 1,9);borderColor(imageid,$(this).attr("imageId"));return false;
			}else if($(this).attr("imageId") == imageids) {
				if(index>=$(".borrowerImageIcons").size()-10){
					for(j=$(".borrowerImageIcons").size()-10;j<$(".borrowerImageIcons").size();j++){
						addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
					}
					if(imageids == $(".borrowerImageIcons").eq($(".borrowerImageIcons").size()-1).attr("imageId"))layer.msg("已经到了最后一页", 1,9);borderColor(imageid,$(this).attr("imageId"));return false;
				}else{
					for(j=index;j<(index+10);j++){
						addImgappend("borrowerImageIcon",$(".borrowerImageIcons").eq(j).attr("imageId"),$(".borrowerImageIcons").eq(j).attr("src"),"usermaterialImage");
					}borderColor(imageid,$(this).attr("imageId"));return false;
				}
			}
		}
	});
	
});


function borderColor(imageid1,imageid2){
	parent.$(".borrowerImageIcon").each(function(){
		if(imageid1 == $(this).attr("imageId")){	
			$(this).css("background-color","#ffffff");
			$(this).css("border","5px solid #73B4E0");
			return false;
		}
	});
}

$(".borrowerImageIcon").live({  
    mouseenter:function(){ 
		$(this).css("background-color","#ffffff");
    },  
    mouseleave:function(){  
			$(this).css("background-color","#dddddd");
    }  
 });

$(".iconprevious").live({  
    mouseenter:function(){  
		$(this).css("background-color","#ffffff");
		$(this).css("border","5px solid #73B4E0");
		$(this).css("opacity","1");
    },  
    mouseleave:function(){  
    	$(this).css("background-color","#dddddd");
    	$(this).css("border","5px solid #666666");
    	$(this).css("opacity","0.9");
    }  
 }); 
$(".iconnext").live({  
    mouseenter:function(){  
		$(this).css("background-color","#ffffff");
		$(this).css("border","5px solid #73B4E0");
		$(this).css("opacity","1");
    },  
    mouseleave:function(){  
    	$(this).css("background-color","#dddddd");
    	$(this).css("border","5px solid #666666");
    	$(this).css("opacity","0.9");
    }  
 }); 

function addImgappend(id,imgid,url,userimageid){	
	var $container = parent.$('#'+id); 	
	var image_item='<img  src="'+url+'"  onclick="alertLayerUsermaterialImage(\''+url+'\', \''+userimageid+'\', \''+imgid+'\');"'+ 
	'class="d_di v_a c_p borrowerImageIcon" imageId="'+imgid+'"/> ';
	$container.append(image_item);
}

function usermaterialImage(id,dz){
	var imageid2 =$('#imgid'+id).attr("imageId");
	var imageids = parent.$(".borrowerImageIcons").eq("0").attr("imageId");
	var imageidsize = parent.$(".borrowerImageIcons").eq($(".borrowerImageIcons").size()-1).attr("imageId");
	var imageid3,imageurl;
		if(dz == "previous"){
			parent.$(".borrowerImageIcons").each(function(i){ 
				if(imageid2 == $(this).attr("imageId")){
					if(i <1 ){
						layer.msg("前面没有任何图片了哟", 1,9);
						imageurl = parent.$('#imgid'+id).attr("src");
						imageid3 = parent.$('#imgid'+id).attr("imageId");					
						return false;
					}else if(i>=1){
						imageurl =  parent.$(".borrowerImageIcons").eq(i-1).attr("src");
						imageid3 = parent.$(".borrowerImageIcons").eq(i-1).attr("imageId");
						return false;
					}
				}
			});
		}else{
			parent.$(".borrowerImageIcons").each(function(i){ 
				if(imageid2 == $(this).attr("imageId")){
					if(i==parent.$(".borrowerImageIcons").size()-1){
						if(imageidsize == $(this).attr("imageId")){
						layer.msg("后面没有任何图片了哟", 1,9);}
						imageurl = parent.$('#imgid'+id).attr("src");
						imageid3 = parent.$('#imgid'+id).attr("imageId");
						return false;
					}else{
						imageurl = $(this).next().attr("src");
						imageid3=$(this).next().attr("imageId");	
						return false;
					}
				}				
			});
		}
	alertLayerUsermaterialImage(imageurl,'usermaterialImage',imageid3);
}

$('.usermaterialImagePrevious').live('click',function(){
	usermaterialImage("usermaterialImage","previous");
});

$('.usermaterialImageNext').live('click',function(){
	usermaterialImage("usermaterialImage","next");
});

function layerBananerPage(id,imagewidth,imageheight){	
	parent.$.layer({
	    type : 1,
	    title : false,
	    fix : true,
	    offset:['50px' , ''],
	    area : [imagewidth,imageheight],
	    page : {dom : '#'+id}
	});
	/*parent.$.layer({
		type:2,
		title:'相册',
		iframe:{
		src : url,
		scrolling: 'no'
		},
		zIndex: '19880315',
		area:[imagewidth,imageheight],
		offset:['100px','']						
	});	*/
}






function attrChange(id,key,value){
	$('#'+id).attr(key, value);
}

function cssChange(id,key,value){
  	$('#'+id).css(key,value);
}


function init_upload_image(fileId,swfUrl,fileUploadUrl,imgUrl,swfbheight,swfbwidth){
	$("#"+fileId).uploadify({
        'swf'             : swfUrl,
        'uploader'        : fileUploadUrl, //ft=2表示普通文件类别
       // 'buttonImage'     : imgUrl,
        'buttonText'      : '上传图片',
        'method'          : 'Post',
        'height'		  : swfbheight,
        'width'		      : swfbwidth,   
        'fileSizeLimit'   : '1MB',
        'queueID'         : 'fileQueue',
        'fileTypeExts'    : '*.jpg;*.gif;*.png;*.bmp;',             // 扩展名
        'fileTypeDesc'    : '请选择 jpg png gif bmp文件',     // 文件说明
        'auto'            : true,                // 选择之后，自动开始上传
        'multi'           : true,               // 是否支持同时上传多个文件
        'removeTimeout'   : 10,
        'preventCaching'  : true,      //如果设置为真，一个随机的值添加到SWF文件的URL，因此它不会缓存。 
        'uploadLimit'     : 10,
        'onQueueComplete' : function(queueData) {//在 队列中的文件上传完成后触发        刷新页面
			setTimeout("getImageAjax('image_list_div','1');",1000);
        },
        'onUploadSuccess' : function(file,data,reponse){//在每一个文件上传成功后触发			
        	//progressBarAnimation(file.id,100);
        	//setTimeout("progressBarHide('uploadify-queue-progressbar','100');",1000);
        			//setTimeout("uploadCss('div4','500');",800);
        },
        'onUploadStart'   : function(file){//在一个文件开始上传 之前触发			
        	//forlistappend('image_list_div',file.id);
        	//progressBarAnimation(file.id,50);        	
        },
        'onUploadError'   : function(file,errorCode,erroeMsg,errorString){//上传文件失败触发
        	//alert("图片"+file.name+"上传失败");
        },
        'onSWFReady'      : function(){//flash对象加载成功后触发
            //alert("flash 加载成功");
        },
        'onDialogClose'   : function(queueData){
        	//forListImgDefault(queueData.filesSelected);
        },
        'onSelect'        : function(file,progressbarId) {   //每添加一个文件至上传队列时触发该事件。
            //alert(file.name + ' 文件添加至上传队列.');
        	//alert($('.showImgDivClass').size()-1);
        	if(($('.showImgDivClass').size()-1) >= 10){
        		//$('.showImgDivClass').css('display','none');
        		$('.showImgDivClass').remove();
        		//setTimeout("forlistappend('image_list_div',"+file.id+"););",500);
        		forlistappend('image_list_div',file.id);
        	}else{
        		forlistappend('image_list_div',file.id);
        	}
           // progressItemTemplate(progressbarId);
        },'onDialogClose':uploadify_onUploadError,/* function(queueData,overrideEvents){
        	//alert(queueData.filesSelected+"个文件" ); 
        	//alert("像队列中添加了"+queueData.filesQueued+"个文件" ); 
        	//alert("出错了"+queueData.filesErrored+"个文件" );
        	alert($('.showImgDivClass').size()-queueData.filesQueued-1);
        	
        },*/'onSelectError':uploadify_onSelectError,
        'onUploadError':uploadify_onUploadError
    });        
}

var uploadify_onUploadError = function(queueData){
	//$('.showImgDivClass').css("display","none");
	alert(queueData.filesQueued);
};

var uploadify_onSelectError = function(file, errorCode, errorMsg) {
    var msgText = "上传失败\n";
    switch (errorCode) {
        case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
            //this.queueData.errorMsg = "每次最多上传 " + this.settings.queueSizeLimit + "个文件";
            msgText += "每次最多上传 " + this.settings.uploadLimit + "个文件";
            break;
        case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
            msgText += "文件大小超过限制( " + this.settings.fileSizeLimit + " )";
            break;
        case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
            msgText += "文件大小为0";
            break;
        case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
            msgText += "文件格式不正确，仅限 " + this.settings.fileTypeExts;
            break;
        default:
            msgText += "错误代码：" + errorCode + "\n" + errorMsg;
    }
    //alert(msgText);
    this.queueData.errorMsg=msgText;
};

var uploadify_onUploadError = function(file, errorCode, errorMsg, errorString) {
    // 手工取消不弹出提示
    if (errorCode == SWFUpload.UPLOAD_ERROR.FILE_CANCELLED
            || errorCode == SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
        return;
    }
    var msgText = "上传失败\n";
    switch (errorCode) {
        case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
            msgText += "HTTP 错误\n" + errorMsg;
            break;
        case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
            msgText += "上传文件丢失，请重新上传";
            break;
        case SWFUpload.UPLOAD_ERROR.IO_ERROR:
            msgText += "IO错误";
            break;
        case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
            msgText += "安全性错误\n" + errorMsg;
            break;
        case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
            msgText += "每次最多上传 " + this.settings.uploadLimit + "个";
            break;
        case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
            msgText += errorMsg;
            break;
        case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
            msgText += "找不到指定文件，请重新操作";
            break;
        case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
            msgText += "参数错误";
            break;
        default:
            msgText += "文件:" + file.name + "\n错误码:" + errorCode + "\n"
                    + errorMsg + "\n" + errorString;
    }
//    alert(msgText);
    this.queueData.errorMsg=msgText;
};

function init_upload_image2(fileId,swfUrl,fileUploadUrl,imgUrl){
	$("#"+fileId).uploadify({
        'swf'             : swfUrl,
        'uploader'        : fileUploadUrl, //ft=2表示普通文件类别
        'buttonImage'     : imgUrl,
        'method'          : 'Post',
        'height'		  : 32,
        'width'		      : 87,   
        'queueID'         : 'fileQueue2',
        'fileTypeExts'    : '*.jpg;*.gif;*.png;*.bmp;',             // 扩展名
        'fileTypeDesc'    : '请选择 jpg png gif bmp文件',     // 文件说明
        'auto'            : true,                // 选择之后，自动开始上传
        'multi'           : false,
        'removeTimeout'   : 10,
        'onQueueComplete' : function(queueData) {
            //alert(queueData.uploadsSuccessful + ' 个文件上传成功.');
        },
        'onUploadSuccess' : function(file, data, response) {     	  
     	  headImgRefresh(data,'headImgRefresh');
        },
        'onSelect'        : function(file,progressbarId) {   //每添加一个文件至上传队列时触发该事件。
        	userImgProgressbar('fileQueue2',file.id);
        }
    });        
}


function init_upload_image3(fileId,swfUrl,fileUploadUrl,imgUrl){
	
	$("#"+fileId).uploadify({
        'swf'               : swfUrl,
        'uploader'        : fileUploadUrl, //ft=2表示普通文件类别
        'buttonImage'     : imgUrl,
        'method'          : 'Post',
        'height'		  	  : 43,
        'width'		      : 130,   
        'queueID'         : 'fileQueue2',
        'fileTypeExts'    : '*.jpg;*.gif;*.png;*.bmp;',             // 扩展名
        'fileTypeDesc'    : '请选择 jpg png gif bmp文件',     // 文件说明
        'auto'            : true,                // 选择之后，自动开始上传
        'multi'           : false,
        'removeTimeout'   : 10,
        'onQueueComplete' : function(queueData) {
            //alert(queueData.uploadsSuccessful + ' 个文件上传成功.');
        },
        'onUploadSuccess' : function(file, data, response) {     
        	
     	  headImgRefresh(data,fileId);
        },
        'onSelect'        : function(file,progressbarId) {   //每添加一个文件至上传队列时触发该事件。
        	//userImgProgressbar('fileQueue2',file.id);
        }
    });        
}

function headImgRefresh(imgName,id){
	alert(imgName);
	var url='/user/'+returnBeanUserId()+'/'+imgName;
	alert(url);
	$('#'+id + '_img').attr("src",url);
	$('#'+id + '_div').css("display","block");
}

function userImgProgressbar(container_id,fileid){
	var www=returnUrlRoot();
	 var $container = $('#'+container_id); 
	 var image_item='<div id="progressbar'+fileid+'" style="width:100px;margin-left:10px;margin-top:140px; ">';
	 $container.append(image_item);
}

function showImgDivClassCreate(container_id){
	var $container = $('#'+container_id);  
	var image_item='<div class="showImgDivClass" id="showImgDivClass" style="display:none;"></div>';
	$container.append(image_item);
}

function forlistappend(container_id,fileid){	
	var www=returnUrlRoot();
	 var $container = $('#'+container_id);   
	 var image_item=
  		 '<div class="showImgDivClass"   id="div'+fileid+'">'+
      		'<div class="deleteDivImg" onclick="deleteFileImg(div'+fileid+');" >'+
					/*'<a href="###" class="a_delete_image" ><img style="width:16px;height:16px;" onclick="deleteFileImg(div'+fileid+');"  src="'+www+'images/upload-cancel.png" /></a>'+*/
			'</div>'+
      		'<div class="imgDivShows" >'+
					'<img class="imgUser" id="img'+fileid+'" style="width:100px;height:120px;" src="/images/ico/xcdefaut.jpg"/>'+
			'</div>'+	 
			'<div id="progressbar'+fileid+'" style="width:100px;margin-left:10px;margin-top:140px; ">'+						
			'</div>'+     						
				'<div class="c"></div>'+
			'</div>';
			$container.append(image_item);
}

function deleteFileImg(fileIds){   
	var www=returnUrlRoot();
	if(confirm("确定要删除么？")){
		$("#"+fileIds).hide();
		  ajaxGetData(www,
	          {"hkey":"deleteCommonFiles", "fids":fileIds},
	          function(data){
	              if(data == true){
	                  getImageAjax('image_list_div',parseInt($('.pagesTexts').val()));
	              }
	          } 
	  );
	}else{
		return false;
	}
	/*$.layer({
	    shade: [0],
	    area: ['auto','auto'],
	    dialog: {
	        msg: '确定删除么？',
	        btns: 2,                    
	        type: 4,
	        btn: ['确定','取消'],
	        yes: function(index){
	            //layer.msg('重要', 1, 1);
				
				$("#"+fileIds).remove();
				layer.close(index);
	        }, no: function(index){
	        	layer.close(index);
	        }
	    }
	});*/
	
	
}
  


function forListImg(list,container_id){ 
	var www=returnUrlRoot();
	var userid = returnBeanUserId();
	 var $container = $('#'+container_id);        	 
  	 var image_item=
  		 '<div class="showImgDivClass" title="'+list.title+'" id="'+list.id+'">'+
      		'<div class="deleteDivImg" onclick="deleteFileImg('+list.id+');">'+
					/*'<a href="###" class="a_delete_image" title="'+list.title+'"><img style="width:16px;height:16px;" onclick="deleteFileImg('+list.id+');" src="'+www+'images/upload-cancel.png" /></a>'+*/
			'</div>'+
      		'<div class="imgDivShows" >'+
					'<img class="imgUser" id="imgUser'+list.id+'" style="width:100px;height:120px;"  listid="'+list.id+'" listname="'+list.name+'" invokeName="'+invokeName+'"   src="'+www+'user/'+userid+'/'+list.name+'"/>'+
			'</div>'+	 
			    						
				'<div class="c"></div>'+
			'</div>';
			$container.append(image_item);                                    
}   


var timer = null; 
$('.imgDivShows .imgUser').live('click', function(){ 
	var id = this.id;
	var listid = $(this).attr("listid");
    timer && clearTimeout(timer); 
    timer = setTimeout(function(){ 
        alertLayerOnClick(id,listid);
    },300);
}).live('dblclick', function(){ 
	 var listid =$(this).attr("listid");
	 var listname =$(this).attr("listname");
	 var invokeName =$(this).attr("invokeName");
	 timer && clearTimeout(timer); 
	 dbClickIt(listid,listname,invokeName);
});


function imgWHChange(url){
	var img = new Image();
	img.src = url;
	img.onload = function(){
		var iwidth,iheight;
		iwidth=img.width;// 打印
		iheight=img.height;
		if(iwidth>=515){
			$('#imgShowDiv img').css("width",515+"px");
			$('#imgShowDivWidth').val("515");			
		}else{
			$('#imgShowDiv img').css("width",iwidth+"px");
			$('#imgShowDiv img').css("margin-left",(515-iwidth)/2+"px");
			$('#imgShowDivWidth').val(iwidth);
		}
		if(iheight>=315){
			$('#imgShowDiv img').css("height",315+"px");
			$('#imgShowDivHeight').val("315");
		}else{
			$('#imgShowDiv img').css("height",iheight+"px");
			$('#imgShowDiv img').css("margin-top",(315-iheight)/2+"px");
			$('#imgShowDivHeight').val(iheight);
		}
		$('#imgShowDiv img').attr("src",url);
		$('#imgShowDiv img').css("display","block");	
	};
	
}

function alertLayerOnClick(id,listid){
	var url =$('#'+id).attr("src"); 
	//alert($('#'+id).attr("listid"));
	$('#imgShowDiv img').removeAttr("style");
	$('#imgShowDiv img').removeAttr("id");
	cssChange('imgShowDiv img','position','absolute');
	$('#imgShowDiv img').attr("id",listid);
	$('#imgShowDiv img').css("display","none");
		imgWHChange(url);
		layerPage('imgShowDiv');	
	
}
$('#imgShowDivPreviousPhoto').live("click",function(){
	var imgwidth,imgHeight;
	$(".imgUser").each(function(i){
		if($(this).attr("src") == $('#imgShowDiv img').attr("src") ){
			if(i=='0'){layer.msg('前面没有任何图片了',1,9);return false;}
			$('#imgShowDiv img').removeAttr("style");
			$('#imgShowDiv img').removeAttr("id");
			cssChange('imgShowDiv img','position','absolute');
			$('#imgShowDiv img').attr("id",$(".imgUser").eq(i-1).attr("listid"));
			imgWHChange($(".imgUser").eq(i-1).attr("src"));	
  			return false;
		}
	});
});

$('#imgShowDivNextPhoto').live("click",function(){
	var imgwidth,imgHeight;  
	//alert("$(#imgShowDiv img).attr(src)="+$('#imgShowDiv img').attr("src"));  		 
	$(".imgUser").each(function(i){
		//alert("$(this).attr(src)="+$(this).attr("src")); 
		if($(this).attr("src") == $('#imgShowDiv img').attr("src") ){
			if($(".imgUser").length==(i+1)){layer.msg('后面没有任何图片了',1,9);return false;}
			$('#imgShowDiv img').removeAttr("style");    
			$('#imgShowDiv img').removeAttr("id");
			cssChange('imgShowDiv img','position','absolute');
			$('#imgShowDiv img').attr("id",$(".imgUser").eq(i+1).attr("listid"));
			imgWHChange($(".imgUser").eq(i+1).attr("src"));	
  			return false;
		}
	});
}); 



/*
imgid 图片的ID
imgName 图片的名字
name 需要值得ID名字
*/
function dbClickIt(imgid,imgName,invokeName){
	var www=returnUrlRoot();
	var userid = returnBeanUserId();
    var index = parent.layer.getFrameIndex(window.name);     
    var image_item=www+'user/'+userid+'/'+imgName+'';
    if(invoImgId != "")
    	parent.$('#'+invoImgId).attr("value",imgid);
    if(invoName.substr(0,3) == "img")
    	parent.$('#'+invoName).attr("src",image_item); 
	if(invokeName != "")
		parent.KindEditor.insertHtml('#'+invokeName,'<img src="'+www+'user/'+userid+'/'+imgName+'"  />');
	if(invoImgId.substr(0,5) == "imgid")
    	parent.$('#'+invoImgId).attr("value",imgid);
    parent.layer.close(index);   
}  



function forlistHtml(list,forlistHtmlid){
	var www=returnUrlRoot();
	var userid = returnBeanUserId();
	var image_item='<div class="deleteDivImg" onclick="deleteFileImg('+list.id+');" >'+
		/*'<a href="###" class="a_delete_image" title="'+list.title+'"><img style="width:16px;height:16px;" onclick="deleteFileImg('+list.id+');" src="'+www+'images/upload-cancel.png" /></a>'+*/
			'</div>'+
   		'<div class="imgDivShows" >'+
					'<img class="imgUser" id="imgUser'+list.id+'" style="width:100px;height:120px;"  onclick="alertLayerOnClick(this);"  ondblclick="dbClickIt('+list.id+', \''+list.name+'\', \''+invokeName+'\' );" src="'+www+'user/'+userid+'/'+list.name+'?var='+(new Date()).getTime()+'"/>'+
			'</div>'+	 
			    						
			'<div class="c"></div>';
			$('#'+forlistHtmlid).html(image_item);
}



function progressBarAnimation(id,Pixel){
	$('#progressbar'+id).animate({width:Pixel+'px',height:'3px',opacity:'1'},"1000");
}

function progressBarHide(id,data){
	$('.'+id).fadeOut(data);
}

function hongbaoOnload(callback){	
	var www=returnUrlRoot();
	var m1=0;
	var m2=0;
	for(i=0; i < 30;i++){			
		m1 = getRandom(10);			
		if(m1==m2)
			m1 = getRandom(10);
		m2=m1;
		var id = 'divid'+i;
		var leftValue=($('#bodydiv').width()-$('#hongbaodiv2').width())/2+70;
		var image_item='<div id="divid'+i+'" style="z-index:3;position:absolute;margin-left:'+leftValue+'px;width:70px;height:69px;margin-top:-90px;display:none;" >'+
			'<img style="width:70px;height:69px;" src="'+www+'images/hongbaoimg/hbym_6.png" />'+
				'</div>';	
		$('#hongbaodiv1').append(image_item);
		$('#divid'+i).animate({left:20*getRandom(10)+80+'px'});
		$('#divid'+i).fadeToggle(200*getRandom(10)+300);	
   		$('#divid'+i).animate({"top":"550px"},100*getRandom(20)+500);
	}	
	callback(); 
}

function initInputLabel(){
	$('input[type=text], input[type=password]').keyup(function(){
		refreshOneInputLabel($(this));
	});
	refreshInputLabels();
}
function refreshInputLabels(){
	$('input[type=text], input[type=password]').each(function(){
		refreshOneInputLabel($(this));
	});
}
function refreshOneInputLabel($input){
	var id = $input.attr("id");
	var $label = $input.parent().find("label");
	if(!is_null($label) 
			&& $label.attr("for") == id){
		if($input.val() != ""){
			$label.hide();
		}else {
			$label.show();
		}
	}
}

$('.tenderdetails .titles div[name=record]').live('click',function(){
		$('.detailslist').css('display','block');
		$('.describeContent').css('display','none');
		$('.tenderdetails .titles div[name=details]').css("border-bottom","1px solid #d7d7d7");
		$('.tenderdetails .titles div[name=record]').css("border-bottom","2px solid red");
		$('.tenderdetails .titles div[name=details]').css("color","#656565");
		$('.tenderdetails .titles div[name=record]').css("color","red");
				
});
$('.tenderdetails .titles div[name=details]').live('click',function(){
	$('.detailslist').css('display','none');
	$('.describeContent').css('display','block');
	$('.tenderdetails .titles div[name=record]').css("border-bottom","1px solid #d7d7d7");
	$('.tenderdetails .titles div[name=details]').css("border-bottom","2px solid red");
	$('.tenderdetails .titles div[name=details]').css("color","red");
	$('.tenderdetails .titles div[name=record]').css("color","#656565");
});


function isAvailableUsername(username){
	var reg = /^(\w|[\u4E00-\u9FA5])*$/;
	return username.match(reg);
};


$('.buttonpagesJump').live("click",function(){
	clickbuttonpagesJump();
 });



function clickbuttonpagesJump(){
	var number1 = $('.numberPages').val();//$('.numberPages').attr("value");
	var number2 = parseInt($('.pagesText').text()); //$('.pagesText').attr("value");
	var number3 = parseInt($('.pagesTexts').attr("value"));
	if(is_null($('.numberPages').val())){
		layer.msg("不能为空",1,9);
		$('.numberPages').val(number3);
		return false;
	}else{
		if(isNaN($('.numberPages').val())){
			 layer.msg("请输入数字",1,9);return false;
		}else if($('.numberPages').val() >0){	   		
	       	if($('.numberPages').val()<=number2){
	   			getImageAjax('image_list_div',$('.numberPages').val());
	       	}else{
	       		layer.msg("输入数字过大或过小",1,9);       		
	       		$('.numberPages').val(number3);
	       		return false;
	       	}
	    }
	}
}



$('#divPage div[name="nextPage"]').live("click",function(){
    //var number = $('.numberPages').val();  
    //alert(number);
    //alert($('.pagesText').html());     
    if( $('.numberPages').val() == $('.pagesText').html() ){
   	 layer.msg("已经是最后一页了",1,9);
   	 return false;
    }else{      
    	getImageAjax('image_list_div',parseInt($('.numberPages').val())+1);
    }
});

$('#divPage div[name="previousPage"]').live("click",function(){
	 var number = $('.numberPages').val(); 
	 if(number==1){ layer.msg("已经是第一页了",1,9);return false;
	 }else getImageAjax('image_list_div',parseInt(number)-1);
});

$('.deleteDivImg').live({
	   mouseenter:function(){
   		$(this).css("background","url(/images/upload-del.png) no-repeat 0px -2px");
	   },mouseleave:function(){
		   $(this).css("background","url(/images/upload-del.png) no-repeat 0px -21px");
	   }
	});


/*****************************************************************************************************************/
/*caff.js.validation.js*/

var CK_TRUE = 'TRUE';
var CK_FALSE = 'FALSE';
var CK_IGNORE = 'IGNORE';//erase effect before
var CK_NONE = 'NONE';//do nothing

/**
 * 判断是否有class="input_ck_err",没有就添加该属性
 * @param $input
 * @return
 */
function f_ck_set_input_err($input){
	if(!$input.hasClass('input_ck_err')){
		$input.addClass('input_ck_err');
	}
};
/**
 * 检查错误信息
 * @param $input
 * @param message
 * @return
 */
function f_ck_error($input, message){
	f_ck_set_input_err($input);
	var $div_msg = get_div_msg($input);
	f_ck_error_div_msg($div_msg, message);
};
/**
 * 显示错误信息
 * @param $div_msg
 * @param message
 * @return
 */
function f_ck_error_div_msg($div_msg, message){
	if($div_msg.length >0){
		$div_msg.show();
		
		var $msg_pic = $div_msg.find('.msg_pic');
		var $msg_content = $div_msg.find('.msg_content'); 
		if($msg_pic.length >0){
			$msg_pic.html('<img src="/images/ico/cha.png"/>');
			$msg_pic.show();
		} 
		if($msg_content.length >0 && !is_null(message)){
			$msg_content.css('color', 'red');
			$msg_content.html(message);
			$msg_content.show();
		}else{ 
			$msg_content.hide(); 
		}
	}
};
/**
 * 检查正确信息
 * @param $input
 * @param message
 * @return
 */
function f_ck_ok($input, message){
	f_ck_set_input_ok($input);
	var $div_msg = get_div_msg($input);
	f_ck_ok_div_msg($div_msg, message);
};
/**
 * 显示正确信息
 * @param $div_msg
 * @param message
 * @return
 */
function f_ck_ok_div_msg($div_msg, message){
	if($div_msg.length >0){
		$div_msg.show();
		
		var $msg_pic = $div_msg.find('.msg_pic');
		var $msg_content = $div_msg.find('.msg_content');
		if($msg_pic.length >0){
			$msg_pic.html('<img src="/images/ico/gou_ck.png"/>');
			$msg_pic.show();
		}
		if($msg_content.length >0 && !is_null(message)){
			$msg_content.css('color', '#82B000');
			$msg_content.html(message);
			$msg_content.show();
		}else{
			$msg_content.hide();
		}
	}
};
/**
 * 判断是否有class="input_ck_err",有就移除该属性
 * @param $input
 * @return
 */
function f_ck_set_input_ok($input){
	if($input.hasClass('input_ck_err')){
		$input.removeClass('input_ck_err');
	}
};

function f_ck_info($input, message){
	f_ck_set_input_ok($input);
	var $div_msg = get_div_msg($input); 
	f_ck_info_div_msg($div_msg, message);
};
function f_ck_info_div_msg($div_msg, message){
	if($div_msg.length >0){
		$div_msg.show();
		
		var $msg_pic = $div_msg.find('.msg_pic');
		var $msg_content = $div_msg.find('.msg_content');
		$msg_pic.hide();
		if($msg_content.length >0){
			if(!is_null(message)){
				$msg_content.css('color', '#8d8d8d');
				$msg_content.html(message);
				$msg_content.show();
			}else{
				$msg_content.hide();
			}
		}
	}
};
/**
 * 等到相应对象的显示信息
 * @param $input
 * @return
 */
function get_div_msg($input){
	/**
	 * 在一级父级元素上找class="msg"，找到则返回
	 */
	var $parent = $input.parent();
	var $div_msg = $parent.find('.msg');
	if($div_msg.length >0){
		return $div_msg;
	}
	/**
	 * 在二级父级元素上找class="msg"，找到则返回
	 */
	$parent = $input.parent().parent();
	$div_msg = $parent.find('.msg');
	if($div_msg.length >0){
		return $div_msg;
	}
	/**
	 * 在三级父级元素上找class="msg"，找到则返回
	 */
	$parent = $input.parent().parent().parent();
	$div_msg = $parent.find('.msg');
	if($div_msg.length >0){
		return $div_msg;
	}
	/**
	 * 在四级父级元素上找class="msg"，找不找的到都返回
	 */
	$parent = $input.parent().parent().parent().parent();
	$div_msg = $parent.find('.msg');
	return $div_msg;
};

var HAD_BIND_CHECK_FORM_BLUR = false;
function check_form(msg, check_data, is_just_checking, is_just_this_id){ 
	var result = true;
	var first_err_id = '';
	$.each(check_data, function(k,v){
		var id = k;
		if(is_null(is_just_this_id) || is_just_this_id == id){
			var $item = $('#'+id);
			var val = $item.val();
			var note = check_data[k];
			if(note == "RICHTEXT"){
				val = "";
			}
			var item_check_result = eval(id+'("'+val+'")');
			note = check_data[k];//set note again
			
			if(item_check_result == CK_FALSE){
				result = false;
				f_ck_error($item, note);
				if(is_null(first_err_id)){
					first_err_id = id;
				}
			}else if(item_check_result == CK_TRUE){
				f_ck_ok($item, "");
			}else if(item_check_result == CK_IGNORE){//default:erase effect before
				f_ck_info($item, "");
			}else if(item_check_result == CK_NONE || is_null(item_check_result)){//do nothing
				result = false;
			}
			
			if(!HAD_BIND_CHECK_FORM_BLUR){
				bindCheckFormBlur(msg, check_data, id);
				bindCheckFormKeyUp(msg, check_data, id);
			}
		}
	}); 
	HAD_BIND_CHECK_FORM_BLUR = true;
	
	if(!result && is_just_checking != true && !is_null(first_err_id)){
		var $first_item = $('#'+first_err_id);
		if($first_item.is('input') && $first_item.attr('type') == 'text'){
			focusInput(first_err_id);
		}
		$first_item.focus();
	}
	if(is_just_checking != true && result && is_null(msg) == false){
		result = confirm(msg);
	}
	return result; 
};

function bindCheckFormBlur(msg, check_data, id) {
	var $item = $('#'+id);
	$item.blur(function(){
		check_form(msg, check_data, true, id);
	});
};

function bindCheckFormKeyUp(msg, check_data, id) {
	var $item = $('#'+id);
	$item.keyup(function(){
		check_form(msg, check_data, true, id); 
	}); 
};

/*******一些常用的客服端校验方法**********/

/**
 * 校验图片验证码
 */
function vcodeImage(){
    var val = $('#vcodeImage').val();
    if(!check_length(val,4,4)){
        ck_data['vcodeImage'] = "为4个字符";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 校验登录ID
 */
function username(){
    return usernameInner("username", "长度为2-20");
};

/**
 * 登录ID校验工具方法
 */
function usernameInner(id, msg){
    var val = $('#' + id).val();
    if(!check_length(val,2,20)){
        ck_data[id] = msg;
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 校验登录密码（登录时）
 */
function password(){
    return passwordInner("password", "长度为6-20");
};

/**
 * 校验原始密码
 */
function originalPassowrd(){
    return passwordInner("originalPassowrd", "长度为6-20");
};

/**
 * 交易原始密码
 */
function safePassowrd(){
    return passwordInner("safePassowrd", "长度为6-20");
};

/**
 * 校验确认密码
 */
function confirmPassowrd(){
    return confirmPassowrdInner("originalPassowrd", "confirmPassowrd");
};

/**
 * 检查用户邮箱
 */
function userEmail(){
    return userEmailInner("userEmail");
};
function userEmailInner(userEmail){
	var val = $('#' + userEmail).val();
    if(!is_email(val)){
        ck_data[userEmail] = "邮箱格式不正确";
        return CK_FALSE;
    }
    return CK_TRUE;
};

function confirmPassowrdInner(originalPassowrdId, confirmPassowrdId){
	var originalPassowrd = $("#" + originalPassowrdId).val();
	var confirmPassowrd = $("#" + confirmPassowrdId).val();
	if(is_null(originalPassowrd)){//原始密码输入不正确，确认密码不作校验
		return CK_NONE;
	}
	
	if(originalPassowrd != confirmPassowrd){
		ck_data[confirmPassowrdId] = "两次输入不一致";
		return CK_FALSE;
	}
    return CK_TRUE;
};

/**
 * 密码校验工具方法
 */
function passwordInner(id, msg){
    var val = $('#' + id).val();
    if(!check_length(val,6,20)){
        ck_data[id] = msg;
        return CK_FALSE;
    } 
    return CK_TRUE;
};

var isUsernameExisted = false;
var isUsernameBadFormat = false;
var usernameExistedMsg = "用户名已被注册";
var usernameBadFormat = "中文，字母，数字及下划线";
function usernameEx() {
    if(isUsernameExisted){
        ck_data['usernameEx'] = usernameExistedMsg;
        return CK_FALSE;
    }
    if(isUsernameBadFormat){ 
        ck_data['usernameEx'] = usernameBadFormat;
        return CK_FALSE;
    }
    return usernameExCheckId();
};
function usernameExCheckId() {
    return usernameInner("usernameEx", "用户名长度为2-20");
};
function chcekNameExistUsername() {
    if(usernameExCheckId() == CK_TRUE){
        var name = $("#usernameEx").val().trim();
        chcekNameExist(
                name, "usernameCheckingImageId", 
                "usernameMsg", "true", usernameExistedMsg, "恭喜，该用户名可以注册",
                function(result){
                	isUsernameExisted = false;
                	isUsernameBadFormat = false;
                    if(result == "true"){
                    	isUsernameExisted = true;
                    }else if(result == "namebad"){
                    	isUsernameBadFormat = true;
                    }else {
                    	isUsernameExisted = false; 
                    }
                });
    }
};
function chcekNameExist(name, loadingId, msgDivId, errorResult, errorMsg, okMsg, exFunc) {
	chcekNamePhoneExistAjax("checkname", "name", name, loadingId, msgDivId, errorResult, errorMsg, okMsg, exFunc);
};

function chcekReferrerNameExist(name, loadingId, msgDivId, errorResult, errorMsg, okMsg, exFunc) {
	chcekNamePhoneExistAjax("checkReferrerName", "name", name, loadingId, msgDivId, errorResult, errorMsg, okMsg, exFunc);
};

function bindUsernameAjaxChecking() {
	$("#usernameEx").blur(function(){
		isUsernameExisted = false;//只要重新填写了用户名，都认为用户名是没有被注册的
	    f_ck_info($("#usernameEx"), "");
	    chcekNameExistUsername();
	});
};

/**
 * 检查绑定手机
 */
var isPhoneExisted = false;
var phoneExistedNote = "该手机已经被使用";
var phoneBadFormat = "号码开头为13,14,15,18,共11位";

function userPhone(){
    if(isPhoneExisted){
    	ck_data["userPhone"] = phoneExistedNote;
    	return CK_FALSE;
    }
    return checkUserPhoneFormat();
};
function checkUserPhoneFormat(){
    return checkUserPhoneFormatInner("userPhone");
};
function checkUserPhoneFormatInner(inputId){
    var val = $('#' + inputId).val();
    if(!is_mobile(val)){
        ck_data[inputId] = phoneBadFormat;
        return CK_FALSE;
    } 
    return CK_TRUE;
};
function chcekUserPhoneAjax() {
    if(checkUserPhoneFormat() == CK_TRUE){
        var phone = $("#userPhone").val().trim();
        chcekNamePhoneExistAjax(
        		"checkphone", "phone", phone, 
        		"userPhoneCheckingImageId", "userPhoneMsg", 
        		"true", phoneExistedNote, "恭喜，该号码可以使用", 
        		function(result){
                    if(result == "true"){
                    	isPhoneExisted = true;
                    }else {
                    	isPhoneExisted = false;
                    }
                });
    }
};

/**
 * 在发送手机验证码时，检查手机号码格式
 */
function checkUserPhoneWhenSendVcodePhone(){
    if(userPhone() == CK_TRUE){
        return true;
    }else if(checkUserPhoneFormat() == CK_FALSE){
    	f_ck_error($("#userPhone"), phoneBadFormat); 
	    $("#userPhone").focus();
	    return false;
    }else if(isPhoneExisted){
    	f_ck_error($("#userPhone"), phoneExistedNote); 
	    $("#userPhone").focus();
	    return false;
    }
    return false;
}; 

function bindUserPhoneAjaxCheck() {
	$("#userPhone").blur(function(){
		isPhoneExisted = false;
	    f_ck_info($("#userPhone"), "");
	    chcekUserPhoneAjax();
	});
};
function chcekNamePhoneExistAjax(ajaxKey, itemName, itemValue, loadingId, msgDivId, errorResult, errorMsg, okMsg, exFunc) {
    $("#" + loadingId).show();
    var params = {};
    params["hkey"] = ajaxKey;
    params[itemName] = itemValue;
	ajaxGetDataEx(params,
        function(data){
        	 $("#" + loadingId).hide();
        	 var result = data.result; 
             if(result == errorResult){
            	 f_ck_error($("#" + msgDivId), errorMsg); 
             }else if(result == "namebad"){
            	 f_ck_error($("#" + msgDivId), usernameBadFormat); 
             }else {
            	 f_ck_ok($("#" + msgDivId), okMsg); 
             }
             exFunc(result); 
        });
};

/**
 * 检查手机验证码
 */
function vcodePhone() { 
	var val = $('#vcodePhone').val();
	if(!check_length(val,6,6) || !is_numeric(val)){
        ck_data["vcodePhone"] = "为6个数字";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 检查姓名
 */
function realName() {
	var val = $('#realName').val();
	if(!check_length(val,2,20)){
        ck_data["realName"] = "长度必须为2-20";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 检查省市
 */
function userCity() {
    var val1 = $('#userProvince').val();
    var val2 = $('#userCity').val();
    if(parseInt(val1) == 0 || is_null(val2) || parseInt(val2) == 0){
        ck_data["userCity"] = "请选择户籍地址";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 检查贷款类型
 */
function borrowerLoanType() {
    var val = $('#borrowerLoanType').val();
    if(parseInt(val) == 0){
        ck_data["borrowerLoanType"] = "请选择贷款种类";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 检查所属分公司
 */
function borrowerRegion() {
    var val = $('#borrowerRegion').val();
    if(parseInt(val) == 0){
        ck_data["borrowerRegion"] = "请选择所属分公司";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

/**
 * 检查房贷类型
 */
function houseLoanType() {
    if(borrowerLoanType() != CK_TRUE 
            || parseInt($("#borrowerLoanType").val()) != 2){
        return CK_IGNORE;
    }
    
    var val = $('#houseLoanType').val();
    if(parseInt(val) == 0){
        ck_data["houseLoanType"] = "请选择房贷类型";
        return CK_FALSE;
    } 
    return CK_TRUE;
};

function bindShowHouseLoanTypeIfFunc(){
	$("#borrowerLoanType").change(function(){
    	showHouseLoanTypeIf();
    });
};

function showHouseLoanTypeIf() {
	$("#houseLoanTypeDiv").hide();
	if(parseInt($("#borrowerLoanType").val()) == 2){
	    $("#houseLoanTypeDiv").show();
	}
};

function filterItem1() {
    return filterItemInner("filterItem1");
};

function filterItemInner(filterItemId) {
    var hasChecked = false;
    $(".filterCheckBox").each(function(){
        if($(this).attr("checked")){
        	hasChecked = true;
        	return false;
        }
    });
    
    if(hasChecked == false){ 
    	ck_data[filterItemId] = "至少需要一个条件";
    	return CK_FALSE; 
    }
    return CK_TRUE;
};

function hongBaoAmount(hongBaoAmountId, maxAmount) {
	var val = $('#' + hongBaoAmountId).val();
    if(!is_numeric(val)){
        ck_data[hongBaoAmountId] = "必须是数值";
        return CK_FALSE;
    } 
    if(parseFloat(val) < 10 
        || parseFloat(val) > maxAmount){
        ck_data[hongBaoAmountId] = "范围：10-" + maxAmount;
        return CK_FALSE;
    } 
    return CK_TRUE;  
};

function hongBaoCountInner(sysMinHongBaoAmountPerOne, hongBaoCountId, hongBaoAmountId, hongBaoAmountFunc) {
    if(hongBaoAmountFunc() != CK_TRUE){
        return CK_NONE;
    }
    
    var val = $('#' + hongBaoCountId).val();
    if(!is_numeric(val)){
        ck_data[hongBaoCountId] = "必须是数值";
        return CK_FALSE;
    } 
    if(parseInt(val) <= 0){ 
        ck_data[hongBaoCountId] = "必须大于0";
        return CK_FALSE;
    } 

    var total = parseFloat($('#' + hongBaoAmountId).val());
    var averageAmount = total/parseInt(val);
    if(averageAmount < sysMinHongBaoAmountPerOne) {
        ck_data[hongBaoCountId] = "当前设置使得单个红包金额小于" + sysMinHongBaoAmountPerOne;
        return CK_FALSE;
    }
    
    return CK_TRUE;
};

function setAmountType() {
    var $selectItem = $("#amountTypeDiv").find(".itemSelect_true");
    $("#amountType").val($selectItem.attr("value"));
};

function amountType() {
	  var $selectItem = $("#amountTypeDiv").find(".itemSelect_true");
    if($selectItem.length == 0){
        ck_data["amountType"] = "请选择金额类型";
        return CK_FALSE;
    } 
    return CK_TRUE;
}; 



/***************************************************************************************************************************************************************************/
/*alert.js*/
function alertNotity(notify){
	if(is_null(notify)){
		return;
	}
	
	if("noLogin" == notify)										alertMsg("没有登录用户");
	else if("entityModifyfalse" == notify)					alertMsg("添加成功");
	else if("entityModifytrue" == notify)					alertMsg("修改成功");
    else if("entityRemoved" == notify)					alertMsg("已删除");
    else if("resetAuthoritiesOK" == notify)				alertMsg("保存成功");
    else if("mailSendOK" == notify)						alertMsg("已发送");
    else if("mailSendError" == notify)						alertMsg("发送失败，请稍后重试！");
    else if("updateOptionFailedImmutable" == notify) alertMsg("保存失败，尝试更改不可修改的选项");
    else if("updateOptionOK" == notify)					alertMsg("保存成功");
    else if("updateOptionBatchOK" == notify)			alertMsg("保存成功");
    else if("smsNullUser" == notify)						alertMsg("接收用户为空");
    else if("smsNullMessage" == notify)					alertMsg("短信内容不能为空");
    else if("sms_0" == notify)								alertMsg("短信发送成功");
    else if("sms_1" == notify)								alertMsg("发送失败，已达到当日短信发送上限");
    else if("sms_2" == notify)								alertMsg("发送失败，请稍后重试");
    else if("smsResetDayLimitOK" == notify)			alertMsg("已重置");
    else if("originalPassowrdIncorrect" == notify)		alertMsg("原密码不正确");
    else if("confirmPassowrdIncorrect" == notify)		alertMsg("新密码两次输入不一致");
    else if("newPassowrdEmpty" == notify)				alertMsg("新密码不能为空");
    else if("modifyPassowrdOK" == notify)				alertMsg("密码已修改");
    else if("resetTradePasswordOK" == notify)			alertMsg("交易密码已清空");
    else if("idPhoneMismatch" == notify)					alertMsg("数据不匹配");
    else if("resetPasswordOK" == notify)					alertMsg("已重置");
    else if("resetPasswordTimeExpired" == notify)	alertMsg("操作已过期，请重新进行重置密码操作");
    else if("resetPasswordCodeError" == notify)		alertMsg("链接码错误或操作已过期");
    else if("usernameExisted" == notify)						alertMsg("注册名称已经存在");
    else if("usernameIllegal" == notify)						alertMsg("注册名称只能是中文，字母，数字及下划线");
    else if("usernameNotBetween4And20" == notify)		alertMsg("登录名长度为2-20");
    else if("passwordNotBetween6And20" == notify)		alertMsg("登录密码长度为6-20");
	else if("phoneBandAnotherId" == notify)				alertMsg("该手机号已绑定，请使用其他的手机号");
    else if("referrerError" == notify)							alertMsg("推荐人不存在");
    else if("phoneActivatedOK" == notify)				alertMsg("账户激活成功");
    else if("bindingMailOK" == notify)						alertMsg("邮箱绑定成功");
    else if("sendMailError" == notify)						alertMsg("发送邮件出现错误，请稍候重试");
    else if("badMailFormat" == notify)						alertMsg("邮件格式不正确");
    else if("badPhoneFormat" == notify)					alertMsg("手机格式不正确");
    else if("sendMailOK" == notify)							alertMsg("邮件发送成功");
    else if("phoneSwithApplyOK" == notify)				alertMsg("提交成功");
    else if("已同意" == notify)									alertMsg("已同意");//这两个中文的关键字用在审核项目操作
    else if("已拒绝" == notify)									alertMsg("已拒绝");
    else if("auditingResultError" == notify)				alertMsg("审核结果参数错误");
    else if("auditingNoMatchingItem" == notify)		alertMsg("没有要审核的数据，请检查传递的ID");
    else if("noFilesRemoving" == notify)					alertMsg("没有要删除的图片");
    else if("filesRemoved" == notify)						alertMsg("图片已删除");
    else if("contactPersonNameNullBadPhone" == notify)	alertMsg("联系人的姓名为空或手机格式不正确");
    else if("saveContactPersonOK" == notify)				alertMsg("联系人保存成功");
    else if("removeContactPersonOK" == notify)			alertMsg("已删除");
    else if("saveContactPersonAuthFailed" == notify)	alertMsg("没有权限");
    else if("saveUserDetailOK" == notify)					alertMsg("已保存");
    else if("saveUserCompanyOK" == notify)				alertMsg("已保存");
    else if("saveCompanyNameError" == notify)			alertMsg("公司名称长度为4-100");
    else if("saveCompanyAddressError" == notify)			alertMsg("公司地址长度为4-200");
    else if("realNameLockOK" == notify)							alertMsg("已锁定提款姓名");
    else if("realNameLockAgainForbidden" == notify)			alertMsg("不能重复锁定姓名");
    else if("setUserHasSpecialRealNameOK" == notify)		alertMsg("设置成功");
    else if("realNameNotChinese2_20" == notify)				alertMsg("姓名为2-20个汉字");
    else if("specialNameNot2_30" == notify)					alertMsg("您的姓名长度必须为2-30");
    else if("provinceCodeIllegal" == notify)						alertMsg("无效的省份");
    else if("cityCodeIllegal" == notify)								alertMsg("无效的县市");
    else if("noUserById" == notify || "noUserByName" == notify) alertMsg("找不到匹配的用户");
    else if("identityApplyOK" == notify)							alertMsg("申请成功");
    else if("identityCannotApplyCauseAuthed" == notify)	alertMsg("已通过认证，不能再次申请");
    else if("birthdayIllegal" == notify)								alertMsg("无效的出生日期");
    else if("identityCannotApplyCauseAuditing" == notify)	alertMsg("存在正在审核中的身份认证，不能重复申请");
    else if("idNumberMustUnique" == notify)					alertMsg("证件号码已被其他账户认证");
    else if("idNumberIllegal" == notify)							alertMsg("无效的证件号码，其长度应为8-50");
    else if("needIdImages" == notify)								alertMsg("需要上传2张证件图片才能申请");
    else if("sexIllegal" == notify)									alertMsg("无效的性别参数");
    else if("addBankOK" == notify)									alertMsg("添加成功");
    else if("removeBankOK" == notify)							alertMsg("删除成功");
    else if("modifyBankOK" == notify)								alertMsg("修改成功"); 
    else if("bankTypeError" == notify)								alertMsg("无效的银行类别");
    else if("accountNumberError" == notify)						alertMsg("无效的账号，必须为10-30位数字");
    else if("openingBankError" == notify)							alertMsg("无效的开户行，必须为4-50位字符串");
    else if("bankAccountIdError" == notify)						alertMsg("无效的银行账户ID");
    else if("bankCountLimitError" == notify)						alertMsg("添加银行已达上限");
    else if("mustLockNameFirst" == notify)						alertMsg("必须先绑定提款姓名");
    else if("applyRechargeOfflineOK" == notify)				alertMsg("提交成功");
    else if("bankIdError" == notify)									alertMsg("充值银行账户不存在");
    else if("tradeCodeError" == notify)								alertMsg("交易编号长度为0-50");
    else if("rechargeAmountError" == notify)					alertMsg("充值金额必须大于零");
    else if("rechargeOfflineOK" == notify)						alertMsg("已充值");
    else if("rechargeOfflineIdError" == notify)					alertMsg("充值申请数据Id错误");
    else if("tradeDateError" == notify)								alertMsg("充值时间格式不正确");
    else if("payConfigIdError" == notify)							alertMsg("请选择充值平台");
    else if("rechargeAmountError" == notify)					alertMsg("充值金额必须大于零");
    else if("confirmRechargeUrlError" == notify)				alertMsg("确认充值页面的URL不合法");
    else if("rechargeOnlineMakeupOK" == notify)				alertMsg("手动补单成功");
    else if("rehcargeOnlineEntityError" == notify)				alertMsg("充值实体不存在或状态不正确");
    else if("modifyAmountOrderOK" == notify)					alertMsg("已更新");
    else if("amountOrderStrError" == notify)						alertMsg("资金选取顺序串错误");
    else if("amountOrderTypeError" == notify)					alertMsg("资金选取顺序类别参数错误");
    else if("saveServiceOK" == notify)								alertMsg("已保存");
    else if("nicknameError" == notify)								alertMsg("昵称长度为2-15");
    else if("mottoError" == notify)									alertMsg("格言长度为2-50");
    else if("switchServiceOK" == notify)							alertMsg("已更换");
    else if("usernameStrError" == notify)							alertMsg("用户名称串长度为2-2000");
    else if("stillHasCustomer" == notify)							alertMsg("客服名下还有用户，不能删除");
    else if("suspendServiceOK" == notify)						alertMsg("已删除");
    else if("vipPayPending" == notify)								alertMsg("已成为未付费VIP");
    else if("vipPayOK" == notify)									alertMsg("已成为VIP");
    else if("vipRenewalOK" == notify)								alertMsg("续费成功");
    else if("serivceIdError" == notify)								alertMsg("客服Id错误");
    else if("mustPayPending" == notify)							alertMsg("必须针对未付费VIP操作");
    else if("vipIdError" == notify)									alertMsg("VIP实体Id参数错误");
    else if("vipGiftOK" == notify)									alertMsg("VIP赠送成功");
    else if("vipGiftUserIdError" == notify)							alertMsg("错误：用户不存在或已经是VIP");
    else if("vipRuleUrlOK" == notify)								alertMsg("保存成功");
    else if("makeBorrowerOK" == notify)							alertMsg("已设置为借款者");
    else if("borrowRiskInfoOK" == notify)							alertMsg("保存成功");
    else if("badBorrowerType" == notify)							alertMsg("借款者类型参数错误");
    else if("creditAmountError" == notify)						alertMsg("授信额度必须大于零");
    else if("borrowTypeError" == notify)							alertMsg("借款类型不正确");
    else if("notBorrowerError" == notify)							alertMsg("用户没有借款权限");
    else if("calculationTypeError" == notify)						alertMsg("计息方式错误");
    else if("configBorrowNoAuth" == notify)						alertMsg("当前登录用户没有修改借款的权限");
    else if("borrowAmountTooSmall" == notify)					alertMsg("借款金额小于系统最小借款金额");
    else if("borrowAmountTooLarge" == notify)					alertMsg("借款金额大于目前用户可用授信额度");
    else if("borrowRateTooSmall" == notify)						alertMsg("借款利率小于系统最小利率");
    else if("borrowRateTooLarge" == notify)						alertMsg("借款利率大于系统最大利率");
    else if("timeCountTooSmall" == notify)						alertMsg("借款期限小于最小下限");
    else if("timeCountTooLarge" == notify)						alertMsg("借款期限大于最大上限");
    else if("rewardRateTooSmall" == notify)						alertMsg("投标奖励比例小于最小下限");
    else if("rewardRateTooLarge" == notify)						alertMsg("投标奖励比例大于最大上限");
    else if("biddingDayTooSmall" == notify)						alertMsg("招标天数小于系统下限");
    else if("biddingDayTooLarge" == notify)						alertMsg("招标天数大于系统上限");
    else if("minBidAmountTooSmall" == notify)					alertMsg("最小投标金额小于系统最小投标下限");
    else if("minBidAmountTooLarge" == notify)					alertMsg("最小投标金额大于借款金额");
    else if("maxBidAmountTooLarge" == notify)				alertMsg("最大投标金额大于借款金额");
    else if("maxBidAmountTooSmall" == notify)				alertMsg("最大投标金额不能小于最小投标金额");
    else if("bidPasswordError" == notify)							alertMsg("投标密码长度小于20");
    else if("borrowTitleError" == notify)							alertMsg("借款标题长度为4-50");
    else if("borrowDescriptionError" == notify)					alertMsg("借款详情长度不大于100000");
    else if("danBorrowNoBondCom" == notify)					alertMsg("担保标没有设定担保公司");
    else if("cannotMakeNewBorrow" == notify)					alertMsg("不能再创建新的借款");
    else if("configBorrowStep1OK" == notify)					alertMsg("保存成功");
    else if("configBorrowStep2OK" == notify)					alertMsg("保存成功");
    else if("configBorrowStep3OK" == notify)					alertMsg("保存成功");
    else if("configBorrowStep4OK" == notify)					alertMsg("保存成功");
    else if("cannotModifyBorrow" == notify)						alertMsg("不能修改");
    else if("noStep1Error" == notify)								alertMsg("需要先完成借款类型配置");
    else if("noStep2Error" == notify)								alertMsg("需要先完成金额数据配置");
    else if("noStep3Error" == notify)								alertMsg("需要先完成投标限制配置");
    else if("noStep4Error" == notify)								alertMsg("需要先完成标题及描述配置");
    else if("undoBorrowOK" == notify)								alertMsg("借款已撤销");
    else if("undoNotBiddingOrPending" == notify)				alertMsg("只能撤销待招标或招标中的借款");
    else if("notBidPending" == notify)								alertMsg("不是待招标中的借款");
    else if("borrowBeBidding" == notify)							alertMsg("操作成功");
    else if("submitDraftOK" == notify)								alertMsg("借款已发布");
    else if("auditBorrowOK" == notify)								alertMsg("操作成功");
    else if("auditNoteError" == notify)								alertMsg("审核备注不能大于100");
    else if("mismatchPreState" == notify)						alertMsg("审核状态错误");
    else if("lessThanMinBidAmount" == notify)					alertMsg("投标金额小于最小投标金额");
    else if("largerThanMaxBidAmount" == notify)				alertMsg("累计投标金额大于最大投标金额");
    else if("largerThanAvailableAmount" == notify)			alertMsg("投标金额大于可用金额");
    else if("borrowNotBidding" == notify)							alertMsg("借款已结束招标");
    else if("bidOK" == notify)											alertMsg("投标成功");
    else if("bidError" == notify)										alertMsg("投标时系统发生错误");
    else if("cannotBidItself" == notify)							alertMsg("不能给自己借款投标");
    else if("bidAmountLessThanZero" == notify)				alertMsg("投标金额不能小于零");
    else if("bidAmountLargerThanAmountLeft" == notify)	alertMsg("投标金额不能大于借款还需金额");
    else if("badBidPassword" == notify)							alertMsg("投标密码错误");
    else if("repayAmountError" == notify)							alertMsg("还款金额必须是大于零的数值");
    else if("notEnoughAvailableAmount" == notify	)			alertMsg("没有足够金额还款");
    else if("noPlan" == notify)										alertMsg("还款计划Id错误");
    else if("repayOK" == notify)										alertMsg("还款成功");
    else if("withdrawIdError" == notify)							alertMsg("提现实体Id错误");
    else if("withdrawBankError" == notify)						alertMsg("请选择提现银行");
    else if("withdrawAmountError" == notify)					alertMsg("不正确的提现金额");
    else if("withdrawAmountTooSmall" == notify)				alertMsg("提现金额小于最小提现金额");
    else if("withdrawApplyOK" == notify)							alertMsg("提交成功");
    else if("withdrawUndoOK" == notify)							alertMsg("已撤销");
    else if("auditWithdrawOK" == notify)							alertMsg("审核通过");
    else if("switchCannotWithdrawOK" == notify)				alertMsg("操作成功");
    else if("planNotExist" == notify)								alertMsg("收款计划不存在");
    else if("planNotBelongUser" == notify)						alertMsg("收款计划不属于操作用户");
    else if("planNotNormal" == notify)								alertMsg("收款计划不是待收状态");
    else if("planNotVipPay" == notify)								alertMsg("收款计划不是以VIP标准垫付");
    else if("profitRateError" == notify)								alertMsg("年收益不满足要求");
    else if("transferDaysError" == notify)							alertMsg("转让有效天数不正确");
    else if("makeReceiptTransferOK" == notify)				alertMsg("发布成功");
    else if("noTransferError" == notify)							alertMsg("不存在的债权转让");
    else if("tansferNotNormal" == notify)							alertMsg("债权转让不处于转让中");
    else if("transferUndoOK" == notify)							alertMsg("撤销成功");
    else if("cannotTradeItselfTransfer" == notify)				alertMsg("不能购买自己的债权");
    else if("tansferTradeOK" == notify)							alertMsg("购买成功");
    else if("switchForbitTransferOK" == notify)					alertMsg("修改成功");
    else if("saveAutoBidOK" == notify)							alertMsg("保存成功");
    else if("minDateLargerMaxDate" == notify)					alertMsg("有效日期最小日期不能大于最大日期");
    else if("badFormatMinDate" == notify)						alertMsg("最小日期格式不正确，格式如2014-05-26");
    else if("badFormatMaxDate" == notify)						alertMsg("最大日期格式不正确，格式如2014-05-26");
    else if("amountLessThanMinBidAmount" == notify)		alertMsg("指定金额小于系统最小投标金额");
    else if("minAmountLessMinBidAmount" == notify)		alertMsg("投标金额下限不能小于系统最小投标金额");
    else if("minAmountLargerMaxAmount" == notify)			alertMsg("投标金额下限大于投标金额上限");
    else if("amountTooLarge" == notify)							alertMsg("金额设置过大");
    else if("minRateTooSmall" == notify)							alertMsg("设置的最小借款利率小于系统最小借款利率");
    else if("maxRateTooLarge" == notify)						alertMsg("设置的最大借款利率大于系统最大借款利率");
    else if("minRateLargerMaxRate" == notify)					alertMsg("最小借款利率不能大于最大借款利率");
    else if("minDayTooSmall" == notify)							alertMsg("最小借款天数不能小于系统最小借款天数");
    else if("maxDayTooLarge" == notify)							alertMsg("最大借款天数不能大于系统最大借款天数");
    else if("minDayLargeMaxDay" == notify)						alertMsg("最小借款天数不能大于最大借款天数");
    else if("minMonthTooSmall" == notify)						alertMsg("最小借款月数不能小于系统最小借款月数");
    else if("maxMonthTooLarge" == notify)						alertMsg("最大借款月数不能大于系统最大借款月数");
    else if("minMONTHLargeMaxMONTH" == notify)			alertMsg("最小借款月数不能大于最大借款月数");
    else if("autoBid_true" == notify)								alertMsg("已启用自动投标");
    else if("autoBid_false" == notify)								alertMsg("已停用自动投标");
    else if("minRewardLessZero" == notify)						alertMsg("奖励下限不能小于等于零");
    else if("maxRewardLargerMaxSys" == notify)				alertMsg("奖励上限大于系统最大投标奖励");
    else if("maxRewardLargerMax" == notify)					alertMsg("奖励下限大于奖励上限");
    else if("saveTemplateOK" == notify)							alertMsg("保存成功");
    else if("titleParamError" == notify)							alertMsg("标题参数占位符个数不符");
    else if("templateParamError" == notify)						alertMsg("SQL模板占位符个数不符");
    else if("removeTemplateOK" == notify)						alertMsg("成功删除");
    else if("templateLengthError" == notify)						alertMsg("SQL模板长度为9至2000");
    else if("titleLengthError" == notify)							alertMsg("标题长度为3至100");
    else if("paramCountError" == notify)							alertMsg("参数个数不能大于20");
    else if("noTemplate" == notify)									alertMsg("没有对应的模板实体");
    else if("paramStrError" == notify)								alertMsg("参数个数有错或参数值为空");
    else if("paramSQLError" == notify)								alertMsg("SQL语法错误");
    else if("saveUserFilterOK" == notify)							alertMsg("成功保存");
    else if("removeUserFilterOK" == notify)						alertMsg("成功删除");
    else if("noUserFilter" == notify)								alertMsg("没有设置对应过滤条件");
    else if("noUserList" == notify)									alertMsg("至少要指定一个正确的用户");
    else if("badYearMonthDay" == notify)						alertMsg("年月日格式不正确");
    else if("badHour" == notify || "badBidHour" == notify) alertMsg("小时范围为0-23");
    else if("badMin" == notify || "badBidMunite" == notify)alertMsg("分钟范围为0-59");
    else if("beginLateThanEnd" == notify || "bidTimePassed" == notify)alertMsg("起始时间不能晚于结束时间");
    else if("badBorrowCount" == notify)							alertMsg("分标个数错误");
    else if("atLeastOneFilter" == notify)							alertMsg("至少需要指定一个赠送条件");
    else if("saveActivityOK" == notify)							alertMsg("保存成功");
    else if("noActivityHandler" == notify)							alertMsg("活动处理器不正确"); 
    else if("modifyTransferFilterOK" == notify)					alertMsg("更新成功");
    else if("modifyVipActivityOK" == notify)						alertMsg("更新成功");
    else if("cannotModifyAmountType" == notify)				alertMsg("红包开放后不能修改金额类别");
    else if("saveHongBaoOK" == notify)							alertMsg("红包发布成功");
    else if("totalAmountSmall" == notify)						alertMsg("红包总金额小于系统红包最小金额");
    else if("largeAvailableAmount" == notify)					alertMsg("红包总金额大于可用金额");
    else if("hongBaoCountZero" == notify)						alertMsg("红包个数必须大于0");
    else if("hongBaoCountLarge" == notify)						alertMsg("红包个数太大导致单个红包金额小于系统红包最小金额");
    else if("maxPerUserZero" == notify)							alertMsg("单个用户最大红包个数必须大于0");
    else if("maxPerUserLarge" == notify)							alertMsg("单个用户最大红包个数不能大于红包总个数");
    else if("amountTypeError" == notify)							alertMsg("红包金额类型错误");
    else if("openDateTooClose" == notify)						alertMsg("定时开放时间距离当前时间太近");
    else if("availableDayZero" == notify)							alertMsg("有效天数必须大于0");
    else if("availableDayLarge" == notify)						alertMsg("有效天数不能大于系统最大有效天数");
    else if("filterTypeError" == notify)								alertMsg("用户筛选条件类别错误");
    else if("userCountError" == notify)								alertMsg("指定的用户个数不足以领完所有红包");
    else if("noFilter" == notify)										alertMsg("没有设置筛选条件");
    else if("includeOwner" == notify)								alertMsg("列表里不能包含红包发布人自身");
    else if("cannotUndoOnIncorrectState" == notify)			alertMsg("只有在\"待开放\"和\"派发中\"才能撤销红包活动");
    else if("undoHongBaoOK" == notify)							alertMsg("红包已撤销");
    else if("hongBaoTitleError" == notify)							alertMsg("红包标题为4-100");
    else if("hongBaoDescriptionError" == notify)				alertMsg("红包描述不能超过20000");
    else if("modifyHongBaoOK" == notify)						alertMsg("更新红包成功");
    else if("cannotLessMaxPerUser" == notify)					alertMsg("更新时不能减少单个用户最多红包数");
    else if("noHongBaoSetting" == notify)						alertMsg("没有设置正确的红包活动Id");
    else if("amountLargeZero" == notify)							alertMsg("红包总金额必须大于零");
    else if("amountMax" == notify)									alertMsg("红包总金额不能大于一百万");
    else if("countLargeZero" == notify)							alertMsg("红包个数必须大于零");
    else if("amountLessMin" == notify)							alertMsg("单个红包金额小于系统最小金额");
    else if("amountTypeError" == notify)							alertMsg("金额类型错误");
    else if("amountNull" == notify)									alertMsg("金额不能为空");
    else if("youCannotGrab" == notify)							alertMsg("呃，您不满足抢红包的条件");
    else if("cannotGrabYourself" == notify)						alertMsg("不能抢自己的红包");
    else if("noHongBaoWhenGrabing" == notify)				alertMsg("红包派发完毕");
    else if("noHongBaoWhenCheck" == notify)					alertMsg("红包派发完毕");
    else if("noHongBaoSetting" == notify)						alertMsg("没有设置正确的红包活动Id");
    else if("reachMaxPerUser" == notify)							alertMsg("已达到单个用户红包上限");
    else if("twoActionTooClose" == notify)						alertMsg("两次操作间隔时间太短");
    else if("borrowerRegionError" == notify)						alertMsg("用户所属分公司参数错误");
    else if("loanTypeError" == notify)								alertMsg("用户默认贷款类型参数错误");
    else if("houseLoanTypeError" == notify)						alertMsg("用户房贷类型参数错误");
    else if("modifyReferenceOK" == notify)						alertMsg("已更新");
    else if("borrowerAdded" == notify)								alertMsg("已添加借款人");
    else if("removeBorrowerImageOK" == notify)				alertMsg("已删除");
    else if("configBorrowerTiOK" == notify)						alertMsg("设置成功");
    else if("hasTiBorrowAlready" == notify)						alertMsg("已经有体验标账户");
    else if("makeTiBorrowOK" == notify)							alertMsg("发布成功");
    else if("noTiBorrower" == notify)								alertMsg("没有体验标账户");
    else if("notEnoughMoneyMakeTiBorrow" == notify)		alertMsg("体验标账户没有足够的可用余额");
    else if("edit_banner_ok" == notify)							alertMsg("编辑banner成功");
    else if("userFileIdError" == notify)								alertMsg("必须要选择上传图片");
    else if("bannerAddressError" == notify)						alertMsg("链接地址不能为空并不能超过200个字符");
    else if("bannerNameError" == notify)						alertMsg("banner主题不能超过200个字符");
    else if("deleteBannerOk" == notify)							alertMsg("删除banner成功");
    else if("upBannerOk" == notify)								alertMsg("上移成功");
    else if("downBannerOk" == notify)							alertMsg("下移成功");
    else if("addSnsPlateOK" == notify)							alertMsg("编辑版块成功");
    else if("removeSnsPlateOK" == notify)						alertMsg("删除版块成功");
    else if("removeSnsPlateError" == notify)					alertMsg("删除版块失败，必须要先删除版块下所有帖子");
    else if("descriptionsError" == notify)						alertMsg("版块描述不能为空和超过200个字符");
    else if("plateStateError" == notify)						alertMsg("必须要选择版块类型");
    else if("plateNameError" == notify)							alertMsg("版块名称不能为空并不能超过100字符");
    else if("editBlackOk" == notify)							alertMsg("添加社区黑名单用户成功");
    else if("blackUserExist" == notify)							alertMsg("此用户社区限制类型已存在");
    else if("blacktypeError" == notify)							alertMsg("必须要选择限制类型");
    else if("reasonError" == notify)							alertMsg("必须要填写限制原因");
    else if("labelNameError" == notify)							alertMsg("标签名称不能为空并不能超过 80个字符");
    else if("editLabelOk" == notify)							alertMsg("编辑标签成功");
    else if("removeLabelok" == notify)							alertMsg("删除标签成功");
    else if("resetLabelOk" == notify)							alertMsg("重置标签成功");
    else if("exchangeOK" == notify)								alertMsg("兑换成功");
    else if("noInvestInteger" == notify)							alertMsg("请指定投资积分");
    else if("notEnoughInvestInteger" == notify)				alertMsg("积分不足");
    else if("notInvestIntegralIntegerTimes" == notify)		alertMsg("兑换积分不是兑换单位的整数倍");
    else if("integralTimeCountLessOne" == notify)			alertMsg("积分倍数不能小于1");
    else if("integralExchangeUnitLessOne" == notify)		alertMsg("兑换积分单位不能小于1");
    else if("modifyInvestIntegralParamsOK" == notify)		alertMsg("更新成功");
    else if("blackError" == notify)									alertMsg("此功能操作你已经受到限制了");
    else if("titleError" == notify)										alertMsg("标题不能为空");
    else if("messageError" == notify)								alertMsg("内容不能为空");
    else if("addSnsThreadOK" == notify)							alertMsg("编辑帖子成功");
    else if("removeSnsThreadOK" == notify)						alertMsg("删除帖子成功");
    else if("editAnnouncementOk" == notify)					alertMsg("编辑公告成功");
    else if("removeAnnouncementOk" == notify)				alertMsg("删除公告成功");
    else if("noEntityClass" == notify)								alertMsg("静态化时没有对应的实体类型");
    else if("noEntityId" == notify)									alertMsg("静态化时没有设置正确的Id");
    else if("makeStaticOK" == notify)								alertMsg("静态化成功");
    else if("makeStaticFailed" == notify)							alertMsg("静态化未成功");
    else if("makeStaticBatchRan" == notify)						alertMsg("已经异步执行批量静态化");
    else if("editPostOk" == notify)									alertMsg("回复成功");
    else if("editPostFalse" == notify)								alertMsg("回复受到限制失败");
    else if("add_rdbanner_ok" == notify)							alertMsg("添加幻灯片成功");
    else if("undo_rdbanner_ok" == notify)						alertMsg("撤销幻灯片成功");
    else if("add_rdnews_ok" == notify)							alertMsg("添加推荐帖成功");
    else if("undo_rdnews_ok" == notify)							alertMsg("撤销推荐帖成功");
    else if("elitok" == notify)											alertMsg("加精华帖成功");
    else if("undoelitok" == notify)									alertMsg("取消精华帖成功");
    else if("resetModeratorsOK" == notify)						alertMsg("设置版主权限成功");
    else if("existUserFileIdError" == notify)						alertMsg("此图片已在其他版块设定，请重新选择图片");
    else if("undo_rd_ok" == notify)									alertMsg("撤销推荐成功");
    else if("move_recommend_ok" == notify)					alertMsg("移动成功");
    else if("addBlackOK" == notify)									alertMsg("成功添加");
    else if("removeBlackOK" == notify)							alertMsg("已移除");
    else if("modifySmsOK" == notify)								alertMsg("已保存");
    else if("undotopok" == notify)									alertMsg("撤销置顶成功");
    else if("topok" == notify)											alertMsg("置顶成功");
    else if("vcodeimageError" == notify)							alertMsg("验证码错误");
    else if("hided_ok" == notify)										alertMsg("屏蔽成功");
    else if("unhided_ok" == notify)									alertMsg("解除屏蔽成功");
    else if("modityMobileViewPcOK" == notify)					alertMsg("设置成功");
    else if("modifyCanMakeHongbaoOK" == notify)			alertMsg("设置成功");
    else if("noteTooLong" == notify)								alertMsg("客户备注不能超过100个字");
    else if("modifyNoteOK" == notify)								alertMsg("修改成功");
	
    else if("noAuth" == notify)										alertMsg("没有权限");
    else if(!is_null(notify) 
    		&& notify != 'registerOK'){//注册成功后直接跳转到激活页面，不需要通知
    	
    	alertMsg(notify);//防止遗落了任何通知
    }			
	 
};
function alertMsg(msg){
	alert(msg);
}; 

/*************************************
 * 
 * 
 * ————————  ——————————————————
 * 
 * *****************************************************************************************/

/**
 * 任务页面初始化的时候都会调用此方法
 */
function doinit(){
	initInputLabel();
	initContentFoldUnfold();
	init_all_datepicker();
};

/**
 * 执行操作时显示“正在执行操作”的提示
 */
function showDoingAction() {
    var $btDoingActionDiv = $("#btDoingActionDiv");
    $btDoingActionDiv.parent().find(".bt").parent().hide();
    $btDoingActionDiv.show();
};

/**
 * 按钮点击后，询问确认
 */
function confirmAction(msg, ckData, notShowDoingSign) {
    if(check_form(msg, ckData)){
    	if(notShowDoingSign != "true"){
    		showDoingAction();
    	}
        return true;
    }
    return false;
}; 

/**
 * 按钮点击后，询问确认
 */
function confirmAction2(msg) {
    if(confirm(msg)){
    	showDoingAction();
        return true;
    }
    return false;
}; 

/**
 * 内容折叠展开
 */
function initContentFoldUnfold(){
	$(".contentFoldUnfoldTrigerUnfold").click(function(){
    	$(this).hide();
        $(this).parent().find(".contentFoldUnfoldTrigerFold").parent().show();
    });
    $(".contentFoldUnfoldTrigerFold").click(function(){
    	$(this).parent().hide();
        $(this).parent().parent().find(".contentFoldUnfoldTrigerUnfold").show();
    });
};

/**
 * 显示审核窗口
 * 
 * @param width 窗口宽度
 * @param height 窗口高度
 * @param url 审核内容URL
 */
function showAudit(width, height, url){
    $.layer({
        type:2,
        title:false,
        iframe:{src : url},
        area:[width, height],
        offset : ['50px' , '50%']
    });     
    return false; 
};

/**
 * 单选打钩元素效果初始化
 */
function initItemRadioSelect(containerId){
	var $items = $("#" + containerId).find(".itemSelect");
	
	$items.click(function(){
		$("#" + containerId).find(".itemSelect").removeClass('itemSelect_true');
	    $(this).addClass('itemSelect_true');
	});
	
	$items.mouseover(function(){
	    $(this).addClass('itemSelectHover');
	});
	
	$items.mouseout(function(){
	    $(this).removeClass('itemSelectHover');
	});
};

/**
 * 获取单选选定的项
 */
function getItemRadioSelectItem(containerId){
	var target = null;
	$("#" + containerId).find(".itemSelect").each(function(){
		if($(this).hasClass('itemSelect_true')){
			target = $(this);
			return false;//break
		}
	});
	return target;
};

/**
 * 多选打钩元素效果初始化
 */
function initItemCheckBoxSelect(containerId){
	var $items = $("#" + containerId).find(".itemSelect");
	
	$items.click(function(){
		if($(this).hasClass('itemSelect_true')){
			$(this).removeClass('itemSelect_true');
		}else{
			$(this).addClass('itemSelect_true');
		}
	});
	
	$items.mouseover(function(){
	    $(this).addClass('itemSelectHover');
	});
	
	$items.mouseout(function(){
	    $(this).removeClass('itemSelectHover');
	});
};

/**
 * 获取多选选定的项
 */
function getItemCheckBoxSelectItem(containerId){
	var target = [];
	$("#" + containerId).find(".itemSelect").each(function(){
		if($(this).hasClass('itemSelect_true')){
			target.push($(this));
		}
	});
	return target;
};

/**
 * 全选
 */
function selectAllSelectItems(containerId){
	$("#" + containerId).find(".itemSelect").each(function(){
		if($(this).hasClass('itemSelect_true') == false){
			$(this).addClass('itemSelect_true');
		}
	});
};

/**
 * 全不选
 */
function selectNoneSelectItems(containerId){
	$("#" + containerId).find(".itemSelect").each(function(){
		if($(this).hasClass('itemSelect_true')){
			$(this).removeClass('itemSelect_true');
		}
	});
};

function drawProgressBar(barId,barImg,barImgWidth, percent,barR1,barR2,barX,barY){
    var paper = null;
    
    //初始化Raphael画布 
    paper = Raphael(barId, barImgWidth, barImgWidth); 
   
    //把底图先画上去 
    paper.image(barImg, 0, 0, barImgWidth, barImgWidth); 

    //进度比例，0到1，在本例中我们画65% 
    //需要注意，下面的算法不支持画100%，要按99.99%来画 
    var drawPercent = percent >= 1 ? 0.9999 : percent; 

    //开始计算各点的位置，见后图 
    //r1是内圆半径，r2是外圆半径 
    if(percent > 0){
	    var r1 = barR1, r2 = barR2, PI = Math.PI, 
	        p1 = { 
	            x:barX,  
	            y:barY 
	        }, 
	        p4 = { 
	            x:p1.x, 
	            y:p1.y + r2 - r1 
	        }, 
	        p2 = {  
	            x:p1.x - r2 * Math.sin(2 * PI * (1 - drawPercent)), 
	            y:p1.y + r2 - r2 * Math.cos(2 * PI * (1 - drawPercent)) 
	        }, 
	        p3 = { 
	            x:p4.x - r1 * Math.sin(2 * PI * (1 - drawPercent)), 
	            y:p4.y + r1 - r1 * Math.cos(2 * PI * (1 - drawPercent)) 
	        }, 
	        path = [ 
	            'M', p1.x, ' ', p1.y, 
	            'A', r2, ' ', r2, ' 0 ', percent > 0.5 ? 1 : 0, ' 1 ', p2.x, ' ', p2.y, 
	            'L', p3.x, ' ', p3.y, 
	            'A', r1, ' ', r1, ' 0 ', percent > 0.5 ? 1 : 0, ' 0 ', p4.x, ' ', p4.y, 
	            'Z' 
	        ].join(''); 
	
	    //用path方法画图形，由两段圆弧和两条直线组成，画弧线的算法见后 
	    paper.path(path) 
	        //填充渐变色，从#3f0b3f到#ff66ff 
	        .attr({"stroke-width":0.5, "stroke":"#049DE0", "fill":"#049DE0"}); 
    }

    //显示进度文字:小于1时保留两位小数，大于1时保留1位小数
    var percentD = percent * 100;
    if(percentD > 0 && percentD < 1){
    	percentD = percentD.toFixed(2);
    }else if(percentD >= 99.95 && percentD < 100){
    	percentD = Math.floor(percentD * Math.pow(10, 1)) / Math.pow(10, 1);
    }else if(percentD == 100){
    	percentD = percentD.toFixed(0);
    }else{
    	percentD = percentD.toFixed(1);
    }
    
    $("#" + barId).parent().find(".progrssbarText").text(percentD + "%"); 
};

$('.grabredpackage').live("click",function(){
	appendredpackage(false,'20','redpackage','images/ico/hb/bak.jpg','500','300','-300','200');
});

/**
 * 
 * @param bolval true幸运红包，false普通红包
 * @param numberval 红包多少钱
 * @param divid id
 * @param width 层宽
 * @param height 层高
 * @param initialposition 初始位置
 * @param lastposition 最终位置
 * @return
 */
function appendredpackage(bolval,numberval,divid,url,width,height,initialposition,lastposition){	
	if(bolval){
		var image_item='<div id="divid'+divid+'" class="pannel_content o_center" style="background-color:red;z-index:3;position:fixed;width:'+width+'px;height:'+height+'px;margin-left:'+parseInt(($(window).width()-width)/2)+'px;top:'+initialposition+'px;display:none;" >'+
		'<div class="fr c_p grabredpackageclose" onclick=redpackageClose("'+divid+'"); style="margin-top:-13px;margin-right:-13px;height:31px;width:31px;" ></div>'+		
		'<div class="o_center f_30 a_c_f" style="margin-top:87.5px;width:200px;height:50px;line-height:50px;text-align:center;" >幸运红包<span class="c_r f_40" >'+numberval+'</span>元</div>'+
		'<div class="o_center f_30 pannel_content3 c_p a_c_f" onclick=redpackageClose("'+divid+'"); style="background-color:#F27835;margin-top:25px;width:200px;height:50px;line-height:50px;text-align:center;" >确定</div>'+	
		'</div>';
		$('#'+divid).append(image_item);
		$('#divid'+divid).css("background","background:url("+url+") no-repeat");	
		$('#divid'+divid).fadeIn(500);		
		for(i = 6;i>=0;i--){
			if(i%2 == 0)
				$('#divid'+divid).animate({top:lastposition+"px"},50+i*10);
			else if(i%2 == 1)
				$('#divid'+divid).animate({top:lastposition-i*10+"px"},50+i*10);
		}
	}else{
		var image_item='<div id="divid'+divid+'" class="pannel_content o_center" style="background-color:red;z-index:3;position:fixed;width:'+width+'px;height:'+height+'px;margin-left:'+parseInt(($(window).width()-width)/2)+'px;top:'+initialposition+'px;display:none;" >'+
		'<div class="fr c_p grabredpackageclose" onclick=redpackageClose("'+divid+'"); style="margin-top:-13px;margin-right:-13px;height:31px;width:31px;" ></div>'+
		
		'<div class="o_center f_30 a_c_f" style="margin-top:87.5px;width:200px;height:50px;line-height:50px;text-align:center;" >普通红包<span class="c_r f_40" >'+numberval+'</span>元</div>'+
		'<div class="grabredpackageOK o_center f_30 pannel_content3 c_p a_c_f" onclick=redpackageClose("'+divid+'"); style="background-color:#F27835;margin-top:25px;width:200px;height:50px;line-height:50px;text-align:center;" >确定</div>'+	
		'</div>';
		$('#'+divid).append(image_item);
		$('#divid'+divid).css("background","background:url("+url+") no-repeat");
		$('#divid'+divid).fadeIn(500);
		$('#divid'+divid).animate({top:+lastposition+"px"},500);
	}
	
}
function redpackageClose(id){
	$('#divid'+id).remove();
} 

$('#headerLogo').live('click',function (){
	location.href ="/index.html";
});

$('.banner_back').live('click',function(){
	location.href ="/index.htm";
});

/**
 * number: 进度条共有多少个点
 * wnum：进度条总长度
 * dataarr：时间数组
 * statusarr：状态数组
 * numanimate：图标移动到第几个点
 * bloo：true false;
 */

$('#divUlIds .divulidtitleclass').live('mouseover',function(){
	var num1 = $(this).attr("tag");	
	//alert(numberanimate);
	if((numberanimate-1)!= num1){
		$('ul#tipsIdli >li ').each(function(){
			var num2 = $(this).attr("tag");
			if(num1 == num2){
				$(this).css("color","#666666");
			}
		});
		$('ul#dataulId >li ').each(function(){
			var num2 = $(this).attr("tag");
			if(num1 == num2){
				$(this).css("color","#666666");
			}
		});
	}
   });
$('#divUlIds .divulidtitleclass').live('mouseout',function(){
	var num1 = $(this).attr("tag");	
	//alert(numberanimate-1);
	if((numberanimate-1)!=num1){
		$('ul#tipsIdli >li ').each(function(){
			var num2 = $(this).attr("tag");
			if(num1 == num2){
				$(this).css("color","#BBB");
			}
		});
		$('ul#dataulId >li ').each(function(){
			var num2 = $(this).attr("tag");
			if(num1 == num2){
				$(this).css("color","#BBB");
			}
		});
	}
  });

var numberanimate;

function addElements(number,wnum,dataarr,statusarr, numanimate,leftbloo,rightbloo){
	var divUlIds = 'divUlIds';numberanimate=numanimate;
   	var dataulId = 'dataulId';
   	var tipsIdli = 'tipsIdli';
   	var num = wnum/(number-1);
   	//alert(num);
   	var numkedu=num-25;
   	var rnum = num - 75;
	$('.tipsDivw').css("width",wnum+80+"px");
	  
	  $.each(statusarr, function(i,val){ 
		  
	      if(i==statusarr.length-1)
	    	  forListImg(tipsIdli,'<li id="tipsIdli'+i+'" tag="'+i+'" style="display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#bbb;font-family: 微软雅黑;" >'+val+'</li>');
	      else
	    	  forListImg(tipsIdli,'<li id="tipsIdli'+i+'" tag="'+i+'" style="margin-right:'+rnum+'px;display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#bbb;font-family: 微软雅黑;" >'+val+'</li>');
	      $('#tipsIdli'+i).fadeIn(2000);
	  });
	  $.each(dataarr, function(i,val){   
	      if(i==dataarr.length-1)
	    	  forListImg(dataulId,'<li id="dataulId'+i+'" tag="'+i+'" style="display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#bbb;font-family: 微软雅黑;" >'+val+'</li>');
	      else
	    	  forListImg(dataulId,'<li id="dataulId'+i+'" tag="'+i+'" style="margin-right:'+rnum+'px;display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#bbb;font-family: 微软雅黑;" >'+val+'</li>');
	      $('#dataulId'+i).fadeIn(2000);
	  });
	  $('ul#tipsIdli >li ').eq((numanimate-1)).css("color","#666666");
	  $('ul#dataulId >li ').eq((numanimate-1)).css("color","#666666");
	  for(i=0;i <number;i++ ){ 
	 		if(i==0){ 
	 			forListImg(divUlIds,'<li id="divulid'+i+'" tag="'+i+'" class="p_r c_p d_b divulidtitleclass" style="margin-toP: -13px;z-index:9998;display :block;margin-left:-13px;list-style-type:none;width:25px;height:25px;float:left;text-align:center;" ></li>');		 		
		 	}else if(i==(number-1)){
		 		forListImg(divUlIds,'<li id="divulid'+i+'" tag="'+i+'" class="p_r c_p d_b divulidtitleclass" style="margin-toP: -13px;z-index:9998;display :block;margin-left:'+(numkedu)+'px;list-style-type:none;width:25px;height:25px;float:left;text-align:center;" ></li>');				
		 	}else{
		 		forListImg(divUlIds,'<li id="divulid'+i+'" tag="'+i+'" class="p_r c_p d_b divulidtitleclass" style="margin-toP: -13px;z-index:9998;display :block;margin-left:'+(numkedu)+'px;list-style-type:none;width:25px;height:25px;float:left;text-align:center;" ></li>');
			}
	 		$('#divulid'+i).css("background","url(/images/ico/func_icos.png) no-repeat -255px -36px");
	  }
	 	
 	if(leftbloo){
 		if(rightbloo){
 			$('#cornerDivIds').animate({width:wnum+'px',height:'3px',opacity:'1'},"slow");
 		}else{
 			$('#cornerDivIds').animate({width:wnum+20+'px',height:'3px',opacity:'1'},"slow");
 		}
 	}else {
 		if(rightbloo){
 			$('#cornerDivIds').animate({width:wnum+20+'px',height:'3px',opacity:'1'},"slow"); 
 			$('#cornerDivIds').css("margin-left","-20px");
 	 		$('#cornerDivIds2').css("margin-left","-20px");
 		}else{
 			$('#cornerDivIds').animate({width:wnum+40+'px',height:'3px',opacity:'1'},"slow");
 			$('#cornerDivIds').css("margin-left","-20px");
 	 		$('#cornerDivIds2').css("margin-left","-20px");
 		}
 	}
 	
 	//$('#cornerMain').html(statusarr[numanimate-1]);
 	if(numanimate>1){
        $('#tubiaoId').animate({left:num*(numanimate-1)+'px'});
       // $('#cornerMain').animate({left:num*(numanimate-1)+'px'}); 
        if(leftbloo){
        	$('#cornerDivIds2').animate({width:num*(numanimate-1)+'px',height:'3px',opacity:'1'},"1000");  
        }else{
        	$('#cornerDivIds2').animate({width:num*(numanimate-1)+20+'px',height:'3px',opacity:'1'},"1000");       	
        }
        for(i=0;i<numanimate;i++){
     		$('#divulid'+i).css("background","url(/images/ico/func_icos.png) no-repeat -255px -8px");
     	}
 	} 
}



function addElement(number,wnum,dataarr,statusarr, numanimate,leftbloo,rightbloo){
	var divUlIds = 'divUlIds';
   	var dataulId = 'dataulId';
   	var tipsIdli = 'tipsIdli';
   	var num = wnum/(number-1); 
   	var numkedu=num-3+"px;";
   	var rnum = num - 65;
	$('.tipsDivw').css("width",wnum+80+"px");
	
	  
	  $.each(statusarr, function(i,val){ 
	      if(i==statusarr.length-1)
	    	  forListImg(tipsIdli,'<li id="tipsIdli'+i+'" style="display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#DDDDDD;font-weight:bolder;font-family: 微软雅黑;" >'+val+'</li>');
	      else
	    	  forListImg(tipsIdli,'<li id="tipsIdli'+i+'" style="margin-right:'+rnum+'px;display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#DDDDDD;font-weight:bolder;font-family: 微软雅黑;" >'+val+'</li>');
	      $('#tipsIdli'+i).fadeIn(2000);
	  });
	  $.each(dataarr, function(i,val){  
	      if(i==dataarr.length-1)
	    	  forListImg(dataulId,'<li id="dataulId'+i+'" style="display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#DDDDDD;font-weight:bolder;font-family: 微软雅黑;" >14.2.14</li>');
	      else
	    	  forListImg(dataulId,'<li id="dataulId'+i+'" style="margin-right:'+rnum+'px;display:none;list-style-type:none;width:75px;height:25px;float:left;text-align:center;font-size:12px;color:#DDDDDD;font-weight:bolder;font-family: 微软雅黑;" >14.2.14</li>');
	      $('#dataulId'+i).fadeIn(2000);
	  });
	  for(i=0;i <number;i++ ){   
	 		if(i==0){ 
	 			forListImg(divUlIds,'<li id="divulid'+i+'"  style="display :block;list-style-type:none;width:3px;height:0px;float:left;text-align:center;background-color:#ff8800;" ></li>');		 		
		 	}else if(i==(number-1)){
		 		forListImg(divUlIds,'<li id="divulid'+i+'"  style="display :block;margin-left:'+numkedu+'list-style-type:none;width:3px;height:0px;float:left;text-align:center;background-color:#DDDDDD;" ></li>');				
		 	}else{
		 		forListImg(divUlIds,'<li id="divulid'+i+'"  style="display :block;margin-left:'+numkedu+'list-style-type:none;width:3px;height:0px;float:left;text-align:center;background-color:#DDDDDD;" ></li>');
			}
			$('#divulid'+i).animate({width:'3px',height:'26px',opacity:'1'},"slow");
	  }
	  if(leftbloo){
 		if(rightbloo){
 			$('#cornerDivIds').animate({width:wnum+'px',height:'6px',opacity:'1'},"slow");
 		}else{
 			$('#cornerDivIds').animate({width:wnum+10+'px',height:'6px',opacity:'1'},"slow");
 		}
 	}else {
 		if(rightbloo){
 			$('#cornerDivIds').animate({width:wnum+10+'px',height:'6px',opacity:'1'},"slow"); 
 			$('#cornerDivIds').css("margin-left","-10px");
 	 		$('#cornerDivIds2').css("margin-left","-10px");
 		}else{
 			$('#cornerDivIds').animate({width:wnum+20+'px',height:'6px',opacity:'1'},"slow");
 			$('#cornerDivIds').css("margin-left","-10px");
 	 		$('#cornerDivIds2').css("margin-left","-10px");
 		}
 	}
 	
 	//$('#cornerMain').html(statusarr[numanimate-1]);
 	if(numanimate>1){
 		
        $('#tubiaoId').animate({left:num*(numanimate-1)+'px'});
        //$('#cornerMain').animate({left:num*(numanimate-1)+'px'});
        if(leftbloo)
        	$('#cornerDivIds2').animate({width:num*(numanimate-1)+3+'px',height:'6px',opacity:'1'},"1000");  
        else 
        	$('#cornerDivIds2').animate({width:num*(numanimate-1)+13+'px',height:'6px',opacity:'1'},"1000");       	
        
        for(i=0;i<numanimate;i++){
     		$('#divulid'+i).css({"background-color":"#ff8800","width":"3px"});
     	}
 	}
 	
        
}

function locationclickLink(url){
	window.location.href =url;	
}

function openclickLink(url){
	window.open(url);
}

function barOline(ecname,xdata,seriesdata,typename, unitText,contentcolor){
	var num = 0;
	require([
		        'echarts',
		        'echarts/chart/line',   // 按需加载所需图表
		        'echarts/chart/bar'
		    ],
		    function (ec) {
				    var myChart = ec.init(document.getElementById(ecname));
				    var option = {
				           
				    title : {
				        text: '',
				       subtext: ''
				    },
				    tooltip : {
				        trigger: 'trigger'
				    },
				    calculable : false,
				    xAxis : [
				        {
				            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
				            data: xdata,	
				            //textStyle :{color:'red'},			            
							axisLine:false,
							axisTick:false,
							axisLabel : {
				        		textStyle:{ color:'#C9C9C9' }//textStyle:{ color:xnamecolor }			        	
			            	}
				        }
				    ],
				    yAxis : [
				        {
				        	type : 'value',
				            boundaryGap : [0, 0.01],
				           	axisLabel : {
				            formatter: '{value} ' + unitText,
				            textStyle:{ color:'#C9C9C9' }//textStyle:{ color:ynamecolor }
				            },
				            splitNumber:4,
				            axisLine:false
				        }
				    ],			        
				    series : [
					        {
				            name:'金额',
				            type: typename,
				            stack: 'sum',
				            barCategoryGap: '50%',
				            symbol:'emptyCircle',
				            symbolSize:3,
				            itemStyle: {
				                normal: {					        	
				                    color:contentcolor, //内容颜色
				                    //borderColor: 'tomato', //边框颜色
				                    //borderWidth: 6,
				                    lineStyle:{   //线条线段样式
					        			type:'solid',     //solid实线dotted虚线dashed长点虚线
					        			width:3,
					        			color:contentcolor
					                       /* color: (function (){
					                            var zrColor = require('zrender/tool/color');
					                            return zrColor.getLinearGradient(
					                                0, 0, 1000, 0,
					                                [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,0,0.8)']]
					                            )
					                        })()*/
					        		},
					        		//areaStyle:{color:'red',type:'default'},   //区域填充样式
				                    label : {
				                        show: true, 
				                        position: 'top',
				                        formatter: function() {
					        				var dataval =  option.series[0].data[num] + unitText;
					        				num = num+1;
					        				return addCommas(dataval);
				                        },
				                        textStyle: {
				                            //color: 'tomato'	,
				                        	color:contentcolor,
				                            fontSize:12
				                        }
				                    }
				                }
				            },
				            emphasis:{
				            	
				            },
				            data:seriesdata
				        }
				    ]
				        };
				        
				         myChart.setOption(option);
			});

	};


function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function ecpic(ecname,dataseriespic){
	var num = 0;
	require([
		        'echarts',
		        'echarts/chart/pie'
		    ],
		    function (ec) {
		option1 = {
			    /*title : {
			        text: '某站点用户访问来源',
			        subtext: '纯属虚构',
			        x:'center'
			    },*/
			    /*tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },*/
			    /*legend: {
			        orient : 'vertical',
			        x : 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },*/
			    /*toolbox: {
			        show : true,
			        feature : {
			            mark : true,
			            dataView : {readOnly: false},
			            restore : true,
			            saveAsImage : true
			        }
			    },*/
			    calculable : false,
			    series : [
			        /*{
			            name:'访问来源',
			            type:'pie',
			            radius : '55%',
			            center: ['50%', 225],
			            data:dataseriespic
			        }*/
			        { name:'访问来源',
			            type:'pie',
			            center : ['45%', 200],
			            radius :  '45%',
			            itemStyle : {
			                normal : {
			                    label : {
			                        position : 'outer',
			                        formatter : function(a,b,c,d) {
			        						return b+'('+addCommas(c.toFixed(2))+')'+'\n'+(d - 0).toFixed(2) + '%';}
			                    },
			                    labelLine : {
			                        show : true
			                    }
			                }/*,
			                emphasis : {
			                    label : {
			                        show : true,
			                        formatter : "{b}\n{d}%"
			                    },
				                labelLine : {
			                        show : true
			                    }
			                }*/
			                
			            },
			            data:dataseriespic
			           /* data:[
			                {value:35, name:'直达'},
			                {value:55, name:'营销广告'},
			                {value:1548, name:'搜索引擎'}
			            ]*/
            }
			        
			    ]
			};
			        var myChart = ec.init(document.getElementById(ecname));
			        myChart.setOption(option1);
	});
}


(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);




function showreturntop(classname){
	$(window).scroll( function() { 
		var scrollValue=$(window).scrollTop();
		scrollValue >= 100 ?  $('.'+classname).fadeIn(): $('.'+classname).fadeOut();
		/*if(scrollValue>=100){$('.returntop').removeClass("d_n");$('.returntop').addClass("d_b");}else{$('.returntop').removeClass("d_b");$('.returntop').addClass("d_n");	}*/
		
	} );	
	 $('.'+classname).click(function(){
  		$("html,body").animate({scrollTop:0},500);	
  	});	
}         

function realtimeBrowser(){
	 $(window).resize(function() {      
   	 var height = $(window).height();
        if(height<650)
       	 $('.page_block_content  .footer').removeClass("p_f");
        if(height>650)
       	 $('.page_block_content  .footer').addClass("p_f");
    });
}

$('.caffP2piphone').live('click',function(){
	openclickLink('https://itunes.apple.com/us/app/hui-tong-yi-daiv2/id895645699?l=zh&ls=1&mt=8');
});
























