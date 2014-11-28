/*
 * Usage:
 */

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