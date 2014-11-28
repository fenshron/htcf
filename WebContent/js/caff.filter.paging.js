/**
 * 条件为普通的输入框方式提供时，只需提供input的id。
 * 在构造URL时，可直接获取输入框的值拼接成key=value
 */
var __URL_FILTER_INPUT_IDS = [];

/**
 * key <--> function
 * 在构造URL时，使用function产生值，之后拼接成key=value
 */
var __URL_FILTER_KEY_VALUE_CALLBACK = [];

function doFilter(rootURL){
	window.location.href = makeFilterUrl(rootURL);
    return false;
};

/**
 * rootURL为不带参数不带问号的页面url，
 * 如http://www.caffcoo.com/index.htm
 */
function makeFilterUrl(rootURL){
	var url = rootURL;
	if(rootURL.indexOf("?") < 0){
		url = rootURL + "?app=caffcoo";
	}
	
    url = makeUrlFilterInputData(url);
    url = makeUrlFilterCallbackData(url);
    return url;
};

/**
 * 添加一个需要查询的输入框条件，输入框的ID即为查询时URL查询参数的key
 */
function addFilterInputId(inputId) {
	return __URL_FILTER_INPUT_IDS.push(inputId);
};

function addFilterCallback(key, func) {
	var map = {};
	map["key"] = key;
	map["func"] = func;
	return __URL_FILTER_KEY_VALUE_CALLBACK.push(map);
};

function addFilterKeyValue(url, key, val) {
	if(!is_null(key) && !is_null(val)) {
        url += "&" + key + "=" + val;
     }
	return url;
};

function makeUrlFilterInputData(url) {
	$.each(__URL_FILTER_INPUT_IDS, function(i, inputId){
		if(!is_null(inputId)) {
			var val =  $("#" + inputId).val().trim();
			url = addFilterKeyValue(url, inputId, val);
		}
	});
	return url;
};

function makeUrlFilterCallbackData(url) {
	$.each(__URL_FILTER_KEY_VALUE_CALLBACK, function(i, map){
		if(!is_null(map)) {
			var key = map["key"];
			var callback = map["func"];
			 if(!is_null(key) && !is_null(callback)) {
				var val = eval(callback+"()");
				url = addFilterKeyValue(url, key, val);
		     }
		}
	});
	return url;
};

/**
 * 将URL上标识某一个类型参数的token串代表的值刷新到对应的查询类型UI列表中
 * 
 * @param tokenStr 类型参数的token串
 * @param filterTypeId 由于查询中可能存在多中类型种类，需要指定一个父ID来确定是那种类型种类
 * @param typeItemClass 类型对应的UI元素的Class值，这个元素需要有一个整形类型的value属性代表类型值
 * @param typeItemSelectClass 类型对应的UI元素被选的情况下的Class值
 */
function refreshUrl2Types(tokenStr, filterTypeId, typeItemClass, typeItemSelectClass) {
	var tokens = getTypeTokens(tokenStr);
	$.each(tokens, function(i, val){
		$("#" + filterTypeId).find("." + typeItemClass + "[value=" + val + "]").addClass(typeItemSelectClass);
	});
};

function getTypeTokens(tokenStr){
    var tokens = [];
    if(!is_null(tokenStr)) {
    	tokens = tokenStr.split(";");
    }
    return tokens;
};

/**
 * 从查询类型UI列表中获取一个代表选定类型的token串
 * 
 * @param filterTypeId 由于查询中可能存在多中类型种类，需要指定一个父ID来确定是那种类型种类
 * @param typeItemClass 类型对应的UI元素的Class值，这个元素需要有一个整形类型的value属性代表类型值
 * @param typeItemSelectClass 类型对应的UI元素被选的情况下的Class值
 */
function getTypeTokenStr(filterTypeId, typeItemClass, typeItemSelectClass){
	var tokenStr = "";
	var count = 0;
	$("#" + filterTypeId).find("." + typeItemSelectClass).each(function(i, val){
		count++;
		tokenStr += $(val).attr("value") + ";";
    });
	if(count == 1){//删除最后的分号
		tokenStr = tokenStr.replace(";", "");
	}
    return tokenStr;
};

/**
 * 设置类型鼠标点击的选定或非选定的效果
 */
function setTypeClickAction(filterTypeId, typeItemClass, typeItemSelectClass, isSelectedOnlyOne) {
	$("#" + filterTypeId).find("." + typeItemClass).click(function(){
		if(isSelectedOnlyOne == "true"){
			$("#" + filterTypeId).find("." + typeItemClass).removeClass(typeItemSelectClass);
		}
		
		if($(this).hasClass(typeItemSelectClass)){
			$(this).removeClass(typeItemSelectClass);
		}else{
			$(this).addClass(typeItemSelectClass);
		}
	});
};

