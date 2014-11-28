var d_provinces = [
{"n":"北京","c":110100},
{"n":"上海","c":310100},
{"n":"天津","c":120100},
{"n":"重庆","c":500100},
{"n":"安徽","c":340000},
{"n":"福建","c":350000},
{"n":"甘肃","c":620000},
{"n":"广东","c":440000},
{"n":"广西","c":450000},
{"n":"贵州","c":520000},
{"n":"海南","c":460000},
{"n":"河北","c":130000},
{"n":"河南","c":410000},
{"n":"黑龙江","c":230000},
{"n":"湖北","c":420000},
{"n":"湖南","c":430000},
{"n":"吉林","c":220000},
{"n":"江苏","c":320000},
{"n":"江西","c":360000},
{"n":"辽宁","c":210000},
{"n":"内蒙古","c":150000},
{"n":"宁夏","c":640000},
{"n":"青海","c":630000},
{"n":"山东","c":370000},
{"n":"山西","c":140000},
{"n":"陕西","c":610000},
{"n":"四川","c":510000},	
{"n":"西藏","c":540000},	
{"n":"新疆","c":650000},
{"n":"云南","c":530000},	
{"n":"浙江","c":330000},
{"n":"香港","c":660000},
{"n":"澳门","c":670000},
{"n":"台湾","c":680000}];

function init_provinces(province_list_id, city_list_id, is_4filter){
	var $provinces_list = $('#'+province_list_id);
	if($provinces_list.length > 0){
		var select = $provinces_list[0];
		var txt = '请选择';
		if(is_4filter == true){
			txt = '不限';
		}
		select.add(new Option(txt, 0), $.browser.msie ? 0 : select.options[0]);
		$.each(d_provinces, function(i){
			var op_count = select.length;
			select.add(new Option(d_provinces[i].n, d_provinces[i].c), $.browser.msie ? op_count : select.options[op_count]);
		});
		
		$provinces_list.change(function(){ 
			fill_city(city_list_id, $(this).val(), '', is_4filter);
		});
	}
};
function fill_city(city_list_id, province_code, current_select, is_4filter){
	var $city_list = $('#'+city_list_id);
	if($city_list.length > 0){
		var prefix = province_code.toString().substring(0,2);
		var count = 0;
		var select = $city_list[0]; 
		$('#'+city_list_id + " option").remove();
		
		if(is_4filter == true){
			select.add(new Option('不限', 0), $.browser.msie ? 0 : select.options[0]);
		}
		$.each(d_cities, function(i){
			if (prefix == d_cities[i].c.toString().substring(0,2)) {
				var op_count = select.length;
				select.add(new Option(d_cities[i].n, d_cities[i].c), $.browser.msie ? op_count : select.options[op_count]);
				count++;
			}
		});
		
		if(count == 1){
			$('#'+city_list_id + " option:first").attr('selected','selected');
		}else if(!is_null(current_select)){
			$city_list.val(parseInt(current_select));
		}
	}
};