$(window).scroll(function(){
	if($(this).scrollTop()>500){
		$("#gotoup").fadeIn();
	}else{
		$("#gotoup").fadeOut();
	}
});

$("#gotoup").click(function(){
	$("html, body").animate({
		scrollTop:0
	}, 500);
});