/************************分页导航条************************/

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
function makePagingNavigationDynamic(
		url, 
		$navDiv, 
		currentIndex, 
		pageCount, 
		totalCount) {
	
	var navCount = 4;//中间的页面前后最多分别显示2个页码
	if(!is_null(url) 
			&& !is_null($navDiv) 
			&& !is_null(currentIndex) 
			&& !is_null(pageCount) 
			&& !is_null(totalCount) 
			&& $navDiv.find('a').length <= 0) {//确保只填充一次
		
		currentIndex = parseInt(currentIndex);
		pageCount = parseInt(pageCount);
		totalCount = parseInt(totalCount);
		if(pageCount > 0) {
			if(currentIndex < 0 || currentIndex > pageCount) {
				currentIndex = 1;
			}
			
			var html = '';
			if(currentIndex == 1){//当前是第1页时，上一页显示灰色
				html += '<span class="page_pre_disabled page_nav_block f_yahei f_14" title="上一页"></span>';
			}else{
				html += '<a class="page_pre page_nav_block f_yahei f_14" href="' + getNavBlockURL(url, currentIndex-1) + '" title="上一页"></a>';
			}
			html += getNavBlock(url, 1, currentIndex);//第1页肯定要显示
			if(pageCount >= 2){
				html += getNavBlock(url, 2, currentIndex);//第2页单独处理
			}
			
			//中间循环处理的部分
			var beginIndex = getBeginIndex(currentIndex, pageCount, navCount);
			var endIndex = getEndIndex(currentIndex, pageCount, navCount);
			if(beginIndex > 3 && pageCount > 3){//不是从第3页开始循环，则表明有断开
				html += '<span class="page_break">...</span>';
			}
			
			for(var i = beginIndex; i <= endIndex; i++){
				html += getNavBlock(url, i, currentIndex);
			}
			
			if(endIndex < pageCount-2 && pageCount > 4){//不是到倒数第3页结束循环，则表明有断开
				html += '<span class="page_break">...</span>';
			}
			
			if(pageCount >= 4){//倒数第2页单独处理
				html += getNavBlock(url, pageCount-1, currentIndex);//第2页单独处理
			}
			
			if(pageCount >= 3){//倒数第1页单独处理
				html += getNavBlock(url, pageCount, currentIndex);//第2页单独处理
			}
			
			if(pageCount > 1){
				if(currentIndex == pageCount){//当前是末页时，下一页显示灰色
					html += '<span class="page_next_disabled page_nav_block f_yahei f_14">下一页</span>';
				}else{ 
					html += '<a class="page_next page_nav_block f_yahei f_14" href="' + getNavBlockURL(url, currentIndex+1) + '">下一页</a>';
				} 
			}
			
			html += '<span class="p_l5 f_yahei f_14" style="width:auto;">到第</span>' +
				'<div class="fl p_t2"><input class="page_go2_input f_yahei f_14" type="text" size="1" maxlength="3" value="' + currentIndex + '"/></div>' +
				'<span style="width:auto;" title="共' + pageCount + '页" class="f_yahei f_14"> /' + pageCount + '页</span>' +
				'<button type="submit" class="page_go2_button fl f_yahei f_14">确定</button>' +
				'<span class="p_l10 f_yahei f_14" style="width:auto;">共'+ totalCount +'条记录</span>' + 
				'<a id="pagenav"></a>';
			html += '<div style="display:inline-block;clear:both;"/>';
			
			$navDiv.append(html); 
			$navDiv.css("height", "30px");
			$navDiv.css("font-size", "12px");
			$navDiv.css("font-family", "Tahoma");
			$navDiv.addClass('page_nav');
			$navDiv.find(".page_nav_block").mouseover(function(){
				if(!$(this).hasClass("page_pre_disabled") && !$(this).hasClass("page_next_disabled")){
					$(this).addClass("page_nav_block_hover");
				}	
			});
			$navDiv.find(".page_nav_block").mouseout(function(){
				$(this).removeClass("page_nav_block_hover");
			});
			$navDiv.find(".page_go2_button").click(function(){
				var index = parseInt($navDiv.find(".page_go2_input").val());
				if(index > 0 && index <= pageCount && index != currentIndex){
					window.location.href = getNavBlockURL(url, index);
				}
				return false;
			});
			$navDiv.find(".page_go2_input").keyup(function(e){
				var key = e.which;
		        if (key == 13) {
		            e.preventDefault();
		            var pageNavGo2PageButton = $navDiv.find("button.page_go2_button").get(0);//DOM Object
		            pageNavGo2PageButton.click();
		        }
			});
		}
	}
};

function getNavBlock(url, index, currentIndex) {
	if(currentIndex == index){//为当前页
		return '<span class="page_current page_nav_block">' + index + '</span>';
	}else{
		return '<a class="page_nav_block" href="' + getNavBlockURL(url, index) + '">' + index + '</a>';
	}
};

/*取静态页面所需参数*/
var urlEx = "";
var staticFolderEx = "";
var staticPageFileEx = "";
function getStaticThreadPageData(url,staticFolder,staticPageFile){
	urlEx = url;
	staticFolderEx = staticFolder;
	staticPageFileEx = staticPageFile;
};

/*判断是否是静态页面*/
function isStaticThreadPage() { 
    var location = top.window.location.href;
    return !(location.indexOf("/thread.htm?") >= 0);
};

