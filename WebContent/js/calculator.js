$(function(){
			/*		$('.ipts').on('change',function(){
						var data=$(this) .val();
						
						if(data=='cd'){
							 
							$('#dknll').val('4.779');
							
						}
						if(data=='fd'){
							$('#dknll').val('5.60');
							 
							
						}
						if(data=='xyd'){
							$('#dknll').val('5.841');
							 
							
						}
						if(data=='qxz'){
							$('#dknll').val('');
							 
							
						}
					});
					$('.hkfs').on('change',function(){
						//alert($(this) .val());
					});
					$('#result').hover(function(){
						$(this).css('background-color','green');
					},function(){
						$(this).css('background-color','red');
					});
					$('#result').click(function(){
						var dklx=$('.ipts').val();
						var dkje=$('#dkje').val();
						var dkqx=$('#dkqx').val();
						var dknll=$('#dknll').val();
						var hkfs=$('.hkfs').val();
						if(dklx=='qxz'){
							$('#tip').text('*请选择贷款类型!');
						 
						}else{
							$('#tip').text('');
							 
							 
						}
						
						if(dkje==''){
							$('#dkjetip').text('*请填写贷款金额!');
							
						}else{
							$('#dkjetip').text('');
							 
						}
						
						if(dkqx==''){
							$('#dkqxtip').text('*请填写贷款期限!');
							 
						}else{
							$('#dkqxtip').text('');
							 
						}
						
						if(dknll==''){
							$('#dknlltip').text('*请填写年利率!');
							 
						}else{
							$('#dknlltip').text('');
						 
							}
						
						if(hkfs=='qxz'){
							$('#dkhkfstip').text('*请选择还款方式!');
						 
						}else{
							$('#dkhkfstip').text('');
							 
						}
						var lixi;
						var lixiben; 
						var benjin;
						if(hkfs=='hbfx'){
						var lixi=dkje*((dknll)/100)*(dkqx/12);
						var lixiben =((dkje*((dknll)/100)*(dkqx/12))+parseFloat(dkje)).toFixed(2);
						var benjin=dkje;
						};
						$.ajax({
							url:"/jisuan.do?dkje="+dkje+"&&dkqx="+dkqx+"&&dknll="+dknll+"&&hkfs="+hkfs,
							async:false
							});
						

					});*/
					
					
	//------------------------------贷款计算器
				$('.ipts').on('change',function(){
					var data=$(this) .val();
					
					if(data=='cd'){
						 
						$('#interest').val('4.779');
						
					}
					if(data=='fd'){
						$('#interest').val('5.60');
						 
						
					}
					if(data=='xyd'){
						$('#interest').val('5.841');
						 
						
					}
					if(data=='qxz'){
						$('#interest').val('');
						 
						
					}
				});
								
				 
					$('#table_button').click(function(){
						$('#table1').show();
						 

						$('#table1').html('');
						$('#table1').html('<tr style="background-color:#4264A1; color:#fff; text-align:center;"> <td>期次</td> <td>本金</td> <td>利息</td> <td>还款总额</td> </tr>');

						var k;
						var p = parseFloat( $('#principal').val() );
						var i = parseFloat( $('#interest').val() );
						var m = parseInt( $('#duration').val() );
						var R = i/1200;
						var Q = Math.pow(1+R, m);

						if ($('#plan').val() == 'monthly') {
							$('#comment').html('');
							for(k=1; k < m + 1; k++) {
								if(k < m)
									$('#table1').append('<tr><td>' + k + '</td><td>' + '0.00'
										+ '</td><td>' + (p * R).toFixed(2) + '</td><td>' + (p * R).toFixed(2) + '</td></tr>');
								else
									$('#table1').append('<tr><td>' + k + '</td><td>' + p.toFixed(2)
										+ '</td><td>' + (p * R).toFixed(2) + '</td><td>' + (p * (1 + R)).toFixed(2)  + '</td></tr>');
							}

						}
						else if ($('#plan').val() == 'oneTime') {
							$('#comment').html('');
							$('#table1').append('<tr><td>' + 1 + '</td><td>' + (p).toFixed(2) 
									+ '</td><td>' + (p * (i*m/1200)).toFixed(2) + '</td><td>' + ( p + (p*(i*m/1200)) ).toFixed(2)  + '</td></tr>');

						}
						else if($('#plan').val() == 'interestFirst'){

							$('#comment').html('');
							$('#comment').append( '先行付利息: ' + (p * (i*m/1200)).toFixed(2) );

							$('#table1').append('<tr><td>' + 1 + '</td><td>' + (p).toFixed(2) 
									+ '</td><td>' + '0.00' + '</td><td>' + p.toFixed(2)  + '</td></tr>');
						}

						else if($('#plan').val() == 'evenMonthly'){
							$('#comment').html('');
							
							 
							var prin = [];	  //principal left 
							var int_m = [];   //interest paid this month
							var mon_pay = p*(R*Q)/(Q-1); //monthly payment

							var n;
							for(n=0; n<m+1; n++) {
								prin.push(0);
								int_m.push(0);
							}

						 

							for(k=1; k < m + 1; k++) {
								
								if (k == 1) 
									prin[k] = p;   
									
								else 
									prin[k] = prin[k-1] - mon_pay + int_m[k-1];		//Principal left is the total principal less the monthly payment
																					//plus the interest payment

								int_m[k] = prin[k]*R; // This month's interest is the princpal left multiplied by monthly interest rate
								

								$('#table1').append('<tr><td>' + k + '</td><td>' + (mon_pay - int_m[k]).toFixed(2)
										+ '</td><td>' + int_m[k].toFixed(2) + '</td><td>' + mon_pay.toFixed(2)  + '</td></tr>');
							}	
						}else { //等额本金
							for(k=1; k < m + 1; k++) {
								$('#table1').append('<tr><td>' + k + '</td><td>' + (p/m).toFixed(2) 
									+ '</td><td>' + ( p * (1-(k-1)/m)*R ).toFixed(2) + '</td><td>' + ( (p/m) + p*(1-(k-1)/m)*R ).toFixed(2)  + '</td></tr>');
							}

						}
						
					});
					
					//------------------------------理财计算器
					$('.lc').on('change',function(){
						
						var tzje=parseFloat( $("#dzje").val() );
						var nhsy=parseFloat( $("#nlsy").val() );
						var dzsc=parseFloat( $("#dzsc").val() );
						var result=tzje*(nhsy/1200)*dzsc;
						$("#lxglf").val((result*LXGLFLL).toFixed(2));
						
						var data=$(this) .val();
						
						  
						if(data=='slnn'){
							 
							$('#nlsy').val('14');
							$('#dzsc').val('24');
							
						}
						if(data=='hjb'){
							$('#nlsy').val('13');
							$('#dzsc').val('18');
							 
							
						}
						if(data=='jmn'){
							$('#nlsy').val('12');
							$('#dzsc').val('12');
							 
							
						}
						if(data=='hyj'){
							$('#nlsy').val('12');
							$('#dzsc').val('12');
							 
							
						}
						
						if(data=='sjy'){
							$('#nlsy').val('10');
							$('#dzsc').val('6');
							 
							
						}
						if(data=='tjy'){
							$('#nlsy').val('8');
							$('#dzsc').val('3');
							 
							
						}
						if(data=='htb'){
							$('#nlsy').val('6.6');
							$('#dzsc').val('1');
							 
							
						}
						if(data=='hlb'){
							$('#nlsy').val('5.4');
							var data=7/30;
							$('#dzsc').val(data);
							 
							
						}
					});
					
					var LXGLFLL=0.005;//利息管理费
					
					
					$("#dzje").blur(function(){
						
						var tzje=parseFloat( $("#dzje").val() );
						var nhsy=parseFloat( $("#nlsy").val() );
						var dzsc=parseFloat( $("#dzsc").val() );
						var result=tzje*(nhsy/1200)*dzsc;
						$("#lxglf").val((result*LXGLFLL).toFixed(2));
						
						
					});
					$('#table_button_licai').click(function(){
						var tzje=parseFloat($("#dzje").val());
						var nhsy=parseFloat($("#nlsy").val());
						var dzsc=parseFloat($("#dzsc").val());
						var intterest=tzje*(nhsy/1200)*dzsc;
						var total=intterest+tzje;
						$('#table2').show();
						$('#table2').html('');
						$('#table2').html('<tr style="background-color:#4264A1; color:#fff; text-align:center;">  <td>投资金额</td> <td>总收益</td> <td>总金额</td> </tr>');
						//var dzje= parseFloat( $('#dzje').val() );
						$('#comment_licai').html('满期实际总收益：'+(intterest+tzje-(intterest*LXGLFLL)).toFixed(2));
						$('#table2').append('<tr><td>' + tzje.toFixed(2)
									+ '</td><td>' + intterest.toFixed(2)  + '</td><td>' + total.toFixed(2)  + '</td></tr>');
							 
						 
						  
					});

				});	
 