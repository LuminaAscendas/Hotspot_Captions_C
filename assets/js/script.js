var begin_entered=false;
var direction_text='<span id="dir_span">Directions:</span> Click on each question mark to progress through the graphic. You may close the labels by clicking on the “X.”'
$(document).ready(function(){
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
		//$('.dummy_popup,.hotspot_dummy,#dummy_1,#dummy_2').attr('aria-hidden','true').remove()
		//$('.dummy_popup,.hotspot_dummy').removeAttr('tabindex').remove()
	}
	
	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
		$('#label_cont_2,#label_cont_4').attr('role','text');
	}
	
	$('#text_container').html(direction_text)
	$('#begin_btn').off('click').on('click',function(){
			//$('.label_content').attr('role','application');
		$('a').attr('href','#text_container');
			begin_entered=true
		//setTimeout(function(){
			$('#begin_page').hide()	
			$('#text_container,#responsive_container,#heading_text').fadeIn(500);
			resizeApp();
			set_tab();
			$('#reset_btn').off('click').on('click',pageReload);
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				$('#whole_container').removeAttr('role');
			}else{
				$('#whole_container').attr('role','application');
			}
			//$('#heading_text').attr('tabindex','0').focus().blur();
		//},100)
	})
	
	$("#begin_container,#image_container").mouseenter(function(){
		$('#begin_container,#image_container').attr('title',"Capturing energy from the environment");
	});

	$("#begin_container,#image_container").mouseleave(function() {
		$(this).removeAttr('title');
	});
	
	$('.hotspot').off('click').on('click',function(e){
		//setTimeout(function(){
			var curr_id=e.target.id.split('_')[1];
			$('#toggle_'+curr_id).hide();
			$('.hotspot_dummy').hide();
//			$('.label_class').hide();
			//$('.hotspot').show();
//			$('#toggle_'+curr_id).hide();
			
//			$('#hotspot_dummy_'+curr_id).show();
//			set_tab();
//			console.log(curr_id)
//			$('#toggle_3').removeAttr('role');
			$('.dummy_popup').attr('aria-hidden','true').hide()
//			$('#'+e.target.id).hide();
//			$('#heading_text').css('visibility','hidden');
//			$('.label_class').hide();
			$('#label_'+curr_id).show();
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				setTimeout(function(){
					$('.label_content').attr('tabindex','0').focus()//.css('outline','1px solid');
				},10);
			}
		$('.label_class').attr('tabindex','0').addClass('tab_index');
	    $('#label_'+curr_id).focus().attr('role','application');	
//		setTimeout(function(){
//			$('.tab_index').focus().blur();
//		},10);
		//},100)
		//$('.label_content').attr('role','application');
	});
	$('.close_button').off('click').on('click',function(e){
		var curr_id=e.target.id.split('_')[1];
		$('#label_'+curr_id).hide()//.remove();
//		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
//			//$('.dummy_popup,.hotspot_dummy,#dummy_1,#dummy_2').attr('aria-hidden','true').remove()
//			//$('.dummy_popup,.hotspot_dummy').removeAttr('tabindex').remove()
//		}else{
			$('.hotspot_dummy').attr('aria-hidden','false')
//		}
		
		
		//setTimeout(function(){
//			$('.hotspot').show();	
			$('#toggle_'+curr_id).show()
			$('#heading_text').css('visibility','visible');	
		
		$('#toggle_3').attr('aria-label','clickable hotspot')
		$('#toggle_3').attr('aria-label','Hotspot 5 of 7. Press enter or space to enable popup')//.focus();
//			alert();
		//},10)
		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
			setTimeout(function(){
				console.log(curr_id)
				$('#toggle_'+curr_id).focus().attr('aria-hidden','true')//.css('outline','0px solid');
			},10);
		}
	})
	resizeApp();
	set_tab();
	
		
//		$('.tab_index').click(function(e){
////			$(this).addClass('clicked');
//			e.stopImmediatePropagation();
//			
//		});
//		$('.tab_index').focus(function(){
//			$(this).removeClass('clicked');
//		});
	
	//..............................tab...............................//