function getNavBlockURL(url, index) {
	if(staticFolderEx != ""){ 
		return urlEx + staticFolderEx+ '/' + staticPageFileEx + index + '.html#pagenav';
	}else{
		url = makeFilterUrl(url);
		url = addFilterKeyValue(url, "index", index);
		return url + "#pagenav";
	}
};


function getBeginIndex(currentIndex, pageCount, navCount) {
	var halfCount = navCount/2;
	var beginIndex = currentIndex - halfCount;
	if(beginIndex < 3 && pageCount > 3){//由于第1页和第2页单独处理，则循环处理的过程从第3页开始
		beginIndex = 3;
	}
	
	if(beginIndex < 3) {//如果计算出来的起始比第2页还小，则表明此时总页数小于3，不用处理中间循环部分
		beginIndex = 888888888;
	}
	
	return beginIndex;
};

function getEndIndex(currentIndex, pageCount, navCount) {
	var halfCount = navCount/2;
	var endIndex = currentIndex + halfCount;
	if(endIndex >= pageCount -1){//由于倒数第1页和第2页单独处理，则循环处理的过程到倒数第3页结束
		endIndex = pageCount -2;
	}
	
	return endIndex;
};

/************************分页导航条****wap修改************************/
function makePagingNavigationDynamicWap(
		url, 
		$navDiv, 
		currentIndex, 
		pageCount, 
		totalCount) {
	
	var navCount = 0;//中间的页面前后最多分别显示2个页码
	if(!is_null(url) 
			&& !is_null($navDiv) 
			&& !is_null(currentIndex) 
			&& !is_null(pageCount) 
			&& !is_null(totalCount) 
			&& $navDiv.find('a').length <= 0) {//确保只填充一次
		
		currentIndex = parseInt(currentIndex);
		pageCount = parseInt(pageCount);
		totalCount = parseInt(totalCount);
		if(pageCount > 0) {
			if(currentIndex < 0 || currentIndex > pageCount) {
				currentIndex = 1;
			}
			
			var html = '';
			if(currentIndex == 1){//当前是第1页时，上一页显示灰色
				html += '<span class="page_pre_disabled page_nav_block f_yahei f_14" title="上一页"></span>';
			}else{
				html += '<a class="page_pre page_nav_block f_yahei f_14" href="' + getNavBlockURL(url, currentIndex-1) + '" title="上一页"></a>';
			}
			
			//中间循环处理的部分
			var beginIndex = getBeginIndexWap(currentIndex, pageCount, navCount);
			var endIndex = getEndIndexWap(currentIndex, pageCount, navCount);
			
			for(var i = beginIndex; i <= endIndex; i++){
				html += getNavBlock(url, i, currentIndex);
			}
			
			
			if(pageCount > 1){
				if(currentIndex == pageCount){//当前是末页时，下一页显示灰色
					html += '<span class="page_next_disabled page_nav_block f_yahei f_14">下一页</span>';
				}else{ 
					html += '<a class="page_next page_nav_block f_yahei f_14" href="' + getNavBlockURL(url, currentIndex+1) + '">下一页</a>';
				} 
			}
			
			html += '<span class="p_l5 f_yahei f_14" style="width:auto;">到第</span>' +
				'<div class="fl p_t2"><input class="page_go2_input f_yahei f_14" type="text" size="1" maxlength="3" value="' + currentIndex + '"/></div>' +
				'<span style="width:auto;" title="共' + pageCount + '页" class="f_yahei f_14"> /' + pageCount + '页</span>' +
				'<button type="submit" class="page_go2_button fl f_yahei f_14">确定</button>';
			html += '<div style="display:inline-block;clear:both;"/>';
			
			$navDiv.append(html); 
			$navDiv.css("height", "30px");
			$navDiv.css("font-size", "12px");
			$navDiv.css("font-family", "Tahoma");
			$navDiv.addClass('page_nav');
			$navDiv.find(".page_nav_block").mouseover(function(){
				if(!$(this).hasClass("page_pre_disabled") && !$(this).hasClass("page_next_disabled")){
					$(this).addClass("page_nav_block_hover");
				}	
			});
			$navDiv.find(".page_nav_block").mouseout(function(){
				$(this).removeClass("page_nav_block_hover");
			});
			$navDiv.find(".page_go2_button").click(function(){
				var index = parseInt($navDiv.find(".page_go2_input").val());
				if(index > 0 && index <= pageCount && index != currentIndex){
					window.location.href = getNavBlockURL(url, index);
				}
				return false;
			});
			$navDiv.find(".page_go2_input").keyup(function(e){
				var key = e.which;
		        if (key == 13) {
		            e.preventDefault();
		            var pageNavGo2PageButton = $navDiv.find("button.page_go2_button").get(0);//DOM Object
		            pageNavGo2PageButton.click();
		        }
			});
		}
	}
};

function getBeginIndexWap(currentIndex, pageCount, navCount) {
	var halfCount = navCount/2;
	var beginIndex = currentIndex - halfCount;
	
	return beginIndex;
};

function getEndIndexWap(currentIndex, pageCount, navCount) {
	var halfCount = navCount/2;
	var endIndex = currentIndex + halfCount;
	
	return endIndex;
};
/************************分页导航条****wap修改****结束********************/

