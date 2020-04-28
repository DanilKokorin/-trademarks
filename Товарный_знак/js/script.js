$(document).ready(function(){
	$(".arrow-to-down").click(function(){
	    for(i = 1; i <= $('.headingContainer').children().length; i++){
	        $('.heading:nth-child(' + i + ')').css('margin-left', '0');
	    }
	});
	$(".menu").click(function(){
	    $(".top-menu").toggle(); 
	});
	$(".footer-button").click(function(){
	    $(".lower-menu").toggle(); 
	});
	$(".lower-menu2").click(function(){
	    $(".Moscow").toggle();
	    $(".St-Petersburg").toggle(); 
	    $(".lower-menu").toggle();
	});
	$(".lower-menu1").click(function(){
		$(".St-Petersburg").toggle(); 
	    $(".Moscow").toggle();
	    $(".lower-menu").toggle();
	});
	new WOW().init();
	var slideCount = $('.slider').children().length;
	var slideNow = 1;
	$('.right').click(function(){
	 	if(slideNow !== slideCount){
	 		slideNow++;
	 		$('.slider .slider-img:first-child').css('margin-left', '-' + 20 * (slideNow - 1) + '%');
	 	} else {
	 		slideNow = 1;
 		$('.slider .slider-img:first-child').css('margin-left', '-' + 20 * 0 + '%');
	 	}
	});
});  