//	$('#reverse_extra_tab').on('focus',function(){
//		//$('.label_content').removeAttr('role');
//		$('.tab_index').eq(1).focus();
//	});
	//heading_text
	
	
	
	
	$('.label_content').on('focus',function(){
		$('#text_container').removeAttr('role');
			$('.label_class').removeAttr('tabindex')//.focus();
		//$('.label_content').removeAttr('role');
	})
	$('.hotspot').on('focus',function(){
		//$('.label_content').attr('role','application');
		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
			setTimeout(function(){
//				console.log(curr_id)
				$('.hotspot').attr('aria-hidden','false')
			},10);
		}
		
	})
	$('#begin_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();	
	})
	$('#begin_reverse_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();
	})
	$('.dummy_popup').on('focus',function(){
		//alert();
//		$('.label_content').eq(0).focus();
		$('.dummy_popup').attr('aria-hidden','true')
		setTimeout(function(){
			$('.dummy_popup').attr('aria-hidden','true')
		},10)
	});
	
	$('#hotspot_dummy_1').on('focus',function(){
//		alert()
		setTimeout(function(){
			$('#toggle_1').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})
	
	$('#hotspot_dummy_2').on('focus',function(){
//		alert()
		setTimeout(function(){
			$('#toggle_2').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})

		$('#hotspot_dummy_3').on('focus',function(){
			setTimeout(function(){
				$('#toggle_3').focus().attr('role','button')
				$('#toggle_3').focus().attr('aria-label','hotspot 5 of 7. Press enter or space to enable popup')
				
				$('.hotspot_dummy,.dummy_popup').attr('aria-hidden','true')
			},5)
		})
	
	$('.label_content').on('focus',function(){
$('.label_class').attr('role','text');
		setTimeout(function(){
		 	$('.label_class').attr('role','none');
			//$('.label_heading').removeAttr('role');
		},300);
	})
	
	
	$('#dummy_1').on('focus',function(){
		//alert();
		//setTimeout(function(){
			$('.tab_index').eq(1).focus();
			$('#whole_container').removeAttr('role');
		//},10)		
	})
	$('#dummy_2').on('focus',function(){
		//setTimeout(function(){
			$('.tab_index').eq(0).focus();
		//},10)
	})
	
	//$('.hotspot').attr('aria-label','clickable hotspot');
	$('#text_container').attr('aria-label',$('#text_container').text());
	$('#heading_text').attr('aria-label',$('#heading_text').text())
	
	$('.label_btn').off('click').on('click',function(e){
		if(e.target.id=='show_all'){
			$('.hotspot').trigger('click')
			$('#show_all').hide();
			$('#hide_all').show()//.focus()//.attr('aria-hidden','true');
			setTimeout(function(){
				$('#hide_all').focus()
			},10)
//			alert('1')
//			$('.label_btn').focus();
//			$('#reset_btn').removeAttr('tabindex').attr('tabindex','0')
//			set_tab()
		}else{
			$('.close_button').trigger('click')
			$('#hide_all').hide();
			$('#show_all').show();
			setTimeout(function(){
				$('#show_all').focus()
			},10)
			
			//.attr('aria-hidden','true');
//			alert('2')
//			$('.label_btn').focus();
//			set_tab()
		}
	});
	
document.body.onkeyup = function(e){
//		alert()
		console.log(document.activeElement)
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
			if(e.target.id!='label_head_1'||e.target.id!='label_head_2'||e.target.id!='label_head_3'){
//				alert();
				$('#'+e.target.id).focus();
				$('#'+e.target.id).trigger('click');
			}
			
		}
		
	}

});
$(window).resize(function(){
  resizeApp();
});
var pageReload = function(){
	location.reload();
}
function set_tab(){
	if(begin_entered==false){
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#begin_container').addClass('tab_index');
		$('#begin_btn').addClass('tab_index');
		$('#begin_dummy,#begin_reverse_dummy').addClass('tab_index');
	}else{
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#text_container').addClass('tab_index');
		$('#heading_text').addClass('tab_index');
		$('.hotspot').addClass('tab_index');
		$('.label_content').addClass('tab_index');
		$('.label_content').addClass('tab_index');
		$('.close_button').addClass('tab_index');
		$('#reset_btn').addClass('tab_index');
		$('#dummy_1,#dummy_2,.dummy_popup,.hotspot_dummy,.label_btn').addClass('tab_index');
	}
	$('.tab_index').each(function(){
//		setTimeout(function(){
    		$('.tab_index').attr('tabindex','0')//.focus().blur();
//		},10)
  });
}
var begin_entered=false;
var direction_text='<span id="dir_span">Directions:</span> Click on each question mark to progress through the graphic. You may close the labels by clicking on the “X.”'

