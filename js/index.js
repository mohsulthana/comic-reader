$(document).ready(function(){

	$(".owl-carousel").owlCarousel({    
		loop: false,
		items:1,
		margin:0,
		stagePadding: 0,
		autoplay: false,
		nav: true,
		navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"]
	});
	
	dotcount = 1;
	
	jQuery('.owl-dot').each(function() {
		jQuery( this ).addClass( 'dotnumber' + dotcount);
		jQuery( this ).attr('data-info', dotcount);
		dotcount=dotcount+1;
	});
	
	slidecount = 1;
	
	jQuery('.owl-item').not('.cloned').each(function() {
		jQuery( this ).addClass( 'slidenumber' + slidecount);
		slidecount=slidecount+1;
	});
	
	jQuery('.owl-dot').each(function() {	
		grab = jQuery(this).data('info');		
		slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
		jQuery(this).css("background-image", "url(" + slidegrab + ")");
		jQuery(this).css("margin", '20px 0px');
	});
	
	amount = $('.owl-dot').length;
	gotowidth = '40';			
	jQuery('.owl-dot').css("height", gotowidth+"%");

});